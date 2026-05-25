import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant staggered fade reveal
      gsap.fromTo(
        ".hero-fade-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.12,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-[#FAF8F5] flex flex-col justify-center items-center overflow-hidden px-6 md:px-12 border-b border-[#1B2A3A]/10 pt-28 pb-20"
    >
      {/* Soft aesthetic background details */}
      <div className="absolute top-[10%] left-[-5%] w-[45%] h-[45%] bg-[#C6A664]/3 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Airy Editorial Messaging */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
          
          {/* Subtle Accent Tag */}
          <div className="hero-fade-reveal flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span className="w-8 h-[1.5px] bg-[#C6A664] hidden lg:inline-block"></span>
            <span className="text-xs md:text-sm tracking-[0.25em] text-[#1B2A3A] uppercase font-extrabold font-sans">
              Brand &amp; Communications Consultant
            </span>
          </div>

          {/* Colossal Elegant Heading */}
          <div className="hero-fade-reveal mb-6 w-full">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-[#111111] leading-[1.05] tracking-tight">
              SHREYA BAID
            </h1>
          </div>

          {/* Role subtitle tag */}
          <div className="hero-fade-reveal mt-2 mb-8">
            <span className="inline-block px-4 py-1.5 bg-[#1B2A3A]/5 border border-[#1B2A3A]/10 text-[#1B2A3A] font-sans text-xs tracking-[0.2em] uppercase font-extrabold">
              Branding and Communications Professional
            </span>
          </div>

          {/* Strategic Tagline (Highly spacious and readable) */}
          <p className="hero-fade-reveal text-base md:text-lg text-[#475569] font-sans font-semibold leading-relaxed max-w-xl mb-10 text-center lg:text-left">
            Building impactful brand communication through strategy, storytelling and modern media.
          </p>

          {/* Editorial CTAs */}
          <div className="hero-fade-reveal flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <a
              href="#work"
              className="px-8 py-3.5 bg-[#1B2A3A] hover:bg-[#C6A664] text-[#FFFFFF] font-sans text-xs tracking-[0.2em] uppercase font-extrabold rounded-none transition-all duration-300 shadow-md flex items-center gap-2 group"
            >
              EXPLORE WORK
              <ArrowDown className="w-4 h-4 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 bg-transparent hover:bg-[#1B2A3A]/5 text-[#1B2A3A] font-sans text-xs tracking-[0.2em] uppercase font-extrabold rounded-none border border-[#1B2A3A] transition-all duration-300 flex items-center gap-1.5 group hover:border-[#C6A664] hover:text-[#C6A664]"
            >
              COLLABORATE
              <ArrowUpRight className="w-4 h-4 text-[#1B2A3A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C6A664]" />
            </a>
          </div>
        </div>

        {/* Right Column: Spacious Typographic Manifesto Container */}
        <div className="lg:col-span-5 flex justify-center items-center w-full hero-fade-reveal pt-8 lg:pt-0">
          <div className="w-full max-w-md bg-[#FFFFFC] p-8 md:p-10 border-l-4 border-l-[#C6A664] border-y border-r border-[#1B2A3A]/10 relative text-left shadow-[0_25px_60px_rgba(198,166,100,0.15)]">
            
            <span className="text-[10px] tracking-[0.25em] text-[#1B2A3A] uppercase font-extrabold block mb-4">
              My Philosophy
            </span>

            <blockquote className="font-serif text-lg md:text-xl font-black text-[#111111] leading-relaxed italic mb-8">
              “Communication is not just visibility. It is how brands build meaningful connections.”
            </blockquote>

            <div className="border-t border-[#1B2A3A]/10 pt-6 flex justify-between items-center text-xs font-sans font-extrabold text-[#475569]">
              <span className="tracking-widest uppercase text-[#1B2A3A]">Focus</span>
              <span>Strategic PR &amp; Storytelling</span>
            </div>
          </div>
        </div>

      </div>

      {/* Explorer indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-[10px] tracking-[0.25em] text-[#1B2A3A] hover:text-[#C6A664] font-extrabold uppercase transition-colors group cursor-pointer duration-300"
      >
        <span className="mb-2">MY APPROACH</span>
        <div className="w-5 h-8 border border-[#1B2A3A]/30 flex justify-center items-start p-1 transition-all duration-300 group-hover:border-[#C6A664]">
          <div className="w-1 h-1 bg-[#1B2A3A] animate-bounce"></div>
        </div>
      </a>
    </section>
  );
}
