import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import About from '../components/About';
import FAQ from '../components/faq';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Products from '../components/Products';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      
      <Jumbotron />

      <About />

      <Products />

      {/* <FAQ /> */}

      <Testimonials />

      <ContactUs />
      
      <Footer />
      
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-3 text-white opacity-70 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:opacity-100 hover:cursor-pointer hover:scale-110 rounded-full bottom-8 right-8"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default HomePage;
