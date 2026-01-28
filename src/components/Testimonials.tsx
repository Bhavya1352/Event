import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Priya Sharma",
    avatar: "PS",
    rating: 5,
    text: "HappyHearts made my anniversary so special! The decoration was beyond my expectations. Highly recommended!",
    event: "Anniversary Celebration",
    location: "Mumbai"
  },
  {
    name: "Rahul Gupta", 
    avatar: "RG",
    rating: 5,
    text: "Amazing work for my daughter's first birthday. The team was professional and the setup was magical!",
    event: "First Birthday",
    location: "Delhi"
  },
  {
    name: "Sneha Patel",
    avatar: "SP",
    rating: 5,
    text: "Perfect proposal setup! My fiancé was so surprised. Thank you HappyHearts for making it memorable!",
    event: "Proposal Decoration",
    location: "Bangalore"
  },
  {
    name: "Arjun Mehta",
    avatar: "AM",
    rating: 5,
    text: "We hired HappyHearts for our baby shower and they exceeded all expectations! Worth every penny!",
    event: "Baby Shower",
    location: "Pune"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Real stories from real celebrations
          </p>
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <Card className="bg-white shadow-xl mx-4">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-pink-200 mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-sm leading-relaxed">"{testimonials[currentIndex].text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-pink-600 text-sm">{testimonials[currentIndex].event}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-pink-50">
              <ChevronLeft className="w-5 h-5 text-pink-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-pink-600 w-6' : 'bg-pink-200'}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-pink-50">
              <ChevronRight className="w-5 h-5 text-pink-600" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-pink-200 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                    <p className="text-pink-600 text-xs">{testimonial.event}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;