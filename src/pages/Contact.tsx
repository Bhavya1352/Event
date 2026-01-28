import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to make your celebration unforgettable? Contact HappyHearts today!
              </p>
              
              <div className="space-y-6">
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center space-x-4 p-0">
                    <Phone className="w-6 h-6 text-pink-600" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center space-x-4 p-0">
                    <Mail className="w-6 h-6 text-pink-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">hello@happyhearts.com</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center space-x-4 p-0">
                    <MapPin className="w-6 h-6 text-pink-600" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">123 Celebration Street, Mumbai, India</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center space-x-4 p-0">
                    <Clock className="w-6 h-6 text-pink-600" />
                    <div>
                      <h3 className="font-semibold">Working Hours</h3>
                      <p className="text-gray-600">Mon - Sun: 9:00 AM - 9:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Message</h2>
              <form className="space-y-6">
                <Input placeholder="Your Name" className="border-2 border-pink-200 focus:border-pink-500" />
                <Input placeholder="Your Email" type="email" className="border-2 border-pink-200 focus:border-pink-500" />
                <Input placeholder="Your Phone" className="border-2 border-pink-200 focus:border-pink-500" />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full p-3 border-2 border-pink-200 focus:border-pink-500 rounded-lg focus:outline-none"
                />
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg font-semibold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;