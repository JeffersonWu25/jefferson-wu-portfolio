const ProjectGallery = () => {
  const projects = [
    {
      title: "Course Evaluation Search",
      tech: "React, Supabase, OCR (PyPDF2/Tesseract), Gemini",
      metric: "Hackathon Winner",
      description: "Search system for course evaluations with AI-powered analysis"
    },
    {
      title: "In-Browser AI Assistant",
      tech: "Chrome Extension, GPT-4 Vision, FastAPI",
      metric: "Multimodal Q&A",
      description: "Browser extension for in-page AI assistance"
    },
    {
      title: "FarmConnect",
      tech: "React, Supabase, Node.js",
      metric: "Hackathon Winner",
      description: "Marketplace with AI recommender for agricultural feeds"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="section-label mb-8">
              [PROJECTS]
            </div>
            <h2 className="section-title">
              SELECTED WORK
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-tile">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-current rounded mx-auto mb-2"></div>
                      <p className="text-sm">Project Screenshot</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">{project.metric}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {project.tech}
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

export default ProjectGallery;