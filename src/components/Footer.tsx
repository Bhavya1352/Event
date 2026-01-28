import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-white/80 mb-4 md:mb-6 text-sm md:text-base">Get exclusive offers and updates delivered to your inbox!</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-4 md:px-6 text-sm"
              />
              <Button className="bg-white text-pink-600 hover:bg-yellow-300 hover:text-gray-900 rounded-full px-4 md:px-6 font-semibold text-sm">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {/* Brand - Full width on mobile */}
            <div className="col-span-2 md:col-span-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-3">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
                </div>
                <span className="text-xl md:text-2xl font-black">HappyHearts</span>
              </div>
              <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm hidden md:block">
                Creating magical moments with beautiful decorations for every celebration.
              </p>
              <div className="flex justify-center md:justify-start space-x-3">
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 bg-pink-500/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300">
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 bg-pink-500/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300">
                  <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 bg-pink-500/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300">
                  <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 bg-pink-500/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300">
                  <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm md:text-lg font-bold mb-4 md:mb-6">Quick Links</h3>
              <ul className="space-y-2 md:space-y-3 text-sm">
                <li><a href="/" className="text-gray-400 hover:text-pink-500 transition-colors">Home</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-pink-500 transition-colors">Services</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-pink-500 transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-pink-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm md:text-lg font-bold mb-4 md:mb-6">Services</h3>
              <ul className="space-y-2 md:space-y-3 text-sm">
                <li><a href="/services" className="text-gray-400 hover:text-pink-500 transition-colors">Birthday</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-pink-500 transition-colors">Anniversary</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-pink-500 transition-colors">Proposal</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-pink-500 transition-colors">Baby Shower</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm md:text-lg font-bold mb-4 md:mb-6">Contact Us</h3>
              <div className="space-y-3 md:space-y-4">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors text-sm">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-pink-500" />
                  </div>
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:hello@happyhearts.com" className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors text-sm">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-pink-500" />
                  </div>
                  <span>hello@happyhearts.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-pink-500" />
                  </div>
                  <span>Mumbai, Delhi, Bangalore</span>
                </div>
              </div>
              
              {/* Working hours */}
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white/5 rounded-xl hidden md:block">
                <p className="text-sm font-semibold text-white mb-2">🕒 Working Hours</p>
                <p className="text-xs md:text-sm text-gray-400">Mon - Sun: 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-gray-400 text-xs md:text-sm text-center">© 2024 HappyHearts. All rights reserved.</p>
            <p className="text-gray-400 text-xs md:text-sm hidden md:block">Made with ❤️ for celebrations</p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;