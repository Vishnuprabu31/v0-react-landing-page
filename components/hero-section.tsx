"use client"

import { Button } from "@/components/ui/button"
import { Award, Users, BookOpen, Phone } from "lucide-react"
import { useEffect, useRef } from "react"
import Image from "next/image"

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
        <div className="max-w-6xl mx-auto">
          {/* Header with Academy Image and Text */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Academy Info */}
              <div>
                {/* Logo/Academy Name */}
                <div className="mb-8">
                  <h2 className="text-lg md:text-xl font-medium text-secondary tracking-wider uppercase">
                    Raja Sir&apos;s
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-balance">
                    IAS Academy
                  </h1>
                  <p className="text-lg md:text-xl text-secondary mt-3 italic">
                    Feel the Pulse of UPSC
                  </p>
                </div>

                {/* Tagline */}
                <p className="text-xl md:text-2xl font-bold text-secondary mb-8 text-balance">
                  Tigritude Makes Everything Possible
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
                    <Award className="w-8 h-8 text-secondary flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-2xl md:text-3xl font-bold text-white">21</p>
                      <p className="text-xs md:text-sm text-secondary/80">Years of Excellence</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
                    <Users className="w-8 h-8 text-secondary flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-2xl md:text-3xl font-bold text-white">533+</p>
                      <p className="text-xs md:text-sm text-secondary/80">Officers Produced</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg shadow-primary/30">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Courses
                  </Button>
                  <Button size="lg" variant="outline" className="border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                </div>
              </div>

              {/* Right Side - Academy Image */}
              <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-secondary">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VBOARD%202-DFGqoTgkfEDHT89rJONY0Vh4xGPgea.jpg"
                  alt="Raja Sir's IAS Academy - Top Achievers and Faculty"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                AIR 1, AIR 89, AIR 53
              </p>
              <p className="text-lg md:text-xl text-secondary font-semibold text-balance">
                Results that didn&apos;t happen by chance.
              </p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl font-medium text-white/90 italic text-center text-balance">
            &ldquo;We the People of India&rdquo;
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
