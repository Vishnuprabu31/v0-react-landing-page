"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function UrgencyCTASection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-primary to-primary/80">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          If You&apos;re Serious About UPSC, Don&apos;t Delay This
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-2xl text-primary-foreground/90 mb-3 text-balance">
          Every year delayed is one more attempt lost.
        </p>
        <p className="text-xl md:text-2xl font-semibold text-primary-foreground mb-12 text-balance">
          Start early. Prepare right.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:9884554654">
            <Button
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 shadow-lg shadow-black/20 font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Connect with our Academic Counsellor
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
