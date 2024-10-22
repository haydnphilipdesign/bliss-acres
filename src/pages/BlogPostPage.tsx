import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import CTA from '../components/CTA';

interface BlogPost {
  title: string;
  content: string;
  image: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Embracing Nature: A Path to Healing",
    content: "In today's fast-paced world, it's easy to forget the healing power of nature. We often find ourselves confined to our homes, staring at screens, and neglecting the beauty and tranquility that the outdoors can provide. At Blissful Existence Healing Acres, we believe that nature is not just a backdrop for healing; it is an essential part of the process...",
    image: "//images.pixieset.com/48065708/74f124febf65118a5a07b411b36ec4ab-xxlarge.jpg",
    date: "May 15, 2023"
  },
  {
    title: "The Art of Mindfulness: Finding Peace in the Present",
    content: "In our busy lives, we often rush from one task to another, hardly stopping to breathe or reflect. Mindfulness offers a remedy for this frenetic pace, inviting us to slow down and embrace the present moment. At Blissful Existence Healing Acres, we encourage our community to explore mindfulness as a tool for personal growth and emotional balance...",
    image: "//images.pixieset.com/48065708/53dced5e2a936978451e769613fb991d-xxlarge.jpg",
    date: "June 2, 2023"
  },
  {
    title: "Holistic Health: Nurturing the Mind, Body, and Spirit",
    content: "Holistic health is an approach that recognizes the interconnectedness of our mind, body, and spirit. At Blissful Existence Healing Acres, we understand that true wellness goes beyond just physical health; it encompasses emotional and spiritual well-being as well...",
    image: "//images.pixieset.com/48065708/220f22a3e81af0381c033b90a7e869d0-xxlarge.jpg",
    date: "June 20, 2023"
  },
  {
    title: "Self-Care: A Non-Negotiable for Well-Being",
    content: "In a world that often glorifies busyness and productivity, self-care can sometimes feel like an indulgence we can't afford. However, at Blissful Existence Healing Acres, we believe that self-care is not a luxury but a vital necessity for your well-being...",
    image: "//images.pixieset.com/48065708/03415f50decd4b4c4c3da1d2f219dcfe-xxlarge.jpg",
    date: "July 5, 2023"
  },
  {
    title: "The Healing Power of Gratitude",
    content: "Gratitude is more than just a feeling; it's a powerful practice that can profoundly impact your well-being. At Blissful Existence Healing Acres, we encourage our community to embrace gratitude as a cornerstone of their healing journey...",
    image: "//images.pixieset.com/48065708/c89fcd1e14932466a2bbd20daa41837f-xxlarge.jpg",
    date: "July 18, 2023"
  }
];

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

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-white"
    >
      <div className="container mx-auto px-4 py-16">
        <Link to="/blog" className="inline-flex items-center text-primary mb-8">
          <ArrowLeft className="mr-2" /> Back to Blog
        </Link>
        <h1 className="text-4xl font-serif font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">{post.date}</p>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <div className="prose max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
      <CTA />
    </motion.div>
  );
};

export default BlogPostPage;