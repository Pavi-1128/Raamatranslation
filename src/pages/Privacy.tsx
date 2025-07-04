import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy & Terms
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your privacy and trust are fundamental to our service. Learn how we protect your information and uphold our commitment to confidentiality.
          </p>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-orange-600 mr-3" />
                <h2 className="font-serif text-2xl font-bold text-gray-900">
                  Data Protection
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We value your privacy and handle all personal information with the utmost care and confidentiality, ensuring your data is never shared without explicit consent.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="font-serif text-2xl font-bold text-gray-900">
                  Secure Communication
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                All communications, whether through our website, email, or WhatsApp, are treated as confidential and used solely for understanding your requirements.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Information Collection */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                  <p className="text-gray-600">
                    When you contact us through our website forms or WhatsApp, we collect your name, email address, phone number, and message to understand your requirements and communicate with you effectively.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Project Information</h4>
                  <p className="text-gray-600">
                    For translation and language training projects, we may collect additional information specific to your needs, such as document details, preferred languages, and project timelines.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-orange-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">To understand your translation and language training requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">To communicate with you about your projects and provide quotes</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">To deliver our translation and language services</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">To improve our services and user experience</span>
                </li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Data Sharing and Third Parties
              </h3>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <Eye className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">Our Commitment</span>
                </div>
                <p className="text-green-700 mt-2">
                  We do not share your personal data with third parties unless legally required or with your explicit consent.
                </p>
              </div>
              <p className="text-gray-600">
                Your information is used solely to understand your requirements and communicate with you. We maintain strict confidentiality for all client projects and personal information.
              </p>
            </div>

            {/* Data Retention */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Data Retention
              </h3>
              <p className="text-gray-600 mb-4">
                We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy. Project-related communications are kept for record-keeping purposes and may be retained for up to 7 years for business continuity.
              </p>
              <p className="text-gray-600">
                You have the right to request deletion of your personal information at any time, subject to legal obligations.
              </p>
            </div>

            {/* Terms of Service */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Terms of Service
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Agreement</h4>
                  <p className="text-gray-600">
                    By using our website and contacting us for services, you agree to our terms of service. Full terms and conditions will be provided upon project initiation and must be agreed upon before work begins.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Confidentiality</h4>
                  <p className="text-gray-600">
                    We maintain strict confidentiality for all client projects. All translation materials, communications, and project details are treated as confidential information.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                  <p className="text-gray-600">
                    We are committed to delivering high-quality translations and language services. Our work is guided by cultural sensitivity, linguistic accuracy, and professional standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact for Privacy Matters */}
            <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  Questions About Privacy?
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or how we handle your personal information, please don't hesitate to contact us.
              </p>
              <div className="flex items-center">
                <span className="text-gray-600 mr-4">Email:</span>
                <span className="font-medium text-gray-900">contact@ramaatranslationz.com</span>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                This Privacy Policy was last updated on January 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};