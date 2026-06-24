"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // স্ক্রল পজিশন ট্র্যাক
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ডাইনামিক হেডার ক্লাস লজিক (আপনার আগের কোডের মতোই রাখা হয়েছে)
  const getHeaderClasses = () => {
    if (scrollY <= 150) {
      return "absolute top-0 left-0 py-6 bg-transparent";
    } else if (scrollY > 150 && scrollY <= 400) {
      return "fixed top-0 left-0 py-4 bg-transparent -translate-y-full transition-none";
    } else {
      return "fixed top-0 left-0 py-4 bg-white/90 backdrop-blur-md translate-y-0 transition-transform duration-700 ease-in-out shadow-md border-b border-gray-200";
    }
  };

  // ক্লায়েন্টের রিকয়ারমেন্ট অনুযায়ী আপডেট করা মেনু ডাটা (Single Page-এর জন্য)
  const menuItems = [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT US", href: "#about" },
    { label: "OUR SERVICES", href: "#services" },
    { label: "OUR PROCESS", href: "#process" },
    { label: "CONTACT US", href: "#contact" },
  ];

  return (
    <>
      <header className={`w-full z-50 ${getHeaderClasses()}`}>
        <div className="max-w-[95%] mx-auto flex items-center justify-between">
          
          {/* লোগো (আপনার আগের কোড) */}
          <Link href="#hero" className="flex items-center gap-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
                alt="Final Cut Multimedia"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="text-black text-base md:text-lg font-black leading-none tracking-wide whitespace-nowrap">
                FINAL CUT
              </span>
              <span className="text-gray-600 text-[9px] md:text-[10px] font-bold tracking-[0.2em] leading-none mt-1 whitespace-nowrap">
                MULTIMEDIA
              </span>
            </div>
          </Link>

          {/* ডেস্কটপ ন্যাভিগেশন */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group py-4">
                <Link
                  href={item.href}
                  // কন্ডিশনাল টেক্সট কালার আগের মতই আছে
                  className={`text-[10px] 2xl:text-[11px] font-bold tracking-widest uppercase flex items-center gap-1 transition-colors duration-300 hover:text-red-600 ${
                    scrollY > 150 ? "text-gray-800" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* মোবাইল মেনু বাটন (আপনার আগের কোড) */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="xl:hidden text-black flex items-center gap-2 hover:text-red-600 transition-colors"
          >
            <span className="text-xs font-bold tracking-widest uppercase">Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </header>

      {/* মোবাইল ফুল-স্ক্রিন মেনু (আপনার লাইট থিম ডিজাইন) */}
      <div 
        className={`fixed inset-0 bg-white z-[60] overflow-y-auto px-6 py-10 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-8"
        }`}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-black flex items-center gap-2 hover:text-red-600"
        >
          <span className="text-xs font-bold tracking-widest uppercase">Close</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col gap-8 mt-12">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <Link
                href={item.href}
                // লিংকে ক্লিক করলে যেন মেনু ক্লোজ হয়ে যায়
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black text-lg font-black tracking-widest uppercase hover:text-red-600"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}