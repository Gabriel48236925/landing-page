import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import Beneficios from "../components/Beneficios";
import ComoFunciona from "../components/ComoFunciona";
import Planos from "../components/Planos";
import Depoimentos from "../components/Depoimentos";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen w-full">
      <Navbar />
      <Hero />
      <Beneficios />
      <ComoFunciona />
      <Planos />
      <Depoimentos />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}