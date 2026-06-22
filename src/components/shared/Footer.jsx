"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const usefulPages = [
    { name: "HOME", url: "/" },
    { name: "ABOUT US", url: "#" },
    { name: "FAQ'S", url: "#" },
    { name: "SERVICES", url: "#" },
    { name: "BLOGS", url: "#" },
  ];

  const services = [
    { name: "EDITING", url: "#" },
    { name: "PHOTOGRAPHY", url: "#" },
    { name: "VIDEO PRODUCTION", url: "#" },
    { name: "CORPORATE EVENTS", url: "#" },
    { name: "CAR DEALERSHIP VIDEOS", url: "#" },
  ];

  return (
    <footer className="relative w-full bg-gray-50 pt-[12vh] pb-[4vh] border-t border-gray-200 overflow-hidden">
      
      {/* ফুটার ব্যাকগ্রাউন্ড লোগো ওয়াটারমার্ক (Watermark) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
        <div className="relative w-[120vw] h-[120vh] md:w-[60vw] md:h-[60vh]">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
            alt="Final Cut Multimedia Background Watermark"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[90vw] mx-auto flex flex-col">
        
        {/* ৪-কলাম ফুটার গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[8vw] md:gap-[4vw] mb-[8vh]">
          
          {/* কলাম ১: About Company */}
          <div className="flex flex-col">
            <div className="relative w-[15vw] h-[10vh] md:w-[6vw] md:h-[6vh] mb-[3vh]">
              <Image
                src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
                alt="Final Cut Multimedia Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h3 className="text-black text-[4.5vw] md:text-[1.2vw] font-bold uppercase tracking-widest mb-[3vh]">
              ABOUT COMPANY
            </h3>
            <p className="text-gray-600 text-[3.5vw] md:text-[0.9vw] leading-relaxed">
              Final Cut Multimedia is a creative production company specializing in video, photography, and digital content. We capture stories that inspire, events that matter, and visuals that connect. Our mission: transforming ideas into impactful content that lasts.
            </p>
          </div>

          {/* কলাম ২: Useful Pages */}
          <div className="flex flex-col">
            <h3 className="text-black text-[4.5vw] md:text-[1.2vw] font-bold uppercase tracking-widest mb-[3vh]">
              USEFUL PAGES
            </h3>
            <ul className="flex flex-col gap-[2vh]">
              {usefulPages.map((page, index) => (
                <li key={index}>
                  <Link href={page.url} className="text-gray-600 text-[3.5vw] md:text-[0.9vw] font-medium tracking-wider hover:text-red-600 transition-colors uppercase">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* কলাম ৩: Services */}
          <div className="flex flex-col">
            <h3 className="text-black text-[4.5vw] md:text-[1.2vw] font-bold uppercase tracking-widest mb-[3vh]">
              SERVICES
            </h3>
            <ul className="flex flex-col gap-[2vh]">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.url} className="text-gray-600 text-[3.5vw] md:text-[0.9vw] font-medium tracking-wider hover:text-red-600 transition-colors uppercase">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* কলাম ৪: Contact Me & Privacy */}
          <div className="flex flex-col">
            <h3 className="text-black text-[4.5vw] md:text-[1.2vw] font-bold uppercase tracking-widest mb-[3vh]">
              CONTACT ME
            </h3>
            <div className="flex flex-col gap-[2vh] mb-[4vh]">
              <a href="mailto:info@finalcutmultimedia.com" className="flex items-center gap-[1vw] text-gray-600 text-[3.5vw] md:text-[0.9vw] hover:text-red-600 transition-colors">
                <svg className="w-[4vw] h-[4vw] md:w-[1.2vw] md:h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                info@finalcutmultimedia.com
              </a>
              <a href="tel:+7044911283" className="flex items-center gap-[1vw] text-gray-600 text-[3.5vw] md:text-[0.9vw] hover:text-red-600 transition-colors">
                <svg className="w-[4vw] h-[4vw] md:w-[1.2vw] md:h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +704 491 1283
              </a>
            </div>
            
            <Link href="#" className="text-black text-[4vw] md:text-[1.1vw] font-bold hover:text-red-600 transition-colors">
              Privacy Policy
            </Link>
          </div>

        </div>

    
        <div className="w-full flex flex-col md:flex-row items-center justify-center text-center pt-[4vh] border-t border-gray-200">
          <p className="text-gray-500 text-[3vw] md:text-[0.8vw] tracking-wider uppercase">
            © 2026 All Rights Reserved. Design & Develop By Final Cut Multimedia
          </p>
        </div>

      </div>
    </footer>
  );
}