"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useSearchParams } from "next/navigation"

export function ShopHeader() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category") || "all"

  const categoryLabels: Record<string, string> = {
    all: "All Products",
    "t-shirts": "T-Shirts",
    hoodies: "Hoodies",
    sweatshirts: "Sweatshirts",
    accessories: "Accessories",
  }

  return (
    <div className="mb-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex text-sm text-muted-foreground mb-4">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3 h-3" />
          </li>
          <li>
            <span className="text-primary font-medium">
              {categoryLabels[category] || "New Arrivals"}
            </span>
          </li>
        </ol>
      </nav>

      {/* Title and Sort */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            {categoryLabels[category] || "New Arrivals"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            Premium organic apparel inspired by nature.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            Sort by:
          </span>
          <select className="block w-full pl-3 pr-10 py-2 text-sm border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary rounded-lg bg-card">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  )
}
