
import { Button } from "@/components/ui/button";

interface EnterButtonProps {
  allTasksCompleted: boolean;
  onEnterNeftit: () => void;
}

const EnterButton = ({ allTasksCompleted, onEnterNeftit }: EnterButtonProps) => {
  return (
    <div className="pt-8 lg:pt-12">
      <Button 
        onClick={onEnterNeftit} 
        disabled={!allTasksCompleted} 
        className={`w-full h-14 lg:h-16 xl:h-18 rounded-xl text-base lg:text-lg xl:text-xl font-bold tracking-wider transition-all duration-300 ${
          allTasksCompleted 
            ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border border-purple-500 shadow-lg hover:shadow-xl" 
            : "bg-gray-700/50 text-gray-400 cursor-not-allowed border border-gray-600"
        }`}
      >
        ENTER NEFTIT →
      </Button>
    </div>
  );
};

export default EnterButton;
