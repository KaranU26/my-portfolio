"use client";

import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Dock, DockIcon } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import RadialGradient from "./ui/radial-gradient";
import { IconProps } from "@tabler/icons-react";

export function HeroSection() {
  const fadeInRef = useRef(null);
  const fadeInInView = useInView(fadeInRef, {
    once: true,
  });

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="hero" className="relative h-full overflow-hidden py-14">
      <RadialGradient />
      <div className="container relative z-10 flex flex-col">
        <div className="mt-20 grid grid-cols-1">
          <div className="flex flex-col items-center gap-6 pb-8 text-center">
            <Image
              src="/profile.gif"
              alt="Karan Ubhi"
              width={600}
              height={600}
              className="relative items-center rounded-full"
            />
            <motion.h1
              ref={fadeInRef}
              className="text-balance bg-gradient-to-br from-30% bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent from-white to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
              animate={fadeInInView ? "animate" : "initial"}
              variants={fadeUpVariants}
              initial={false}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
                type: "spring",
              }}
            >
              Karan Ubhi <br /> Full Stack Developer <br />
            </motion.h1>

            <motion.p
              className="text-balance text-lg tracking-tight text-gray-400 md:text-xl"
              animate={fadeInInView ? "animate" : "initial"}
              variants={fadeUpVariants}
              initial={false}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
                type: "spring",
              }}
            >
              Hi! I am a Full Stack Developer based in Toronto, ON. Feel free to reach out to me for anything!
            </motion.p>
          </div>
        </div>

        <motion.div
          animate={fadeInInView ? "animate" : "initial"}
          variants={fadeUpVariants}
          initial={false}
          transition={{
            duration: 1.4,
            delay: 0.4,
            ease: [0.21, 0.47, 0.32, 0.98],
            type: "spring",
          }}
          className="relative mt-24 flex justify-center items-center h-full w-full rounded-xl after:absolute after:inset-0 after:z-10 after:[background:linear-gradient(to_top,#000000_30%,transparent)]"
        >
          <div
            className={cn(
              "absolute inset-0 bottom-1/2 h-full w-full transform-gpu [filter:blur(120px)]",
              "[background-image:linear-gradient(to_bottom,#ffffff,transparent_30%)]"
            )}
          />
          {/* <video
            autoPlay
            loop
            muted
            src="demo.mp4"
            className="h-auto w-full"
          /> */}
        </motion.div>
      </div>
    </section>
  );
}