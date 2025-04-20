import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import NavDropdown from './NavDropdown';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    {
      title: 'Features',
      dropdown: [
        { name: 'Nutrition Tracking', link: '#nutrition' },
        { name: 'Exercise Tracking', link: '#exercise' },
        { name: 'Progress Reports', link: '#progress' }
      ]
    },
    {
      title: 'Food',
      dropdown: [
        { name: 'Food Database', link: '#food-database' },
        { name: 'Recipes', link: '#recipes' },
        { name: 'Meal Ideas', link: '#meal-ideas' },
      ]
    },
    {
      title: 'Exercise',
      dropdown: [
        { name: 'Exercise Database', link: '#exercise-database' },
        { name: 'Workout Routines', link: '#workout-routines' },
        { name: 'Cardio Tracking', link: '#cardio' },
      ]
    },
    {
      title: 'Apps',
      dropdown: [
        { name: 'iOS App', link: '#ios-app' },
        { name: 'Android App', link: '#android-app' },
        { name: 'Web App', link: '#web-app' },
      ]
    },
    {
      title: 'Community',
      dropdown: [
        { name: 'Forums', link: '#forums' },
        { name: 'Success Stories', link: '#success-stories' },
        { name: 'Challenges', link: '#challenges' },
      ]
    },
    {
      title: 'AI Meal Planner',
      link: '/meal-planner'
    },
    {
      title: 'Blog',
      link: '#blog'
    }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="text-blue-600 font-bold text-2xl">
              myfitnesspal
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((item, index) => (
              'dropdown' in item ? (
                <NavDropdown 
                  key={index}
                  title={item.title} 
                  items={item.dropdown} 
                />
              ) : (
                <Link 
                  key={index}
                  to={item.link || '#'} 
                  className="font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.title}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/sign-in" 
              className="text-blue-600 font-medium hover:text-blue-800"
            >
              Sign In
            </Link>
            <Link 
              to="/sign-up" 
              className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((item, index) => (
                <div key={index} className="py-2">
                  {'dropdown' in item ? (
                    <div className="flex flex-col">
                      <div className="font-medium text-gray-800 mb-2">{item.title}</div>
                      <div className="pl-4 flex flex-col space-y-2">
                        {item.dropdown.map((dropItem, idx) => (
                          <Link 
                            key={idx}
                            to={dropItem.link} 
                            className="text-gray-600 hover:text-blue-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.link || '#'} 
                      className="font-medium text-gray-800 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-6 flex flex-col space-y-3">
              <Link 
                to="/sign-in" 
                className="text-center text-blue-600 font-medium py-2 hover:text-blue-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/sign-up" 
                className="text-center bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;