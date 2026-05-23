import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BrandWall from "./components/BrandWall";
import Expertise from "./components/Expertise";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#111111] selection:bg-[#C6A664] selection:text-[#FFFFFF] overflow-x-hidden font-sans">
      {/* Dynamic Scroll Progress Bar (Awwwards-style details) */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#C6A664] z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Glassmorphic Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Single Page Sections */}
      <main>
        {/* Section 1: About Shreya Baid (Parallax Narrative) */}
        <About />

        {/* Section 2: Monochrome Logo Scroll Wall */}
        <BrandWall />

        {/* Section 3: Strategic Expertise Fields */}
        <Expertise />

        {/* Section 4: Project Portfolio Case Studies (Modal Drawers) */}
        <Work />

        {/* Section 5: Experience Journey Timeline */}
        <Timeline />

        {/* Section 6: Corporate Testimonials Endorsements */}
        <Testimonials />

        {/* Section 7: Let's Connect Inquiry Hub & Coordinates */}
        <Contact />
      </main>
    </div>
  );
}
