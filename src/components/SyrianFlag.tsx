
import React from 'react';

interface SyrianFlagProps {
  className?: string;
  width?: number;
  height?: number;
}

const SyrianFlag: React.FC<SyrianFlagProps> = ({ 
  className = "", 
  width = 100, 
  height = 60
}) => {
  // Static version of the flag
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Green top stripe */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-[#007A3D]"></div>
      
      {/* White middle stripe with stars */}
      <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white flex justify-around items-center">
        <div className="text-[#CE1126] text-xl">★</div>
        <div className="text-[#CE1126] text-xl">★</div>
        <div className="text-[#CE1126] text-xl">★</div>
      </div>
      
      {/* Black bottom stripe */}
      <div className="absolute top-2/3 left-0 w-full h-1/3 bg-black"></div>
    </div>
  );
};

export default SyrianFlag;
