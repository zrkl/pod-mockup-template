"use client"

import { X, Plus, Minus, Truck, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/cart-context"

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-forest-dark/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md h-full bg-card/95 backdrop-blur-xl shadow-2xl border-l border-border flex flex-col animate-slideIn">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
          <div className="flex items-baseline gap-3">
            <h2 className="text-xl font-bold text-foreground">Shopping Bag</h2>
            <span className="text-sm font-medium text-primary">{totalItems} items</span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto cart-scroll p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-lg font-medium text-foreground mb-2">Your bag is empty</p>
              <p className="text-sm text-muted-foreground mb-6">
                Add some items to get started
              </p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="group flex gap-4">
                {/* Thumbnail */}
                <div className="w-24 h-32 shrink-0 rounded-lg overflow-hidden relative bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-foreground leading-tight pr-4">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-red-500 transition-colors p-1 -mt-1 -mr-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.color} / {item.size}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity Control */}
                    <div className="flex items-center border border-border rounded-lg h-8 bg-background">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors rounded-l-lg"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors rounded-r-lg"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <span className="font-bold text-foreground">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-muted/50 border-t border-border shrink-0 space-y-4 backdrop-blur-sm">
            {/* Subtotal */}
            <div className="flex items-end justify-between">
              <div>
                <span className="text-sm font-medium text-muted-foreground block mb-1">
                  Subtotal
                </span>
                <div className="flex items-center gap-2 text-xs text-primary/80 bg-primary/10 px-2 py-1 rounded w-fit">
                  <Truck className="w-3 h-3" />
                  <span>COD Available</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-foreground tracking-tight">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Note */}
            <p className="text-xs text-muted-foreground text-center">
              Shipping &amp; taxes calculated at checkout.
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                href="/cart"
                onClick={closeCart}
                className="flex items-center justify-center px-4 py-3.5 border-2 border-primary/40 text-primary font-bold rounded-xl hover:bg-primary/5 transition-all"
              >
                View Full Cart
              </Link>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="flex items-center justify-center gap-2 px-4 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Order Now (COD)
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
