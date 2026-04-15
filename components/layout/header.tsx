"use client"

import Link from "next/link"
import { Search, User, ShoppingBag, Heart, Menu, X } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useWishlist } from "@/context/wishlist-context"
import { useState } from "react"

const navLinks = [
  { href: "/shop", label: "New Drops" },
  { href: "/shop?category=t-shirts", label: "Men" },
  { href: "/shop?category=hoodies", label: "Women" },
  { href: "/shop", label: "Collections" },
]

export function Header() {
  const { totalItems, openCart } = useCart()
  const { totalItems: wishlistItems } = useWishlist()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 glass-header transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground group-hover:rotate-45 transition-transform duration-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-primary tracking-tight uppercase">
            7-SEVEN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Utility Icons */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 text-muted-foreground hover:bg-primary/10 rounded-full transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <Link
            href="/wishlist"
            className="hidden sm:flex relative p-2 text-muted-foreground hover:bg-primary/10 rounded-full transition-colors"
          >
            <Heart className="w-5 h-5" />
            {wishlistItems > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </Link>

          <button
            className="hidden sm:flex p-2 text-muted-foreground hover:bg-primary/10 rounded-full transition-colors"
            aria-label="Account"
          >
            <User className="w-5 h-5" />
          </button>

          <button
            onClick={openCart}
            className="relative p-2 text-muted-foreground hover:bg-primary/10 rounded-full transition-colors group"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full ring-2 ring-background" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:bg-primary/10 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-card border-b border-border">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/wishlist"
              className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className="w-4 h-4" />
              Wishlist
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
