"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  Trash2,
  Lock,
  Truck,
  ShieldCheck,
  Package,
  Tag,
  ChevronDown,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/layout/cart-drawer"
import { useCart } from "@/context/cart-context"

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart()

  const shipping = 15
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 pt-28">
        <div className="max-w-7xl mx-auto">
          {/* Progress Steps */}
          <div className="hidden md:flex items-center justify-center space-x-4 text-sm font-medium mb-8">
            <div className="flex items-center text-primary">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs mr-2">
                1
              </span>
              Cart
            </div>
            <div className="w-12 h-0.5 bg-border" />
            <div className="flex items-center text-muted-foreground">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs mr-2">
                2
              </span>
              Details
            </div>
            <div className="w-12 h-0.5 bg-border" />
            <div className="flex items-center text-muted-foreground">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs mr-2">
                3
              </span>
              Complete
            </div>
          </div>

          <h1 className="text-3xl font-bold text-primary mb-8">
            Shopping Cart{" "}
            <span className="text-lg font-medium text-muted-foreground ml-2">
              ({totalItems} items)
            </span>
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Package className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-8">
                Looks like you haven&apos;t added any items yet.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
              {/* Left Column: Cart Items */}
              <div className="lg:col-span-8">
                <div className="bg-card rounded-2xl shadow-sm overflow-hidden border border-border">
                  {/* Table Header */}
                  <div className="hidden sm:grid grid-cols-12 gap-4 border-b border-border bg-muted/50 px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-3 text-center">Quantity</div>
                    <div className="col-span-3 text-right">Total</div>
                  </div>

                  {/* Cart Items */}
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className={`p-6 sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center group hover:bg-muted/30 transition-colors ${
                        index !== items.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      {/* Product Info */}
                      <div className="col-span-6 flex items-center gap-6">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-muted flex-shrink-0 border border-border">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.color} / Size {item.size}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="mt-2 text-xs text-red-500 hover:text-red-600 font-medium flex items-center gap-1 transition-colors"
                          >
                            <Trash2 className="w-3 h-3" /> Remove
                          </button>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="col-span-3 mt-4 sm:mt-0 flex justify-center">
                        <div className="flex items-center bg-muted rounded-lg p-1 border border-border">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center rounded bg-card text-muted-foreground shadow-sm hover:text-primary transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-10 text-center text-sm font-semibold text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center rounded bg-primary text-primary-foreground shadow-md shadow-primary/30 hover:bg-primary/90 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-3 mt-4 sm:mt-0 text-right">
                        <span className="block text-xl font-bold text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        {item.originalPrice && (
                          <span className="block text-xs text-muted-foreground line-through">
                            ${(item.originalPrice * item.quantity).toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-6 flex justify-between items-center">
                  <Link
                    href="/shop"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="mr-1 w-4 h-4" /> Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-4 mt-8 lg:mt-0">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-card rounded-2xl shadow-xl shadow-muted/50 border border-border p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">
                      Order Summary
                    </h2>

                    {/* Breakdown */}
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Subtotal</span>
                        <span className="font-medium text-foreground">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground items-start">
                        <div className="flex flex-col">
                          <span className="flex items-center gap-1">
                            COD Shipping
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Cash handling fee included
                          </span>
                        </div>
                        <span className="font-medium text-foreground">
                          ${shipping.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Tax estimate</span>
                        <span className="font-medium text-foreground">
                          ${tax.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-dashed border-border my-4" />

                    {/* Total */}
                    <div className="mb-6">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-base font-bold text-muted-foreground">
                          Total Due at Delivery
                        </span>
                        <span className="text-2xl font-extrabold text-primary">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                      <div className="bg-mint rounded-lg p-2 flex items-center justify-center gap-2">
                        <Truck className="w-4 h-4 text-primary" />
                        <p className="text-xs font-medium text-primary">
                          Pay with Cash or Card upon arrival
                        </p>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Link
                      href="/checkout"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                    >
                      Proceed to COD Checkout
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Trust Signals */}
                    <div className="mt-6 grid grid-cols-2 gap-2 text-center">
                      <div className="flex flex-col items-center p-2 rounded bg-muted/50">
                        <ShieldCheck className="w-5 h-5 text-muted-foreground mb-1" />
                        <span className="text-[10px] uppercase font-bold text-muted-foreground">
                          Buyer Protection
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-2 rounded bg-muted/50">
                        <Package className="w-5 h-5 text-muted-foreground mb-1" />
                        <span className="text-[10px] uppercase font-bold text-muted-foreground">
                          Easy Returns
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Coupon Code */}
                  <div className="bg-card rounded-xl border border-border p-4 flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors group">
                    <span className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      Add Coupon Code
                    </span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
