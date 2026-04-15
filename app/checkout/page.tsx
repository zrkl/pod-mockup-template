"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Lock,
  Truck,
  Wallet,
  User,
  Phone,
  Home,
  MapPin,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Globe,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/layout/cart-drawer"
import { useCart } from "@/context/cart-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const shipping = 5
  const total = subtotal + shipping

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    clearCart()
    router.push("/order-success")
  }

  if (items.length === 0) {
    return (
      <>
        <Header />
        <CartDrawer />
        <main className="flex-grow flex items-center justify-center py-20 px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Your cart is empty
            </h1>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* COD Trust Banner */}
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 flex items-start gap-4 shadow-sm">
              <div className="bg-accent/20 p-2 rounded-full shrink-0">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">
                  Pay Cash on Delivery
                </h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  No online payment needed now. Simply pay cash when your order
                  arrives safely at your doorstep. This is our commitment to a
                  worry-free shopping experience.
                </p>
              </div>
            </div>

            {/* Shipping Details Form */}
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">
                  1
                </span>
                Shipping Details
              </h2>

              <div className="space-y-6">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullname"
                      className="block text-sm font-medium text-muted-foreground"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="John Doe"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground shadow-sm text-sm transition-shadow"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-muted-foreground flex justify-between"
                    >
                      <span>WhatsApp / Phone</span>
                      <span className="text-xs text-primary font-medium">
                        *Crucial for delivery
                      </span>
                    </label>
                    <div className="relative flex rounded-lg shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-border bg-muted text-muted-foreground text-sm font-medium">
                        +1
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(555) 123-4567"
                        required
                        className="flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Delivery Address
                  </label>
                  <div className="relative">
                    <Home className="absolute top-3 left-3 w-4 h-4 text-muted-foreground" />
                    <textarea
                      id="address"
                      name="address"
                      rows={3}
                      placeholder="Street address, Apt, Suite, etc."
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground shadow-sm text-sm"
                    />
                  </div>
                </div>

                {/* City, State, Zip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-muted-foreground"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="New York"
                      required
                      className="block w-full px-3 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground shadow-sm text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-muted-foreground"
                    >
                      State / Province
                    </label>
                    <select
                      id="state"
                      name="state"
                      required
                      className="block w-full px-3 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground shadow-sm text-sm"
                    >
                      <option value="">Select...</option>
                      <option value="NY">New York</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="zip"
                      className="block text-sm font-medium text-muted-foreground"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="10001"
                      required
                      className="block w-full px-3 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground shadow-sm text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 mt-10">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">
                  2
                </span>
                Payment Method
              </h2>

              <div className="border-2 border-primary bg-primary/5 p-4 rounded-xl flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      Cash on Delivery (COD)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Pay with cash upon receipt.
                    </p>
                  </div>
                </div>
                <div className="text-primary">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>

              {/* Submit Button - Mobile */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="lg:hidden w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Processing..."
                ) : (
                  <>
                    Confirm Order & Pay on Delivery
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Summary Card */}
              <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
                <div className="bg-primary/5 p-6 border-b border-border">
                  <h3 className="text-lg font-bold text-foreground">
                    Order Summary
                  </h3>
                </div>

                {/* Items List */}
                <div className="p-6 space-y-6 max-h-[300px] overflow-y-auto cart-scroll">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-20 rounded-lg bg-muted shrink-0 overflow-hidden relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-foreground">
                          {item.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Size: {item.size} | Color: {item.color}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-sm font-semibold text-muted-foreground">
                            x{item.quantity}
                          </p>
                          <p className="text-sm font-bold text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cost Breakdown */}
                <div className="bg-muted/50 p-6 space-y-3 border-t border-border">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Shipping (Standard)</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border my-4 pt-4 flex justify-between items-center">
                    <div>
                      <p className="text-base font-bold text-primary">
                        Total to Pay on Delivery
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Includes all taxes
                      </p>
                    </div>
                    <span className="text-2xl font-bold text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  {/* Submit Button - Desktop */}
                  <button
                    type="submit"
                    form="checkout-form"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="hidden lg:flex w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all items-center justify-center gap-2 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        Confirm Order & Pay on Delivery
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* Trust Signals */}
                  <div className="flex justify-center gap-6 mt-4 pt-2">
                    <div className="flex flex-col items-center gap-1 group">
                      <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wide text-muted-foreground">
                        Secure
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 group">
                      <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                        <Truck className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wide text-muted-foreground">
                        Fast Ship
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 group">
                      <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                        <RotateCcw className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wide text-muted-foreground">
                        Returns
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Shipping Banner */}
              <div className="rounded-xl overflow-hidden shadow-sm h-32 relative">
                <div className="absolute inset-0 bg-primary/20 z-10" />
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=987&auto=format&fit=crop')",
                  }}
                />
                <div className="absolute bottom-3 left-4 z-20 text-primary-foreground font-medium text-sm drop-shadow-md flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  Global Shipping Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
