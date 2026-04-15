"use client"

import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product/product-card"
import { products } from "@/lib/products"

export function ProductGrid() {
  const searchParams = useSearchParams()
  const categoryFilter = searchParams.get("category")

  const filteredProducts = categoryFilter
    ? products.filter((p) => {
        const categories = categoryFilter.split(",")
        return categories.includes(p.category)
      })
    : products

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </div>
        <p className="text-lg font-medium text-foreground mb-2">No products found</p>
        <p className="text-sm text-muted-foreground">
          Try adjusting your filters to find what you&apos;re looking for.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
      {filteredProducts.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 3} />
      ))}
    </div>
  )
}
