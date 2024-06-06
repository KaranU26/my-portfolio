import Marquee from "@/components/ui/marquee";

const companies = [
  "Ruby.png",
  "next.png",
  "js.png",
  "React.png",
  "tw.png",
  "pg.png",
  "python.png",
  "ts.png"
];

export function TechStack() {
  return (
    <section id="companies">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
   
          <div className="relative mt-6">
            <Marquee className="max-w-full [--duration:10s]">
              {companies.map((logo, idx) => (
                <img
                  key={idx}
                  src={`${logo}`}
                  className="h-20 w-30"
                  alt={logo}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/3 bg-gradient-to-l from-white dark:from-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
