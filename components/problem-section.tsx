"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6 text-balance">
          Still Figuring Out UPSC on Your Own?
        </h2>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground text-center mb-8">
          Stop guessing. Start preparing with the right guidance.
        </p>

        {/* Stats and Proof */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mb-12 border border-border shadow-lg">
          <p className="text-center text-lg md:text-xl font-semibold text-foreground mb-6">
            21+ Years of Mentorship | 533+ Officers Trained
          </p>
          <p className="text-center text-primary font-bold text-2xl md:text-3xl">
            AIR 1, AIR 89, AIR 53 - Results that didn&apos;t happen by chance.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg shadow-primary/30">
            <Phone className="mr-2 h-5 w-5" />
            Talk to a Mentor Now
          </Button>
          <a href="tel:9884554654" className="text-primary font-bold text-lg hover:underline">
            📞 9884 554 654
          </a>
        </div>
      </div>
    </section>
  )
}
