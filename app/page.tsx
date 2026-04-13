import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ProblemAgitationSection } from "@/components/problem-agitation-section"
import { SolutionSection } from "@/components/solution-section"
import { ResultsSection } from "@/components/results-section"
import { ProgramOfferSection } from "@/components/program-offer-section"
import { DifferentiatorSection } from "@/components/differentiator-section"
import { UrgencyCTASection } from "@/components/urgency-cta-section"
import { ClosingSection } from "@/components/closing-section"
import { AboutSection } from "@/components/about-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { CoursesSection } from "@/components/courses-section"
import { ExamInfoSection } from "@/components/exam-info-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ProblemAgitationSection />
      <SolutionSection />
      <ResultsSection />
      <ProgramOfferSection />
      <DifferentiatorSection />
      <UrgencyCTASection />
      <ClosingSection />
      <AboutSection />
      <SuccessStoriesSection />
      <CoursesSection />
      <ExamInfoSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
