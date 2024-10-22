import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(currentScrollY > 50);
          setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 50);
          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(true), 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const textColor = isScrolled ? 'text-gray-800' : 'text-white';
  const bgColor = isScrolled ? 'bg-white bg-opacity-90' : 'bg-black bg-opacity-50';

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-500 ${bgColor}`}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Blissful Existence Healing Acres" className="h-16 w-auto mr-2" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/about" className={`hover:text-primary transition-colors ${textColor}`}>About Us</Link></li>
            <li><Link to="/services-events" className={`hover:text-primary transition-colors ${textColor}`}>Services & Events</Link></li>
            <li><Link to="/blog" className={`hover:text-primary transition-colors ${textColor}`}>Blog & Gallery</Link></li>
            <li><Link to="/booking" className={`hover:text-primary transition-colors ${textColor}`}>Book Now</Link></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${textColor}`} />
          ) : (
            <Menu className={`w-6 h-6 ${textColor}`} />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white"
          >
            <ul className="flex flex-col items-center py-4">
              <li><Link to="/about" className="block py-2 text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services-events" className="block py-2 text-gray-600 hover:text-primary transition-colors">Services & Events</Link></li>
              <li><Link to="/blog" className="block py-2 text-gray-600 hover:text-primary transition-colors">Blog & Gallery</Link></li>
              <li><Link to="/booking" className="block py-2 text-gray-600 hover:text-primary transition-colors">Book Now</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;