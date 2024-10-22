import React from 'react';
import { motion } from 'framer-motion';

const BookingSystem: React.FC = () => {
  return (
    <section id="booking">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-serif font-bold mb-6 fancy-heading"
      >
        Schedule Your Visit
      </motion.h3>
      <div className="booking-container glass-effect p-6 rounded-lg">
        <iframe
          src="https://letsmeet.io/blissfulexistencehealingacres/exploratory-call"
          style={{
            border: 'none',
            minHeight: '700px',
            width: '100%',
            minWidth: '100%',
          }}
          name="booking"
          scrolling="no"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          referrerPolicy="unsafe-url"
          allowFullScreen
          title="Booking System"
        />
      </div>
    </section>
  );
};

export default BookingSystem;