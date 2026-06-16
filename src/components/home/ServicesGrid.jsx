"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesGrid() {
  // ১. ক্লায়েন্টের Dubsado লিস্ট অনুযায়ী ৫টি সার্ভিস এবং তাদের ডেসক্রিপশন
  const services = [
    {
      id: 1,
      subtitle: "PROFESSIONAL",
      title: "VIDEO PRODUCTION",
      desc: "Commercials, interviews, brand stories, promotional videos.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/11/pbokepuiqgmlaczczfmx1.jpg",
      link: "#",
    },
    {
      id: 2,
      subtitle: "CREATIVE",
      title: "PHOTOGRAPHY",
      desc: "Corporate headshots, event coverage, product photography, lifestyle.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/ebe708e3-7864-45f8-b7c6-4efaec1b19371.jpg",
      link: "#",
    },
    {
      id: 3,
      subtitle: "CINEMATIC",
      title: "VIDEO EDITING",
      desc: "Post-production, color grading, sound design, visual effects.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/Mac-Two-Computers-Display.jpg",
      link: "#",
    },
    {
      id: 4,
      subtitle: "DYNAMIC",
      title: "CONTENT FOR SOCIAL MEDIA",
      desc: "Short-form reels, TikToks, platform-optimized engagement videos.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/1000_F_85861337_0ZeiHG0IC2vPZrQd26KT9SDj4LU9O4fF-1.webp",
      link: "#",
    },
    {
      id: 5,
      subtitle: "INSTRUCTIONAL",
      title: "SAFETY & TRAINING VIDEOS",
      desc: "Clear, instructional productions that simplify learning and promote workplace safety.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/a8b00388-72df-4154-ac5b-e469b6968b84.jpeg",
      link: "#",
    },
  ];

  // ৩. নতুন ইন্ডাস্ট্রি লিস্ট
  const industries = [
    "Real Estate", "Automotive", "Corporate", "Healthcare", "Education", "Entertainment", "E-commerce", "Hospitality"
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] py-[10vh] px-[5vw]">
      
      {/* সেকশন হেডার */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-[4vh] mb-[8vh]">
        <div className="w-full md:w-1/2">
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium block mb-[2vh]">
            Our Creative Services
          </span>
          <h2 className="text-white text-[7vw] md:text-[3vw] font-bold uppercase leading-tight">
            Tailored Multimedia Solutions To Bring Your Vision To Life
          </h2>
        </div>
        
        <div className="w-full md:w-1/2 flex md:justify-end">
          <Link 
            href="#all-services" 
            className="flex items-center gap-[1vw] text-white text-[3.5vw] md:text-[1vw] font-bold tracking-[0.2em] uppercase hover:text-red-600 transition-colors"
          >
            MORE SERVICES 
            <svg className="w-[4vw] h-[4vw] md:w-[1.2vw] md:h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ২-কলাম সার্ভিস গ্রিড (৫ নম্বর আইটেমটি ফুল উইডথ হবে) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vh] md:gap-[1.5vw]">
        {services.map((item, index) => (
          <Link 
            href={item.link} 
            key={item.id} 
            // ৫ নম্বর কার্ডটি (index 4) ডেস্কটপে ২ কলাম জায়গা নিবে
            className={`relative w-full h-[40vh] md:h-[50vh] group block overflow-hidden bg-black ${index === 4 ? 'md:col-span-2' : ''}`}
          >
            {/* ব্যাকগ্রাউন্ড ইমেজ */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[800ms] ease-in-out group-hover:scale-105"
              unoptimized
            />

            {/* ডিফল্ট ডার্ক ওভারলে */}
            <div className="absolute inset-0 bg-black/60 group-hover:opacity-0 transition-opacity duration-500 z-0"></div>

            {/* ৪. রেড থিম - হোভার ওভারলে (গোল্ডের বদলে লাল) */}
            <div className="absolute inset-0 bg-red-700/85 opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] ease-in-out z-0"></div>

            {/* অ্যানিমেটেড ফ্রেম এবং টেক্সট কনটেইনার */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              
              <div className="relative flex flex-col items-center justify-center w-[85%] h-[55%] md:h-[50%]">
                
                {/* অ্যানিমেটেড বর্ডার লাইনগুলো (গোল্ডের বদলে লাল থেকে সাদা হবে) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[0.4vh] md:h-[0.2vh] w-[40%] bg-red-600 group-hover:bg-white/90 group-hover:w-full transition-all duration-[400ms] ease-in-out"></div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.4vh] md:h-[0.2vh] w-[40%] bg-red-600 group-hover:bg-white/90 group-hover:w-full transition-all duration-[400ms] ease-in-out"></div>

                <div className="absolute top-0 left-0 w-[0.4vw] md:w-[0.15vw] h-0 bg-white/90 group-hover:h-full transition-all duration-[400ms] ease-in-out delay-[300ms]"></div>

                <div className="absolute top-0 right-0 w-[0.4vw] md:w-[0.15vw] h-0 bg-white/90 group-hover:h-full transition-all duration-[400ms] ease-in-out delay-[300ms]"></div>

                {/* ভেতরের টেক্সট */}
                <span className="text-white text-[3vw] md:text-[1vw] font-medium tracking-[0.3em] uppercase mb-[1.5vh] drop-shadow-md z-10 transition-transform duration-[400ms] group-hover:-translate-y-[2vh]">
                  {item.subtitle}
                </span>
                <h3 className="text-white text-[6vw] md:text-[2.2vw] font-bold tracking-wider uppercase text-center px-[2vw] drop-shadow-lg leading-tight z-10 transition-transform duration-[400ms] group-hover:-translate-y-[2vh]">
                  {item.title}
                </h3>

                {/* ২. হোভার ডেসক্রিপশন (Hover Reveal) */}
                <p className="absolute top-[65%] w-full text-white/90 text-center text-[3.5vw] md:text-[0.9vw] font-medium px-[4vw] md:px-[6vw] opacity-0 group-hover:opacity-100 transition-all duration-[500ms] delay-[200ms] translate-y-[2vh] group-hover:translate-y-0">
                  {item.desc}
                </p>

              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ৩. নতুন "Industries We Serve" সেকশন */}
      <div className="mt-[12vh] flex flex-col items-center">
        <div className="flex items-center gap-[1vw] mb-[4vh]">
          <div className="w-[1.5vw] h-[0.2vw] bg-red-600 hidden md:block"></div>
          <h3 className="text-white text-[4vw] md:text-[1.2vw] tracking-[0.2em] uppercase font-bold text-center">
            Industries We Serve
          </h3>
          <div className="w-[1.5vw] h-[0.2vw] bg-red-600 hidden md:block"></div>
        </div>
        
        {/* ক্লাসি পিল (Pill) লেআউট */}
        <div className="flex flex-wrap justify-center gap-[3vw] md:gap-[1.5vw] max-w-[90vw] md:max-w-[70vw]">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="border border-white/20 px-[5vw] py-[1.5vh] md:px-[2.5vw] md:py-[1vh] rounded-full text-gray-300 text-[3vw] md:text-[0.85vw] uppercase tracking-wider hover:border-red-600 hover:text-white hover:bg-red-600/10 transition-colors cursor-default"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}