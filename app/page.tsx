import Services from "@/sections/Services";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Process from "@/sections/Process";
import Documents from "@/sections/Documents";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "../sections/WhyChooseUs";
import Stats from "../sections/Stats";
import SideWave from "@/components/SideWave";
import Partners from "@/sections/Partners";

export default function Home() {
  return (
    <>
    
      <Navbar />
      <SideWave />
      <Hero />
      <Stats />
      <Services />
      <Partners />
      <WhyChooseUs />
      <Process/>
      <Documents />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      
      
    </>
  );
}