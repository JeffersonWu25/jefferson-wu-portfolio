import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="glitch" data-text="About Me">
                About Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building the future with code, one project at a time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  Full-Stack Developer & AI Enthusiast
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a Computer Science student at Northwestern University with a passion for 
                  creating innovative solutions that make a real impact. From winning hackathons 
                  to building production applications, I love pushing the boundaries of what's 
                  possible with code.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My expertise spans the full stack, with particular strengths in React, Node.js, 
                  Python, and AI integration. I've helped reduce manual work by 85% at venture 
                  capital firms and built HIPAA-compliant systems serving 25,000+ users.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-gradient-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">2+</div>
                  <div className="text-sm text-muted-foreground">Hackathon Wins</div>
                </div>
                <div className="text-center p-4 bg-gradient-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-secondary mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Efficiency Boost</div>
                </div>
              </div>
            </div>

            {/* Right Column - Education Card */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-smooth neon-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Northwestern University</h3>
                    <p className="text-muted-foreground mb-3">
                      Bachelor of Computer Science | Minor in Economics
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Expected Graduation: June 2027</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Evanston, IL</span>
                      </div>
                      <div className="pt-2">
                        <span className="text-lg font-semibold text-primary">GPA: 3.83</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="font-semibold mb-2 text-foreground">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Machine Learning",
                      "Data Structures & Algorithms", 
                      "Computer Systems",
                      "Software Design",
                      "Programming Languages"
                    ].map((course) => (
                      <span 
                        key={course}
                        className="px-3 py-1 bg-surface text-xs rounded-full border border-border text-muted-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;