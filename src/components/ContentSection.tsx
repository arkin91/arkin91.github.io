import { ReactNode } from "react";

interface ContentSectionProps {
  id: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  alternate?: boolean;
}

const ContentSection = ({ id, title, icon, children, alternate = false }: ContentSectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 ${alternate ? 'bg-secondary' : 'bg-background'}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-card">
          <div className="flex items-center gap-4 mb-6">
            {icon && (
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {icon}
              </div>
            )}
            <h2 className="section-title mb-0">{title}</h2>
          </div>
          <div className="text-muted-foreground text-lg leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
