import React, { useState } from "react";
import { Plus, Minus, CheckCircle2 } from "lucide-react";

export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);

  const expertiseData = [
    {
      num: "01",
      title: "PUBLIC RELATIONS",
      tagline: "High-Authority Placement & Media Registry",
      desc: "Architecting authoritative corporate reputations and securing premium media placements across top-tier national publications, journals, and television networks.",
      offerings: [
        "Earned Media Strategies",
        "Press Release Architecture",
        "Crisis Communications",
        "Media Relations & Placements",
      ],
    },
    {
      num: "02",
      title: "BRAND COMMUNICATION",
      tagline: "Corporate Storytelling & Identity Alignment",
      desc: "Developing cohesive and high-fidelity branding narratives that unify visual identity, brand voice, and digital presence to position companies uniquely in high-end markets.",
      offerings: [
        "Brand Identity Definition",
        "Copywriting & Storytelling",
        "Corporate Press Kits",
        "Internal & External Messages",
      ],
    },
    {
      num: "03",
      title: "CLIENT SERVICING",
      tagline: "Corporate Advisory & Account Governance",
      desc: "Delivering world-class account management and strategic consulting to ensure absolute alignment, fluid communication, and persistent long-term value for elite corporate accounts.",
      offerings: [
        "Corporate Advisory & Consulting",
        "Stakeholder Alignment",
        "Campaign Strategy Ownership",
        "High-Retention Management",
      ],
    },
    {
      num: "04",
      title: "DIGITAL MARKETING",
      tagline: "Hyper-Targeted Campaigns & Analytics Systems",
      desc: "Engineering premium, hyper-targeted digital initiatives that leverage programmatic ads, editorial SEO, and bespoke social media campaigns to drive massive brand authority.",
      offerings: [
        "Editorial Content & Social Ads",
        "Bespoke Campaign Analytics",
        "Strategic High-End SEO",
        "Paid & Influencer Strategy",
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="py-28 md:py-40 bg-[#FAF8F5] relative overflow-hidden px-6 md:px-12 border-b border-[#0F1E36]/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start mb-20 max-w-2xl">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 w-full">
            <span className="w-8 h-[1.5px] bg-[#C6A664] hidden lg:inline-block"></span>
            <span className="text-xs tracking-[0.25em] text-[#0F1E36] uppercase font-extrabold font-sans">
              Strategic Actions
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#111111] font-black leading-tight text-center lg:text-left">
            Our Core Competencies
          </h2>
          <p className="text-sm md:text-base text-[#475569] font-sans font-semibold mt-4 leading-relaxed text-center lg:text-left">
            Delivering high-value branding campaigns, comprehensive media relations solutions, and bespoke client advisory models for elite institutions.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="border-t border-[#0F1E36]/15">
          {expertiseData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`border-b border-[#0F1E36]/15 transition-all duration-500 cursor-pointer group text-center lg:text-left ${
                  isOpen ? "bg-[#FFFFFF] border-l-4 border-l-[#C6A664] shadow-[0_15px_35px_rgba(198,166,100,0.12)] z-10 relative" : "bg-transparent"
                }`}
              >
                {/* Accordion Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between py-8 md:py-10 px-8 gap-4">
                  <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto">
                    <span className="text-xs font-sans font-extrabold text-[#0F1E36] tracking-widest leading-none mx-auto lg:mx-0">
                      {item.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-black text-[#111111] group-hover:text-[#0F1E36] transition-colors duration-300 text-center lg:text-left">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 lg:gap-6 w-full lg:w-auto">
                    <span className="text-[10px] font-sans font-extrabold tracking-wider text-[#0F1E36] uppercase text-center lg:text-left">
                      {item.tagline}
                    </span>
                    <div className={`p-2 border transition-all duration-300 mx-auto lg:mx-0 ${
                      isOpen 
                        ? "bg-[#0F1E36] border-[#0F1E36] text-[#FFFFFF]" 
                        : "bg-[#FFFFFF] border-[#0F1E36]/15 text-[#111111] group-hover:bg-[#0F1E36] group-hover:text-[#FFFFFF]"
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
                    <p className="text-sm md:text-base text-[#475569] font-sans font-semibold leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right Column Core Offerings */}
                  <div className="lg:col-span-5 text-center lg:text-left border-l-0 lg:border-l border-[#0F1E36]/10 pl-0 lg:pl-8 flex flex-col items-center lg:items-start">
                    <span className="text-[9px] tracking-widest text-[#0F1E36] uppercase font-extrabold block mb-4 text-center lg:text-left">
                      Offerings Registry
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
