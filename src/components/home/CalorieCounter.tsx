import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Utensils, BarChart2 } from 'lucide-react';

const CalorieCounter = () => {
  const features = [
    {
      icon: <Calculator size={24} className="text-blue-600" />,
      title: 'Calorie Tracking',
      description: 'Log your meals and track your calorie intake with our extensive food database.'
    },
    {
      icon: <Utensils size={24} className="text-blue-600" />,
      title: 'Food Database',
      description: 'Access over 14 million foods with accurate nutrition information for precise tracking.'
    },
    {
      icon: <BarChart2 size={24} className="text-blue-600" />,
      title: 'Nutrition Insights',
      description: 'Get detailed breakdowns of macronutrients, vitamins, and minerals in your diet.'
    }
  ];

  return (
    <section className="py-20 bg-white" id="calorie-counter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Keep Track of Your Calories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            MyFitnessPal makes counting calories and logging meals simple. Our food database has millions of foods to choose from.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Person tracking calories"
              className="w-full h-auto"
            />
          </div>

          <div>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/sign-up"
                className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
              >
                Start Tracking Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalorieCounter;