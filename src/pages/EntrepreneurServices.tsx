import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Container } from "@/components/ui/container";
import ServiceItem from "@/components/ServiceItem";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Building, 
  FileText, 
  Users, 
  CreditCard, 
  Briefcase, 
  BarChart, 
  Globe,
  ShieldCheck,
  Truck,
  FileSearch
} from "lucide-react";

const EntrepreneurServices: React.FC = () => {
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
      title: language === "ar" ? "تأسيس الشركة" : "Company establishment",
      icon: <Building />,
      to: "/services/company-establishment"
    },
    {
      title: language === "ar" ? "الضرائب والتقارير" : "Taxes and reporting",
      icon: <FileText />,
      to: "/services/taxes"
    },
    {
      title: language === "ar" ? "الموظفون" : "Employees",
      icon: <Users />,
      to: "/services/employees"
    },
    {
      title: language === "ar" ? "التمويل والدعم" : "Financing and support",
      icon: <CreditCard />,
      to: "/services/financing"
    },
    {
      title: language === "ar" ? "التراخيص والتصاريح" : "Licenses and permits",
      icon: <FileSearch />,
      to: "/services/licenses"
    },
    {
      title: language === "ar" ? "العقود والمناقصات" : "Contracts and tenders",
      icon: <Briefcase />,
      to: "/services/contracts"
    },
    {
      title: language === "ar" ? "الإحصاءات والبيانات" : "Statistics and data",
      icon: <BarChart />,
      to: "/services/statistics"
    },
    {
      title: language === "ar" ? "التجارة الدولية" : "International trade",
      icon: <Globe />,
      to: "/services/international-trade"
    },
    {
      title: language === "ar" ? "الامتثال والتنظيم" : "Compliance and regulation",
      icon: <ShieldCheck />,
      to: "/services/compliance"
    },
    {
      title: language === "ar" ? "اللوجستيات والنقل" : "Logistics and transportation",
      icon: <Truck />,
      to: "/services/logistics"
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
            {language === "ar" ? "الخدمات الإلكترونية لرواد الأعمال" : "E-services for entrepreneurs"}
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
              {language === "ar" ? "تسجيل الدخول إلى بيئة الخدمة الذاتية" : "Log in to the self-service environment"}
            </Button>
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default EntrepreneurServices;
