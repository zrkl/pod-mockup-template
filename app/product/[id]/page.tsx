import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/layout/cart-drawer"
import { ProductDetail } from "@/components/product/product-detail"
import { RelatedProducts } from "@/components/product/related-products"
import { getProductById, products } from "@/lib/products"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return {
      title: "Product Not Found | 7-SEVEN",
    }
  }

  return {
    title: `${product.name} | 7-SEVEN Nature Boutique`,
    description: product.description,
  }
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pt-28">
        <ProductDetail product={product} />
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </main>
      <Footer />
    </>
  )
}
