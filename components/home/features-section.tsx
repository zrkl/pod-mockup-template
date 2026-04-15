import { Truck, RotateCcw, Shield, Leaf } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on all orders over $50. Fast and reliable shipping.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Not satisfied? Return within 30 days for a full refund.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Pay with cash on delivery. No upfront payment required.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable materials and eco-conscious production methods.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to providing the best shopping experience with quality
            products and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
