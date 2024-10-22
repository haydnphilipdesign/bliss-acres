import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  '//images.pixieset.com/48065708/74f124febf65118a5a07b411b36ec4ab-xxlarge.jpg',
  '//images.pixieset.com/48065708/53dced5e2a936978451e769613fb991d-xxlarge.jpg',
  '//images.pixieset.com/48065708/220f22a3e81af0381c033b90a7e869d0-xxlarge.jpg',
  '//images.pixieset.com/48065708/03415f50decd4b4c4c3da1d2f219dcfe-xxlarge.jpg',
  '//images.pixieset.com/48065708/c89fcd1e14932466a2bbd20daa41837f-xxlarge.jpg',
];

const Gallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fancy-heading text-center mb-12"
        >
          Our Gallery
        </motion.h2>
        <div className="relative max-w-4xl mx-auto h-[400px]">
          <img
            src={images[currentImage]}
            alt={`Gallery image ${currentImage + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full button-shadow"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full button-shadow"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="inline-block bg-primary text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors button-shadow">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;