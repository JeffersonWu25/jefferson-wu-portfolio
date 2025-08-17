import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "jwu@northwestern.edu",
      href: "mailto:jwu@northwestern.edu",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "(978) 796-4248",
      href: "tel:+19787964248",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Evanston, IL",
      href: "#",
      gradient: "bg-gradient-card"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/JeffersonWu25",
      username: "@JeffersonWu25"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/jwu6",
      username: "/in/jwu6"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="glitch" data-text="Get In Touch">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect! I'm always interested in discussing new opportunities, 
              innovative projects, or just talking about technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-border hover:border-primary/40 transition-all duration-300 neon-hover group"
                    >
                      <div className={`p-3 rounded-lg ${method.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}>
                        {method.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {method.label}
                        </div>
                        <div className="text-muted-foreground">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 bg-gradient-card border-secondary/20">
                <h3 className="text-xl font-bold mb-4 text-center">Connect With Me</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-4 rounded-lg bg-surface border border-border hover:border-secondary/40 transition-all duration-300 neon-hover group"
                    >
                      <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors">
                        {social.icon}
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                          {social.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-accent/20">
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Ready to Collaborate?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm currently seeking internship opportunities and exciting projects. 
                      Whether you're looking for a passionate developer or want to discuss 
                      innovative ideas, I'd love to hear from you!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:shadow-neon-lg transition-smooth font-semibold"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Me an Email
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="w-full border-accent/30 hover:border-accent hover:bg-accent/10 transition-smooth"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-bold mb-4 text-center">Quick Stats</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">2027</div>
                    <div className="text-sm text-muted-foreground">Graduation Year</div>
                  </div>
                  <div className="text-center p-3 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">3.83</div>
                    <div className="text-sm text-muted-foreground">GPA</div>
                  </div>
                  <div className="text-center p-3 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">2+</div>
                    <div className="text-sm text-muted-foreground">Hackathon Wins</div>
                  </div>
                  <div className="text-center p-3 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">10+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
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

export default Contact;