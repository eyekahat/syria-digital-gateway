import React, { useState, useEffect } from "react";

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
  language,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const landmarkNames = [
    language === "ar" ? "قلعة حلب" : "Aleppo Citadel",
    language === "ar" ? "نواعير حماة" : "Hama Waterwheels",
    language === "ar" ? "جسر الحسكة" : "Hasakah Bridge",
    language === "ar" ? "المسجد الأموي في دمشق" : "Umayyad Mosque in Damascus",
    language === "ar" ? "جامع حبيب النجار" : "Habib Al-Najjar Mosque",
    language === "ar" ? "المسرح الروماني" : "Roman Theater",
    language === "ar" ? "ساعة إدلب" : "Idlib Clock Tower",
    language === "ar" ? "جسر دير الزور" : "Deir ez-Zor Bridge",
    language === "ar" ? "مدينة شهبا الأثرية" : "Ancient City of Shahba",
    language === "ar" ? "طرطوس" : "Tartous",
    language === "ar" ? "حمص" : "Homs",
  ];

  // Make sure we have a valid current index and there are images to display
  const safeIndex =
    images && images.length > 0
      ? currentIndex < images.length
        ? currentIndex
        : 0
      : 0;

  // If there are no images, show a placeholder
  if (!images || images.length === 0) {
    return (
      <div
        className={`relative w-full ${height} bg-gray-200 flex items-center justify-center rounded-lg`}
      >
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  // Use the images passed from the parent component
  const combinedImages = images;

  return (
    <div
      className={`relative w-full ${height} overflow-hidden rounded-lg shadow-xl`}
    >
      {combinedImages.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === safeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={
              landmarkNames[index % landmarkNames.length] || "Syrian landmark"
            }
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">
              {landmarkNames[safeIndex % landmarkNames.length] || ""}
            </h2>
            <p className="text-sm">
              {language === "ar"
                ? "اكتشف جمال سوريا وتراثها الغني عبر البوابة الرقمية السورية"
                : "Discover the beauty of Syria and its rich heritage through the Syrian Digital Gateway"}
            </p>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {combinedImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === safeIndex ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
