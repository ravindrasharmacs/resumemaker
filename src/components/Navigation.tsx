import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <FileText className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">ResumeForge</span>
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/features"
            className={`px-3 py-2 ${
              isActive('/features')
                ? 'text-blue-600 font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Features
          </Link>
          <Link
            to="/templates"
            className={`px-3 py-2 ${
              isActive('/templates')
                ? 'text-blue-600 font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Templates
          </Link>
          <Link
            to="/pricing"
            className={`px-3 py-2 ${
              isActive('/pricing')
                ? 'text-blue-600 font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Pricing
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}