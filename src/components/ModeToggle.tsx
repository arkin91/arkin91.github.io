import { Briefcase, Palmtree } from "lucide-react";

interface ModeToggleProps {
  isPersonalMode: boolean;
  onToggle: (value: boolean) => void;
}

const ModeToggle = ({ isPersonalMode, onToggle }: ModeToggleProps) => {
  return (
    <button
      onClick={() => onToggle(!isPersonalMode)}
      className="fixed top-6 right-6 z-50 flex items-center bg-card/90 backdrop-blur-sm rounded-full shadow-lg border border-border cursor-pointer hover:shadow-xl transition-shadow p-1"
    >
      <div className="relative flex items-center">
        {/* Icons container */}
        <div className="w-10 h-10 flex items-center justify-center z-10">
          <Briefcase className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center z-10">
          <Palmtree className="w-5 h-5 text-muted-foreground" />
        </div>
        
        {/* Sliding circle */}
        <div 
          className={`absolute w-10 h-10 bg-primary rounded-full transition-all duration-300 ease-in-out ${
            isPersonalMode ? 'left-10' : 'left-0'
          }`}
        />
        
        {/* Icons overlay for active state */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="w-10 h-10 flex items-center justify-center">
            <Briefcase className={`w-5 h-5 transition-colors duration-300 ${!isPersonalMode ? 'text-primary-foreground' : 'text-transparent'}`} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center">
            <Palmtree className={`w-5 h-5 transition-colors duration-300 ${isPersonalMode ? 'text-primary-foreground' : 'text-transparent'}`} />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ModeToggle;
