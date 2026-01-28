import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "Birthday",
    fullTitle: "Birthday Decoration",
    image: "/images/2.jpg",
    icon: "🎂"
  },
  {
    title: "Anniversary",
    fullTitle: "Anniversary Decoration",
    image: "/images/3.jpg",
    icon: "💕"
  },
  {
    title: "Proposal",
    fullTitle: "Love/Proposal Decoration",
    image: "/images/4.jpg",
    icon: "💍"
  },
  {
    title: "1st Birthday",
    fullTitle: "First Birthday Decoration",
    image: "/images/5.jpg",
    icon: "👶"
  },
  {
    title: "Kids Party",
    fullTitle: "Kids Birthday Decoration",
    image: "/images/6.jpg",
    icon: "🎈"
  },
];

const CategorySection = () => {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">Explore Our Categories</h2>
        
        {/* Mobile: Horizontal Scroll */}
        <div className="flex md:hidden gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
          {categories.map((category, index) => (
            <Link to={`/services/${encodeURIComponent(category.fullTitle)}`} key={index} className="flex-shrink-0">
              <Card className="w-28 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all border-0">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={category.image} alt={category.title} className="w-full h-24 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-2 left-2 w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center text-lg">
                      {category.icon}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-semibold text-gray-800 text-center leading-tight">{category.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link to={`/services/${encodeURIComponent(category.fullTitle)}`} key={index}>
              <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={category.image} alt={category.title} className="w-full h-32 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3 w-10 h-10 bg-white/90 rounded-xl flex items-center justify-center text-xl">
                      {category.icon}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-800 text-center">{category.fullTitle}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
