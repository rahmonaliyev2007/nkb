"use client"
import { Particles } from "@/components/magicui/particles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyWe from "@/components/WhyWe";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function Home() {

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Particles className="absolute inset-0 z-0 bg-black" quantity={150} ease={80} color={`#ffffff`} refresh />
      <div className="absolute -bottom-100 left-0 w-[500px] h-[300px] rounded-full shadow-[-120px_-300px_1420px_200px_#c49b1f20]"></div>
      <div className="relative z-10 h-screen overflow-y-auto text-white">
        <Navbar />
        <Hero />
        <About />
        <WhyWe />
        <Services />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}