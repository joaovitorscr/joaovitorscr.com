import { ExperienceSection } from "./_components/experience-section";
import { ProfileSection } from "./_components/profile-section";
import { ProjectsSection } from "./_components/projects-section";
import { SkillsSection } from "./_components/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col justify-center items-center py-12 px-4">
      {/* Dark Noise Colored Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
    `,
          backgroundSize: "20px 20px, 30px 30px, 25px 25px",
          backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      />
      <div className="max-w-2xl mx-auto w-full relative z-10 space-y-6">
        <ProfileSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </div>
  );
}
