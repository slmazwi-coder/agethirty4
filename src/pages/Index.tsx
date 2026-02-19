import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppsShowcase from "@/components/AppsShowcase";
import AboutTeam from "@/components/AboutTeam";
import SocialImpact from "@/components/SocialImpact";
import ServicesSection from "@/components/ServicesSection";
import HelpDesk from "@/components/HelpDesk";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AppsShowcase />
    <AboutTeam />
    <SocialImpact />
    <ServicesSection />
    <HelpDesk />
    <Footer />
  </div>
);

export default Index;
