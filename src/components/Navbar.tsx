import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Award } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const mainNavItems = ['Home', 'About','Skills','Certifications','Experience','Projects','Achievements', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/" className="text-2xl font-bold text-blue-600">Portfolio</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {mainNavItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
              <Link
                to="/badges"
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Award className="w-4 h-4 mr-1" />
                Badges
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Hassanahmed786" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/hassan-ahmed-3b5ba5283/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:ahmedshaikhassan@gmail.com" className="text-gray-700 hover:text-blue-600">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {mainNavItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item}
              </button>
            ))}
            <Link
              to="/badges"
              className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              <Award className="w-4 h-4 mr-2" />
              Badges
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;