import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row bg-[#0A0A0A] overflow-hidden">
      
      {/* বাম পাশ: কন্টেন্ট এবং ওয়াটারমার্ক লোগো */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-[6vw] py-[10vh] lg:px-[8vw] xl:px-[10vw] z-10 min-h-[50vh] lg:min-h-screen">
        
        {/* ব্যাকগ্রাউন্ড লোগো (ওয়াটারমার্ক ইফেক্ট) */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 w-[120%] h-[120%] opacity-[0.03] pointer-events-none z-0">
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
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium">
            About Us
          </span>
          
          <div className="flex items-center gap-[1.5vw] mt-[2vh] mb-[5vh] md:mb-[6vh]">
            {/* সোনালী লাইনের বদলে লাল লাইন */}
            <div className="w-[0.8vw] md:w-[0.2vw] h-[5vh] bg-red-600"></div>
            <h2 className="text-white text-[8vw] md:text-[4vw] xl:text-[3.5vw] font-bold tracking-wide uppercase leading-tight">
              Final Cut <br className="hidden lg:block xl:hidden" /> Multimedia
            </h2>
          </div>

          {/* প্যারাগ্রাফ টেক্সট (ক্লায়েন্টের নতুন রিকোয়ারমেন্ট অনুযায়ী) */}
          <div className="space-y-[3vh] text-[#A0A0A0] text-[4vw] md:text-[1.1vw] leading-relaxed font-light pr-0 xl:pr-[3vw]">
            <p>
              Final Cut Multimedia is a Charlotte based video production agency helping businesses, brands, and organizations create professional video content that supports real business goals. We specialize in corporate videos, commercials, event coverage, customer testimonials, training videos, and brand storytelling that engage audiences and elevate brands.
            </p>
            <p>
              With more than 10 years of experience, we combine cinematic visuals, strategic storytelling, and a seamless production process to deliver content that looks exceptional and drives results. From planning and filming to editing and final delivery, our focus is on creating videos that help businesses stand out and make a lasting impact.
            </p>
          </div>

          {/* Learn More বাটন */}
          <Link 
            href="/about" 
            className="inline-flex items-center justify-center mt-[6vh] 
                       w-[50vw] sm:w-[30vw] md:w-[22vw] lg:w-[16vw] xl:w-[14vw]
                       h-[7vh] md:h-[6vh]
                       border-[0.2vw] md:border-[0.1vw] border-white/50 text-white text-[3.5vw] md:text-[0.9vw] font-semibold tracking-[0.2em] uppercase 
                       transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* ডান পাশ: ক্লায়েন্টের ছবি */}
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen bg-black/5"> 
        {/* bg-black/5 দেওয়া হয়েছে যাতে ইমেজ ছোট হলে ব্যাকগ্রাউন্ড খালি না লাগে */}
        <Image
          src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781697016/Use_this_picture_k9euqa.jpg"
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