import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeroSection from "@/components/hero";
import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <SpeedInsights />
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <NavBar />
        {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}


