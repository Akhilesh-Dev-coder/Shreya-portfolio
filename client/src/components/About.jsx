import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, Star } from "lucide-react";
import portraitImg from "../assets/shreya_baid_portrait.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth parallax on portrait image
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const aboutParagraphs = [
    "A communications and marketing professional with experience across PR, media relations, brand communication, digital marketing and client servicing.",
    "Experienced in developing communication strategies for brands across real estate, hospitality, lifestyle, retail and enterprise sectors.",
    "Combines strategic thinking, storytelling, campaign management and communication execution to create impactful brand experiences and meaningful audience engagement."
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-28 md:py-40 bg-[#FAF8F5] relative overflow-hidden px-6 md:px-12 border-b border-[#1B2A3A]/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
        
        {/* Left Column: B&W Portrait framed elegantly */}
        <div className="lg:col-span-5 relative flex justify-center lg:sticky lg:top-32">
          <div className="relative w-full max-w-sm p-3 bg-[#FFFFFC] border border-[#1B2A3A]/10 shadow-[0_25px_60px_rgba(198,166,100,0.18)]">
            <div className="relative overflow-hidden aspect-[3/4] bg-[#FAF8F5]">
              <img
                ref={imageRef}
                src={portraitImg}
                alt="Shreya Baid Portrait"
                className="w-full h-[115%] object-cover absolute top-0 left-0 filter grayscale contrast-110 hover:grayscale-0 hover:contrast-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute bottom-6 right-6 px-3 py-1 bg-[#1B2A3A] text-[#FAF8F5] text-[9px] font-sans font-extrabold tracking-widest uppercase">
              PORTFOLIO PROFILE
            </div>
          </div>
        </div>

        {/* Right Column: Editorial narrative & highlight */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 w-full">
            <span className="w-8 h-[1.5px] bg-[#C6A664] hidden lg:inline-block"></span>
            <span className="text-xs tracking-[0.25em] text-[#1B2A3A] uppercase font-extrabold font-sans">
              MY BACKGROUND
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-[#111111] font-black mb-10 leading-tight text-center lg:text-left">
            About
          </h2>

          {/* Highlight Callout Statement (Option 2) */}
          <div className="w-full bg-[#F4EFE6] border-l-4 border-l-[#C6A664] p-8 md:p-10 mb-12 text-left relative overflow-hidden shadow-xs">
            <span className="text-[10px] tracking-[0.25em] text-[#1B2A3A] uppercase font-extrabold block mb-3">
              My Approach
            </span>
            <blockquote className="font-serif text-xl md:text-2xl font-black text-[#111111] leading-relaxed italic">
              “Strategic communication backed by creativity and execution.”
            </blockquote>
          </div>

          {/* About Paragraphs */}
          <div className="space-y-8 mb-16 w-full text-center lg:text-left">
            {aboutParagraphs.map((paragraph, idx) => (
              <p 
                key={idx} 
                className="text-base md:text-lg text-[#475569] font-sans font-semibold leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Spacious Metrics strip */}
          <div className="grid grid-cols-3 gap-6 border-t border-[#1B2A3A]/15 pt-12 w-full">
            {[
              { icon: <Award className="w-5 h-5 text-[#C6A664]" />, val: "10+ Years", label: "Tenure in PR" },
              { icon: <Users className="w-5 h-5 text-[#C6A664]" />, val: "50+ Brands", label: "Brands Advised" },
              { icon: <Star className="w-5 h-5 text-[#C6A664]" />, val: "99% Rate", label: "Placement Rate" },
            ].map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 text-[#C6A664]">
                  {metric.icon}
                  <span className="text-[10px] font-sans font-extrabold tracking-widest uppercase text-[#1B2A3A] hidden sm:inline">
                    {metric.label.split(" ")[0]}
                  </span>
                </div>
                <span className="text-lg md:text-2xl font-serif font-black text-[#111111] leading-none mb-1 text-center lg:text-left">
                  {metric.val}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-wider text-[#475569] font-extrabold uppercase text-center lg:text-left">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
