import { ProfileSection } from "./_components/profile-section";
import { ExperienceSection } from "./_components/experience-section";
import { SkillsSection } from "./_components/skills-section";
import { ProjectsSection } from "./_components/projects-section";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center min-h-dvh py-12 px-4 grainy-effect animated-blobs-bg">
            <div className="max-w-2xl mx-auto w-full relative z-10 space-y-6">
                <ProfileSection />
                <ExperienceSection />
                <SkillsSection />
                <ProjectsSection />
            </div>
        </main>
    );
}
