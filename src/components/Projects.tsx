import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Trophy, Search, Chrome, Leaf } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "course-search",
      title: "Northwestern Course Evaluation Search",
      description: "Full-stack web platform revolutionizing course discovery with AI-powered search capabilities. Built with React, Supabase, and integrated OCR + Gemini search for processing 10,000+ course reviews.",
      icon: <Search className="h-6 w-6" />,
      tech: ["React", "Supabase", "OCR", "Gemini", "TypeScript"],
      achievements: ["🏆 Hackathon Overall Winner", "10,000+ Reviews Processed"],
      github: "https://github.com/JeffersonWu25/course-search",
      demo: "#",
      gradient: "bg-gradient-primary"
    },
    {
      id: "ai-assistant",
      title: "In-Browser AI Assistant",
      description: "Chrome extension enabling multimodal AI assistance directly in web pages. Features GPT-4 Vision integration with FastAPI backend for seamless in-page queries and visual analysis.",
      icon: <Chrome className="h-6 w-6" />,
      tech: ["Chrome Extension", "GPT-4 Vision", "FastAPI", "JavaScript"],
      achievements: ["🤖 AI-Powered", "Multimodal Capabilities"],
      github: "https://github.com/JeffersonWu25/ai-assistant",
      demo: "#",
      gradient: "bg-gradient-secondary"
    },
    {
      id: "farmconnect",
      title: "FarmConnect",
      description: "Sustainable marketplace connecting food waste suppliers with farmers. Full-stack application built with React, Supabase, and Node.js, promoting agricultural sustainability and waste reduction.",
      icon: <Leaf className="h-6 w-6" />,
      tech: ["React", "Supabase", "Node.js", "PostgreSQL"],
      achievements: ["🏆 Hackathon Overall Winner", "♻️ Sustainability Focus"],
      github: "https://github.com/JeffersonWu25/farmconnect",
      demo: "#",
      gradient: "bg-gradient-card"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="glitch" data-text="Featured Projects">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions that showcase technical expertise and real-world impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group relative overflow-hidden bg-gradient-card border-border hover:border-primary/40 transition-all duration-300 hover:shadow-neon hover:-translate-y-2 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative p-6 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.achievements.map((achievement) => (
                      <Badge 
                        key={achievement}
                        variant="secondary" 
                        className="text-xs bg-secondary/20 text-secondary border-secondary/30"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs bg-surface border border-border rounded-md font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-primary/20 hover:bg-primary/30 transition-smooth"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>

                {/* Floating Decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors"></div>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-smooth"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;