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

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Text */}
            <div className="lg:col-span-2 space-y-6">
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

            {/* Right Column - CLI-Style Education Panel */}
            <div className="lg:col-span-1">
              <div className="bg-surface-elevated rounded-lg border border-muted shadow-card">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-muted">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground font-mono">~/education</span>
                </div>
                <div className="p-4 text-left">
                  <div className="font-mono text-primary mb-2">$ cat university.dat</div>
                  <div className="space-y-3 font-mono text-sm">
                    <div>
                      <span className="text-accent">Institution:</span> Northwestern University<br />
                      <span className="text-secondary">Degree:</span> Computer Science<br />
                      <span className="text-primary">Minor:</span> Economics<br />
                      <span className="text-accent">GPA:</span> 3.83<br />
                      <span className="text-secondary">Graduation:</span> 2027
                    </div>
                    
                    <div className="pt-2">
                      <div className="font-mono text-primary mb-2">$ ls coursework/</div>
                      <div className="space-y-1 text-muted-foreground">
                        <div>• Machine Learning</div>
                        <div>• Data Structures & Algorithms</div>
                        <div>• Computer Systems</div>
                        <div>• Software Design</div>
                        <div>• Programming Languages</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;