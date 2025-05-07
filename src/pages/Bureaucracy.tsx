import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronRight,
  Stamp,
  FileSignature,
  Building,
  UserCheck,
  ArrowRight,
  User,
  Globe,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import CountrySelect from "@/components/CountrySelect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Question {
  id: number;
  text: {
    ar: string;
    en: string;
  };
  options: {
    id: string;
    text: {
      ar: string;
      en: string;
    };
    score: number;
  }[];
  type?: "personal" | "business" | "both"; // Type of user this question is for
}

interface Result {
  min: number;
  max: number;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  icon: React.ReactNode;
}

// Enum for different steps in the test flow
enum TestStep {
  WELCOME = "welcome",
  USER_TYPE = "user_type",
  ENTER_NAME = "enter_name",
  SELECT_COUNTRY = "select_country",
  QUESTIONS = "questions",
  ENTER_EMAIL = "enter_email",
  RESULTS = "results",
}

const Bureaucracy: React.FC = () => {
  const [language, setLanguage] = useState<string>("ar");
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // New state for multi-step flow
  const [currentStep, setCurrentStep] = useState<TestStep>(TestStep.WELCOME);
  const [userType, setUserType] = useState<"personal" | "business" | null>(
    null
  );
  const [userName, setUserName] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subscribeToNewsletter, setSubscribeToNewsletter] =
    useState<boolean>(false);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

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

  // Personal questions
  const personalQuestions: Question[] = [
    {
      id: 1,
      text: {
        ar: "كم عدد المستندات التي تحتاجها عادة لإنجاز معاملة حكومية شخصية؟",
        en: "How many documents do you typically need to complete a personal government transaction?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "1-2 مستند فقط",
            en: "Just 1-2 documents",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "3-5 مستندات",
            en: "3-5 documents",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "أكثر من 5 مستندات",
            en: "More than 5 documents",
          },
          score: 10,
        },
      ],
      type: "personal",
    },
    {
      id: 2,
      text: {
        ar: "كم من الوقت تقضيه عادة في الانتظار لإنجاز معاملة حكومية شخصية؟",
        en: "How much time do you typically spend waiting to complete a personal government transaction?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "أقل من ساعة",
            en: "Less than an hour",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "ساعة إلى ثلاث ساعات",
            en: "1-3 hours",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "أكثر من ثلاث ساعات",
            en: "More than 3 hours",
          },
          score: 10,
        },
      ],
      type: "personal",
    },
    {
      id: 3,
      text: {
        ar: "كم من الوقت يستغرق عادة إصدار جواز سفر جديد؟",
        en: "How long does it typically take to issue a new passport?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "أقل من أسبوع",
            en: "Less than a week",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "1-4 أسابيع",
            en: "1-4 weeks",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "أكثر من شهر",
            en: "More than a month",
          },
          score: 10,
        },
      ],
      type: "personal",
    },
    {
      id: 4,
      text: {
        ar: "هل تستطيع تتبع حالة معاملتك الشخصية إلكترونياً؟",
        en: "Can you track the status of your personal government transaction electronically?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "نعم، لجميع المعاملات مع تحديثات فورية",
            en: "Yes, for all transactions with real-time updates",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "لبعض المعاملات فقط أو مع تحديثات متأخرة",
            en: "For some transactions only or with delayed updates",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "لا، يجب الذهاب شخصياً للاستعلام عن حالة المعاملة",
            en: "No, you must go in person to inquire about the status",
          },
          score: 10,
        },
      ],
      type: "personal",
    },
    {
      id: 5,
      text: {
        ar: "هل تثق في أن معلوماتك الشخصية محمية عند التعامل مع الدوائر الحكومية؟",
        en: "Do you trust that your personal information is protected when dealing with government departments?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "نعم، أثق تماماً في أنظمة حماية البيانات الحكومية",
            en: "Yes, I fully trust government data protection systems",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "إلى حد ما، لكن لدي بعض المخاوف",
            en: "Somewhat, but I have some concerns",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "لا، أشعر بالقلق بشأن خصوصية بياناتي",
            en: "No, I'm worried about my data privacy",
          },
          score: 10,
        },
      ],
      type: "personal",
    },
    {
      id: 6,
      text: {
        ar: "هل تحتاج إلى واسطة (معارف) لتسريع معاملاتك الشخصية الحكومية؟",
        en: "Do you need connections to speed up your personal government transactions?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "أبداً - جميع المعاملات تتم بنفس السرعة للجميع",
            en: "Never - all transactions proceed at the same speed for everyone",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "أحياناً - في بعض المعاملات المعقدة",
            en: "Sometimes - for some complex transactions",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "دائماً - من الصعب إنجاز أي معاملة بدون واسطة",
            en: "Always - it's difficult to complete any transaction without connections",
          },
          score: 10,
        },
      ],
      type: "personal",
    },
    {
      id: 7,
      text: {
        ar: "كيف تقيم وضوح التعليمات والإرشادات للإجراءات الحكومية الشخصية؟",
        en: "How would you rate the clarity of instructions and guidelines for personal government procedures?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "واضحة جداً وسهلة الفهم",
            en: "Very clear and easy to understand",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "مفهومة نسبياً مع بعض الغموض",
            en: "Relatively understandable with some ambiguity",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "غامضة ومربكة في معظم الأحيان",
            en: "Ambiguous and confusing most of the time",
          },
          score: 10,
        },
      ],
      type: "personal",
    },
    {
      id: 8,
      text: {
        ar: "كم مرة تضطر لزيارة دائرة حكومية لإنجاز معاملة واحدة؟",
        en: "How many times do you have to visit a government office to complete a single transaction?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "مرة واحدة فقط",
            en: "Just once",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "2-3 مرات",
            en: "2-3 times",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "أكثر من 3 مرات",
            en: "More than 3 times",
          },
          score: 10,
        },
      ],
      type: "personal",
    },
    {
      id: 9,
      text: {
        ar: "هل تحتاج إلى دفع رسوم إضافية (غير رسمية) لتسريع معاملاتك؟",
        en: "Do you need to pay additional (unofficial) fees to speed up your transactions?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "أبداً - جميع الرسوم رسمية ومحددة",
            en: "Never - all fees are official and fixed",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "أحياناً - في بعض المعاملات المعقدة",
            en: "Sometimes - for some complex transactions",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "غالباً - من الصعب إنجاز المعاملات بدون دفع رسوم إضافية",
            en: "Often - it's difficult to complete transactions without paying additional fees",
          },
          score: 10,
        },
      ],
      type: "personal",
    },
    {
      id: 10,
      text: {
        ar: "هل يمكنك الحصول على معلومات دقيقة عن الإجراءات الحكومية قبل زيارة الدائرة؟",
        en: "Can you get accurate information about government procedures before visiting the office?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "نعم، المعلومات متاحة بسهولة ودقيقة",
            en: "Yes, information is easily available and accurate",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "جزئياً، بعض المعلومات متاحة لكنها قد تكون غير محدثة",
            en: "Partially, some information is available but may not be up-to-date",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "لا، من الصعب الحصول على معلومات دقيقة قبل الزيارة",
            en: "No, it's difficult to get accurate information before visiting",
          },
          score: 10,
        },
      ],
      type: "personal",
    },
  ];

  // Business questions
  const businessQuestions: Question[] = [
    {
      id: 1,
      text: {
        ar: "كم عدد المستندات التي تحتاجها عادة لإنجاز معاملة حكومية للشركة؟",
        en: "How many documents do you typically need to complete a business government transaction?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "1-3 مستندات فقط",
            en: "Just 1-3 documents",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "4-7 مستندات",
            en: "4-7 documents",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "أكثر من 7 مستندات",
            en: "More than 7 documents",
          },
          score: 10,
        },
      ],
      type: "business",
    },
    {
      id: 2,
      text: {
        ar: "كم من الوقت تستغرق عملية تسجيل شركة جديدة؟",
        en: "How long does it take to register a new company?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "أقل من أسبوع",
            en: "Less than a week",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "1-4 أسابيع",
            en: "1-4 weeks",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "أكثر من شهر",
            en: "More than a month",
          },
          score: 10,
        },
      ],
      type: "business",
    },
    {
      id: 3,
      text: {
        ar: "كم عدد الدوائر الحكومية التي تحتاج لزيارتها لإنجاز معاملة تجارية واحدة؟",
        en: "How many government offices do you need to visit to complete a single business transaction?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "مكتب واحد فقط",
            en: "Just one office",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "2-3 مكاتب",
            en: "2-3 offices",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "أكثر من 3 مكاتب",
            en: "More than 3 offices",
          },
          score: 10,
        },
      ],
      type: "business",
    },
    {
      id: 4,
      text: {
        ar: "هل يمكن للشركات إنجاز المعاملات الحكومية عبر الإنترنت؟",
        en: "Can businesses complete government transactions online?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "نعم، معظم المعاملات متاحة إلكترونياً",
            en: "Yes, most transactions are available online",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "بعض المعاملات فقط متاحة إلكترونياً",
            en: "Only some transactions are available online",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "لا، يجب الحضور شخصياً لمعظم المعاملات",
            en: "No, most transactions require in-person visits",
          },
          score: 10,
        },
      ],
      type: "business",
    },
    {
      id: 5,
      text: {
        ar: "كم مرة تضطر الشركة لتقديم نفس المعلومات لدوائر حكومية مختلفة؟",
        en: "How often does your business have to provide the same information to different government departments?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "نادراً - المعلومات مشتركة بين الدوائر",
            en: "Rarely - information is shared between departments",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "أحياناً - بعض المعلومات يجب تكرارها",
            en: "Sometimes - some information needs to be repeated",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "دائماً - نقدم نفس المعلومات في كل مرة",
            en: "Always - we provide the same information every time",
          },
          score: 10,
        },
      ],
      type: "business",
    },
    {
      id: 6,
      text: {
        ar: "هل تحتاج الشركات إلى وسطاء أو مستشارين لإنجاز المعاملات الحكومية؟",
        en: "Do businesses need intermediaries or consultants to complete government transactions?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "أبداً - يمكن إنجاز جميع المعاملات مباشرة",
            en: "Never - all transactions can be completed directly",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "أحياناً - للمعاملات المعقدة فقط",
            en: "Sometimes - only for complex transactions",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "دائماً - من الصعب إنجاز أي معاملة بدون وسيط",
            en: "Always - it's difficult to complete any transaction without an intermediary",
          },
          score: 10,
        },
      ],
      type: "business",
    },
    {
      id: 7,
      text: {
        ar: "كيف تقيم وضوح القوانين واللوائح التنظيمية للأعمال التجارية؟",
        en: "How would you rate the clarity of laws and regulations for businesses?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "واضحة جداً وسهلة الفهم",
            en: "Very clear and easy to understand",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "مفهومة نسبياً مع بعض الغموض",
            en: "Relatively understandable with some ambiguity",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "غامضة ومربكة في معظم الأحيان",
            en: "Ambiguous and confusing most of the time",
          },
          score: 10,
        },
      ],
      type: "business",
    },
    {
      id: 8,
      text: {
        ar: "كم من الوقت يستغرق الحصول على موافقات بيئية للمشاريع التجارية؟",
        en: "How long does it take to obtain environmental approvals for business projects?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "أقل من أسبوعين",
            en: "Less than two weeks",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "2-8 أسابيع",
            en: "2-8 weeks",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "أكثر من شهرين",
            en: "More than two months",
          },
          score: 10,
        },
      ],
      type: "business",
    },
    {
      id: 9,
      text: {
        ar: "هل تحتاج الشركات إلى دفع رسوم إضافية (غير رسمية) لتسريع المعاملات الحكومية؟",
        en: "Do businesses need to pay additional (unofficial) fees to speed up government transactions?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "أبداً - جميع الرسوم رسمية ومحددة",
            en: "Never - all fees are official and fixed",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "أحياناً - في بعض المعاملات المعقدة",
            en: "Sometimes - for some complex transactions",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "غالباً - من الصعب إنجاز المعاملات بدون دفع رسوم إضافية",
            en: "Often - it's difficult to complete transactions without paying additional fees",
          },
          score: 10,
        },
      ],
      type: "business",
    },
    {
      id: 10,
      text: {
        ar: "كيف تقيم سهولة الامتثال للمتطلبات الضريبية للشركات؟",
        en: "How would you rate the ease of compliance with tax requirements for businesses?",
      },
      options: [
        {
          id: "a",
          text: {
            ar: "سهلة وواضحة مع أنظمة إلكترونية فعالة",
            en: "Easy and clear with effective electronic systems",
          },
          score: 0,
        },
        {
          id: "b",
          text: {
            ar: "معقدة نوعاً ما لكن يمكن التعامل معها",
            en: "Somewhat complex but manageable",
          },
          score: 5,
        },
        {
          id: "c",
          text: {
            ar: "معقدة للغاية وتستهلك الكثير من الوقت والموارد",
            en: "Very complex and consumes a lot of time and resources",
          },
          score: 10,
        },
      ],
      type: "business",
    },
  ];

  // Interfaz para países con banderas
  interface CountryWithFlag {
    name: string;
    code: string;
  }

  // Lista de países con sus códigos para las banderas
  const countriesWithFlags: CountryWithFlag[] = [
    { name: "أفغانستان", code: "af" },
    { name: "ألبانيا", code: "al" },
    { name: "الجزائر", code: "dz" },
    { name: "أندورا", code: "ad" },
    { name: "أنغولا", code: "ao" },
    { name: "أنتيغوا وبربودا", code: "ag" },
    { name: "الأرجنتين", code: "ar" },
    { name: "أرمينيا", code: "am" },
    { name: "أستراليا", code: "au" },
    { name: "النمسا", code: "at" },
    { name: "أذربيجان", code: "az" },
    { name: "البهاما", code: "bs" },
    { name: "البحرين", code: "bh" },
    { name: "بنغلاديش", code: "bd" },
    { name: "بربادوس", code: "bb" },
    { name: "بيلاروسيا", code: "by" },
    { name: "بلجيكا", code: "be" },
    { name: "بليز", code: "bz" },
    { name: "بنين", code: "bj" },
    { name: "بوتان", code: "bt" },
    { name: "بوليفيا", code: "bo" },
    { name: "البوسنة والهرسك", code: "ba" },
    { name: "بوتسوانا", code: "bw" },
    { name: "البرازيل", code: "br" },
    { name: "بروناي", code: "bn" },
    { name: "بلغاريا", code: "bg" },
    { name: "بوركينا فاسو", code: "bf" },
    { name: "بوروندي", code: "bi" },
    { name: "كمبوديا", code: "kh" },
    { name: "الكاميرون", code: "cm" },
    { name: "كندا", code: "ca" },
    { name: "الرأس الأخضر", code: "cv" },
    { name: "جمهورية أفريقيا الوسطى", code: "cf" },
    { name: "تشاد", code: "td" },
    { name: "تشيلي", code: "cl" },
    { name: "الصين", code: "cn" },
    { name: "كولومبيا", code: "co" },
    { name: "جزر القمر", code: "km" },
    { name: "الكونغو", code: "cg" },
    { name: "كوستاريكا", code: "cr" },
    { name: "كرواتيا", code: "hr" },
    { name: "كوبا", code: "cu" },
    { name: "قبرص", code: "cy" },
    { name: "جمهورية التشيك", code: "cz" },
    { name: "الدنمارك", code: "dk" },
    { name: "جيبوتي", code: "dj" },
    { name: "دومينيكا", code: "dm" },
    { name: "جمهورية الدومينيكان", code: "do" },
    { name: "الإكوادور", code: "ec" },
    { name: "مصر", code: "eg" },
    { name: "السلفادور", code: "sv" },
    { name: "غينيا الاستوائية", code: "gq" },
    { name: "إريتريا", code: "er" },
    { name: "إستونيا", code: "ee" },
    { name: "إثيوبيا", code: "et" },
    { name: "فيجي", code: "fj" },
    { name: "فنلندا", code: "fi" },
    { name: "فرنسا", code: "fr" },
    { name: "الغابون", code: "ga" },
    { name: "غامبيا", code: "gm" },
    { name: "جورجيا", code: "ge" },
    { name: "ألمانيا", code: "de" },
    { name: "غانا", code: "gh" },
    { name: "اليونان", code: "gr" },
    { name: "غرينادا", code: "gd" },
    { name: "غواتيمالا", code: "gt" },
    { name: "غينيا", code: "gn" },
    { name: "غينيا بيساو", code: "gw" },
    { name: "غيانا", code: "gy" },
    { name: "هايتي", code: "ht" },
    { name: "هندوراس", code: "hn" },
    { name: "المجر", code: "hu" },
    { name: "آيسلندا", code: "is" },
    { name: "الهند", code: "in" },
    { name: "إندونيسيا", code: "id" },
    { name: "إيران", code: "ir" },
    { name: "العراق", code: "iq" },
    { name: "أيرلندا", code: "ie" },
    { name: "إسرائيل", code: "il" },
    { name: "إيطاليا", code: "it" },
    { name: "جامايكا", code: "jm" },
    { name: "اليابان", code: "jp" },
    { name: "الأردن", code: "jo" },
    { name: "كازاخستان", code: "kz" },
    { name: "كينيا", code: "ke" },
    { name: "كيريباتي", code: "ki" },
    { name: "كوريا الشمالية", code: "kp" },
    { name: "كوريا الجنوبية", code: "kr" },
    { name: "الكويت", code: "kw" },
    { name: "قرغيزستان", code: "kg" },
    { name: "لاوس", code: "la" },
    { name: "لاتفيا", code: "lv" },
    { name: "لبنان", code: "lb" },
    { name: "ليسوتو", code: "ls" },
    { name: "ليبيريا", code: "lr" },
    { name: "ليبيا", code: "ly" },
    { name: "ليختنشتاين", code: "li" },
    { name: "ليتوانيا", code: "lt" },
    { name: "لوكسمبورغ", code: "lu" },
    { name: "مدغشقر", code: "mg" },
    { name: "مالاوي", code: "mw" },
    { name: "ماليزيا", code: "my" },
    { name: "جزر المالديف", code: "mv" },
    { name: "مالي", code: "ml" },
    { name: "مالطا", code: "mt" },
    { name: "جزر مارشال", code: "mh" },
    { name: "موريتانيا", code: "mr" },
    { name: "موريشيوس", code: "mu" },
    { name: "المكسيك", code: "mx" },
    { name: "ميكرونيزيا", code: "fm" },
    { name: "مولدوفا", code: "md" },
    { name: "موناكو", code: "mc" },
    { name: "منغوليا", code: "mn" },
    { name: "الجبل الأسود", code: "me" },
    { name: "المغرب", code: "ma" },
    { name: "موزمبيق", code: "mz" },
    { name: "ميانمار", code: "mm" },
    { name: "ناميبيا", code: "na" },
    { name: "ناورو", code: "nr" },
    { name: "نيبال", code: "np" },
    { name: "هولندا", code: "nl" },
    { name: "نيوزيلندا", code: "nz" },
    { name: "نيكاراغوا", code: "ni" },
    { name: "النيجر", code: "ne" },
    { name: "نيجيريا", code: "ng" },
    { name: "مقدونيا الشمالية", code: "mk" },
    { name: "النرويج", code: "no" },
    { name: "عمان", code: "om" },
    { name: "باكستان", code: "pk" },
    { name: "بالاو", code: "pw" },
    { name: "بنما", code: "pa" },
    { name: "بابوا غينيا الجديدة", code: "pg" },
    { name: "باراغواي", code: "py" },
    { name: "بيرو", code: "pe" },
    { name: "الفلبين", code: "ph" },
    { name: "بولندا", code: "pl" },
    { name: "البرتغال", code: "pt" },
    { name: "قطر", code: "qa" },
    { name: "رومانيا", code: "ro" },
    { name: "روسيا", code: "ru" },
    { name: "رواندا", code: "rw" },
    { name: "سانت كيتس ونيفيس", code: "kn" },
    { name: "سانت لوسيا", code: "lc" },
    { name: "سانت فنسنت والغرينادين", code: "vc" },
    { name: "ساموا", code: "ws" },
    { name: "سان مارينو", code: "sm" },
    { name: "ساو تومي وبرينسيبي", code: "st" },
    { name: "المملكة العربية السعودية", code: "sa" },
    { name: "السنغال", code: "sn" },
    { name: "صربيا", code: "rs" },
    { name: "سيشيل", code: "sc" },
    { name: "سيراليون", code: "sl" },
    { name: "سنغافورة", code: "sg" },
    { name: "سلوفاكيا", code: "sk" },
    { name: "سلوفينيا", code: "si" },
    { name: "جزر سليمان", code: "sb" },
    { name: "الصومال", code: "so" },
    { name: "جنوب أفريقيا", code: "za" },
    { name: "جنوب السودان", code: "ss" },
    { name: "إسبانيا", code: "es" },
    { name: "سريلانكا", code: "lk" },
    { name: "السودان", code: "sd" },
    { name: "سورينام", code: "sr" },
    { name: "سوازيلاند", code: "sz" },
    { name: "السويد", code: "se" },
    { name: "سويسرا", code: "ch" },
    // Bandera personalizada para Siria con tres estrellas
    { name: "سوريا", code: "sy" },
    { name: "تايوان", code: "tw" },
    { name: "طاجيكستان", code: "tj" },
    { name: "تنزانيا", code: "tz" },
    { name: "تايلاند", code: "th" },
    { name: "تيمور الشرقية", code: "tl" },
    { name: "توغو", code: "tg" },
    { name: "تونغا", code: "to" },
    { name: "ترينيداد وتوباغو", code: "tt" },
    { name: "تونس", code: "tn" },
    { name: "تركيا", code: "tr" },
    { name: "تركمانستان", code: "tm" },
    { name: "توفالو", code: "tv" },
    { name: "أوغندا", code: "ug" },
    { name: "أوكرانيا", code: "ua" },
    { name: "الإمارات العربية المتحدة", code: "ae" },
    { name: "المملكة المتحدة", code: "gb" },
    { name: "الولايات المتحدة", code: "us" },
    { name: "أوروغواي", code: "uy" },
    { name: "أوزبكستان", code: "uz" },
    { name: "فانواتو", code: "vu" },
    { name: "الفاتيكان", code: "va" },
    { name: "فنزويلا", code: "ve" },
    { name: "فيتنام", code: "vn" },
    { name: "اليمن", code: "ye" },
    { name: "زامبيا", code: "zm" },
    { name: "زيمبابوي", code: "zw" },
  ];

  // Reordenar la lista para que Siria aparezca primero
  const syriaCountry = countriesWithFlags.find(
    (country) => country.code === "sy"
  );
  const otherCountries = countriesWithFlags.filter(
    (country) => country.code !== "sy"
  );
  const reorderedCountriesWithFlags = syriaCountry
    ? [syriaCountry, ...otherCountries]
    : countriesWithFlags;

  // Extraer solo los nombres de los países para compatibilidad con el código existente
  const countries = reorderedCountriesWithFlags.map((country) => country.name);

  const results: Result[] = [
    {
      min: 0,
      max: 30,
      title: {
        ar: "مستقبل رقمي",
        en: "Digital Future",
      },
      description: {
        ar: "أنت تعيش في بيئة متقدمة رقمياً حيث البيروقراطية في حدها الأدنى. معظم الخدمات الحكومية متاحة إلكترونياً وتتميز بالكفاءة والسرعة.",
        en: "You live in a digitally advanced environment where bureaucracy is minimal. Most government services are available online and are efficient and fast.",
      },
      icon: <CheckCircle className="h-12 w-12 text-green-500" />,
    },
    {
      min: 31,
      max: 60,
      title: {
        ar: "في مرحلة انتقالية",
        en: "In Transition",
      },
      description: {
        ar: "أنت تعيش في بيئة تشهد تحولاً رقمياً تدريجياً. بعض الخدمات متاحة إلكترونياً، لكن لا تزال هناك حاجة للتعامل مع البيروقراطية التقليدية في بعض الأحيان.",
        en: "You live in an environment that is gradually transitioning to digital. Some services are available online, but there is still a need to deal with traditional bureaucracy at times.",
      },
      icon: <AlertCircle className="h-12 w-12 text-yellow-500" />,
    },
    {
      min: 61,
      max: 100,
      title: {
        ar: "بيروقراطية تقليدية",
        en: "Traditional Bureaucracy",
      },
      description: {
        ar: "أنت تعيش في بيئة تسودها البيروقراطية التقليدية. معظم المعاملات تتطلب زيارات شخصية متعددة وأوراق كثيرة وانتظار طويل.",
        en: "You live in an environment dominated by traditional bureaucracy. Most transactions require multiple in-person visits, lots of paperwork, and long waiting times.",
      },
      icon: <XCircle className="h-12 w-12 text-red-500" />,
    },
  ];

  // Function to get questions based on user type
  const getQuestions = (): Question[] => {
    if (userType === "personal") {
      return personalQuestions;
    } else if (userType === "business") {
      return businessQuestions;
    }
    return [];
  };

  // Get the current set of questions based on user type
  const questions = userType ? getQuestions() : [];

  const handleAnswer = (
    questionId: number,
    optionId: string,
    score: number
  ) => {
    setAnswers({ ...answers, [questionId]: optionId });
    setScore((prevScore) => prevScore + score);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep(TestStep.ENTER_EMAIL);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers({});
    setCurrentStep(TestStep.WELCOME);
    setUserType(null);
    setUserName("");
    setSelectedCountry("");
    setEmail("");
    setSubscribeToNewsletter(false);
    setAcceptTerms(false);
  };

  const getCurrentResult = () => {
    return results.find((result) => score >= result.min && score <= result.max);
  };

  const currentResult = getCurrentResult();

  // Functions to navigate between steps
  const goToUserTypeSelection = () => {
    setCurrentStep(TestStep.USER_TYPE);
  };

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setCurrentStep(TestStep.SELECT_COUNTRY);
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setCurrentStep(TestStep.QUESTIONS);
  };

  const handleEmailSubmit = () => {
    setCurrentStep(TestStep.RESULTS);
  };

  return (
    <Layout>
      {currentStep === TestStep.WELCOME && (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="text-center px-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">
              {language === "ar"
                ? "هل حياتك مليئة بالبيروقراطية؟"
                : "Is your life full of bureaucracy?"}
            </h1>
            <Button
              onClick={goToUserTypeSelection}
              size="lg"
              className="text-lg px-8 py-6 rounded-full"
            >
              <span>
                {language === "ar"
                  ? "نعم، أريد أن أعرف"
                  : "Yes, I want to know"}
              </span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      {currentStep === TestStep.USER_TYPE && (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              {language === "ar"
                ? "ما نوع المعاملات الحكومية التي تهمك؟"
                : "What type of government transactions are you interested in?"}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card
                className="hover:shadow-lg transition-all cursor-pointer"
                onClick={() => {
                  setUserType("personal");
                  setCurrentStep(TestStep.ENTER_NAME);
                }}
              >
                <CardHeader>
                  <CardTitle>
                    {language === "ar"
                      ? "معاملات شخصية"
                      : "Personal Transactions"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {language === "ar"
                      ? "الخدمات الحكومية للأفراد مثل الهوية الشخصية، جواز السفر، رخصة القيادة، إلخ."
                      : "Government services for individuals such as ID cards, passports, driver's licenses, etc."}
                  </p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg transition-all cursor-pointer"
                onClick={() => {
                  setUserType("business");
                  setCurrentStep(TestStep.ENTER_NAME);
                }}
              >
                <CardHeader>
                  <CardTitle>
                    {language === "ar"
                      ? "معاملات الشركات"
                      : "Business Transactions"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {language === "ar"
                      ? "الخدمات الحكومية للشركات مثل تسجيل الشركات، التراخيص التجارية، الضرائب، إلخ."
                      : "Government services for businesses such as company registration, business licenses, taxes, etc."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {currentStep === TestStep.ENTER_NAME && (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="px-4 max-w-md w-full">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  {language === "ar"
                    ? userType === "personal"
                      ? "أدخل اسمك"
                      : "أدخل اسم الشركة"
                    : userType === "personal"
                    ? "Enter Your Name"
                    : "Enter Company Name"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {language === "ar"
                        ? userType === "personal"
                          ? "الاسم"
                          : "اسم الشركة"
                        : userType === "personal"
                        ? "Name"
                        : "Company Name"}
                    </Label>
                    <Input
                      id="name"
                      placeholder={
                        language === "ar"
                          ? userType === "personal"
                            ? "أدخل اسمك هنا"
                            : "أدخل اسم الشركة هنا"
                          : userType === "personal"
                          ? "Enter your name here"
                          : "Enter company name here"
                      }
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => handleNameSubmit(userName)}
                    disabled={!userName.trim()}
                  >
                    {language === "ar" ? "التالي" : "Next"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {currentStep === TestStep.SELECT_COUNTRY && (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="px-4 max-w-md w-full">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  {language === "ar" ? "اختر الدولة" : "Select Country"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">
                      {language === "ar" ? "الدولة" : "Country"}
                    </Label>
                    <CountrySelect
                      countries={reorderedCountriesWithFlags}
                      value={selectedCountry}
                      onChange={setSelectedCountry}
                      placeholder={
                        language === "ar" ? "اختر الدولة" : "Select a country"
                      }
                      className="w-full"
                    />
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => handleCountrySelect(selectedCountry)}
                    disabled={!selectedCountry}
                  >
                    {language === "ar" ? "بدء الاختبار" : "Start Test"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {currentStep === TestStep.QUESTIONS &&
        userType &&
        questions &&
        questions.length > 0 && (
          <Container className="py-12">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">
                  {language === "ar"
                    ? "اختبار البيروقراطية"
                    : "Bureaucracy Test"}
                </h1>
                <p className="text-gray-600">
                  {language === "ar"
                    ? userType === "personal"
                      ? "اكتشف مدى تعقيد الإجراءات الحكومية الشخصية وكيف يمكن للحلول الرقمية أن تبسطها"
                      : "اكتشف مدى تعقيد الإجراءات الحكومية للشركات وكيف يمكن للحلول الرقمية أن تبسطها"
                    : userType === "personal"
                    ? "Discover how complex personal government procedures are and how digital solutions can simplify them"
                    : "Discover how complex business government procedures are and how digital solutions can simplify them"}
                </p>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>
                    {language === "ar" ? "تقدمك" : "Your Progress"}
                  </CardTitle>
                  <Progress
                    value={(currentQuestion / questions.length) * 100}
                    className="h-2"
                  />
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-syria-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                      {currentQuestion + 1}
                    </span>
                    <span>
                      {language === "ar"
                        ? questions[currentQuestion].text.ar
                        : questions[currentQuestion].text.en}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option) => (
                      <Button
                        key={option.id}
                        variant={
                          answers[questions[currentQuestion].id] === option.id
                            ? "default"
                            : "outline"
                        }
                        className="w-full justify-start text-left h-auto py-4 px-6"
                        onClick={() =>
                          handleAnswer(
                            questions[currentQuestion].id,
                            option.id,
                            option.score
                          )
                        }
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                            {option.id.toUpperCase()}
                          </div>
                          <span>
                            {language === "ar"
                              ? option.text.ar
                              : option.text.en}
                          </span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </Container>
        )}

      {currentStep === TestStep.ENTER_EMAIL && (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="max-w-xl mx-auto text-center px-4">
            <h1 className="text-3xl font-bold mb-6">
              {language === "ar"
                ? "يتم حساب مستوى البيروقراطية لديك..."
                : "Calculating your bureaucracy level..."}
            </h1>

            <p className="text-gray-600 mb-8">
              {language === "ar"
                ? "يرجى إدخال بريدك الإلكتروني الذي تتابع البيروقراطية العامة به بشكل شخصي"
                : "Please enter your personal email that you follow general bureaucracy with"}
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="mb-4">
                <Label htmlFor="email" className="text-right block mb-2">
                  {language === "ar"
                    ? "بريدك الإلكتروني الشخصي"
                    : "Your personal email"}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    language === "ar"
                      ? "أدخل بريدك الإلكتروني"
                      : "Enter your email"
                  }
                  className="w-full"
                />
              </div>

              <div className="space-y-4 text-right">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Label
                    htmlFor="newsletter"
                    className="text-sm cursor-pointer flex-1"
                  >
                    {language === "ar"
                      ? "أشترك في قائمة الإخبارية لـ e-syria"
                      : "Subscribe to e-syria newsletter"}
                  </Label>
                  <Checkbox
                    id="newsletter"
                    checked={subscribeToNewsletter}
                    onCheckedChange={(checked) =>
                      setSubscribeToNewsletter(checked === true)
                    }
                  />
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <Label
                    htmlFor="terms"
                    className="text-sm cursor-pointer flex-1"
                  >
                    {language === "ar"
                      ? "نشر قيمك وأفكار على سياسة الخصوصية للأنشطة الحكومية"
                      : "Share your values and ideas on privacy policy for government activities"}
                  </Label>
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) =>
                      setAcceptTerms(checked === true)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(TestStep.QUESTIONS)}
                className="px-6"
              >
                {language === "ar" ? "سابق" : "Back"}
              </Button>

              <Button
                onClick={handleEmailSubmit}
                className="px-6"
                disabled={!email.includes("@")}
              >
                {language === "ar" ? "أرني النتائج" : "Show Results"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentStep === TestStep.RESULTS && (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl font-bold mb-4">
              {language === "ar" ? "رسمياً" : "Officially"}
            </h1>

            <div className="text-8xl font-bold mb-6">
              {Math.round((score / (questions.length * 10)) * 100)}%
            </div>

            <h2 className="text-3xl font-bold mb-12">
              {language === "ar" ? "البيروقراطية" : "Bureaucracy"}
            </h2>

            <p className="text-xl mb-8">
              {language === "ar"
                ? `${userName}، ${
                    score < 30
                      ? "أنت بيروقراطي في لا شيء"
                      : score < 60
                      ? "أنت بيروقراطي بشكل معتدل"
                      : "أنت بيروقراطي بشكل كبير"
                  }`
                : `${userName}, ${
                    score < 30
                      ? "you are bureaucratic in nothing"
                      : score < 60
                      ? "you are moderately bureaucratic"
                      : "you are highly bureaucratic"
                  }`}
            </p>

            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://twitter.com/intent/tweet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-[#1a91da] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] text-white p-3 rounded-full hover:bg-[#0958a7] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <Button onClick={restartQuiz} className="px-8 py-2 rounded-full">
              {language === "ar"
                ? "قم بإجراء الاختبار مرة أخرى"
                : "Take the test again"}
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Bureaucracy;
