import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { LampContainer } from "@/components/ui/lamp";

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
  }
];

export function Technologies() {
  return (
    <div className="py-20">
      <div className="flex flex-wrap justify-center mx-auto p-4 pb-16 w-full max-w-7xl">
        {cardData.map((card, index) => (
          <div key={index} className="border border-white/[0.2] m-4 max-w-[30%] h-[30rem]">
            <div className="relative space-y-4 p-4 h-full flex flex-col">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
              <Icon className="absolute h-6 w-6 -top-7 -right-3 text-white" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
              <EvervaultCard imageUrl={card.imageUrl} />
              <h2 className="text-white text-sm font-lg font-semibold opacity-80 mt-4">
                {card.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}