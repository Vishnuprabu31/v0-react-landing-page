"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function ProgramOfferSection() {
  const features = [
    "Complete syllabus coverage",
    "Daily structured classes",
    "Integrated answer writing",
    "Regular tests with evaluation",
    "Personal mentorship"
  ]

  const formats = [
    { name: "Classroom Programme", location: " at Anna nagar" },
    { name: "Online Programme", location: "All over India" }
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6 text-balance">
          GS Foundation Programme
        </h2>
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12">
          UPSC CSE 2027
        </p>

        {/* Program Card */}
        <Card className="border-2 border-primary shadow-xl mb-8">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="text-2xl md:text-3xl">What&apos;s Included</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg font-semibold text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Program Formats */}
        <div className="bg-card rounded-xl border border-border p-8">
          <h3 className="text-center text-xl font-bold text-foreground mb-6">
            Available In:
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {formats.map((format, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 px-6 py-3 bg-secondary rounded-lg border border-primary"
              >
                <Check className="w-5 h-5 text-primary" />
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground">{format.name}</span>
                  <span className="text-sm font-bold text-muted-foreground">{format.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
