import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppsShowcase from "@/components/AppsShowcase";
import AboutTeam from "@/components/AboutTeam";
import ServicesSection from "@/components/ServicesSection";
import HelpDesk from "@/components/HelpDesk";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AppsShowcase />
      <AboutTeam />
      <ServicesSection />
      <HelpDesk />
      <Footer />
    </div>
  );
};

export default Index;
