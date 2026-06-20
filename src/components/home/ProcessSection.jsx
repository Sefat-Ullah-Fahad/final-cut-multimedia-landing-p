"use client";

import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "DISCOVERY CALL",
      desc: "We start by understanding your vision, goals, and specific project requirements to ensure perfect alignment.",
    },
    {
      id: "02",
      title: "PRE-PRODUCTION",
      desc: "Planning is key. We handle scripting, storyboarding, location scouting, and scheduling to set the stage.",
    },
    {
      id: "03",
      title: "PRODUCTION",
      desc: "Lights, camera, action. Our expert team captures high-quality cinematic footage using top-tier equipment.",
    },
    {
      id: "04",
      title: "POST-PRODUCTION",
      desc: "The magic happens here. We bring the story to life with precise editing, color grading, and sound design.",
    },
    {
      id: "05",
      title: "DELIVERY",
      desc: "We present the final cut for your review and deliver the optimized files ready to captivate your audience.",
    },
  ];

  return (
    <section id="process" className="relative w-full bg-[#0A0A0A] py-[12vh] px-[5vw] overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন (ফ্লুইড সাইজিং) */}
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-red-600/5 rounded-full blur-[10vw] pointer-events-none translate-y-1/2 -translate-x-1/4 z-0"></div>
      <div className="absolute top-[20vh] right-0 w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[8vw] pointer-events-none -translate-y-1/2 translate-x-1/4 z-0"></div>

      {/* 1. Client Experience & Jane Highlight Section (New Addition) */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row gap-[6vw] mb-[12vh] items-center">
        
        {/* Jane's Photo (আনএডিটেড ছবিকে কোডের মাধ্যমেই সিনেম্যাটিক লুক দেওয়া হয়েছে) */}
        <div className="relative w-full lg:w-[45vw] h-[50vh] md:h-[75vh] rounded-[1vw] overflow-hidden group border-[0.1vw] border-white/10 shadow-[0_0_3vw_rgba(0,0,0,0.8)]">
          <Image
            src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781932101/Copy_of_IMG_3032_yqh6mr.jpg" // ক্লায়েন্টের দেওয়া ড্রাইভের ছবি
            alt="Jane Caillio - Operations Coordinator"
            fill
            className="object-cover contrast-125 brightness-90 saturate-[0.8] group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
            unoptimized
          />
          {/* ডার্ক গ্রেডিয়েন্ট ওভারলে যাতে টেক্সট পড়া যায় */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
          
          <div className="absolute bottom-[4vh] left-[4vw] border-l-[0.3vw] border-red-600 pl-[1.5vw]">
            <h3 className="text-white text-[6vw] md:text-[2vw] font-black uppercase tracking-widest leading-none mb-[1vh]">
              Jane Caillio
            </h3>
            <p className="text-red-500 text-[3.5vw] md:text-[1vw] font-bold tracking-[0.2em] uppercase">
              Operations Coordinator
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[50vw] flex flex-col justify-center">
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium mb-[2vh]">
            The Client Experience
          </span>
          <div className="flex items-center gap-[1.5vw] mb-[4vh]">
            <div className="w-[0.8vw] md:w-[0.2vw] h-[6vh] bg-red-600"></div>
            <h2 className="text-white text-[7vw] md:text-[3.5vw] font-black tracking-widest uppercase leading-tight">
              GUIDED EVERY <br /> STEP OF THE WAY
            </h2>
          </div>
          
          <div className="space-y-[3vh] text-gray-400 text-[4vw] md:text-[1.1vw] leading-relaxed font-light pr-0 lg:pr-[5vw]">
            <p>
              At Final Cut Multimedia, our production process is built around <strong className="text-white font-medium">you</strong>. Jane, our dedicated Operations Coordinator, plays an integral role in ensuring your experience is completely seamless.
            </p>
            <p>
              From managing project coordination and clear communication to detailed scheduling, Jane ensures every aspect of your project runs flawlessly. We pride ourselves on a transparent, collaborative approach that brings your creative vision to life without any hassle.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Process Grid Section (5 Columns - Full Width) */}
      <div className="relative z-10 w-full flex flex-col">
        
        {/* Process Grid Header */}
        <div className="mb-[6vh] flex items-center gap-[1.5vw]">
          <h3 className="text-white text-[5vw] md:text-[1.8vw] font-bold tracking-widest uppercase">
            Our 5-Step Process
          </h3>
          <div className="flex-grow h-[0.1vw] bg-white/10"></div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[4vw] md:gap-[1.5vw] w-full">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-[#111] p-[6vw] md:p-[2vw] border-[0.2vw] md:border-[0.1vw] border-white/5 hover:border-red-600 transition-colors duration-500 overflow-hidden min-h-[25vh] md:min-h-[35vh]"
            >
              {/* ব্যাকগ্রাউন্ড ওয়াটারমার্ক নম্বর (01, 02...) */}
              <span className="absolute -bottom-[2vh] -right-[2vw] text-[15vw] md:text-[8vw] font-black text-white/[0.03] group-hover:text-red-600/[0.05] transition-colors duration-500 pointer-events-none leading-none">
                {step.id}
              </span>

              {/* কার্ড কন্টেন্ট */}
              <div className="relative z-10 flex flex-col h-full">
                
                {/* স্টেপ নম্বর ও লাইন */}
                <div className="flex items-center gap-[2vw] md:gap-[1vw] mb-[3vh]">
                  <span className="text-red-600 text-[4.5vw] md:text-[1.2vw] font-bold tracking-widest">
                    {step.id}
                  </span>
                  <div className="flex-grow h-[0.2vw] md:h-[0.1vw] bg-white/10 group-hover:bg-red-600/50 transition-colors duration-500"></div>
                </div>

                {/* টাইটেল */}
                <h3 className="text-white text-[5vw] md:text-[1.2vw] font-bold tracking-wider uppercase mb-[2vh] leading-tight">
                  {step.title}
                </h3>

                {/* ডেসক্রিপশন */}
                <p className="text-gray-400 text-[3.5vw] md:text-[0.9vw] leading-relaxed flex-grow">
                  {step.desc}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}