import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white rounded-lg shadow-md p-6">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-serif font-bold mb-6 fancy-heading"
      >
        Get in Touch
      </motion.h3>
      <div 
        data-form-slug="7621965847876414" 
        data-env="production" 
        data-path="contact-us/7621965847876414" 
        className="keap-custom-form"
      ></div>
    </section>
  );
};

export default Contact;