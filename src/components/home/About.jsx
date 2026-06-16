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
            <div className="w-[0.8vw] md:w-[0.2vw] h-[5vh] bg-[#D4AF37]"></div>
            <h2 className="text-white text-[8vw] md:text-[4vw] xl:text-[3.5vw] font-bold tracking-wide uppercase leading-tight">
              Final Cut <br className="hidden lg:block xl:hidden" /> Multimedia
            </h2>
          </div>

          {/* প্যারাগ্রাফ টেক্সট (ক্লায়েন্টের রিকোয়ারমেন্ট অনুযায়ী শর্ট করা হয়েছে) */}
          <div className="space-y-[3vh] text-[#A0A0A0] text-[4vw] md:text-[1.1vw] leading-relaxed font-light pr-0 xl:pr-[3vw]">
            <p>
              <strong className="text-white font-medium">Who We Are & What We Do:</strong> We are a premier video production and photography agency specializing in crafting cinematic visuals and compelling brand stories.
            </p>
            <p>
              <strong className="text-white font-medium">Who We Help:</strong> We partner with businesses, corporate clients, and brands in Charlotte, NC, and beyond to help them stand out in a crowded digital landscape.
            </p>
            <p>
              <strong className="text-white font-medium">Why We&apos;re Different:</strong> What sets us apart is our relentless commitment to high-quality storytelling, seamless production, and delivering measurable results that truly connect with your audience.
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
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen">
        <Image
          src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/488528975_2472962053040791_5356663683752375839_n.jpg"
          alt="Final Cut Multimedia Team"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
      </div>

    </section>
  );
}