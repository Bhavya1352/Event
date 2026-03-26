import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { User, Flame } from 'lucide-react';

const CITIES = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Indore', 'Bhopal'];
const SERVICES = ['Anniversary Decor', 'Birthday Surprise', 'Love Proposal', 'Baby Shower Decor'];

export const LiveBookings = () => {
  const [booking, setBooking] = useState<{city: string, service: string} | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showRandomBooking = () => {
      const city = CITIES[Math.floor(Math.random() * CITIES.length)];
      const service = SERVICES[Math.floor(Math.random() * SERVICES.length)];
      setBooking({ city, service });
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    const interval = setInterval(() => {
      showRandomBooking();
    }, 15000);

    // Initial show
    setTimeout(showRandomBooking, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!booking) return null;

  return (
    <div className={`fixed bottom-24 left-6 z-40 transition-all duration-500 transform ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      <div className="bg-white/90 backdrop-blur-md border border-pink-100 shadow-2xl rounded-2xl p-4 flex items-center gap-4 max-w-xs ring-1 ring-pink-50">
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-pink-200">
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Live Booking</span>
            <Badge className="bg-red-50 text-red-600 border-red-100 text-[10px] animate-pulse h-4 py-0">NEW</Badge>
          </div>
          <p className="text-sm text-slate-800 leading-tight">
            Someone in <span className="font-bold text-pink-600">{booking.city}</span> just booked <span className="font-semibold">{booking.service}</span>
          </p>
          <div className="flex items-center gap-1 mt-1">
             <Flame className="w-3 h-3 text-orange-500 fill-orange-500" />
             <span className="text-[10px] text-slate-400 font-medium">Verified Booking</span>
          </div>
        </div>
      </div>
    </div>
  );
};
