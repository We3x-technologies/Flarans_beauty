import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AboutPreview from './components/AboutPreview';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutDetailed from './components/AboutDetailed';
import ServicesPreview from './components/ServicesPreview';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, search]);

  return null;
}

function PageLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_10%_30%,rgba(181,63,187,.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(145,47,176,.12),transparent_24%),linear-gradient(to_bottom_right,#FFF9FF,#E7BDE6B3,#B53FBB33)] font-sans text-ink selection:bg-rose-200 selection:text-ink">
      <Navbar />
      <main className="pt-[76px]">{children}</main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <AboutPreview />
      <Gallery />
      <Testimonials />
      <CTA />
    </PageLayout>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<PageLayout><Services /></PageLayout>} />
        <Route path="/about" element={<PageLayout><AboutDetailed /></PageLayout>} />
        <Route path="/gallery" element={<PageLayout><Gallery /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><CTA /></PageLayout>} />
      </Routes>
    </>
  );
}
