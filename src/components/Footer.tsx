
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-syria-dark-gray text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'ar' ? 'البوابة الرقمية السورية' : 'Syrian Digital Gateway'}
            </h3>
            <p className="text-gray-300 mb-4">
              {language === 'ar' 
                ? 'نحو سوريا رقمية موحدة، ذات خدمات حكومية مبسطة وآمنة للمواطنين.' 
                : 'Towards a unified digital Syria with simplified and secure government services for citizens.'}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="h-8 w-8 rounded overflow-hidden relative">
                <div className="absolute top-0 h-1/3 w-full bg-syria-red"></div>
                <div className="absolute top-1/3 h-1/3 w-full bg-white"></div>
                <div className="absolute top-2/3 h-1/3 w-full bg-syria-black"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-syria-green text-xs">★★</div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'ar' ? 'الرئيسية' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'ar' ? 'الخدمات الحكومية' : 'Government Services'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'ar' ? 'عن المشروع' : 'About the Project'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'ar' ? 'خدمات مهمة' : 'Key Services'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/documents" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'ar' ? 'إصدار الوثائق' : 'Document Issuance'}
                </Link>
              </li>
              <li>
                <Link to="/services/municipal" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'ar' ? 'خدمات البلدية' : 'Municipal Services'}
                </Link>
              </li>
              <li>
                <Link to="/services/judicial" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'ar' ? 'بوابة القضاء الرقمي' : 'Digital Judiciary Portal'}
                </Link>
              </li>
              <li>
                <Link to="/services/relief" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'ar' ? 'طلب إغاثة أو علاج' : 'Relief & Medical Requests'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                {language === 'ar' ? 'البريد الإلكتروني: info@syria-digital.gov.sy' : 'Email: info@syria-digital.gov.sy'}
              </li>
              <li>
                {language === 'ar' ? 'الهاتف: +963 11 123 4567' : 'Phone: +963 11 123 4567'}
              </li>
              <li>
                {language === 'ar' ? 'العنوان: دمشق، سوريا' : 'Address: Damascus, Syria'}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            {language === 'ar' 
              ? '© 2025 البوابة الرقمية السورية. جميع الحقوق محفوظة.' 
              : '© 2025 Syrian Digital Gateway. All rights reserved.'}
          </p>
          <p className="mt-2">
            {language === 'ar' 
              ? 'هذا نموذج أولي للعرض فقط' 
              : 'This is a prototype for demonstration purposes only'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
