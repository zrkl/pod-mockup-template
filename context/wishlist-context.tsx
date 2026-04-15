"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Product } from "@/lib/products"

interface WishlistContextType {
  items: Product[]
  addItem: (item: Product) => void
  removeItem: (id: string) => void
  toggleItem: (item: Product) => void
  isInWishlist: (id: string) => boolean
  clearWishlist: () => void
  totalItems: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([])

  const addItem = useCallback((item: Product) => {
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev
      return [...prev, item]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const toggleItem = useCallback((item: Product) => {
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) {
        return prev.filter((i) => i.id !== item.id)
      }
      return [...prev, item]
    })
  }, [])

  const isInWishlist = useCallback(
    (id: string) => {
      return items.some((item) => item.id === id)
    },
    [items]
  )

  const clearWishlist = useCallback(() => {
    setItems([])
  }, [])

  const totalItems = items.length

  return (
    <WishlistContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        toggleItem,
        isInWishlist,
        clearWishlist,
        totalItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
