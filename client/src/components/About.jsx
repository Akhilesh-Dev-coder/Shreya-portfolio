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

  const qaBlocks = [
    {
      num: "01",
      question: "WHAT IS MY PHILOSOPHY?",
      answer: "I believe communication is a brand's most critical financial leverage. We do not design narratives to generate passive engagement; we engineer them to build permanent market authority, customer alignment, and absolute commercial trust.",
    },
    {
      num: "02",
      question: "HOW DO WE POSITION VALUE?",
      answer: "We bypass saturated marketing parameters. By securing top-tier national media placements, designing integrated digital strategies, and maintaining custom direct-mail executive salons, we position clients as irreplaceable industry leaders.",
    },
    {
      num: "03",
      question: "WHO DO WE PARTNER WITH?",
      answer: "We represent select ultra-luxury real estate developers, hospitality groups, watchmakers, and high-level corporate leaders who require bespoke branding execution, persistent advisory, and ironclad reputation networks.",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-28 md:py-40 bg-[#FAF8F5] relative overflow-hidden px-6 md:px-12 border-b border-[#0F1E36]/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
        
        {/* Left Column: B&W Portrait framed elegantly */}
        <div className="lg:col-span-5 relative flex justify-center lg:sticky lg:top-32">
          <div className="relative w-full max-w-sm p-3 bg-[#FFFFFF] border border-[#0F1E36]/10 shadow-[0_25px_60px_rgba(198,166,100,0.18)]">
            <div className="relative overflow-hidden aspect-[3/4] bg-[#FAF8F5]">
              <img
                ref={imageRef}
                src={portraitImg}
                alt="Shreya Baid Portrait"
                className="w-full h-[115%] object-cover absolute top-0 left-0 filter grayscale contrast-110 hover:grayscale-0 hover:contrast-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute bottom-6 right-6 px-3 py-1 bg-[#0F1E36] text-[#FAF8F5] text-[9px] font-sans font-extrabold tracking-widest uppercase">
              EXECUTIVE PORTFOLIO
            </div>
          </div>
        </div>

        {/* Right Column: Q&A Interview Stack */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 w-full">
            <span className="w-8 h-[1.5px] bg-[#C6A664] hidden lg:inline-block"></span>
            <span className="text-xs tracking-[0.25em] text-[#0F1E36] uppercase font-extrabold font-sans">
              Strategic Q&amp;A
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-[#111111] font-black mb-12 leading-tight text-center lg:text-left">
            An Asymmetrical Breakdown of Brand Power.
          </h2>

          {/* Q&A Items */}
          <div className="space-y-14 mb-16 w-full">
            {qaBlocks.map((block, idx) => (
              <div key={idx} className="border-b border-[#0F1E36]/10 pb-10 last:border-b-0 last:pb-0 text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start lg:flex-row gap-4 lg:gap-6">
                  <span className="text-xs font-sans font-extrabold text-[#0F1E36] tracking-widest leading-none mt-1.5 mx-auto lg:mx-0">
                    {block.num}
                  </span>
                  <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
                    <h3 className="text-lg md:text-xl font-serif font-black text-[#111111] mb-3 text-center lg:text-left">
                      {block.question}
                    </h3>
                    <p className="text-sm md:text-base text-[#475569] font-sans font-semibold leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                      {block.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Spacious Metrics strip */}
          <div className="grid grid-cols-3 gap-6 border-t border-[#0F1E36]/15 pt-12 w-full">
            {[
              { icon: <Award className="w-5 h-5 text-[#C6A664]" />, val: "10+ Years", label: "Strategic Tenure" },
              { icon: <Users className="w-5 h-5 text-[#C6A664]" />, val: "50+ Brands", label: "Advisory Success" },
              { icon: <Star className="w-5 h-5 text-[#C6A664]" />, val: "99% Rate", label: "PR Placement" },
            ].map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 text-[#C6A664]">
                  {metric.icon}
                  <span className="text-[10px] font-sans font-extrabold tracking-widest uppercase text-[#0F1E36] hidden sm:inline">
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
