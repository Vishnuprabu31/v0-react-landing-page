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
          src="/placeholder.jpg"
          alt="Raja Sir's IAS Academy - Top Achievers and Faculty"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for text readability - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        {/* Brand Color Overlay - removed for clearer image */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10 w-full">
        {/* Stats positioned at top left and top right - fully to edges */}
        <div className="absolute top-8 md:top-12 left-0 -ml-2 md:-ml-4">
          <div className="bg-white/10 backdrop-blur-md px-3 md:px-5 py-3 md:py-5 rounded-xl border border-white/20 text-center">
            <p className="text-3xl md:text-5xl font-bold text-white mb-1">21</p>
            <p className="text-xs md:text-sm text-secondary/90 whitespace-nowrap">Years of Excellence</p>
          </div>
        </div>

        <div className="absolute top-8 md:top-12 right-0 -mr-2 md:-mr-4">
          <div className="bg-white/10 backdrop-blur-md px-3 md:px-5 py-3 md:py-5 rounded-xl border border-white/20 text-center">
            <p className="text-3xl md:text-5xl font-bold text-white mb-1">533+</p>
            <p className="text-xs md:text-sm text-secondary/90 whitespace-nowrap">Officers Produced</p>
          </div>
        </div>

        {/* Center content with quote and buttons at bottom */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-between min-h-screen">
          {/* Empty space for centering */}
          <div className="flex-1"></div>

          {/* Quote and buttons at bottom */}
          <div className="flex flex-col items-center gap-8">
            {/* Quote */}
            <blockquote className="text-3xl md:text-5xl font-bold text-primary text-balance italic mt-18">
              &ldquo;We understand UPSC better.&rdquo;
            </blockquote>

          </div>
        </div>
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
