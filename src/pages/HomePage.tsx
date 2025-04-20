import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import CalorieCounter from '../components/home/CalorieCounter';
import WorkoutPlans from '../components/home/WorkoutPlans';
import AppPromo from '../components/home/AppPromo';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <CalorieCounter />
      <WorkoutPlans />
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Introducing Our AI Meal Planner
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our new AI-powered meal planning tool creates personalized meal plans based on your preferences, 
              dietary needs, and goals.
            </p>
            <Link 
              to="/meal-planner" 
              className="mt-8 inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Try AI Meal Planner
            </Link>
          </div>
        </div>
      </div>
      <AppPromo />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;