import React, { useState } from 'react';
import { Mail, Phone, MessageCircle,  Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have a translation project, need personalized language training, or want to publish your book with cultural fidelity? We're here to help bridge cultures together.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@ramaatranslationz.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Quick response via WhatsApp</p>
                    <a
                      href="https://wa.me/+919876543210"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat Now
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                  Why Choose Ramaatranslationz?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Cultural authenticity in every translation
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Personalized approach to language training
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Deep respect for context and meaning
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Years of experience across multiple languages
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="translation">Translation</option>
                    <option value="language-training">Language Training</option>
                    <option value="book-publication">Book Publication</option>
                    <option value="storytelling">Storytelling & Art</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              Quick Response Guarantee
            </h2>
            <p className="text-gray-600 mb-6">
              We understand that your projects are time-sensitive. We typically respond to all inquiries within 24 hours, and often much sooner via WhatsApp.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-600 mb-2">{'< 24h'}</div>
                <p className="text-gray-600">Email Response</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600 mb-2">{'< 2h'}</div>
                <p className="text-gray-600">WhatsApp Response</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600 mb-2">Same Day</div>
                <p className="text-gray-600">Project Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};