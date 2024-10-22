import React from 'react';
import { motion } from 'framer-motion';
import BookingSystem from '../components/BookingSystem';
import Contact from '../components/Contact';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const BookingPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="py-16 bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(//images.pixieset.com/48065708/c89fcd1e14932466a2bbd20daa41837f-xxlarge.jpg)'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 fancy-heading heading-underline text-white">Book Your Session</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
              <BookingSystem />
            </div>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg lg:mt-16">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingPage;