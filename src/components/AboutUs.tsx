import { Heart, Star, Users, Award } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: <Heart className="w-5 h-5" />, value: "5000+", label: "Happy Customers" },
    { icon: <Star className="w-5 h-5" />, value: "4.9/5", label: "Rating" },
    { icon: <Users className="w-5 h-5" />, value: "50+", label: "Expert Team" },
    { icon: <Award className="w-5 h-5" />, value: "1200+", label: "Events Done" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-16 bg-white/30 rounded-full blur-xl hidden md:block" />
      <div className="absolute bottom-20 right-10 w-32 h-20 bg-pink-200/20 rounded-full blur-xl hidden md:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-6 md:mb-8">
            Welcome to <span className="text-pink-600">HappyHearts</span>
          </h2>
          
          {/* Stats for mobile */}
          <div className="grid grid-cols-4 gap-2 mb-8 md:hidden">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/80 rounded-xl p-3 text-center shadow-sm">
                <div className="text-pink-600 flex justify-center mb-1">{stat.icon}</div>
                <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                <div className="text-[10px] text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-[3rem] p-6 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-gray-800 leading-relaxed font-medium relative z-10">
              <p>
                At HappyHearts, we specialize in creating stunning decorations that transform simple spaces into themed environments, bringing the heart of each occasion to life. Whether you're celebrating a birthday, proposal, anniversary, or baby shower, our mission is to make your event unforgettable.
              </p>
              
              <p className="hidden md:block">
                We understand that each event is unique and deserves a personal touch that reflects your style. From intricate balloon arrangements to thoughtfully designed decor setups, HappyHearts brings your vision to life. Our team is experienced in transforming venues of all sizes.
              </p>
              
              <p>
                Creativity and quality are at the core of what we do. We use only the finest materials and decorations to ensure every setup looks stunning. Our dedicated decorators handle every detail with precision.
              </p>
              
              <p className="font-bold text-pink-600 text-base md:text-xl">
                Thank you for choosing HappyHearts. We're excited to create beautiful, lasting memories!
              </p>
            </div>
            
            {/* Stats for desktop */}
            <div className="hidden md:grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-pink-100">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-pink-600 flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;