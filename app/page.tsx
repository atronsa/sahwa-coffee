import Hero from "@/components/home/Hero";
import Product from "@/components/home/Product";
import RequestQuote from "@/components/home/RequestQuote";
import About from "@/components/home/About";
import Certificate from "@/components/home/Certificate";
import HowItWorks from "@/components/home/HowItWorks";
import BentoGrid from "@/components/home/BentoGrid";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
    <Hero />
    <Product />
    <RequestQuote />
    <About />
    <Certificate />
    <HowItWorks />
    <BentoGrid />
    <Contact />
    </>
  );
}