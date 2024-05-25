import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { LampContainer } from "@/components/ui/lamp";
import { HeaderSparkles } from "./ui/header";

const cardData = [
  {
    title: "Ruby on Rails",
    description: "Programming complex web application backends with Ruby on Rails.",
    hoverText: "Rails Magic",
    imageUrl: "/Ruby.png"
  },
  {
    title: "Javascript",
    description: "Programming complex web application frontends with JavaScript",
    hoverText: "React Power",
    imageUrl: "/js.png"
  },
  {
    title: "PostgreSQL",
    description: "Hover over this card to explore Node.js. Unleash the power of server-side JavaScript.",
    hoverText: "Node Efficiency",
    imageUrl: "/pg.png"
  },
  {
    title: "Next JS",
    description: "Hover over this card to explore Python. Dive into versatile programming.",
    hoverText: "Python Versatility",
    imageUrl: "/next.png"
  },
  {
    title: "Tailwind CSS",
    description: "Hover over this card to learn about Django. Explore the high-level Python framework.",
    hoverText: "Django Power",
    imageUrl: "/tw.png"
  },
  {
    title: "Python",
    description: "Hover over this card to see Vue.js in action. Learn about this progressive JavaScript framework.",
    hoverText: "Vue Simplicity",
    imageUrl: "/python.png"
  },
  {
    title: "React",
    description: "Hover over this card to learn about Django. Explore the high-level Python framework.",
    hoverText: "Django Power",
    imageUrl: "/React.png"
  },
  {
    title: "Python",
    description: "Hover over this card to see Vue.js in action. Learn about this progressive JavaScript framework.",
    hoverText: "Vue Simplicity",
    imageUrl: "/python.png"
  }
];

export function Technologies() {
  return (
    <div>
      <HeaderSparkles />
      <div className="flex flex-wrap justify-center mx-auto pb-16 w-full max-w-5xl">
        {cardData.map((card, index) => (
          <div key={index} className="border border-white/[0.2] m-2 max-w-[25%] h-[15rem]">
            <div className="relative space-y-4 p-6 h-full flex flex-col">
              <EvervaultCard imageUrl={card.imageUrl} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}