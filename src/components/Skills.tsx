import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe } from "lucide-react";

type SkillLevel = "Advanced" | "Intermediate" | "Beginner";

interface Skill {
  name: string;
  level: SkillLevel;
}

const Skills = () => {
  const skillCategories = [{
    id: "languages",
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Python", level: "Advanced" as SkillLevel },
      { name: "JavaScript", level: "Advanced" as SkillLevel },
      { name: "TypeScript", level: "Advanced" as SkillLevel },
      { name: "Java", level: "Intermediate" as SkillLevel },
      { name: "SQL", level: "Intermediate" as SkillLevel },
      { name: "C++", level: "Intermediate" as SkillLevel },
      { name: "C", level: "Beginner" as SkillLevel },
      { name: "C#", level: "Beginner" as SkillLevel }
    ],
    gradient: "bg-gradient-primary"
  }, {
    id: "frontend",
    title: "Frontend & UI",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "React", level: "Advanced" as SkillLevel },
      { name: "Next.js", level: "Advanced" as SkillLevel },
      { name: "Figma", level: "Advanced" as SkillLevel },
      { name: "HTML/CSS", level: "Intermediate" as SkillLevel },
      { name: "Tailwind CSS", level: "Intermediate" as SkillLevel }
    ],
    gradient: "bg-gradient-secondary"
  }, {
    id: "backend",
    title: "Backend & Database",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: "Advanced" as SkillLevel },
      { name: "FastAPI", level: "Advanced" as SkillLevel },
      { name: "Supabase", level: "Advanced" as SkillLevel },
      { name: "PostgreSQL", level: "Intermediate" as SkillLevel },
      { name: "Express.js", level: "Intermediate" as SkillLevel },
      { name: "Redis", level: "Intermediate" as SkillLevel },
      { name: "Django", level: "Beginner" as SkillLevel }
    ],
    gradient: "bg-gradient-card"
  }];

  const getSkillColor = (level: SkillLevel) => {
    switch (level) {
      case "Advanced":
        return "text-accent";
      case "Intermediate":
        return "text-primary";
      case "Beginner":
        return "text-secondary";
    }
  };

  const getSkillBg = (level: SkillLevel) => {
    switch (level) {
      case "Advanced":
        return "bg-accent/20";
      case "Intermediate":
        return "bg-primary/20";
      case "Beginner":
        return "bg-secondary/20";
    }
  };

  const getLevelWidth = (level: SkillLevel) => {
    switch (level) {
      case "Advanced":
        return "100%";
      case "Intermediate":
        return "66%";
      case "Beginner":
        return "33%";
    }
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
                            {skill.level}
                          </Badge>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-surface rounded-full h-2">
                          <div className={`h-2 rounded-full transition-all duration-500 group-hover:shadow-neon ${
                            skill.level === "Advanced" ? 'bg-accent' : 
                            skill.level === "Intermediate" ? 'bg-primary' : 
                            'bg-secondary'
                          }`} style={{
                            width: getLevelWidth(skill.level)
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