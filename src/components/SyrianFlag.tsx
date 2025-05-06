
import React, { useEffect, useRef } from 'react';

interface SyrianFlagProps {
  className?: string;
  width?: number;
  height?: number;
  animate?: boolean;
}

const SyrianFlag: React.FC<SyrianFlagProps> = ({ 
  className = "", 
  width = 100, 
  height = 60,
  animate = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!animate) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set the canvas dimensions
    canvas.width = width;
    canvas.height = height;
    
    // Flag colors
    const green = '#007A3D';
    const white = '#FFFFFF';
    const black = '#000000';
    const red = '#CE1126';
    
    // Variables for the wave effect
    let amplitude = 5; // Wave height
    let period = 2000; // Wave period in milliseconds
    let waves = 3; // Number of waves
    
    // Flag animation
    const animateFlag = (time: number) => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw flag with wave effect
      for (let y = 0; y < canvas.height; y++) {
        // Calculate x offset based on y position and time
        const progress = time / period;
        const x = amplitude * Math.sin((y / canvas.height) * Math.PI * waves + progress * Math.PI * 2);
        
        // Draw the three stripes with wave
        if (y < canvas.height / 3) {
          ctx.fillStyle = green;
        } else if (y < canvas.height * 2 / 3) {
          ctx.fillStyle = white;
          
          // Draw stars on the white stripe
          if (y === Math.floor(canvas.height / 2)) {
            const starY = canvas.height / 2;
            const starSpacing = canvas.width / 4;
            
            for (let i = 1; i <= 3; i++) {
              ctx.fillStyle = red;
              drawStar(ctx, starSpacing * i, starY, 5, 5, 3);
            }
            
            ctx.fillStyle = white;
          }
        } else {
          ctx.fillStyle = black;
        }
        
        // Draw a horizontal line with wave effect
        ctx.fillRect(x, y, canvas.width, 1);
      }
      
      // Draw stars
      const starY = canvas.height / 2;
      const starSpacing = canvas.width / 4;
      
      ctx.fillStyle = red;
      for (let i = 1; i <= 3; i++) {
        const progress = time / period;
        const x = starSpacing * i + amplitude * Math.sin((starY / canvas.height) * Math.PI * waves + progress * Math.PI * 2);
        drawStar(ctx, x, starY, 5, 5, 3);
      }
      
      requestAnimationFrame(animateFlag);
    };
    
    // Function to draw a star
    function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;
      
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;
        
        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    }
    
    const animationId = requestAnimationFrame(animateFlag);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [width, height, animate]);
  
  if (animate) {
    return <canvas ref={canvasRef} className={className} style={{ width, height }} />;
  }
  
  // Static version if animation is disabled
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <div className="absolute top-0 left-0 w-full h-1/3 bg-syria-green"></div>
      <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white flex justify-around items-center">
        <div className="text-syria-red text-xs">★</div>
        <div className="text-syria-red text-xs">★</div>
        <div className="text-syria-red text-xs">★</div>
      </div>
      <div className="absolute top-2/3 left-0 w-full h-1/3 bg-syria-black"></div>
    </div>
  );
};

export default SyrianFlag;
