import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiHeart, FiMessageCircle, FiGlobe } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiCheckCircle,
      title: "Interactive Questionnaire",
      description: "Our smart questionnaire captures your unique preferences, travel style, and dream destinations to create perfectly tailored experiences.",
      features: ["Personality-based matching", "Preference analysis", "Custom itinerary creation"]
    },
    {
      icon: FiHeart,
      title: "Life Milestone Packages",
      description: "Celebrate life's special moments with curated packages designed for anniversaries, promotions, retirements, and other significant occasions.",
      features: ["Anniversary getaways", "Career celebrations", "Milestone birthdays"]
    },
    {
      icon: FiMessageCircle,
      title: "Post-Trip Follow-Up",
      description: "Your feedback shapes our service. We continuously improve based on your experiences to ensure every future trip exceeds expectations.",
      features: ["Experience feedback", "Service optimization", "Personalized improvements"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-6">
            Tailored for <span className="text-luxury-gold">You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that busy professionals need more than just a vacation – 
            you need an experience that rejuvenates and inspires without the hassle of planning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-luxury-gold/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <SafeIcon icon={service.icon} className="h-8 w-8 text-luxury-gold" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <SafeIcon icon={FiGlobe} className="h-4 w-4 text-luxury-gold mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;