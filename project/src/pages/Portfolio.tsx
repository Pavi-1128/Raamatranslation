import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video, Star, ArrowRight, } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const bookTranslations = [
    {
      title: 'The Great Rules of Grace',
      subtitle: 'Tamil to English Translation',
      description: 'Philosophical work beautifully translated preserving cultural nuances and spiritual depth.',
      category: 'Philosophy',
      languages: 'Tamil → English'
    },
    {
      title: 'Sri Durga Saptapati',
      subtitle: 'Hindi to Tamil Translation',
      description: 'Devotional literature translated with spiritual authenticity and cultural reverence.',
      category: 'Devotional Literature',
      languages: 'Hindi → Tamil'
    },
    {
      title: 'Manimekalai Prasuram Publications',
      subtitle: 'Chennai Based Publisher',
      description: 'Multiple book translations for prestigious Chennai publisher, spanning various genres.',
      category: 'Multiple Works',
      languages: 'Various Language Pairs'
    },
    {
      title: 'Sadguru Sri Reddiapatti Swamigal\'s Works',
      subtitle: 'Spiritual Literature',
      description: 'Blessed presentations of spiritual teachings translated with devotion and precision.',
      category: 'Spiritual Literature',
      languages: 'Hindi → Tamil'
    },
    {
      title: 'Vedic Astrology by Maharshi Institute',
      subtitle: 'Educational Publication',
      description: 'Complex astrological concepts translated while maintaining technical accuracy.',
      category: 'Educational',
      languages: 'English → Hindi'
    },
    {
      title: 'Jharkand Short Story: The True Parent, The True Gardener',
      subtitle: 'Regional Literature',
      description: 'Regional story translated to preserve cultural authenticity and emotional depth.',
      category: 'Regional Literature',
      languages: 'Hindi → English'
    }
  ];

  const specialProjects = [
    {
      title: 'Web Series: Aanda Kai (The Hand That Ruled)',
      description: 'A true story of V. Prabhakaran brought to life on screen. Historical epic written & directed by Vinson Rajendran.',
      type: 'Script Translation',
      impact: 'Historical Drama'
    },
    {
      title: 'Do Business Like a Monster',
      description: 'Insightful book review exploring bold business thinking and entrepreneurial strategies.',
      type: 'Book Review',
      impact: 'Business Literature'
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our recent translations, cultural projects, and literary works that have bridged languages and connected cultures.
          </p>
        </div>
      </section>

      {/* Book Translations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                Book Translations
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our carefully curated collection of book translations spans multiple genres and languages, each handled with cultural sensitivity and linguistic precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookTranslations.map((book, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-6 border border-orange-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {book.category}
                  </div>
                  <Star className="h-5 w-5 text-orange-600" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                  {book.title}
                </h3>
                
                <p className="text-orange-600 font-medium text-sm mb-3">
                  {book.subtitle}
                </p>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {book.description}
                </p>
                
                <div className="bg-white rounded-lg p-3 border-l-4 border-orange-600">
                  <p className="text-xs text-gray-600 font-medium">
                    {book.languages}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Projects */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <Video className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                Special Projects
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond traditional translation, we've contributed to unique projects that showcase the versatility of our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.impact}
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Impact & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our work has touched lives, preserved cultures, and opened new avenues for cross-cultural understanding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Books Translated</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">4</h3>
              <p className="text-gray-600">Languages Mastered</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Add Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something meaningful together. Your story deserves to be told across cultures.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};