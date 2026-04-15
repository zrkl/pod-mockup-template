"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus, Heart, Truck } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCart } from "@/context/cart-context"
import { useWishlist } from "@/context/wishlist-context"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useCart()
  const { toggleItem, isInWishlist } = useWishlist()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.garmentImage,
      color: product.colors[0].name,
      size: product.sizes[Math.floor(product.sizes.length / 2)],
    })
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleItem(product)
  }

  const badgeStyles = {
    new: "bg-primary text-primary-foreground",
    sale: "bg-red-500 text-white",
    "best-seller": "bg-amber-500 text-white",
  }

  const badgeLabels = {
    new: "New",
    sale: product.discount ? `-${product.discount}%` : "Sale",
    "best-seller": "Best Seller",
  }

  return (
    <Link href={`/product/${product.id}`} className="group cursor-pointer block">
      <div className="product-card relative w-full aspect-[4/5] bg-muted rounded-lg overflow-hidden mb-4">
        {/* Garment View (Default) */}
        <div className="garment-view absolute inset-0 z-10 transition-opacity duration-500 ease-in-out">
          <Image
            src={product.garmentImage}
            alt={product.name}
            fill
            className="object-cover"
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Badge */}
          {product.badge && (
            <div
              className={cn(
                "absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded",
                badgeStyles[product.badge]
              )}
            >
              {badgeLabels[product.badge]}
            </div>
          )}
          {/* COD Badge */}
          {product.codAvailable && (
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
              <Truck className="w-3 h-3" />
              COD
            </div>
          )}
        </div>

        {/* Design View (Hover) */}
        <div className="design-view absolute inset-0 z-0 opacity-0 bg-primary/5 flex items-center justify-center transition-all duration-500 ease-in-out">
          <div className="relative w-3/4 h-3/4">
            <Image
              src={product.designImage}
              alt={`${product.name} design`}
              fill
              className="object-contain drop-shadow-xl"
              sizes="(max-width: 640px) 75vw, (max-width: 1024px) 37vw, 18vw"
            />
          </div>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          className={cn(
            "absolute top-3 left-3 z-20 p-2 rounded-full shadow-sm transition-all",
            isInWishlist(product.id)
              ? "bg-red-500 text-white"
              : "bg-white/90 text-muted-foreground hover:text-red-500"
          )}
        >
          <Heart className={cn("w-4 h-4", isInWishlist(product.id) && "fill-current")} />
        </button>

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-card text-primary rounded-full shadow-lg flex items-center justify-center translate-y-14 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">{product.material}</p>
        </div>
        <div className="text-right">
          <span className="font-medium text-primary">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="block text-xs text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
