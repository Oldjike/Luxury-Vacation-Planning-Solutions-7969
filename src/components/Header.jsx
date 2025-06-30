import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiMapPin } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Packages', href: '/#packages' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <SafeIcon icon={FiMapPin} className="h-8 w-8 text-luxury-gold" />
            <span className="font-serif text-2xl font-bold text-luxury-navy">
              Seeta Luxury Escape
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-luxury-navy hover:text-luxury-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/questionnaire"
              className="bg-luxury-gold hover:bg-luxury-darkGold text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium"
            >
              Start Planning
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <SafeIcon 
              icon={isMenuOpen ? FiX : FiMenu} 
              className="h-6 w-6 text-luxury-navy" 
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-luxury-gold/20"
        >
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-luxury-navy hover:text-luxury-gold transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/questionnaire"
              className="block bg-luxury-gold hover:bg-luxury-darkGold text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Planning
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;