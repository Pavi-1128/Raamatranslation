import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { BookOpen, MessageSquare, Globe, Palette, ArrowRight,  } from 'lucide-react';

export const Home: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Translation',
      description: 'From market research to complex simultaneous interpretations, we handle projects with exceptional accuracy and cultural insight.',
      link: '/services#translation'
    },
    {
      icon: MessageSquare,
      title: 'Language Training',
      description: 'Spoken Hindi, English, Tamil, or Telugu — tailored classes to meet your personal or professional goals.',
      link: '/services#language-training'
    },
    {
      icon: BookOpen,
      title: 'Book Publication',
      description: 'Trusted partner for translating books across Hindi, Tamil, Telugu, and English, preserving the true spirit of your work.',
      link: '/services#book-publication'
    },
    {
      icon: Palette,
      title: 'Storytelling & Art',
      description: 'Freestyle sketches and timeless tales from the Puranas & world literature, researched and retold for today.',
      link: '/services#storytelling-art'
    }
  ];

  const featuredPortfolio = [
    {
      title: 'The Great Rules of Grace',
      subtitle: 'Tamil to English Translation',
      description: 'Philosophical work beautifully translated preserving cultural nuances'
    },
    {
      title: 'Sri Durga Saptapati',
      subtitle: 'Hindi to Tamil Translation',
      description: 'Devotional literature translated with spiritual authenticity'
    },
    {
      title: 'Web Series: Aanda Kai',
      subtitle: 'Historical Epic Script',
      description: 'Historical epic on V. Prabhakaran brought to life on screen'
    },
    {
      title: 'Manimekalai Prasuram Works',
      subtitle: 'Chennai Publications',
      description: 'Multiple book translations for prestigious Chennai publisher'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Snapshot */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Connecting Cultures Through Language
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Ramaatranslationz, we believe translation is not merely about words — it's about connecting people, ideas, and cultures. Founded on a journey that spans market research, book translations, and community upliftment, we bring precision, compassion, and deep cultural respect into every service.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services at a Glance */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive language services that bridge cultures with precision and heart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our recent translations and cultural projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredPortfolio.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-6 border border-orange-100">
                <div className="flex items-start mb-4">
                  <div className="bg-orange-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-3 border-2 border-orange-600 text-orange-600 font-medium rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Callout */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Looking for a trusted translation partner?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's have a conversation about your project and how we can help bridge cultures together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};