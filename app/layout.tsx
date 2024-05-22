import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AnimatedBackground from "@/components/animated_background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karandeep Ubhi",
  description: "Welcome to my Portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <div className="relative z-10">
          <SpeedInsights />
          <NavBar />
          <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
            <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
          </div>
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
