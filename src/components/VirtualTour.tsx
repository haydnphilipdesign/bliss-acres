import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tourImages = [
  '//images.pixieset.com/48065708/74f124febf65118a5a07b411b36ec4ab-xxlarge.jpg',
  '//images.pixieset.com/48065708/53dced5e2a936978451e769613fb991d-xxlarge.jpg',
  '//images.pixieset.com/48065708/220f22a3e81af0381c033b90a7e869d0-xxlarge.jpg',
  '//images.pixieset.com/48065708/03415f50decd4b4c4c3da1d2f219dcfe-xxlarge.jpg',
  '//images.pixieset.com/48065708/c89fcd1e14932466a2bbd20daa41837f-xxlarge.jpg',
];

const VirtualTour: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % tourImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + tourImages.length) % tourImages.length);
  };

  return (
    <section id="virtual-tour" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-serif font-bold text-center mb-12"
        >
          Virtual Tour
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <img
            src={tourImages[currentImage]}
            alt={`Virtual tour image ${currentImage + 1}`}
            className="w-full h-[600px] object-cover rounded-lg"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;