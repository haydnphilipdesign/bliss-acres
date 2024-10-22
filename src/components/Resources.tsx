import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Video, Download } from 'lucide-react';

const resources = [
  {
    title: "Introduction to Equine Therapy",
    type: "article",
    link: "#",
    icon: FileText,
  },
  {
    title: "Guided Meditation with Horses",
    type: "video",
    link: "#",
    icon: Video,
  },
  {
    title: "Holistic Healing Workbook",
    type: "download",
    link: "#",
    icon: Download,
  },
];

const ResourceItem: React.FC<{ title: string; type: string; link: string; icon: React.ElementType }> = ({ title, type, link, icon: Icon }) => (
  <motion.a
    href={link}
    whileHover={{ scale: 1.05 }}
    className="flex items-center p-4 bg-white rounded-lg shadow-md"
  >
    <Icon className="w-8 h-8 text-primary mr-4" />
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 capitalize">{type}</p>
    </div>
  </motion.a>
);

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-serif font-bold text-center mb-12"
        >
          Resources
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceItem key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;