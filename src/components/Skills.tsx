import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Brain, Wrench, GitBranch } from "lucide-react";
const Skills = () => {
  const skillCategories = [{
    id: "languages",
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [{
      name: "Python",
      level: 90
    }, {
      name: "JavaScript",
      level: 88
    }, {
      name: "TypeScript",
      level: 85
    }, {
      name: "Java",
      level: 82
    }, {
      name: "SQL",
      level: 80
    }, {
      name: "C++",
      level: 75
    }, {
      name: "HTML/CSS",
      level: 90
    }],
    gradient: "bg-gradient-primary"
  }, {
    id: "frontend",
    title: "Frontend & UI",
    icon: <Globe className="h-6 w-6" />,
    skills: [{
      name: "React",
      level: 90
    }, {
      name: "Next.js",
      level: 85
    }, {
      name: "Tailwind CSS",
      level: 88
    }, {
      name: "Chrome Extensions",
      level: 80
    }, {
      name: "Responsive Design",
      level: 85
    }],
    gradient: "bg-gradient-secondary"
  }, {
    id: "backend",
    title: "Backend & Database",
    icon: <Database className="h-6 w-6" />,
    skills: [{
      name: "Node.js",
      level: 85
    }, {
      name: "Express.js",
      level: 80
    }, {
      name: "FastAPI",
      level: 88
    }, {
      name: "PostgreSQL",
      level: 85
    }, {
      name: "Supabase",
      level: 90
    }, {
      name: "Redis",
      level: 75
    }],
    gradient: "bg-gradient-card"
  }, {
    id: "ai-tools",
    title: "AI & Tools",
    icon: <Brain className="h-6 w-6" />,
    skills: [{
      name: "GPT-4 Vision",
      level: 85
    }, {
      name: "Gemini",
      level: 80
    }, {
      name: "OCR Integration",
      level: 75
    }, {
      name: "Machine Learning",
      level: 70
    }],
    gradient: "bg-gradient-primary"
  }, {
    id: "tools",
    title: "Development Tools",
    icon: <Wrench className="h-6 w-6" />,
    skills: [{
      name: "Git",
      level: 88
    }, {
      name: "Docker",
      level: 75
    }, {
      name: "VS Code",
      level: 90
    }, {
      name: "Postman",
      level: 80
    }],
    gradient: "bg-gradient-secondary"
  }];
  const getSkillColor = (level: number) => {
    if (level >= 85) return "text-accent";
    if (level >= 75) return "text-primary";
    return "text-secondary";
  };
  const getSkillBg = (level: number) => {
    if (level >= 85) return "bg-accent/20";
    if (level >= 75) return "bg-primary/20";
    return "bg-secondary/20";
  };
  return <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="glitch" data-text="Technical Skills">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Expertise across the full technology stack
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map(category => <Card key={category.id} className="p-6 bg-gradient-card border-border hover:border-primary/40 transition-all duration-300 neon-hover group">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity rounded-lg`}></div>
                
                <div className="relative">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map(skill => <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                          <Badge variant="secondary" className={`text-xs ${getSkillBg(skill.level)} ${getSkillColor(skill.level)} border-transparent`}>
                            {skill.level}%
                          </Badge>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-surface rounded-full h-2">
                          <div className={`h-2 rounded-full transition-all duration-500 group-hover:shadow-neon ${skill.level >= 85 ? 'bg-accent' : skill.level >= 75 ? 'bg-primary' : 'bg-secondary'}`} style={{
                      width: `${skill.level}%`
                    }}></div>
                        </div>
                      </div>)}
                  </div>
                </div>
              </Card>)}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;