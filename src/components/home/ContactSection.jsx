"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"; // বাটনটিকে অন্যান্য CTA এর সাথে কনসিস্টেন্ট রাখার জন্য আইকন যোগ করা হলো

export default function ContactSection() {
  return (
    <>
      {/* ==================== CONTACT CTA SECTION (DARK) ==================== */}
      <section id="contact-us" className="relative w-full py-[15vh] flex flex-col items-center justify-center overflow-hidden">
        
        {/* কন্টাক্ট ব্যাকগ্রাউন্ড ইমেজ এবং ডার্ক ওভারলে */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/openart-image__TppSKgk_1759689640429_raw.jpg"
            alt="Contact Background"
            fill
            className="object-cover object-center grayscale opacity-80" // একটু সিনেম্যাটিক লুক আনার জন্য গ্রেস্কেল যোগ করা হলো
            unoptimized
          />
          {/* ডার্ক ওভারলে */}
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        </div>

        {/* CTA কন্টেন্ট কন্টেইনার */}
        <div className="relative z-10 w-full max-w-full px-[5vw] flex flex-col items-center text-center">
          
          {/* সাব-হেডার */}
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium mb-[2vh]">
            CONTACT US
          </span>
          
          {/* মেইন হেডার (রেড লাইনসহ) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-[2vw] md:gap-[1.5vw] mb-[3vh]">
            <div className="hidden md:block w-[0.2vw] h-[6vh] bg-red-600"></div>
            <h2 className="text-white text-[8vw] md:text-[4vw] font-black tracking-tight uppercase leading-tight">
              READY TO BRING YOUR <span className="text-red-600 drop-shadow-[0_0_2vw_rgba(220,38,38,0.5)]">VISION</span> TO LIFE?
            </h2>
            <div className="hidden md:block w-[0.2vw] h-[6vh] bg-red-600"></div>
          </div>

          {/* শর্ট ডেসক্রিপশন */}
          <p className="text-gray-300 text-[4vw] md:text-[1.1vw] w-full md:w-[60vw] lg:w-[45vw] leading-relaxed mb-[6vh]">
            Let&apos;s discuss your next big project. Book a call today, and let our creative experts handle the rest.
          </p>

          {/* বুকিং বাটন (অন্যান্য CTA বাটনের সাথে ডিজাইন মিলিয়ে দেওয়া হলো) */}
          <div className="flex justify-center w-full">
            <Link 
              href="#booking-link" 
              className="group inline-flex items-center justify-center gap-[1vw] 
                         w-[80vw] sm:w-[50vw] md:w-auto px-[6vw] py-[2vh] md:px-[4vw] md:py-[1.5vh]
                         bg-red-600 text-white text-[3.5vw] md:text-[1vw] font-bold tracking-[0.15em] uppercase 
                         transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_2vw_rgba(220,38,38,0.5)]"
            >
              BOOK A CALL
              <FiArrowRight className="text-[4vw] md:text-[1.2vw] transition-transform duration-300 group-hover:translate-x-[0.5vw]" />
            </Link>
          </div>

        </div>
      </section>

      {/* ==================== WHITE LOGO BAR (Reference Image) ==================== */}
      {/* ক্লায়েন্ট যেহেতু Full-width চায়, তাই এই অংশেও w-full রাখা হয়েছে */}
      <div className="w-full bg-white py-[6vh] md:py-[5vh] flex items-center justify-center">
        <div className="flex items-center gap-[2vw] md:gap-[1vw]">
          
          {/* ভার্টিক্যাল লাইন */}
          <div className="w-[0.8vw] md:w-[0.2vw] h-[6vh] md:h-[5vh] bg-red-600"></div>
          
          {/* লোগো এবং নাম */}
          <div className="flex items-center gap-[2vw] md:gap-[1vw]">
            {/* লোগো ইমেজ */}
            <div className="relative w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw]">
              <Image
                src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
                alt="Final Cut Multimedia Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            
            {/* কোম্পানির নাম */}
            <div className="flex flex-col justify-center">
              <span className="text-black text-[6vw] md:text-[2vw] font-black leading-none tracking-tight">
                FINAL CUT
              </span>
              <span className="text-black text-[2.5vw] md:text-[0.75vw] tracking-[0.3em] font-bold mt-[0.5vh] uppercase">
                MULTIMEDIA
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}