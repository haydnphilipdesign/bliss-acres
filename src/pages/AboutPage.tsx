import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import HealingHerd from '../components/HealingHerd';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

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

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-image-section"
      style={{backgroundImage: 'url(//images.pixieset.com/48065708/74f124febf65118a5a07b411b36ec4ab-xxlarge.jpg)'}}
    >
      <About />
      <HealingHerd />
      <FAQ />
      <CTA />
    </motion.div>
  );
};

export default AboutPage;