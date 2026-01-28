import Header from '../components/Header';

const About = () => {
  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">About HappyHearts</h1>
          
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-2xl font-bold text-pink-600 text-center mb-8">
                Welcome to HappyHearts
              </p>
              
              <p>
                – where every celebration turns into a beautiful memory filled with joy, color, and elegance. At HappyHearts, we specialize in creating stunning decorations that transform simple spaces into themed environments, bringing the heart of each occasion to life.
              </p>
              
              <p>
                Whether you're celebrating a birthday, proposal, anniversary, or baby shower, our mission is to make your event unforgettable with carefully curated decorations and an eye for detail.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-pink-50 p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">Our Mission</h3>
                  <p>To bring a touch of magic to each celebration and create beautiful, lasting memories with our decor services.</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold text-purple-600 mb-4">Our Vision</h3>
                  <p>To be the leading event decoration service that transforms every celebration into an unforgettable experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;