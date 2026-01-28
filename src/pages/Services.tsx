import Header from '../components/Header';
import ServicesGrid from '../components/ServicesGrid';

const Services = () => {
  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <ServicesGrid />
        </div>
      </div>
    </>
  );
};

export default Services;