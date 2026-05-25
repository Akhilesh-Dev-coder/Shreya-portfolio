import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal of career ladder rows
      gsap.fromTo(
        ".career-ladder-row",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: ".career-ladder-trigger",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    {
      year: "2024",
      period: "2024 - Present",
      role: "Lead Branding & PR Consultant",
      company: "Strategic Communications Registry",
      desc: "Directing high-stakes corporate communication campaigns and securing premier national media exposure for HNW corporate leaders, real estate conglomerates, and tech enterprises.",
      achievements: [
        "Architected PR launch for 5+ flagship properties.",
        "Increased earned media coverage value by 150%.",
        "Managed crisis management operations for leading brands.",
      ],
    },
    {
      year: "2021",
      period: "2021 - 2024",
      role: "Senior PR & Communications Strategist",
      company: "Luxury Lifestyle Brands",
      desc: "Led brand communication strategy and high-authority media relations across luxury lifestyle, hospitality, and corporate accounts, building premium editorial alliances.",
      achievements: [
        "Secured national coverage in Architectural Digest and Forbes.",
        "Engineered narrative rebranding for 12+ premium brands.",
        "Spearheaded elite influencer and corporate salons.",
      ],
    },
    {
      year: "2018",
      period: "2018 - 2021",
      role: "Brand Specialist & Media Coordinator",
      company: "Modern Media Agency",
      desc: "Designed integrated communication campaigns, established core media connection grids, and supervised daily brand servicing activities for hospitality and real estate groups.",
      achievements: [
        "Managed daily PR desks for 8 national restaurant chains.",
        "Authored 100+ high-grade press kit copy assemblies.",
        "Established firm contacts across print and digital desks.",
      ],
    },
  ];

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="py-28 md:py-40 bg-[#FAF8F5] relative overflow-hidden px-6 md:px-12 border-b border-[#1B2A3A]/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start mb-20 max-w-2xl">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 w-full">
            <span className="w-8 h-[1.5px] bg-[#C6A664] hidden lg:inline-block"></span>
            <span className="text-xs tracking-[0.25em] text-[#1B2A3A] uppercase font-extrabold font-sans">
              Registry Archives
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#111111] font-black leading-tight uppercase text-center lg:text-left">
            Professional Tenure
          </h2>
          <p className="text-sm md:text-base text-[#475569] font-sans font-semibold mt-4 leading-relaxed text-center lg:text-left">
            Tracing a path of dedicated branding, high-impact public relations milestones, and strategic communications advisory for major commercial players.
          </p>
        </div>

        {/* Career Ladder Stack */}
        <div className="career-ladder-trigger space-y-24 md:space-y-36 max-w-5xl mx-auto mt-16 text-left">
          {milestones.map((node, idx) => (
            <div
              key={idx}
              className="career-ladder-row flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 border-t border-[#1B2A3A]/10 pt-16 md:pt-24 first:border-t-0 first:pt-0 items-center lg:items-start"
            >
              
              {/* Left Column: Outline Year */}
              <div className="lg:col-span-4 flex items-center lg:items-start justify-center lg:justify-start relative w-full">
                <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(27,42,58,0.65)] text-6xl md:text-9xl font-serif font-black tracking-tighter leading-none mx-auto lg:mx-0">
                  {node.year}
                </span>
                <div className="absolute right-0 top-4 hidden lg:flex items-center gap-1 bg-[#FFFFFC] border border-[#1B2A3A]/20 px-3 py-1 text-[9px] font-sans font-extrabold tracking-widest text-[#1B2A3A]">
                  <Briefcase className="w-3 h-3" />
                  <span>RECORDED</span>
                </div>
              </div>

              {/* Right Column: Card Sheet */}
              <div className="lg:col-span-8 w-full">
                <div className="bg-[#FFFFFC] p-10 md:p-12 border border-[#C6A664]/20 rounded-none shadow-[0_20px_45px_rgba(198,166,100,0.12)] hover:border-[#1B2A3A] transition-all duration-300 w-full relative text-center lg:text-left flex flex-col items-center lg:items-start">
                  
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C6A664]/20 pointer-events-none"></div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5] border border-[#1B2A3A]/10 text-xs font-sans font-extrabold text-[#1B2A3A] mb-4 mx-auto lg:mx-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {node.period}
                  </span>

                  <h3 className="text-xl md:text-2xl font-serif font-black text-[#111111] mb-1 text-center lg:text-left">
                    {node.role}
                  </h3>
                  <span className="text-xs text-[#1B2A3A] font-sans font-extrabold uppercase tracking-widest block mb-6 text-center lg:text-left">
                    {node.company}
                  </span>

                  <p className="text-sm md:text-base text-[#475569] font-sans font-semibold leading-relaxed mb-6 text-center lg:text-left">
                    {node.desc}
                  </p>

                  <div className="space-y-3 w-full flex flex-col items-center lg:items-start">
                    {node.achievements.map((item, aIdx) => (
                      <div key={aIdx} className="flex items-start justify-center lg:justify-start gap-2.5 text-xs text-[#111111] font-sans font-extrabold uppercase">
                        <span className="w-1.5 h-1.5 bg-[#C6A664] shrink-0 mt-1.5"></span>
                        <span className="text-center lg:text-left">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
