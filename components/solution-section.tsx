"use client"

export function SolutionSection() {
  const solutions = [
    "Clear understanding of what to study",
    "Structured preparation from Day 1",
    "Continuous answer writing practice",
    "Mentorship that corrects your mistakes"
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12 text-balance">
          What Changes When You Get the Right Guidance?
        </h2>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                ✓
              </div>
              <p className="text-lg font-semibold text-foreground pt-1">{solution}</p>
            </div>
          ))}
        </div>

        {/* Key Message */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <p className="text-lg md:text-xl opacity-90 mb-3">This is not just preparation.</p>
          <p className="text-3xl md:text-4xl font-bold text-balance">
            This is guided preparation.
          </p>
        </div>
      </div>
    </section>
  )
}
