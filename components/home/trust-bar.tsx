import { Palette, Printer, Wallet } from "lucide-react"

const steps = [
  {
    icon: Palette,
    title: "1. Pick Design",
    description: "Choose from 50+ exclusive nature prints.",
  },
  {
    icon: Printer,
    title: "2. We Print Premium",
    description: "High-quality DTG printing on 100% cotton.",
  },
  {
    icon: Wallet,
    title: "3. Pay at Door",
    description: "Zero upfront cost. Inspect, then pay.",
  },
]

export function TrustBar() {
  return (
    <div
      id="how-it-works"
      className="bg-background py-12 border-b border-primary/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-primary/10">
          {steps.map((step) => (
            <div key={step.title} className="flex-1 flex items-center gap-4 p-4 md:first:pl-0">
              <div className="w-12 h-12 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <step.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-primary">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
