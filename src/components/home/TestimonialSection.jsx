"use client";

import Image from "next/image";
import Link from "next/link";

export default function TestimonialSection() {
  // স্ক্রিনশট থেকে নেওয়া গুগল রিভিউয়ের ডেটা
  const reviews = [
    {
      id: 1,
      name: "Kelly King",
      time: "1 month ago",
      text: "Final Cut Multimedia went above and beyond for our project. The team was highly professional, easy to work with, and the final video was absolutely stunning. Highly recommend their services!",
      rating: 5,
    },
    {
      id: 2,
      name: "Marcus Davis",
      time: "3 months ago",
      text: "Absolutely amazing experience. They handled our corporate event perfectly and delivered a high-quality promotional video that our whole team loved. Promptness and picture quality were top-notch.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Powell",
      time: "4 months ago",
      text: "The drone footage they captured for our real estate listing was breathtaking. They are very prompt, professional, and true experts in their craft. They truly brought our vision to life.",
      rating: 5,
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] py-[12vh] px-[5vw] overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড ওয়াটারমার্ক (ঐচ্ছিক, প্রিমিয়াম ফিল দেওয়ার জন্য) */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-red-600/5 rounded-full blur-[10vw] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col items-center text-center mb-[6vh]">
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium mb-[1.5vh]">
            What Clients Say
          </span>
          <div className="flex items-center gap-[1.5vw]">
            <div className="w-[0.8vw] md:w-[0.2vw] h-[5vh] bg-red-600"></div>
            <h2 className="text-white text-[7vw] md:text-[3.5vw] font-black tracking-widest uppercase leading-none">
              CLIENT TESTIMONIALS
            </h2>
          </div>
        </div>

        {/* গুগল রেটিং সামারি (4.9 Stars - 114 Reviews) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-[3vw] md:gap-[1.5vw] mb-[8vh] bg-[#111] border border-white/10 py-[2vh] px-[5vw] md:px-[3vw] rounded-[1vw]">
          <div className="flex items-center gap-[2vw] md:gap-[1vw]">
            <span className="text-white text-[6vw] md:text-[2.5vw] font-bold">4.9</span>
            <div className="flex gap-[0.5vw]">
              {/* ৫টি গোল্ডেন স্টার */}
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw] text-[#FABB05]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="hidden md:block w-[0.1vw] h-[4vh] bg-white/20"></div>
          <span className="text-gray-300 text-[3.5vw] md:text-[1vw] font-medium tracking-wide">
            Based on <strong className="text-white">114+ reviews</strong> on Google
          </span>
        </div>

        {/* ৩-কলাম রিভিউ কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw] md:gap-[2vw] w-full mb-[6vh]">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="group relative flex flex-col bg-[#111] p-[6vw] md:p-[2.5vw] border-[0.2vw] md:border-[0.1vw] border-white/5 hover:border-red-600 transition-colors duration-500"
            >
              {/* ইউজারের ইনফো এবং গুগল আইকন */}
              <div className="flex items-start justify-between mb-[3vh]">
                <div className="flex items-center gap-[3vw] md:gap-[1vw]">
                  {/* নামের প্রথম অক্ষর দিয়ে অবতার */}
                  <div className="w-[12vw] h-[12vw] md:w-[3.5vw] md:h-[3.5vw] rounded-full bg-red-600/20 text-red-500 flex items-center justify-center font-bold text-[5vw] md:text-[1.5vw]">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-white text-[4vw] md:text-[1.1vw] font-bold tracking-wide">
                      {review.name}
                    </h3>
                    <span className="text-gray-500 text-[3vw] md:text-[0.8vw]">
                      {review.time}
                    </span>
                  </div>
                </div>
                {/* গুগল আইকন (SVG) */}
                <svg className="w-[6vw] h-[6vw] md:w-[1.8vw] md:h-[1.8vw]" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.825-.07-1.635-.2-2.43H12.2v4.54h6.54c-.29 1.48-1.12 2.74-2.35 3.58v2.96h3.76c2.2-2.03 3.47-5.02 3.47-8.65z"/>
                  <path fill="#34A853" d="M12.2 24c3.24 0 5.96-1.08 7.95-2.91l-3.76-2.96c-1.08.72-2.45 1.15-4.19 1.15-3.23 0-5.96-2.18-6.94-5.11H1.37v3.06C3.36 21.17 7.44 24 12.2 24z"/>
                  <path fill="#FBBC05" d="M5.26 14.17c-.25-.72-.39-1.49-.39-2.28s.14-1.56.39-2.28V6.55H1.37A11.95 11.95 0 000 11.89c0 1.93.47 3.75 1.37 5.34l3.89-3.06z"/>
                  <path fill="#EA4335" d="M12.2 4.76c1.76 0 3.34.61 4.59 1.8l3.43-3.43C18.15 1.19 15.43 0 12.2 0 7.44 0 3.36 2.83 1.37 6.55l3.89 3.06c.98-2.93 3.71-5.11 6.94-5.11z"/>
                </svg>
              </div>

              {/* ৫ স্টার রেটিং */}
              <div className="flex gap-[0.5vw] mb-[2.5vh]">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-[4vw] h-[4vw] md:w-[1vw] md:h-[1vw] text-[#FABB05]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* রিভিউ টেক্সট */}
              <p className="text-gray-400 text-[3.5vw] md:text-[0.95vw] leading-relaxed italic flex-grow">
                &quot;{review.text}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <Link 
          href="https://www.google.com/search?q=final+cut+multimedia&sca_esv=ec2bff8bd1e2ef21&sxsrf=ANbL-n43SBlqnnkBrRLYrYKkgZ25D_-aQg:1781609540481&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3vWUtYx0DZdicpfE1faGYenqWn-q4MFiFFtvJjTKeAVxBf9XF8ByrMpEedseJb6C24e7QdJQdIE3TPpl5mEwf0HZUp1chSl04q3NzUG-sivE9fh2upv_LUl1i41J2OLX0ntDV3FbKmN59pJf5BBarEFT9msi8Zx3tjpgPrbRkWHc8AvYww&sa=X&ved=2ahUKEwjjrafe1IuVAxV0ZWwGHULPNsgQ0pQJegQIAxAF&biw=1920&bih=945&dpr=1#lrd=0x8856a5121da75177:0x7a24b14224e384b,1,,,," // এখানে ক্লায়েন্টের আসল গুগল রিভিউ পেজের লিংক বসবে
          target="_blank"
          className="bg-transparent border-[0.2vw] md:border-[0.1vw] border-white text-white font-bold text-[3vw] md:text-[0.9vw] tracking-[0.15em] uppercase px-[6vw] py-[1.5vh] md:px-[3vw] md:py-[1.5vh] hover:bg-white hover:text-black transition-all duration-300"
        >
          READ ALL GOOGLE REVIEWS
        </Link>

      </div>
    </section>
  );
}