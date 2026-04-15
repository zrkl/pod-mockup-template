"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronDown, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "t-shirts", label: "T-Shirts", count: 124 },
  { id: "hoodies", label: "Hoodies", count: 45 },
  { id: "sweatshirts", label: "Sweatshirts", count: 28 },
  { id: "accessories", label: "Accessories", count: 12 },
]

const sizes = ["XS", "S", "M", "L", "XL", "2XL"]

export function ShopSidebar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("category")?.split(",") || []
  )
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const toggleCategory = (categoryId: string) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((c) => c !== categoryId)
      : [...selectedCategories, categoryId]

    setSelectedCategories(newCategories)

    const params = new URLSearchParams(searchParams.toString())
    if (newCategories.length > 0) {
      params.set("category", newCategories.join(","))
    } else {
      params.delete("category")
    }
    router.push(`/shop?${params.toString()}`)
  }

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-card border border-border rounded-lg text-primary font-medium shadow-sm"
        >
          <Filter className="w-4 h-4" />
          Filters & Sorting
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "w-full lg:w-64 flex-shrink-0",
          mobileFiltersOpen ? "block" : "hidden lg:block"
        )}
      >
        <div className="lg:sticky lg:top-24 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center justify-between">
              Apparel Type
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center group cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => toggleCategory(category.id)}
                    className="h-5 w-5 text-primary border-border rounded focus:ring-primary transition duration-150 ease-in-out"
                  />
                  <span className="ml-3 text-muted-foreground group-hover:text-primary transition-colors">
                    {category.label}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground font-mono">
                    {category.count}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={cn(
                    "w-10 h-10 rounded-lg border flex items-center justify-center text-sm font-medium transition-all",
                    selectedSizes.includes(size)
                      ? "border-2 border-primary bg-primary/10 text-primary font-bold shadow-sm"
                      : "border-border hover:border-primary hover:text-primary text-muted-foreground"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Price Range */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Price Range</h3>
            <div className="relative h-2 bg-muted rounded-full mb-6">
              <div className="absolute h-full bg-primary rounded-full left-1/4 right-1/4" />
              <div className="absolute h-4 w-4 bg-card border-2 border-primary rounded-full top-1/2 transform -translate-y-1/2 left-1/4 shadow cursor-pointer hover:scale-110 transition-transform" />
              <div className="absolute h-4 w-4 bg-card border-2 border-primary rounded-full top-1/2 transform -translate-y-1/2 right-1/4 shadow cursor-pointer hover:scale-110 transition-transform" />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>$25</span>
              <span>$150</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
