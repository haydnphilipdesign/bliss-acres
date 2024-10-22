import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Embracing Nature: A Path to Healing",
    excerpt: "Discover how connecting with nature can enhance your mental and emotional well-being.",
    content: "In today's fast-paced world, it's easy to forget the healing power of nature. We often find ourselves confined to our homes, staring at screens, and neglecting the beauty and tranquility that the outdoors can provide. At Blissful Existence Healing Acres, we believe that nature is not just a backdrop for healing; it is an essential part of the process...",
    image: "//images.pixieset.com/48065708/74f124febf65118a5a07b411b36ec4ab-xxlarge.jpg",
    date: "May 15, 2023"
  },
  {
    title: "The Art of Mindfulness: Finding Peace in the Present",
    excerpt: "Learn how mindfulness can help you navigate life with greater ease and grace.",
    content: "In our busy lives, we often rush from one task to another, hardly stopping to breathe or reflect. Mindfulness offers a remedy for this frenetic pace, inviting us to slow down and embrace the present moment. At Blissful Existence Healing Acres, we encourage our community to explore mindfulness as a tool for personal growth and emotional balance...",
    image: "//images.pixieset.com/48065708/53dced5e2a936978451e769613fb991d-xxlarge.jpg",
    date: "June 2, 2023"
  },
  {
    title: "Holistic Health: Nurturing the Mind, Body, and Spirit",
    excerpt: "Explore the interconnectedness of mind, body, and spirit in achieving true wellness.",
    content: "Holistic health is an approach that recognizes the interconnectedness of our mind, body, and spirit. At Blissful Existence Healing Acres, we understand that true wellness goes beyond just physical health; it encompasses emotional and spiritual well-being as well...",
    image: "//images.pixieset.com/48065708/220f22a3e81af0381c033b90a7e869d0-xxlarge.jpg",
    date: "June 20, 2023"
  },
  {
    title: "Self-Care: A Non-Negotiable for Well-Being",
    excerpt: "Discover why self-care is essential for your overall health and happiness.",
    content: "In a world that often glorifies busyness and productivity, self-care can sometimes feel like an indulgence we can't afford. However, at Blissful Existence Healing Acres, we believe that self-care is not a luxury but a vital necessity for your well-being...",
    image: "//images.pixieset.com/48065708/03415f50decd4b4c4c3da1d2f219dcfe-xxlarge.jpg",
    date: "July 5, 2023"
  },
  {
    title: "The Healing Power of Gratitude",
    excerpt: "Learn how practicing gratitude can transform your perspective and enhance your well-being.",
    content: "Gratitude is more than just a feeling; it's a powerful practice that can profoundly impact your well-being. At Blissful Existence Healing Acres, we encourage our community to embrace gratitude as a cornerstone of their healing journey...",
    image: "//images.pixieset.com/48065708/c89fcd1e14932466a2bbd20daa41837f-xxlarge.jpg",
    date: "July 18, 2023"
  }
];

const BlogPostCard: React.FC<BlogPost> = ({ title, excerpt, image, date }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link to={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary font-semibold flex items-center">
        Read More <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-serif font-bold text-center mb-12"
        >
          Our Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center mt-12"
        >
          <Link to="/blog" className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center">
            View All Posts <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;