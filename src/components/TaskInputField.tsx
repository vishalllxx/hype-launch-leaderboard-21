
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TaskInputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  buttonText: string;
}

const TaskInputField = ({
  type,
  placeholder,
  value,
  onChange,
  onSubmit,
  buttonText,
}: TaskInputFieldProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 lg:p-6 space-y-3 lg:space-y-4">
      <Input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={e => onChange(e.target.value)} 
        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 lg:h-14 xl:h-16 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base lg:text-lg" 
      />
      <Button 
        onClick={onSubmit} 
        className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 lg:h-14 xl:h-16 rounded-lg font-bold text-sm lg:text-base transition-all duration-200"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default TaskInputField;
