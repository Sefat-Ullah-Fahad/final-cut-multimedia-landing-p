"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <>
      {/* ==================== CONTACT CTA SECTION (DARK) ==================== */}
      <section className="relative w-full py-[15vh] flex flex-col items-center justify-center overflow-hidden">
        
        {/* কন্টাক্ট ব্যাকগ্রাউন্ড ইমেজ এবং ডার্ক ওভারলে */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/openart-image__TppSKgk_1759689640429_raw.jpg"
            alt="Contact Background"
            fill
            className="object-cover object-center"
            unoptimized
          />
          {/* ডার্ক ওভারলে */}
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
        </div>

        {/* CTA কন্টেন্ট কন্টেইনার */}
        <div className="relative z-10 w-full max-w-[90vw] md:max-w-[60vw] flex flex-col items-center text-center">
          
          {/* সাব-হেডার */}
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium mb-[2vh]">
            CONTACT US
          </span>
          
          {/* মেইন হেডার (রেড লাইনসহ) */}
          <div className="flex flex-col md:flex-row items-center gap-[2vw] md:gap-[1.5vw] mb-[3vh]">
            <div className="hidden md:block w-[0.2vw] h-[6vh] bg-red-600"></div>
            <h2 className="text-white text-[8vw] md:text-[4vw] font-black tracking-tight uppercase leading-tight">
              READY TO BRING YOUR <span className="text-red-600">VISION</span> TO LIFE?
            </h2>
          </div>

          {/* শর্ট ডেসক্রিপশন (Request a quote কথাটি রিমুভ করা হয়েছে) */}
          <p className="text-gray-300 text-[4vw] md:text-[1.1vw] max-w-[85vw] md:max-w-[45vw] leading-relaxed mb-[6vh]">
            Let&apos;s discuss your next big project. Book a call today, and let our creative experts handle the rest.
          </p>

          {/* বুকিং বাটন (শুধুমাত্র Book a Call রাখা হয়েছে) */}
          <div className="flex justify-center">
            <Link 
              href="#booking-link" 
              className="bg-red-600 border-[0.2vw] md:border-[0.1vw] border-red-600 text-white font-bold text-[3.5vw] md:text-[1vw] tracking-[0.15em] uppercase px-[10vw] py-[2vh] md:px-[4vw] md:py-[1.5vh] hover:bg-transparent hover:text-red-500 transition-all duration-300"
            >
              BOOK A CALL
            </Link>
          </div>

        </div>
      </section>

      {/* ==================== WHITE LOGO BAR (Reference Image) ==================== */}
      <div className="w-full bg-white py-[6vh] md:py-[5vh] flex items-center justify-center">
        <div className="flex items-center gap-[2vw] md:gap-[1vw]">
          
          {/* ভার্টিক্যাল লাইন (গোল্ডের বদলে রেড) */}
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