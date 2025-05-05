
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Shield, Users, Building2, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
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
              {language === 'ar' ? 'عن مشروع البوابة الرقمية السورية' : 'About the Syrian Digital Gateway Project'}
            </h1>
            <p className="text-gray-600 mb-6">
              {language === 'ar'
                ? 'رؤيتنا لبناء سوريا رقمية متكاملة تضع المواطن في محور اهتمامها وتقدم له الخدمات الحكومية بكفاءة وشفافية.'
                : 'Our vision for building an integrated digital Syria that puts the citizen at the center of its attention and provides government services efficiently and transparently.'}
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="overflow-hidden">
              <div className="bg-syria-red text-white p-4 font-bold">
                {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </div>
              <CardContent className="pt-6">
                <p>
                  {language === 'ar'
                    ? 'نتطلع لبناء سوريا رقمية متكاملة، تقدم خدمات حكومية فعالة بسهولة وشفافية للمواطنين أينما كانوا، وتدعم عملية إعادة الإعمار والتنمية المستدامة. نسعى لتوظيف التكنولوجيا في جمع وإدارة البيانات بما يضمن اتخاذ قرارات مبنية على معلومات دقيقة تخدم المصلحة العامة.'
                    : 'We aspire to build an integrated digital Syria that provides effective government services easily and transparently to citizens wherever they are, and supports the process of reconstruction and sustainable development. We seek to employ technology in collecting and managing data to ensure that decisions are based on accurate information that serves the public interest.'}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-syria-green text-white p-4 font-bold">
                {language === 'ar' ? 'مهمتنا' : 'Our Mission'}
              </div>
              <CardContent className="pt-6">
                <p>
                  {language === 'ar'
                    ? 'مهمتنا هي إنشاء منصة رقمية موحدة تربط المؤسسات الحكومية والمواطنين في نظام بيئي رقمي متكامل. نعمل على تبسيط الإجراءات الحكومية وتقليل البيروقراطية من خلال أتمتة العمليات وتوفير الخدمات عبر الإنترنت. هدفنا تحسين كفاءة الخدمات العامة وتعزيز الشفافية والمساءلة في الإدارة العامة.'
                    : 'Our mission is to create a unified digital platform that connects government institutions and citizens in an integrated digital ecosystem. We work on simplifying government procedures and reducing bureaucracy through process automation and providing services online. Our goal is to improve the efficiency of public services and enhance transparency and accountability in public administration.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Components */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === 'ar' ? 'مكونات المشروع' : 'Project Components'}
          </h2>

          <Tabs defaultValue="database" className="w-full">
            <TabsList className="mb-8 bg-white border justify-center flex-wrap">
              <TabsTrigger value="database" className="data-[state=active]:bg-syria-red data-[state=active]:text-white">
                <span className="flex items-center">
                  <Users size={18} className="ml-2" />
                  {language === 'ar' ? 'قاعدة البيانات الوطنية' : 'National Database'}
                </span>
              </TabsTrigger>
              <TabsTrigger value="xroad" className="data-[state=active]:bg-syria-red data-[state=active]:text-white">
                <span className="flex items-center">
                  <Activity size={18} className="ml-2" />
                  {language === 'ar' ? 'نموذج X-Road' : 'X-Road Model'}
                </span>
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-syria-red data-[state=active]:text-white">
                <span className="flex items-center">
                  <Shield size={18} className="ml-2" />
                  {language === 'ar' ? 'الأمان والخصوصية' : 'Security & Privacy'}
                </span>
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-syria-red data-[state=active]:text-white">
                <span className="flex items-center">
                  <Building2 size={18} className="ml-2" />
                  {language === 'ar' ? 'الذكاء الاصطناعي' : 'Artificial Intelligence'}
                </span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="database" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === 'ar' ? 'قاعدة البيانات الوطنية المتكاملة' : 'Integrated National Database'}
                  </h3>
                  <p className="mb-4">
                    {language === 'ar'
                      ? 'قاعدة البيانات الوطنية هي العمود الفقري لمشروع التحول الرقمي، حيث توفر مصدراً موحداً للمعلومات الدقيقة عن المواطنين والأصول والخدمات العامة. تساعد في:'
                      : 'The national database is the backbone of the digital transformation project, providing a unified source of accurate information about citizens, assets, and public services. It helps in:'}
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                      {language === 'ar'
                        ? 'إنشاء سجل مدني رقمي شامل لجميع المواطنين'
                        : 'Creating a comprehensive digital civil registry for all citizens'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'توثيق الممتلكات العامة والخاصة لتسهيل عملية إعادة الإعمار'
                        : 'Documenting public and private properties to facilitate the reconstruction process'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'تحديد احتياجات المناطق المختلفة من الخدمات والبنية التحتية'
                        : 'Identifying the needs of different areas for services and infrastructure'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'تيسير توزيع المساعدات والموارد بشكل عادل وفعال'
                        : 'Facilitating the fair and effective distribution of aid and resources'}
                    </li>
                  </ul>
                  <p>
                    {language === 'ar'
                      ? 'تعتمد قاعدة البيانات على تقنيات متطورة لضمان الدقة والأمان، مع إمكانية التحديث المستمر للبيانات.'
                      : 'The database relies on advanced technologies to ensure accuracy and security, with the ability to continuously update data.'}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="xroad" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === 'ar' ? 'نموذج X-Road للتكامل الرقمي' : 'X-Road Model for Digital Integration'}
                  </h3>
                  <p className="mb-4">
                    {language === 'ar'
                      ? 'نموذج X-Road هو إطار تقني مستوحى من التجربة الإستونية الناجحة، يوفر آلية آمنة لتبادل البيانات بين مختلف أنظمة الحكومة وقواعد البيانات. يتميز بـ:'
                      : 'The X-Road model is a technical framework inspired by the successful Estonian experience, providing a secure mechanism for data exchange between various government systems and databases. It is characterized by:'}
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                      {language === 'ar'
                        ? 'ربط جميع الأنظمة الحكومية بشكل آمن ومشفر'
                        : 'Securely and cryptographically connecting all government systems'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'تمكين تبادل البيانات في الوقت الفعلي بين المؤسسات المختلفة'
                        : 'Enabling real-time data exchange between different institutions'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'تقليل الازدواجية في البيانات والعمليات الحكومية'
                        : 'Reducing duplication in government data and operations'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'توفير واجهات برمجة تطبيقات (APIs) موحدة للخدمات الحكومية'
                        : 'Providing unified application programming interfaces (APIs) for government services'}
                    </li>
                  </ul>
                  <p>
                    {language === 'ar'
                      ? 'يعمل نموذج X-Road على مبدأ "الإدخال الواحد" للبيانات، مما يعني أن المعلومات تُدخل مرة واحدة فقط وتُستخدم من قبل جميع الجهات المعنية.'
                      : 'The X-Road model operates on the principle of "once-only" data entry, meaning that information is entered only once and used by all concerned parties.'}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === 'ar' ? 'الأمان والخصوصية' : 'Security and Privacy'}
                  </h3>
                  <p className="mb-4">
                    {language === 'ar'
                      ? 'الأمان والخصوصية هما حجر الأساس في بناء الثقة في النظام الرقمي. نعتمد على:'
                      : 'Security and privacy are the cornerstones in building trust in the digital system. We rely on:'}
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                      {language === 'ar'
                        ? 'تشفير قوي لجميع البيانات المخزنة والمتبادلة'
                        : 'Strong encryption for all stored and exchanged data'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'تقنية التوقيع الرقمي والمصادقة متعددة العوامل'
                        : 'Digital signature technology and multi-factor authentication'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'أنظمة كشف ومنع التسلل المتطورة'
                        : 'Advanced intrusion detection and prevention systems'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'سجلات تدقيق شاملة لجميع العمليات والوصول إلى البيانات'
                        : 'Comprehensive audit logs for all operations and data access'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'إطار قانوني وتنظيمي يحمي خصوصية المواطنين'
                        : 'Legal and regulatory framework that protects citizens\' privacy'}
                    </li>
                  </ul>
                  <p>
                    {language === 'ar'
                      ? 'نلتزم بأعلى المعايير العالمية في حماية البيانات وأمن المعلومات لضمان موثوقية النظام وحماية خصوصية المواطنين.'
                      : 'We adhere to the highest global standards in data protection and information security to ensure system reliability and protect citizens\' privacy.'}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === 'ar' ? 'تطبيقات الذكاء الاصطناعي' : 'Artificial Intelligence Applications'}
                  </h3>
                  <p className="mb-4">
                    {language === 'ar'
                      ? 'نوظف تقنيات الذكاء الاصطناعي وتحليل البيانات الضخمة لتحسين الخدمات الحكومية وعملية صنع القرار من خلال:'
                      : 'We employ artificial intelligence technologies and big data analysis to improve government services and the decision-making process through:'}
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                      {language === 'ar'
                        ? 'تحليل احتياجات المناطق المختلفة من الخدمات والبنية التحتية'
                        : 'Analyzing the needs of different areas for services and infrastructure'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'التنبؤ بالأزمات المحتملة واقتراح إجراءات استباقية'
                        : 'Predicting potential crises and suggesting proactive measures'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'تحسين توزيع الموارد والمساعدات بناءً على البيانات الفعلية'
                        : 'Improving the distribution of resources and aid based on actual data'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'أتمتة العمليات الروتينية وتقليل الوقت اللازم لمعالجة الطلبات'
                        : 'Automating routine processes and reducing the time required to process requests'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'تطوير مساعدين افتراضيين لخدمة المواطنين على مدار الساعة'
                        : 'Developing virtual assistants to serve citizens around the clock'}
                    </li>
                  </ul>
                  <p>
                    {language === 'ar'
                      ? 'نهدف إلى استخدام التكنولوجيا الذكية بطريقة أخلاقية وشفافة مع الحفاظ على المراقبة البشرية للقرارات المهمة.'
                      : 'We aim to use smart technology in an ethical and transparent manner while maintaining human oversight of important decisions.'}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === 'ar' ? 'مراحل المشروع' : 'Project Phases'}
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Phase 1 */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-syria-red text-white rounded-full w-10 h-10 flex items-center justify-center z-10 font-bold">1</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'المرحلة الأولى: التحليل والتخطيط (2025-2026)' : 'Phase One: Analysis and Planning (2025-2026)'}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>
                    {language === 'ar'
                      ? 'تقييم البنية التحتية الحالية والاحتياجات'
                      : 'Assessment of current infrastructure and needs'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'تطوير المعايير التقنية والتشريعات اللازمة'
                      : 'Development of technical standards and necessary legislation'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'إنشاء النماذج الأولية للبوابة الرقمية'
                      : 'Creation of prototypes for the digital gateway'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-syria-red text-white rounded-full w-10 h-10 flex items-center justify-center z-10 font-bold">2</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'المرحلة الثانية: بناء البنية التحتية الأساسية (2026-2027)' : 'Phase Two: Building Core Infrastructure (2026-2027)'}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>
                    {language === 'ar'
                      ? 'تطوير قاعدة البيانات الوطنية المركزية'
                      : 'Development of the central national database'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'إنشاء البنية التحتية للتبادل الآمن للبيانات (X-Road)'
                      : 'Establishment of infrastructure for secure data exchange (X-Road)'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'تدريب الكوادر الحكومية على التقنيات الجديدة'
                      : 'Training government personnel on new technologies'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-syria-red text-white rounded-full w-10 h-10 flex items-center justify-center z-10 font-bold">3</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'المرحلة الثالثة: إطلاق الخدمات الأساسية (2027-2028)' : 'Phase Three: Launching Core Services (2027-2028)'}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>
                    {language === 'ar'
                      ? 'إطلاق البوابة الرقمية الرسمية مع الخدمات الأساسية'
                      : 'Launch of the official digital gateway with basic services'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'إصدار البطاقات الوطنية الرقمية للمواطنين'
                      : 'Issuance of digital national ID cards to citizens'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'تكامل الخدمات البلدية والتعليمية والصحية الأساسية'
                      : 'Integration of basic municipal, educational, and health services'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-syria-red text-white rounded-full w-10 h-10 flex items-center justify-center z-10 font-bold">4</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'ar' ? 'المرحلة الرابعة: التوسع والتكامل (2028-2030)' : 'Phase Four: Expansion and Integration (2028-2030)'}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>
                    {language === 'ar'
                      ? 'تكامل جميع الخدمات الحكومية مع البوابة الرقمية'
                      : 'Integration of all government services with the digital gateway'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'تطوير تطبيقات الذكاء الاصطناعي لتحسين الخدمات'
                      : 'Development of AI applications to improve services'}
                  </li>
                  <li>
                    {language === 'ar'
                      ? 'توسيع نطاق الخدمات لتشمل القطاع الخاص والمنظمات الدولية'
                      : 'Expanding the scope of services to include the private sector and international organizations'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
