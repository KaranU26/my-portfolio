import ExperienceTimeline from "@/components/ExperienceTimeline";
import AboutSection from "@/components/about"; // Ensure the path is correct
import { ContactForm } from "@/components/contact-form";
import { HeroSection } from "@/components/hero";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="flex-grow w-full">
        <HeroSection />
      </div>
      <Technologies />
      <div className="py-10 w-full">
        <ExperienceTimeline />
      </div>
      <div className="py-10 w-full">
        <ContactForm />
      </div>
    </main>
  );
}
