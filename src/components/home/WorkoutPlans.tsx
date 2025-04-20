import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Dumbbell, Users } from 'lucide-react';

const WorkoutPlans = () => {
  const plans = [
    {
      title: '28-Day Weight Loss',
      icon: <Clock size={24} className="text-blue-600" />,
      description: 'A complete 4-week plan to jumpstart your weight loss journey.',
      features: ['Daily workouts', 'Meal suggestions', 'Progress tracking']
    },
    {
      title: 'Strength Building',
      icon: <Dumbbell size={24} className="text-blue-600" />,
      description: 'Build muscle and increase strength with our progressive program.',
      features: ['Resistance training', 'Protein-focused nutrition', 'Recovery tips']
    },
    {
      title: 'Community Challenges',
      icon: <Users size={24} className="text-blue-600" />,
      description: 'Join others in monthly fitness challenges to stay motivated.',
      features: ['Group support', 'Leaderboards', 'Achievement badges']
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="workout-plans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Personalized Workout Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect workout routine tailored to your fitness level and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                {plan.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{plan.title}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-2">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L5.5 7.5L8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="#view-plan"
                className="text-blue-600 font-medium hover:text-blue-800 inline-block"
              >
                View Plan →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/sign-up"
            className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            Explore All Workout Plans
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlans;