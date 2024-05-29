"use client";

import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Link } from 'lucide-react';
import { HeaderSparkles } from './ui/header';
import { BackgroundBeams } from './ui/background-beams';

interface Experience {
  id: number;
  title: string;
  position: string;
  location: string;
  years: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'PTAG',
    position: 'Software Engineer',
    location: 'Markham, ON',
    years: 'DEC 2023 - Present',
    description: [
      'Continuously developing new features and functionalities for the Waste Management System using Ruby on Rails, enhancing system performance and user experience.',
      'Authored and maintained robust test suites using Rspec to ensure reliability and functionality of the Waste Management System, significantly reducing bugs and improving system stability.',
      'Led the seamless migration of the Waste Management System from Rails 5 to Rails 7, improving overall system functionality and security features.',
      'Conducted data experiments with large language models (LLM) using Python to assess there applicability within the internal system.'
    ],
  },
  {
    id: 2,
    title: 'PTAG',
    position: 'Junior Software Engineer',
    location: 'Markham, ON',
    years: 'DEC 2021 - DEC 2023',
    description: [
      'Spearheaded the development and successful launch of a Waste Management tracking system, directing a team of developers to meet key project milestones and enhance system reliability.',
      'Managed a partially completed Waste Management tracking project, addressing critical missing functionalities, and optimizing the development workflow to achieve on-time delivery.',
      'Led a team of developers to finalize the implementation of the Waste Management tracking system, fostering collaboration and technical skill development.',
      'Administered SQL databases and utilized Rails migrations for continuous deployment, enhancing data integrity and deployment efficiency.',
      'Coordinated the weekly production release schedule for the Waste Management tracking system, ensuring timely up dates and minimizing downtime.',
      'Integrated an async JavaScript plugin to optimize data entry and display for the Waste Management tracking system, significantly improving user interface responsiveness.'
    ],
  },
  {
    id: 3,
    title: 'PTAG',
    position: 'IT Developer Intern',
    location: 'Markham, ON',
    years: 'SEPT 2021 - DEC 2021',
    description: [
      'Acquired in-depth knowledge of software engineering best practices and process improvements, significantly enhancing coding efficiency.',
      'Collaborated with a team of developers to identify and eradicate critical software bugs, enhancing system stability and user satisfaction.',
      'Developed proficiency in Ruby on Rails framework through self-study and practical application.'
    ],
  },
  {
    id: 4,
    title: 'Magna Powertrain Inc.',
    position: 'Junior Systems Analyst',
    location: 'Markham, ON',
    years: 'AUG 2020 - DEC 2020',
    description: [
      'Investigated and resolved system issues using diagnostic tools, reducing downtime by 20% for critical operations',
    ],
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold mx-auto text-white pt-36 text-center'>Experience</h1>
      <div className="h-full w-full bg-black bg-dot-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative pt-14 flex justify-center text-white">
          <TracingBeam className="max-w-7xl mx-auto">
            {experiences.map((experience) => (
              <div
                data-aos="fade-up"
                key={experience.id}
                className="relative flex justify-center items-center"
              >
                <div className="experience-card w-full max-w-[50rem]">
                  <CardContainer>
                    <CardBody className="relative group/card hover:shadow-2xl hover:shadow-purple-400/[0.2] bg-black border-gray-700 w-full h-auto rounded-xl p-6 border">
                      <CardItem
                        translateZ="50"
                        className="text-2xl font-bold text-white"
                      >
                        {experience.title}
                      </CardItem>
                      <CardItem
                        translateZ="40"
                        className="text-xl text-gray-300"
                      >
                        {experience.position}
                      </CardItem>
                      <CardItem
                        translateZ="40"
                        className="text-md text-gray-400"
                      >
                        {experience.location}
                      </CardItem>
                      <CardItem
                        translateZ="30"
                        className="text-md text-gray-400"
                      >
                        {experience.years}
                      </CardItem>
                      <CardItem
                        translateZ="20"
                        as="ul"
                        className="text-sm max-w-full mt-2 text-gray-300 list-disc list-inside"
                        style={{ maxWidth: '40rem' }} // Adjust maxWidth as needed
                      >
                        {experience.description.map((desc, index) => (
                          <li key={index} className="break-words">{desc}</li>
                        ))}
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
              </div>
            ))}
          </TracingBeam>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
