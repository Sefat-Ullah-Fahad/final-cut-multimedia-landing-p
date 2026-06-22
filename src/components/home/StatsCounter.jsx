"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Counter Animation Component (Updated for Light Theme)
const CounterItem = ({ target, suffix = "", text, isDecimal = false }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // 50% screen e asle animation suru hobe
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTimestamp = null;
      const duration = 2000; // 2 seconds a count complete hobe

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function for smooth stop
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = easeOutQuart * target;
        
        // যদি ডেসিমাল হয় (যেমন ৪.৯), তাহলে দশমিকের পর এক ঘর দেখাবে, নাহলে পূর্ণসংখ্যা
        setCount(isDecimal ? currentValue.toFixed(1) : Math.floor(currentValue));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isVisible, target, isDecimal]);

  return (
    <div ref={counterRef} className="flex flex-col items-center justify-center text-center w-full px-[2vw]">
      {/* কাউন্টার সংখ্যা (সাদার বদলে কালো) */}
      <h3 className="text-black text-[8vw] md:text-[4vw] font-black leading-none drop-shadow-sm">
        {count}<span className="text-red-600">{suffix}</span>
      </h3>
      {/* ডেসক্রিপশন টেক্সট (হালকা গ্রে এর বদলে গাঢ় গ্রে) */}
      <p className="text-gray-600 text-[2.5vw] md:text-[0.9vw] font-bold tracking-[0.15em] uppercase mt-[1.5vh] max-w-[80%] md:max-w-[70%]">
        {text}
      </p>
    </div>
  );
};

export default function StatsCounter() {
  const statsData = [
    { target: 500, suffix: "+", text: "Projects Completed", isDecimal: false },
    { target: 10, suffix: "+", text: "Years of Experience", isDecimal: false },
    { target: 4.9, suffix: " ★", text: "Google Rating", isDecimal: true },
    { target: 114, suffix: "+", text: "Verified Reviews", isDecimal: false },
  ];

  return (
    <section className="relative w-full py-[12vh] overflow-hidden flex flex-col items-center justify-center bg-gray-50">
      
      {/* Background Image (লাইট থিমের জন্য গ্রেস্কেল ও অপাসিটি কমানো হয়েছে) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/492938573_2539452473058415_7828940050462539546_n.jpg"
          alt="Final Cut Multimedia Background"
          fill
          className="object-cover object-center grayscale opacity-30"
          priority
          unoptimized
        />
        {/* Light Overlay (ডার্কের বদলে সাদা ওভারলে) */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[90vw] flex flex-col items-center">
        
        {/* Title Section */}
        <div className="flex flex-col items-center mb-[8vh]">
          <span className="text-gray-500 text-[3vw] md:text-[1vw] tracking-[0.2em] uppercase font-bold mb-[1vh]">
            Our Stats
          </span>
          <div className="flex items-center gap-[1.5vw]">
            {/* রেড থিম অ্যাকসেন্ট */}
            <div className="w-[0.8vw] md:w-[0.2vw] h-[4vh] bg-red-600"></div>
            {/* টাইটেল কালো করা হয়েছে */}
            <h2 className="text-black text-[6vw] md:text-[3vw] font-black tracking-widest uppercase leading-none">
              Why Work With Us
            </h2>
          </div>
        </div>

        {/* Counter Grid (ডিভাইডার লাইনগুলো গ্রে করা হয়েছে) */}
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-y-[5vh] md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {statsData.map((stat, index) => (
            <div key={index} className="pt-[4vh] md:pt-0">
              <CounterItem 
                target={stat.target} 
                suffix={stat.suffix} 
                text={stat.text} 
                isDecimal={stat.isDecimal} 
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}