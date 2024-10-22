import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Brain, Leaf, Calendar, Video } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md overflow-hidden"
  >
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-serif font-semibold mb-2 fancy-heading">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-image-section" style={{backgroundImage: 'url(//images.pixieset.com/48065708/53dced5e2a936978451e769613fb991d-xxlarge.jpg)'}}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fancy-heading text-center mb-12 heading-underline text-white"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Heart className="w-12 h-12" />}
            title="Equine Gestalt Coaching"
            description="Experience a profound two-hour session where you'll work closely with our horses to uncover and heal emotional wounds. Weekly group sessions available every Wednesday at 6:00 pm."
          />
          <ServiceCard
            icon={<Brain className="w-12 h-12" />}
            title="Meditation Circles"
            description="Join us every Saturday at 10:00 am for a meditative journey amidst nature's tranquility. Find peace and clarity in the presence of our gentle herd."
          />
          <ServiceCard
            icon={<Users className="w-12 h-12" />}
            title="VIP Personalized Sessions"
            description="Delve deep into personal growth with a full-day customized experience. Explore your relationships, aspirations, and steps toward achieving your goals."
          />
          <ServiceCard
            icon={<Leaf className="w-12 h-12" />}
            title="Forest Bathing"
            description="Immerse yourself in the healing power of nature with guided walks through our expansive 90-acre ranch. Foster emotional well-being and connect deeply with the natural world."
          />
          <ServiceCard
            icon={<Calendar className="w-12 h-12" />}
            title="Blissful Kids Camp"
            description="Mark your calendars for July 15-19! Children can enjoy a week of mindfulness activities, creative crafts, and enriching interactions with our horses from 9:00 am to 3:00 pm."
          />
          <ServiceCard
            icon={<Video className="w-12 h-12" />}
            title="Virtual Coaching"
            description="Connect from the comfort of your home with our Zoom and phone coaching packages. Flexible options to support your journey wherever you are."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;