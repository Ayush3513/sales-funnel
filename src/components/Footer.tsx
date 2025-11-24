// import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#121212] py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-start">
            <img
              src="/assets/logooooo.png"
              alt="Logo"
              className="h-14 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm max-w-xs text-left">
              Helping chiropractors grow their practice with cutting-edge automation and AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
            <div className="flex flex-col items-start space-y-2">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-3">Contact Us</h3>
            <div className="flex flex-col items-start space-y-2">
              <p className="text-gray-400 text-sm">Email: hello@kraftonexstudios.com</p>
              <p className="text-gray-400 text-sm">Phone: +1 (555) 884-8091</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-6 border-t border-gray-800/30 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0">
          <p className="text-gray-500 text-sm order-2 sm:order-1 text-left">
            © {new Date().getFullYear()} Kraftonex Studios All rights reserved.
          </p>

          <div className="flex items-center order-1 sm:order-2">
            <div className="relative group">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white bg-size-200 animate-gradient-x font-bold text-2xl sm:text-3xl md:text-4xl">
                Kraftonex Studios
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-black group-hover:w-full transition-all duration-700 ease-in-out"></div>
              <div className="absolute -top-1 right-0 w-0 h-0.5 bg-gradient-to-l from-white to-black group-hover:w-full transition-all duration-700 ease-in-out delay-100"></div>
              <div className="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-white to-black group-hover:h-full transition-all duration-700 ease-in-out delay-200"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-0 bg-gradient-to-t from-white to-black group-hover:h-full transition-all duration-700 ease-in-out delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;