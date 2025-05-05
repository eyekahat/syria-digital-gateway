
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Globe,
  Menu,
  X,
  User,
  Bell,
  Search
} from 'lucide-react';

interface NavbarProps {
  onToggleLanguage: () => void;
  language: string;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleLanguage, language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Notification bar */}
      <div className="bg-syria-red text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell size={16} />
            <p>آخر الأخبار: تم إطلاق البوابة الرقمية السورية كنموذج تجريبي</p>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/10"
            onClick={onToggleLanguage}
          >
            <Globe size={16} className="mr-2" />
            {language === 'ar' ? 'English' : 'العربية'}
          </Button>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded overflow-hidden relative">
                <div className="absolute top-0 h-1/3 w-full bg-syria-red"></div>
                <div className="absolute top-1/3 h-1/3 w-full bg-white"></div>
                <div className="absolute top-2/3 h-1/3 w-full bg-syria-black"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-syria-green text-xs">★★</div>
              </div>
              <div className="font-bold text-lg">
                {language === 'ar' ? 'البوابة الرقمية السورية' : 'Syrian Digital Gateway'}
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium hover:text-syria-red transition-colors">
              {language === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <Link to="/services" className="font-medium hover:text-syria-red transition-colors">
              {language === 'ar' ? 'الخدمات' : 'Services'}
            </Link>
            <Link to="/about" className="font-medium hover:text-syria-red transition-colors">
              {language === 'ar' ? 'عن المشروع' : 'About'}
            </Link>
            <Link to="/investors" className="font-medium hover:text-syria-red transition-colors">
              {language === 'ar' ? 'للمستثمرين' : 'For Investors'}
            </Link>
            <Link to="/diaspora" className="font-medium hover:text-syria-red transition-colors">
              {language === 'ar' ? 'المغتربون' : 'Diaspora'}
            </Link>
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Search size={16} className="mr-2" />
              {language === 'ar' ? 'بحث' : 'Search'}
            </Button>
            <Button className="bg-syria-red hover:bg-syria-red/90">
              <User size={16} className="mr-2" />
              {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-medium py-2 hover:text-syria-red transition-colors" onClick={toggleMenu}>
              {language === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <Link to="/services" className="font-medium py-2 hover:text-syria-red transition-colors" onClick={toggleMenu}>
              {language === 'ar' ? 'الخدمات' : 'Services'}
            </Link>
            <Link to="/about" className="font-medium py-2 hover:text-syria-red transition-colors" onClick={toggleMenu}>
              {language === 'ar' ? 'عن المشروع' : 'About'}
            </Link>
            <Link to="/investors" className="font-medium py-2 hover:text-syria-red transition-colors" onClick={toggleMenu}>
              {language === 'ar' ? 'للمستثمرين' : 'For Investors'}
            </Link>
            <Link to="/diaspora" className="font-medium py-2 hover:text-syria-red transition-colors" onClick={toggleMenu}>
              {language === 'ar' ? 'المغتربون' : 'Diaspora'}
            </Link>
            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Search size={16} className="mr-2" />
                {language === 'ar' ? 'بحث' : 'Search'}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
