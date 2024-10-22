import React from 'react';
import { motion } from 'framer-motion';

const SocialMediaFeed: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fancy-heading text-center mb-12 heading-underline"
        >
          Connect With Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Latest Facebook Posts</h3>
            <div 
              className="fb-page" 
              data-href="https://www.facebook.com/BEhealingacres/"
              data-tabs="timeline" 
              data-width="" 
              data-height="" 
              data-small-header="false" 
              data-adapt-container-width="true" 
              data-hide-cover="false" 
              data-show-facepile="true"
            >
              <blockquote cite="https://www.facebook.com/BEhealingacres/" className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/BEhealingacres/">Blissful Existence Healing Acres</a>
              </blockquote>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Featured YouTube Video</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/Lh_r5Nq5G4A" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Featured YouTube Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFeed;