"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  color: string
  size: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Organic Cotton Tee",
      price: 35,
      originalPrice: 45,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcWlXeuQtho3ABhnWbatLt9G9B3rtnMhSP-3zeQWHuNRuIxqTgvmuUynb-khDtCep-NG_YwFNKfeYO9HPR2QjiPp_PhO7ukK6WwCfQrUy8HunRh0HKu4lJdPcYNMfp8GX2esvI1nulIUXPYL9IdYeS1wXmiS1TGMJHPYSpRHbBiNdrngBJHE-gB5QmXosxrTagHaoX1UP001-6bb2WvHyY0oTmdNd_lGG2vjx_lPvpZeVBu54GKZCc31UEL8OTfV5cp65YWv2li0o",
      color: "Forest Green",
      size: "M",
      quantity: 1,
    },
    {
      id: "2",
      name: "Botanical Print Canvas Tote",
      price: 30,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7MKpUL2bBvqI6Dna-lmGTH3ac9Jem9BMD2dppBn8cs3X5D2Z1AIb13xyJx4u1Me9rzZEVxIQCgQiDmqHR59dwjfMryeCL_vdl67lRl3CDkKYTQ83_f-xJXqRht-NbtUgT3yxNhmhEvWEvLYrLQ10MyNWL66k0AUXqHW3SXpCf4DuZv_G_1xAfVQbioiJ_CMkmfxOK_THkhOUFq4qtZSdVhDf3dglkhQ_B6Q2UjKA-N4Txd9qXxW0wcTfwgj95mfy_UYvV6aN5o2E",
      color: "Natural",
      size: "One Size",
      quantity: 2,
    },
  ])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((newItem: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
      )
      if (existingItem) {
        return prev.map((item) =>
          item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) return
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
