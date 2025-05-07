import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Container } from "@/components/ui/container";
import ProactiveService from "@/components/ProactiveService";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Home, 
  Baby, 
  GraduationCap, 
  Briefcase, 
  UserCheck, 
  MapPin,
  PiggyBank
} from "lucide-react";

const ProactiveServices: React.FC = () => {
  const [language, setLanguage] = useState<string>("ar");

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

  const services = [
    {
      title: language === "ar" ? "الزواج" : "Getting married",
      icon: <Heart />,
      to: "/services/getting-married",
      userType: language === "ar" ? "المواطن" : "Citizen"
    },
    {
      title: language === "ar" ? "الاستقرار في سوريا" : "Settling in Syria",
      icon: <MapPin />,
      to: "/services/settling",
      userType: language === "ar" ? "المواطن" : "Citizen"
    },
    {
      title: language === "ar" ? "معاشي التقاعدي" : "My Pension",
      icon: <PiggyBank />,
      to: "/services/my-pension",
      userType: language === "ar" ? "المواطن" : "Citizen"
    },
    {
      title: language === "ar" ? "ولادة طفل" : "Birth of a child",
      icon: <Baby />,
      to: "/services/birth-child",
      userType: language === "ar" ? "المواطن" : "Citizen"
    },
    {
      title: language === "ar" ? "بدء الدراسة" : "Starting studies",
      icon: <GraduationCap />,
      to: "/services/starting-studies",
      userType: language === "ar" ? "المواطن" : "Citizen"
    },
    {
      title: language === "ar" ? "بدء العمل" : "Starting work",
      icon: <Briefcase />,
      to: "/services/starting-work",
      userType: language === "ar" ? "المواطن" : "Citizen"
    },
    {
      title: language === "ar" ? "تغيير العنوان" : "Change of address",
      icon: <Home />,
      to: "/services/change-address",
      userType: language === "ar" ? "المواطن" : "Citizen"
    },
    {
      title: language === "ar" ? "تأسيس شركة" : "Establishing a company",
      icon: <UserCheck />,
      to: "/services/establish-company",
      userType: language === "ar" ? "رائد الأعمال" : "Entrepreneur"
    }
  ];

  return (
    <Layout>
      <Container className="py-12">
        <div className="mb-8 flex items-center">
          <Link to="/">
            <Button variant="ghost" className="p-0 mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {language === "ar" ? "العودة إلى الصفحة الرئيسية" : "Back to Home"}
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">
            {language === "ar" ? "الخدمات الحكومية الاستباقية" : "Proactive government services"}
          </h1>
        </div>

        <p className="mb-8 text-gray-600 max-w-3xl">
          {language === "ar" 
            ? "خدمات مصممة لتلبية احتياجاتك في مراحل الحياة المختلفة. تقدم الدولة خدمات استباقية لتسهيل الإجراءات الحكومية في المناسبات والتغييرات المهمة في حياتك."
            : "Services designed to meet your needs at different life stages. The state offers proactive services to facilitate government procedures during important occasions and changes in your life."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ProactiveService
              key={index}
              title={service.title}
              icon={service.icon}
              to={service.to}
              userType={service.userType}
              language={language}
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default ProactiveServices;
