import React, { useState } from "react";
import { Plus, Minus, CheckCircle2 } from "lucide-react";

export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);

  const expertiseData = [
    {
      num: "01",
      title: "PUBLIC RELATIONS",
      tagline: "Earned Media & Editorial Narrative",
      desc: "Media relations, press communication, launch visibility and brand storytelling.",
      offerings: [
        "Media Relations",
        "Press Communication",
        "Launch Visibility",
        "Brand Storytelling",
      ],
    },
    {
      num: "02",
      title: "BRAND COMMUNICATION",
      tagline: "Identity Alignment & Positioning",
      desc: "Positioning, messaging and integrated communication strategy.",
      offerings: [
        "Brand Positioning",
        "Messaging Frameworks",
        "Corporate Press Kits",
        "Integrated Strategy",
      ],
    },
    {
      num: "03",
      title: "CLIENT SERVICING",
      tagline: "Account Governance & Synergy",
      desc: "End-to-end campaign coordination and stakeholder management.",
      offerings: [
        "Campaign Coordination",
        "Stakeholder Alignment",
        "End-to-End Account Ownership",
        "Relationship Advisory",
      ],
    },
    {
      num: "04",
      title: "DIGITAL MARKETING",
      tagline: "Calculated Media & Performance",
      desc: "Paid campaigns, performance marketing and communication planning.",
      offerings: [
        "Paid Campaigns",
        "Performance Marketing",
        "Communication Planning",
        "Analytic Diagnostics",
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="py-28 md:py-40 bg-[#FAF8F5] relative overflow-hidden px-6 md:px-12 border-b border-[#1B2A3A]/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start mb-20 max-w-2xl">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 w-full">
            <span className="w-8 h-[1.5px] bg-[#C6A664] hidden lg:inline-block"></span>
            <span className="text-xs tracking-[0.25em] text-[#1B2A3A] uppercase font-extrabold font-sans">
              MY EXPERTISE
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#111111] font-black leading-tight text-center lg:text-left">
            Core Expertise
          </h2>
          <p className="text-base md:text-lg text-[#475569] font-sans font-semibold mt-4 leading-relaxed text-center lg:text-left">
            I build bespoke branding campaigns, secure comprehensive media relations, and provide direct, strategic client advisory.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="border-t border-[#1B2A3A]/15">
          {expertiseData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`border-b border-[#1B2A3A]/15 transition-all duration-500 cursor-pointer group text-center lg:text-left ${
                  isOpen ? "bg-[#FFFFFC] border-l-4 border-l-[#C6A664] shadow-[0_15px_35px_rgba(198,166,100,0.12)] z-10 relative" : "bg-transparent"
                }`}
              >
                {/* Accordion Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between py-8 md:py-10 px-8 gap-4">
                  <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto">
                    <span className="text-xs font-sans font-extrabold text-[#1B2A3A] tracking-widest leading-none mx-auto lg:mx-0">
                      {item.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-black text-[#111111] group-hover:text-[#1B2A3A] transition-colors duration-300 text-center lg:text-left">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 lg:gap-6 w-full lg:w-auto">
                    <span className="text-[10px] font-sans font-extrabold tracking-wider text-[#1B2A3A] uppercase text-center lg:text-left">
                      {item.tagline}
                    </span>
                    <div className={`p-2 border transition-all duration-300 mx-auto lg:mx-0 ${
                      isOpen 
                        ? "bg-[#1B2A3A] border-[#1B2A3A] text-[#FFFFFF]" 
                        : "bg-[#FFFFFC] border-[#1B2A3A]/15 text-[#111111] group-hover:bg-[#1B2A3A] group-hover:text-[#FFFFFF]"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Accordion Content */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[600px] lg:max-h-[500px] pb-12 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  {/* Left Column Description */}
                  <div className="lg:col-span-7 text-center lg:text-left">
                    <p className="text-base md:text-lg text-[#475569] font-sans font-semibold leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right Column Core Offerings */}
                  <div className="lg:col-span-5 text-center lg:text-left border-l-0 lg:border-l border-[#1B2A3A]/10 pl-0 lg:pl-8 flex flex-col items-center lg:items-start">
                    <span className="text-[9px] tracking-widest text-[#1B2A3A] uppercase font-extrabold block mb-4 text-center lg:text-left">
                      Offerings
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full justify-center lg:justify-start">
                      {item.offerings.map((offering, oIdx) => (
                        <div key={oIdx} className="flex items-center justify-center lg:justify-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C6A664] shrink-0" />
                          <span className="text-xs font-sans font-extrabold text-[#111111] text-center lg:text-left">
                            {offering}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
