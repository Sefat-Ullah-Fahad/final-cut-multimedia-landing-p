"use client";

import Image from "next/image";
import Link from "next/link";

export default function RecentPostsSection() {
  const blogPosts = [
    {
      id: 1,
      title: "SOCIAL MEDIA PROFILE MANAGEMENT THAT KEEPS YOUR BUSINESS LOOKING ACTIVE AND PROFESSIONAL",
      description: "Master social media profile management with Final Cut Multimedia. Get fresh content and strategic support for business growth in Charlotte, NC.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2026/06/social-media-profile-management-1024x585.jpeg",
      link: "#",
    },
    {
      id: 2,
      title: "SOCIAL MEDIA OPTIMIZATION SERVICES THAT HELP YOU GET MORE FROM THE CONTENT YOU ALREADY HAVE",
      description: "Our social media optimization services keep your brand visible with fresh content and strategic messaging to engage and build customer trust.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2026/06/social-media-optimization-services-1024x585.jpeg",
      link: "#",
    },
    {
      id: 3,
      title: "SOCIAL MEDIA LEAD GENERATION SERVICES THAT HELP TURN ATTENTION INTO REAL OPPORTUNITIES",
      description: "Transform your business with our social media lead generation services that ensure fresh content and visibility in a competitive market.",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2026/06/social-media-lead-generation-services-1024x585.jpeg",
      link: "#",
    },
  ];

  return (
    <section className="relative w-full py-[12vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড ইমেজ এবং ডার্ক ওভারলে */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/professional-video-production-for-car-dealers-1-768x439-1.jpeg"
          alt="Final Cut Multimedia Background"
          fill
          className="object-cover object-center"
          unoptimized
        />
        {/* ডার্ক ভাইব আনার জন্য কালো ওভারলে */}
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* মূল কন্টেন্ট (z-10 দিয়ে ব্যাকগ্রাউন্ডের উপরে রাখা হয়েছে) */}
      <div className="relative z-10 w-full max-w-[90vw] flex flex-col items-center">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col items-center mb-[8vh] text-center">
          <span className="text-gray-400 text-[3vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium mb-[1.5vh]">
            BLOG & NEWS
          </span>
          <div className="flex items-center gap-[1.5vw]">
            {/* গোল্ডের বদলে রেড লাইন */}
            <div className="w-[0.8vw] md:w-[0.2vw] h-[4vh] bg-red-600"></div>
            <h2 className="text-white text-[6vw] md:text-[3vw] font-bold tracking-widest uppercase leading-none">
              MY RECENT POSTS
            </h2>
          </div>
        </div>

        {/* ৩-কলাম কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[5vw] md:gap-[2.5vw] w-full">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="flex flex-col bg-white overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-[1vh] group"
            >
              {/* কার্ডের উপরের দিকের ইমেজ */}
              <div className="relative w-full h-[30vh] md:h-[25vh] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* কার্ডের ভেতরের সাদা অংশের টেক্সট ও বাটন */}
              <div className="flex flex-col items-center text-center p-[5vw] md:p-[2.5vw] flex-grow">
                
                {/* টাইটেল */}
                <h3 className="text-black text-[4.5vw] md:text-[1.1vw] font-bold uppercase leading-snug mb-[2vh]">
                  {post.title}
                </h3>
                
                {/* ডেসক্রিপশন */}
                <p className="text-gray-600 text-[3.5vw] md:text-[0.9vw] leading-relaxed mb-[4vh] flex-grow">
                  {post.description}
                </p>

                {/* রিড মোর বাটন (রেড হোভার ইফেক্ট) */}
                <Link 
                  href={post.link}
                  className="mt-auto border-[0.3vw] md:border-[0.15vw] border-black text-black font-bold text-[3vw] md:text-[0.85vw] tracking-[0.15em] uppercase px-[6vw] py-[1.5vh] md:px-[3vw] md:py-[1.2vh] hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
                >
                  READ MORE
                </Link>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}