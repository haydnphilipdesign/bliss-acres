import React from 'react';
import { motion } from 'framer-motion';
import HealingHerd from '../components/HealingHerd';

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

const HealingHerdPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HealingHerd />
    </motion.div>
  );
};

export default HealingHerdPage;