import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERTISE", href: "#expertise" },
    { name: "WORK", href: "#work" },
    { name: "TIMELINE", href: "#timeline" },
    { name: "TESTIMONIALS", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#FAF8F5]/95 border-b border-[#0F1E36]/10 shadow-xs"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Monogram Initials Logo */}
        <a href="#hero" className="flex items-center gap-4 group">
          <span className="w-10 h-10 bg-[#0F1E36] flex items-center justify-center text-[#FAF8F5] font-sans font-extrabold text-xl tracking-tighter transition-all duration-300 group-hover:bg-[#C6A664]">
            SB
          </span>
          <div className="flex flex-col text-left">
            <span className="font-serif text-xl tracking-tight text-[#111111] font-black uppercase leading-none">
              Shreya Baid
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#0F1E36] uppercase font-extrabold font-sans mt-1">
              Branding &amp; PR
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-sans tracking-[0.2em] text-[#475569] hover:text-[#0F1E36] font-extrabold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C6A664] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-6 py-2.5 bg-[#0F1E36] hover:bg-[#C6A664] text-[#FFFFFF] text-xs font-sans tracking-[0.2em] uppercase font-extrabold transition-all duration-300 group shadow-md"
          >
            LET'S TALK
            <ArrowUpRight className="w-4 h-4 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 bg-[#FFFFFF] border border-[#0F1E36]/15 text-[#111111] hover:bg-[#0F1E36] hover:text-[#FFFFFF] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Opaque Full Screen Mobile Menu Overlay (Warm Cream Canvas) */}
      <div
        className={`fixed inset-0 bg-[#FAF8F5] z-[100] flex flex-col justify-between px-6 py-6 transition-all duration-500 ease-in-out md:hidden border-l border-[#0F1E36]/10 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {/* Top Header inside overlay */}
        <div className="flex justify-between items-center border-b border-[#0F1E36]/15 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 bg-[#0F1E36] flex items-center justify-center text-[#FAF8F5] font-sans font-extrabold text-xl">
              SB
            </span>
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg tracking-wider text-[#111111] font-black uppercase">
                Shreya Baid
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#0F1E36] uppercase font-extrabold">
                Branding &amp; PR
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-[#FFFFFF] border border-[#0F1E36]/15 text-[#111111] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Serif Links */}
        <div className="flex flex-col gap-6 my-auto text-left py-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-3xl text-[#111111] hover:text-[#0F1E36] font-black tracking-tight transition-colors duration-300 flex items-center justify-between group border-b border-[#0F1E36]/10 pb-3"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-sans text-[#0F1E36] font-extrabold">0{idx + 1}</span>
                <span>{link.name}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#0F1E36]" />
            </a>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="flex flex-col gap-6 pt-4 border-t border-[#0F1E36]/15">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#0F1E36] text-[#FFFFFF] uppercase tracking-[0.2em] font-sans text-xs font-extrabold transition-all hover:bg-[#C6A664]"
          >
            START INQUIRY
            <ArrowUpRight className="w-4 h-4 text-[#FFFFFF]" />
          </a>
          <div className="text-center text-[10px] text-[#475569] uppercase tracking-[0.25em] font-extrabold">
            shreya baid &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </nav>
  );
}
