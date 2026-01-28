import { Button } from '@/components/ui/button';
import { useState } from 'react';
import BookingModal from './BookingModal';
import { Sparkles, ArrowRight, Phone } from 'lucide-react';

const CallToAction = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Decorative circles - hidden on mobile */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/10 rounded-full hidden md:block" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white/10 rounded-full hidden md:block" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 md:px-5 md:py-2.5 rounded-full mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
            <span className="text-white font-semibold text-xs md:text-sm">Limited Time: 20% Off!</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Elevate Your Event
            <span className="block text-yellow-300 text-2xl sm:text-3xl md:text-5xl mt-2">Beautiful Decorations</span>
          </h2>
          
          <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 font-medium max-w-2xl mx-auto px-4">
            Transform your celebration into an unforgettable experience!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button 
              onClick={() => setIsBookingModalOpen(true)}
              className="w-full sm:w-auto bg-white text-pink-600 hover:bg-yellow-300 hover:text-gray-900 text-sm md:text-lg px-6 py-5 md:px-10 md:py-7 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Book Now
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
            
            <a href="tel:+919876543210" className="flex items-center gap-3 text-white hover:text-yellow-300 font-semibold text-base md:text-lg transition-all">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/50 flex items-center justify-center">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span>+91 98765 43210</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-6 text-white/80 px-4">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-xs md:text-sm font-medium">Free Consult</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-xs md:text-sm font-medium">Same Day</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-xs md:text-sm font-medium">100% Happy</span>
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
};

export default CallToAction;