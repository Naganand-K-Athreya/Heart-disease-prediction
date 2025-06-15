
import { cn } from "@/lib/utils";
import { HeartPulse } from "lucide-react";
import { useState, useEffect } from "react";

interface HeartPulseAnimationProps {
  className?: string;
  size?: number;
  color?: string;
}

export const HeartPulseAnimation = ({ 
  className, 
  size = 24,
  color = "text-heart-DEFAULT"
}: HeartPulseAnimationProps) => {
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScale(prev => prev === 1 ? 1.2 : 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={cn("transition-transform duration-500", className)}
      style={{ transform: `scale(${scale})` }}>
      <HeartPulse size={size} className={cn(color)} />
    </div>
  );
};
