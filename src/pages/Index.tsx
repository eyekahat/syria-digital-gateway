import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import StatCard from '@/components/StatCard';
import CitizenCard from '@/components/CitizenCard';
import ImageSlider from '@/components/ImageSlider';
import SyrianFlag from '@/components/SyrianFlag';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  FileText, 
  Users, 
  Activity, 
  HeartPulse, 
  Globe, 
  GraduationCap, 
  Building2, 
  Phone,
  User,
  Send,
  Lock,
  CreditCard,
  Map,
  BookOpen,
  Gavel,
  Building,
  Hospital,
  Database
} from 'lucide-react';

const Index = () => {
  const [language, setLanguage] = useState<string>('ar');

  useEffect(() => {
    // Listen for language changes from the Layout component
    const handleLanguageChange = () => {
      setLanguage(document.documentElement.lang);
    };

    // Create a mutation observer to watch for attribute changes on html element
    const observer = new MutationObserver(handleLanguageChange);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Array of landmark images uploaded
  const landmarkImages = [
    '/lovable-uploads/23bd64ef-4550-44b2-90d9-b804b33d5897.png',  // Aleppo citadel
    '/lovable-uploads/bccce605-4b9a-475c-90d1-3215543bf346.png',  // Palmyra
    '/lovable-uploads/e9b8bc33-3cab-4ca9-bc45-1ef5f6af4ec3.png',  // Bosra Theater
    '/lovable-uploads/7f565d08-f9cc-4c07-9f3c-23425ebdeb5b.png',  // Aleppo citadel night
    '/lovable-uploads/632f3f5e-92d3-466b-8beb-bb5af2df0bce.png',  // Hama wall
    '/lovable-uploads/ccb1540e-35fa-42ee-88bc-e6cf7ee8e8b2.png',  // Homs lake
    '/lovable-uploads/a4938aa9-ff52-4045-bc4b-c8f304a2f3e2.png',  // Lattakia beach
    '/lovable-uploads/ab957761-b4d2-4e86-b472-0c7688fb7b8d.png',  // Tartous corniche
    '/lovable-uploads/39d99eef-010f-4649-b95e-eb4b4c1fe6c3.png',  // Hama clock tower
    '/lovable-uploads/f078a01e-c3fc-4e12-a01a-9f729c042542.png',  // Hama waterwheels
    '/lovable-uploads/20ac69b0-1d02-4e5d-a7bb-1db4217e446a.png',  // Bosra theater
    '/lovable-uploads/e38bc992-1084-4622-aeb5-4dc564f3de4e.png',  // Umayyad mosque
    '/lovable-uploads/344aa62b-108f-4515-956a-f31e3729c1ef.png',  // Aleppo citadel gate
    '/lovable-uploads/9a0fbebe-b141-4b81-851d-f3a51d207c2b.png',  // Deir ez-Zor bridge
    '/lovable-uploads/c8981cb3-6f0c-4e46-a6ce-6a2c177fdb9b.png',  // Palmyra ruins - new image
    '/lovable-uploads/1b903316-d238-45c9-9762-48e6771fbb6c.png',  // Coastal landscape - new image
  ];

  return (
    <Layout>
      {/* Hero Section with Image Slider - without flag overlay */}
      <section className="relative overflow-hidden">
        <ImageSlider images={landmarkImages} height="h-[70vh]" language={language} />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {language === 'ar'
                  ? 'البوابة الرقمية السورية'
                  : 'Syrian Digital Gateway'}
              </h1>
              <p className="text-xl text-white mb-8">
                {language === 'ar'
                  ? 'رؤيتنا لسوريا رقمية موحدة، ذات خدمات حكومية مبسطة وآمنة، تخدم المواطنين أينما كانوا.'
                  : 'Our vision for a unified digital Syria with simplified and secure government services, serving citizens wherever they are.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-syria-green hover:bg-syria-green/90 text-lg px-6 py-6">
                  {language === 'ar' ? 'تصفح الخدمات الحكومية' : 'Browse Government Services'}
                </Button>
                <Button variant="outline" className="text-lg px-6 py-6 text-white border-white hover:bg-white/20">
                  {language === 'ar' ? 'عن المشروع' : 'About the Project'}
                </Button>
              </div>
            </div>
          </div>
        </div>
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
              icon={<Users className="text-syria-green" size={20} />} 
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
              icon={<HeartPulse className="text-gray-600" size={20} />} 
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
              color="green"
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
              icon={<Database />}
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
              icon={<Hospital />}
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

            <ServiceCard
              title={language === 'ar' ? 'القضاء' : 'Justice'}
              description={language === 'ar' 
                ? 'معلومات عن القضايا، تقديم الشكاوى، متابعة حالة الدعوى' 
                : 'Case information, filing complaints, case status tracking'}
              icon={<Gavel />}
              to="/services/justice"
              language={language}
            />

            <ServiceCard
              title={language === 'ar' ? 'الدعم الإغاثي' : 'Relief Support'}
              description={language === 'ar' 
                ? 'تقديم طلبات المساعدة ومتابعة توزيع المساعدات الإنسانية' 
                : 'Submit aid requests and track humanitarian assistance distribution'}
              icon={<HeartPulse />}
              to="/services/relief"
              language={language}
            />

            <ServiceCard
              title={language === 'ar' ? 'العقارات' : 'Real Estate'}
              description={language === 'ar' 
                ? 'استعلام عن الملكيات العقارية وتوثيق عقود الإيجار' 
                : 'Property ownership inquiry and rental contract documentation'}
              icon={<Building />}
              to="/services/realestate"
              language={language}
            />

            <ServiceCard
              title={language === 'ar' ? 'المالية والضرائب' : 'Finance & Taxes'}
              description={language === 'ar' 
                ? 'عرض ودفع الضرائب، كشف المستحقات المالية على المواطن' 
                : 'View and pay taxes, check citizen financial obligations'}
              icon={<CreditCard />}
              to="/services/finance"
              color="green"
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

      {/* Digital Single Sign-On Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'نظام الدخول الموحد' : 'Single Sign-On System'}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === 'ar'
                  ? 'نظام الدخول الموحد يمكن المواطنين من الوصول إلى جميع الخدمات الحكومية باستخدام هوية رقمية موحدة، مؤمنة بتقنيات التشفير المتقدمة وتحقق متعدد العوامل.'
                  : 'The Single Sign-On system allows citizens to access all government services using a unified digital identity, secured with advanced encryption technologies and multi-factor authentication.'}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-syria-green/10 text-syria-green p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>
                    {language === 'ar' 
                      ? 'تسجيل دخول آمن باستخدام الرقم الوطني' 
                      : 'Secure login using national ID number'}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-syria-green/10 text-syria-green p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>
                    {language === 'ar' 
                      ? 'تحقق ثنائي باستخدام رسائل SMS' 
                      : 'Two-factor authentication using SMS'}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-syria-green/10 text-syria-green p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>
                    {language === 'ar' 
                      ? 'تتبع نشاط الحساب والتحذير من المحاولات المشبوهة' 
                      : 'Account activity tracking and suspicious attempts alerting'}
                  </span>
                </li>
              </ul>
              <Button className="bg-syria-green hover:bg-syria-green/90">
                <Lock className="mr-2 h-4 w-4" />
                {language === 'ar' ? 'تسجيل الدخول الموحد' : 'Single Sign-On'}
              </Button>
            </div>
            
            <div className="md:w-1/2">
              <CitizenCard language={language} />
            </div>
          </div>
        </div>
      </section>

      {/* X-Road Data Exchange Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'منصة تبادل البيانات X-Road' : 'X-Road Data Exchange Platform'}
            </h2>
            <p className="text-gray-600">
              {language === 'ar'
                ? 'البنية التحتية الآمنة التي تربط جميع الخدمات الحكومية المختلفة، وتسمح بتبادل البيانات بشكل آمن وموثوق وفعال.'
                : 'The secure infrastructure that connects all different government services, allowing data exchange in a secure, reliable, and efficient manner.'}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-10/12 lg:w-8/12">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                      <Database className="mx-auto mb-2 text-syria-green" />
                      <p className="text-sm">
                        {language === 'ar' ? 'وزارة الداخلية' : 'Ministry of Interior'}
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                      <Hospital className="mx-auto mb-2 text-syria-green" />
                      <p className="text-sm">
                        {language === 'ar' ? 'وزارة الصحة' : 'Ministry of Health'}
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                      <GraduationCap className="mx-auto mb-2 text-syria-green" />
                      <p className="text-sm">
                        {language === 'ar' ? 'وزارة التعليم' : 'Ministry of Education'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center mb-6">
                    <div className="w-full h-4 border-t-2 border-b-2 border-dashed border-syria-green relative">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-syria-green text-white p-3 rounded-full">
                        <Database className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                      <User className="mx-auto mb-2 text-syria-green" />
                      <p className="text-sm">
                        {language === 'ar' ? 'السجل المدني' : 'Civil Registry'}
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                      <CreditCard className="mx-auto mb-2 text-syria-green" />
                      <p className="text-sm">
                        {language === 'ar' ? 'وزارة المالية' : 'Ministry of Finance'}
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                      <Map className="mx-auto mb-2 text-syria-green" />
                      <p className="text-sm">
                        {language === 'ar' ? 'وزارة النقل' : 'Ministry of Transport'}
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                      <Gavel className="mx-auto mb-2 text-syria-green" />
                      <p className="text-sm">
                        {language === 'ar' ? 'وزارة العدل' : 'Ministry of Justice'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button variant="outline" className="mx-auto">
                    {language === 'ar' ? 'اكتشف المزيد عن البنية التحتية الرقمية' : 'Learn More About Digital Infrastructure'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h2>
            <p className="text-gray-600 mb-4">
              {language === 'ar'
                ? 'نرحب بأسئلتكم واقتراحاتكم حول البوابة الرقمية السورية ومشروع التحول الرقمي'
                : 'We welcome your questions and suggestions about the Syrian Digital Gateway and the digital transformation project'}
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <Phone className="text-syria-green mr-2" size={16} />
              <span>+963 000 000 000</span>
            </div>
            
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
              
              <Button className="bg-syria-green hover:bg-syria-green/90 w-full">
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
