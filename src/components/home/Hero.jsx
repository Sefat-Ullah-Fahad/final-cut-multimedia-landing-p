import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center">
      
      {/* ব্যাকগ্রাউন্ড ভিডিও */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source 
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/vide-3.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* ভিডিওর উপর একটি হালকা কালো ওভারলে, যাতে টেক্সট স্পষ্ট বোঝা যায় */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* হিরো কন্টেন্ট */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-[5vw] w-full max-w-[90vw] md:max-w-[80vw] mx-auto">
        
        {/* মেইন টাইটেল (ক্লায়েন্টের নতুন টেক্সট) */}
        <h1 className="text-white font-black tracking-tight mb-[3vh] text-[8vw] md:text-[4vw] leading-[1.1] drop-shadow-lg">
          Professional Video Production <br className="hidden md:block" />
          That Helps Your Business <span className="text-red-600">Stand Out</span>
        </h1>

        {/* সাব-হেডলাইন */}
        <p className="text-gray-300 font-medium mb-[6vh] text-[4vw] md:text-[1.2vw] max-w-[90vw] md:max-w-[60vw] leading-relaxed drop-shadow-md">
          We craft cinematic visuals and compelling stories that capture attention, build trust, and drive real results for your brand.
        </p>

        {/* বাটন গ্রুপ */}
        <div className="flex flex-col md:flex-row gap-[4vw] md:gap-[2vw]">
          
          {/* Request A Quote বাটন (Primary - Red) */}
          <Link 
            href="#booking-link" 
            className="group relative inline-flex items-center justify-center 
                       w-[80vw] md:w-[22vw] h-[8vh] md:h-[7vh]
                       border-[0.2vw] md:border-[0.1vw] border-red-600 bg-red-600 
                       text-white text-[3.5vw] md:text-[0.9vw] font-bold tracking-[0.15em] uppercase 
                       transition-all duration-500 ease-out overflow-hidden shadow-lg"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-red-600">
              REQUEST A QUOTE
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
          </Link>
          
          {/* View Our Work বাটন (Secondary - Outline) */}
          <Link 
            href="#our-work" 
            className="group relative inline-flex items-center justify-center 
                       w-[80vw] md:w-[22vw] h-[8vh] md:h-[7vh]
                       border-[0.2vw] md:border-[0.1vw] border-white 
                       text-white text-[3.5vw] md:text-[0.9vw] font-bold tracking-[0.15em] uppercase 
                       transition-all duration-500 ease-out overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              VIEW OUR WORK
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
          </Link>

        </div>
        
      </div>
    </section>
  );
}