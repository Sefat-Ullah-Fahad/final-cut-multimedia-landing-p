import HeroSection from "@/components/home/Hero";
import AboutSection from "@/components/home/About";
import StatsCounter from "@/components/home/StatsCounter"; 
import VideoGallery from "@/components/home/VideoGallery"; 
import ServicesGrid from "@/components/home/ServicesGrid"; 
import ClientMarquee from "@/components/home/ClientMarquee"; // সতর্কতা: শুধু লোগো থাকবে, ইউটিউব নয়
import TestimonialSection from "@/components/home/TestimonialSection"; 
import ProcessSection from "@/components/home/ProcessSection"; 
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      {/* 1. Hero (Done) */}
      <HeroSection />
      
      {/* 2. About & Credibility (Done) */}
      <AboutSection />
      
      {/* 3. Why Work With Us / Trust Elements */}
      <StatsCounter />
      
      {/* 4. Featured Productions (Done - 1st CTA added inside) */}
      <VideoGallery />
      
      {/* 5. Services & Industries Served (Done) */}
      <ServicesGrid />
      
      {/* 6. Client Logos (Trust Element - YouTube Removed) */}
      <ClientMarquee />
      
      {/* 7. Client Testimonials (Next step: add 2nd CTA inside or after this) */}
      <TestimonialSection />
      
      {/* 8. Process / How It Works (Next step: integrate Jane's unedited photos here) */}
      <ProcessSection />
      
      {/* 9. Contact / Inquiry Form */}
      <ContactSection />
    </main>
  );
}