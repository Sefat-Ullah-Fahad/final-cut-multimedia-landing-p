import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"; 

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full flex flex-col lg:flex-row bg-white overflow-hidden">
      
      {/* বাম পাশ: কন্টেন্ট এবং ওয়াটারমার্ক লোগো */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-6 py-16 lg:px-12 xl:px-20 z-10 min-h-[50vh] lg:min-h-screen">
        
        {/* ব্যাকগ্রাউন্ড লোগো (ওয়াটারমার্ক ইফেক্ট) */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 w-[120%] h-[120%] opacity-[0.04] pointer-events-none z-0">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
            alt="Final Cut Background Watermark"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* মূল কন্টেন্ট (টেক্সট এবং বাটন) */}
        <div className="relative z-10">
          <span className="text-gray-500 text-sm md:text-base tracking-[0.2em] uppercase font-bold">
            About Us
          </span>
          
          <div className="flex items-center gap-4 mt-4 mb-8 md:mb-10">
            {/* লাল লাইন */}
            <div className="w-1.5 md:w-2 h-12 md:h-16 bg-red-600"></div>
            <h2 className="text-black text-4xl md:text-5xl xl:text-6xl font-black tracking-wide uppercase leading-tight">
              Final Cut <br className="hidden lg:block xl:hidden" /> Multimedia
            </h2>
          </div>

          {/* প্যারাগ্রাফ টেক্সট */}
          <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed font-medium pr-0 xl:pr-10">
            <p>
              Final Cut Multimedia is a Charlotte based video production agency helping businesses, brands, and organizations create professional video content that supports real business goals. We specialize in corporate videos, commercials, event coverage, customer testimonials, training videos, and brand storytelling that engage audiences and elevate brands.
            </p>
            <p>
              With more than 10 years of experience, we combine cinematic visuals, strategic storytelling, and a seamless production process to deliver content that looks exceptional and drives results. From planning and filming to editing and final delivery, our focus is on creating videos that help businesses stand out and make a lasting impact.
            </p>
          </div>

          {/* Conversion-focused CTA */}
          <Link 
            href="#contact-us" 
            className="group inline-flex items-center justify-center gap-3 mt-10 
                       w-full sm:w-auto px-8 py-4
                       bg-red-600 text-white text-sm md:text-base font-bold tracking-[0.15em] uppercase 
                       transition-all duration-300 hover:bg-red-700 shadow-lg hover:shadow-red-600/30"
          >
            BOOK A DISCOVERY CALL
            <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* ডান পাশ: ক্লায়েন্টের ছবি */}
      <div className="relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-auto lg:min-h-screen bg-white"> 
        
        {/* ইমেজের উপর ব্লেন্ডিং/গ্রেডিয়েন্ট ইফেক্ট (সাদা শ্যাডো কমানো হয়েছে) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/30 to-transparent z-10 lg:hidden"></div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/30 to-transparent z-10 hidden lg:block"></div>
        
        <Image
          src="https://res.cloudinary.com/dp08caz1r/image/upload/v1782381372/WhatsApp_Image_2026-06-25_at_3.39.31_PM-Photoroom_rym1ss.png"
          alt="Final Cut Multimedia Team"
          fill
          className="object-contain object-center" 
          priority
          unoptimized
        />
      </div>

    </section>
  );
}