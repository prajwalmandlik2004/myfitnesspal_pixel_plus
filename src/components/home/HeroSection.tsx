import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fitness starts with what you eat
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Take control of your goals. Track calories, break down ingredients, and log activities with MyFitnessPal.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/sign-up"
                className="bg-white text-blue-600 font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
              >
                Start For Free
              </Link>
              <Link
                to="#learn-more"
                className="flex items-center justify-center bg-transparent border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg shadow-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Person using fitness app"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-48 md:w-64 z-20">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-500">Daily Goal</div>
                <div className="text-sm font-medium text-green-500">On Track</div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mb-2">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <div>1,500 calories</div>
                <div>2,000 calories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-white rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-white rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default HeroSection;