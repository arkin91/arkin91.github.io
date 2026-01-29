import { MessageCircle } from "lucide-react";
import { useState } from "react";

const ChatbotWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div 
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-foreground text-background text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          <span className="font-medium">AI Assistant</span>
          <span className="text-muted-foreground ml-2">Coming Soon</span>
        </div>
        <div className="absolute -bottom-1 right-5 w-2 h-2 bg-foreground rotate-45" />
      </div>

      {/* Widget Button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-default"
        aria-label="Chat assistant coming soon"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Coming Soon Badge */}
      <div className="absolute -top-1 -right-1 bg-foreground text-background text-[10px] font-medium px-2 py-0.5 rounded-full">
        Soon
      </div>
    </div>
  );
};

export default ChatbotWidget;
