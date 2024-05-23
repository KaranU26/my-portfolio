// layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <body className={`${inter.className} relative min-h-screen bg-black`}>
        <div className="relative z-10">
          <SpeedInsights />
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
