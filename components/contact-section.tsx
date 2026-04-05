import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Globe, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 uppercase tracking-wider">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              Begin your journey towards becoming a Civil Servant today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Phone Numbers</h3>
                      <p className="text-foreground/80 text-lg">9884 554 654</p>
                      <p className="text-foreground/80 text-lg">9962 527 528</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Address</h3>
                      <p className="text-foreground/80">
                        Door No: 1124, 1st Street, G-Block,<br />
                        11th Main Road, Anna Nagar<br />
                        Landmark: Anna Nagar Arisikaran Kadai,<br />
                        Behind LKS GOLD HOUSE<br />
                        Chennai, Tamil Nadu 600040
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Website</h3>
                      <a 
                        href="https://iasgoogle.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-lg"
                      >
                        iasgoogle.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Personal Touch</h3>
                      <p className="text-foreground/80">
                        Our faculty is available even after 9 PM for student queries. 
                        That&apos;s the kind of personal touch every student gets at our Institute.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Card */}
            <div className="flex items-center">
              <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-balance">
                  Ready to Start Your IAS Journey?
                </h3>
                <p className="text-primary-foreground/90 mb-8 text-lg leading-relaxed">
                  Join the legacy of 533+ successful officers. With 21 years of ethical coaching 
                  and proven results, we&apos;re committed to helping you achieve your dream of 
                  becoming a Civil Servant.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-white/90 text-lg py-6"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: 9884 554 654
                  </Button>
                  <p className="text-center text-primary-foreground/70 text-sm">
                    Feel the Pulse of UPSC
                  </p>
                </div>

                {/* Badge */}
                <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold">21</p>
                      <p className="text-sm text-primary-foreground/80">Years</p>
                    </div>
                    <div className="h-12 w-px bg-primary-foreground/30" />
                    <div className="text-center">
                      <p className="text-3xl font-bold">533+</p>
                      <p className="text-sm text-primary-foreground/80">Officers</p>
                    </div>
                    <div className="h-12 w-px bg-primary-foreground/30" />
                    <div className="text-center">
                      <p className="text-xs font-medium uppercase">Pledged to</p>
                      <p className="text-lg font-bold">Ethics</p>
                    </div>
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
