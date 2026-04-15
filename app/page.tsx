import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/layout/cart-drawer"
import { HeroSection } from "@/components/home/hero-section"
import { TrustBar } from "@/components/home/trust-bar"
import { NewDropsSection } from "@/components/home/new-drops-section"
import { CollectionTeaser } from "@/components/home/collection-teaser"
import { FeaturesSection } from "@/components/home/features-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="flex-grow">
        <HeroSection />
        <TrustBar />
        <NewDropsSection />
        <CollectionTeaser />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  )
}
