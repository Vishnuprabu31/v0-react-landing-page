"use client"

export function ProblemAgitationSection() {
  const problems = [
    "Too much content. No clarity",
    "Studying without direction",
    "No feedback on answer writing",
    "Inconsistent preparation"
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12 text-balance">
          Why Most Aspirants Don&apos;t Make It
        </h2>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                ✕
              </div>
              <p className="text-lg font-semibold text-foreground pt-1">{problem}</p>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary">
          <p className="text-center text-foreground text-xl md:text-2xl font-bold text-balance">
            Most aspirants don&apos;t fail because they lack effort.
          </p>
          <p className="text-center text-primary text-2xl md:text-3xl font-bold mt-4 text-balance">
            They fail because they lack the right approach.
          </p>
        </div>
      </div>
    </section>
  )
}
