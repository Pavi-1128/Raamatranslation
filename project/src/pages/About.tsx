import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Star, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Homemaker to Cultural Bridge Builder
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A journey of transformation, learning, and connecting cultures through the power of language
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Founder's Story
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  From homemaker to market researcher, and finally a passionate translator — my journey began out of necessity and bloomed into a lifelong calling.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I started by selling Time-Life books, learning the art of studying people and understanding needs. This led me into Market Research, where I rose to moderate focus group discussions, decoding the subtleties of human behavior.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  It was here I discovered the power of translation — not just of words, but of contexts, emotions, and entire cultures.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg p-8 text-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-12 w-12 text-orange-600" />
              </div>
              <blockquote className="font-serif text-xl font-medium text-gray-900 mb-4 italic">
                "Translation is the art of building bridges between cultures. We do this with heart and mathematical precision."
              </blockquote>
              <p className="text-gray-600 text-sm">— Founder, Ramaatranslationz</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Vision */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Philosophy & Vision
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Translation is the art of building bridges. Being bilingual or multilingual isn't just a skill, it's a doorway to empathy, understanding, and unity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a translator and now a coach, I see every project as a humanitarian service — one that requires compassion and mathematical precision.
            </p>
          </div>
        </div>
      </section>

      {/* Academic & Cultural Pursuits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Academic & Cultural Pursuits
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                    <Star className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Academic Excellence</h3>
                    <p className="text-gray-600">
                      Graduated from Stella Maris College, Madras with a BA in Economics, earning the College Medal.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                    <BookOpen className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                    <p className="text-gray-600">
                      Postgraduate degrees in Philosophy and Sociology, alongside studies in mental health, gerontology, and Praveen Uttarardh in Hindi.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                    <Heart className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cultural Studies</h3>
                    <p className="text-gray-600">
                      Deep studies in Saiva Siddhanta, Vedanta, Kautilya's Arthashastra, the Puranas, Upanishads, and Fine Art sketching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                A Lifelong Student
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every qualification and study has been a stepping stone towards better understanding the nuances of human communication and cultural expression.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-600">
                <p className="font-medium text-gray-900 italic">
                  "I'm a lifelong student of culture and language — each project teaches me something new about the beautiful complexity of human expression."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message to Young Women */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              A Message to Young Women
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              As a traditional feminist, inspired by independent thinkers like Seetha Devi, Amba, and Devayani, I urge young women to explore the world of translation and interpretation.
            </p>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              It's a profession that brings profound fulfillment — far beyond commerce. It's about empowerment, understanding, and building bridges between worlds.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in collaborating or learning from our programs? Let's connect and explore how we can work together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200"
          >
            Let's Connect
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};