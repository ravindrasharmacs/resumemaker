import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out our features',
      features: [
        'Access to basic templates',
        'Export to PDF',
        'Basic formatting options',
        'Real-time preview',
        'Up to 1 resume'
      ],
      buttonText: 'Get Started',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$12',
      period: 'per month',
      description: 'Everything you need for job hunting',
      features: [
        'All Free features',
        'Access to all templates',
        'AI writing assistance',
        'Multiple export formats',
        'Up to 5 resumes',
        'Cover letter templates',
        'Priority support'
      ],
      buttonText: 'Start Pro Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '$29',
      period: 'per month',
      description: 'For teams and organizations',
      features: [
        'All Pro features',
        'Custom branding',
        'Team collaboration',
        'Analytics dashboard',
        'Unlimited resumes',
        'API access',
        'Dedicated support'
      ],
      buttonText: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features to help you create an outstanding resume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                plan.highlighted
                  ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-2'
                  : 'bg-white'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  /{plan.period}
                </span>
              </div>
              <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <button
                className={`w-full py-2 px-4 rounded-lg mb-8 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } transition-colors`}
              >
                {plan.buttonText}
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`h-5 w-5 mr-2 ${plan.highlighted ? 'text-blue-100' : 'text-blue-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact our sales team for custom enterprise solutions tailored to your organization's needs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}