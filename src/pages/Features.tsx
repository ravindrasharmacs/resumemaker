import React from 'react';
import { Wand2, Target, Sparkles, Zap, FileCheck, BarChart3 } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Wand2 className="h-8 w-8 text-blue-600" />,
      title: 'AI-Powered Writing Assistant',
      description: 'Get intelligent suggestions for your resume content, helping you highlight your achievements effectively.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'ATS Optimization',
      description: 'Ensure your resume gets past Applicant Tracking Systems with our optimized templates and keyword suggestions.'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      title: 'Smart Formatting',
      description: 'Our intelligent formatting system automatically adjusts your content to fit perfectly on the page.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Real-Time Preview',
      description: 'See changes instantly as you type with our live preview feature.'
    },
    {
      icon: <FileCheck className="h-8 w-8 text-blue-600" />,
      title: 'Multiple Export Options',
      description: 'Download your resume in PDF, Word, or plain text formats to suit any application requirement.'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: 'Resume Analytics',
      description: 'Get insights on how your resume performs and suggestions for improvement.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features to Build Your Perfect Resume
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of tools helps you create a professional, ATS-friendly resume that stands out from the crowd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Professional Resume?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their dream jobs using ResumeForge.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}