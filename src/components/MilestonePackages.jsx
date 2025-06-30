import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiGift, FiTrendingUp, FiArrowRight } = FiIcons;

const MilestonePackages = () => {
  const packages = [
    {
      id: 'anniversary',
      icon: FiHeart,
      title: "Anniversary Escapes",
      description: "Romantic getaways to celebrate your love story",
      destinations: ["Santorini", "Maldives", "Tuscany"],
      price: "From $4,500",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Private dining", "Couples spa", "Sunset excursions"]
    },
    {
      id: 'promotion',
      icon: FiTrendingUp,
      title: "Career Celebrations",
      description: "Reward your professional achievements in style",
      destinations: ["Tokyo", "New York", "London"],
      price: "From $3,200",
      image: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Business class flights", "Executive suites", "Networking events"]
    },
    {
      id: 'milestone',
      icon: FiGift,
      title: "Milestone Birthdays",
      description: "Make your special day truly unforgettable",
      destinations: ["Safari Kenya", "Patagonia", "Iceland"],
      price: "From $5,800",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Adventure activities", "Private guides", "Luxury accommodations"]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-6">
            Celebrate Life's <span className="text-luxury-gold">Milestones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every achievement deserves recognition. Our milestone packages are designed 
            to commemorate your special moments with extraordinary experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-luxury-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.price}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <SafeIcon icon={pkg.icon} className="h-8 w-8 text-luxury-gold mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-luxury-navy">
                    {pkg.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-luxury-navy mb-2">Featured Destinations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.destinations.map((dest) => (
                      <span
                        key={dest}
                        className="bg-luxury-gold/10 text-luxury-navy px-3 py-1 rounded-full text-sm"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-luxury-navy mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 text-sm">
                        <SafeIcon icon={FiStar} className="h-4 w-4 text-luxury-gold mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/package/${pkg.id}`}
                  className="group/btn inline-flex items-center w-full justify-center bg-luxury-navy hover:bg-luxury-charcoal text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  <span>Explore Package</span>
                  <SafeIcon 
                    icon={FiArrowRight} 
                    className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonePackages;