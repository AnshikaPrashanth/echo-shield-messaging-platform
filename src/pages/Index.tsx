
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Technology from "@/components/Technology";
import Demo from "@/components/Demo";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Technology />
      <Demo />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
