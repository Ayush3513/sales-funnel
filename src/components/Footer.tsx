import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#121212] py-8 md:py-12 border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-10">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/assets/logooooo.png" 
              alt="Logo" 
              className="h-12 md:h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              Helping chiropractors grow their practice with cutting-edge automation and AI solutions.
            </p>
          </div>
          
          {/* Quick Links */}

          
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-2">Email: hello@kraftonexstudios.com</p>
            <p className="text-gray-400 text-sm">Phone: +1 (555) 884-8091</p>
            
          </div>
        </div>
        
        {/* Bottom Bar with Copyright */}
        <div className="pt-6 md:pt-8 border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Kraftonex Studios All rights reserved.
          </p>
          
          <div className="flex items-center">
            <div className="relative group">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white bg-size-200 animate-gradient-x font-bold text-xl md:text-5xl">
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