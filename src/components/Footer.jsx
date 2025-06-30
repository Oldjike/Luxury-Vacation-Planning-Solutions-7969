import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiMail, FiPhone, FiInstagram, FiTwitter, FiFacebook } = FiIcons;

const Footer = () => {
  return (
    <footer id="contact" className="bg-luxury-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <SafeIcon icon={FiMapPin} className="h-8 w-8 text-luxury-gold" />
              <span className="font-serif text-2xl font-bold">
                Seeta Luxury Escape
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Creating extraordinary travel experiences for busy professionals who 
              deserve nothing but the finest. Let us handle the details while you 
              enjoy the journey.
            </p>
            <div className="flex space-x-4">
              <SafeIcon icon={FiInstagram} className="h-6 w-6 text-gray-300 hover:text-luxury-gold transition-colors cursor-pointer" />
              <SafeIcon icon={FiTwitter} className="h-6 w-6 text-gray-300 hover:text-luxury-gold transition-colors cursor-pointer" />
              <SafeIcon icon={FiFacebook} className="h-6 w-6 text-gray-300 hover:text-luxury-gold transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-luxury-gold transition-colors">Home</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-luxury-gold transition-colors">Services</Link></li>
              <li><Link to="/#packages" className="text-gray-300 hover:text-luxury-gold transition-colors">Packages</Link></li>
              <li><Link to="/questionnaire" className="text-gray-300 hover:text-luxury-gold transition-colors">Start Planning</Link></li>
              <li><Link to="/feedback" className="text-gray-300 hover:text-luxury-gold transition-colors">Feedback</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <SafeIcon icon={FiMail} className="h-5 w-5 text-luxury-gold mr-3" />
                <span className="text-gray-300">hello@seetaluxuryescape.com</span>
              </li>
              <li className="flex items-center">
                <SafeIcon icon={FiPhone} className="h-5 w-5 text-luxury-gold mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <SafeIcon icon={FiMapPin} className="h-5 w-5 text-luxury-gold mr-3 mt-1" />
                <span className="text-gray-300">
                  123 Luxury Lane<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Seeta Luxury Escape. All rights reserved. Crafted with passion for extraordinary journeys.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;