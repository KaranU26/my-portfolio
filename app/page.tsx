import ExperienceTimeline from "@/components/ExperienceTimeline";
import AboutSection from "@/components/about"; // Ensure the path is correct
import Email from "@/components/email-me";
import { HeroSection } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="flex-grow w-full">
        <HeroSection />
      </div>
      <TechStack />
      <div className="py-10 w-full">
        <ExperienceTimeline />
      </div>
      <Email />
    </main>
  );
}
