
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
  // Static version of the flag with proper proportions and star placement
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Green top stripe */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-[#007A3D]"></div>
      
      {/* White middle stripe with stars */}
      <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white flex justify-center items-center">
        <div className="flex space-x-3">
          <div className="text-[#CE1126] text-lg">★</div>
          <div className="text-[#CE1126] text-lg">★</div>
          <div className="text-[#CE1126] text-lg">★</div>
        </div>
      </div>
      
      {/* Black bottom stripe */}
      <div className="absolute top-2/3 left-0 w-full h-1/3 bg-black"></div>
    </div>
  );
};

export default SyrianFlag;
