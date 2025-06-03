
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
      className={`relative w-full p-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl ${
        isCompleted ? "ring-2 ring-green-400" : ""
      }`}
      onClick={onComplete}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div
            className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center transition-transform duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          >
            {icon}
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="text-white/70 text-sm">{description}</p>
          </div>
        </div>

        {/* Check Mark */}
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            isCompleted
              ? "bg-green-500 border-green-500"
              : "border-white/30 hover:border-white/50"
          }`}
        >
          {isCompleted && <Check className="h-5 w-5 text-white" />}
        </div>
      </div>
    </div>
  );
};

export default WaitlistCard;
