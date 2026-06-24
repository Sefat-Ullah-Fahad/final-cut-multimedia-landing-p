import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"; // React Icons থেকে আইকন ইম্পোর্ট করা হলো

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      {/* Background Video */}
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
        
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto mt-16 md:mt-0">
        
        {/* Main Title (ক্লায়েন্টের নতুন টেক্সট) */}
        <h1 className="text-white font-black tracking-tight mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-2xl">
          Charlotte's Trusted <span className="text-red-600">Video Production Agency</span>
        </h1>

        {/* Sub-headline (ক্লায়েন্টের নতুন টেক্সট) */}
        <p className="text-gray-300 font-medium mb-10 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed drop-shadow-md">
          Event coverage, corporate videos, commercials, training videos, and monthly content creation designed to support real business goals.
        </p>

        {/* Call to Action Button */}
        <Link 
          href="#contact" // ন্যাভিগেশন মেনুর সাথে মিল রাখার জন্য #contact করা হয়েছে
          className="group relative inline-flex items-center justify-center gap-3 
                     w-full sm:w-auto px-8 py-4
                     border-2 border-red-600 bg-red-600 
                     text-white text-sm md:text-base font-bold tracking-[0.15em] uppercase 
                     transition-all duration-500 ease-out overflow-hidden shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
        >
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-red-600">
            REQUEST A QUOTE <FiArrowRight className="text-xl" />
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
        </Link>
        
      </div>
    </section>
  );
}