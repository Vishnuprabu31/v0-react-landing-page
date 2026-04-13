"use client"

import { Card, CardContent } from "@/components/ui/card"

export function ResultsSection() {
  const toppers = [
    {
      rank: "AIR 1",
      name: "Anuj Agnihotri",
      title: "IAS"
    },
    {
      rank: "AIR 89",
      name: "Sonali",
      title: "IPS"
    },
    {
      rank: "AIR 53",
      name: "Kiran",
      title: "IAS"
    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6 text-balance">
          Real Results. Real Aspirants.
        </h2>

        {/* Subtext */}
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12">
          Consistency matters more than one-time results.
        </p>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {toppers.map((topper, index) => (
            <Card key={index} className="border-2 border-primary shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {topper.rank.split(" ")[1]}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{topper.rank}</h3>
                <p className="text-xl font-semibold text-foreground mb-1">{topper.name}</p>
                <p className="text-lg text-muted-foreground">{topper.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Success Message */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
          <p className="text-xl md:text-2xl font-semibold text-foreground text-balance">
            And hundreds of successful candidates across services.
          </p>
        </div>
      </div>
    </section>
  )
}
