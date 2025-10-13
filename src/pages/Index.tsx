import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Showcase />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
