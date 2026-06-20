"use client";

import Image from "next/image";

export default function ClientMarquee() {
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

  // লুপটি যেন আনলিমিটেড এবং স্মুথ হয় তাই লোগো অ্যারে তিনগুণ করা হয়েছে
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative w-full bg-white text-black flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">
      
      {/* Background logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
        <div className="relative w-full max-w-4xl h-full">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
            alt="Final Cut Multimedia Background Watermark"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Trust Building Heading */}
      <div className="relative z-10 text-center mb-10 px-6">
        <h3 className="text-gray-500 text-sm md:text-base tracking-[0.2em] uppercase font-bold">
          Trusted by Industry Leaders
        </h3>
        <div className="w-12 h-1 bg-red-600 mx-auto mt-4"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full flex flex-col">
        
        {/* Sliding partner logo section (Marquee) */}
        <div className="w-full py-8 border-y border-gray-100 flex items-center justify-center overflow-hidden relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 md:before:w-40 before:bg-gradient-to-r before:from-white before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 md:after:w-40 after:bg-gradient-to-l after:from-white after:to-transparent after:z-20">
          
          <div className="flex gap-12 md:gap-20 w-max animate-marquee whitespace-nowrap items-center">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="relative w-28 h-12 md:w-40 md:h-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
      </div>

      {/* Pure CSS Animation keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33%)); } /* যেহেতু অ্যারে ৩ গুণ করা হয়েছে, তাই -৩৩.৩৩% */
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

    </section>
  );
}