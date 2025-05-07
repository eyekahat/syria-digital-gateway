import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const BureaucracyTest: React.FC = () => {
  const [language, setLanguage] = useState<string>("ar");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

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

  const questions = [
    {
      question: language === "ar" 
        ? "ما هو أفضل وقت للذهاب إلى مكتب حكومي لإنجاز معاملة؟" 
        : "What is the best time to visit a government office?",
      options: language === "ar"
        ? ["في الصباح الباكر", "قبل ساعة من إغلاق المكتب", "خلال فترة الغداء", "يوم الجمعة قبل العطلة"]
        : ["Early in the morning", "An hour before closing", "During lunch break", "Friday before the weekend"],
      correctAnswer: language === "ar" ? "في الصباح الباكر" : "Early in the morning"
    },
    {
      question: language === "ar"
        ? "عند تقديم طلب للحصول على وثيقة رسمية، ما هو عدد النسخ التي يجب إحضارها؟"
        : "When applying for an official document, how many copies should you bring?",
      options: language === "ar"
        ? ["نسخة واحدة", "نسختان", "ثلاث نسخ", "أكثر من ثلاث نسخ ليكون لديك احتياطي"]
        : ["One copy", "Two copies", "Three copies", "More than three to be safe"],
      correctAnswer: language === "ar" ? "أكثر من ثلاث نسخ ليكون لديك احتياطي" : "More than three to be safe"
    },
    {
      question: language === "ar"
        ? "ما هي أفضل طريقة للتعامل مع موظف حكومي غير متعاون؟"
        : "What's the best way to deal with an uncooperative government employee?",
      options: language === "ar"
        ? ["الإصرار على التحدث مع المدير", "العودة في يوم آخر على أمل مقابلة موظف آخر", "إظهار الصبر والاحترام", "تقديم شكوى رسمية"]
        : ["Insist on speaking to a manager", "Come back another day hoping for a different employee", "Show patience and respect", "File a formal complaint"],
      correctAnswer: language === "ar" ? "إظهار الصبر والاحترام" : "Show patience and respect"
    },
    {
      question: language === "ar"
        ? "عندما يُطلب منك ملء استمارة، ما هو لون القلم الذي يجب استخدامه؟"
        : "When asked to fill out a form, what color pen should you use?",
      options: language === "ar"
        ? ["أزرق", "أسود", "أحمر", "لا يهم طالما أن الخط واضح"]
        : ["Blue", "Black", "Red", "Doesn't matter as long as it's legible"],
      correctAnswer: language === "ar" ? "أزرق" : "Blue"
    },
    {
      question: language === "ar"
        ? "ما هي الوثيقة التي غالباً ما تُنسى عند تقديم طلب للحصول على جواز سفر؟"
        : "What document is most commonly forgotten when applying for a passport?",
      options: language === "ar"
        ? ["صورة شخصية", "إثبات الإقامة", "شهادة الميلاد", "نسخة من الهوية الشخصية"]
        : ["Photo ID", "Proof of residence", "Birth certificate", "Copy of national ID"],
      correctAnswer: language === "ar" ? "إثبات الإقامة" : "Proof of residence"
    },
    {
      question: language === "ar"
        ? "كم مرة يجب أن تتوقع العودة لإكمال معاملة حكومية واحدة؟"
        : "How many times should you expect to return to complete a single government procedure?",
      options: language === "ar"
        ? ["مرة واحدة فقط", "مرتان", "ثلاث مرات", "أكثر من ثلاث مرات"]
        : ["Just once", "Twice", "Three times", "More than three times"],
      correctAnswer: language === "ar" ? "أكثر من ثلاث مرات" : "More than three times"
    },
    {
      question: language === "ar"
        ? "ما هو أفضل شيء يمكن إحضاره أثناء الانتظار في طابور طويل؟"
        : "What's the best thing to bring while waiting in a long queue?",
      options: language === "ar"
        ? ["كتاب للقراءة", "هاتفك الذكي", "شخص آخر ليحجز مكانك عندما تحتاج للمغادرة", "الصبر"]
        : ["A book to read", "Your smartphone", "Another person to hold your place when you need to leave", "Patience"],
      correctAnswer: language === "ar" ? "الصبر" : "Patience"
    },
    {
      question: language === "ar"
        ? "ما هي أفضل استراتيجية عندما تكتشف أنك نسيت وثيقة مهمة في المنزل؟"
        : "What's the best strategy when you discover you've forgotten an important document at home?",
      options: language === "ar"
        ? ["العودة إلى المنزل وإحضارها", "محاولة إقناع الموظف بأنها ليست ضرورية", "طلب استثناء", "تحديد موعد جديد"]
        : ["Go home and get it", "Try to convince the clerk it's not necessary", "Ask for an exception", "Schedule a new appointment"],
      correctAnswer: language === "ar" ? "تحديد موعد جديد" : "Schedule a new appointment"
    },
    {
      question: language === "ar"
        ? "ما هو الوقت المتوقع للانتظار في مكتب حكومي مزدحم؟"
        : "What's the expected waiting time at a busy government office?",
      options: language === "ar"
        ? ["أقل من 30 دقيقة", "ساعة واحدة", "2-3 ساعات", "نصف يوم على الأقل"]
        : ["Less than 30 minutes", "One hour", "2-3 hours", "Half a day at minimum"],
      correctAnswer: language === "ar" ? "نصف يوم على الأقل" : "Half a day at minimum"
    },
    {
      question: language === "ar"
        ? "ما هي أفضل طريقة للتعامل مع تناقضات في المعلومات المقدمة من موظفين مختلفين؟"
        : "What's the best way to handle contradictory information from different officials?",
      options: language === "ar"
        ? ["اتباع نصيحة الموظف الأكثر خبرة", "طلب التحدث مع المشرف", "البحث عن المعلومات الرسمية عبر الإنترنت", "جمع المعلومات من كل موظف كتابياً"]
        : ["Follow the advice of the more experienced official", "Ask to speak to a supervisor", "Look up the official information online", "Get the information from each official in writing"],
      correctAnswer: language === "ar" ? "جمع المعلومات من كل موظف كتابياً" : "Get the information from each official in writing"
    }
  ];

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const getBureaucracyLevel = () => {
    const percentage = (score / questions.length) * 100;
    
    if (language === "ar") {
      if (percentage >= 80) return "خبير بيروقراطي";
      if (percentage >= 60) return "محترف بيروقراطي";
      if (percentage >= 40) return "متوسط المستوى";
      if (percentage >= 20) return "مبتدئ";
      return "تحتاج إلى المزيد من التدريب";
    } else {
      if (percentage >= 80) return "Bureaucracy Expert";
      if (percentage >= 60) return "Bureaucracy Professional";
      if (percentage >= 40) return "Intermediate Level";
      if (percentage >= 20) return "Beginner";
      return "Needs More Training";
    }
  };

  const getResultMessage = () => {
    const percentage = (score / questions.length) * 100;
    
    if (language === "ar") {
      if (percentage >= 80) return "أنت جاهز تماماً للتعامل مع أي نظام بيروقراطي!";
      if (percentage >= 60) return "لديك فهم جيد للبيروقراطية، لكن لا تزال هناك بعض الدروس لتتعلمها.";
      if (percentage >= 40) return "أنت تفهم أساسيات البيروقراطية، لكن تحتاج إلى المزيد من الخبرة.";
      if (percentage >= 20) return "أنت لا تزال مبتدئاً في عالم البيروقراطية.";
      return "قد تواجه صعوبة في التعامل مع الأنظمة البيروقراطية.";
    } else {
      if (percentage >= 80) return "You are fully prepared to handle any bureaucratic system!";
      if (percentage >= 60) return "You have a good understanding of bureaucracy, but there are still some lessons to learn.";
      if (percentage >= 40) return "You understand the basics of bureaucracy, but need more experience.";
      if (percentage >= 20) return "You are still a novice in the world of bureaucracy.";
      return "You might struggle with bureaucratic systems.";
    }
  };

  return (
    <Layout>
      <Container className="py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {language === "ar" ? "اختبار البيروقراطية السورية" : "Syrian Bureaucracy Test"}
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            {language === "ar" 
              ? "اختبر معرفتك بالإجراءات البيروقراطية وقدرتك على التعامل مع المعاملات الحكومية في سوريا"
              : "Test your knowledge of bureaucratic procedures and your ability to navigate government transactions in Syria"}
          </p>

          {!showResults ? (
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">
                    {language === "ar" 
                      ? `السؤال ${currentQuestion + 1} من ${questions.length}`
                      : `Question ${currentQuestion + 1} of ${questions.length}`}
                  </span>
                  <span className="text-sm text-gray-500">
                    {language === "ar" 
                      ? `${Math.round((currentQuestion / questions.length) * 100)}% مكتمل`
                      : `${Math.round((currentQuestion / questions.length) * 100)}% Complete`}
                  </span>
                </div>
                <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
                <CardTitle className="mt-4">{questions[currentQuestion].question}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={answers[currentQuestion] || ""} 
                  onValueChange={handleAnswerChange}
                  className="space-y-3"
                >
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {language === "ar" ? "السابق" : "Previous"}
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={!answers[currentQuestion]}
                >
                  {currentQuestion < questions.length - 1 
                    ? (language === "ar" ? "التالي" : "Next") 
                    : (language === "ar" ? "إنهاء الاختبار" : "Finish Test")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  {language === "ar" ? "نتائج الاختبار" : "Test Results"}
                </CardTitle>
                <CardDescription className="text-center">
                  {language === "ar" 
                    ? `لقد أجبت على ${score} من أصل ${questions.length} أسئلة بشكل صحيح`
                    : `You answered ${score} out of ${questions.length} questions correctly`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-syria-green bg-opacity-10 mb-4">
                    <span className="text-3xl font-bold text-syria-green">
                      {Math.round((score / questions.length) * 100)}%
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{getBureaucracyLevel()}</h3>
                  <p className="text-gray-600">{getResultMessage()}</p>
                </div>

                <div className="space-y-4 mt-8">
                  <h4 className="font-semibold">
                    {language === "ar" ? "مراجعة الإجابات" : "Answer Review"}
                  </h4>
                  {questions.map((question, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="mr-2 mt-1">
                          {answers[index] === question.correctAnswer ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{question.question}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            {language === "ar" ? "إجابتك: " : "Your answer: "}
                            <span className={answers[index] === question.correctAnswer ? "text-green-600" : "text-red-600"}>
                              {answers[index] || (language === "ar" ? "لم تجب" : "Not answered")}
                            </span>
                          </p>
                          {answers[index] !== question.correctAnswer && (
                            <p className="text-sm text-gray-600">
                              {language === "ar" ? "الإجابة الصحيحة: " : "Correct answer: "}
                              <span className="text-green-600">{question.correctAnswer}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={resetQuiz} className="w-full">
                  {language === "ar" ? "إعادة الاختبار" : "Retake Test"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default BureaucracyTest;
