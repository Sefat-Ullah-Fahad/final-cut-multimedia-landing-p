"use client";

import Image from "next/image";

export default function SocialGallery() {
  const group1Images = [
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/496857656_2510228855980777_2259413147144370187_n.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/496844314_2510228925980770_7814908319192677181_n.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/C8120B90-0EBC-4602-98A8-4E7300316DA5-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/E8D4179E-7B88-4704-900F-A1D83B47BC86-scaled.jpeg",
  ];

  const group2Images = [
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/955F7A7B-57A1-4184-8C37-9A412CA7F515-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/BEB0E30D-2371-4152-9A01-756D0182060C-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/a18d6f40-8c96-48f3-96a5-755fc26faeeb.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/487687200_2469551286715201_4647725941950816530_n.jpg",
  ];

  const group3Images = [
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_28201-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/492938573_2539452473058415_7828940050462539546_n.jpg",
    "https://finalcutmultimedia.com/wp-content/uploads/2025/10/FCM_1535-scaled.jpg",
  ];

  const imageGroups = [group1Images, group2Images, group3Images];

  return (
    <section className="w-full bg-white text-black py-[12vh] px-[5vw] flex flex-col overflow-hidden">
      
      {/* হেডার অংশ (টাইটেল এবং সোশ্যাল আইকন) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[8vh] gap-[4vh] md:gap-0">
        
        {/* বাম দিকের টেক্সট */}
        <div className="flex flex-col">
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium mb-[1.5vh]">
            FOLLOW US
          </span>
          <div className="flex items-center gap-[1.5vw] mb-[2vh]">
            {/* গোল্ডের বদলে রেড লাইন */}
            <div className="w-[0.8vw] md:w-[0.2vw] h-[5vh] bg-red-600"></div>
            <h2 className="text-black text-[8vw] md:text-[4vw] font-black tracking-tight uppercase leading-none">
              WE&apos;RE SOCIAL
            </h2>
          </div>
          <p className="text-gray-600 text-[3.5vw] md:text-[1vw] max-w-[80vw] md:max-w-[30vw] leading-relaxed">
            Follow us on social media for the most exclusive video production news and behind-the-scenes from our amazing shoots.
          </p>
        </div>

        {/* ডান দিকের সোশ্যাল আইকন (গোল্ডের বদলে রেড কালার) */}
        <div className="flex gap-[3vw] md:gap-[1.5vw] text-red-600">
          {/* Facebook */}
          <a href="#" className="hover:text-black transition-colors">
            <svg className="w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24h11.494v-9.294H9.689v-3.621h3.13V8.411c0-3.1 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.763v2.309h3.59l-.467 3.621h-3.123V24h6.126c.732 0 1.325-.592 1.325-1.324V1.325C24 .593 23.408 0 22.675 0z"/></svg>
          </a>
          {/* TikTok */}
          <a href="#" className="hover:text-black transition-colors">
            <svg className="w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.52.49-5.18 2.34-6.89 1.4-1.28 3.32-1.92 5.21-1.67.01 1.41-.01 2.82.01 4.23-1.02-.32-2.19-.24-3.13.34-.84.5-1.41 1.36-1.5 2.33-.14 1.25.43 2.53 1.46 3.16 1.05.62 2.39.69 3.48.24 1.52-.63 2.52-2.14 2.54-3.8.03-6.28.01-12.56.02-18.84z"/></svg>
          </a>
          {/* Instagram */}
          <a href="#" className="hover:text-black transition-colors">
            <svg className="w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>

      {/* গ্যালারি গ্রিড (৩টি গ্রুপ) */}
      <div className="flex flex-col md:flex-row gap-[6vw] md:gap-[2vw] justify-between">
        
        {imageGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="w-full md:w-1/3">
            
            {/* ২x২ ইমেজের গ্রিড (হ্যান্ডেল রিমুভ করা হয়েছে, তাই গ্রিডটি এখন ফুল উইডথ) */}
            <div className="grid grid-cols-2 grid-rows-2 gap-[2vw] md:gap-[1vw]">
              {group.map((imgSrc, imgIndex) => (
                <div key={imgIndex} className="relative w-full aspect-square group overflow-hidden cursor-pointer bg-gray-100">
                  <Image
                    src={imgSrc}
                    alt={`Gallery Image ${imgIndex}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  {/* হোভার করলে ইন্সটাগ্রামের মতো হালকা ডার্ক ওভারলে */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* বটম ব্যানার */}
      <div className="w-full mt-[10vh] relative h-[25vh] md:h-[40vh] bg-black overflow-hidden group cursor-pointer">
        <Image
          src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/Untitled-3.jpg"
          alt="Final Cut Multimedia Bottom Banner"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
      </div>

    </section>
  );
}