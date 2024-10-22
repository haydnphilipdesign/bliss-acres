import React from 'react';
import { motion } from 'framer-motion';

interface Horse {
  name: string;
  title: string;
  description: string;
  image: string;
}

const horses: Horse[] = [
  {
    name: "Joey",
    title: "The Educator",
    description: "A symbol of knowledge and healing, Joey guides you in connecting mind and body for holistic wellness.",
    image: "https://blissfulexistencehealingacres.com/wp-content/uploads/2020/11/IMG_3817.png"
  },
  {
    name: "Bella",
    title: "The Nurturer",
    description: "Bella's gentle nature provides comfort and support, helping clients feel safe to explore their emotions.",
    image: "https://blissfulexistencehealingacres.com/wp-content/uploads/2020/11/IMG_3818.png"
  },
  {
    name: "Spirit",
    title: "The Energizer",
    description: "With boundless enthusiasm, Spirit encourages clients to embrace life with passion and joy.",
    image: "https://blissfulexistencehealingacres.com/wp-content/uploads/2020/11/IMG_3819.png"
  },
  {
    name: "Shadow",
    title: "The Intuitive",
    description: "Shadow's keen sensitivity helps clients uncover hidden truths and face their inner shadows.",
    image: "https://blissfulexistencehealingacres.com/wp-content/uploads/2020/11/IMG_3820.png"
  },
  {
    name: "Luna",
    title: "The Dreamer",
    description: "Luna inspires creativity and helps clients connect with their deepest aspirations and visions.",
    image: "https://blissfulexistencehealingacres.com/wp-content/uploads/2020/11/IMG_3821.png"
  }
];

const HorseCard: React.FC<Horse> = ({ name, title, description, image }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-serif font-semibold mb-2 fancy-heading">{name}</h3>
      <h4 className="text-xl text-primary mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const HealingHerd: React.FC = () => {
  return (
    <section id="healing-herd" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fancy-heading text-center mb-12 heading-underline"
        >
          The Healing Herd
        </motion.h2>
        <p className="text-center text-gray-700 mb-8">
          Our herd of extraordinary horses serves as co-facilitators in the healing process. Each horse brings a unique energy and wisdom to our programs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {horses.map((horse, index) => (
            <HorseCard key={index} {...horse} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealingHerd;