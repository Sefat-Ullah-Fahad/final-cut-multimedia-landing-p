"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"; // CTA বাটনের জন্য

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollContainerRef = useRef(null);

  // ডানে-বামে স্ক্রল করার ফাংশন
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.4;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // ভিডিও ডেটাতে কাস্টম থাম্বনেইল
  const videos = [
    { id: 1, title: "CORPORATE PRODUCTION", location: "CHARLOTTE, NC", url: "https://player.vimeo.com/video/659551134?h=981ca1e9a1", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2026/06/social-media-profile-management-1024x585.jpeg" },
    { id: 2, title: "REAL ESTATE CINEMATIC", location: "LOS ANGELES", url: "https://player.vimeo.com/video/817227760?h=ed3ad73e11", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/professional-video-production-for-car-dealers-1-768x439-1.jpeg" },
    { id: 3, title: "EVENT HIGHLIGHTS", location: "NEW YORK", url: "https://player.vimeo.com/video/1018999440?h=49e7fc2c6b", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/a8b00388-72df-4154-ac5b-e469b6968b84.jpeg" },
    { id: 4, title: "DOCUMENTARY FILM", location: "CHICAGO", url: "https://player.vimeo.com/video/729037812?h=43160bdfed", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/Mac-Two-Computers-Display.jpg" },
    { id: 5, title: "BRAND COMMERCIAL", location: "MIAMI", url: "https://player.vimeo.com/video/984427815?h=e0a2925dac", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/87d2047b-a769-426a-8539-3d0b3f8f7a01-scaled.jpeg" },
    { id: 6, title: "AERIAL DRONE FOOTAGE", location: "TEXAS", url: "https://player.vimeo.com/video/299711587?h=5e1c36a214", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/E8D4179E-7B88-4704-900F-A1D83B47BC86-scaled.jpeg" },
    { id: 7, title: "AUTOMOTIVE PROMO", location: "ATLANTA", url: "https://player.vimeo.com/video/299713372?h=3197039fa5", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/openart-image_t8vy9ESm_1760035589171_raw.jpg" },
    { id: 8, title: "LIVE STREAM EVENT", location: "BOSTON", url: "https://player.vimeo.com/video/694443460?h=f04d700711", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg" },
    { id: 9, title: "SOCIAL MEDIA AD", location: "SEATTLE", url: "https://player.vimeo.com/video/670200023?h=d2d14f91a1", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2026/06/social-media-content-for-real-estate-companies-1024x585.jpeg" },
    { id: 10, title: "TRAINING VIDEO", location: "DENVER", url: "https://player.vimeo.com/video/752557257?h=f930cb6852", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_0540-scaled.jpeg" },
    { id: 11, title: "INTERVIEW SESSION", location: "AUSTIN", url: "https://player.vimeo.com/video/347653169?h=62ae825ca0", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/496857656_2510228855980777_2259413147144370187_n.jpg" },
    { id: 12, title: "PRODUCT LAUNCH", location: "DALLAS", url: "https://player.vimeo.com/video/322030118?h=1243cbc3be", thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/Untitled-3.jpg" },
  ];

  return (
    <section className="relative w-full bg-[#fff] py-16 md:py-24 overflow-hidden">
      
      {/* হেডার সেকশন */}
      <div className="flex flex-col px-6 md:px-12 xl:px-20 mb-10">
        <span className="text-black text-sm md:text-base tracking-[0.2em] uppercase font-medium">
          Cinematic Experience
        </span>
        <div className="flex items-center gap-4 mt-2">
          {/* লাল অ্যাকসেন্ট */}
          <div className="w-1.5 md:w-2 h-10 md:h-12 bg-red-600"></div>
          <h2 className="text-black text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide uppercase leading-none">
            FEATURED PRODUCTIONS
          </h2>
        </div>
      </div>

      {/* গ্যালারি স্লাইডার এরিয়া */}
      <div className="relative w-full group/slider">
        
        {/* লেফট অ্যারো */}
        <button 
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 bg-black/70 p-3 rounded-full hover:bg-red-600 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* রাইট অ্যারো */}
        <button 
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 bg-black/70 p-3 rounded-full hover:bg-red-600 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* ২-রো ভিডিও কার্ড কন্টেইনার (Responsive Grid) */}
        <div 
          ref={scrollContainerRef}
          className="flex md:grid md:grid-rows-2 md:grid-flow-col gap-4 md:gap-6 px-6 md:px-12 xl:px-20 pb-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
        >
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="relative w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] h-[35vh] md:h-[300px] lg:h-[350px] group cursor-pointer overflow-hidden bg-black snap-center flex-shrink-0"
              onClick={() => setSelectedVideo(video.url)}
            >
              <Image 
                src={video.thumbnail} 
                alt={video.title}
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                unoptimized
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* স্মুথ অ্যানিমেটেড বর্ডার (রেড থিম) */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-red-600 transition-all duration-[600ms] ease-in-out group-hover:w-full z-20"></div>
              <div className="absolute top-0 right-0 w-1 h-0 bg-red-600 transition-all duration-[600ms] ease-in-out group-hover:h-full z-20"></div>
              <div className="absolute bottom-0 right-0 h-1 w-0 bg-red-600 transition-all duration-[600ms] ease-in-out group-hover:w-full z-20"></div>
              <div className="absolute bottom-0 left-0 w-1 h-0 bg-red-600 transition-all duration-[600ms] ease-in-out group-hover:h-full z-20"></div>

              {/* ডিফল্ট টেক্সট */}
              <div className="absolute bottom-6 left-6 transition-all duration-[500ms] group-hover:opacity-0 group-hover:translate-y-4">
                <h3 className="text-white text-lg md:text-xl font-medium uppercase tracking-wider">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm tracking-widest mt-1">
                  {video.location}
                </p>
              </div>

              {/* হোভার ইফেক্ট */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] ease-in-out flex flex-col justify-between p-6 z-10">
                <div className="flex gap-2 items-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[700ms] ease-out delay-[100ms]">
                  <span className="text-white text-xs tracking-widest uppercase">FEATURED</span>
                  <div className="w-0.5 h-4 bg-red-600"></div>
                  <span className="text-gray-300 text-xs tracking-widest uppercase">PRODUCTION</span>
                </div>

                <div className="mt-auto mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[700ms] ease-out delay-[200ms]">
                  <h3 className="text-white text-xl md:text-2xl font-bold uppercase leading-tight">
                    {video.title}
                  </h3>
                  <p className="text-red-500 text-sm mt-2 font-medium tracking-wider">
                    {video.location}
                  </p>
                </div>

                <div className="bg-red-600 text-white self-start px-6 py-2 text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-red-600 transition-colors translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-[700ms] ease-out delay-[300ms]">
                  WATCH VIDEO
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ক্লায়েন্টের রিকুয়েস্ট অনুযায়ী নতুন Call-to-Action (CTA) */}
      <div className="flex justify-center mt-12 md:mt-16 px-6">
        <Link 
          href="#contact-us" 
          className="group inline-flex items-center justify-center gap-3 
                     w-full sm:w-auto px-8 py-4
                     bg-red-600 text-white text-sm md:text-base font-semibold tracking-[0.15em] uppercase 
                     transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
        >
          DISCUSS YOUR NEXT PROJECT
          <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* ভিডিও প্লেয়ার Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-red-500 transition-colors flex items-center gap-2"
          >
            <span className="text-sm md:text-base uppercase tracking-widest hidden md:block">Close</span>
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="w-[95vw] md:w-[80vw] lg:w-[70vw] aspect-video border-2 border-red-600 bg-black relative shadow-2xl">
            <iframe 
              src={`${selectedVideo}&autoplay=1`} 
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* গ্লোবাল CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}