
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('ar');

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  useEffect(() => {
    // Update the HTML lang attribute
    document.documentElement.lang = language;
    // Set document direction
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div className={`min-h-screen flex flex-col font-arabic`}>
      <Navbar onToggleLanguage={toggleLanguage} language={language} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Layout;
