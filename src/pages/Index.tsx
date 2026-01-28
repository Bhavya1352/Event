import { useState, useEffect } from 'react';
import ExplosionIntro from '../components/ExplosionIntro';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import CallToAction from '../components/CallToAction';
import WhyChooseUs from '../components/WhyChooseUs';
import CitySelector from '../components/CitySelector';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleExplosionComplete = () => {
    setShowContent(true);
  };

  useEffect(() => {
    if (showContent && window.location.hash === '#services') {
      setTimeout(() => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [showContent]);

  return (
    <>
      {!showContent && <ExplosionIntro onComplete={handleExplosionComplete} />}
      {showContent && (
        <div className="content-enter">
          <CitySelector />
          <Header />
          <HeroSection />
          <CategorySection />
          <AboutUs />
          <ServicesGrid />
          <CallToAction />
          <WhyChooseUs />
          <Testimonials />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
