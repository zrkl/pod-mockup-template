import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/layout/cart-drawer"
import { ProductGrid } from "@/components/shop/product-grid"
import { ShopSidebar } from "@/components/shop/shop-sidebar"
import { ShopHeader } from "@/components/shop/shop-header"

export const metadata = {
  title: "Shop | 7-SEVEN Nature Boutique",
  description: "Browse our collection of premium nature-inspired apparel.",
}

export default function ShopPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        <ShopHeader />
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <ShopSidebar />
          <div className="flex-1">
            <Suspense fallback={<ProductGridSkeleton />}>
              <ProductGrid />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[4/5] bg-muted rounded-lg mb-4" />
          <div className="h-5 bg-muted rounded w-3/4 mb-2" />
          <div className="h-4 bg-muted rounded w-1/2" />
        </div>
      ))}
    </div>
  )
}
