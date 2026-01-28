import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const cities = [
  'Delhi NCR',
  'Chandigarh',
  'Lucknow',
  'Kanpur',
  'Hyderabad',
  'Bangalore',
  'Kolkata',
  'Pune',
  'Jaipur',
  'Chennai',
  'Other'
];

const CitySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    localStorage.clear();
    setIsOpen(true);
  }, []);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    localStorage.setItem('selectedCity', city);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm flex items-start justify-center z-[99999] p-4 pt-20">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border-4 border-gradient-to-r from-pink-400 to-purple-400 animate-bounce-in">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Select Your City</h2>
        </div>
        
        <p className="text-red-600 mb-6 font-semibold text-center">Please select your city to continue</p>
        
        <div className="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto">
          {cities.map((city) => (
            <Button
              key={city}
              onClick={() => handleCitySelect(city)}
              variant="outline"
              className="text-left justify-center py-3 px-4 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white border-2 border-pink-300 hover:border-purple-400 hover:shadow-xl hover:scale-105 active:scale-95 active:bg-gradient-to-r active:from-green-500 active:to-blue-500 transition-all duration-300 font-semibold hover:animate-pulse"
            >
              {city}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitySelector;