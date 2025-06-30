import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiArrowLeft, FiCheck, FiUser, FiMapPin, FiCalendar, FiDollarSign } = FiIcons;

const QuestionnaireForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: { name: '', email: '', phone: '' },
    travelStyle: '',
    destinations: [],
    budget: '',
    duration: '',
    dates: '',
    activities: [],
    accommodation: '',
    dining: '',
    specialRequests: ''
  });

  const steps = [
    { icon: FiUser, title: "Personal Information", key: "personalInfo" },
    { icon: FiMapPin, title: "Travel Preferences", key: "travelStyle" },
    { icon: FiCalendar, title: "Trip Details", key: "dates" },
    { icon: FiDollarSign, title: "Budget & Preferences", key: "budget" }
  ];

  const handleInputChange = (section, field, value) => {
    if (section === 'personalInfo') {
      setFormData(prev => ({
        ...prev,
        personalInfo: { ...prev.personalInfo, [field]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleArrayChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll create your personalized travel plan and contact you within 24 hours.');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
              Let's get to know you
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-luxury-navy font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.personalInfo.name}
                  onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-luxury-navy font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-luxury-navy font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.personalInfo.phone}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
              What's your travel style?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Adventure & Exploration', 'Relaxation & Wellness', 'Cultural Immersion', 'Luxury & Indulgence'].map(style => (
                <label key={style} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-luxury-gold transition-colors">
                  <input
                    type="radio"
                    name="travelStyle"
                    value={style}
                    checked={formData.travelStyle === style}
                    onChange={(e) => handleInputChange('', 'travelStyle', e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${formData.travelStyle === style ? 'bg-luxury-gold border-luxury-gold' : 'border-gray-300'}`}></div>
                  <span className="font-medium text-luxury-navy">{style}</span>
                </label>
              ))}
            </div>
            
            <div>
              <label className="block text-luxury-navy font-medium mb-4">Dream Destinations (select all that interest you)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Europe', 'Asia', 'Africa', 'South America', 'Caribbean', 'Middle East', 'Oceania', 'North America'].map(dest => (
                  <label key={dest} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.destinations.includes(dest)}
                      onChange={(e) => handleArrayChange('destinations', dest, e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-luxury-navy">{dest}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
              Trip Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-luxury-navy font-medium mb-2">Preferred Travel Dates</label>
                <input
                  type="text"
                  value={formData.dates}
                  onChange={(e) => handleInputChange('', 'dates', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                  placeholder="e.g., March 2024 or flexible"
                />
              </div>
              <div>
                <label className="block text-luxury-navy font-medium mb-2">Trip Duration</label>
                <select
                  value={formData.duration}
                  onChange={(e) => handleInputChange('', 'duration', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                >
                  <option value="">Select duration</option>
                  <option value="3-5 days">3-5 days</option>
                  <option value="1 week">1 week</option>
                  <option value="10-14 days">10-14 days</option>
                  <option value="2+ weeks">2+ weeks</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-luxury-navy font-medium mb-4">Preferred Activities</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Fine Dining', 'Spa & Wellness', 'Adventure Sports', 'Cultural Tours', 'Shopping', 'Nightlife', 'Photography', 'Wildlife', 'Art & Museums'].map(activity => (
                  <label key={activity} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.activities.includes(activity)}
                      onChange={(e) => handleArrayChange('activities', activity, e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-luxury-navy text-sm">{activity}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
              Budget & Final Preferences
            </h3>
            <div>
              <label className="block text-luxury-navy font-medium mb-4">Budget Range (per person)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['$2,000 - $5,000', '$5,000 - $10,000', '$10,000 - $20,000', '$20,000+'].map(budget => (
                  <label key={budget} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-luxury-gold transition-colors">
                    <input
                      type="radio"
                      name="budget"
                      value={budget}
                      checked={formData.budget === budget}
                      onChange={(e) => handleInputChange('', 'budget', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${formData.budget === budget ? 'bg-luxury-gold border-luxury-gold' : 'border-gray-300'}`}></div>
                    <span className="font-medium text-luxury-navy">{budget}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-luxury-navy font-medium mb-2">Accommodation Preference</label>
                <select
                  value={formData.accommodation}
                  onChange={(e) => handleInputChange('', 'accommodation', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                >
                  <option value="">Select preference</option>
                  <option value="5-star hotels">5-star hotels</option>
                  <option value="Boutique properties">Boutique properties</option>
                  <option value="Luxury resorts">Luxury resorts</option>
                  <option value="Private villas">Private villas</option>
                </select>
              </div>
              <div>
                <label className="block text-luxury-navy font-medium mb-2">Dining Style</label>
                <select
                  value={formData.dining}
                  onChange={(e) => handleInputChange('', 'dining', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                >
                  <option value="">Select preference</option>
                  <option value="Michelin starred">Michelin starred restaurants</option>
                  <option value="Local authentic">Local authentic cuisine</option>
                  <option value="Hotel dining">Hotel dining primarily</option>
                  <option value="Mix of options">Mix of options</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-luxury-navy font-medium mb-2">Special Requests or Occasions</label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('', 'specialRequests', e.target.value)}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                placeholder="Any special occasions, dietary restrictions, accessibility needs, or other requests..."
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
              Design Your Perfect Escape
            </h1>
            <p className="text-xl text-gray-600">
              Tell us about your dream vacation and we'll create a personalized experience just for you.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= currentStep ? 'bg-luxury-gold text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {index < currentStep ? (
                      <SafeIcon icon={FiCheck} className="h-5 w-5" />
                    ) : (
                      <SafeIcon icon={step.icon} className="h-5 w-5" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-full h-1 mx-4 ${
                      index < currentStep ? 'bg-luxury-gold' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
              </p>
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              {renderStepContent()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-colors ${
                    currentStep === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-luxury-navy hover:bg-gray-300'
                  }`}
                >
                  <SafeIcon icon={FiArrowLeft} className="h-4 w-4 mr-2" />
                  Previous
                </button>

                {currentStep === steps.length - 1 ? (
                  <button
                    type="submit"
                    className="flex items-center bg-luxury-gold hover:bg-luxury-darkGold text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    Submit Request
                    <SafeIcon icon={FiCheck} className="h-4 w-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center bg-luxury-gold hover:bg-luxury-darkGold text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    Next
                    <SafeIcon icon={FiArrowRight} className="h-4 w-4 ml-2" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuestionnaireForm;