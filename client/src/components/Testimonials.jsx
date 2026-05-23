import React, { useEffect, useRef } from "react";
import { Quote, MessageSquare } from "lucide-react";

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Elegant fade in testimonial rows
    const rows = containerRef.current.querySelectorAll(".testimonial-quote-row");
    rows.forEach((row) => {
      row.style.opacity = "1";
    });
  }, []);

  const testimonials = [
    {
      quote:
        "Shreya's strategic insights completely reshaped Keventer Realty's luxury brand positioning. She understands the high-net-worth narrative like no one else. Her media placements directly impacted our visibility and drove unprecedented interest to our flagship projects.",
      author: "Siddharth Dhoot",
      role: "Managing Director",
      company: "Keventer Realty",
    },
    {
      quote:
        "The digital storytelling campaign that Shreya executed for Sonata watch lines was both culturally rich and highly calculated. She captured the heart of our craftsmanship and formed an emotional bridge with millennial and Gen-Z consumers. Exceptional results.",
      author: "Rohan K. Sen",
      role: "Vice President of Communications",
      company: "Sonata Timepieces",
    },
    {
      quote:
        "Shreya brings an unparalleled combination of data-backed marketing strategy, robust editorial placement relationships, and highly diligent client servicing. She acts as a true strategic partner, aligning communications directly to commercial goals.",
      author: "Priti Orbit",
      role: "Executive Board Member",
      company: "Orbit Realty Group",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="py-28 md:py-40 bg-[#FAF8F5] relative overflow-hidden px-6 md:px-12 border-b border-[#0F1E36]/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start mb-20 max-w-2xl">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 w-full">
            <span className="w-8 h-[1.5px] bg-[#C6A664] hidden lg:inline-block"></span>
            <span className="text-xs tracking-[0.25em] text-[#0F1E36] uppercase font-extrabold font-sans">
              Endorsements
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#111111] font-black leading-tight uppercase text-center lg:text-left">
            Client Ledger
          </h2>
          <p className="text-sm md:text-base text-[#475569] font-sans font-semibold mt-4 leading-relaxed text-center lg:text-left">
            Reviews from executives detailing strategic brand growth, national editorial exposure, and high-authority media achievements.
          </p>
        </div>

        {/* Quote Grid */}
        <div className="testimonial-quote-trigger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto mt-16">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="testimonial-quote-row bg-[#FFFFFF] border border-[#0F1E36]/10 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-[#C6A664] shadow-[0_15px_45px_rgba(15,30,54,0.03)] hover:shadow-[0_25px_65px_rgba(198,166,100,0.09)] relative group rounded-none opacity-0"
            >
              {/* Top Accent bar inside card */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0F1E36] group-hover:bg-[#C6A664] transition-colors duration-500"></div>

              {/* Quote Content */}
              <div className="mb-8">
                <div className="w-9 h-9 bg-[#FAF8F5] border border-[#C6A664]/20 flex items-center justify-center text-[#C6A664] mb-6 shadow-3xs group-hover:bg-[#FFFFFF] transition-colors duration-500">
                  <Quote className="w-3.5 h-3.5 fill-current" />
                </div>
                <blockquote className="text-base md:text-[17px] font-serif font-black italic text-[#111111] leading-relaxed text-left">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author & Footer */}
              <div className="border-t border-[#0F1E36]/10 pt-6 flex items-center justify-between w-full">
                <div className="flex flex-col text-left">
                  <span className="text-xs font-sans font-extrabold text-[#111111] uppercase tracking-wider">
                    {item.author}
                  </span>
                  <span className="text-[9px] tracking-[0.18em] text-[#C6A664] font-extrabold uppercase mt-1">
                    {item.role}
                  </span>
                  <span className="text-[8px] tracking-widest text-[#475569]/80 font-extrabold uppercase mt-0.5">
                    {item.company}
                  </span>
                </div>
                <MessageSquare className="w-4 h-4 text-[#0F1E36]/20 group-hover:text-[#C6A664]/40 transition-colors duration-500 shrink-0" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
