
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  color?: 'red' | 'green' | 'default';
  language: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  to, 
  color = 'default',
  language
}) => {
  const colorClasses = {
    red: 'border-t-4 border-t-syria-red',
    green: 'border-t-4 border-t-syria-green',
    default: ''
  };

  return (
    <Link 
      to={to}
      className={cn(
        "bg-white rounded-lg shadow-md p-6 flex flex-col h-full card-hover",
        colorClasses[color]
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-2xl text-gray-700">
          {icon}
        </div>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">
          {language === 'ar' ? 'خدمة حكومية' : 'Gov Service'}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      <div className="text-syria-red text-sm font-medium mt-auto">
        {language === 'ar' ? 'استعرض الخدمة ←' : 'View Service →'}
      </div>
    </Link>
  );
};

export default ServiceCard;
