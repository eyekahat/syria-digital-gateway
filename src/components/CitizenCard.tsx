
import React from 'react';
import { User } from 'lucide-react';

interface CitizenCardProps {
  language: string;
}

const CitizenCard: React.FC<CitizenCardProps> = ({ language }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
      {/* Header */}
      <div className="bg-syria-red text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded overflow-hidden relative">
            <div className="absolute top-0 h-1/3 w-full bg-syria-red"></div>
            <div className="absolute top-1/3 h-1/3 w-full bg-white"></div>
            <div className="absolute top-2/3 h-1/3 w-full bg-syria-black"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-syria-green text-[8px]">★★</div>
          </div>
          <h3 className="font-bold text-sm">
            {language === 'ar' ? 'بطاقة المواطن الرقمية' : 'Digital Citizen Card'}
          </h3>
        </div>
        <div className="text-xs px-2 py-1 bg-white/20 rounded">
          {language === 'ar' ? 'نموذج' : 'SAMPLE'}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-5">
        <div className="flex gap-4">
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
            <User size={64} className="text-gray-400" />
          </div>
          
          <div className="flex-1">
            <h4 className="font-bold text-lg">
              {language === 'ar' ? 'أحمد محمد السوري' : 'Ahmad Mohammad Al-Souri'}
            </h4>
            
            <div className="mt-2 space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  {language === 'ar' ? 'الرقم الوطني:' : 'National ID:'}
                </span>
                <span className="font-medium">104982367</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">
                  {language === 'ar' ? 'تاريخ الميلاد:' : 'Date of Birth:'}
                </span>
                <span className="font-medium">15/07/1985</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">
                  {language === 'ar' ? 'عدد أفراد الأسرة:' : 'Family Members:'}
                </span>
                <span className="font-medium">4</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-4 border-t pt-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <div className="text-gray-500 mb-1">
                {language === 'ar' ? 'العنوان:' : 'Address:'}
              </div>
              <div className="font-medium">
                {language === 'ar' ? 'دمشق، المزة، شارع فلسطين' : 'Damascus, Mezzeh, Palestine St.'}
              </div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">
                {language === 'ar' ? 'الحالة الصحية:' : 'Health Status:'}
              </div>
              <div className="font-medium text-green-600">
                {language === 'ar' ? 'سليم' : 'Healthy'}
              </div>
            </div>
          </div>
        </div>
        
        {/* QR Code */}
        <div className="mt-4 flex justify-center">
          <div className="h-16 w-16 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
            {language === 'ar' ? 'رمز QR' : 'QR Code'}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-4 text-center text-xs text-gray-500">
          {language === 'ar' 
            ? 'هذه بطاقة تعريفية نموذجية للعرض فقط' 
            : 'This is a sample identification card for demonstration purposes only'}
        </div>
      </div>
    </div>
  );
};

export default CitizenCard;
