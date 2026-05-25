import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Award, Calendar } from "lucide-react";
import ProjectModal from "./ProjectModal";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant scroll reveal for portfolio rows
      gsap.fromTo(
        ".portfolio-feature-row",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: ".portfolio-trigger-zone",
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Adventz Keventer",
      concept: "The Lineage of Luxury: Defining Curated Living",
      category: "PR & Brand Communication",
      period: "8 Months (2025)",
      inputs: [
        "Editorial Copywriting",
        "National PR Placements",
        "Elite Influencer Events",
        "Digital Lead Acquisition",
      ],
      challenge:
        "The premium housing market in Kolkata was highly saturated with standard definitions of 'luxury'. The Adventz Keventer project required a highly distinct narrative to capture ultra-high-net-worth individuals and position itself not just as real estate, but as an irreplaceable heritage asset.",
      strategy:
        "I developed a sophisticated communication narrative titled 'Curated Living', focusing on architectural ancestry, absolute privacy, and legacy value. I secured high-level features in Forbes India, Economic Times, and Architectural Digest. Additionally, I bypassed standard display ads in favor of exclusive private salons and customized direct-mail packages for high-net-worth lists.",
      impact:
        "My highly targeted communications funnel shifted the project's reputation from standard premium to a coveted private estate. This strategic positioning achieved a massive influx of direct inquiries and solidified Keventer Realty's status as a top-tier luxury developer in Eastern India.",
      kpis: [
        { value: "45%", metric: "Increase in HNW Lead Generation" },
        { value: "100%", metric: "Top-Tier Editorial Placements" },
        { value: "Phase 1", metric: "Residences Completely Sold Out" },
      ],
      theme: {
        cardBg: "bg-[#FAF6EE]",
        cardBorder: "border-[#C6A664]/30",
        shadow: "shadow-[0_25px_60px_rgba(198,166,100,0.06)] hover:shadow-[0_35px_80px_rgba(198,166,100,0.15)] hover:border-[#C6A664]/60",
        categoryText: "text-[#1B2A3A]",
        categoryBg: "bg-[#FFFFFC]",
        categoryBorder: "border-[#1B2A3A]/20",
        titleText: "text-[#1B2A3A] group-hover:text-[#C6A664]",
        conceptText: "text-[#475569]",
        buttonBg: "bg-[#1B2A3A] hover:bg-[#C6A664] text-[#FFFFFF] hover:text-[#FFFFFF]",
        buttonIcon: "text-[#FFFFFF]",
        statLabel: "text-[#1B2A3A]",
        statValue: "text-[#1B2A3A]",
        kpiLabel: "text-[#475569]",
        kpiBorder: "border-[#1B2A3A]/10",
        timelineIcon: "text-[#1B2A3A]",
        timelineText: "text-[#475569]",
      }
    },
    {
      id: 2,
      title: "Sonata",
      concept: "The Essence of Craft: Timepieces with Heritage",
      category: "Digital Marketing & Copywriting",
      period: "6 Months (2025-2026)",
      inputs: [
        "Digital Brand Strategy",
        "Storytelling & Ad Copy",
        "Influencer Collaborations",
        "Public Relations Outreach",
      ],
      challenge:
        "Sonata's brand communication was predominantly focused on functional utility rather than brand affinity, leading to stagnant engagement rates among modern millennial and Gen-Z consumers who seek emotional alignment and storytelling.",
      strategy:
        "I executed a comprehensive communication shift, moving the messaging toward craftsmanship, cultural legacy, and personal identity. I designed a story-driven social media program, developed premium editorial features, and curated influencer-led storytelling campaigns that positioned Sonata as the signature accessory for modern professionals.",
      impact:
        "By grounding the campaign in human storytelling and modern media channels, the brand formed genuine emotional connections with the new demographic. This digital-first brand positioning resulted in a substantial boost in positive sentiment and established a solid framework for future collections.",
      kpis: [
        { value: "+60%", metric: "Uplift in Brand Digital Sentiment" },
        { value: "+35%", metric: "Sales Growth via Digital Channels" },
        { value: "12+", metric: "Major Media Lifestyle Features" },
      ],
      theme: {
        cardBg: "bg-[#1B2A3A]",
        cardBorder: "border-[#1B2A3A]",
        shadow: "shadow-[0_25px_60px_rgba(27,42,58,0.15)] hover:shadow-[0_35px_80px_rgba(27,42,58,0.28)] hover:border-[#C6A664]/30",
        categoryText: "text-[#FAF8F5]",
        categoryBg: "bg-[#1B2A3A]/60",
        categoryBorder: "border-[#FAF8F5]/30",
        titleText: "text-[#FFFFFF] group-hover:text-[#C6A664]",
        conceptText: "text-[#E2E8F0]",
        buttonBg: "bg-[#C6A664] hover:bg-[#FAF8F5] text-[#1B2A3A] hover:text-[#1B2A3A]",
        buttonIcon: "text-[#1B2A3A]",
        statLabel: "text-[#C6A664]",
        statValue: "text-[#C6A664]",
        kpiLabel: "text-[#E2E8F0]/80",
        kpiBorder: "border-[#FAF8F5]/10",
        timelineIcon: "text-[#C6A664]",
        timelineText: "text-[#E2E8F0]/85",
      }
    },
  ];

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-28 md:py-40 bg-[#FAF8F5] relative overflow-hidden px-6 md:px-12 border-b border-[#1B2A3A]/10"
    >
      <div className="max-w-7xl mx-auto portfolio-trigger-zone">
        
        {/* Header */}
        <div className="text-center lg:text-left mb-20 md:mb-28 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start w-full">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 w-full">
              <span className="w-8 h-[1.5px] bg-[#C6A664] hidden lg:inline-block"></span>
              <span className="text-xs tracking-[0.25em] text-[#1B2A3A] uppercase font-extrabold font-sans">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#111111] font-black leading-tight text-center lg:text-left">
              Selected Work
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#475569] font-sans font-semibold max-w-md text-center lg:text-left leading-relaxed mx-auto lg:mx-0">
            Selected campaigns demonstrating my strategic brand positioning, high-authority media coverage, and direct market outcomes.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="space-y-24 md:space-y-36">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`portfolio-feature-row flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 p-8 md:p-12 lg:p-16 border rounded-none text-center lg:text-left items-center lg:items-start transition-all duration-500 hover:-translate-y-2 group ${project.theme.cardBg} ${project.theme.cardBorder} ${project.theme.shadow}`}
            >
              
              {/* Left Column (Metadata) */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
                <div className="w-full flex justify-center lg:justify-start mb-6">
                  <span className={`text-[10px] tracking-widest border px-4 py-1.5 font-sans font-extrabold uppercase ${project.theme.categoryText} ${project.theme.categoryBg} ${project.theme.categoryBorder}`}>
                    {project.category}
                  </span>
                </div>

                <h3 className={`text-2xl md:text-4xl lg:text-5xl font-serif font-black mb-4 transition-colors duration-300 text-center lg:text-left ${project.theme.titleText}`}>
                  {project.title}
                </h3>

                <p className={`text-base md:text-lg font-serif font-semibold italic leading-relaxed max-w-lg mb-8 text-center lg:text-left mx-auto lg:mx-0 ${project.theme.conceptText}`}>
                  "{project.concept}"
                </p>

                <button
                  onClick={() => setActiveProject(project)}
                  className={`self-center lg:self-start flex items-center gap-2 px-6 py-3.5 text-xs font-sans tracking-[0.2em] uppercase font-extrabold transition-all duration-300 shadow-[0_8px_25px_rgba(27,42,58,0.15)] group/btn mx-auto lg:mx-0 ${project.theme.buttonBg}`}
                >
                  EXPLORE CASE BRIEF
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 ${project.theme.buttonIcon}`} />
                </button>
              </div>

              {/* Right Column (Stat Ladder) */}
              <div className={`lg:col-span-5 flex flex-col items-center lg:items-start border-l-0 lg:border-l pl-0 lg:pl-12 pt-8 lg:pt-0 w-full ${project.theme.kpiBorder}`}>
                <div className="w-full">
                  <span className={`text-[9px] tracking-widest uppercase font-extrabold block mb-6 text-center lg:text-left ${project.theme.statLabel}`}>
                    Campaign Impact
                  </span>
                  
                  <div className="space-y-6">
                    {project.kpis.map((kpi, idx) => (
                      <div key={idx} className={`flex flex-col sm:flex-row justify-center lg:justify-between items-center lg:items-end border-b pb-6 last:border-b-0 last:pb-0 gap-2 ${project.theme.kpiBorder}`}>
                        <span className={`text-xs font-sans font-extrabold uppercase tracking-wider text-center lg:text-left ${project.theme.kpiLabel}`}>
                          {kpi.metric}
                        </span>
                        <span className={`text-2xl md:text-3xl font-serif font-black leading-none shrink-0 pl-0 lg:pl-4 text-center lg:text-left ${project.theme.statValue}`}>
                          {kpi.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mt-8 pt-6 border-t flex flex-wrap justify-center lg:justify-start gap-6 text-[10px] font-extrabold uppercase w-full ${project.theme.kpiBorder} ${project.theme.timelineText}`}>
                  <div className="flex items-center gap-1.5">
                    <Calendar className={`w-3.5 h-3.5 ${project.theme.timelineIcon}`} />
                    <span>TIMELINE: {project.period.split(" ")[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className={`w-3.5 h-3.5 ${project.theme.timelineIcon}`} />
                    <span>STATUS: COMPLETED</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Case Study Details Modal Panel (Rendered Conditionally) */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
