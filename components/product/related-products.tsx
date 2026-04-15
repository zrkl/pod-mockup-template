import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "./product-card"
import { products } from "@/lib/products"

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const relatedProducts = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4)

  if (relatedProducts.length === 0) return null

  return (
    <div className="mt-20 border-t border-border pt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">You Might Also Like</h2>
        <Link
          href="/shop"
          className="text-primary font-medium hover:underline text-sm flex items-center gap-1"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
