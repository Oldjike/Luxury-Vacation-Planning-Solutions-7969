import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiSend, FiHeart, FiThumbsUp } = FiIcons;

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    tripDestination: '',
    tripDate: '',
    overallRating: 0,
    accommodationRating: 0,
    serviceRating: 0,
    activitiesRating: 0,
    highlights: '',
    improvements: '',
    recommendations: '',
    wouldRecommend: '',
    futureTravel: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFeedback(prev => ({ ...prev, [field]: value }));
  };

  const handleRatingChange = (field, rating) => {
    setFeedback(prev => ({ ...prev, [field]: rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  const StarRating = ({ rating, onRatingChange, label }) => (
    <div className="mb-4">
      <label className="block text-luxury-navy font-medium mb-2">{label}</label>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className="focus:outline-none"
          >
            <SafeIcon 
              icon={FiStar} 
              className={`h-8 w-8 ${
                star <= rating ? 'text-luxury-gold fill-current' : 'text-gray-300'
              } hover:text-luxury-gold transition-colors`} 
            />
          </button>
        ))}
      </div>
    </div>
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-lg p-8"
        >
          <SafeIcon icon={FiHeart} className="h-16 w-16 text-luxury-gold mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold text-luxury-navy mb-4">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6">
            Your feedback is invaluable to us. We'll use your insights to make future 
            trips even more extraordinary.
          </p>
          <div className="bg-luxury-gold/10 rounded-lg p-4">
            <p className="text-luxury-navy font-semibold">
              We'll be in touch soon with exclusive offers for your next adventure!
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-4">
              Share Your Experience
            </h1>
            <p className="text-xl text-gray-600">
              Your feedback helps us create even more amazing experiences for future travelers.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
                  Trip Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      value={feedback.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={feedback.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">Trip Destination</label>
                    <input
                      type="text"
                      value={feedback.tripDestination}
                      onChange={(e) => handleInputChange('tripDestination', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Where did you travel?"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">Trip Date</label>
                    <input
                      type="text"
                      value={feedback.tripDate}
                      onChange={(e) => handleInputChange('tripDate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Month/Year of your trip"
                    />
                  </div>
                </div>
              </div>

              {/* Ratings */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
                  Rate Your Experience
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <StarRating
                    rating={feedback.overallRating}
                    onRatingChange={(rating) => handleRatingChange('overallRating', rating)}
                    label="Overall Experience"
                  />
                  <StarRating
                    rating={feedback.accommodationRating}
                    onRatingChange={(rating) => handleRatingChange('accommodationRating', rating)}
                    label="Accommodation Quality"
                  />
                  <StarRating
                    rating={feedback.serviceRating}
                    onRatingChange={(rating) => handleRatingChange('serviceRating', rating)}
                    label="Service & Support"
                  />
                  <StarRating
                    rating={feedback.activitiesRating}
                    onRatingChange={(rating) => handleRatingChange('activitiesRating', rating)}
                    label="Activities & Experiences"
                  />
                </div>
              </div>

              {/* Detailed Feedback */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
                  Tell Us More
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">
                      What were the highlights of your trip?
                    </label>
                    <textarea
                      value={feedback.highlights}
                      onChange={(e) => handleInputChange('highlights', e.target.value)}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Share your favorite moments and experiences..."
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">
                      What could we improve for future trips?
                    </label>
                    <textarea
                      value={feedback.improvements}
                      onChange={(e) => handleInputChange('improvements', e.target.value)}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Your suggestions help us enhance our services..."
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">
                      Any recommendations for future travelers?
                    </label>
                    <textarea
                      value={feedback.recommendations}
                      onChange={(e) => handleInputChange('recommendations', e.target.value)}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Tips and advice you'd share with other travelers..."
                    />
                  </div>
                </div>
              </div>

              {/* Final Questions */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
                  Final Questions
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-luxury-navy font-medium mb-4">
                      Would you recommend Seeta Luxury Escape to others?
                    </label>
                    <div className="space-y-2">
                      {['Absolutely', 'Yes, with some reservations', 'Maybe', 'Probably not', 'Definitely not'].map(option => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="wouldRecommend"
                            value={option}
                            checked={feedback.wouldRecommend === option}
                            onChange={(e) => handleInputChange('wouldRecommend', e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-luxury-navy">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">
                      Are you interested in planning another trip with us?
                    </label>
                    <textarea
                      value={feedback.futureTravel}
                      onChange={(e) => handleInputChange('futureTravel', e.target.value)}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Let us know about your future travel interests..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="flex items-center bg-luxury-gold hover:bg-luxury-darkGold text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Submit Feedback</span>
                  <SafeIcon icon={FiSend} className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeedbackForm;