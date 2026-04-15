import Link from "next/link"
import { TreeDeciduous, ArrowRight } from "lucide-react"

export function CollectionTeaser() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl overflow-hidden bg-primary text-primary-foreground relative">
          {/* Background Texture */}
          <div
            className="absolute inset-0 bg-cover opacity-10 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=987&auto=format&fit=crop')",
            }}
          />

          {/* Content */}
          <div className="p-12 md:p-20 flex flex-col justify-center relative z-10">
            <span className="text-accent font-bold tracking-wider text-sm mb-4 uppercase">
              Sustainability First
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Plant a Tree with Every Order
            </h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              We&apos;ve partnered with global reforestation projects. For every item you
              purchase, we plant a tree in your name. Together, we&apos;ve planted over
              50,000 trees.
            </p>
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-colors w-fit"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Decorative Side */}
          <div className="hidden md:flex items-center justify-center relative z-10 p-12">
            <div className="relative">
              {/* Large Tree Icon */}
              <div className="w-48 h-48 rounded-full bg-accent/20 flex items-center justify-center">
                <TreeDeciduous className="w-24 h-24 text-accent" />
              </div>
              {/* Stats */}
              <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-accent">50K+</div>
                <div className="text-sm text-primary-foreground/70">Trees Planted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
