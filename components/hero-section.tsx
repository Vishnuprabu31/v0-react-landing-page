"use client"

import { Button } from "@/components/ui/button"
import { Award, Users, BookOpen, Phone } from "lucide-react"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        console.log("Autoplay prevented - user interaction required")
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/video-poster.jpg"
        >
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        {/* Brand Color Overlay */}
        <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Academy Name */}
          <div className="mb-6 animate-fade-in">
            <h2 className="text-lg md:text-xl font-medium text-secondary tracking-wider uppercase">
              Raja Sir&apos;s
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight text-balance">
              IAS Academy
            </h1>
            <p className="text-xl md:text-2xl text-secondary mt-3 italic">
              Feel the Pulse of UPSC
            </p>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-4xl font-bold text-secondary mb-10 text-balance">
            Tigritude Makes Everything Possible
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
              <Award className="w-10 h-10 text-secondary" />
              <div className="text-left">
                <p className="text-3xl md:text-4xl font-bold text-white">21</p>
                <p className="text-sm text-secondary/80">Years of Excellence</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
              <Users className="w-10 h-10 text-secondary" />
              <div className="text-left">
                <p className="text-3xl md:text-4xl font-bold text-white">533+</p>
                <p className="text-sm text-secondary/80">Officers Produced</p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl font-medium text-white/90 italic mb-10 text-balance">
            &ldquo;We the People of India&rdquo;
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 shadow-lg shadow-primary/30">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-primary text-lg px-10 py-7">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
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
