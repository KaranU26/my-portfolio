import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <LinkedInLogoIcon />, url: "https://www.linkedin.com/in/karandeep-ubhi/" },
  { icon: <GitHubLogoIcon />, url: "https://github.com/KaranU26" },
];

type Link = {
  text: string;
  url: string;
};

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-5 rounded-lg px-7 py-5 md:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
        <h2 className="mr-6 hidden lg:flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent" href="#">
          Karan.dev
        </h2>
        </div>

        <div className="flex gap-x-2">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              className="flex h-5 w-5 items-center justify-center text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-500 hover:dark:text-neutral-100"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 md:flex-row md:items-center">
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
          <p>All right reserved.</p>
        </div>
      </div>
    </footer>
  );
}
