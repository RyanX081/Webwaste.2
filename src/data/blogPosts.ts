export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  highlight?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  tag: string;
  readTime: string;
  publishedAt: string;
  heroImage: {
    src: string;
    alt: string;
  };
  author: {
    name: string;
    role: string;
  };
  sections: BlogPostSection[];
  keyTakeaways: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'sustainable-design-systems',
    title: 'Build a Sustainable Design System That Stays Fast',
    summary:
      'Translate eco-conscious values into reusable tokens, components, and rituals that keep your product lightweight at scale.',
    tag: 'Design systems',
    readTime: '8 min read',
    publishedAt: 'September 4, 2024',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=2000&q=80',
      alt: 'Design team exploring component library sketches pinned on a wall'
    },
    author: {
      name: 'Priya Anand',
      role: 'Design Systems Lead'
    },
    sections: [
      {
        heading: 'Why low-carbon design systems matter',
        paragraphs: [
          'Design systems have an outsized influence on both customer experience and carbon intensity. Every color token, spacing ramp, and motion primitive that ships in the library trickles down to hundreds of screens.',
          'Embedding sustainability heuristics directly inside the system prevents regressions and reduces the emotional labour of policing individual pull requests.'
        ],
        highlight:
          'When we tuned the component baseline for an enterprise SaaS client, the average page weight dropped by 36% without impacting conversion.'
      },
      {
        heading: 'Start with measurable guardrails',
        paragraphs: [
          'Set budget ranges for typography, imagery, and interaction patterns. Document those thresholds next to usage guidelines so designers know the why as well as the what.',
          'Make the budgets visible in tools your team already uses. We publish Figma annotations and automated lint checks that trigger whenever a component exceeds agreed limits.'
        ],
        bullets: [
          'Typography: cap display styles at 4 rem and restrict web fonts to two performant families.',
          'Imagery: default to AVIF and WebP, with baseline compression targets baked into export templates.',
          'Motion: encourage transfers under 200ms and respect prefers-reduced-motion by default.'
        ]
      },
      {
        heading: 'Treat maintenance as an enablement programme',
        paragraphs: [
          'Systems drift when the team forgets why decisions were made. Pair with engineering and content regularly to evaluate carbon dashboards alongside design debt.',
          'A quarterly greenhouse review gives contributors space to propose refinements, recalibrate budgets, and celebrate wins. The ritual keeps the system alive instead of static.'
        ]
      }
    ],
    keyTakeaways: [
      'Attach carbon budgets directly to tokens and reusable primitives.',
      'Automate tooling feedback so the guidance meets designers inside their workflows.',
      'Plan lightweight governance rituals that keep sustainability visible long-term.'
    ]
  },
  {
    slug: 'carbon-aware-delivery-roadmap',
    title: 'Ship a Carbon-Aware Delivery Roadmap in 90 Days',
    summary:
      'A practical playbook for aligning product, engineering, and leadership on a roadmap that cuts emissions without derailing velocity.',
    tag: 'Product leadership',
    readTime: '9 min read',
    publishedAt: 'July 22, 2024',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80',
      alt: 'Product team reviewing roadmap milestones in a bright meeting room'
    },
    author: {
      name: 'Miguel López',
      role: 'Principal Strategist'
    },
    sections: [
      {
        heading: 'Baseline the real footprint together',
        paragraphs: [
          'Leaders back what they can measure. Start the engagement by visualising energy, emissions, and performance data for your five highest traffic journeys.',
          'Combine analytics with qualitative evidence from customers and support tickets so teams understand the human impact of slow, heavy flows.'
        ],
        highlight:
          'In our last kickoff, surfacing emissions next to NPS data convinced leadership to prioritise optimisation over a flashy but high-carbon rebrand.'
      },
      {
        heading: 'Sequence work around shared outcomes',
        paragraphs: [
          'Group backlog ideas into themes that ladder up to business metrics. Each theme should have a carbon hypothesis and a measurable UX or revenue benefit.',
          'Use two-week experiments to de-risk ambitious bets. Track delta in grams of CO₂e alongside customer sentiment.'
        ],
        bullets: [
          'Retention theme: compress dashboards, reduce bundle size by 30%, and reinvest speed gains into accessibility fixes.',
          'Acquisition theme: rework top-of-funnel media to AVIF, trim tracking scripts, and improve search crawl budgets.',
          'Enablement theme: equip teams with a live carbon scorecard and publish a shared glossary.'
        ]
      },
      {
        heading: 'Socialise progress with storytelling',
        paragraphs: [
          'Bring finance, marketing, and customer success into the loop with monthly demos. Reveal a single narrative slide that ties the numbers to customer outcomes.',
          'End every review by agreeing the next experiment before leaving the room. Momentum keeps the roadmap funded.'
        ]
      }
    ],
    keyTakeaways: [
      'Pair emissions data with customer insight to build urgency.',
      'Frame roadmap themes around mutual value, not trade-offs.',
      'Tell compelling stories about progress to secure ongoing sponsorship.'
    ]
  }
];
