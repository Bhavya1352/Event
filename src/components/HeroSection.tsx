import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import BookingModal from './BookingModal';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const slides = [
    {
      image: '/images/1.jpg',
      title: 'BOOK TODAY GET IT DONE TOMORROW',
      subtitle: 'Fast, reliable event decoration services'
    },
    {
      image: '/images/2.jpg', 
      title: 'YOUR EVENT YOUR WAY',
      subtitle: 'Customized decorations for every celebration'
    },
    {
      image: '/images/3.jpg', 
      title: 'CELEBRATE IN STYLE',
      subtitle: 'Premium decorations for premium memories'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl mx-auto">
                {/* Trust badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
                  <span className="text-yellow-400 text-sm">⭐</span>
                  <span className="text-white/90 text-xs md:text-sm font-medium">Trusted by 5000+ Customers</span>
                </div>
                
                <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 drop-shadow-lg leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 font-medium px-4">
                  {slide.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                  <Button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-sm md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 font-bold"
                  >
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Book Now
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Button>
                  
                  <a href="tel:+919876543210">
                    <Button 
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 text-sm md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold w-full"
                    >
                      📞 Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-6 md:w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;