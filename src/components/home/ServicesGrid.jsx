"use client";

import Image from "next/image";

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      subtitle: "PROFESSIONAL",
      title: "VIDEO PRODUCTION",
      desc: "High-quality video storytelling crafted to engage your audience and showcase your brand with professionalism.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/11/pbokepuiqgmlaczczfmx1.jpg",
    },
    {
      id: 2,
      subtitle: "CINEMATIC",
      title: "VIDEO EDITING",
      desc: "Transform raw footage into polished productions with seamless cuts, sound design, and cinematic finishing.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/Mac-Two-Computers-Display.jpg",
    },
    {
      id: 3,
      subtitle: "CREATIVE",
      title: "PHOTOGRAPHY",
      desc: "Creative and detailed photography for events, products, and portraits, capturing moments that last a lifetime.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/ebe708e3-7864-45f8-b7c6-4efaec1b19371.jpg",
    },
    {
      id: 4,
      subtitle: "MEMORABLE",
      title: "EVENT COVERAGE",
      desc: "Professional coverage of conferences, seminars, and business gatherings, presenting your company at its best.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg",
    },
    {
      id: 5,
      subtitle: "ENGAGING",
      title: "CONTENT FOR SOCIAL MEDIA",
      desc: "Short-form, platform-optimized content built to capture attention, promotions and boost online engagement.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/1000_F_85861337_0ZeiHG0IC2vPZrQd26KT9SDj4LU9O4fF-1.webp", 
    },
  ];

  const industries = [
    "Real Estate", "Automotive", "Corporate", "Healthcare", "Education", "Entertainment", "E-commerce", "Hospitality"
  ];

  return (
    <section id="services" className="relative w-full bg-white py-20 px-6 md:px-12 xl:px-20">
      
      {/* সেকশন হেডার */}
      <div className="flex flex-col mb-12">
        <span className="text-black text-sm md:text-base tracking-[0.2em] uppercase font-medium block mb-4">
          Our Core Services
        </span>
        <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight max-w-4xl">
          Tailored Multimedia Solutions To Bring Your Vision To Life
        </h2>
      </div>

      {/* ২-কলাম সার্ভিস গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {services.map((item, index) => (
          <div 
            key={item.id} 
            // ৫ নম্বর আইটেম (index 4) হলে সেটি যেন ২ কলামের জায়গা নিয়ে ঠিক মাঝখানে থাকে তার জন্য কন্ডিশনাল ক্লাস
            className={`relative w-full h-[350px] sm:h-[400px] md:h-[450px] group block overflow-hidden bg-black cursor-default ${
              index === 4 ? "md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto" : ""
            }`}
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

            {/* রেড থিম - হোভার ওভারলে */}
            <div className="absolute inset-0 bg-red-700/85 opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] ease-in-out z-0"></div>

            {/* অ্যানিমেটেড ফ্রেম এবং টেক্সট কনটেইনার */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="relative flex flex-col items-center justify-center w-[85%] h-[60%]">
                
                {/* অ্যানিমেটেড বর্ডার লাইনগুলো */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-[40%] bg-red-600 group-hover:bg-white/90 group-hover:w-full transition-all duration-[400ms] ease-in-out"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[40%] bg-red-600 group-hover:bg-white/90 group-hover:w-full transition-all duration-[400ms] ease-in-out"></div>
                <div className="absolute top-0 left-0 w-1 h-0 bg-white/90 group-hover:h-full transition-all duration-[400ms] ease-in-out delay-[300ms]"></div>
                <div className="absolute top-0 right-0 w-1 h-0 bg-white/90 group-hover:h-full transition-all duration-[400ms] ease-in-out delay-[300ms]"></div>

                {/* ভেতরের টেক্সট */}
                <span className="text-white text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-3 drop-shadow-md z-10 transition-transform duration-[400ms] group-hover:-translate-y-4 text-center">
                  {item.subtitle}
                </span>
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider uppercase text-center px-4 drop-shadow-lg leading-tight z-10 transition-transform duration-[400ms] group-hover:-translate-y-4">
                  {item.title}
                </h3>

                {/* হোভার ডেসক্রিপশন */}
                <p className="absolute top-[65%] w-full text-white/90 text-center text-sm md:text-base font-medium px-6 md:px-8 opacity-0 group-hover:opacity-100 transition-all duration-[500ms] delay-[200ms] translate-y-4 group-hover:translate-y-0">
                  {item.desc}
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Industries We Serve সেকশন */}
      <div className="mt-20 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-6 h-0.5 bg-red-600 hidden md:block"></div>
          <h3 className="text-black text-lg md:text-xl tracking-[0.2em] uppercase font-bold text-center">
            Industries We Serve
          </h3>
          <div className="w-6 h-0.5 bg-red-600 hidden md:block"></div>
        </div>
        
        {/* ক্লাসি পিল (Pill) লেআউট */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="border border-black/70 px-5 py-2 md:px-6 md:py-2.5 rounded-full text-black text-xs md:text-sm uppercase tracking-wider hover:border-red-600 hover:text-white hover:bg-red-600 transition-colors cursor-default"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}