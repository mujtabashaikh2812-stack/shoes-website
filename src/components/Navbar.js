import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <svg 
                className="h-8 w-8 mr-3" 
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
              <h1 className="text-2xl font-bold text-primary-600">Montavé</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Men
              </a>
              <a href="#" className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Women
              </a>
              <a href="#" className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Sports
              </a>
              <a href="#" className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Kids
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-secondary-400" />
              </div>
              <input
                type="text"
                placeholder="Search for shoes..."
                className="input-field pl-10"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <button className="p-2 text-secondary-600 hover:text-primary-600 transition-colors">
              <Heart className="h-6 w-6" />
            </button>

            {/* Cart */}
            <button className="p-2 text-secondary-600 hover:text-primary-600 transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Account */}
            <div className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="p-2 text-secondary-600 hover:text-primary-600 transition-colors"
              >
                <User className="h-6 w-6" />
              </button>
              
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50">
                    Sign In
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50">
                    Create Account
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50">
                    My Orders
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50">
                    Settings
                  </a>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-secondary-400" />
            </div>
            <input
              type="text"
              placeholder="Search for shoes..."
              className="input-field pl-10"
            />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-secondary-100">
              <a href="#" className="text-secondary-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Men
              </a>
              <a href="#" className="text-secondary-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Women
              </a>
              <a href="#" className="text-secondary-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Sports
              </a>
              <a href="#" className="text-secondary-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Kids
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 