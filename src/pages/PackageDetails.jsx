import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiStar, FiMapPin, FiCalendar, FiUsers, FiCheck, FiArrowRight } = FiIcons;

const PackageDetails = () => {
  const { id } = useParams();

  const packageData = {
    anniversary: {
      title: "Anniversary Escapes",
      subtitle: "Celebrate Your Love Story",
      description: "Romantic getaways designed to reignite passion and create unforgettable memories for couples celebrating their love.",
      price: "From $4,500 per couple",
      duration: "5-7 days",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      destinations: [
        {
          name: "Santorini, Greece",
          description: "Sunset views, private terraces, and intimate dining",
          image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Maldives",
          description: "Overwater villas and pristine beaches",
          image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Tuscany, Italy",
          description: "Wine tours and countryside romance",
          image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ],
      inclusions: [
        "Luxury accommodation with romantic amenities",
        "Private candlelit dinners",
        "Couples spa treatments",
        "Professional photography session",
        "Champagne and flowers upon arrival",
        "Personal concierge service",
        "Sunset excursions",
        "All transfers and activities"
      ]
    },
    promotion: {
      title: "Career Celebrations",
      subtitle: "Reward Your Success",
      description: "Sophisticated travel experiences designed for accomplished professionals celebrating career milestones and achievements.",
      price: "From $3,200 per person",
      duration: "4-6 days",
      image: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      destinations: [
        {
          name: "Tokyo, Japan",
          description: "Business culture meets luxury experiences",
          image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "New York City",
          description: "Executive experiences in the city that never sleeps",
          image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "London, UK",
          description: "Sophisticated culture and business networking",
          image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ],
      inclusions: [
        "Business class flights",
        "Executive hotel suites",
        "VIP airport transfers",
        "Exclusive networking events",
        "Fine dining reservations",
        "Personal shopping assistance",
        "Cultural experiences",
        "24/7 concierge support"
      ]
    },
    milestone: {
      title: "Milestone Birthdays",
      subtitle: "Celebrate Life's Adventures",
      description: "Extraordinary adventures and luxury experiences designed to commemorate significant birthdays with unforgettable memories.",
      price: "From $5,800 per person",
      duration: "7-10 days",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      destinations: [
        {
          name: "Safari Kenya",
          description: "Wildlife adventures in luxury lodges",
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Patagonia",
          description: "Epic landscapes and adventure activities",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Iceland",
          description: "Northern lights and natural wonders",
          image: "https://images.unsplash.com/photo-1531168556467-80aace4d54d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ],
      inclusions: [
        "Luxury adventure accommodations",
        "Private guided experiences",
        "Adventure activity equipment",
        "Professional photography",
        "Celebration dinner arrangements",
        "Exclusive access experiences",
        "All meals and beverages",
        "Emergency and medical support"
      ]
    }
  };

  const pkg = packageData[id];

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-luxury-navy mb-4">Package not found</h2>
          <Link to="/" className="text-luxury-gold hover:underline">Return to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-serif font-bold mb-4"
            >
              {pkg.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-luxury-gold"
            >
              {pkg.subtitle}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center text-luxury-gold hover:text-luxury-darkGold mb-8 transition-colors"
        >
          <SafeIcon icon={FiArrowLeft} className="h-4 w-4 mr-2" />
          Back to packages
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-luxury-navy mb-6">
                Package Overview
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {pkg.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <SafeIcon icon={FiCalendar} className="h-8 w-8 text-luxury-gold mx-auto mb-2" />
                  <h3 className="font-semibold text-luxury-navy">Duration</h3>
                  <p className="text-gray-600">{pkg.duration}</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <SafeIcon icon={FiUsers} className="h-8 w-8 text-luxury-gold mx-auto mb-2" />
                  <h3 className="font-semibold text-luxury-navy">Group Size</h3>
                  <p className="text-gray-600">Private tours</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <SafeIcon icon={FiStar} className="h-8 w-8 text-luxury-gold mx-auto mb-2" />
                  <h3 className="font-semibold text-luxury-navy">Rating</h3>
                  <p className="text-gray-600">5.0 stars</p>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
                Featured Destinations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {pkg.destinations.map((dest, index) => (
                  <motion.div
                    key={dest.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-luxury-navy mb-2">
                        {dest.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {dest.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-start">
                    <SafeIcon icon={FiCheck} className="h-5 w-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{inclusion}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 sticky top-24"
            >
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-luxury-navy mb-2">
                  {pkg.price}
                </p>
                <p className="text-gray-600">Starting price</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-luxury-navy">{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Destinations</span>
                  <span className="font-semibold text-luxury-navy">{pkg.destinations.length} locations</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Group Size</span>
                  <span className="font-semibold text-luxury-navy">Private</span>
                </div>
              </div>

              <Link
                to="/questionnaire"
                className="w-full bg-luxury-gold hover:bg-luxury-darkGold text-white py-4 px-6 rounded-full font-semibold text-center transition-colors duration-300 flex items-center justify-center mb-4"
              >
                <span>Customize This Package</span>
                <SafeIcon icon={FiArrowRight} className="ml-2 h-4 w-4" />
              </Link>

              <button className="w-full border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white py-4 px-6 rounded-full font-semibold transition-colors duration-300">
                Contact Our Experts
              </button>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-luxury-navy mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Our travel experts are here to help you customize this package.
                </p>
                <p className="text-sm text-luxury-gold font-semibold">
                  Call: +1 (555) 123-4567
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;