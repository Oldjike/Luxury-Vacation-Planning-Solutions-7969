import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiStar, FiUsers } = FiIcons;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-navy via-luxury-charcoal to-black">
        <div className="absolute inset-0 bg-black/20"></div>
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Resort"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Escape the
            <span className="text-luxury-gold block">Ordinary</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Personalized luxury travel experiences crafted for busy professionals. 
            Skip the planning stress and immerse yourself in unforgettable journeys.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/questionnaire"
              className="group bg-luxury-gold hover:bg-luxury-darkGold text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Start Your Journey</span>
              <SafeIcon 
                icon={FiArrowRight} 
                className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
              />
            </Link>
            
            <Link
              to="/#services"
              className="border-2 border-white text-white hover:bg-white hover:text-luxury-navy px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <SafeIcon icon={FiStar} className="h-8 w-8 text-luxury-gold mx-auto mb-2" />
              <p className="text-white font-semibold">Premium Experiences</p>
              <p className="text-gray-300 text-sm">Curated luxury destinations</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <SafeIcon icon={FiUsers} className="h-8 w-8 text-luxury-gold mx-auto mb-2" />
              <p className="text-white font-semibold">Personal Concierge</p>
              <p className="text-gray-300 text-sm">24/7 dedicated support</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <SafeIcon icon={FiArrowRight} className="h-8 w-8 text-luxury-gold mx-auto mb-2" />
              <p className="text-white font-semibold">Stress-Free Planning</p>
              <p className="text-gray-300 text-sm">We handle every detail</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;