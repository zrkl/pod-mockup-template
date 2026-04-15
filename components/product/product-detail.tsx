"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Star,
  StarHalf,
  Wallet,
  Plus,
  Minus,
  ShoppingCart,
  Check,
  Truck,
  Ruler,
  ZoomIn,
} from "lucide-react"
import type { Product } from "@/lib/products"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart()
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[Math.floor(product.sizes.length / 2)])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("material")
  const [mainImage, setMainImage] = useState(product.garmentImage)

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedColor.name}-${selectedSize}`,
      name: product.name,
      price: product.price,
      image: product.garmentImage,
      color: selectedColor.name,
      size: selectedSize,
    })
  }

  const productImages = [
    product.garmentImage,
    product.designImage,
    product.garmentImage,
    product.designImage,
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-muted-foreground mb-6 md:mb-10 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-border" />
        <Link href="/shop" className="hover:text-primary transition-colors">
          Shop
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-border" />
        <Link
          href={`/shop?category=${product.category}`}
          className="hover:text-primary transition-colors capitalize"
        >
          {product.category.replace("-", " ")}
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-border" />
        <span className="text-primary font-medium">{product.name}</span>
      </nav>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto scrollbar-hide lg:w-24 lg:h-[600px] shrink-0 pb-2 lg:pb-0">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                className={cn(
                  "relative w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden shrink-0 transition-all",
                  mainImage === img
                    ? "border-2 border-primary ring-2 ring-primary/20"
                    : "border border-border opacity-70 hover:opacity-100"
                )}
              >
                <Image
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative w-full rounded-xl lg:rounded-2xl overflow-hidden aspect-[4/5] bg-muted shadow-sm group">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-cover transform transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Badge */}
            <div className="absolute top-4 left-4 bg-card/90 backdrop-blur text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wide">
              {product.material.split("•")[0]}
            </div>
            {/* Zoom Icon */}
            <button className="absolute bottom-4 right-4 bg-card/80 hover:bg-card p-2 rounded-full shadow-md text-muted-foreground transition-all opacity-0 group-hover:opacity-100">
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="mt-10 lg:mt-0 lg:col-span-5 lg:pl-4">
          {/* Header Info */}
          <div className="mb-6 border-b border-border pb-6">
            <div className="flex items-center justify-between mb-2">
              {product.badge && (
                <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                  {product.badge === "best-seller"
                    ? "Best Seller"
                    : product.badge === "sale"
                    ? "Sale"
                    : "New"}
                </span>
              )}
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <StarHalf className="w-4 h-4 fill-current" />
                <span className="text-muted-foreground ml-1 text-xs">(128 reviews)</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 tracking-tight">
              {product.name}
            </h1>
            <div className="flex items-end gap-3">
              <p className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </p>
              {product.originalPrice && (
                <>
                  <p className="text-lg text-muted-foreground line-through mb-1">
                    ${product.originalPrice.toFixed(2)}
                  </p>
                  <span className="text-sm font-medium text-red-500 mb-1.5 ml-auto">
                    Save{" "}
                    {Math.round(
                      ((product.originalPrice - product.price) / product.originalPrice) * 100
                    )}
                    %
                  </span>
                </>
              )}
            </div>
          </div>

          {/* COD Trust Badge */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8 flex items-start gap-3">
            <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
              <Wallet className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm mb-0.5">
                Cash on Delivery Available
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Pay securely with cash when your order arrives at your doorstep. No
                credit card required upfront.
              </p>
            </div>
          </div>

          {/* Selection Grid */}
          <div className="space-y-6">
            {/* Colors */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Color: <span className="text-muted-foreground font-normal">{selectedColor.name}</span>
              </h3>
              <div className="flex items-center space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    aria-label={color.name}
                    className={cn(
                      "w-8 h-8 rounded-full cursor-pointer shadow-sm hover:scale-110 transition-transform",
                      selectedColor.name === color.name
                        ? "ring-2 ring-offset-2 ring-primary"
                        : "ring-1 ring-border"
                    )}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-foreground">Size</h3>
                <button className="text-xs text-primary hover:underline flex items-center gap-1">
                  <Ruler className="w-3 h-3" /> Size Guide
                </button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "relative flex items-center justify-center rounded-lg py-3 text-sm font-medium transition-all shadow-sm",
                      selectedSize === size
                        ? "border-2 border-primary bg-primary/5 text-primary font-bold ring-1 ring-primary/20"
                        : "border border-border bg-card hover:border-primary hover:bg-primary/5 text-foreground"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Quantity */}
            <div className="flex items-center rounded-lg border border-border bg-card w-full sm:w-32 h-12">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full text-center bg-transparent border-none p-0 text-foreground font-medium focus:ring-0"
              />
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>

          {/* Quick Info */}
          <div className="mt-6 flex items-center gap-6 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green-500" />
              {product.stock === "in-stock"
                ? "In Stock"
                : product.stock === "low-stock"
                ? "Low Stock"
                : "Out of Stock"}
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4" />
              Free Shipping over $50
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10 border-t border-border pt-6">
            <div className="flex border-b border-border mb-6">
              {[
                { id: "material", label: "Material Info" },
                { id: "size", label: "Size Guide" },
                { id: "shipping", label: "Shipping Time" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "pb-3 px-1 mr-6 text-sm font-medium transition-colors",
                    activeTab === tab.id
                      ? "text-primary border-b-2 border-primary font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
              {activeTab === "material" && (
                <>
                  <p>{product.description}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Weight: 180 g/m² (Medium Weight)</li>
                    <li>Pre-shrunk fabric to minimize shrinkage</li>
                    <li>Eco-friendly water-based inks</li>
                    <li>Side-seamed construction for a tailored fit</li>
                  </ul>
                </>
              )}
              {activeTab === "size" && (
                <p>
                  Our garments are designed for a comfortable, true-to-size fit. If
                  you prefer a looser fit, we recommend sizing up. Check our detailed
                  size chart for exact measurements.
                </p>
              )}
              {activeTab === "shipping" && (
                <p>
                  Standard shipping takes 5-7 business days. Express shipping (2-3
                  days) is available at checkout. Cash on Delivery orders may take
                  an additional 1-2 days.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
