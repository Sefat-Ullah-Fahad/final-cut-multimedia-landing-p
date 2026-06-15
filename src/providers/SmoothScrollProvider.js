'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // লেনিস স্ক্রল ইনিশিয়ালাইজেশন
    const lenis = new Lenis({
      duration: 1.2,                     // স্ক্রল হওয়ার সময়কাল
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // স্মুথনেস কার্ভ
      direction: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // রিকোয়েস্ট অ্যানিমেশন ফ্রেম লুপ
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // কম্পোনেন্ট আনমাউন্ট হলে ডেস্ট্রয় করা
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}