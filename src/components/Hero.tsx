import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, GraduationCap, Calendar } from "lucide-react";
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
  return <section className="min-h-screen bg-gradient-hero particles relative flex items-center justify-center py-20">
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content - Two Column Layout on Large Screens */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Text Content - Left Side */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-foreground">
                  {displayedText}
                  {!isTypingDone && <span className="typing-cursor"></span>}
                </span>
              </h1>
              
              {isTypingDone && <div className="space-y-4 animate-fade-in">
                  {/* Education Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="text-primary font-semibold">Northwestern University</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Class of 2027
                    </span>
                  </div>

                  {/* Title/Role */}
                  <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Full-Stack Developer</h2>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Computer Science student passionate about creating innovative solutions that make a real impact. 
                    Hackathon winner specializing in React, Node.js, Python, and AI integration. 
                    Building production applications serving thousands of users.
                  </p>

                  {/* Quick Stats */}
                  
                </div>}
            </div>

            {/* Profile Image - Right Side */}
            {isTypingDone && (
              <div className="flex-shrink-0 animate-fade-in">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  
                  {/* Image Container */}
                  <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                    <img 
                      src="/profile.jpg" 
                      alt="Jefferson Wu"
                      className="w-full h-full object-cover"
                    />
                    {/* Fallback gradient if image doesn't load */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse delay-500"></div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {isTypingDone && <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in mt-12">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-neon-lg transition-smooth font-semibold"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-neon transition-smooth"
                onClick={() => window.open('https://github.com/JeffersonWu25', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-smooth"
                onClick={() => window.open('https://www.linkedin.com/in/jwu6/', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
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