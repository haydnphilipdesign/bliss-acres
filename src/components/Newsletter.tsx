import React from 'react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl font-serif font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-white mb-6">Sign up for our newsletter to receive updates on events, special offers, and healing insights.</p>
          <div 
            data-form-slug="5841849163193945" 
            data-env="production" 
            data-path="contact-us/5841849163193945" 
            className="keap-custom-form"
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;