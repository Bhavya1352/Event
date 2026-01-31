import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  { title: "Birthday Decoration", description: "Celebrate birthdays with vibrant, personalized decorations", image: "/images/22.jpg", keywords: ["birthday", "party", "celebration", "balloons"] },
  { title: "Anniversary Decoration", description: "Celebrate love with elegant anniversary decorations", image: "/images/23.jpg", keywords: ["anniversary", "romantic", "love", "couple"] },
  { title: "Love/Proposal Decoration", description: "Perfect scene for your love proposal with romantic decor", image: "/images/24.jpg", keywords: ["proposal", "love", "romantic", "engagement"] },
  { title: "First Birthday Decoration", description: "Celebrate your little one's first milestone", image: "/images/25.jpg", keywords: ["first birthday", "baby", "milestone", "kids"] },
  { title: "Kids Birthday Decoration", description: "Make your child's birthday unforgettable", image: "/images/26.jpg", keywords: ["kids", "children", "birthday", "fun"] },
  { title: "Baby Shower Decoration", description: "Celebrate new beginnings with beautiful decorations", image: "/images/27.jpg", keywords: ["baby shower", "baby", "newborn", "celebration"] },
  { title: "Balloon Bouquet", description: "Vibrant balloon bouquets for any celebration", image: "/images/28.jpg", keywords: ["balloons", "bouquet", "colorful", "party"] },
  { title: "Sequin Panel Decoration", description: "Glamorous sequin panels for elegant backdrops", image: "/images/29.jpg", keywords: ["sequin", "glamour", "backdrop", "elegant"] },
  { title: "Ring Decoration", description: "Breathtaking ring decorations for special occasions", image: "/images/30.jpg", keywords: ["ring", "decoration", "elegant", "special"] },
  { title: "Themed Decoration", description: "Custom themed decorations for any occasion", image: "/images/21.jpg", keywords: ["themed", "custom", "personalized", "unique"] }
];

interface SearchResultsProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
}

const SearchResults = ({ isOpen, onClose, searchQuery }: SearchResultsProps) => {
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    // Always show all services when search is empty
    if (searchQuery.trim() === '') {
      setFilteredServices(services);
    } else {
      const filtered = services.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredServices(filtered);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border z-50 max-h-96 overflow-y-auto">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">
            {searchQuery ? `Results for "${searchQuery}"` : 'All Services'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {filteredServices.length === 0 && searchQuery.trim() !== '' ? (
          <p className="text-gray-500 text-center py-4">No services found for "{searchQuery}"</p>
        ) : (
          <div className="space-y-3">
            {filteredServices.map((service, index) => (
              <Link key={index} to={`/service/${encodeURIComponent(service.title)}`} onClick={onClose}>
                <div className="flex items-center space-x-3 p-2 hover:bg-pink-50 rounded-lg cursor-pointer">
                  <img src={service.image} alt={service.title} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <h4 className="font-medium text-gray-800">{service.title}</h4>
                    <p className="text-sm text-gray-600 truncate">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;