
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  language: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon,
  trend = 'neutral',
  language
}) => {
  // Trend indicator colors
  const trendColors = {
    up: 'text-syria-green',
    down: 'text-gray-600',
    neutral: 'text-gray-500'
  };

  // Trend icons
  const trendIcons = {
    up: '↑',
    down: '↓',
    neutral: '•'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="rounded-full bg-muted p-2">
          {icon}
        </div>
        <div className={`text-sm font-medium ${trendColors[trend]} flex items-center`}>
          <span>{trendIcons[trend]}</span>
          <span className="mr-1">
            {trend === 'up' 
              ? (language === 'ar' ? 'ارتفاع' : 'Increasing') 
              : trend === 'down' 
                ? (language === 'ar' ? 'انخفاض' : 'Decreasing')
                : (language === 'ar' ? 'ثابت' : 'Stable')}
          </span>
        </div>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-gray-500 text-sm">{title}</div>
    </div>
  );
};

export default StatCard;
