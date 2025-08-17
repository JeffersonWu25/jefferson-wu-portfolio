const SkillsGrid = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++", "HTML/CSS"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["React", "Node.js/Express", "FastAPI", "Supabase", "Git", "PostgreSQL", "Redis"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="section-label mb-8">
              [SKILLS]
            </div>
            <h2 className="section-title">
              TECHNICAL SKILLS
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-heading font-bold">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;