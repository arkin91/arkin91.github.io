import { Briefcase, Palmtree } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface ModeToggleProps {
  isPersonalMode: boolean;
  onToggle: (value: boolean) => void;
}

const ModeToggle = ({ isPersonalMode, onToggle }: ModeToggleProps) => {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-card/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg border border-border">
      <Briefcase 
        className={`w-5 h-5 transition-colors ${!isPersonalMode ? 'text-primary' : 'text-muted-foreground'}`} 
      />
      <Slider
        value={[isPersonalMode ? 100 : 0]}
        onValueChange={(value) => onToggle(value[0] > 50)}
        max={100}
        step={100}
        className="w-16"
      />
      <Palmtree 
        className={`w-5 h-5 transition-colors ${isPersonalMode ? 'text-primary' : 'text-muted-foreground'}`} 
      />
    </div>
  );
};

export default ModeToggle;
