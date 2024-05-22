import AboutSection from "@/components/about";
import HeroSection from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
