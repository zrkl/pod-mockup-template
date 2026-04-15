import type { Metadata, Viewport } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { WishlistProvider } from "@/context/wishlist-context"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "7-SEVEN | Nature Boutique - Premium Print-on-Demand",
  description:
    "Premium sustainable apparel featuring exclusive nature-inspired artwork. Experience our zero-risk Cash on Delivery service.",
  keywords: ["POD", "print on demand", "nature", "sustainable", "apparel", "hoodies", "t-shirts", "COD"],
}

export const viewport: Viewport = {
  themeColor: "#064c39",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} bg-background`}>
      <body className="font-sans min-h-screen flex flex-col">
        <CartProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}
