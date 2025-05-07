import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
  UserCheck
} from "lucide-react";

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

const Bureaucracy: React.FC = () => {
  const [language, setLanguage] = useState<string>("ar");
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});

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

  const questions: Question[] = [
    {
      id: 1,
      text: {
        ar: "كم عدد المستندات التي تحتاجها عادة لإنجاز معاملة حكومية؟",
        en: "How many documents do you typically need to complete a government transaction?"
      },
      options: [
        { 
          id: "a", 
          text: { 
            ar: "1-2 مستند فقط", 
            en: "Just 1-2 documents" 
          }, 
          score: 0 
        },
        { 
          id: "b", 
          text: { 
            ar: "3-5 مستندات", 
            en: "3-5 documents" 
          }, 
          score: 5 
        },
        { 
          id: "c", 
          text: { 
            ar: "أكثر من 5 مستندات", 
            en: "More than 5 documents" 
          }, 
          score: 10 
        }
      ]
    },
    {
      id: 2,
      text: {
        ar: "كم من الوقت تقضيه عادة في الانتظار لإنجاز معاملة حكومية؟",
        en: "How much time do you typically spend waiting to complete a government transaction?"
      },
      options: [
        { 
          id: "a", 
          text: { 
            ar: "أقل من ساعة", 
            en: "Less than an hour" 
          }, 
          score: 0 
        },
        { 
          id: "b", 
          text: { 
            ar: "ساعة إلى ثلاث ساعات", 
            en: "1-3 hours" 
          }, 
          score: 5 
        },
        { 
          id: "c", 
          text: { 
            ar: "أكثر من ثلاث ساعات", 
            en: "More than 3 hours" 
          }, 
          score: 10 
        }
      ]
    },
    {
      id: 3,
      text: {
        ar: "كم عدد الدوائر الحكومية التي تحتاج لزيارتها لإنجاز معاملة واحدة؟",
        en: "How many government offices do you need to visit to complete a single transaction?"
      },
      options: [
        { 
          id: "a", 
          text: { 
            ar: "مكتب واحد فقط", 
            en: "Just one office" 
          }, 
          score: 0 
        },
        { 
          id: "b", 
          text: { 
            ar: "2-3 مكاتب", 
            en: "2-3 offices" 
          }, 
          score: 5 
        },
        { 
          id: "c", 
          text: { 
            ar: "أكثر من 3 مكاتب", 
            en: "More than 3 offices" 
          }, 
          score: 10 
        }
      ]
    },
    {
      id: 4,
      text: {
        ar: "كم مرة تضطر لتقديم نفس المعلومات لدوائر حكومية مختلفة؟",
        en: "How often do you have to provide the same information to different government departments?"
      },
      options: [
        { 
          id: "a", 
          text: { 
            ar: "نادراً - المعلومات مشتركة بين الدوائر", 
            en: "Rarely - information is shared between departments" 
          }, 
          score: 0 
        },
        { 
          id: "b", 
          text: { 
            ar: "أحياناً - بعض المعلومات يجب تكرارها", 
            en: "Sometimes - some information needs to be repeated" 
          }, 
          score: 5 
        },
        { 
          id: "c", 
          text: { 
            ar: "دائماً - أقدم نفس المعلومات في كل مرة", 
            en: "Always - I provide the same information every time" 
          }, 
          score: 10 
        }
      ]
    },
    {
      id: 5,
      text: {
        ar: "هل يمكنك إنجاز المعاملات الحكومية عبر الإنترنت؟",
        en: "Can you complete government transactions online?"
      },
      options: [
        { 
          id: "a", 
          text: { 
            ar: "نعم، معظم المعاملات متاحة إلكترونياً", 
            en: "Yes, most transactions are available online" 
          }, 
          score: 0 
        },
        { 
          id: "b", 
          text: { 
            ar: "بعض المعاملات فقط متاحة إلكترونياً", 
            en: "Only some transactions are available online" 
          }, 
          score: 5 
        },
        { 
          id: "c", 
          text: { 
            ar: "لا، يجب الحضور شخصياً لمعظم المعاملات", 
            en: "No, most transactions require in-person visits" 
          }, 
          score: 10 
        }
      ]
    }
  ];

  const results: Result[] = [
    {
      min: 0,
      max: 15,
      title: {
        ar: "مستقبل رقمي",
        en: "Digital Future"
      },
      description: {
        ar: "أنت تعيش في بيئة متقدمة رقمياً حيث البيروقراطية في حدها الأدنى. معظم الخدمات الحكومية متاحة إلكترونياً وتتميز بالكفاءة والسرعة.",
        en: "You live in a digitally advanced environment where bureaucracy is minimal. Most government services are available online and are efficient and fast."
      },
      icon: <CheckCircle className="h-12 w-12 text-green-500" />
    },
    {
      min: 16,
      max: 30,
      title: {
        ar: "في مرحلة انتقالية",
        en: "In Transition"
      },
      description: {
        ar: "أنت تعيش في بيئة تشهد تحولاً رقمياً تدريجياً. بعض الخدمات متاحة إلكترونياً، لكن لا تزال هناك حاجة للتعامل مع البيروقراطية التقليدية في بعض الأحيان.",
        en: "You live in an environment that is gradually transitioning to digital. Some services are available online, but there is still a need to deal with traditional bureaucracy at times."
      },
      icon: <AlertCircle className="h-12 w-12 text-yellow-500" />
    },
    {
      min: 31,
      max: 50,
      title: {
        ar: "بيروقراطية تقليدية",
        en: "Traditional Bureaucracy"
      },
      description: {
        ar: "أنت تعيش في بيئة تسودها البيروقراطية التقليدية. معظم المعاملات تتطلب زيارات شخصية متعددة وأوراق كثيرة وانتظار طويل.",
        en: "You live in an environment dominated by traditional bureaucracy. Most transactions require multiple in-person visits, lots of paperwork, and long waiting times."
      },
      icon: <XCircle className="h-12 w-12 text-red-500" />
    }
  ];

  const handleAnswer = (questionId: number, optionId: string, score: number) => {
    setAnswers({ ...answers, [questionId]: optionId });
    setScore(prevScore => prevScore + score);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswers({});
  };

  const getCurrentResult = () => {
    return results.find(result => score >= result.min && score <= result.max);
  };

  const currentResult = getCurrentResult();

  return (
    <Layout>
      <Container className="py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">
              {language === "ar" ? "اختبار البيروقراطية" : "Bureaucracy Test"}
            </h1>
            <p className="text-gray-600">
              {language === "ar" 
                ? "اكتشف مدى تعقيد الإجراءات الحكومية في بلدك وكيف يمكن للحلول الرقمية أن تبسطها"
                : "Discover how complex government procedures are in your country and how digital solutions can simplify them"}
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>
                {language === "ar" ? "تقدمك" : "Your Progress"}
              </CardTitle>
              <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
            </CardHeader>
          </Card>

          {!showResult ? (
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
                      variant={answers[questions[currentQuestion].id] === option.id ? "default" : "outline"}
                      className="w-full justify-start text-left h-auto py-4 px-6"
                      onClick={() => handleAnswer(questions[currentQuestion].id, option.id, option.score)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                          {option.id.toUpperCase()}
                        </div>
                        <span>
                          {language === "ar" ? option.text.ar : option.text.en}
                        </span>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  {currentResult?.icon}
                </div>
                <CardTitle className="text-2xl">
                  {language === "ar" ? currentResult?.title.ar : currentResult?.title.en}
                </CardTitle>
                <CardDescription className="text-lg">
                  {language === "ar" 
                    ? `نتيجتك: ${score} من ${questions.length * 10}`
                    : `Your score: ${score} out of ${questions.length * 10}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center mb-6">
                  {language === "ar" 
                    ? currentResult?.description.ar 
                    : currentResult?.description.en}
                </p>
                <Separator className="my-6" />
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    {language === "ar" 
                      ? "كيف يمكن للبوابة الرقمية السورية أن تساعد؟"
                      : "How can the Syrian Digital Gateway help?"}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FileSignature className="h-5 w-5 text-syria-green mt-1" />
                      <p>
                        {language === "ar" 
                          ? "توقيع إلكتروني آمن لجميع المعاملات الحكومية"
                          : "Secure digital signature for all government transactions"}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building className="h-5 w-5 text-syria-green mt-1" />
                      <p>
                        {language === "ar" 
                          ? "منصة موحدة لجميع الخدمات الحكومية دون الحاجة لزيارة عدة دوائر"
                          : "Unified platform for all government services without the need to visit multiple departments"}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-syria-green mt-1" />
                      <p>
                        {language === "ar" 
                          ? "توفير الوقت والجهد من خلال إنجاز المعاملات إلكترونياً"
                          : "Save time and effort by completing transactions electronically"}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <UserCheck className="h-5 w-5 text-syria-green mt-1" />
                      <p>
                        {language === "ar" 
                          ? "مشاركة البيانات بين الدوائر الحكومية لتجنب تكرار تقديم نفس المعلومات"
                          : "Data sharing between government departments to avoid repeatedly providing the same information"}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={restartQuiz} className="w-full">
                  {language === "ar" ? "إعادة الاختبار" : "Restart Test"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default Bureaucracy;
