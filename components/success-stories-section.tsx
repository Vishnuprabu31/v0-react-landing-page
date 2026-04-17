"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Gokul R.K., IAS",
    achievement: "Alumni of TCE Madurai",
    quote: "I scored 271 in Political Science and International Relations. Really your inputs for Political Science and International Relations have been helpful and life saver facilitating my achievement. I scored well in Ethics and Essay as well.",
    highlight: "271 in PSIR"
  },
  {
    name: "Pradeep Kumar Masilamani, IAS",
    achievement: "Addressing Media",
    quote: "A Chemical Engineer from S.P Peter's Engineering College, Avadi. Secured his Rank in Civil Services Exam and is now an administrative officer in Tamil Nadu. He was also very supportive with us in subject with Sociology. He did well.",
    highlight: "Tamil Nadu IAS"
  },
  {
    name: "Thavaseelan Karunanidhi, IAS",
    achievement: "Director's Gold Medal @ 87th IAS Foundation Course",
    quote: "Joining Raja Sir's Cracking IAS for General Studies turned out to be one of the best decisions in my life till date. Personal Attention and knack to predict questions is simply unparalleled.",
    highlight: "Gold Medal Winner"
  },
  {
    name: "Sharanya, IAS",
    achievement: "Mother of a School going Child is now a Civil Servant",
    quote: "After facing so many failures, I just got it in my 6th attempt. I scored 286 in Political Science and IR and it was my life saver to secure a place in the Civil Services Exam. The main reason was Raja Sir.",
    highlight: "286 in PSIR"
  },
  {
    name: "Nitika Pawar, IAS (AIR 18)",
    achievement: "First Attempt Success",
    quote: "Nitika Pawar obtained 18th rank in Civil Services Examination in her first attempt for the most prestigious position of Indian Administrative Services.",
    highlight: "AIR 18"
  },
  {
    name: "R. Jaghadeeswaran, IRS (IT)",
    achievement: "Successful in his very First Attempt",
    quote: "He is a native of Pondicherry. He is a Metallurgical engineering graduate from NIT Hampur. He joined us for his Mains coaching specifically for Mathematics, Ethics, Integrity and Aptitude and Essay in his first attempt. He got selected for the Indian Revenue Service (IRS - IT).",
    highlight: "First Attempt Success"
  }
]

export function SuccessStoriesSection() {
  return (
    <section id="success" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 uppercase tracking-wider">Feathers in Our Cap</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              533+ Success Stories
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              &ldquo;If you really want to do, you will find a way. If you don&apos;t, you will find an excuse.&rdquo;
            </p>
          </div>

          {/* Legacy Text */}
          <div className="bg-card p-8 rounded-2xl border border-border mb-12 text-center">
            <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl mx-auto">
              Since 2005, we have had a spectacular number of success stories. We are very much glad 
              that our students are working as Civil Servants in almost every State or Union Territory 
              of India and contributing to India&apos;s Development. Also in few countries our students are 
              working as Indian Foreign Service Officers to elevate India&apos;s image in Global Politics.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4 line-clamp-4">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.achievement}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {testimonial.highlight}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
