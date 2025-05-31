import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Services from '@/components/Services';
import HowtoWork from '@/components/HowtoWork';
import Projects from '@/components/Projects';
import { Testimonials } from '@/components/Testimonial';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Services />
      <HowtoWork />
      <Projects />
      {/* <Testimonials /> */}
      <Faq />
      <Footer />
    </>
  );
}
