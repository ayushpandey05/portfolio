export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ayushpandey.dev";

export const profile = {
  name: "Ayush Pandey",
  wordmark: "AYUSH",
  title: "SDE II",
  role: "Mobile & Frontend Engineer",
  location: "Mumbai",
  label: "SDE II · MUMBAI",
  email: "ayushpandey0508@gmail.com",
  linkedin: "https://linkedin.com/in/ayushpandey05",
  resumePath: "/Ayush_Pandey_Resume.pdf",
  summary:
    "React Native, Next.js, and TypeScript. Trading, gaming, and healthcare products.",
  about:
    "Mobile and frontend engineer with approximately 6 years of experience building production applications across fintech, gaming, healthcare, and automotive domains. Strong expertise in React Native, React.js, Next.js, and TypeScript, with experience owning mobile architecture, React Native New Architecture migrations, real-time data flows, performance optimisation, and app releases. Experienced in technical planning, mentoring, cross-functional API design, and reusable cross-platform UI systems. Also contributed to Go APIs and backend integrations involving PostgreSQL and Redis.",
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  {
    value: "6 years",
    label: "Engineering experience",
  },
  {
    value: "New Architecture",
    label: "React Native New Arch",
  },
  {
    value: "1s faster",
    label: "Startup time improvement",
  },
  {
    value: "30% smaller",
    label: "App size reduction",
  },
] as const;

export const projects = [
  {
    id: "tiqs",
    name: "Tiqs",
    company: "Games24x7 → Tiqs",
    period: "Feb 2026 – Present",
    problem:
      "A high-frequency trading app needed stable React Native New Architecture ownership, real-time tick delivery, and faster startup without drowning the UI in Redux updates.",
    built: [
      "Led React Native architecture, planning, PR reviews, and iOS/Android releases.",
      "Migrated to a newer React Native version and New Architecture, including native-level fixes and dependency patches.",
      "Designed TickHandler with useFastTick / useFastTicks for token-based live updates outside Redux.",
      "Moved instrument-master processing to Go APIs backed by PostgreSQL and Redis, cutting startup by ~1 second.",
      "Shipped Explore, Holdings, Positions, Orders, Stock Details, Watchlist, Profile, and Wallet experiences.",
    ],
    impact: "~1s faster startup · New Architecture migration · production trading flows",
    stack: [
      "React Native",
      "New Architecture",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Redis",
      "Sentry",
    ],
  },
  {
    id: "rummy-circle",
    name: "Rummy Circle",
    company: "Games24x7",
    period: "Jul 2024 – Jan 2026",
    problem:
      "Lobby and game-table experiences needed smoother gameplay UI, fewer re-renders, and a meaningfully smaller download size.",
    built: [
      "Owned lobby development and expanded into game-table UI, modals, animations, and drag-and-drop interactions.",
      "Moved image and GIF assets to CDN delivery and built a reusable Lottie download component with preload support.",
      "Reduced unnecessary re-renders through FlatList and selector optimisation.",
      "Refactored modal architecture so modals mount only when needed.",
    ],
    impact: "~30% smaller app · smoother gameplay rendering",
    stack: ["React Native", "Lottie", "CDN assets", "performance"],
  },
  {
    id: "ayu-health",
    name: "Ayu Health",
    company: "Ayu Health",
    period: "Apr 2022 – Jul 2024",
    problem:
      "Healthcare workflows needed reusable form systems and hybrid delivery so teams could ship patient and doctor experiences without rebuilding every screen.",
    built: [
      "Built a JSON-driven form engine for AyuMitra with dynamic inputs, validation, and structured payloads.",
      "Contributed to Amigos for communication-team patient follow-up.",
      "Built the React Native authentication shell for AyuDocConnect and embedded a Next.js experience through WebView.",
      "Aligned UI with Figma designs across product surfaces.",
    ],
    impact: "Config-driven forms · faster hybrid app delivery",
    stack: ["React Native", "Next.js", "React.js", "WebView", "TypeScript"],
  },
  {
    id: "carhp",
    name: "CarHP / CarIndigo",
    company: "Collegedunia",
    period: "Sep 2021 – Apr 2022",
    problem:
      "Two region-specific automotive apps needed a single React Native codebase with native search and listing experiences.",
    built: [
      "Built React Native apps from scratch with flavour/scheme-based configurations for CarHP and CarIndigo.",
      "Integrated APIs for search and city selection; migrated WebView listing and detail pages to native screens.",
      "Built a Windows desktop Electron app embedding the website through WebView.",
    ],
    impact: "Single codebase · two region apps · native migration",
    stack: ["React Native", "Electron", "WebView", "REST APIs"],
  },
] as const;

export const experience = [
  {
    company: "Games24x7 → Tiqs",
    role: "SDE II",
    period: "Jul 2024 – Present",
    location: "Mumbai",
    bullets: [
      "Lead React Native mobile development for Tiqs, owning architecture, planning, mentoring, and releases.",
      "Drove New Architecture migration, TickHandler real-time updates, and backend-backed startup improvements.",
      "Previously owned lobby and game-table work on Rummy Circle, cutting app size by ~30%.",
    ],
  },
  {
    company: "Ayu Health",
    role: "Frontend Engineer",
    period: "Apr 2022 – Jul 2024",
    location: "India",
    bullets: [
      "Owned a reusable JSON-driven form engine that replaced repetitive form-screen development.",
      "Shipped hybrid React Native + Next.js experiences for doctor and patient workflows.",
      "Contributed across AyuMitra, Amigos, and AyuDocConnect product surfaces.",
    ],
  },
  {
    company: "Collegedunia",
    role: "Developer – React Native",
    period: "Sep 2021 – Apr 2022",
    location: "India",
    bullets: [
      "Built CarHP and CarIndigo from a shared React Native codebase with region flavours.",
      "Migrated listing and detail flows from WebView to native screens.",
      "Delivered an Electron desktop wrapper for the automotive website.",
    ],
  },
  {
    company: "Daffodil Software",
    role: "Junior Associate – IT",
    period: "Jul 2020 – Sep 2021",
    location: "India",
    bullets: [
      "Contributed to an in-house HRMS covering attendance, tasks, salary slips, and projects.",
      "Helped build a shared React.js and React Native component framework.",
      "Created reusable UI primitives including Modal, Bottom Sheet, Form, and Input.",
    ],
  },
] as const;

export const skills = [
  {
    group: "Mobile",
    items: [
      "React Native",
      "New Architecture",
      "Native Modules",
      "Reanimated",
      "Gesture Handler",
    ],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    group: "State & Data",
    items: [
      "Redux Toolkit",
      "React Query",
      "Zustand",
      "WebSockets",
      "Token subscriptions",
    ],
  },
  {
    group: "Engineering",
    items: [
      "Mobile architecture",
      "Performance",
      "App-size optimisation",
      "Deep linking",
      "Push notifications",
      "CI/CD",
    ],
  },
  {
    group: "Backend",
    items: ["Go", "REST APIs", "PostgreSQL", "Redis"],
  },
  {
    group: "Tools",
    items: [
      "Sentry",
      "Firebase",
      "MoEngage",
      "Notifee",
      "AppTrove",
      "Git",
    ],
  },
] as const;

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Arya Institute of Engineering and Technology",
  period: "2016 – 2020",
};

export const watchlist = [
  { symbol: "RELIANCE", price: "2,914.50", change: "+1.24%", up: true },
  { symbol: "TCS", price: "4,182.00", change: "-0.48%", up: false },
  { symbol: "HDFCBANK", price: "1,678.35", change: "+0.67%", up: true },
] as const;
