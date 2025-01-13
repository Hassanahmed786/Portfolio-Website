import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="mb-8 p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
          <div className="text-center">
            <p className="text-lg font-semibold">Shaik Hassan Ahmed</p>
            <p className="mt-2 text-gray-400">Full Stack Developer</p>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;