import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, TrendingUp, Shield } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: "hyde-park",
      company: "Hyde Park Venture Partners",
      role: "Software Engineering & VC Intern",
      period: "June 2025 – Present",
      location: "Chicago, IL",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Built automation tools that revolutionized analyst workflows at a leading VC firm.",
      achievements: [
        "85% reduction in analyst sourcing time by developing an internal tool with Next.js, FastAPI, and PostgreSQL",
        "Implemented Redis-backed task queue for processing high-volume data with sub-second response times",
        "Designed modular ingestion pipeline capable of normalizing financial data from tens of investment thesis"
      ],
      tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
      highlight: "85% efficiency improvement"
    },
    {
      id: "north-shore",
      company: "North Shore Senior Center",
      role: "Technical Product Manager (Contract)",
      period: "January 2025 – June 2025",
      location: "Chicago, IL",
      icon: <Users className="h-6 w-6" />,
      description: "Led a 5-person engineering team to deliver HIPAA-compliant CRM platform.",
      achievements: [
        "Led full-stack engineers to deliver CRM platform for 25,000+ senior residents",
        "80% reduction in manual reporting time by developing real-time billing and activity tracking modules",
        "Enabled instant analytics and staff leadership through automated reporting systems",
        "Implemented row-level security and role-based access controls for HIPAA compliance"
      ],
      tech: ["React", "Node.js", "PostgreSQL", "HIPAA"],
      highlight: "25,000+ users served"
    },
    {
      id: "sebela",
      company: "Sebela.ai",
      role: "Frontend Engineer",
      period: "Jan 2024 – May 2024",
      location: "Boston, MA",
      icon: <Shield className="h-6 w-6" />,
      description: "Redesigned AR try-on tool frontend for enhanced user experience and client adoption.",
      achievements: [
        "Redesigned user interface for an augmented reality virtual try-on tool using JavaScript, HTML, and CSS",
        "100% adoption rate by clients over the previous version",
        "Streamlined backend integration and implemented modular design reducing development time for new features"
      ],
      tech: ["JavaScript", "HTML", "CSS", "AR"],
      highlight: "100% client adoption"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="glitch" data-text="Work Experience">
                Work Experience
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building impactful solutions across industries
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.id}
                className="relative p-6 md:p-8 bg-gradient-card border-border hover:border-primary/40 transition-all duration-300 neon-hover group"
              >
                {/* Gradient Accent */}
                <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity rounded-lg"></div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-foreground font-semibold mb-1">
                          {exp.company}
                        </p>
                        <p className="text-muted-foreground">
                          {exp.period} • {exp.location}
                        </p>
                      </div>
                    </div>
                    
                    {/* Highlight Badge */}
                    <Badge 
                      variant="secondary"
                      className="bg-secondary/20 text-secondary border-secondary/30 text-sm px-3 py-1"
                    >
                      {exp.highlight}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-sm bg-surface border border-border rounded-md font-mono text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-border"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;