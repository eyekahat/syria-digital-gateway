import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, 
  FileText, 
  Home, 
  Users, 
  Heart,
  GraduationCap,
  Mail,
  Send
} from 'lucide-react';

const Diaspora = () => {
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
              {language === 'ar' ? 'بوابة المغتربين السوريين' : 'Syrian Diaspora Portal'}
            </h1>
            <p className="text-gray-600 mb-6">
              {language === 'ar'
                ? 'البوابة الرقمية للسوريين في الخارج، تربطك بالوطن وتسهل الوصول للخدمات والمشاركة في إعادة البناء.'
                : 'The digital gateway for Syrians abroad, connecting you to the homeland and facilitating access to services and participation in reconstruction.'}
            </p>
            <Button className="bg-syria-red hover:bg-syria-red/90">
              {language === 'ar' ? 'سجل في منصة المغتربين' : 'Register in the Expatriates Platform'}
            </Button>
          </div>
        </div>
      </section>

      {/* Services for Expatriates */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === 'ar' ? 'خدمات للمغتربين السوريين' : 'Services for Syrian Expatriates'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FileText className="text-syria-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'خدمات الوثائق القنصلية' : 'Consular Document Services'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'ar'
                    ? 'الحصول على الأوراق والوثائق الرسمية عن بعد، وتصديق الشهادات والوثائق الخارجية.'
                    : 'Obtaining official papers and documents remotely, and authenticating certificates and external documents.'}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-4">
                  <li>
                    {language === 'ar'
                      ? 'تجديد جوازات السفر'
                      : 'Passport renewal'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'استخراج شهادات الميلاد والزواج'
                      : 'Extraction of birth and marriage certificates'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'تصديق الوثائق الرسمية'
                      : 'Authentication of official documents'}
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'استعرض الخدمات' : 'View Services'}
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Home className="text-syria-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'الاستثمار العقاري والإعمار' : 'Real Estate Investment & Reconstruction'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'ar'
                    ? 'فرص للمساهمة في إعادة الإعمار والاستثمار العقاري، وإدارة الممتلكات في سوريا عن بعد.'
                    : 'Opportunities to contribute to reconstruction and real estate investment, and remote property management in Syria.'}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-4">
                  <li>
                    {language === 'ar'
                      ? 'الاستعلام عن الممتلكات والعقارات'
                      : 'Inquiring about properties and real estate'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'توثيق الملكيات والتوكيلات'
                      : 'Documenting properties and authorizations'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'فرص الاستثمار في مشاريع إعادة الإعمار'
                      : 'Investment opportunities in reconstruction projects'}
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'استعرض الفرص' : 'View Opportunities'}
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-syria-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'إحصاء المغتربين' : 'Expatriate Census'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'ar'
                    ? 'المساهمة في إحصاء شامل للسوريين في الخارج لتلبية احتياجاتهم وتسهيل تواصلهم مع الوطن.'
                    : 'Contributing to a comprehensive census of Syrians abroad to meet their needs and facilitate their communication with the homeland.'}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-4">
                  <li>
                    {language === 'ar'
                      ? 'تسجيل البيانات الشخصية والمهنية'
                      : 'Registration of personal and professional data'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'توثيق المهارات والخبرات'
                      : 'Documenting skills and experiences'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'التواصل مع السوريين في نفس المنطقة'
                      : 'Communication with Syrians in the same area'}
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'سجل في الإحصاء' : 'Register in the Census'}
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-syria-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'المساعدات والتبرعات' : 'Aid & Donations'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'ar'
                    ? 'المساهمة في مشاريع الإغاثة والتنمية من خلال قنوات رسمية آمنة وشفافة.'
                    : 'Contributing to relief and development projects through official, secure, and transparent channels.'}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-4">
                  <li>
                    {language === 'ar'
                      ? 'تقديم المساعدات للعائلات المحتاجة'
                      : 'Providing assistance to needy families'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'دعم مشاريع التعليم والصحة'
                      : 'Supporting education and health projects'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'متابعة أثر المساعدات بشكل شفاف'
                      : 'Tracking the impact of aid transparently'}
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'استكشف طرق المساهمة' : 'Explore Ways to Contribute'}
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="text-syria-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'نقل الخبرات والمعرفة' : 'Knowledge & Expertise Transfer'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'ar'
                    ? 'منصة لمشاركة خبرات وتجارب المغتربين لدعم التنمية وإعادة البناء في سوريا.'
                    : 'A platform for sharing the experiences and expertise of expatriates to support development and reconstruction in Syria.'}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-4">
                  <li>
                    {language === 'ar'
                      ? 'برامج التوجيه والإرشاد عن بعد'
                      : 'Remote mentoring and guidance programs'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'مشاركة الخبرات في مختلف المجالات'
                      : 'Sharing expertise in various fields'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'فرص التعليم والتدريب المهني'
                      : 'Educational and vocational training opportunities'}
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'شارك خبراتك' : 'Share Your Expertise'}
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-syria-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-syria-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'التواصل والحفاظ على الهوية' : 'Communication & Identity Preservation'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'ar'
                    ? 'أنشطة وبرامج للحفاظ على الهوية السورية والتواصل الثقافي مع الوطن، خاصة للأجيال الجديدة.'
                    : 'Activities and programs to preserve Syrian identity and cultural communication with the homeland, especially for new generations.'}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-4">
                  <li>
                    {language === 'ar'
                      ? 'برامج تعليم اللغة العربية للأطفال'
                      : 'Arabic language education programs for children'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'مواد تعليمية عن الثقافة والتاريخ السوري'
                      : 'Educational materials about Syrian culture and history'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'فعاليات وأنشطة ثقافية افتراضية'
                      : 'Virtual cultural events and activities'}
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  {language === 'ar' ? 'اكتشف الأنشطة' : 'Discover Activities'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center">
              {language === 'ar' ? 'سجل في منصة المغتربين' : 'Register in the Expatriates Platform'}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              {language === 'ar'
                ? 'سجل بياناتك للمشاركة في الإحصاء، والوصول إلى الخدمات الحكومية، والمساهمة في إعادة إعمار سوريا.'
                : 'Register your data to participate in the census, access government services, and contribute to Syria\'s reconstruction.'}
            </p>

            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'ar' ? 'تاريخ الميلاد' : 'Date of Birth'}
                  </label>
                  <input 
                    type="date" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder={language === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'ar' ? 'بلد الإقامة الحالي' : 'Current Country of Residence'}
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder={language === 'ar' ? 'أدخل بلد إقامتك الحالي' : 'Enter your current country of residence'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'ar' ? 'المدينة الأصلية في سوريا' : 'Original City in Syria'}
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder={language === 'ar' ? 'أدخل مدينتك الأصلية في سوريا' : 'Enter your original city in Syria'}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'ar' ? 'المؤهل العلمي / المهنة' : 'Educational Qualification / Profession'}
                </label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder={language === 'ar' ? 'أدخل مؤهلك العلمي أو مهنتك' : 'Enter your qualification or profession'}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'ar' ? 'كيف يمكنك المساهمة في تنمية سوريا؟' : 'How can you contribute to Syria\'s development?'}
                </label>
                <textarea 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 h-24"
                  placeholder={language === 'ar' ? 'اشرح باختصار كيف يمكنك المساهمة...' : 'Briefly explain how you can contribute...'}
                ></textarea>
              </div>

              <div className="mb-6 flex items-start">
                <input 
                  type="checkbox"
                  id="consent" 
                  className="mr-2 mt-1"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  {language === 'ar'
                    ? 'أوافق على معالجة بياناتي الشخصية وفقًا لسياسة الخصوصية. سيتم استخدام المعلومات لأغراض التواصل والإحصاء فقط.'
                    : 'I agree to the processing of my personal data according to the privacy policy. Information will be used for communication and census purposes only.'}
                </label>
              </div>

              <Button className="bg-syria-red hover:bg-syria-red/90 w-full">
                <Send size={16} className="mr-2" />
                {language === 'ar' ? 'تسجيل في منصة المغتربين' : 'Register in the Expatriates Platform'}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Keep in Touch */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="mx-auto text-syria-red mb-4" size={48} />
            <h2 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'ابق على تواصل مع الوطن' : 'Stay Connected with the Homeland'}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'ar'
                ? 'اشترك في نشرتنا الإخبارية لتلقي آخر التحديثات حول مشروع البوابة الرقمية السورية والخدمات المتاحة للمغتربين.'
                : 'Subscribe to our newsletter to receive the latest updates about the Syrian Digital Gateway project and services available to expatriates.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                className="flex-grow border border-gray-300 rounded-md px-3 py-2"
                placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              />
              <Button className="bg-syria-red hover:bg-syria-red/90">
                <Mail size={16} className="mr-2" />
                {language === 'ar' ? 'اشترك' : 'Subscribe'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Diaspora;
