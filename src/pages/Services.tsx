
import React from 'react';
import Layout from '@/components/Layout';
import { 
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  FileText,
  Building,
  GraduationCap,
  Globe,
  Users,
  HeartPulse,
  Building2,
  Activity,
  Search
} from 'lucide-react';

const Services = () => {
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

  const serviceCategories = [
    {
      id: 'documents',
      name: language === 'ar' ? 'الوثائق الرسمية' : 'Official Documents',
      icon: <FileText className="h-5 w-5" />,
      services: [
        {
          title: language === 'ar' ? 'طلب بطاقة هوية جديدة' : 'Request New ID Card',
          description: language === 'ar' ? 'تقديم طلب للحصول على بطاقة هوية وطنية جديدة' : 'Submit an application for a new national ID card',
          time: language === 'ar' ? '7-10 أيام' : '7-10 days',
          fee: language === 'ar' ? '5000 ل.س' : '5000 SYP'
        },
        {
          title: language === 'ar' ? 'طلب جواز سفر' : 'Passport Application',
          description: language === 'ar' ? 'تقديم طلب للحصول على جواز سفر جديد أو تجديد جواز سفر قديم' : 'Apply for a new passport or renew an existing one',
          time: language === 'ar' ? '14 يوم' : '14 days',
          fee: language === 'ar' ? '40000 ل.س' : '40000 SYP'
        },
        {
          title: language === 'ar' ? 'شهادة ميلاد' : 'Birth Certificate',
          description: language === 'ar' ? 'طلب استخراج شهادة ميلاد أو نسخة طبق الأصل' : 'Request a birth certificate or a certified copy',
          time: language === 'ar' ? '3-5 أيام' : '3-5 days',
          fee: language === 'ar' ? '2000 ل.س' : '2000 SYP'
        }
      ]
    },
    {
      id: 'municipal',
      name: language === 'ar' ? 'الخدمات البلدية' : 'Municipal Services',
      icon: <Building className="h-5 w-5" />,
      services: [
        {
          title: language === 'ar' ? 'رخصة بناء' : 'Construction Permit',
          description: language === 'ar' ? 'طلب الحصول على رخصة بناء جديدة أو تجديد رخصة قائمة' : 'Apply for a new construction permit or renew an existing one',
          time: language === 'ar' ? '30 يوم' : '30 days',
          fee: language === 'ar' ? 'حسب المساحة' : 'Based on area'
        },
        {
          title: language === 'ar' ? 'طلب صيانة مرافق عامة' : 'Public Facilities Maintenance',
          description: language === 'ar' ? 'الإبلاغ عن أعطال في المرافق العامة وطلب صيانتها' : 'Report issues with public facilities and request maintenance',
          time: language === 'ar' ? '7-14 يوم' : '7-14 days',
          fee: language === 'ar' ? 'مجاني' : 'Free'
        }
      ]
    },
    {
      id: 'relief',
      name: language === 'ar' ? 'الدعم الإغاثي' : 'Relief Support',
      icon: <HeartPulse className="h-5 w-5" />,
      services: [
        {
          title: language === 'ar' ? 'طلب مساعدة إغاثية' : 'Relief Aid Request',
          description: language === 'ar' ? 'تقديم طلب للحصول على مساعدات إغاثية عاجلة للعائلات المتضررة' : 'Submit a request for urgent relief aid for affected families',
          time: language === 'ar' ? '3-7 أيام' : '3-7 days',
          fee: language === 'ar' ? 'مجاني' : 'Free'
        },
        {
          title: language === 'ar' ? 'طلب سكن مؤقت' : 'Temporary Housing Request',
          description: language === 'ar' ? 'تقديم طلب للحصول على سكن مؤقت للمتضررين من الكوارث' : 'Apply for temporary housing for those affected by disasters',
          time: language === 'ar' ? '7-14 يوم' : '7-14 days',
          fee: language === 'ar' ? 'مجاني' : 'Free'
        }
      ]
    },
    {
      id: 'education',
      name: language === 'ar' ? 'التعليم' : 'Education',
      icon: <GraduationCap className="h-5 w-5" />,
      services: [
        {
          title: language === 'ar' ? 'تسجيل في المدارس' : 'School Registration',
          description: language === 'ar' ? 'تسجيل الطلاب في المدارس الحكومية للعام الدراسي الجديد' : 'Register students in public schools for the new academic year',
          time: language === 'ar' ? 'فوري' : 'Immediate',
          fee: language === 'ar' ? 'مجاني' : 'Free'
        },
        {
          title: language === 'ar' ? 'طلب وثيقة دراسية' : 'Educational Document Request',
          description: language === 'ar' ? 'طلب الحصول على شهادات ووثائق دراسية رسمية' : 'Request official academic certificates and documents',
          time: language === 'ar' ? '5 أيام' : '5 days',
          fee: language === 'ar' ? '1000 ل.س' : '1000 SYP'
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'الخدمات الحكومية' : 'Government Services'}
            </h1>
            <p className="text-gray-600 mb-6">
              {language === 'ar'
                ? 'استكشف مجموعة الخدمات الحكومية الإلكترونية المتاحة للمواطنين وتقدم بطلباتك عبر الإنترنت.'
                : 'Explore the range of electronic government services available to citizens and submit your applications online.'}
            </p>
            <div className="relative">
              <Input
                className="w-full pr-10 pl-4 py-3"
                placeholder={language === 'ar' ? 'ابحث عن خدمة...' : 'Search for a service...'}
              />
              <Search className="absolute top-3 right-3 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="documents" className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="mb-8 bg-white border">
                {serviceCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="data-[state=active]:bg-syria-red data-[state=active]:text-white">
                    <span className="flex items-center">
                      {category.icon}
                      <span className="mr-2">{category.name}</span>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, index) => (
                    <Card key={index} className="overflow-hidden card-hover">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                          {category.icon}
                        </div>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-gray-500">
                            {language === 'ar' ? 'مدة الإنجاز:' : 'Processing Time:'}
                          </span>
                          <span>{service.time}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-gray-500">
                            {language === 'ar' ? 'الرسوم:' : 'Fee:'}
                          </span>
                          <span>{service.fee}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-gray-50">
                        <Button className="w-full bg-syria-red hover:bg-syria-red/90">
                          {language === 'ar' ? 'تقديم الطلب' : 'Apply Now'}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {language === 'ar' ? 'كيفية تقديم الطلبات' : 'How to Apply'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-syria-red/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-syria-red font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'ar' ? 'سجل دخولك' : 'Sign In'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'ar'
                    ? 'سجل دخولك باستخدام حساب البوابة الرقمية السورية.'
                    : 'Sign in using your Syrian Digital Gateway account.'}
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-syria-red/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-syria-red font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'ar' ? 'أكمل النموذج' : 'Complete the Form'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'ar'
                    ? 'أكمل النموذج وأرفق المستندات المطلوبة.'
                    : 'Fill out the form and attach the required documents.'}
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-syria-red/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-syria-red font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'ar' ? 'تتبع طلبك' : 'Track Your Request'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'ar'
                    ? 'تابع حالة طلبك والإشعارات في لوحة التحكم الشخصية.'
                    : 'Follow the status of your request and notifications in your personal dashboard.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
