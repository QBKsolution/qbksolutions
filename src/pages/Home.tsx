import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import CaseStudies from "@/components/home/CaseStudies";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import TechnologyStack from "@/components/home/TechnologyStack";
import IndustryExpertise from "@/components/home/IndustryExpertise";
import { useEffect } from "react";



const Home = () => {
  useEffect(() => {
  document.title = "QBK Solutions - Digital Business & Technology Consulting";
  }, []);

  return (
    <div className="min-h-screen animate-fade-in-up transition-all duration-700">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <TechnologyStack />
      <Process />
      <IndustryExpertise />
      <CaseStudies />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
