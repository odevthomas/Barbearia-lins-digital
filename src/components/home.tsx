import React from "react";
import Navbar from "./navigation/Navbar";
import HeroSection from "./sections/HeroSection";
import BookingSystem from "./booking/BookingSystem";
import ProductShowcase from "./products/ProductShowcase";
import StylesGallery from "./gallery/StylesGallery";
import AboutSection from "./sections/AboutSection";
import WhatsAppButton from "./common/WhatsAppButton";
import Map from "./common/Map";
import PromoModal from "./common/PromoModal";

const Home = () => {
  const [showPromo, setShowPromo] = React.useState(true);

  const handleBookNow = () => {
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar onBookNow={handleBookNow} />

      {/* Hero Section */}
      <HeroSection />

      {/* Booking System */}
      <section id="booking" className="py-16 px-4">
        <div className="container mx-auto">
          <BookingSystem />
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products">
        <ProductShowcase />
      </section>

      {/* Styles Gallery */}
      <section id="gallery">
        <StylesGallery />
      </section>

      {/* About Section with Map */}
      <section id="about">
        <AboutSection />
        <div className="container mx-auto px-4 py-12">
          <Map />
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="+5511999999999" />

      {/* Promo Modal */}
      <PromoModal isOpen={showPromo} onClose={() => setShowPromo(false)} />
    </div>
  );
};

export default Home;
