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

  // ডাইনামিক হেডার ক্লাস লজিক
  const getHeaderClasses = () => {
    if (scrollY <= 150) {
      return "absolute top-0 left-0 py-6 bg-transparent";
    } else if (scrollY > 150 && scrollY <= 400) {
      return "fixed top-0 left-0 py-4 bg-transparent -translate-y-full transition-none";
    } else {
      return "fixed top-0 left-0 py-4 bg-black/80 backdrop-blur-md translate-y-0 transition-transform duration-700 ease-in-out shadow-xl border-b border-white/10";
    }
  };

  // ক্লায়েন্টের ওয়েবসাইটের হুবহু মেনু ডাটা
  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "VIDEO PRODUCTION COMPANY IN CHARLOTTE NC", href: "#" },
    {
      label: "OUR SERVICES",
      href: "#",
      subMenuItems: [
        { label: "Drone Video Production in Charlotte, NC", href: "#" },
        { label: "Photography", href: "#" },
        { label: "Event photography & Video", href: "#" },
        { label: "Headshot Photography", href: "#" },
        { label: "Video Production", href: "#" },
        { label: "Video Editing in Charlotte NC", href: "#" },
        { label: "Corporate Video Production", href: "#" },
        { label: "Car Dealership Videos", href: "#" },
        { label: "Content for Social Media", href: "#" },
        { label: "Safety and Training Videos", href: "#" },
        { label: "Live Stream Service in Charlotte NC", href: "#" },
        { label: "Documentary Video Production", href: "#" },
      ],
    },
    {
      label: "AREAS WE SERVE",
      href: "#",
      subMenuItems: [
        { label: "Charlotte Video Company", href: "#" },
        { label: "Gastonia Video Company", href: "#" },
        { label: "Kannapolis Video Company", href: "#" },
        { label: "Concord Video Company", href: "#" },
        { label: "Huntersville Video Company", href: "#" },
        { label: "Mooresville Video Company", href: "#" },
        { label: "Rock Hill Video Company", href: "#" },
      ],
    },
    { label: "BLOGS", href: "#" },
    { label: "CONTACT US", href: "#" },
    {
      label: "ABOUT US",
      href: "#",
      subMenuItems: [
        { label: "FAQs", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Gallery", href: "#" },
      ],
    },
  ];

  return (
    <>
      <header className={`w-full z-50 ${getHeaderClasses()}`}>
        <div className="max-w-[95%] mx-auto flex items-center justify-between">
          
          {/* লোগো */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
                alt="Final Cut Multimedia"
                fill
                className="object-contain"
                priority
              />
            </div>
            
           <div className="flex flex-col justify-center">
  <span className="text-white text-base md:text-lg font-bold leading-none tracking-wide whitespace-nowrap">
    FINAL CUT
  </span>
  <span className="text-white text-[9px] md:text-[10px] tracking-[0.2em] leading-none mt-1 whitespace-nowrap">
    MULTIMEDIA
  </span>
</div>
          </Link>

    
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group py-4">
                <Link
                  href={item.href}
                  className="text-white/90 text-[10px] 2xl:text-[11px] font-medium tracking-widest uppercase flex items-center gap-1 transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  {item.label}
                  {item.subMenuItems && (
                    <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* সাব-মেনু */}
                {item.subMenuItems && (
                  <div 
                    // শেষের আইটেম হলে right-0 হবে, নাহলে left-0 হবে
                    className={`absolute top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${
                      index === menuItems.length - 1 ? "right-0" : "left-0"
                    }`}
                  >
                    <div className="bg-[#0f0f0f] relative pl-6 pr-8 py-6 flex flex-col gap-5 min-w-[280px]">
                      {/* সোনালী বর্ডার লাইন */}
                      <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-[#D4AF37]"></div>
                      
                      {item.subMenuItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="text-white/90 text-[11px] font-medium tracking-widest uppercase hover:text-[#D4AF37] pl-4 transition-colors duration-300"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* মোবাইল মেনু বাটন */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="xl:hidden text-white flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
          >
            <span className="text-xs font-semibold tracking-widest uppercase">Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </header>

      {/* মোবাইল ফুল-স্ক্রিন মেনু */}
      <div 
        className={`fixed inset-0 bg-[#0A0A0A] z-[60] overflow-y-auto px-6 py-10 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-8"
        }`}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white flex items-center gap-2 hover:text-[#D4AF37]"
        >
          <span className="text-xs font-semibold tracking-widest uppercase">Close</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col gap-8 mt-12">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <Link
                href={item.href}
                onClick={() => !item.subMenuItems && setIsMobileMenuOpen(false)}
                className="text-white text-lg font-bold tracking-widest uppercase hover:text-[#D4AF37]"
              >
                {item.label}
              </Link>
              
              {/* মোবাইলের জন্য সাব-মেনু */}
              {item.subMenuItems && (
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-[#D4AF37] mt-2">
                  {item.subMenuItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/70 text-xs tracking-wider uppercase hover:text-[#D4AF37]"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}