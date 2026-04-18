"use client"

export function DifferentiatorSection() {
  const differentiators = [
    "You are trained to think, not just memorize",
    "Focus on clarity, not content overload",
    "Real exam-oriented preparation",
    "Mentorship throughout the journey"
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12 text-balance">
          What Makes Raja Sir&apos;s Academy Different
        </h2>

        {/* Differentiators */}
        <div className="space-y-6 mb-12">
          {differentiators.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border-l-4 border-primary shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold">
                {index + 1}
              </div>
              <p className="text-lg md:text-xl font-semibold text-foreground pt-1">{point}</p>
            </div>
          ))}
        </div>

        {/* Key Message */}
        <div className="bg-background rounded-2xl p-8 md:p-12 border-2 border-primary text-center">
          <p className="text-lg md:text-xl opacity-90 text-foreground mb-3">
            You don&apos;t need more material.
          </p>
          <p className="text-3xl md:text-4xl font-bold text-primary text-balance">
            You need the right direction.
          </p>
        </div>
      </div>
    </section>
  )
}
