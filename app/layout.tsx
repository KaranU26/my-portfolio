'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen bg-black`}>
        <div className="relative z-10">
          <SpeedInsights />
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              disableTransitionOnChange
           >
          <NavBar />
          {children}
          <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
