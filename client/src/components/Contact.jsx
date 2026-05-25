import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Globe, Send, CheckCircle } from "lucide-react";

const Linkedin = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant slide reveal
      gsap.fromTo(
        ".contact-asym-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".contact-trigger-zone",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", org: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-28 md:py-40 bg-[#FAF8F5] relative overflow-hidden px-6 md:px-12 border-b border-[#1B2A3A]/10"
    >
      <div className="max-w-7xl mx-auto relative z-10 contact-trigger-zone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          
          {/* Left Column (Coordinates) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left contact-asym-reveal w-full">
            <div className="w-full flex flex-col items-center lg:items-start">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 w-full">
                <span className="w-8 h-[1.5px] bg-[#C6A664] hidden lg:inline-block"></span>
                <span className="text-xs tracking-[0.25em] text-[#1B2A3A] uppercase font-extrabold font-sans">
                  GET IN TOUCH
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif font-black text-[#111111] mb-8 leading-tight text-center lg:text-left">
                Let’s Connect
              </h2>
              
              <p className="text-base md:text-lg text-[#475569] font-sans font-semibold leading-relaxed mb-12 max-w-md text-center lg:text-left mx-auto lg:mx-0">
                Ready to elevate your brand's voice, secure premium media exposure, and define your digital identity? Reach out to collaborate directly.
              </p>

              {/* Coordinates List */}
              <div className="space-y-6 w-full">
                {[
                  {
                    icon: <Mail className="w-4 h-4 text-[#C6A664]" />,
                    title: "Email Address",
                    val: "Shreyabaid1992@gmail.com",
                    href: "mailto:Shreyabaid1992@gmail.com",
                  },
                  {
                    icon: <Phone className="w-4 h-4 text-[#C6A664]" />,
                    title: "Phone Line",
                    val: "8095998189",
                    href: "tel:8095998189",
                  },
                  {
                    icon: <Linkedin className="w-4 h-4 text-[#C6A664]" />,
                    title: "LinkedIn Profile",
                    val: "linkedin.com/in/shreyabaid",
                    href: "https://linkedin.com/in/shreyabaid",
                  },
                  {
                    icon: <Globe className="w-4 h-4 text-[#C6A664]" />,
                    title: "Portfolio Website",
                    val: "shreyabaid.com",
                    href: "#hero",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 py-4 border-b border-[#1B2A3A]/10 hover:border-[#C6A664]/40 transition-all duration-300 group w-full"
                  >
                    <div className="bg-[#FFFFFC] p-2.5 border border-[#C6A664]/30 group-hover:bg-[#C6A664] group-hover:text-[#FFFFFF] transition-colors duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
                      <span className="text-[9px] tracking-widest text-[#1B2A3A] uppercase font-extrabold font-sans mb-1 text-center lg:text-left">
                        {item.title}
                      </span>
                      <span className="text-sm font-serif font-black text-[#111111] group-hover:text-[#C6A664] transition-colors text-center lg:text-left">
                        {item.val}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom mini copyright */}
            <div className="hidden lg:block mt-12 text-xs text-[#475569] tracking-[0.25em] font-extrabold font-sans uppercase text-left">
              Shreya Baid &copy; {new Date().getFullYear()} &bull; Branding &amp; Communications Consultant.
            </div>
          </div>

          {/* Right Column (Intake Form) */}
          <div className="lg:col-span-7 contact-asym-reveal w-full">
            <div className="bg-[#FFFFFC] p-10 md:p-16 border border-[#C6A664]/20 rounded-none shadow-[0_25px_60px_rgba(198,166,100,0.18)] relative overflow-hidden text-left">
              
              {/* Gold border accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C6A664]"></div>

              {isSubmitted ? (
                /* Success Feedback Screen */
                <div className="py-12 flex flex-col items-center text-center justify-center space-y-6 animate-[fadeUp_0.5s_ease_forwards]">
                  <div className="w-16 h-16 bg-[#FAF8F5] border border-[#C6A664]/30 rounded-none flex items-center justify-center text-[#C6A664] mb-2 shadow-3xs mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-black text-[#111111] uppercase text-center">
                    Message Sent
                  </h3>
                  <p className="text-sm md:text-base text-[#475569] font-sans font-semibold max-w-md leading-relaxed text-center">
                    Thank you! Your message has been sent directly to my inbox. I will personally review it and get back to you within 24 hours to align calendar details.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-4 bg-[#FAF8F5] hover:bg-[#FFFFFC] text-[#1B2A3A] text-xs font-sans tracking-widest uppercase font-extrabold rounded-none border border-[#C6A664]/30 transition-colors duration-300 mx-auto"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                /* Minimal horizontal line inputs */
                <form onSubmit={handleSubmit} className="space-y-8 text-left">
                  <h3 className="text-xl font-serif font-black text-[#111111] mb-6 uppercase text-center lg:text-left">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-[10px] tracking-widest text-[#1B2A3A] uppercase font-extrabold font-sans mb-1 text-center lg:text-left">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Siddharth Dhoot"
                        className="w-full bg-transparent border-b-2 border-b-[#1B2A3A]/15 focus:border-b-[#C6A664] outline-hidden text-[#111111] text-lg font-serif py-3 transition-colors duration-300 placeholder-[#475569]/30 text-center lg:text-left"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-[10px] tracking-widest text-[#1B2A3A] uppercase font-extrabold font-sans mb-1 text-center lg:text-left">
                        Professional Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. executive@keventer.com"
                        className="w-full bg-transparent border-b-2 border-b-[#1B2A3A]/15 focus:border-b-[#C6A664] outline-hidden text-[#111111] text-lg font-serif py-3 transition-colors duration-300 placeholder-[#475569]/30 text-center lg:text-left"
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="flex flex-col">
                    <label htmlFor="org" className="text-[10px] tracking-widest text-[#1B2A3A] uppercase font-extrabold font-sans mb-1 text-center lg:text-left">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="org"
                      id="org"
                      value={formData.org}
                      onChange={handleChange}
                      placeholder="e.g. Keventer Realty"
                      className="w-full bg-transparent border-b-2 border-b-[#1B2A3A]/15 focus:border-b-[#C6A664] outline-hidden text-[#111111] text-lg font-serif py-3 transition-colors duration-300 placeholder-[#475569]/30 text-center lg:text-left"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-[10px] tracking-widest text-[#1B2A3A] uppercase font-extrabold font-sans mb-1 text-center lg:text-left">
                      Your Project Goals or Inquiries *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your brand, your objectives, or what you'd like to collaborate on."
                      className="w-full bg-transparent border-b-2 border-b-[#1B2A3A]/15 focus:border-b-[#C6A664] outline-hidden text-[#111111] text-lg font-serif py-3 transition-colors duration-300 resize-none placeholder-[#475569]/30 text-center lg:text-left"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4.5 bg-[#1B2A3A] hover:bg-[#C6A664] text-[#FFFFFF] text-xs font-sans tracking-[0.2em] uppercase font-extrabold rounded-none transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_25px_rgba(27,42,58,0.25)]"
                  >
                    {loading ? (
                      <span className="animate-pulse">SENDING MESSAGE...</span>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="w-4 h-4 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Mobile-only copyright */}
            <div className="block lg:hidden mt-8 text-center text-xs text-[#475569] tracking-[0.25em] font-extrabold font-sans uppercase">
              Shreya Baid &copy; {new Date().getFullYear()} &bull; Branding &amp; Communications Consultant.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
