"use client"

import { Button } from "@/components/ui/button"
import { Award, Users, BookOpen, Phone } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const handleExploreClick = () => {
    const coursesSection = document.getElementById('courses')
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/banner.jpg"
          alt="Raja Sir's IAS Academy - Top Achievers and Faculty"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for text readability - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        {/* Brand Color Overlay - removed for clearer image */}
      </div>
     

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-secondary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
