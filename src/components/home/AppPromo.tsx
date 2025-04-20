import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const AppPromo = () => {
  const appFeatures = [
    'Track meals, water, and exercise in one place',
    'Access our food database with 14 million+ foods',
    'Scan barcodes for quick and easy food logging',
    'Connect with 50+ apps and devices',
    'Get personalized nutrition insights',
    'Join our supportive community'
  ];

  return (
    <section className="py-20 bg-white" id="app-promo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take MyFitnessPal With You Everywhere
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay on track with your nutrition and fitness goals wherever you go with our mobile apps. 
              Available for iOS and Android devices.
            </p>
            
            <ul className="space-y-3 mb-8">
              {appFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#ios-app" 
                className="flex items-center justify-center bg-black text-white font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                iOS App
              </a>
              <a 
                href="#android-app" 
                className="flex items-center justify-center bg-black text-white font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.61 15.15c-.46 0-.84-.37-.84-.84v-1.89H8.23v1.89c0 .46-.37.84-.84.84s-.84-.37-.84-.84v-1.89H5.84c-.46 0-.84-.37-.84-.84V7.84c0-.46.37-.84.84-.84h.7v-2.5c0-.46.37-.84.84-.84h9.23c.46 0 .84.37.84.84v2.5h.7c.46 0 .84.37.84.84v3.74c0 .46-.37.84-.84.84h-.7v1.89c.01.47-.37.84-.84.84M7.37 5.84v1.16h9.23V5.84H7.37m9.93 5.9c.23 0 .42-.19.42-.42V7.84c0-.23-.19-.42-.42-.42H6.67c-.23 0-.42.19-.42.42v3.48c0 .23.19.42.42.42h.7v1.89c0 .23.19.42.42.42s.42-.19.42-.42v-1.89h7.54v1.89c0 .23.19.42.42.42s.42-.19.42-.42v-1.89h.7z" />
                  <path d="M8.23 9.23c.23 0 .42-.19.42-.42s-.19-.42-.42-.42-.42.19-.42.42.19.42.42.42m7.54 0c.23 0 .42-.19.42-.42s-.19-.42-.42-.42-.42.19-.42.42.19.42.42.42" />
                </svg>
                Android App
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 transform translate-x-8">
              <img
                src="https://images.pexels.com/photos/4482896/pexels-photo-4482896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="MyFitnessPal mobile app"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute top-1/4 -left-8 w-3/4 h-full z-0">
              <img
                src="https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="MyFitnessPal mobile app second screen"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;