import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "jeffersonwu2027@northwestern.edu",
      href: "mailto:jeffersonwu2027@northwestern.edu"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "@JeffersonWu25",
      href: "https://github.com/JeffersonWu25"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/jwu6",
      href: "https://www.linkedin.com/in/jwu6/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's connect! I'm always interested in discussing new opportunities.
            </p>
          </div>

          {/* Contact Card */}
          <Card className="p-8 bg-gradient-card border-primary/20">
            <div className="space-y-6">
              {contactLinks.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label !== "Email" ? "_blank" : undefined}
                  rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {contact.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;