
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, Activity, Building, Globe, Shield } from 'lucide-react';

const Investors = () => {
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
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'فرص الاستثمار في مشروع البوابة الرقمية السورية' : 'Investment Opportunities in the Syrian Digital Gateway Project'}
            </h1>
            <p className="text-gray-600 mb-6">
              {language === 'ar'
                ? 'ندعو المستثمرين والشركات التقنية والجهات المانحة للمساهمة في تمويل وتنفيذ مشروع التحول الرقمي المثير في سوريا.'
                : 'We invite investors, technology companies, and donor agencies to contribute to funding and implementing the exciting digital transformation project in Syria.'}
            </p>
            <Button className="bg-syria-red hover:bg-syria-red/90">
              {language === 'ar' ? 'طلب معلومات للمستثمرين' : 'Request Investor Information'}
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Areas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === 'ar' ? 'مجالات الاستثمار' : 'Investment Areas'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building className="text-syria-red" />
                </div>
                <CardTitle>
                  {language === 'ar' ? 'البنية التحتية التقنية' : 'Technical Infrastructure'}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' 
                    ? 'استثمار في بناء شبكات الاتصالات ومراكز البيانات الحديثة' 
                    : 'Investment in building telecommunications networks and modern data centers'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>
                    {language === 'ar'
                      ? 'مراكز بيانات عالية الأمان والأداء'
                      : 'High-security and high-performance data centers'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'شبكات الألياف الضوئية والاتصالات'
                      : 'Fiber optic and telecommunications networks'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'أنظمة احتياطية وحلول استمرارية الأعمال'
                      : 'Backup systems and business continuity solutions'}
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-syria-red" />
                </div>
                <CardTitle>
                  {language === 'ar' ? 'الأمن السيبراني' : 'Cybersecurity'}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' 
                    ? 'تطوير وتنفيذ حلول أمنية متطورة لحماية البيانات الحكومية' 
                    : 'Development and implementation of advanced security solutions to protect government data'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>
                    {language === 'ar'
                      ? 'أنظمة تشفير وحماية البيانات'
                      : 'Data encryption and protection systems'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'أنظمة المصادقة والتوقيع الرقمي'
                      : 'Authentication and digital signature systems'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'حلول مراقبة وتصدي للهجمات السيبرانية'
                      : 'Monitoring and cyber attack response solutions'}
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Activity className="text-syria-red" />
                </div>
                <CardTitle>
                  {language === 'ar' ? 'تطوير البرمجيات' : 'Software Development'}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' 
                    ? 'تطوير تطبيقات وحلول برمجية خاصة بالخدمات الحكومية الرقمية' 
                    : 'Development of applications and software solutions for digital government services'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>
                    {language === 'ar'
                      ? 'منصات الخدمات الحكومية الإلكترونية'
                      : 'E-government service platforms'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'تطبيقات الهاتف المحمول للوصول للخدمات'
                      : 'Mobile applications for accessing services'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'أنظمة إدارة البيانات والتحليلات'
                      : 'Data management and analytics systems'}
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-syria-red" />
                </div>
                <CardTitle>
                  {language === 'ar' ? 'بناء القدرات والتدريب' : 'Capacity Building & Training'}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' 
                    ? 'الاستثمار في تدريب الكوادر الحكومية والفنية على التقنيات الرقمية' 
                    : 'Investment in training government and technical personnel on digital technologies'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>
                    {language === 'ar'
                      ? 'برامج تدريب المدربين'
                      : 'Train-the-trainer programs'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'مراكز التدريب التقني والإداري'
                      : 'Technical and administrative training centers'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'منح دراسية وبرامج تبادل خبرات دولية'
                      : 'Scholarships and international expertise exchange programs'}
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-syria-red" />
                </div>
                <CardTitle>
                  {language === 'ar' ? 'الشمول الرقمي' : 'Digital Inclusion'}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' 
                    ? 'مشاريع توسيع نطاق الوصول الرقمي للمناطق النائية والمجتمعات المهمشة' 
                    : 'Projects to expand digital access to remote areas and marginalized communities'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>
                    {language === 'ar'
                      ? 'مراكز خدمة رقمية في المناطق النائية'
                      : 'Digital service centers in remote areas'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'حلول الطاقة البديلة لتشغيل مراكز الاتصال'
                      : 'Alternative energy solutions for operating communication centers'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'برامج توعية ومحو الأمية الرقمية'
                      : 'Awareness and digital literacy programs'}
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="text-syria-red" />
                </div>
                <CardTitle>
                  {language === 'ar' ? 'الشراكات بين القطاعين' : 'Public-Private Partnerships'}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' 
                    ? 'فرص الشراكة بين القطاعين العام والخاص لتطوير وإدارة الخدمات الرقمية' 
                    : 'Public-private partnership opportunities for developing and managing digital services'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>
                    {language === 'ar'
                      ? 'تطوير وإدارة البنية التحتية التقنية'
                      : 'Development and management of technical infrastructure'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'تقديم خدمات دعم وصيانة طويلة الأمد'
                      : 'Providing long-term support and maintenance services'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'تمويل مشترك للمشاريع الرقمية الاستراتيجية'
                      : 'Joint financing of strategic digital projects'}
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === 'ar' ? 'فوائد الاستثمار' : 'Investment Benefits'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6">
                {language === 'ar' ? 'للشركات والمستثمرين' : 'For Companies & Investors'}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-syria-red/10 text-syria-red p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {language === 'ar' ? 'فرص نمو استثنائية' : 'Exceptional Growth Opportunities'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'ar'
                        ? 'الاستثمار في مشروع استراتيجي طويل الأمد ينمو مع تعافي الاقتصاد السوري'
                        : 'Investment in a long-term strategic project that grows with the recovery of the Syrian economy'}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-syria-red/10 text-syria-red p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {language === 'ar' ? 'حوافز استثمارية' : 'Investment Incentives'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'ar'
                        ? 'إعفاءات ضريبية وجمركية وتسهيلات قانونية للمشاريع التقنية الاستراتيجية'
                        : 'Tax and customs exemptions and legal facilities for strategic technical projects'}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-syria-red/10 text-syria-red p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {language === 'ar' ? 'نقل التكنولوجيا والخبرات' : 'Technology & Expertise Transfer'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'ar'
                        ? 'فرصة لنقل التكنولوجيا والخبرات إلى سوق ناشئة وفي حاجة ماسة للتطوير'
                        : 'Opportunity to transfer technology and expertise to an emerging market in dire need of development'}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-syria-red/10 text-syria-red p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {language === 'ar' ? 'الاستدامة طويلة الأمد' : 'Long-term Sustainability'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'ar'
                        ? 'عقود صيانة وتطوير طويلة الأمد للأنظمة والبنية التحتية التقنية'
                        : 'Long-term maintenance and development contracts for systems and technical infrastructure'}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6">
                {language === 'ar' ? 'للجهات المانحة والمنظمات' : 'For Donor Agencies & Organizations'}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-syria-green/10 text-syria-green p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {language === 'ar' ? 'الأثر المستدام' : 'Sustainable Impact'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'ar'
                        ? 'المساهمة في مشروع يحدث تغييراً هيكلياً مستداماً في آليات تقديم الخدمات العامة'
                        : 'Contributing to a project that creates sustainable structural change in public service delivery mechanisms'}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-syria-green/10 text-syria-green p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {language === 'ar' ? 'تعزيز الشفافية' : 'Enhancing Transparency'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'ar'
                        ? 'دعم الشفافية والحوكمة الرشيدة من خلال النظم الرقمية الحديثة'
                        : 'Supporting transparency and good governance through modern digital systems'}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-syria-green/10 text-syria-green p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {language === 'ar' ? 'كفاءة توزيع المساعدات' : 'Aid Distribution Efficiency'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'ar'
                        ? 'تحسين آليات توزيع المساعدات والموارد باستخدام البيانات الدقيقة وقنوات الوصول الرقمية'
                        : 'Improving aid and resource distribution mechanisms using accurate data and digital access channels'}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-syria-green/10 text-syria-green p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {language === 'ar' ? 'تعزيز المرونة المجتمعية' : 'Enhancing Community Resilience'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'ar'
                        ? 'بناء قدرات المجتمعات على التعافي والمرونة من خلال تحسين وصول المواطنين للمعلومات والخدمات'
                        : 'Building communities\' capacity for recovery and resilience by improving citizens\' access to information and services'}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-syria-red hover:bg-syria-red/90 px-8 py-6 text-lg">
              {language === 'ar' ? 'طلب مزيد من المعلومات حول الاستثمار' : 'Request More Information About Investment'}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
