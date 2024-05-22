import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden py-24 lg:py-32 z-10">
      <div className="relative z-10">
        <div className="container py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p>My name is Karandeep Ubhi</p>
            <div className="mt-5 max-w-2xl">
              <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl p-2">
                Welcome to my Portfolio!
              </h1>
            </div>
            <div className="mt-5 max-w-3xl">
              <p className="text-xl text-muted-foreground">
                I am a Full Stack Developer based in Toronto, ON.
              </p>
            </div>
            <div className="mt-8 gap-3 flex justify-center">
              <Button size={"lg"}>Get started</Button>
              <Button size={"lg"} variant={"outline"}>
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
