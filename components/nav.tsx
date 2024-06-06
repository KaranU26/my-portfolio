'use client'
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function NavBar() {

  return (
    <header className="flex h-20 w-full shrink-0 justify-between items-center px-4 md:px-6 shadow-bottom bg-black">
      <Sheet>
        <SheetTrigger asChild>
          <Link className="lg:hidden scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent" href="#">
            Karan.dev
          </Link>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="mr-6 hidden lg:flex" href="#">
            {" ICON HERE"}
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              About
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Services
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent" href="#">
        Karan.dev
      </Link>

      <div className="flex flex-row gap-2 items-center">
        <div className="flex items-center">
          <Link className="text-white hover:text-gray-300" href="https://www.linkedin.com/in/karandeep-ubhi/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="h-8 w-8 text-white align-middle" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="text-white hover:text-gray-300" href="https://github.com/KaranU26" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-8 w-8 text-white align-middle" />
          </Link>
        </div>
        <div className="flex items-center">
          <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </button>
        </div>
      </div>
    </header>
  )
}


function LinkedInIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  )
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
  )
}