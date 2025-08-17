const WorkExperience = () => {
  const workItems = [
    {
      company: "Hyde Park Venture Partners",
      role: "Software Engineer Intern",
      metric: "85% reduction in analyst sourcing time",
      tech: "Next.js, FastAPI, PostgreSQL, Redis",
      description: "Internal sourcing tool"
    },
    {
      company: "North Shore Senior Center",
      role: "Lead Developer",
      metric: "Led team of 5, serving 25,000+ residents",
      tech: "React, Node.js, PostgreSQL",
      description: "HIPAA-compliant CRM system"
    },
    {
      company: "Sebela.ai",
      role: "Frontend Developer",
      metric: "100% client adoption",
      tech: "JavaScript, HTML/CSS",
      description: "AR try-on frontend redesign"
    }
  ];

  return (
    <section id="work" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="section-label mb-8">
              [WORK]
            </div>
            <h2 className="section-title">
              EXPERIENCE
            </h2>
          </div>

          {/* Work Grid */}
          <div className="space-y-8">
            {workItems.map((item, index) => (
              <div key={index} className="work-tile">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Left: Company & Role */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">
                        {item.company}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        {item.description} — {item.metric}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.tech}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;