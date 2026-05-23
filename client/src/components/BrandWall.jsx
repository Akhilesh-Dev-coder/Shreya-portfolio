import React from "react";

export default function BrandWall() {
  const brands = [
    {
      name: "Keventer Realty",
      svg: (
        <svg viewBox="0 0 200 60" fill="currentColor" className="w-full h-9">
          <text x="10" y="38" fontFamily="var(--font-serif)" fontSize="18" fontWeight="bold" letterSpacing="2">KEVENTER</text>
          <text x="10" y="48" fontFamily="var(--font-sans)" fontSize="8" fontWeight="bold" letterSpacing="4" fill="#C6A664">REALTY</text>
          <line x1="10" y1="18" x2="160" y2="18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      name: "Orbit Group",
      svg: (
        <svg viewBox="0 0 200 60" fill="currentColor" className="w-full h-9">
          <circle cx="25" cy="30" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="25" cy="30" r="6" fill="#C6A664" />
          <text x="50" y="36" fontFamily="var(--font-sans)" fontSize="20" fontWeight="bold" letterSpacing="1">ORBIT</text>
          <text x="50" y="48" fontFamily="var(--font-sans)" fontSize="8" fontWeight="bold" letterSpacing="5">GROUP</text>
        </svg>
      ),
    },
    {
      name: "Dhoot Group",
      svg: (
        <svg viewBox="0 0 200 60" fill="currentColor" className="w-full h-9">
          <path d="M10 15 L25 15 L32 30 L25 45 L10 45 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="20" cy="30" r="3" fill="#C6A664" />
          <text x="45" y="38" fontFamily="var(--font-serif)" fontSize="22" fontWeight="bold" letterSpacing="1">DHOOT</text>
        </svg>
      ),
    },
    {
      name: "Sonata",
      svg: (
        <svg viewBox="0 0 200 60" fill="currentColor" className="w-full h-9">
          <text x="20" y="38" fontFamily="var(--font-serif)" fontSize="26" fontWeight="bold" letterSpacing="4">SONATA</text>
          <line x1="20" y1="44" x2="135" y2="44" stroke="#0F1E36" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "Danfoss",
      svg: (
        <svg viewBox="0 0 200 60" fill="currentColor" className="w-full h-9">
          <polygon points="10,15 40,15 35,45 15,45" fill="#C6A664" />
          <text x="50" y="38" fontFamily="var(--font-sans)" fontSize="24" fontWeight="900" letterSpacing="0">Danfoss</text>
        </svg>
      ),
    },
    {
      name: "Mamagoto",
      svg: (
        <svg viewBox="0 0 200 60" fill="currentColor" className="w-full h-9">
          <rect x="10" y="15" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="22" cy="27" r="4" fill="#C6A664" />
          <text x="45" y="36" fontFamily="var(--font-sans)" fontSize="18" fontWeight="bold" letterSpacing="2">MAMAGOTO</text>
          <text x="45" y="46" fontFamily="var(--font-sans)" fontSize="7" fontWeight="bold" letterSpacing="3">ASIAN CAFE</text>
        </svg>
      ),
    },
    {
      name: "Monkey Bar",
      svg: (
        <svg viewBox="0 0 200 60" fill="currentColor" className="w-full h-9">
          <text x="10" y="38" fontFamily="var(--font-serif)" fontSize="20" fontWeight="bold" fontStyle="italic" letterSpacing="2">monkey bar</text>
          <circle cx="130" cy="30" r="4" fill="#C6A664" />
        </svg>
      ),
    },
    {
      name: "Alcove Realty",
      svg: (
        <svg viewBox="0 0 200 60" fill="currentColor" className="w-full h-9">
          <path d="M10 42 L25 18 L40 42 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="16" y1="34" x2="34" y2="34" stroke="#0F1E36" strokeWidth="1.5" />
          <text x="50" y="36" fontFamily="var(--font-sans)" fontSize="16" fontWeight="bold" letterSpacing="3">ALCOVE</text>
          <text x="50" y="46" fontFamily="var(--font-sans)" fontSize="8" fontWeight="bold" letterSpacing="4">REALTY</text>
        </svg>
      ),
    },
    {
      name: "Google House",
      svg: (
        <svg viewBox="0 0 200 60" fill="currentColor" className="w-full h-9">
          <circle cx="25" cy="30" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" />
          <text x="50" y="36" fontFamily="var(--font-sans)" fontSize="16" fontWeight="bold" letterSpacing="2">Google</text>
          <text x="50" y="46" fontFamily="var(--font-serif)" fontSize="9" fontStyle="italic" fill="#C6A664" letterSpacing="2">H O U S E</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 bg-[#FFFFFF] border-y border-[#0F1E36]/10 relative overflow-hidden">
      <div className="w-full relative overflow-hidden flex items-center">
        {/* Soft Shadow Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none"></div>
        
        {/* Infinite Loop Ticker */}
        <div className="animate-marquee-slow flex gap-16 items-center">
          {brands.map((brand, idx) => (
            <div
              key={`ticker-1-${idx}`}
              className="w-[140px] flex-shrink-0 flex items-center justify-center text-[#475569]/40 hover:text-[#0F1E36] hover:opacity-100 transition-all duration-300"
              title={brand.name}
            >
              {brand.svg}
            </div>
          ))}
          {/* Double array for infinite scrolling */}
          {brands.map((brand, idx) => (
            <div
              key={`ticker-2-${idx}`}
              className="w-[140px] flex-shrink-0 flex items-center justify-center text-[#475569]/40 hover:text-[#0F1E36] hover:opacity-100 transition-all duration-300"
              title={brand.name}
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
