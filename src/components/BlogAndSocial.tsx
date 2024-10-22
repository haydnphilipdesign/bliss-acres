import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogAndSocial: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="fancy-heading mb-6"
            >
              Latest Blog Post
            </motion.h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-2">The Power of Equine Therapy in Mental Health</h3>
              <p className="text-gray-600 mb-4">Discover how interactions with horses can lead to profound emotional healing and personal growth...</p>
              <Link to="/blog" className="text-primary font-semibold flex items-center">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="fancy-heading mb-6"
            >
              Connect With Us
            </motion.h2>
            <div className="fb-page" 
              data-href="https://www.facebook.com/BEhealingacres/"
              data-tabs="timeline" 
              data-width="" 
              data-height="" 
              data-small-header="false" 
              data-adapt-container-width="true" 
              data-hide-cover="false" 
              data-show-facepile="true">
              <blockquote cite="https://www.facebook.com/BEhealingacres/" className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/BEhealingacres/">Blissful Existence Healing Acres</a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAndSocial;