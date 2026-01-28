import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Birthday Decoration",
    description: "Celebrate birthdays with vibrant, personalized decorations that bring joy and excitement to every detail. From balloon arches to themed setups, we create unforgettable experiences that make your special day truly shine!",
    image: "/images/22.jpg",
    hoverColor: "group-hover:bg-yellow-500/20",
    price: "₹2,999",
    icon: "🎂"
  },
  {
    title: "Anniversary Decoration", 
    description: "Celebrate love with our elegant anniversary decorations. From romantic setups to timeless details, we create a beautiful ambiance that captures the essence of your special day. Make memories to cherish forever.",
    image: "/images/23.jpg",
    hoverColor: "group-hover:bg-red-500/20",
    price: "₹3,999",
    icon: "💕"
  },
  {
    title: "Love/Proposal Decoration",
    description: "Set the perfect scene for your love proposal with romantic decor crafted to amaze. From elegant setups to personalized touches, we create an unforgettable ambiance for your special moment.",
    image: "/images/24.jpg",
    hoverColor: "group-hover:bg-pink-500/20",
    price: "₹4,999",
    icon: "💍"
  },
  {
    title: "First Birthday Decoration",
    description: "Celebrate your little one's first milestone with enchanting decor that captures the joy of the day. From playful themes to elegant setups, we create a magical atmosphere for unforgettable memories.",
    image: "/images/25.jpg",
    hoverColor: "group-hover:bg-blue-500/20",
    price: "₹3,499",
    icon: "👶"
  },
  {
    title: "Kids Birthday Decoration",
    description: "Make your child's birthday unforgettable with vibrant, playful decorations crafted to spark joy and wonder. From colorful balloon displays to themed setups, we create magical memories for every little guest.",
    image: "/images/26.jpg",
    hoverColor: "group-hover:bg-green-500/20",
    price: "₹2,499",
    icon: "🎈"
  },
  {
    title: "Baby Shower Decoration",
    description: "Celebrate the joy of new beginnings with our beautiful baby shower decorations. From delicate balloon arrangements to charming details, we create a warm, memorable ambiance for you and your loved ones.",
    image: "/images/27.jpg",
    hoverColor: "group-hover:bg-purple-500/20",
    price: "₹3,999",
    icon: "🍼"
  },
  {
    title: "Balloon Bouquet",
    description: "Add a touch of joy to any celebration with our vibrant balloon bouquets. Perfectly arranged for birthdays, anniversaries, or any special occasion, they bring color, fun, and elegance to your event.",
    image: "/images/28.jpg",
    hoverColor: "group-hover:bg-orange-500/20",
    price: "₹999",
    icon: "🎈"
  },
  {
    title: "Sequin Panel Decoration",
    description: "Our Sequin Panel Decoration adds a touch of glamour to any event, creating a sparkling backdrop that catches the light beautifully. Perfect for photos, it elevates your celebration with elegance.",
    image: "/images/29.jpg",
    hoverColor: "group-hover:bg-indigo-500/20",
    price: "₹4,499",
    icon: "✨"
  },
  {
    title: "Ring Decoration",
    description: "Create a breathtaking atmosphere with our exquisite ring decorations. Perfect for any occasion, our designs add elegance and charm, making your event truly memorable. Elevate your celebration with stunning ring decor!",
    image: "/images/30.jpg",
    hoverColor: "group-hover:bg-teal-500/20",
    price: "₹2,999",
    icon: "💫"
  },
  {
    title: "Themed Decoration",
    description: "Bring your vision to life with our themed decorations, tailored to create the perfect atmosphere for any occasion. From whimsical to elegant, we ensure every detail enhances your celebration's uniqueness.",
    image: "/images/21.jpg",
    hoverColor: "group-hover:bg-rose-500/20",
    price: "₹5,999",
    icon: "🎭"
  }
];

const ServicesGrid = () => {
  return (
    <section id="services-section" className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span className="text-pink-600 font-semibold text-xs md:text-sm">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-3 md:mb-4">
            Our <span className="text-pink-600">Services</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Discover our comprehensive range of decoration services
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden rounded-xl md:rounded-2xl border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-32 md:h-56 object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute inset-0 ${service.hoverColor} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                {/* Price badge */}
                <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-white/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg">
                  <span className="text-pink-600 font-bold text-[10px] md:text-sm">{service.price}</span>
                </div>
                
                {/* Icon badge */}
                <div className="absolute top-2 md:top-4 left-2 md:left-4 w-7 h-7 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl flex items-center justify-center text-sm md:text-xl shadow-lg">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-3 md:p-6">
                <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-3 group-hover:text-pink-600 transition-colors line-clamp-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-2 md:mb-4 line-clamp-2 md:line-clamp-3 text-xs md:text-sm leading-relaxed hidden md:block">
                  {service.description}
                </p>
                <Link to={`/service/${encodeURIComponent(service.title)}`}>
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-lg md:rounded-xl py-2 md:py-5 text-xs md:text-sm group/btn">
                    <span className="flex items-center justify-center gap-1 md:gap-2">
                      Explore
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View all button */}
        <div className="text-center mt-8 md:mt-12">
          <Link to="/services">
            <Button variant="outline" className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-4 md:px-8 md:py-6 rounded-full font-bold text-sm md:text-lg">
              View All Services
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;