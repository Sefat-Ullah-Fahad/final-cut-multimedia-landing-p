"use client";

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
    <section className="relative w-full bg-[#0A0A0A] py-[12vh] px-[5vw] overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-red-600/5 rounded-full blur-[10vw] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      <div className="relative z-10 w-full flex flex-col">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col items-center text-center mb-[10vh]">
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium mb-[1.5vh]">
            Our Process
          </span>
          <div className="flex items-center gap-[1.5vw]">
            <div className="w-[0.8vw] md:w-[0.2vw] h-[5vh] bg-red-600"></div>
            <h2 className="text-white text-[7vw] md:text-[3.5vw] font-black tracking-widest uppercase leading-none">
              HOW IT WORKS
            </h2>
          </div>
          <p className="text-gray-400 text-[3.5vw] md:text-[1vw] max-w-[80vw] md:max-w-[40vw] mt-[3vh] leading-relaxed">
            A seamless, transparent, and collaborative approach to bringing your creative vision to life.
          </p>
        </div>

        {/* প্রসেস কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[4vw] md:gap-[1.5vw] w-full">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-[#111] p-[6vw] md:p-[2vw] border-[0.2vw] md:border-[0.1vw] border-white/5 hover:border-red-600 transition-colors duration-500 overflow-hidden min-h-[25vh] md:min-h-[35vh]"
            >
              {/* ব্যাকগ্রাউন্ড ওয়াটারমার্ক নম্বর (01, 02...) */}
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
                <h3 className="text-white text-[5vw] md:text-[1.3vw] font-bold tracking-wider uppercase mb-[2vh] leading-tight">
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