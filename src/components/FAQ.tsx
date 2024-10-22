import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Equine Gestalt Coaching?",
    answer: "Equine Gestalt Coaching is a therapeutic approach that combines the principles of Gestalt therapy with the intuitive nature of horses. This method helps clients gain deeper self-awareness and emotional healing through interactions with horses in a guided, supportive environment."
  },
  {
    question: "Do I need horse experience to participate in your programs?",
    answer: "No prior horse experience is necessary. Our programs are designed for individuals of all backgrounds and comfort levels with horses. Our trained facilitators and gentle horses will guide you through the process."
  },
  {
    question: "How long are the sessions?",
    answer: "Individual Equine Gestalt Coaching sessions typically last two hours. Group sessions and workshops may vary in length. Please check the specific program details or contact us for more information."
  },
  {
    question: "Is Equine Therapy suitable for children?",
    answer: "Yes, we offer programs specifically designed for children, including our Blissful Kids Camp. Equine therapy can be particularly beneficial for children dealing with emotional or behavioral challenges."
  },
  {
    question: "What should I wear for a session?",
    answer: "We recommend comfortable, weather-appropriate clothing and closed-toe shoes. Avoid loose, flapping clothing or accessories that might startle the horses."
  }
];

const FAQItem: React.FC<FAQItem & { isOpen: boolean; toggleOpen: () => void }> = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="flex justify-between items-center w-full text-left"
      onClick={toggleOpen}
    >
      <span className="text-lg font-semibold">{question}</span>
      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-gray-600"
        >
          {answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-serif font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              {...item}
              isOpen={openIndex === index}
              toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;