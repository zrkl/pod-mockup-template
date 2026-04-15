import Link from "next/link"
import { Mail, Globe } from "lucide-react"

const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "/shop" },
    { label: "Men", href: "/shop?category=t-shirts" },
    { label: "Women", href: "/shop?category=hoodies" },
    { label: "Accessories", href: "/shop?category=accessories" },
  ],
  support: [
    { label: "Order Status", href: "/order-status" },
    { label: "Shipping & Delivery", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "FAQ", href: "/faq" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="font-bold text-xl tracking-tight">7-SEVEN</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium organic prints inspired by the wild. We bring the serenity of nature
              to your wardrobe.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Connected</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Join our newsletter for exclusive eco-tips and offers.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/50" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-10 pr-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-sm text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-4 py-2 rounded text-sm transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} 7-SEVEN. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground">
              Terms
            </Link>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>United States</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
