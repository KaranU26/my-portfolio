/* eslint-disable react/no-unescaped-entities */
export default function AboutSection() {
    return (
      <section className="relative flex flex-col items-center space-y-4 px-4 py-96 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 flex justify-center z-0">
          <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[60deg] transform translate-y-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
          <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-full origin-bottom-left rotate-12 -translate-y-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg text-center max-w-3xl">
            I'm a Full Stack Software Engineer based in Toronto, ON. I specialize in building web applications using modern technologies like React, Next.js, and Tailwind CSS. I also have experience with backend technologies like Ruby on Rails, Javascript and TypeScript.
          </p>
        </div>
      </section>
    );
  }
  