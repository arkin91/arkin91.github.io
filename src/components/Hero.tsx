import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface HeroProps {
  name: string;
  title: string;
  summary: string;
  imageUrl?: string;
  isPersonalMode?: boolean;
}
const Hero = ({
  name,
  title,
  summary,
  imageUrl,
  isPersonalMode = false
}: HeroProps) => {
  return <section className="hero-bg min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-up opacity-0">
          <Avatar className="w-40 h-40 mx-auto border-4 border-primary shadow-2xl">
            <AvatarImage src={imageUrl} alt={name} className="object-cover" />
            <AvatarFallback className="bg-primary text-primary-foreground text-4xl font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-up opacity-0 stagger-1">
          {name}
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-primary font-medium mb-8 animate-fade-up opacity-0 stagger-2">
          {title}
        </p>

        {/* Summary */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up opacity-0 stagger-3 text-slate-500">
          {summary}
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-fade-up opacity-0 stagger-4">
          <div className="w-6 h-10 border-2 rounded-full mx-auto flex justify-center text-slate-500 border-slate-400 bg-slate-400">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;