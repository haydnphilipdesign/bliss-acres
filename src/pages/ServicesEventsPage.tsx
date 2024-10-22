import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import Events from '../components/Events';
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

const ServicesEventsPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-image-section"
      style={{backgroundImage: 'url(//images.pixieset.com/48065708/53dced5e2a936978451e769613fb991d-xxlarge.jpg)'}}
    >
      <Services />
      <Events />
      <CTA />
    </motion.div>
  );
};

export default ServicesEventsPage;