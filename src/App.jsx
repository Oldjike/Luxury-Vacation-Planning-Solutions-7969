import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Questionnaire from './components/Questionnaire';
import MilestonePackages from './components/MilestonePackages';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import QuestionnaireForm from './pages/QuestionnaireForm';
import PackageDetails from './pages/PackageDetails';
import FeedbackForm from './pages/FeedbackForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questionnaire" element={<QuestionnaireForm />} />
          <Route path="/package/:id" element={<PackageDetails />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <Services />
      <Questionnaire />
      <MilestonePackages />
      <Testimonials />
    </motion.div>
  );
}

export default App;