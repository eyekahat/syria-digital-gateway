
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeContext from './ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('ar');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Update the HTML lang attribute
    document.documentElement.lang = language;
    // Set document direction
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    // Add dark mode class if needed
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [language, theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen flex flex-col font-arabic ${theme === 'dark' ? 'dark' : ''}`}>
        <Navbar onToggleLanguage={toggleLanguage} language={language} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer language={language} />
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
