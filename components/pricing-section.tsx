'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<'offline' | 'online'>('offline')

  const offlineCourses = [
    {
      code: 'FCL',
      title: 'General Studies (Prelims + Mains)',
      description: 'PCM - General Studies (Prelims + Mains) only + Mock Interview. 500+ Hours General Studies Classes with Tests (Prelims + Mains)',
      price: '₹1,30,000'
    },
    {
      code: 'FOL',
      title: 'Optional Courses',
      description: 'Only Optional - Duration 5 Months | Political Science and International Relations [OR] Sociology. 120+ Hours - Optional Classes with Tests',
      price: '₹37,000'
    },
    {
      code: 'FAL',
      title: 'CSAT Paper 2',
      description: 'CSAT 75+ Hours - CSAT Paper 2 - Classes with Tests',
      price: '₹22,000'
    },
    {
      code: 'FCAL',
      title: 'Full Course',
      description: 'Full Course - General Studies (Prelims + Mains) + CSAT + Optional + Mock Interview. 500+ Hours General Studies Classes with Tests',
      price: '₹1,70,000'
    },
    {
      code: 'FCI2L',
      title: '2 Years Integrated Course',
      description: '2 Years Integrated Course (Full Course) for College Students',
      price: 'Term 1 - ₹1,00,000 + Term 2 - ₹50,000 + Term 3 - ₹50,000'
    },
    {
      code: 'FCI3L',
      title: '3 Years Integrated Course',
      description: '3 Years Integrated Course (Full Course) for College Students',
      price: 'Term 1 - ₹1,00,000 + Term 2 - ₹75,000 + Term 3 - ₹75,000'
    }
  ]

  const onlineCourses = [
    {
      code: 'FCN',
      title: 'General Studies (Prelims + Mains)',
      description: 'PCM - General Studies (Prelims + Mains) only + Mock Interview. 500+ Hours General Studies Classes with Tests (Prelims + Mains)',
      price: '₹95,000'
    },
    {
      code: 'FON',
      title: 'Optional Courses',
      description: 'Only Optional - Duration 5 Months | Political Science and International Relations [OR] Sociology. 120+ Hours - Optional Classes with Tests',
      price: '₹25,000'
    },
    {
      code: 'FAN',
      title: 'CSAT Paper 2',
      description: 'CSAT 75+ Hours - CSAT Paper 2 - Classes with Tests',
      price: '₹12,000'
    },
    {
      code: 'FCAN',
      title: 'Full Course',
      description: 'Full Course - General Studies (Prelims + Mains) + CSAT + Optional + Mock Interview. 500+ Hours General Studies Classes with Tests',
      price: '₹1,25,000'
    },
    {
      code: 'FCI2N',
      title: '2 Years Integrated Course',
      description: '2 Years Integrated Course (Full Course) for College Students',
      price: 'Term 1 - ₹1,00,000 + Term 2 - ₹50,000 + Term 3 - ₹50,000'
    },
    {
      code: 'FCI3N',
      title: '3 Years Integrated Course',
      description: '3 Years Integrated Course (Full Course) for College Students',
      price: 'Term 1 - ₹1,00,000 + Term 2 - ₹75,000 + Term 3 - ₹75,000'
    }
  ]

  const courses = activeTab === 'offline' ? offlineCourses : onlineCourses

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Our Courses & Pricing
          </h2>
          <p className="text-xl text-foreground/70 text-balance">
            Flexible learning options for every aspirant
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={() => setActiveTab('offline')}
            className={`px-8 py-3 text-lg font-semibold transition-all ${
              activeTab === 'offline'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            Offline Coaching
          </Button>
          <Button
            onClick={() => setActiveTab('online')}
            className={`px-8 py-3 text-lg font-semibold transition-all ${
              activeTab === 'online'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            Online Coaching
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.code}
              className="bg-card border-2 border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="mb-4">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                  {course.code}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{course.title}</h3>
              <p className="text-foreground/70 text-sm mb-6 line-clamp-3">
                {course.description}
              </p>
              <div className="pt-4 border-t border-primary/20">
                <p className="text-2xl font-bold text-primary">{course.price}</p>
              </div>
              <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                Enroll Now
              </Button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center bg-secondary/30 p-8 rounded-lg border-2 border-primary">
          <p className="text-lg font-semibold text-primary mb-2">
            ✓ Fees include Classes, Mentor Support, Test Batch & Taxes
          </p>
          <p className="text-foreground/70">
            Limited batch size ensures personalized attention for every aspirant
          </p>
        </div>
      </div>
    </section>
  )
}
