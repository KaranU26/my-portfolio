"use client";

import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { Link } from 'lucide-react';

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
    years: '2017 - 2019',
    description: [
      'Implemented UI components and optimized performance for a large-scale e-commerce platform.',
      'Ensured the technical feasibility of UI/UX designs.',
      'Assisted in the testing and debugging of the front-end code.'
    ],
  },
  {
    id: 3,
    title: 'Company 3',
    position: 'Backend Developer',
    location: 'Austin, TX',
    years: '2015 - 2017',
    description: [
      'Designed and built RESTful APIs using Express and MongoDB.',
      'Managed and optimized database schemas.',
      'Collaborated with front-end developers to integrate user-facing elements with server-side logic.'
    ],
  },
  {
    id: 4,
    title: 'Company 4',
    position: 'Full Stack Developer',
    location: 'Seattle, WA',
    years: '2013 - 2015',
    description: [
      'Worked on both frontend and backend development, using Angular and Django.',
      'Developed and maintained the web application front-end in AngularJS.',
      'Built and maintained APIs using Django.'
    ],
  },
  {
    id: 5,
    title: 'Company 5',
    position: 'Intern',
    location: 'Remote',
    years: '2012 - 2013',
    description: [
      'Assisted in developing and testing software applications as part of an agile team.',
      'Participated in code reviews and contributed to team knowledge sharing.',
      'Helped with debugging and fixing bugs.'
    ],
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative pt-56 flex justify-center bg-black text-white">
      <div className="absolute inset-0 flex justify-center">
        <div className="timeline-line"></div>
      </div>
      <div className="space-y-36 max-w-7xl mx-auto">
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
      </div>
    </div>
  );
};

export default ExperienceTimeline;
