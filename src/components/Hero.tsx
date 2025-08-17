import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, GraduationCap, Calendar, MapPin } from "lucide-react";
const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const fullText = "Hello, I'm Jefferson Wu";
  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100;
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setIsTypingDone(true);
      }
    };
    const startTyping = setTimeout(typeText, 500);
    return () => clearTimeout(startTyping);
  }, []);
  return <section className="py-8 md:py-12 bg-gradient-hero particles relative flex items-center justify-center">
      <div className="container px-6 text-center z-10 my-[100px]">
        <div className="max-w-7xl mx-auto">
          {/* Connected Terminal and Side Panel */}
          <div className="bg-surface-elevated rounded-lg border border-muted shadow-card mb-6 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-muted">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-muted-foreground font-mono">~/portfolio</span>
            </div>
            
            <div className="grid lg:grid-cols-3 min-h-[400px]">
              {/* Terminal Content */}
              <div className="lg:col-span-2 p-3 text-left">
                <div className="font-mono text-primary mb-2">$ whoami</div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                  <span className="font-mono text-foreground">
                    {displayedText}
                    {!isTypingDone && <span className="typing-cursor"></span>}
                  </span>
                </h1>
                
                {isTypingDone && <div className="space-y-4 animate-fade-in">
                     <div className="font-mono text-primary">$ cat character_profile.dat</div>
                     <div className="space-y-2">
                       
                     </div>
                   </div>}
              </div>

              {/* Vertical Separator */}
              

              {/* University Side Panel */}
              {isTypingDone && <div className="lg:col-span-1 p-4 bg-surface-elevated border-l border-white/10 animate-fade-in">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">Northwestern University</h3>
                      <p className="text-sm text-muted-foreground">Bachelor of Computer Science | Minor in Economics</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Expected Graduation: June 2027</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Evanston, IL</span>
                    </div>
                  </div>
                  
                  <div>
                    
                  </div>
                  
                  
                </div>
              </div>}
            </div>
          </div>

          {/* Action Items */}
          {isTypingDone && <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mt-6">
              <Button size="lg" className="bg-gradient-primary hover:shadow-neon-lg transition-smooth font-semibold font-mono">
                <ExternalLink className="mr-2 h-5 w-5" />
                [Start Quest]
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-neon transition-smooth font-mono" asChild>
                <a href="https://github.com/JeffersonWu25" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  [GitHub Repository]
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-smooth font-mono" asChild>
                <a href="https://linkedin.com/in/jwu6" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary-glow rounded-full animate-ping"></div>
      </div>
    </section>;
};
export default Hero;