import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiClock, FiTarget, FiTrendingUp } = FiIcons;

const Questionnaire = () => {
  const steps = [
    {
      icon: FiTarget,
      title: "Tell Us About You",
      description: "Share your travel preferences, interests, and dream destinations"
    },
    {
      icon: FiClock,
      title: "Set Your Timeline",
      description: "Let us know your preferred dates and trip duration"
    },
    {
      icon: FiTrendingUp,
      title: "Receive Your Plan",
      description: "Get a personalized itinerary crafted just for you"
    }
  ];

  return (
    <section className="py-20 bg-luxury-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Your Perfect Trip Starts with 
              <span className="text-luxury-gold block">One Conversation</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our intelligent questionnaire takes just 5 minutes but saves you hours of research. 
              Answer a few thoughtful questions, and we'll create a travel experience that feels 
              like it was designed just for you.
            </p>

            <Link
              to="/questionnaire"
              className="group inline-flex items-center bg-luxury-gold hover:bg-luxury-darkGold text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start Questionnaire</span>
              <SafeIcon 
                icon={FiArrowRight} 
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="bg-luxury-gold/20 rounded-full p-3 flex-shrink-0">
                  <SafeIcon icon={step.icon} className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;