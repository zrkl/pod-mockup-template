"use client";

import { Heart, ShoppingBag, Trash2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/context/wishlist-context";
import { useCart } from "@/context/cart-context";
import { products } from "@/lib/products";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const wishlistProducts = items
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0],
      quantity: 1,
    });
    removeFromWishlist(product.id);
  };

  const handleAddAllToCart = () => {
    wishlistProducts.forEach((product) => {
      if (product) {
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          size: product.sizes[0],
          quantity: 1,
        });
      }
    });
    items.forEach((id) => removeFromWishlist(id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-foreground">
                  My Wishlist
                </h1>
                <p className="text-muted-foreground">
                  {wishlistProducts.length}{" "}
                  {wishlistProducts.length === 1 ? "item" : "items"} saved
                </p>
              </div>
            </div>
            {wishlistProducts.length > 0 && (
              <button
                onClick={handleAddAllToCart}
                className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Add All to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Save items you love by clicking the heart icon on any product
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Mobile Add All Button */}
            <button
              onClick={handleAddAllToCart}
              className="sm:hidden w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors mb-6"
            >
              <ShoppingBag className="w-4 h-4" />
              Add All to Cart
            </button>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistProducts.map(
                (product) =>
                  product && (
                    <div
                      key={product.id}
                      className="bg-card rounded-2xl overflow-hidden border border-border group"
                    >
                      <div className="relative aspect-square bg-muted">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          className="absolute top-3 right-3 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="p-4">
                        <Link href={`/product/${product.id}`}>
                          <h3 className="font-medium text-foreground mb-1 hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-3">
                          {product.category}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-foreground">
                            {product.price} MAD
                          </span>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
