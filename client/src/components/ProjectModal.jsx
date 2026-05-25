import React, { useEffect } from "react";
import { X, CheckCircle2, TrendingUp, Award, Calendar } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  // Prevent scrolling behind modal when open
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#05060A]/40 backdrop-blur-xs transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Slide-out Drawer Panel */}
      <div className="relative w-full max-w-4xl h-full bg-[#FAF8F5] shadow-[0_0_80px_rgba(27,42,58,0.08)] flex flex-col z-10 border-l border-[#1B2A3A]/10 animate-[slideLeft_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-[#1B2A3A]/10 flex justify-between items-center bg-[#FAF8F5]">
          <div className="flex flex-col text-left">
            <span className="text-[9px] tracking-widest text-[#1B2A3A] uppercase font-extrabold mb-1">
              Case Study Review
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-black text-[#111111]">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-[#FFFFFC] hover:bg-[#1B2A3A] text-[#111111] hover:text-[#FFFFFF] border border-[#1B2A3A]/15 rounded-none transition-all duration-300 hover:scale-105"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-12 bg-[#FAF8F5]">
          
          {/* Cover Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-[#FFFFFC] p-8 md:p-10 border border-[#1B2A3A]/10 flex flex-col justify-between h-64 shadow-3xs relative overflow-hidden group">
              <div className="absolute -bottom-8 -right-8 w-40 h-40 text-[#C6A664]/5">
                <TrendingUp className="w-full h-full" />
              </div>
              <div className="relative z-10 text-left">
                <span className="text-[9px] tracking-widest text-[#1B2A3A] uppercase font-extrabold block mb-3">
                  Core Campaign Concept
                </span>
                <p className="text-lg md:text-2xl font-serif font-semibold italic text-[#111111] max-w-md leading-relaxed">
                  "{project.concept}"
                </p>
              </div>
              <div className="relative z-10 flex gap-6 mt-8 border-t border-[#1B2A3A]/10 pt-4 text-xs font-sans font-extrabold text-[#475569]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#1B2A3A]" />
                  <span>Timeline: {project.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#1B2A3A]" />
                  <span>My Role: Lead Strategist</span>
                </div>
              </div>
            </div>

            {/* Core Offerings applied */}
            <div className="bg-[#1B2A3A] p-8 text-[#FFFFFF] flex flex-col justify-between shadow-xs">
              <div className="text-left">
                <span className="text-[9px] tracking-widest text-[#FFFFFF]/75 uppercase font-extrabold block mb-4">
                  Inputs Applied
                </span>
                <h4 className="font-serif text-xl mb-6 font-black text-[#FFFFFF]">Inputs Applied</h4>
                <ul className="space-y-3">
                  {project.inputs.map((input, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-sans font-extrabold uppercase text-[#FFFFFF]">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A664] shrink-0 mt-0.5" />
                      <span>{input}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Editorial Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-[#1B2A3A]/10 pt-10">
            {/* Left Column Description */}
            <div className="lg:col-span-8 space-y-10 text-left">
              <div>
                <h4 className="text-lg font-serif font-black text-[#111111] mb-4 border-l-4 border-l-[#C6A664] pl-3 uppercase">
                  The Challenge
                </h4>
                <p className="text-sm md:text-base text-[#475569] font-sans font-semibold leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-serif font-black text-[#111111] mb-4 border-l-4 border-l-[#C6A664] pl-3 uppercase">
                  Strategic Execution
                </h4>
                <p className="text-sm md:text-base text-[#475569] font-sans font-semibold leading-relaxed">
                  {project.strategy}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-serif font-black text-[#111111] mb-4 border-l-4 border-l-[#C6A664] pl-3 uppercase">
                  Branding &amp; Media Impact
                </h4>
                <p className="text-sm md:text-base text-[#475569] font-sans font-semibold leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>

            {/* Right Column KPIs */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#FFFFFC] p-6 border border-[#1B2A3A]/10 rounded-none shadow-3xs text-left">
                <span className="text-[9px] tracking-widest text-[#1B2A3A] uppercase font-extrabold block mb-4">
                  Metrics &amp; Impact
                </span>
                <h4 className="font-serif text-lg text-[#111111] font-black mb-6 uppercase">Key Performance Indicators</h4>
                <div className="space-y-6">
                  {project.kpis.map((kpi, idx) => (
                    <div key={idx} className="border-b border-[#1B2A3A]/10 pb-4 last:border-b-0 last:pb-0">
                      <span className="text-2xl md:text-3xl font-serif font-black text-[#1B2A3A] block mb-1">
                        {kpi.value}
                      </span>
                      <span className="text-xs text-[#475569] font-sans font-extrabold uppercase">
                        {kpi.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FFFFFC] p-6 border border-[#1B2A3A]/10 rounded-none text-left">
                <span className="text-[9px] tracking-widest text-[#1B2A3A] uppercase font-extrabold block mb-2">
                  Featured Placements
                </span>
                <p className="text-xs font-sans font-semibold text-[#475569] leading-relaxed">
                  Featured in elite journals: Forbes India, The Economic Times, Business Standard, and Outlook Real Estate.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#1B2A3A]/10 flex justify-end bg-[#FAF8F5]">
          <button
            onClick={onClose}
            className="px-6 py-4 bg-[#1B2A3A] hover:bg-[#C6A664] text-[#FFFFFF] text-xs font-sans tracking-widest uppercase font-extrabold transition-colors duration-300"
          >
            CLOSE CASE DETAIL
          </button>
        </div>

      </div>
      
      {/* Slide CSS */}
      <style>{`
        @keyframes slideLeft {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
