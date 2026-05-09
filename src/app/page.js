import AboutSection from "./home/AboutSection";
import Amenities from "./home/Amenities";
import CTA from "./home/Cta";
import FAQSection from "./home/FAQSection";
import Hero from "./home/Hero";
import RoomsSection from "./home/RoomsSection";
import Testimonials from "./home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
       <AboutSection />
       <RoomsSection />
       <Amenities />
       <CTA />
      <FAQSection />
       <Testimonials />
    </main>
  );
}