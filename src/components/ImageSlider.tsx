
import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
  height?: string;
  overlay?: boolean;
  language?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  interval = 5000, 
  height = "h-96",
  overlay = true,
  language
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const landmarkNames = [
    language === 'ar' ? 'قلعة حلب' : 'Aleppo Citadel',
    language === 'ar' ? 'تدمر' : 'Palmyra',
    language === 'ar' ? 'المسرح الروماني في بصرى' : 'Roman Theater in Bosra',
    language === 'ar' ? 'قلعة حلب ليلاً' : 'Aleppo Citadel at Night',
    language === 'ar' ? 'سور حماة التاريخي' : 'Historic Wall of Hama',
    language === 'ar' ? 'بحيرة في حمص' : 'Lake in Homs',
    language === 'ar' ? 'شاطئ اللاذقية' : 'Lattakia Beach',
    language === 'ar' ? 'الكورنيش في طرطوس' : 'Tartous Corniche',
    language === 'ar' ? 'ساعة حماة الشهيرة' : 'Famous Hama Clock Tower',
    language === 'ar' ? 'نواعير حماة' : 'Hama Waterwheels',
    language === 'ar' ? 'المسرح الروماني في بصرى' : 'Roman Theater in Bosra',
    language === 'ar' ? 'الجامع الأموي في دمشق' : 'Umayyad Mosque in Damascus',
    language === 'ar' ? 'قلعة حلب الجنوبية' : 'Southern Gate of Aleppo Citadel',
    language === 'ar' ? 'جسر دير الزور المعلق' : 'Deir ez-Zor Suspension Bridge'
  ];

  // Make sure we have a valid current index
  const safeIndex = currentIndex < images.length ? currentIndex : 0;

  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-lg shadow-xl`}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === safeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{landmarkNames[safeIndex] || ''}</h2>
            <p className="text-sm">
              {language === 'ar' 
                ? 'اكتشف جمال سوريا وتراثها الغني عبر البوابة الرقمية السورية' 
                : 'Discover the beauty of Syria and its rich heritage through the Syrian Digital Gateway'}
            </p>
          </div>
        </div>
      )}
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === safeIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
