import React from "react";

interface SyrianFlagProps {
  className?: string;
  width?: number;
  height?: number;
}

const SyrianFlag: React.FC<SyrianFlagProps> = ({
  className = "",
  width = 100,
  height = 60,
}) => {
  // SVG approach for more precise control
  return (
    <div className={className} style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Green top stripe */}
        <rect x="0" y="0" width={width} height={height / 3} fill="#007A3D" />

        {/* White middle stripe */}
        <rect
          x="0"
          y={height / 3}
          width={width}
          height={height / 3}
          fill="#FFFFFF"
        />

        {/* Three red stars */}
        <text
          x={width * 0.25}
          y={height / 2 + height / 15}
          fill="#CE1126"
          fontSize={height / 5}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          ★
        </text>
        <text
          x={width * 0.5}
          y={height / 2 + height / 15}
          fill="#CE1126"
          fontSize={height / 5}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          ★
        </text>
        <text
          x={width * 0.75}
          y={height / 2 + height / 15}
          fill="#CE1126"
          fontSize={height / 5}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          ★
        </text>

        {/* Black bottom stripe */}
        <rect
          x="0"
          y={(height * 2) / 3}
          width={width}
          height={height / 3}
          fill="#000000"
        />
      </svg>
    </div>
  );
};

export default SyrianFlag;
