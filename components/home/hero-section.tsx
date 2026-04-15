import Link from "next/link"
import Image from "next/image"
import { Play, Truck, ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-primary overflow-hidden">
      {/* Background Decorative Elements */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop')",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-primary-foreground text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Autumn Collection &apos;24
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight text-balance">
            Wear the Wild.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              Pay at Your Door.
            </span>
          </h1>

          <p className="text-lg text-primary-foreground/80 max-w-md font-light leading-relaxed">
            Premium sustainable hoodies featuring exclusive nature-inspired artwork.
            Experience our zero-risk Cash on Delivery service today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/shop"
              className="px-8 py-4 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors shadow-lg shadow-black/20 text-center"
            >
              Shop New Arrivals
            </Link>
            <Link
              href="#how-it-works"
              className="px-8 py-4 bg-transparent border border-white/30 text-primary-foreground font-medium rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              How COD Works
            </Link>
          </div>

          <div className="flex items-center gap-6 text-primary-foreground/60 text-sm pt-4">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-accent" />
              Free Shipping
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent" />
              Quality Guarantee
            </div>
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="relative z-10 lg:h-[600px] flex items-center justify-center group">
          {/* Abstract blob behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-50" />

          {/* Main Product Image */}
          <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 bg-white/5 backdrop-blur-sm border border-white/10 transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi4qZCE1dYMRuHRdY0gxQa8al5CVF0wg2Qa1nmrMvEoSeJiX83AYoBY0KYB1V6beg0VE_jCALw0Gc6FjqCb81ZPGanqeuWP_H02eL9qHdCqVdEZoor0gIySJdaM1MV8p-K9Ff7L3kLmz8-_ianur0FJtGpylTgyJ-94Skmud7u8xHSBkgjSiVdfK5tRfvmVCwqjk3NxlktJzpQJ-Yib2Wat_h1BO7kkMSgMl2hxEjFnIMVTSzD-RRSYjwXfH4kKfopzzTyTEjUH3o"
              alt="Premium forest green hoodie mockup on model in nature"
              fill
              className="object-cover"
              priority
            />

            {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur text-primary px-4 py-2 rounded shadow-lg font-bold text-sm">
              $65.00
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
