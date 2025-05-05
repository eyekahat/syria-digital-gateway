
import React from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import StatCard from '@/components/StatCard';
import CitizenCard from '@/components/CitizenCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Building, 
  FileText, 
  Users, 
  Activity, 
  HeartPulse, 
  Globe, 
  Briefcase, 
  BookOpen, 
  GraduationCap, 
  Building2, 
  Phone,
  User,
  Send
} from 'lucide-react';

const Index = () => {
  const [language, setLanguage] = React.useState<string>('ar');

  React.useEffect(() => {
    // Listen for language changes from the Layout component
    const handleLanguageChange = () => {
      setLanguage(document.documentElement.lang);
    };

    // Create a mutation observer to watch for attribute changes on html element
    const observer = new MutationObserver(handleLanguageChange);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar'
                ? 'البوابة الرقمية السورية'
                : 'Syrian Digital Gateway'}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {language === 'ar'
                ? 'رؤيتنا لسوريا رقمية موحدة، ذات خدمات حكومية مبسطة وآمنة، تخدم المواطنين أينما كانوا.'
                : 'Our vision for a unified digital Syria with simplified and secure government services, serving citizens wherever they are.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-syria-red hover:bg-syria-red/90 text-lg px-6 py-6">
                {language === 'ar' ? 'تصفح الخدمات الحكومية' : 'Browse Government Services'}
              </Button>
              <Button variant="outline" className="text-lg px-6 py-6">
                {language === 'ar' ? 'عن المشروع' : 'About the Project'}
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-syria-red/5 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-syria-green/5 skew-x-12 transform origin-bottom-left"></div>
      </section>

      {/* Live Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === 'ar' ? 'إحصائيات مباشرة' : 'Live Statistics'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title={language === 'ar' ? 'عدد السكان' : 'Population'} 
              value="21,500,000" 
              icon={<Users className="text-syria-red" size={20} />} 
              trend="up"
              language={language}
            />
            <StatCard 
              title={language === 'ar' ? 'المباني المدمرة' : 'Destroyed Buildings'} 
              value="185,000" 
              icon={<Building className="text-gray-600" size={20} />} 
              trend="neutral"
              language={language}
            />
            <StatCard 
              title={language === 'ar' ? 'عدد الطلاب' : 'Students'} 
              value="3,200,000" 
              icon={<BookOpen className="text-syria-green" size={20} />} 
              trend="up"
              language={language}
            />
            <StatCard 
              title={language === 'ar' ? 'العائلات المسجلة بالإغاثة' : 'Relief-Registered Families'} 
              value="1,800,000" 
              icon={<HeartPulse className="text-syria-red" size={20} />} 
              trend="down"
              language={language}
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              {language === 'ar' 
                ? 'البيانات المعروضة هي لأغراض العرض فقط' 
                : 'Data shown is for demonstration purposes only'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-center">
            {language === 'ar' ? 'الخدمات الحكومية' : 'Government Services'}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'مجموعة متكاملة من الخدمات الحكومية الرقمية لتلبية احتياجات المواطنين في مختلف المجالات'
              : 'A comprehensive set of digital government services to meet citizens\' needs in various areas'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ServiceCard
              title={language === 'ar' ? 'الخدمات الحكومية' : 'Government Services'}
              description={language === 'ar' 
                ? 'إصدار الوثائق الرسمية والمستندات الحكومية بشكل إلكتروني' 
                : 'Electronic issuance of official documents and government papers'}
              icon={<FileText />}
              to="/services/documents"
              color="red"
              language={language}
            />
            
            <ServiceCard
              title={language === 'ar' ? 'إحصائيات الدولة' : 'State Statistics'}
              description={language === 'ar' 
                ? 'بيانات وإحصائيات حديثة عن مختلف جوانب الدولة والسكان' 
                : 'Recent data and statistics about various aspects of the state and population'}
              icon={<Activity />}
              to="/services/statistics"
              language={language}
            />
            
            <ServiceCard
              title={language === 'ar' ? 'قاعدة بيانات السكان' : 'Population Database'}
              description={language === 'ar' 
                ? 'الوصول الآمن لبيانات التعداد السكاني والسجل المدني' 
                : 'Secure access to census data and civil registry'}
              icon={<Users />}
              to="/services/population"
              language={language}
            />
            
            <ServiceCard
              title={language === 'ar' ? 'خدمات الطوارئ' : 'Emergency Services'}
              description={language === 'ar' 
                ? 'طلب خدمات الطوارئ والمساعدة الفورية في الحالات الحرجة' 
                : 'Request emergency services and immediate assistance in critical situations'}
              icon={<Activity />}
              to="/services/emergency"
              color="green"
              language={language}
            />
            
            <ServiceCard
              title={language === 'ar' ? 'الوضع الصحي' : 'Health Status'}
              description={language === 'ar' 
                ? 'معلومات عن الخدمات الصحية وإدارة البيانات الطبية الشخصية' 
                : 'Information about health services and personal medical data management'}
              icon={<HeartPulse />}
              to="/services/health"
              language={language}
            />
            
            <ServiceCard
              title={language === 'ar' ? 'البنية التحتية' : 'Infrastructure'}
              description={language === 'ar' 
                ? 'معلومات عن مشاريع البنية التحتية وإعادة الإعمار' 
                : 'Information about infrastructure projects and reconstruction'}
              icon={<Building2 />}
              to="/services/infrastructure"
              language={language}
            />
            
            <ServiceCard
              title={language === 'ar' ? 'المغتربون' : 'Expatriates'}
              description={language === 'ar' 
                ? 'خدمات للسوريين في الخارج وتسهيل التواصل مع الوطن' 
                : 'Services for Syrians abroad and facilitating communication with the homeland'}
              icon={<Globe />}
              to="/services/expatriates"
              language={language}
            />
            
            <ServiceCard
              title={language === 'ar' ? 'التعليم' : 'Education'}
              description={language === 'ar' 
                ? 'معلومات عن المؤسسات التعليمية والخدمات التعليمية الإلكترونية' 
                : 'Information about educational institutions and electronic educational services'}
              icon={<GraduationCap />}
              to="/services/education"
              language={language}
            />
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" className="mx-auto">
              {language === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
            </Button>
          </div>
        </div>
      </section>

      {/* Digital ID Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'البطاقة الوطنية الرقمية' : 'Digital National ID Card'}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === 'ar'
                  ? 'مشروع البطاقة الوطنية الرقمية هو جزء أساسي من التحول الرقمي، حيث يمكن للمواطنين الوصول إلى جميع الخدمات الحكومية عبر هوية رقمية آمنة وموثوقة.'
                  : 'The Digital National ID Card project is a fundamental part of digital transformation, allowing citizens to access all government services through a secure and reliable digital identity.'}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-syria-red/10 text-syria-red p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>
                    {language === 'ar' 
                      ? 'هوية رقمية آمنة وموثقة لكل مواطن سوري' 
                      : 'Secure and authenticated digital identity for every Syrian citizen'}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-syria-red/10 text-syria-red p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>
                    {language === 'ar' 
                      ? 'وصول سريع لجميع الخدمات الحكومية' 
                      : 'Quick access to all government services'}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-syria-red/10 text-syria-red p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>
                    {language === 'ar' 
                      ? 'تسهيل تقديم المساعدات وتوزيع الموارد' 
                      : 'Facilitating aid provision and resource distribution'}
                  </span>
                </li>
              </ul>
              <Button className="bg-syria-red hover:bg-syria-red/90">
                {language === 'ar' ? 'كيفية الحصول على البطاقة' : 'How to Get Your Card'}
              </Button>
            </div>
            
            <div className="md:w-1/2">
              <CitizenCard language={language} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'ar'
                ? 'نرحب بأسئلتكم واقتراحاتكم حول البوابة الرقمية السورية ومشروع التحول الرقمي'
                : 'We welcome your questions and suggestions about the Syrian Digital Gateway and the digital transformation project'}
            </p>
            
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'ar' ? 'الاسم' : 'Name'}
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input 
                    type="email" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'ar' ? 'الموضوع' : 'Subject'}
                </label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'ar' ? 'الرسالة' : 'Message'}
                </label>
                <textarea 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 h-32"
                  placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                ></textarea>
              </div>
              
              <Button className="bg-syria-red hover:bg-syria-red/90 w-full">
                <Send size={16} className="mr-2" />
                {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
