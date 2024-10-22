import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/logo.png" alt="Blissful Existence Healing Acres" className="h-24 w-auto" />
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/BEhealingacres/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/blissfulexistencehealingacres/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@blissfulexistencehealingac8193" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Blissful Existence Healing Acres. All rights reserved.</p>
          <p className="mt-2">109 Wicks Lane, East Stroudsburg, PA | <a href="tel:5704207599" className="hover:text-accent">570-420-7599</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;