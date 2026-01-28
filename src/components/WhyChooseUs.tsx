import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Star, Palette, Award, Heart, Clock, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />,
    title: "Expert Decorators",
    description: "Years of experience creating unique, personalized decorations."
  },
  {
    icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />,
    title: "Attention to Detail",
    description: "We meticulously plan every element for perfection."
  },
  {
    icon: <Palette className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />,
    title: "Creative Designs",
    description: "Innovative and stunning designs tailored to you."
  },
  {
    icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />,
    title: "Premium Quality",
    description: "Only the finest materials for spectacular setups."
  },
  {
    icon: <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />,
    title: "Great Service",
    description: "Outstanding support throughout your planning journey."
  },
  {
    icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />,
    title: "On-Time Setup",
    description: "Punctual setup so you can enjoy stress-free."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span className="text-pink-600 font-semibold text-sm">Why Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Why Choose <span className="text-pink-600">HappyHearts</span>?</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Discover what makes us the perfect choice for your celebrations
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="mb-4 md:mb-6 flex justify-center">
                  <div className="p-3 md:p-4 bg-pink-100 rounded-xl md:rounded-full group-hover:bg-pink-200 transition-colors duration-300">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-2 md:mb-4 group-hover:text-pink-600 transition-colors leading-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-base leading-relaxed hidden md:block">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;