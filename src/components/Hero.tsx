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

  return (
    <section className="min-h-screen bg-gradient-hero particles relative flex items-center justify-center py-20">
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-foreground">
                {displayedText}
                {!isTypingDone && <span className="typing-cursor"></span>}
              </span>
            </h1>
            
            {isTypingDone && (
              <div className="space-y-4 animate-fade-in max-w-3xl mx-auto">
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
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                  Full-Stack Developer & AI Enthusiast
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Computer Science student passionate about creating innovative solutions that make a real impact. 
                  Hackathon winner specializing in React, Node.js, Python, and AI integration. 
                  Building production applications serving thousands of users.
                </p>

                {/* Quick Stats */}
                <div className="flex justify-center gap-8 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-sm text-muted-foreground">Hackathon Wins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">25K+</div>
                    <div className="text-sm text-muted-foreground">Users Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">85%</div>
                    <div className="text-sm text-muted-foreground">Efficiency Boost</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {isTypingDone && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-neon-lg transition-smooth font-semibold"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-neon transition-smooth"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-smooth"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary-glow rounded-full animate-ping"></div>
      </div>
    </section>
  );
};

export default Hero;