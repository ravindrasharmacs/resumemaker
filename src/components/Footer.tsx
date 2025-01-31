import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
              <li><Link to="/templates" className="text-gray-600 hover:text-gray-900">Templates</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link to="/guide" className="text-gray-600 hover:text-gray-900">Guide</Link></li>
              <li><Link to="/examples" className="text-gray-600 hover:text-gray-900">Examples</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-gray-900">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-600 text-center">
            © 2024 ResumeForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}