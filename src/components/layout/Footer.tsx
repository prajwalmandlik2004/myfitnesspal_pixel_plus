import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', url: '#about' },
        { name: 'Careers', url: '#careers' },
        { name: 'Contact Us', url: '#contact' },
        { name: 'Community Guidelines', url: '#guidelines' },
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Premium', url: '#premium' },
        { name: 'iOS App', url: '#ios' },
        { name: 'Android App', url: '#android' },
        { name: 'Web App', url: '#webapp' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', url: '#blog' },
        { name: 'Help Center', url: '#help' },
        { name: 'API', url: '#api' },
        { name: 'Forums', url: '#forums' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '#privacy' },
        { name: 'Terms of Service', url: '#terms' },
        { name: 'Cookie Policy', url: '#cookies' },
        { name: 'DMCA', url: '#dmca' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <div className="text-xl font-bold mb-4">myfitnesspal</div>
            <p className="text-gray-400 mb-4">
              Helping people live healthier, happier lives since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="font-medium text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.url} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="mb-4 sm:mb-0">
              © {currentYear} MyFitnessPal, LLC All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-white">Accessibility</Link>
              <Link to="#" className="hover:text-white">Do Not Sell My Information</Link>
            </div>
          </div>
          <div className="mt-4">
            <p>
              This is a clone site created for educational purposes only. No affiliation with MyFitnessPal, LLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;