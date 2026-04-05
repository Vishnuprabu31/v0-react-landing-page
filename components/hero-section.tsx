"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Award, Users, BookOpen, Phone, Play } from "lucide-react"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23841617' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Logo/Academy Name */}
            <div className="mb-6">
              <h2 className="text-lg md:text-xl font-medium text-primary tracking-wider uppercase">
                Raja Sir&apos;s
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                IAS Academy
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-2 italic">
                Feel the Pulse of UPSC
              </p>
            </div>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl font-bold text-primary mb-8 text-balance">
              Tigritude Makes Everything Possible
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-8">
              <div className="flex items-center gap-3 bg-card px-5 py-3 rounded-xl shadow-lg border border-border">
                <Award className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <p className="text-2xl md:text-3xl font-bold text-primary">21</p>
                  <p className="text-xs text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card px-5 py-3 rounded-xl shadow-lg border border-border">
                <Users className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <p className="text-2xl md:text-3xl font-bold text-primary">533+</p>
                  <p className="text-xs text-muted-foreground">Officers Produced</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl font-medium text-foreground/80 italic mb-8 text-balance">
              &ldquo;We the People of India&rdquo;
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content - Video Player */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 bg-foreground/5">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30">
                  {/* Video Thumbnail Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#841617]/80 to-[#841617]/60" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-center text-balance">
                      Welcome to Raja Sir&apos;s IAS Academy
                    </h3>
                    <p className="text-sm md:text-base opacity-90 mb-6 text-center">
                      Watch our journey of creating IAS officers
                    </p>
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 border-2 border-white/50"
                      aria-label="Play video"
                    >
                      <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                    </button>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/30 rounded-br-lg" />
                </div>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                  title="Raja Sir's IAS Academy - Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            
            {/* Video Caption */}
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                21 Years of Ethical IAS Coaching | 533+ Officers | Chennai
              </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
              Watch Now
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  )
}
