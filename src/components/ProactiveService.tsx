import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProactiveServiceProps {
  title: string;
  icon: React.ReactNode;
  to: string;
  userType: string;
  language: string;
  bgColor?: string;
}

const ProactiveService: React.FC<ProactiveServiceProps> = ({
  title,
  icon,
  to,
  userType,
  language,
  bgColor = 'bg-blue-50'
}) => {
  return (
    <Link to={to}>
      <Card className={`${bgColor} hover:shadow-md transition-all duration-300 cursor-pointer h-full`}>
        <CardContent className="p-6 flex flex-col h-full">
          <div className="text-syria-green text-4xl mb-4">
            {icon}
          </div>
          <h3 className="font-bold text-lg mb-3">{title}</h3>
          <Badge variant="outline" className="w-fit mt-auto">
            {userType}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProactiveService;
