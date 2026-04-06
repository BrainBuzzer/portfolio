export interface SocialLink {
  label: string;
  href: string;
  platform: "github" | "linkedin" | "x" | "email";
}

export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  logo: string;
}

export interface FocusItem {
  title: string;
  description: string;
}

export interface ProjectStub {
  name: string;
  description: string;
  href: string;
  label: string;
  icon: "mqtt" | "php" | "campaign" | "policy";
  tag: string;
}

export interface UsesSectionStub {
  title: string;
  items: {
    title: string;
    description: string;
    href?: string;
  }[];
}

export const homeIntro =
  "Constructing digital infrastructure for the next frontier. Polyglot engineer passionate about systems, startups, and stellar interfaces. Currently at Terrafloww, building a next-gen platform that makes satellite imagery accessible to AI agents.";

export const aboutHeadline =
  "I’m Aditya Giri. I build systems, products, and the infrastructure that keeps them reliable.";

export const aboutParagraphs = [
  "I am a software engineer with a deep passion for building scalable systems and intuitive interfaces. My journey began with a curiosity for how things work, leading me to explore everything from full-stack web development to low-level systems programming.",
  "I currently work at Terrafloww, building a next-gen platform that makes satellite imagery accessible to AI agents.",
  "Across the last few years, I’ve worked as a founder, consultant, and engineer. That mix of roles has kept me close to both the technical details and the larger product decisions that shape how software gets built.",
];

export const socialLinks: SocialLink[] = [
  {
    label: "Follow on GitHub",
    href: "https://github.com/BrainBuzzer",
    platform: "github",
  },
  {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/giriaditya",
    platform: "linkedin",
  },
  {
    label: "Follow on X",
    href: "https://x.com/BrainBuzzerMe",
    platform: "x",
  },
  {
    label: "mail@brainbuzzer.me",
    href: "mailto:mail@brainbuzzer.me",
    platform: "email",
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Co-Founder",
    company: "Terrafloww",
    date: "2025 - Present",
    description:
      "Building a next-gen platform that makes satellite imagery accessible to AI agents.",
    logo: "/logos/terrafloww.svg",
  },
  {
    title: "Engineer",
    company: "Angkas",
    date: "Jun 2023 - Present",
    description: "Built scalable systems handling 100,000+ requests per minute.",
    logo: "/logos/angkas.svg",
  },
  {
    title: "Software Engineer",
    company: "Classcard",
    date: "Dec 2022 - Jun 2023",
    description: "Built backend systems with Laravel.",
    logo: "/logos/classcard.svg",
  },
  {
    title: "Founder",
    company: "Hyperlog",
    date: "Mar 2018 - 2022",
    description: "Built a developer intelligence platform.",
    logo: "/logos/hyperlog.png",
  },
  {
    title: "Consultant",
    company: "Kawa Space",
    date: "Dec 2020 - Dec 2021",
    description: "Worked across frontend and backend systems for space data.",
    logo: "/logos/kawa-space.webp",
  },
];

export const focusItems: FocusItem[] = [
  {
    title: "Terrafloww",
    description:
      "Building a next-gen platform that makes satellite imagery accessible to AI agents.",
  },
  {
    title: "Content creation",
    description:
      "Trying to be more consistent with YouTube and focus on high-quality engineering content.",
  },
  {
    title: "Skill acquisition",
    description:
      "Going deep on Rust and agentic workflows with a long-term focus on systems and developer tooling.",
  },
];

export const projectsIntro =
  "A mix of developer tooling, public-interest software, and systems-heavy products I’ve built or contributed to over the years.";

export const projectStubs: ProjectStub[] = [
  {
    name: "MQTTPlus",
    description:
      "A sharp native macOS console for message brokers. It lets me inspect live NATS and Redis traffic, manage JetStream streams and consumers, and debug event-heavy systems without settling for a sluggish Electron shell.",
    href: "https://github.com/BrainBuzzer/MQTTPlus",
    label: "github.com/BrainBuzzer/MQTTPlus",
    icon: "mqtt",
    tag: "Native macOS app",
  },
  {
    name: "php-ch",
    description:
      "A no-nonsense Windows utility for people juggling multiple PHP installs. It switches runtimes quickly, opens the correct php.ini, and removes the usual 'which PHP is this machine actually using?' confusion.",
    href: "https://github.com/BrainBuzzer/php-ch",
    label: "github.com/BrainBuzzer/php-ch",
    icon: "php",
    tag: "CLI utility",
  },
  {
    name: "Save MGNREGA",
    description:
      "A campaign site built to make a policy fight legible on the internet. The work here was less about engineering theater and more about clarity, urgency, and giving people a direct way to understand why MGNREGA matters.",
    href: "https://savemgnrega.in",
    label: "savemgnrega.in",
    icon: "campaign",
    tag: "Campaign site",
  },
  {
    name: "Policy AI",
    description:
      "A full-stack policy intelligence platform built like a serious product from day one: ingestion workers, API surfaces, search-ready infrastructure, and a Next.js frontend sitting on top of a Bun monorepo.",
    href: "https://github.com/bnw-org/policy-ai",
    label: "github.com/bnw-org/policy-ai",
    icon: "policy",
    tag: "Policy platform",
  },
];

export const usesIntro =
  "The hardware and software I rely on day-to-day for work, experiments, and everything around them.";

export const usesStubs: UsesSectionStub[] = [
  {
    title: "Workstation",
    items: [
      {
        title: "16-inch MacBook Pro, M4 Pro",
        description:
          "This is my primary work machine and where most of my day-to-day coding happens. It handles the usual mix of editors, browser tabs, terminals, and agent workflows without getting in the way.",
        href: "https://www.apple.com/macbook-pro/",
      },
      {
        title: "Mac Mini",
        description:
          "The Mac Mini mostly sits in the background as a media and home-compute box, but it also doubles as the machine I use for OpenClaw Assistant experiments. It is the kind of secondary system that ends up being useful far more often than expected.",
        href: "https://www.apple.com/mac-mini/",
      },
      {
        title: "Greensoul height-adjustable table",
        description:
          "A sit-stand desk is non-negotiable for me at this point. I spend too many hours at the desk every day, so being able to switch posture during work makes the setup meaningfully more sustainable.",
        href: "https://www.greensoul.online/products/green-soul-trigger-2-0-height-adjustable-table?variant=50608548970813",
      },
      {
        title: "Herman Miller Mira 2",
        description:
          "This is the chair I use for long programming sessions. Good chairs are expensive, but once you spend enough time at a desk, bad ergonomics become much more expensive.",
        href: "https://www.hermanmiller.com/products/seating/office-chairs/mirra-2-chairs/",
      },
      {
        title: "2 × 32-inch monitors",
        description:
          "I like having enough screen real estate to keep code, terminals, docs, dashboards, and research all visible at the same time. Two 32-inch displays make that possible without constantly context-switching between windows.",
        href: "https://www.amazon.in/dp/B0BPBMFMWC?th=1",
      },
      {
        title: "Ryzen 9 5950X desktop, 64GB RAM, Arch Linux",
        description:
          "This is my Linux machine for when I want full control over the environment. It runs Arch with a custom desktop setup and is where I tend to do the more system-heavy tinkering and experimentation.",
      },
    ],
  },
  {
    title: "Development tools",
    items: [
      {
        title: "Codex",
        description:
          "Codex has become a major part of how I work. I use it as the primary agentic coding interface for everything from implementation and cleanup to codebase exploration and iteration.",
        href: "https://openai.com/codex",
      },
      {
        title: "Opencode",
        description:
          "Opencode stays in the toolchain as an additional agentic coding surface. I like having multiple strong interfaces available because different workflows and tasks benefit from different interaction models.",
        href: "https://opencode.ai/",
      },
      {
        title: "Ghostty",
        description:
          "Ghostty is the terminal I use for most shell work. It is fast, clean, and gets out of the way, which is exactly what I want from a terminal emulator.",
        href: "https://ghostty.org/docs",
      },
      {
        title: "Zed",
        description:
          "Zed is my preferred editor for focused coding sessions. It feels lightweight while still being modern enough for the kind of work I do every day.",
        href: "https://zed.dev/",
      },
    ],
  },
  {
    title: "Productivity",
    items: [
      {
        title: "Notion Calendar",
        description:
          "This is what I use to keep time visible and structured. I care a lot about protecting long blocks for focused work, so a calendar tool needs to be simple and frictionless.",
        href: "https://www.notion.com/product/calendar",
      },
      {
        title: "Raycast",
        description:
          "Raycast is one of those tools that quietly removes a lot of tiny bits of friction from the day. I use it constantly for launching apps, quick actions, and reducing mouse-heavy context switches.",
        href: "https://www.raycast.com/",
      },
      {
        title: "AeroSpace",
        description:
          "AeroSpace handles window management on macOS for me. I prefer keyboard-driven layouts, and this gives me a setup that feels much closer to how I like working on Linux.",
        href: "https://github.com/nikitabobko/AeroSpace",
      },
      {
        title: "Dia Browser",
        description:
          "Dia is the browser I use day to day. Browsers are effectively the operating system for a lot of modern work, so I care a lot about whether one feels fast, predictable, and calm to use for hours at a time.",
        href: "https://www.diabrowser.com/",
      },
    ],
  },
];
