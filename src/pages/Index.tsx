import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import ChatbotWidget from "@/components/ChatbotWidget";
import { User, Target, Route, Briefcase, Rocket } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <Hero name="Your Name" title="MBA Candidate | Aspiring Product Manager" summary="Passionate about building products that solve real problems. Currently pursuing my MBA and seeking PM internship opportunities to drive impact at scale." />

      {/* Who am I? */}
      <ContentSection id="who-am-i" title="Who am I?" icon={<User className="w-6 h-6" />}>
        <p className="mb-4">
          I'm a driven individual with a passion for technology and business strategy. 
          My background spans [your previous industry/experience], where I developed a 
          keen eye for identifying user pain points and translating them into product opportunities.
        </p>
        <p>
          Beyond work, I'm an avid [your hobbies/interests], which keeps me curious and 
          constantly learning. I believe the best products come from diverse perspectives 
          and genuine empathy for users.
        </p>
      </ContentSection>

      {/* What is my goal? */}
      <ContentSection id="goal" title="What is my goal?" icon={<Target className="w-6 h-6" />} alternate>
        <p className="mb-4">
          My immediate goal is to secure a PM internship where I can apply my 
          analytical skills and business acumen to real product challenges. I'm 
          particularly excited about opportunities in [your areas of interest: fintech, 
          healthtech, B2B SaaS, etc.].
        </p>
        <p>
          Long-term, I aspire to lead product teams that create meaningful impact—whether 
          that's improving financial inclusion, advancing healthcare accessibility, or 
          reimagining how people work and collaborate.
        </p>
      </ContentSection>

      {/* What has my journey been like? */}
      <ContentSection id="journey" title="What has my journey been like?" icon={<Route className="w-6 h-6" />}>
        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-6">
            <h4 className="font-semibold text-foreground mb-1">Current: MBA Program</h4>
            <p className="text-sm text-muted-foreground mb-2">[Your School Name] • 2024 - Present</p>
            <p>Focusing on product management, strategy, and entrepreneurship. Leading [relevant activities/clubs].</p>
          </div>
          <div className="border-l-2 border-border pl-6">
            <h4 className="font-semibold text-foreground mb-1">Previous Role</h4>
            <p className="text-sm text-muted-foreground mb-2">[Company Name] • [Years]</p>
            <p>Describe your key achievements and what you learned that's relevant to PM.</p>
          </div>
          <div className="border-l-2 border-border pl-6">
            <h4 className="font-semibold text-foreground mb-1">Earlier Experience</h4>
            <p className="text-sm text-muted-foreground mb-2">[Company/School Name] • [Years]</p>
            <p>Foundation experiences that shaped your interest in product management.</p>
          </div>
        </div>
      </ContentSection>

      {/* What do I bring to the table? */}
      <ContentSection id="skills" title="What do I bring to the table?" icon={<Briefcase className="w-6 h-6" />} alternate>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Technical Skills</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Data Analysis & SQL
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Product Analytics (Amplitude, Mixpanel)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Prototyping (Figma)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Core Competencies</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                User Research & Interviews
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Strategic Thinking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Cross-functional Collaboration
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* What am I working on these days? */}
      <ContentSection id="current" title="What am I working on these days?" icon={<Rocket className="w-6 h-6" />}>
        <div className="space-y-4">
          <div className="p-4 bg-secondary rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">🎯 PM Interview Prep</h4>
            <p>Sharpening my product sense through case studies and mock interviews.</p>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">📚 Course Projects</h4>
            <p>Working on [specific MBA project] that involves [relevant skills].</p>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">🛠️ Side Projects</h4>
            <p>Building [your side project] to explore [technology/problem space].</p>
          </div>
        </div>
      </ContentSection>

      {/* Footer */}
      <footer className="hero-bg py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 mb-4">Let's connect and explore opportunities together.</p>
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium transition-colors">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="text-primary hover:text-primary/80 font-medium transition-colors">
              Email
            </a>
          </div>
          <p className="text-white/40 text-sm mt-8">© 2026 Arkin Sanghi. All rights reserved.</p>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>;
};
export default Index;