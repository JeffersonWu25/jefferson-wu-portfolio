import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="hero-title">
              JEFFERSON WU
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Northwestern University · CS + Econ Minor · Class of 2027 · GPA 3.83
            </div>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mode: Building Useful Software
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="btn-primary px-8 py-3 text-base"
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline px-8 py-3 text-base" 
              asChild
            >
              <a href="https://github.com/JeffersonWu25" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline px-8 py-3 text-base" 
              asChild
            >
              <a href="https://linkedin.com/in/jwu6" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;