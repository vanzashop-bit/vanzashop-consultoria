import About from "@/components/About";
import Consultoria from "@/components/Consultoria";
import Contact from "@/components/Contact";
import Differentials from "@/components/Differentials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-slate-900">
      <Header />
      <Hero />
      <Differentials />
      <Consultoria />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
