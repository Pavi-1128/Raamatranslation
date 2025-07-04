import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  MessageSquare, 
  BookOpen, 
  Palette, 
  Edit3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const Services: React.FC = () => {
  const translationServices = [
    'Market Research Projects',
    'Book Translation (fiction, biographies, devotional, management studies, astrology)',
    'Simultaneous Translation (expert-level for live meetings)',
    'Consecutive Translation',
    'Transcription & Oral Transcription',
    'Report Writing & Content Analysis'
  ];

  const languages = [
    'Spoken Hindi',
    'Spoken English', 
    'Spoken Tamil',
    'Spoken Telugu'
  ];

  const publicationPairs = [
    'Hindi ⇄ Tamil',
    'Hindi ⇄ English',
    'English ⇄ Telugu',
    'Telugu ⇄ English',
    'English ⇄ Tamil'
  ];

  const otherServices = [
    'Translation Coaching',
    'Puranic Content Consulting',
    'Proofreading & Copy Editing',
    'Book Reviews',
    'Speech & Case Study Writing'
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Language Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive translation, language training, and cultural consulting services that bridge worlds with precision and heart.
          </p>
        </div>
      </section>

      {/* Translation Services */}
      <section id="translation" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                  Translation Services
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                We deliver translation that captures both meaning and soul. Every project is approached with deep respect for context and culture.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {translationServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Our Translation Philosophy
              </h3>
              <blockquote className="font-serif text-lg italic text-gray-700 mb-4">
                "Translation is done with deep respect for context & culture."
              </blockquote>
              <p className="text-gray-600 mb-6">
                We don't just translate words; we translate meaning, emotion, and cultural nuance to ensure your message resonates authentically with your target audience.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-600">
                <p className="font-medium text-gray-900">
                  Expert-level simultaneous translation available for live meetings and conferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Training */}
      <section id="language-training" className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <MessageSquare className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-gray-900">
                  Language Training
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Whether you're preparing for travel, a new business venture, or personal growth — our language classes adapt to your unique needs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-orange-600 w-2 h-2 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{language}</span>
                  </div>
                ))}
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📲 WhatsApp-based Classes</h4>
                <p className="text-sm text-gray-600">
                  Flexible recorded classes for general conversations — learn at your own pace.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Personalized Learning Modules
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">For Business Professionals</h4>
                  <p className="text-gray-600 text-sm">
                    A rice merchant wanting to connect with a Punjabi counterpart, or entrepreneurs expanding to new markets.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">For Career Growth</h4>
                  <p className="text-gray-600 text-sm">
                    Young professionals needing confidence in English or Hindi for workplace communication.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">For Travelers</h4>
                  <p className="text-gray-600 text-sm">
                    Essential conversational skills for meaningful cultural exchanges during travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Publication */}
      <section id="book-publication" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                Book Publication Support
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in translating and preparing books for publication. Each manuscript is handled with meticulous cultural care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicationPairs.map((pair, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-6 text-center border border-orange-100">
                <div className="font-serif text-xl font-semibold text-gray-900 mb-2">
                  {pair}
                </div>
                <div className="text-sm text-gray-600">
                  Professional translation services
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-orange-100 to-blue-100 rounded-lg p-8 text-center">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              Cultural Fidelity Guaranteed
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We don't just translate text — we preserve the cultural essence, tone, and emotional depth that makes your work meaningful to readers across languages.
            </p>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Edit3 className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-gray-900">
                  Other Services
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {otherServices.map((service, index) => (
                  <div key={index} className="flex items-start bg-white rounded-lg p-4">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Palette className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-gray-900">
                  Pine Art & Storytelling
                </h2>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-600 w-2 h-2 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Freestyle Sketching</h4>
                      <p className="text-gray-600 text-sm">
                        Artistic expression through detailed sketches and visual storytelling.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-600 w-2 h-2 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Puranic & World Literature</h4>
                      <p className="text-gray-600 text-sm">
                        Storytelling from the Puranas and world literature — researched and retold to inspire new audiences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 italic">
                    "Research done for unique storytelling experiences that connect ancient wisdom with modern understanding."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tell us your needs and let's create something beautiful together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};