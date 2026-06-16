import AboutSection from "@/components/home/About";
import ClientMarquee from "@/components/home/ClientMarquee"; // ഇതിൽ YouTube + Client Logos আছে
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/Hero";
import ProcessSection from "@/components/home/ProcessSection";
import RecentPostsSection from "@/components/home/RecentPost";
import ServicesGrid from "@/components/home/ServicesGrid";
import SocialGallery from "@/components/home/SocialGallery";
import StatsCounter from "@/components/home/StatsCounter";
import TestimonialSection from "@/components/home/TestimonialSection";
import VideoGallery from "@/components/home/VideoGallery";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <HeroSection></HeroSection>
      
      {/* 2. About */}
      <AboutSection></AboutSection>
      
      {/* 3. Exclusive Productions */}
      <VideoGallery></VideoGallery>
      
      {/* 4. Why Work With Us */}
      <StatsCounter></StatsCounter>
      
      {/* 5. Services */}
      <ServicesGrid></ServicesGrid>
      
      {/* 6. Client Testimonials (নতুন সেকশন) */}
      <TestimonialSection></TestimonialSection>
      
      {/* 7. Process / How It Works (নতুন সেকশন) */}
      <ProcessSection></ProcessSection>
      
      {/* 8. Latest From Our Channel (YouTube & Clients) */}
      <ClientMarquee></ClientMarquee>
      
      {/* 9. Social / Instagram Feed (ক্লায়েন্টের নির্দেশ অনুযায়ী ব্লগের উপরে আনা হয়েছে) */}
      <SocialGallery></SocialGallery>
      
      {/* 10. Blogs (Social এর নিচে নামানো হয়েছে) */}
      <RecentPostsSection></RecentPostsSection>
      
      {/* 11. Get In Touch (Contact) */}
      <ContactSection></ContactSection>
    </main>
  );
}