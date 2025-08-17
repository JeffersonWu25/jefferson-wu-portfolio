import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import ProjectGallery from "@/components/ProjectGallery";
import SkillsGrid from "@/components/SkillsGrid";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WorkExperience />
      <ProjectGallery />
      <SkillsGrid />
      <ContactSection />
    </div>
  );
};

export default Index;
