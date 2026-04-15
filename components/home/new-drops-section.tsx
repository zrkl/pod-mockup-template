import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/product/product-card"
import { products } from "@/lib/products"

export function NewDropsSection() {
  // Get first 4 products for the new drops grid
  const newDrops = products.slice(0, 4)

  return (
    <section id="new-drops" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              New Drops
            </h2>
            <p className="text-muted-foreground">
              Fresh from the forest. Limited edition prints.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newDrops.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded text-sm font-medium hover:bg-muted transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
