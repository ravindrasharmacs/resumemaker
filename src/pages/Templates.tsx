import React from 'react';
import { Star, Download } from 'lucide-react';

export function Templates() {
  const templates = [
    {
      name: 'Professional',
      description: 'Perfect for corporate and traditional industries',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80',
      popular: true
    },
    {
      name: 'Creative',
      description: 'Ideal for design and creative roles',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80',
      popular: false
    },
    {
      name: 'Modern',
      description: 'Great for tech and startups',
      image: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=400&q=80',
      popular: true
    },
    {
      name: 'Executive',
      description: 'Designed for senior positions',
      image: 'https://images.unsplash.com/photo-1586282023078-9d3bf8767cde?auto=format&fit=crop&w=400&q=80',
      popular: false
    },
    {
      name: 'Minimal',
      description: 'Clean and straightforward layout',
      image: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=400&q=80',
      popular: false
    },
    {
      name: 'Academic',
      description: 'Suitable for academic and research positions',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Resume Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates that help you stand out and get hired faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-64 object-cover"
                />
                {template.popular && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" /> Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {template.description}
                </p>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" /> Use This Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}