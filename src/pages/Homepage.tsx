import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonial";

function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Experience />
      <Testimonials />
      <Services/>
      <Footer/>
    </div>
  );
}

export default Homepage;
