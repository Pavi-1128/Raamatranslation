import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-orange-100 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-orange-600" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-gray-900 ml-3">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-orange-600 mr-2">•</span>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};