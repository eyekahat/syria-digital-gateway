import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceItemProps {
  title: string;
  icon: React.ReactNode;
  to: string;
  bgColor?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  icon,
  to,
  bgColor = 'bg-white'
}) => {
  return (
    <Link to={to}>
      <Card className={`${bgColor} hover:shadow-md transition-all duration-300 cursor-pointer h-full`}>
        <CardContent className="p-6 flex items-center">
          <div className="text-syria-green text-3xl mr-4">
            {icon}
          </div>
          <h3 className="font-medium">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceItem;
