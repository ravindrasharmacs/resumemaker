import React from 'react';
import { ArrowRight, Sparkles, CloudLightning as Lightning, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Create a Professional Resume in Minutes
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stand out from the crowd with a beautifully designed resume. Our AI-powered platform helps you craft the perfect resume for your dream job.
          </p>
          <Link to="/templates" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
            Build Your Resume <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Lightning className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Quick & Easy</h3>
            <p className="text-gray-600">
              Create a professional resume in minutes with our intuitive builder
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI-Powered</h3>
            <p className="text-gray-600">
              Get smart suggestions and improvements powered by AI technology
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">ATS-Friendly</h3>
            <p className="text-gray-600">
              Ensure your resume passes Applicant Tracking Systems
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already created stunning resumes with ResumeForge
          </p>
          <Link to="/templates" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Building for Free
          </Link>
        </div>
      </div>
    </>
  );
}