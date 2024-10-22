import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const events: Event[] = [
  {
    title: "Transformational Retreat",
    date: "May 16-18, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Blissful Existence Healing Acres",
    description: "Embark on a life-changing journey of self-exploration and healing."
  },
  {
    title: "Forest Bathing Experience",
    date: "June 5, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Blissful Existence Healing Acres",
    description: "Immerse yourself in nature's embrace for a rejuvenating experience."
  },
  {
    title: "Weekly Gestalt Group Session",
    date: "Every Wednesday",
    time: "6:00 PM - 8:00 PM",
    location: "Blissful Existence Healing Acres",
    description: "Connect with others in a supportive environment for emotional healing."
  },
  {
    title: "Adult Meditation Circle",
    date: "Every Saturday",
    time: "10:00 AM - 11:30 AM",
    location: "Blissful Existence Healing Acres",
    description: "Find inner peace and clarity through guided meditation."
  },
  {
    title: "Blissful Kids Camp",
    date: "July 15-19, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Blissful Existence Healing Acres",
    description: "A week of mindfulness activities and enriching interactions with horses for children."
  }
];

const EventCard: React.FC<Event> = ({ title, date, time, location, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
    <div className="flex items-center text-gray-600 mb-2">
      <Calendar className="w-4 h-4 mr-2" />
      <span>{date}</span>
    </div>
    <div className="flex items-center text-gray-600 mb-2">
      <Clock className="w-4 h-4 mr-2" />
      <span>{time}</span>
    </div>
    <div className="flex items-center text-gray-600 mb-4">
      <MapPin className="w-4 h-4 mr-2" />
      <span>{location}</span>
    </div>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

const Events: React.FC = () => {
  return (
    <section id="events" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-serif font-bold text-center mb-12"
        >
          Upcoming Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;