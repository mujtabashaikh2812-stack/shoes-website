import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <svg 
                className="h-6 w-6 mr-2" 
                viewBox="0 0 64 64" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background circle */}
                <circle cx="32" cy="32" r="30" fill="#FEFEFE" stroke="#EAB308" strokeWidth="2"/>
                
                {/* Stylized 'M' with shoe silhouette */}
                <path d="M16 48 L20 32 L24 40 L28 32 L32 40 L36 32 L40 40 L44 32 L48 48" 
                      stroke="#1C1917" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                
                {/* Shoe silhouette elements integrated into 'M' */}
                <path d="M20 32 Q22 30 24 32 Q26 34 28 32" 
                      stroke="#EAB308" strokeWidth="2" fill="none"/>
                <path d="M32 40 Q34 38 36 40 Q38 42 40 40" 
                      stroke="#EAB308" strokeWidth="2" fill="none"/>
                
                {/* Luxury accent dots */}
                <circle cx="26" cy="28" r="1.5" fill="#EAB308"/>
                <circle cx="38" cy="36" r="1.5" fill="#EAB308"/>
              </svg>
              <h3 className="text-2xl font-bold text-primary-400">Montavé</h3>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Your premier destination for premium footwear. We offer the latest trends 
              and timeless classics for every style and occasion.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" rel="noopener noreferrer" target="_blank" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" rel="noopener noreferrer" target="_blank" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" rel="noopener noreferrer" target="_blank" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" rel="noopener noreferrer" target="_blank" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/returns" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="/mens" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Men's Shoes
                </a>
              </li>
              <li>
                <a href="/womens" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Women's Shoes
                </a>
              </li>
              <li>
                <a href="/sports" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Sports Shoes
                </a>
              </li>
              <li>
                <a href="/kids" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Kids' Shoes
                </a>
              </li>
              <li>
                <a href="/casual" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Casual Shoes
                </a>
              </li>
              <li>
                <a href="/formal" className="text-secondary-300 hover:text-primary-400 transition-colors text-sm">
                  Formal Shoes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-secondary-300 text-sm">
                    123 Fashion Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300 text-sm">info@montave.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-secondary-700">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-secondary-300 text-sm mb-4">
              Get the latest updates on new products and special offers
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 bg-secondary-800 text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 outline-none"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-secondary-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary-400 text-sm">
            © 2024 Montavé. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="/terms" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer; 