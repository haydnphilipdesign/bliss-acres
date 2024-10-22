import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard: React.FC<{ quote: string; author: string; image: string }> = ({ quote, author, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <img src={image} alt={author} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-accent fill-current" />
      ))}
    </div>
    <p className="text-gray-700 mb-4 italic">"{quote}"</p>
    <p className="text-gray-900 font-semibold text-center">- {author}</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The experience at Blissful Existence was truly transformative. The combination of gestalt therapy and horse interaction helped me overcome my anxiety in ways I never thought possible."
            author="Sarah M."
            image="//images.pixieset.com/48065708/53dced5e2a936978451e769613fb991d-xxlarge.jpg"
          />
          <TestimonialCard
            quote="I was skeptical at first, but after just a few sessions, I noticed a significant improvement in my self-awareness and emotional well-being. The therapists and horses are amazing."
            author="Michael R."
            image="//images.pixieset.com/48065708/220f22a3e81af0381c033b90a7e869d0-xxlarge.jpg"
          />
          <TestimonialCard
            quote="The peaceful environment and the gentle presence of the horses created the perfect setting for deep introspection and healing. I'm grateful for this unique approach to therapy."
            author="Emily L."
            image="//images.pixieset.com/48065708/03415f50decd4b4c4c3da1d2f219dcfe-xxlarge.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;