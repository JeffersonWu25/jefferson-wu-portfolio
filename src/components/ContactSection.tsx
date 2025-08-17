import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-20">
            <div className="section-label mb-8 mx-auto">
              [CONTACT]
            </div>
            <h2 className="section-title">
              GET IN TOUCH
            </h2>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline h-24 flex-col space-y-2" 
              asChild
            >
              <a href="mailto:jefferson.wu@northwestern.edu">
                <Mail className="h-6 w-6" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline h-24 flex-col space-y-2" 
              asChild
            >
              <a href="https://github.com/JeffersonWu25" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline h-24 flex-col space-y-2" 
              asChild
            >
              <a href="https://linkedin.com/in/jwu6" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 Jefferson Wu. Available for opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;