import { Briefcase, Palmtree } from "lucide-react";

interface ModeToggleProps {
  isPersonalMode: boolean;
  onToggle: (value: boolean) => void;
}

const ModeToggle = ({ isPersonalMode, onToggle }: ModeToggleProps) => {
  return (
    <button
      onClick={() => onToggle(!isPersonalMode)}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-border cursor-pointer hover:shadow-xl transition-shadow"
    >
      <Briefcase 
        className={`w-5 h-5 transition-colors duration-300 ${!isPersonalMode ? 'text-primary' : 'text-muted-foreground'}`} 
      />
      <div className="relative w-12 h-6 bg-secondary rounded-full">
        <div 
          className={`absolute top-1 w-4 h-4 bg-primary rounded-full transition-all duration-300 ease-in-out ${
            isPersonalMode ? 'left-7' : 'left-1'
          }`}
        />
      </div>
      <Palmtree 
        className={`w-5 h-5 transition-colors duration-300 ${isPersonalMode ? 'text-primary' : 'text-muted-foreground'}`} 
      />
    </button>
  );
};

export default ModeToggle;
