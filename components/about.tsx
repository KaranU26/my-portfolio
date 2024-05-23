// components/AboutSection.js

/* eslint-disable react/no-unescaped-entities */
export default function AboutSection() {
  return (
    <section className="relative z-20 flex flex-col items-center space-y-4 px-4 py-96 overflow-hidden">
      <div className="relative">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg text-center max-w-3xl">
          I'm a Full Stack Software Engineer based in Toronto, ON. I specialize in building web applications using modern technologies like React, Next.js, and Tailwind CSS. I also have experience with backend technologies like Ruby on Rails, Javascript and TypeScript.
        </p>
      </div>
    </section>
  );
}
