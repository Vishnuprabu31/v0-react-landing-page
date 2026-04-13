'use client'

import Image from 'next/image'

export function FacultySection() {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
            Meet Our Faculty
          </h2>
          <p className="text-xl text-secondary/90 text-balance">
            Guided by experienced mentors who have shaped hundreds of successful IAS officers
          </p>
        </div>

        {/* Faculty Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VBOARD%202-DFGqoTgkfEDHT89rJONY0Vh4xGPgea.jpg"
            alt="Raja Sir's Faculty Board - Experienced IAS Academy Mentors"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Faculty Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary text-primary p-8 rounded-lg text-center">
            <p className="text-5xl font-bold mb-2">533+</p>
            <p className="text-lg font-semibold">Officers Trained</p>
          </div>
          <div className="bg-secondary text-primary p-8 rounded-lg text-center">
            <p className="text-5xl font-bold mb-2">21+</p>
            <p className="text-lg font-semibold">Years of Experience</p>
          </div>
          <div className="bg-secondary text-primary p-8 rounded-lg text-center">
            <p className="text-5xl font-bold mb-2">100%</p>
            <p className="text-lg font-semibold">Dedicated Mentorship</p>
          </div>
        </div>
      </div>
    </section>
  )
}
