import HeroSection from "@/components/home/Hero";
import AboutSection from "@/components/home/About";
import StatsCounter from "@/components/home/StatsCounter"; 
import VideoGallery from "@/components/home/VideoGallery"; 
import ServicesGrid from "@/components/home/ServicesGrid"; 
import ClientMarquee from "@/components/home/ClientMarquee"; 
import TestimonialSection from "@/components/home/TestimonialSection"; 
import ProcessSection from "@/components/home/ProcessSection"; 
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <section id="hero">
        <HeroSection />
      </section>
      
      {/* 2. About & Credibility */}
      <section id="about">
        <AboutSection />
      </section>
      
      {/* 3. Why Work With Us / Trust Elements */}
      <StatsCounter />
      
      {/* 4. Featured Productions */}
      <VideoGallery />
      
      {/* 5. Services & Industries Served */}
      <section id="services">
        <ServicesGrid />
      </section>
      
      {/* 6. Client Logos */}
      <ClientMarquee />
      
      {/* 7. Client Testimonials */}
      <TestimonialSection />
      
      {/* 8. Process / How It Works */}
      <section id="process">
        <ProcessSection />
      </section>
      
      {/* 9. Contact / Inquiry Form */}
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}