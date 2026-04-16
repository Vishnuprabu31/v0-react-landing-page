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
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VBOARD%202-DFGqoTgkfEDHT89rJONY0Vh4xGPgea.jpg"
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
        {/* Stats positioned at left and right - further apart */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 pl-2 md:pl-8">
          <div className="bg-white/10 backdrop-blur-md px-4 md:px-6 py-4 md:py-6 rounded-xl border border-white/20 text-center">
            <p className="text-3xl md:text-5xl font-bold text-white mb-1">21</p>
            <p className="text-xs md:text-sm text-secondary/90 whitespace-nowrap">Years of Excellence</p>
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-0 pr-2 md:pr-8">
          <div className="bg-white/10 backdrop-blur-md px-4 md:px-6 py-4 md:py-6 rounded-xl border border-white/20 text-center">
            <p className="text-3xl md:text-5xl font-bold text-white mb-1">533+</p>
            <p className="text-xs md:text-sm text-secondary/90 whitespace-nowrap">Officers Produced</p>
          </div>
        </div>

        {/* Center content with quote at bottom */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-between min-h-screen">
          {/* Empty space for top alignment */}
          <div className="flex-1"></div>

          {/* CTA Buttons centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button 
              size="lg" 
              onClick={handleExploreClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 shadow-lg shadow-primary/30"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-primary text-lg px-10 py-7">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>

          {/* Quote at bottom */}
          <blockquote className="text-2xl md:text-4xl font-bold text-secondary text-balance italic pb-24">
            &ldquo;We understand UPSC better.&rdquo;
          </blockquote>
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
