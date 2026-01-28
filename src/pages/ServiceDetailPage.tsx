import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const serviceDetailsData = {
  "Birthday Decoration": {
    description: "Celebrate birthdays with vibrant, personalized decorations that bring joy and excitement to every detail. From balloon arches to themed setups, we create unforgettable experiences that make your special day truly shine!",
    image: "/images/22.jpg",
    packages: [
      { name: "Basic Balloon Decor", price: 1500, features: ["50 balloons", "Happy Birthday banner"] },
      { name: "Premium Theme Decor", price: 5000, features: ["Themed backdrop", "Balloon arch", "Table centerpieces"] },
    ],
    faqs: [
      { question: "How far in advance should I book?", answer: "We recommend booking at least 2-3 weeks in advance." },
      { question: "Can I customize a package?", answer: "Yes, all packages are customizable to your needs." },
    ],
  },
  "Anniversary Decoration": {
    description: "Celebrate love with our elegant anniversary decorations. From romantic setups to timeless details, we create a beautiful ambiance that captures the essence of your special day. Make memories to cherish forever.",
    image: "/images/23.jpg",
    packages: [
      { name: "Romantic Room Setup", price: 2000, features: ["Rose petals", "Candlelit dinner setup"] },
      { name: "Grand Anniversary Decor", price: 7000, features: ["Photo booth", "Customized banners", "Floral arrangements"] },
    ],
    faqs: [
      { question: "Do you offer outdoor setups?", answer: "Yes, we can arrange decorations for outdoor venues." },
      { question: "What is your cancellation policy?", answer: "Cancellations made 72 hours prior receive a full refund." },
    ],
  },
  "Love/Proposal Decoration": {
    description: "Set the perfect scene for your love proposal with romantic decor crafted to amaze. From elegant setups to personalized touches, we create an unforgettable ambiance for your special moment.",
    image: "/images/24.jpg",
    packages: [
      { name: "Intimate Proposal Decor", price: 3500, features: ["Marry Me sign", "Rose petals", "Fairy lights"] },
      { name: "Grand Proposal Setup", price: 8000, features: ["Personalized backdrop", "Live music", "Photographer"] },
    ],
    faqs: [
      { question: "Can you arrange a surprise setup?", answer: "Yes, we specialize in surprise arrangements." },
      { question: "Do you offer photography services?", answer: "We can recommend professional photographers." },
    ],
  },
  "First Birthday Decoration": {
    description: "Celebrate your little one’s first milestone with enchanting decor that captures the joy of the day. From playful themes to elegant setups, we create a magical atmosphere for unforgettable memories.",
    image: "/images/25.jpg",
    packages: [
      { name: "Simple First Birthday", price: 2500, features: ["Themed balloons", "High chair decor"] },
      { name: "Deluxe First Birthday", price: 6000, features: ["Custom backdrop", "Cake table decor", "Character cutouts"] },
    ],
    faqs: [
      { question: "Can you match specific colors?", answer: "Absolutely, we can customize colors to your preference." },
      { question: "Do you provide return gifts?", answer: "Yes, we have a selection of return gifts available." },
    ],
  },
  "Kids Birthday Decoration": {
    description: "Make your child’s birthday unforgettable with vibrant, playful decorations crafted to spark joy and wonder. From colorful balloon displays to themed setups, we create magical memories for every little guest.",
    image: "/images/26.jpg",
    packages: [
      { name: "Fun Kids Decor", price: 2000, features: ["Character balloons", "Colorful streamers"] },
      { name: "Adventure Theme Decor", price: 5500, features: ["Interactive props", "Themed photo booth", "Candy bar"] },
    ],
    faqs: [
      { question: "What themes are popular for kids?", answer: "Superheroes, princesses, and jungle themes are always a hit!" },
      { question: "Do you handle party favors?", answer: "Yes, we can include party favors in your package." },
    ],
  },
  "Baby Shower Decoration": {
    description: "Celebrate the joy of new beginnings with our beautiful baby shower decorations. From delicate balloon arrangements to charming details, we create a warm, memorable ambiance for you and your loved ones.",
    image: "/images/27.jpg",
    packages: [
      { name: "Elegant Baby Shower", price: 3000, features: ["Pastel balloons", "Floral accents"] },
      { name: "Grand Baby Shower", price: 6500, features: ["Custom backdrop", "Dessert table", "Gender reveal props"] },
    ],
    faqs: [
      { question: "Can you incorporate specific baby names?", answer: "Yes, we can personalize banners and props." },
      { question: "Do you offer games for baby showers?", answer: "We can suggest and provide materials for popular games." },
    ],
  },
  "Balloon Bouquet": {
    description: "Add a touch of joy to any celebration with our vibrant balloon bouquets. Perfectly arranged for birthdays, anniversaries, or any special occasion, they bring color, fun, and elegance to your event.",
    image: "/images/28.jpg",
    packages: [
      { name: "Small Bouquet", price: 500, features: ["5 balloons", "Ribbon"] },
      { name: "Large Bouquet", price: 1500, features: ["15 balloons", "Custom message balloon"] },
    ],
    faqs: [
      { question: "How long do balloons last?", answer: "Helium balloons typically last 1-3 days." },
      { question: "Can I pick up the bouquet?", answer: "Yes, pickup options are available." },
    ],
  },
  "Sequin Panel Decoration": {
    description: "Our Sequin Panel Decoration adds a touch of glamour to any event, creating a sparkling backdrop that catches the light beautifully. Perfect for photos, it elevates your celebration with elegance.",
    image: "/images/29.jpg",
    packages: [
      { name: "Small Sequin Wall", price: 4000, features: ["8x8 ft sequin wall"] },
      { name: "Large Sequin Wall", price: 7000, features: ["10x10 ft sequin wall", "Lighting"] },
    ],
    faqs: [
      { question: "What colors are available?", answer: "Gold, silver, rose gold, and iridescent." },
      { question: "Is installation included?", answer: "Yes, our team handles full installation and dismantling." },
    ],
  },
  "Ring Decoration": {
    description: "Create a breathtaking atmosphere with our exquisite ring decorations. Perfect for any occasion, our designs add elegance and charm, making your event truly memorable. Elevate your celebration with stunning ring decor!",
    image: "/images/30.jpg",
    packages: [
      { name: "Basic Ring Decor", price: 3000, features: ["Floral accents", "Fairy lights"] },
      { name: "Premium Ring Decor", price: 6000, features: ["Full floral arch", "Chandelier", "Custom lighting"] },
    ],
    faqs: [
      { question: "What sizes are available?", answer: "We offer various sizes to fit your venue." },
      { question: "Can it be used outdoors?", answer: "Yes, weather-permitting, it can be set up outdoors." },
    ],
  },
  "Themed Decoration": {
    description: "Bring your vision to life with our themed decorations, tailored to create the perfect atmosphere for any occasion. From whimsical to elegant, we ensure every detail enhances your celebration's uniqueness.",
    image: "/images/21.jpg", // Reusing 21.jpg for themed decoration detail
    packages: [
      { name: "Simple Theme Setup", price: 4000, features: ["Basic themed props", "Balloons"] },
      { name: "Elaborate Theme Experience", price: 9000, features: ["Custom backdrops", "Immersive props", "Sound and lighting"] },
    ],
    faqs: [
      { question: "How do I choose a theme?", answer: "We can help you brainstorm ideas based on your event and preferences." },
      { question: "Can you create a custom theme?", answer: "Yes, we love bringing unique ideas to life!" },
    ],
  },
};

const ServiceDetailPage = () => {
  const { serviceTitle } = useParams();
  const decodedTitle = serviceTitle ? decodeURIComponent(serviceTitle) : '';
  const service = serviceDetailsData[decodedTitle as keyof typeof serviceDetailsData];

  if (!service) {
    return (
      <>
        <Header />
        <div className="pt-20 container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-600">The service you are looking for does not exist.</p>
        </div>
      </>
    );
  }

  return (
    <>
            <Header />
      <div className="pt-20">
        <div 
          className="relative h-96 bg-cover bg-center flex items-center justify-center text-white border border-gray-200 shadow-lg"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <h1 className="relative z-10 text-5xl font-bold text-center">{service.title}</h1>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About This Service</h2>
              <p className="text-lg text-gray-700 mb-8">{service.description}</p>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">Packages</h2>
              <div className="space-y-6 mb-8">
                {service.packages.map((pkg, index) => (
                  <Card key={index} className="p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-primary mb-2">{pkg.name} - ₹{pkg.price}</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-1">
              <Card className="p-6 shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Your Experience</h2>
                <p className="text-gray-600 mb-4">Select your preferred package and book your unforgettable event today!</p>
                <Button className="w-full bg-primary hover:bg-pink-700 text-white text-lg py-3 rounded-lg">
                  Book Now
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;