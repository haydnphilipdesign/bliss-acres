import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fancy-heading text-center mb-12 heading-underline"
        >
          Welcome to Blissful Existence Healing Acres
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="//images.pixieset.com/48065708/74f124febf65118a5a07b411b36ec4ab-xxlarge.jpg"
              alt="Serene horse farm"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-gray-700 mb-4">
              At Blissful Existence Healing Acres, we believe in the transformative power of connection—connection with oneself, with others, and with the natural world. Nestled in the serene landscapes of East Stroudsburg, PA, our sanctuary offers a unique blend of Equine Gestalt Coaching, Meditation Circles, and Holistic Health Coaching designed to nurture love, joy, peace, and empowerment.
            </p>
            <h3 className="text-2xl font-serif font-bold mb-4 fancy-heading">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              We are dedicated to guiding you on a journey toward self-discovery and healing. Through the gentle wisdom of horses and the tranquility of nature, we provide a safe space for you to reconnect with your authentic self and embrace a life of positivity and fulfillment.
            </p>
          </div>
        </div>
        <div className="bg-background p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-4 md:mb-0 md:mr-8">
            <img
              src="https://images.pixieset.com/48065708/b2744ea6761a1e1a4d5b95fa98ed16dc-large.jpg"
              alt="Adrienne"
              className="rounded-full shadow-md w-48 h-48 object-cover mx-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-serif font-bold mb-4 fancy-heading">Meet Adrienne - Your Guide to Transformation</h3>
            <p className="text-gray-700 mb-4">
              Adrienne's personal journey through the challenges of infertility led her to profound healing and purpose. Embracing adoption and the therapeutic presence of horses, she transformed her life's path. Now a certified Holistic Health Coach and Equine Gestaltist, Adrienne combines her experiences to empower others. Her compassionate approach helps clients release emotional blockages and step into their true selves with confidence and joy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;