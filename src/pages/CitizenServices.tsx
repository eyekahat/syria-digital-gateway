import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Container } from "@/components/ui/container";
import ServiceItem from "@/components/ServiceItem";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FileText,
  Heart,
  Home,
  BookOpen,
  Briefcase,
  Users,
  Shield,
  CreditCard,
  Landmark,
  Car,
} from "lucide-react";

const CitizenServices: React.FC = () => {
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
      title:
        language === "ar"
          ? "الصحة والوصفات الطبية"
          : "Health and prescriptions",
      icon: <Heart />,
      to: "/services/health",
    },
    {
      title:
        language === "ar"
          ? "المعاشات والخدمات الاجتماعية"
          : "Pensions and social services",
      icon: <Shield />,
      to: "/services/pensions",
    },
    {
      title: language === "ar" ? "العائلة" : "Family",
      icon: <Users />,
      to: "/services/family",
    },
    {
      title:
        language === "ar" ? "العمل وعلاقات العمل" : "Work and labor relations",
      icon: <Briefcase />,
      to: "/services/work",
    },
    {
      title: language === "ar" ? "الأشخاص ذوو الإعاقة" : "Disabled people",
      icon: <Heart />,
      to: "/services/disabled",
    },
    {
      title:
        language === "ar" ? "المواطنة والوثائق" : "Citizenship and documents",
      icon: <FileText />,
      to: "/services/citizenship",
    },
    {
      title: language === "ar" ? "المرور" : "Traffic",
      icon: <Car />,
      to: "/services/traffic",
    },
    {
      title: language === "ar" ? "التعليم والبحث" : "Education and Research",
      icon: <BookOpen />,
      to: "/services/education",
    },
    {
      title: language === "ar" ? "المال والممتلكات" : "Money and property",
      icon: <CreditCard />,
      to: "/services/money",
    },
    {
      title: language === "ar" ? "الثقافة والترفيه" : "Culture and Leisure",
      icon: <Landmark />,
      to: "/services/culture",
    },
    {
      title: language === "ar" ? "الإسكان" : "Housing",
      icon: <Home />,
      to: "/services/housing",
    },
  ];

  return (
    <Layout>
      <Container className="py-12">
        <div className="mb-8 flex items-center">
          <Link to="/">
            <Button variant="ghost" className="p-0 mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              {language === "ar"
                ? "العودة إلى الصفحة الرئيسية"
                : "Back to Home"}
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">
            {language === "ar"
              ? "الخدمات الإلكترونية للمواطن"
              : "E-services for citizen"}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              icon={service.icon}
              to={service.to}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/login">
            <Button size="lg" className="px-8">
              {language === "ar"
                ? "تسجيل الدخول إلى الخدمة الذاتية للمواطن"
                : "Log in to the self-service for citizen"}
            </Button>
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default CitizenServices;
