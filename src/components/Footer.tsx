import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Github, Linkedin, FileText} from 'lucide-react';
import { Link } from 'react-router-dom';
import Resume1 from '../components/Images/Resume1.pdf';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with scroll button */}
        <div className="flex justify-center py-8 border-b border-gray-800">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-white group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">About Me</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer specializing in modern web technologies and creating impactful digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/badges" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Badges
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:ahmedshaikhassan@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  ahmedshaikhassan@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919959167096"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +91 99591 67096
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Hyderabad, India
                </span>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Hassanahmed786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/hassan-ahmed-3b5ba5283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <a
              href={Resume1}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shaik Hassan Ahmed. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with passion and precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;