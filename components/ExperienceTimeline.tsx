"use client";

import React from 'react';

interface Experience {
  id: number;
  title: string;
  description: string;
  side: 'left' | 'right';
}

const experiences: Experience[] = [
  { id: 1, title: 'Experience 1', description: 'Description for experience 1', side: 'left' },
  { id: 2, title: 'Experience 2', description: 'Description for experience 2', side: 'right' },
  { id: 3, title: 'Experience 3', description: 'Description for experience 3', side: 'left' },
  { id: 1, title: 'Experience 1', description: 'Description for experience 1', side: 'right' },
  { id: 2, title: 'Experience 2', description: 'Description for experience 2', side: 'left' },
  { id: 3, title: 'Experience 3', description: 'Description for experience 3', side: 'right' },
  // Add more experiences as needed
];

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative pt-56">
      <div className="absolute inset-0 flex justify-center">
        <div className="w-1 timeline-line"></div>
      </div>
      <div className="space-y-56">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className={`flex ${experience.side === 'left' ? 'justify-start' : 'justify-end'} relative`}
            data-aos={experience.side === 'left' ? 'fade-right' : 'fade-left'}
          >
            <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg w-1/2 p-4 transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
