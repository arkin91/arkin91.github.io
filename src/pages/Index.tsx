import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import ChatbotWidget from "@/components/ChatbotWidget";
import ModeToggle from "@/components/ModeToggle";
import { usePersonalMode } from "@/hooks/usePersonalMode";
import { User, Target, Route, Briefcase, Rocket, Plane, UtensilsCrossed, Coffee } from "lucide-react";
const Index = () => {
  const {
    isPersonalMode,
    setIsPersonalMode
  } = usePersonalMode();

  // Professional content
  const professionalContent = {
    hero: {
      title: "MBA Candidate | Aspiring Product Manager",
      summary: "Passionate about building products that solve real problems. Currently pursuing my MBA and seeking PM internship opportunities to drive impact at scale."
    },
    whoAmI: <>
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
      </>,
    goal: <>
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
      </>,
    journey: <div className="space-y-6">
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
      </div>,
    skills: <div className="grid md:grid-cols-2 gap-6">
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
      </div>,
    current: <div className="space-y-4">
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
  };

  // Personal content
  const personalContent = {
    hero: {
      title: "Fantasy Fiction Fanatic | Aspiring Cook & Traveller",
      summary: "When I'm not in MBA mode, you'll find me lost in epic fantasy worlds, experimenting with recipes in the kitchen, or planning my next adventure to far-flung destinations."
    },
    whoAmI: <>
        <p className="mb-4">
          I'm a passionate reader who devours fantasy fiction—from sprawling epic sagas to 
          intricate magic systems. There's something magical about escaping into worlds where 
          anything is possible.
        </p>
        <p className="mb-4">
          In the kitchen, I'm an enthusiastic home cook who loves experimenting with cuisines 
          from around the world. Italian and Indian cuisines hold a special place in my heart, 
          and I'm on a mission to master the art of authentic Neapolitan pizza.
        </p>
        <p>
          Travel fuels my soul—I'm drawn to dramatic landscapes, rich cultures, and experiences 
          that push me out of my comfort zone. My bucket list is long, and I'm slowly but surely 
          checking items off!
        </p>
      </>,
    goal: <div className="space-y-4">
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">🍕 Culinary Quest</h4>
          <p>Master the art of making a truly authentic Neapolitan pizza—leopard-spotted crust, San Marzano tomatoes, fresh mozzarella, and all.</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">🏔️ Travel Dreams</h4>
          <p>Hike through the stunning glaciers of Patagonia and witness the Northern Lights dancing over Iceland's dramatic landscapes.</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">✍️ Creative Ambition</h4>
          <p>Write my own fantasy fiction series—a story that's been brewing in my imagination for years, waiting to be told.</p>
        </div>
      </div>,
    journey: <div className="space-y-6">
        <div className="flex gap-4 border-l-2 border-primary pl-6">
          <div className="w-24 aspect-square rounded-lg bg-muted flex-shrink-0" />
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-foreground mb-1">🎿 Mountain Adventure</h4>
            <p className="text-sm text-muted-foreground mb-2">Recent</p>
            <p>Conquered my fear of heights with an exhilarating skiing trip in the Alps—crashed spectacularly, got back up, and loved every minute.</p>
          </div>
        </div>
        <div className="flex gap-4 border-l-2 border-border pl-6">
          <div className="w-24 aspect-square rounded-lg bg-muted flex-shrink-0" />
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-foreground mb-1">🍜 Culinary Experiment</h4>
            <p className="text-sm text-muted-foreground mb-2">Last Month</p>
            <p>Successfully made hand-pulled noodles from scratch after watching about 50 YouTube tutorials and destroying my kitchen twice.</p>
          </div>
        </div>
        <div className="flex gap-4 border-l-2 border-border pl-6">
          <div className="w-24 aspect-square rounded-lg bg-muted flex-shrink-0" />
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-foreground mb-1">📖 Reading Marathon</h4>
            <p className="text-sm text-muted-foreground mb-2">Ongoing</p>
            <p>Finished the entire Cosmere series by Brandon Sanderson—that's over 4 million words of interconnected epic fantasy!</p>
          </div>
        </div>
      </div>,
    skills: <div className="grid md:grid-cols-3 gap-6">
        <div className="relative group aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer">
          <div className="absolute inset-0 bg-muted" />
          <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
            <h5 className="font-semibold text-background text-lg mb-2">Italian Favorites</h5>
            <p className="text-background/90 text-sm">From fresh pasta to creamy risotto—la dolce vita on a plate! 🍝</p>
          </div>
        </div>
        <div className="relative group aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer">
          <div className="absolute inset-0 bg-muted" />
          <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
            <h5 className="font-semibold text-background text-lg mb-2">Indian Classics</h5>
            <p className="text-background/90 text-sm">Spice-infused comfort food that warms the soul 🍛</p>
          </div>
        </div>
        <div className="relative group aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer">
          <div className="absolute inset-0 bg-muted" />
          <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
            <h5 className="font-semibold text-background text-lg mb-2">Asian Adventures</h5>
            <p className="text-background/90 text-sm">Wok-tossed wonders and noodle perfection 🍜</p>
          </div>
        </div>
      </div>,
    current: <div className="space-y-4">
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">📚 Currently Reading</h4>
          <p>Deep into "The Stormlight Archive" by Brandon Sanderson—Book 4: Rhythm of War. The magic system is absolutely mind-blowing!</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">🤖 Fun AI Exploration</h4>
          <p>Building a personal AI assistant that helps me organize my fantasy book collection and recommends what to read next based on my mood.</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">💪 Fitness Goal</h4>
          <p>Training to do 10 pull-ups in one go—currently at 6, so we're getting there! Three sets of pull-ups every other day is the plan.</p>
        </div>
      </div>
  };
  const content = isPersonalMode ? personalContent : professionalContent;
  return <div className="min-h-screen transition-colors duration-500">
      {/* Mode Toggle */}
      <ModeToggle isPersonalMode={isPersonalMode} onToggle={setIsPersonalMode} />

      {/* Hero Section */}
      <Hero name="Arkin Sanghi" title={content.hero.title} summary={content.hero.summary} isPersonalMode={isPersonalMode} />

      {/* Who am I? */}
      <ContentSection id="who-am-i" title="Who am I?" icon={<User className="w-6 h-6" />}>
        {content.whoAmI}
      </ContentSection>

      {/* What is my goal? */}
      <ContentSection id="goal" title="What is my goal?" icon={<Target className="w-6 h-6" />} alternate>
        {content.goal}
      </ContentSection>

      {/* What has my journey been like? */}
      <ContentSection id="journey" title="What has my journey been like?" icon={isPersonalMode ? <Plane className="w-6 h-6" /> : <Route className="w-6 h-6" />}>
        {content.journey}
      </ContentSection>

      {/* What do I bring to the table? */}
      <ContentSection id="skills" title="What do I bring to the table?" icon={isPersonalMode ? <UtensilsCrossed className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />} alternate>
        {content.skills}
      </ContentSection>

      {/* What am I working on these days? */}
      <ContentSection id="current" title="What am I working on these days?" icon={isPersonalMode ? <Coffee className="w-6 h-6" /> : <Rocket className="w-6 h-6" />}>
        {content.current}
      </ContentSection>

      {/* Footer */}
      <footer className="hero-bg py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4 text-slate-400">Let's connect and explore opportunities together.</p>
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium transition-colors">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="text-primary hover:text-primary/80 font-medium transition-colors">
              Email
            </a>
          </div>
          <p className="text-sm mt-8 text-slate-400">© 2026 Arkin Sanghi. All rights reserved.</p>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>;
};
export default Index;