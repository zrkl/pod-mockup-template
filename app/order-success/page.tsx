"use client";

import {
  CheckCircle,
  Package,
  Truck,
  Home,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  const orderId = searchParams.get("orderId") || "NB-2024-78542";
  const total = searchParams.get("total") || "458";

  const copyOrderId = () => {
    navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const timeline = [
    {
      icon: CheckCircle,
      title: "Order Confirmed",
      description: "Your order has been received",
      status: "completed",
      time: "Just now",
    },
    {
      icon: Package,
      title: "Processing",
      description: "We are preparing your order",
      status: "current",
      time: "Est. 1-2 hours",
    },
    {
      icon: Truck,
      title: "Shipped",
      description: "Your order is on its way",
      status: "pending",
      time: "Est. 1-2 days",
    },
    {
      icon: Home,
      title: "Delivered",
      description: "Package delivered to you",
      status: "pending",
      time: "Est. 3-5 days",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Success Header */}
      <div className="bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Order Confirmed!
          </h1>
          <p className="text-muted-foreground text-lg">
            Thank you for shopping with Nature Boutique
          </p>
        </div>
      </div>

      {/* Order Details Card */}
      <div className="max-w-2xl mx-auto px-4 -mt-4">
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          {/* Order ID Section */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                <p className="text-lg font-semibold text-foreground">
                  {orderId}
                </p>
              </div>
              <button
                onClick={copyOrderId}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-muted/80 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-primary" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Payment Info */}
          <div className="p-6 border-b border-border bg-amber-50 dark:bg-amber-950/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Cash on Delivery
                </h3>
                <p className="text-sm text-muted-foreground">
                  Please prepare{" "}
                  <span className="font-semibold text-foreground">
                    {total} MAD
                  </span>{" "}
                  in cash when your order arrives. Our delivery partner will
                  collect the payment upon delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="p-6">
            <h3 className="font-semibold text-foreground mb-6">Order Status</h3>
            <div className="space-y-0">
              {timeline.map((step, index) => (
                <div key={index} className="flex gap-4">
                  {/* Timeline Line & Icon */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.status === "completed"
                          ? "bg-primary text-primary-foreground"
                          : step.status === "current"
                            ? "bg-primary/20 text-primary border-2 border-primary"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div
                        className={`w-0.5 h-16 ${
                          step.status === "completed"
                            ? "bg-primary"
                            : "bg-border"
                        }`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <h4
                      className={`font-medium ${
                        step.status === "pending"
                          ? "text-muted-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {step.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-6 bg-card rounded-2xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Need Help?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="tel:+212600000000"
              className="flex items-center gap-3 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Call Us</p>
                <p className="text-sm text-muted-foreground">+212 600 000 000</p>
              </div>
            </a>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
            >
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-medium text-foreground">WhatsApp</p>
                <p className="text-sm text-muted-foreground">Chat with us</p>
              </div>
            </a>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-6 mb-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-colors"
          >
            Continue Shopping
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
