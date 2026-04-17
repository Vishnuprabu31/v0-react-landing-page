import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, BookOpen, FileText, Newspaper, GraduationCap, PenTool, Brain, Award } from "lucide-react"

const courses = [
  {
    icon: BookOpen,
    title: "General Studies",
    description: "Comprehensive coverage of all GS papers with focus on current affairs integration and answer writing skills",
    features: ["All 4 GS papers", "Current affairs integration", "Test series"]
  },
  {
    icon: Brain,
    title: "CSAT",
    description: "Comprehensive coverage of CSAT with focus on current affairs integration and answer writing skills. Master logical reasoning and quantitative aptitude.",
    features: ["Logical reasoning", "Quantitative aptitude", "Comprehensive practice"]
  },
  {
    icon: Newspaper,
    title: "Current Affairs & Daily News Analysis",
    description: "Stay updated with EDITED DNA - empowering aspirants to prioritize and understand daily news through our portal",
    features: ["Daily analysis", "Monthly compilations", "UPSC relevance mapping"]
  },
  {
    icon: GraduationCap,
    title: "Political Science & International Relations",
    description: "Raja Sir himself scored 340 in PSIR [190 - Paper 2 (2nd HIGHEST SCORE)] and has guided many aspirants to achieve scores 300+, 285+",
    features: ["Complete syllabus coverage", "Previous year analysis", "Answer writing practice"]
  },
  {
    icon: FileText,
    title: "Sociology",
    description: "Raja Sir himself scored 171 in Paper 2 & 166 in Paper 1 and has guided many aspirants to achieve scores 300+, 285+ in Sociology",
    features: ["Conceptual clarity", "Contemporary examples", "Model answers"]
  },
  {
    icon: Award,
    title: "Essay",
    description: "Comprehensive coverage of Essay writing with focus on current affairs integration and answer writing skills. Develop exceptional essay composition techniques.",
    features: ["Structure mastery", "Contemporary topics", "Exemplary essays"]
  }
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
         

          {/* Formula Banner */}
          <div className="bg-primary text-primary-foreground p-6 rounded-2xl mb-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xl md:text-2xl font-bold">
              <span>YOUR EFFORTS</span>
              <span className="text-3xl">+</span>
              <span>OUR EXPERTISE</span>
              <span className="text-3xl">=</span>
              <span>YOUR EXCELLENCY</span>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/50 transition-all hover:shadow-lg group h-full">
                <CardHeader>
                  <course.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl text-foreground">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Study Materials CTA */}
          <div className="mt-12 bg-background p-8 rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-2">
              ENJOY OUR EXPERTISE
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              IAS 2027 Batch Admission - Raja Sir's IAS Academy
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-foreground mb-4">Full Classroom Course Include</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>500+ Hours General Studies with Classes & Tests</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>150+ Hours - Optional Classes with Tests</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>75+ Hours - CSAT Paper 2 - Classes with Tests</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Printed Study Materials - UPSC TUNED BOOKS</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Monthly Current Affairs – IASgoogle.com</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>25 Prelims Test Series in General Studies and Current Affairs with Explanation</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Mains Answer Writing Programme with Feedback from our Experienced Evaluators</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Tests - Descriptive Questions with Feedback</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Mains Daily Practice Questions</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Prelims Daily Quiz</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Missed Class Support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-semibold">Missed Class Support:</span> If you have missed classes due to unavoidable circumstances, you can request access to recorded video classes.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground mb-4">Student Friendly Mentorship</h4>
                <p className="text-foreground leading-relaxed">
                  Students would have access to mentoring sessions during their course period to clear their doubts and guidance regarding their preparation.
                </p>
              </div>

              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <p className="text-sm font-semibold text-foreground mb-3">Important Notes:</p>
                <ul className="space-y-1 text-sm text-foreground/85">
                  <li>• Students will be given access to the Faculty guidance support to help prepare for their exam until June 2025.</li>
                  <li>• Classes will be held generally six days a week and class timings may be extended if needed. Extra classes apart from the regular schedule may be held to cover the syllabus on time. Sunday may not be a holiday.</li>
                  <li>• [Class timings are subject to change]</li>
                  <li>• Attending tests is compulsory.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground mb-3">Optionals Offered</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="font-semibold text-foreground">Sociology</p>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="font-semibold text-foreground">Political Science & International Relations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
