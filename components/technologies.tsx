import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

const cardData = [
  {
    title: "Ruby on Rails",
    description: "Hover over this card to reveal an awesome effect. Learn more about Rails.",
    hoverText: "Rails Magic"
  },
  {
    title: "React",
    description: "Hover over this card to see React in action. Discover component-based architecture.",
    hoverText: "React Power"
  },
  {
    title: "Node.js",
    description: "Hover over this card to explore Node.js. Unleash the power of server-side JavaScript.",
    hoverText: "Node Efficiency"
  },
  {
    title: "Python",
    description: "Hover over this card to explore Python. Dive into versatile programming.",
    hoverText: "Python Versatility"
  },
  {
    title: "Django",
    description: "Hover over this card to learn about Django. Explore the high-level Python framework.",
    hoverText: "Django Power"
  },
  {
    title: "Vue.js",
    description: "Hover over this card to see Vue.js in action. Learn about this progressive JavaScript framework.",
    hoverText: "Vue Simplicity"
  }
];

export function Technologies() {
  return (
    <div className="flex flex-wrap justify-center mx-auto p-4 pb-16 w-full max-w-7xl">
      {cardData.map((card, index) => (
        <div key={index} className="border border-white/[0.2] m-4 max-w-[30%] h-[30rem]">
          <div className="relative space-y-4 p-4 h-full flex flex-col">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
            <EvervaultCard text={card.title} />
            <h2 className="text-white text-sm font-light mt-4">
              {card.description}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
