import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ServiceCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  language: string;
  bgColor?: string;
  textColor?: string;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  title,
  description,
  icon,
  to,
  language,
  bgColor = 'bg-white',
  textColor = 'text-gray-800'
}) => {
  return (
    <Card className={`${bgColor} shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start mb-4">
          <div className="mr-4 text-syria-green text-3xl">
            {icon}
          </div>
          <div>
            <h3 className={`font-bold text-xl mb-2 ${textColor}`}>{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
          </div>
        </div>
        
        <div className="mt-auto">
          <Link to={to}>
            <Button 
              variant="outline" 
              className="w-full justify-between group"
            >
              <span>{language === 'ar' ? 'استكشاف الخدمات' : 'Explore Services'}</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCategory;
