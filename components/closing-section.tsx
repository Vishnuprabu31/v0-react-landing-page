"use client"

export function ClosingSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
          One Decision Can Change Your Journey
        </h2>

        {/* Subtext with Emphasis */}
        <div className="space-y-4">
          <p className="text-lg md:text-2xl text-muted-foreground text-balance">
            The difference between confusion and clarity
          </p>
          <p className="text-3xl md:text-4xl font-bold text-primary text-balance">
            is the guidance you choose today.
          </p>
        </div>

        {/* Decorative Line */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <div className="h-1 w-12 bg-primary" />
          <div className="h-2 w-2 rounded-full bg-primary" />
          <div className="h-1 w-12 bg-primary" />
        </div>
      </div>
    </section>
  )
}
