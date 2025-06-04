
import { useState } from "react";
import { Check } from "lucide-react";

interface WaitlistCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isCompleted: boolean;
  onComplete: () => void;
  bgColor: string;
}

const WaitlistCard = ({
  icon,
  title,
  description,
  isCompleted,
  onComplete,
  bgColor,
}: WaitlistCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${
        isCompleted ? "ring-1 ring-green-400" : ""
      }`}
      onClick={onComplete}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: `linear-gradient(white/5, white/5) padding-box, linear-gradient(135deg, #5D43EF, #EDAFF0) border-box`,
        border: '1px solid transparent',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <div
            className={`w-7 h-7 ${bgColor} rounded-md flex items-center justify-center transition-transform duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          >
            {icon}
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-white font-bold text-sm mb-0">{title}</h3>
            <p className="text-white/70 text-xs">{description}</p>
          </div>
        </div>

        {/* Arrow or Check */}
        <div className="flex items-center">
          {isCompleted ? (
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="h-3 w-3 text-white" />
            </div>
          ) : (
            <div className="text-white/60">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistCard;
