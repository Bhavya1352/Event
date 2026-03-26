import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Calculator, Zap, Calendar, Download, Share2, Sparkles } from 'lucide-react';

const SERVICES = [
  { id: 'balloons', name: 'Balloon Arch/Wall', price: 2500, icon: '🎈' },
  { id: 'lighting', name: 'Neon/Mood Lighting', price: 1500, icon: '💡' },
  { id: 'cake', name: 'Designer Cake', price: 3000, icon: '🎂' },
  { id: 'flowers', name: 'Fresh Flower Decor', price: 4500, icon: '🌸' },
  { id: 'photos', name: 'Personalized Photos', price: 800, icon: '📸' },
  { id: 'entry', name: 'Grand Entry Setup', price: 5000, icon: '🚪' },
];

export const BudgetEstimator = () => {
  const [guestCount, setGuestCount] = useState(20);
  const [selectedServices, setSelectedServices] = useState<string[]>(['balloons', 'lighting']);
  const [isPremium, setIsPremium] = useState(false);

  const totalPrice = useMemo(() => {
    let base = selectedServices.reduce((sum, id) => {
      const service = SERVICES.find(s => s.id === id);
      return sum + (service?.price || 0);
    }, 0);

    // Scaling with guests (simplified)
    const guestMultiplier = Math.max(1, guestCount / 20);
    base = base * guestMultiplier;

    if (isPremium) base = base * 1.5;

    return Math.round(base);
  }, [guestCount, selectedServices, isPremium]);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  return (
    <section id="budget-estimator" className="py-20 bg-gradient-to-b from-white to-pink-50/50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge className="bg-pink-100 text-pink-600 border-pink-200 mb-4 px-4 py-1 text-sm rounded-full">
            REAL-WORLD UTILITY
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <Calculator className="w-8 h-8 text-pink-600" />
            Smart Budget Estimator
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Plan your event budget in seconds. Select your favorites and see an instant quote tailored for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Controls */}
          <Card className="lg:col-span-3 border-pink-100 shadow-xl shadow-pink-100/30 overflow-hidden">
            <CardHeader className="bg-pink-50/50 border-b border-pink-100">
              <CardTitle className="text-xl">Customize Your Setup</CardTitle>
              <CardDescription>Tailor the experience to your needs</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-8">
              {/* Guest Count */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-semibold">Guest Count</Label>
                  <span className="text-pink-600 font-bold bg-pink-100 px-3 py-1 rounded-full text-sm">
                    {guestCount} Guests
                  </span>
                </div>
                <Slider
                  value={[guestCount]}
                  onValueChange={(val) => setGuestCount(val[0])}
                  max={200}
                  step={5}
                  className="py-4"
                />
              </div>

              {/* Services Grid */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Decor & Add-ons</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES.map((service) => (
                    <div 
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
                        selectedServices.includes(service.id) 
                          ? "border-pink-600 bg-pink-50/50" 
                          : "border-slate-100 bg-white hover:border-pink-200"
                      }`}
                    >
                      <div className="text-2xl h-10 w-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{service.name}</p>
                        <p className="text-xs text-slate-500">Starts at ₹{service.price}</p>
                      </div>
                      <Checkbox 
                        checked={selectedServices.includes(service.id)} 
                        className="h-5 w-5 rounded-full border-pink-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Toggle */}
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-2xl border border-purple-100 group transition-all hover:bg-purple-100/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 flex items-center justify-center bg-purple-600 rounded-lg text-white shadow-lg">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900 leading-tight">Elite Package</h4>
                    <p className="text-xs text-purple-700">Hand-picked luxury materials + Premium lighting</p>
                  </div>
                </div>
                <Switch 
                  checked={isPremium} 
                  onCheckedChange={setIsPremium}
                  className="data-[state=checked]:bg-purple-600"
                />
              </div>
            </CardContent>
          </Card>

          {/* Live Quote Card */}
          <Card className="lg:col-span-2 sticky top-24 border-none shadow-2xl bg-slate-900 text-white overflow-hidden transform hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Calculator className="w-24 h-24" />
            </div>
            
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                Estimated Quote
                {isPremium && <Badge className="bg-purple-500 text-white border-none py-0">PRIME</Badge>}
              </CardTitle>
              <CardDescription className="text-slate-400 italic">Valid based on current selections</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="text-center py-8">
                <span className="text-slate-400 text-sm block mb-1">Starting from</span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-3xl font-light text-pink-400">₹</span>
                  <span className="text-6xl font-black tracking-tighter animate-in zoom-in-50 duration-500">
                    {totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest">+ Taxes & Transport</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm py-2 border-b border-slate-800">
                  <span className="text-slate-400">Basic Service Fee</span>
                  <span className="font-mono">₹499</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-slate-800">
                  <span className="text-slate-400">Add-ons ({selectedServices.length})</span>
                  <span className="font-mono text-pink-400">+ Applied</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-slate-700">
                  <span className="text-slate-400 font-bold">Estimated Total</span>
                  <span className="font-bold text-lg">₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4">
                <Button variant="outline" className="bg-transparent border-slate-700 hover:bg-slate-800 text-white gap-2">
                  <Download className="w-4 h-4" /> Save
                </Button>
                <Button variant="outline" className="bg-transparent border-slate-700 hover:bg-slate-800 text-white gap-2">
                  <Share2 className="w-4 h-4" /> Share
                </Button>
              </div>
            </CardContent>

            <CardFooter className="bg-pink-600 p-0 overflow-hidden">
              <Button 
                className="w-full h-14 bg-transparent hover:bg-pink-700 text-white font-bold rounded-none gap-3 text-lg"
                onClick={() => {
                  const el = document.getElementById('contact-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book with this Quote <Zap className="w-5 h-5 fill-white" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400 text-sm uppercase tracking-widest font-semibold opacity-50">
          <div className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-600 rounded-full"/> Instant Calculation</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-600 rounded-full"/> Verified pricing</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-600 rounded-full"/> AI-Driven Suggestions</div>
        </div>
      </div>
    </section>
  );
};
