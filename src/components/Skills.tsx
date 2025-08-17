import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Brain, Wrench, GitBranch, Terminal } from "lucide-react";

const Skills = () => {
  // Define skill tree structure with logical connections
  const skillNodes = [
    // Core Programming (Center)
    { id: "core", name: "Core Programming", x: 400, y: 300, level: 100, category: "core", unlocked: true },
    
    // Languages Branch (Left)
    { id: "python", name: "Python", x: 200, y: 200, level: 90, category: "languages", unlocked: true },
    { id: "javascript", name: "JavaScript", x: 150, y: 300, level: 88, category: "languages", unlocked: true },
    { id: "typescript", name: "TypeScript", x: 100, y: 400, level: 85, category: "languages", unlocked: true },
    { id: "java", name: "Java", x: 200, y: 500, level: 82, category: "languages", unlocked: true },
    { id: "cpp", name: "C++", x: 150, y: 600, level: 75, category: "languages", unlocked: true },
    
    // Frontend Branch (Top Right)
    { id: "react", name: "React", x: 600, y: 150, level: 90, category: "frontend", unlocked: true },
    { id: "nextjs", name: "Next.js", x: 750, y: 100, level: 85, category: "frontend", unlocked: true },
    { id: "tailwind", name: "Tailwind CSS", x: 700, y: 200, level: 88, category: "frontend", unlocked: true },
    { id: "chrome", name: "Chrome Ext", x: 800, y: 180, level: 80, category: "frontend", unlocked: true },
    
    // Backend Branch (Bottom Right)
    { id: "nodejs", name: "Node.js", x: 600, y: 450, level: 85, category: "backend", unlocked: true },
    { id: "express", name: "Express.js", x: 750, y: 500, level: 80, category: "backend", unlocked: true },
    { id: "fastapi", name: "FastAPI", x: 550, y: 550, level: 88, category: "backend", unlocked: true },
    { id: "postgresql", name: "PostgreSQL", x: 700, y: 600, level: 85, category: "backend", unlocked: true },
    { id: "supabase", name: "Supabase", x: 800, y: 550, level: 90, category: "backend", unlocked: true },
    
    // AI Branch (Top Left)
    { id: "ai", name: "AI/ML", x: 250, y: 100, level: 80, category: "ai", unlocked: true },
    { id: "gpt4", name: "GPT-4", x: 150, y: 50, level: 85, category: "ai", unlocked: true },
    { id: "gemini", name: "Gemini", x: 350, y: 50, level: 80, category: "ai", unlocked: true },
    { id: "ocr", name: "OCR", x: 300, y: 150, level: 75, category: "ai", unlocked: true },
    
    // Tools Branch (Bottom)
    { id: "git", name: "Git", x: 350, y: 550, level: 88, category: "tools", unlocked: true },
    { id: "docker", name: "Docker", x: 450, y: 600, level: 75, category: "tools", unlocked: true },
    { id: "vscode", name: "VS Code", x: 250, y: 650, level: 90, category: "tools", unlocked: true },
  ];

  // Define connections between skills
  const connections = [
    // From core to main branches
    { from: "core", to: "python" },
    { from: "core", to: "javascript" },
    { from: "core", to: "react" },
    { from: "core", to: "nodejs" },
    { from: "core", to: "git" },
    
    // Language progressions
    { from: "python", to: "ai" },
    { from: "javascript", to: "typescript" },
    { from: "javascript", to: "react" },
    { from: "python", to: "fastapi" },
    { from: "java", to: "cpp" },
    
    // Frontend progressions
    { from: "react", to: "nextjs" },
    { from: "react", to: "tailwind" },
    { from: "react", to: "chrome" },
    
    // Backend progressions
    { from: "nodejs", to: "express" },
    { from: "nodejs", to: "postgresql" },
    { from: "postgresql", to: "supabase" },
    
    // AI progressions
    { from: "ai", to: "gpt4" },
    { from: "ai", to: "gemini" },
    { from: "ai", to: "ocr" },
    
    // Tools progressions
    { from: "git", to: "docker" },
    { from: "git", to: "vscode" },
  ];

  const getCategoryColor = (category: string, level: number) => {
    const baseColors = {
      core: { primary: "180 100% 50%", glow: "180 100% 65%" }, // Cyan
      languages: { primary: "0 84% 60%", glow: "0 84% 75%" }, // Red
      frontend: { primary: "265 100% 70%", glow: "265 100% 80%" }, // Purple
      backend: { primary: "120 100% 60%", glow: "120 100% 75%" }, // Green
      ai: { primary: "45 100% 60%", glow: "45 100% 75%" }, // Yellow
      tools: { primary: "290 100% 60%", glow: "290 100% 75%" }, // Magenta
    };
    
    const colors = baseColors[category as keyof typeof baseColors] || baseColors.core;
    return {
      bg: `hsl(${colors.primary} / ${level >= 85 ? '0.8' : level >= 75 ? '0.6' : '0.4'})`,
      border: `hsl(${colors.primary})`,
      glow: `hsl(${colors.glow})`,
      connection: `hsl(${colors.primary} / 0.6)`,
    };
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="glitch" data-text="Skill Tree">
                Skill Tree
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              My technology mastery progression
            </p>
          </div>

          {/* Skill Tree Container */}
          <div className="relative bg-surface-elevated rounded-lg border border-border p-8 overflow-hidden">
            {/* SVG for connections */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              style={{ minHeight: '700px' }}
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {connections.map((connection, index) => {
                const fromNode = skillNodes.find(n => n.id === connection.from);
                const toNode = skillNodes.find(n => n.id === connection.to);
                if (!fromNode || !toNode) return null;
                
                const colors = getCategoryColor(fromNode.category, fromNode.level);
                
                return (
                  <line
                    key={index}
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={colors.connection}
                    strokeWidth="2"
                    filter="url(#glow)"
                    className="opacity-60"
                  />
                );
              })}
            </svg>

            {/* Skill Nodes */}
            <div className="relative" style={{ minHeight: '700px' }}>
              {skillNodes.map((node) => {
                const colors = getCategoryColor(node.category, node.level);
                const isCore = node.category === 'core';
                
                return (
                  <div
                    key={node.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 hover:scale-110 ${
                      isCore ? 'z-20' : 'z-10'
                    }`}
                    style={{ 
                      left: `${node.x}px`, 
                      top: `${node.y}px`,
                    }}
                  >
                    {/* Node Circle */}
                    <div
                      className={`relative w-16 h-16 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
                        isCore ? 'w-20 h-20 border-4' : ''
                      }`}
                      style={{
                        backgroundColor: colors.bg,
                        borderColor: colors.border,
                        boxShadow: `0 0 20px ${colors.glow}40`,
                      }}
                    >
                      {/* Icon for core node */}
                      {isCore && (
                        <Terminal className="h-8 w-8 text-foreground" />
                      )}
                      
                      {/* Skill Level */}
                      {!isCore && (
                        <span className="text-xs font-bold text-foreground">
                          {node.level}
                        </span>
                      )}
                      
                      {/* Hover glow effect */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                        style={{ backgroundColor: colors.glow }}
                      />
                    </div>
                    
                    {/* Node Label */}
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className={`text-xs font-mono font-semibold px-2 py-1 rounded backdrop-blur-sm ${
                        isCore ? 'text-sm bg-background/80' : 'text-xs bg-background/60'
                      }`}>
                        {node.name}
                      </span>
                    </div>
                    
                    {/* Level Badge */}
                    {!isCore && (
                      <Badge 
                        className="absolute -top-2 -right-2 text-xs px-1 min-w-0 h-5 border-0"
                        style={{ 
                          backgroundColor: colors.border,
                          color: 'white'
                        }}
                      >
                        {node.level}
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { category: 'languages', label: 'Languages', icon: <Code className="h-4 w-4" /> },
              { category: 'frontend', label: 'Frontend', icon: <Globe className="h-4 w-4" /> },
              { category: 'backend', label: 'Backend', icon: <Database className="h-4 w-4" /> },
              { category: 'ai', label: 'AI/ML', icon: <Brain className="h-4 w-4" /> },
              { category: 'tools', label: 'Tools', icon: <Wrench className="h-4 w-4" /> },
              { category: 'core', label: 'Core', icon: <Terminal className="h-4 w-4" /> },
            ].map((item) => {
              const colors = getCategoryColor(item.category, 85);
              return (
                <div key={item.category} className="flex items-center justify-center gap-2 p-2 rounded border border-border bg-surface/50">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colors.border }}
                  />
                  {item.icon}
                  <span className="text-sm font-mono">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;