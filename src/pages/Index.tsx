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
      title: "MBA Candidate @ CMU Tepper | Aspiring Product Manager",
      summary: "Passionate about tackling tough problems that create win-win situations – delivering positive social impact for the world and supporting a sustainable business"
    },
    whoAmI: <>
        <p>
          I'm a driven, passionate engineer with a background working at the intersection of technology and business. My background is electrical engineering and technology consulting at Accenture Strategy and Consulting, where I have helped plan, evaluate and deliver patent-pending features and led GTM initiatives.
        </p>
      </>,
    goal: <>
        <p className="mb-4">
          My goal is to build. I want to capitalize on this inflection point in the way we work to understand how to plan, evaluate and deliver products and features end-to-end, on my own. I'm particularly excited about B2B opportunities in frontier labs, clean-tech and energy industries.
        </p>
        <p>
          Long term, I aspire to accumulate the knowledge and network to build my own thing – something at the intersection of clean tech and policy.
        </p>
      </>,
    journey: <div className="space-y-6">
        <div className="border-l-2 border-primary pl-6">
          <h4 className="font-semibold text-foreground mb-1">Current: Full-time MBA Student</h4>
          <p className="text-sm text-muted-foreground mb-2">CMU Tepper School of Business • 2025 - Present</p>
          <p>Focusing on Product Management, Business Strategy and Sustainability.</p>
        </div>
        <div className="border-l-2 border-border pl-6">
          <h4 className="font-semibold text-foreground mb-1">Management Consulting Associate</h4>
          <p className="text-sm text-muted-foreground mb-2">Accenture Strategy & Consulting • 2022 - 2025</p>
          <p>Worked with global clients on B2B products spanning Public Sector, Telecom and Sustainable Product domains. Delivered patent-pending product features and captured additional accounts generating ~$4M in top line impact.</p>
        </div>
        <div className="border-l-2 border-border pl-6">
          <h4 className="font-semibold text-foreground mb-1">Bachelor of Engineering – Electrical and Electronics Engineering</h4>
          <p className="text-sm text-muted-foreground mb-2">BITS Pilani • 2018 - 2022</p>
          <p>Undertook projects in Convolutional Neural Networks, Computer Vision and Supercapacitors that reinforced interest in tech-focused solutions. Volunteer work in health and public awareness initiatives, combined with debating experience, made me inclined towards sustainability and social impact.</p>
        </div>
      </div>,
    skills: <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-foreground mb-3">Technical Skills</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Tableau, SQL
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              A/B Testing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Figma, Lovable, Claude
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
          <p>Creating an NAV model for financing Sustainable Aviation Fuels – requires market research on costs and revenue uptake.</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">🛠️ Side Projects</h4>
          <p>Creating a personal relationship manager, to explore Claude Code and to help students like me structure their networking outreach.</p>
        </div>
      </div>
  };

  // Personal content
  const personalContent = {
    hero: {
      title: "I like consuming knowledge and talking about it",
      summary: "When I'm not in MBA mode, you'll find me lost in epic fantasy worlds, experimenting with recipes in the kitchen, or exploring my latest hobby – these days it's hitting the gym!"
    },
    whoAmI: <>
        <p className="mb-4">
          I'm a passionate reader who devours fantasy fiction – from sprawling epic sagas to intricate magic systems. There's something fascinating about creating and inhabiting worlds with a different set of physical laws.
        </p>
        <p className="mb-4">
          In the kitchen, I'm an enthusiastic home cook who loves experimenting with cuisines from around the world. Italian and Indian cuisines hold a special place in my heart, and I'm on a mission to master the art of authentic Neapolitan pizza.
        </p>
        <p>
          I love travelling, especially the mountains. However, given that that is on a backburner for now, I spend my free time staying active. These days, it's the gym and squash.
        </p>
      </>,
    goal: <div className="space-y-4">
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">🍕 Culinary Quest</h4>
          <p>Master the art of making a truly authentic Neapolitan pizza – leopard-spotted crust, San Marzano tomatoes, fresh mozzarella, and all.</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">🏔️ Travel Dreams</h4>
          <p>Hike through the Patagonias and behold the volcanic landscapes of Iceland.</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">✍️ Creative Ambition</h4>
          <p>Write my own fantasy fiction series – a story that's been brewing in my imagination for years, waiting to be told.</p>
        </div>
      </div>,
    journey: <div className="space-y-6">
        <div className="flex gap-4 border-l-2 border-primary pl-6">
          <div className="w-24 aspect-square rounded-lg bg-muted flex-shrink-0" />
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-foreground mb-1">🎿 Mountain Adventure</h4>
            <p className="text-sm text-muted-foreground mb-2">Recent</p>
            <p>White water rafting down the Ohiopyle River – care to guess how many times I went overboard?</p>
          </div>
        </div>
        <div className="flex gap-4 border-l-2 border-border pl-6">
          <div className="w-24 aspect-square rounded-lg bg-muted flex-shrink-0" />
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-foreground mb-1">🍜 Culinary Experiment</h4>
            <p className="text-sm text-muted-foreground mb-2">Last Month</p>
            <p>Successfully burned spaghetti pasta. It's a skill, I know.</p>
          </div>
        </div>
        <div className="flex gap-4 border-l-2 border-border pl-6">
          <div className="w-24 aspect-square rounded-lg bg-muted flex-shrink-0" />
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-foreground mb-1">📖 Reading Marathon</h4>
            <p className="text-sm text-muted-foreground mb-2">Ongoing</p>
            <p>Just wrapped up all books in the Witcher Saga. Quite happy to talk about my thoughts on the characters, the dialogue and the world building!</p>
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
          <p>Planning on starting with Terry Pratchett's Discworld series.</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">🤖 Fun AI Exploration</h4>
          <p>Apart from the PRM project, working on creating dashboards that ingest information from multiple projects/initiatives and provide concise alerts for PMs and PMMs.</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">💪 Fitness Goal</h4>
          <p>Training to do 10 pull-ups in one go—currently at 5, so we're getting there! Three sets of pull-ups every other day is the plan.</p>
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
            <a href="https://linkedin.com/in/arkin-sanghi" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium transition-colors">
              LinkedIn
            </a>
            <a href="mailto:Sanghi.arkin@gmail.com" className="text-primary hover:text-primary/80 font-medium transition-colors">
              Sanghi.arkin@gmail.com
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
