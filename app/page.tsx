// pages/index.tsx or pages/page.tsx (adjust according to your project structure)

import AboutSection from "@/components/about"; // Ensure the path is correct
import { HeroSection } from "@/components/hero";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col ">
      <HeroSection />
      <Technologies />
    </main>
  );
}
