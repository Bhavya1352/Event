import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, ChevronDown, User, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingModal from './BookingModal';
import SearchResults from './SearchResults';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    if (location.pathname === '/') {
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#services');
    }
  };

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsSearchOpen(true); // Always open when typing
  };

  const handleSearchFocus = () => {
    setIsSearchOpen(true); // Open when focused
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleSwitchToSignUp = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(true);
  };

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 px-4 text-center text-sm">
        <span className="font-medium">🎉 Special Offer: 20% Off on First Booking! Use Code: <strong>HAPPY20</strong></span>
      </div>

      <header className={`bg-white/95 backdrop-blur-sm shadow-lg py-4 px-6 flex items-center justify-between fixed top-8 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'top-0 shadow-xl' : ''}`}>
        <div className="flex items-center">
          <img src="/images/logo.jpg" alt="HappyHearts Logo" className="h-12 mr-4 rounded-xl border-2 border-pink-100" />
          <span className="text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">HappyHearts</span>
          
          <nav className="hidden lg:flex space-x-2 ml-8">
            <a href="/" className={`font-semibold transition-all duration-300 px-4 py-2 rounded-full ${location.pathname === '/' ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'}`}>Home</a>
            
            <div className="relative group">
              <button 
                onClick={scrollToServices}
                className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:bg-pink-50 px-4 py-2 rounded-full flex items-center"
              >
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-pink-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
                <button onClick={scrollToServices} className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-colors">Anniversary</button>
                <button onClick={scrollToServices} className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-colors">Birthdays</button>
                <button onClick={scrollToServices} className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-colors">Baby Shower</button>
                <button onClick={scrollToServices} className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-colors">Love/Proposal</button>
                <button onClick={scrollToServices} className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-colors">Balloon Bouquet</button>
                <button onClick={scrollToServices} className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-colors">Themed Decoration</button>
              </div>
            </div>
            
            <a href="/about" className={`font-semibold transition-all duration-300 px-4 py-2 rounded-full ${location.pathname === '/about' ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'}`}>About Us</a>
            <a href="/contact" className={`font-semibold transition-all duration-300 px-4 py-2 rounded-full ${location.pathname === '/contact' ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'}`}>Contact</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative hidden md:block">
            <Input 
              type="text" 
              placeholder="Search services..." 
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              className="pl-10 pr-4 py-2 rounded-full border-2 border-pink-100 focus:border-pink-500 focus:ring-pink-500 w-48 focus:w-64 transition-all duration-300 bg-gray-50"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400 w-4 h-4" />
            <SearchResults 
              isOpen={isSearchOpen} 
              onClose={handleSearchClose} 
              searchQuery={searchQuery} 
            />
          </div>
          
          <div className="relative group hidden md:block">
            <button 
              onClick={handleLoginClick}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-semibold px-3 py-2 rounded-full hover:bg-pink-50 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                <User className="w-4 h-4 text-pink-600" />
              </div>
            </button>
            <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-2xl shadow-2xl border border-pink-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
              <button 
                onClick={handleLoginClick}
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => setIsSignUpModalOpen(true)}
                className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
          
          <Button 
            onClick={handleBookNow}
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-full px-6 py-2 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 hidden md:flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Book Now
          </Button>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-pink-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden border-t border-pink-100">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="/" className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:bg-pink-50 px-3 py-2 rounded-lg">Home</a>
              <a href="/services" className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:bg-pink-50 px-3 py-2 rounded-lg">Services</a>
              <a href="/about" className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:bg-pink-50 px-3 py-2 rounded-lg">About Us</a>
              <a href="/contact" className="text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 hover:bg-pink-50 px-3 py-2 rounded-lg">Contact</a>
              <Button 
                onClick={handleBookNow}
                className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-6 py-2 font-semibold w-full"
              >
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </header>
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignUp={handleSwitchToSignUp}
      />
      
      <SignUpModal 
        isOpen={isSignUpModalOpen} 
        onClose={() => setIsSignUpModalOpen(false)} 
      />
    </>
  );
};

export default Header;