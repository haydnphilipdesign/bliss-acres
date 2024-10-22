import React from 'react';
import { motion } from 'framer-motion';
import Blog from '../components/Blog';
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

const BlogPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-image-section"
      style={{backgroundImage: 'url(//images.pixieset.com/48065708/220f22a3e81af0381c033b90a7e869d0-xxlarge.jpg)'}}
    >
      <Blog />
      <CTA />
    </motion.div>
  );
};

export default BlogPage;