"use client";

import { useState } from "react";
import Image from "next/image";

export default function ClientAndVlogSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // ক্লায়েন্ট লোগোসমূহ
  const clientLogos = [
    "https://res.cloudinary.com/dsga4gyw9/image/upload/v1775294134/Neel_Hawa_j1cmcd.jpg",
    "https://res.cloudinary.com/dsga4gyw9/image/upload/v1775294134/Pathao_n805zn.webp",
    "https://res.cloudinary.com/dsga4gyw9/image/upload/v1775294134/mojaru_d6sgxv.jpg",
    "https://res.cloudinary.com/dsga4gyw9/image/upload/v1775294134/IMG_6539.JPG_gfckc0.jpg",
    "https://res.cloudinary.com/dsga4gyw9/image/upload/v1775294133/IMSEN_gu1vus.jpg",
    "https://res.cloudinary.com/dsga4gyw9/image/upload/v1775294132/Sanrin_k7ar8y.png",
    "https://res.cloudinary.com/dsga4gyw9/image/upload/v1775294133/Copy_of_CIT_Logo_gotdoi.png",
    "https://res.cloudinary.com/dsga4gyw9/image/upload/v1775294132/RS_Apparels_f1jcd8.jpg"
  ];

  // লুপটি যেন আনলিমিটেড হয় তাই লোগো অ্যারে ডাবল করা হয়েছে
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  // YouTube ভিডিও ডেটা (৪র্থ একটি ভিডিও যোগ করা হয়েছে লেআউট সুন্দর করার জন্য)
  const youtubeVideos = [
    {
      id: 1,
      title: "ENCINO LUXURY PROMO",
      embedId: "34jHRvrtEbE",
      thumbnail: "https://img.youtube.com/vi/34jHRvrtEbE/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "BRENTWOOD EXCLUSIVE TOUR",
      embedId: "TehKGf4gX94",
      thumbnail: "https://img.youtube.com/vi/TehKGf4gX94/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "PREMIUM CINEMATIC PRODUCTION",
      embedId: "dDv0YyVOpeI",
      thumbnail: "https://img.youtube.com/vi/dDv0YyVOpeI/maxresdefault.jpg",
    },
    {
      id: 4,
      title: "BEHIND THE SCENES",
      embedId: "TehKGf4gX94", // ডেমো হিসেবে আগের একটি আইডি ব্যবহার করা হয়েছে
      thumbnail: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg", // ক্লায়েন্টের গ্যালারি থেকে থাম্বনেইল
    },
  ];

  return (
    <section className="relative w-full bg-white text-black flex flex-col overflow-hidden py-[5vh]">
      
      {/* Background logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
        <div className="relative w-[80vw] h-[80vh]">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
            alt="Final Cut Multimedia Background Watermark"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full flex flex-col">
        
        {/* 1. Sliding partner logo section (Marquee) */}
        <div className="w-full py-[4vh] border-b border-gray-100 flex items-center justify-center overflow-hidden relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[15vw] before:bg-gradient-to-r before:from-white before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[15vw] after:bg-gradient-to-l after:from-white after:to-transparent after:z-20">
          
          <div className="flex gap-[8vw] md:gap-[5vw] w-max animate-marquee whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="relative w-[30vw] h-[6vh] md:w-[12vw] md:h-[5vh] flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${index}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. YouTube channel promotion bar (Updated Title & Color) */}
        <div className="w-full py-[6vh] px-[5vw] flex flex-col md:flex-row items-center justify-between gap-[3vh] md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-[2vw] text-center md:text-left">
            <span className="text-gray-400 text-[3.5vw] md:text-[0.9vw] tracking-[0.15em] uppercase font-bold block">
              WATCH THE LATEST
            </span>
            {/* গোল্ডের বদলে রেড লাইন */}
            <div className="hidden md:block w-[0.2vw] h-[4vh] bg-red-600"></div>
            <h2 className="text-black text-[5.5vw] md:text-[2.2vw] font-black tracking-tighter uppercase">
              LATEST FROM OUR <span className="text-red-600">CHANNEL</span>
            </h2>
          </div>
          
          <a 
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white font-bold text-[3vw] md:text-[1vw] tracking-[0.1em] uppercase px-[5vw] py-[2vh] md:px-[2.5vw] md:py-[1.5vh] transition-colors hover:bg-black"
          >
            SUBSCRIBE
          </a>
        </div>

        {/* 3. YouTube video grid (VLOG রিমুভ করা হয়েছে, ৪ কলামের গ্রিড) */}
        <div className="w-full p-[4vw] bg-gray-50 border-t border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3vw] md:gap-[2vw]">
            {youtubeVideos.map((video) => (
              <div 
                key={video.id}
                className="relative w-full aspect-video group cursor-pointer overflow-hidden bg-gray-200 shadow-md transition-shadow hover:shadow-xl"
                onClick={() => setSelectedVideo(video.embedId)}
              >
                <Image 
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300">
                  <div className="relative w-[15vw] h-[10vh] md:w-[4vw] md:h-[4vh] transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 68 48" className="w-full h-full fill-red-600 group-hover:fill-red-700 transition-colors drop-shadow-md">
                      <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0,34,0,34,0S12.21,0,6.9,1.55 c-2.93,0.78-4.64,3.26-5.42,6.19C0,13.06,0,24,0,24s0,10.94,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,48,34,48,34,48s21.79,0,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C68,34.94,68,24,68,24S68,13.06,66.52,7.74z" />
                      <polygon points="27,33 45,24 27,15" className="fill-white" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* YouTube video player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-[5vh] right-[5vw] text-white hover:text-red-500 transition-colors flex items-center gap-[1vw]"
          >
            <span className="text-[3.5vw] md:text-[1vw] uppercase tracking-widest font-bold">Close</span>
            <svg className="w-[8vw] h-[8vw] md:w-[3vw] md:h-[3vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="w-[95vw] h-[35vh] md:w-[75vw] md:h-[70vh] border-[0.2vw] border-red-600 bg-black relative shadow-2xl">
            <iframe 
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Pure CSS Animation keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

    </section>
  );
}