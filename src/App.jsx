import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ArrowUpRight,
  Download,
  Mail,
  Globe,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Compass,
  TrendingUp,
  Briefcase,
  Users,
  Layers,
  Cpu,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
  Target,
  Award,
  GraduationCap,
  BookOpen,
  Quote,
  Plus,
  Sliders,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  FileText,
  Upload,
  ArrowUp,
  Sparkles,
  Building2,
  Calendar,
  Code2,
  Eye,
  Copy,
  Check
} from 'lucide-react';

const Linkedin = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ className = "w-4 h-4", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/**
 * ============================================================================
 * CENTRALIZED PORTFOLIO DATA CONFIGURATION (Mirrors src/data/portfolioData.ts)
 * ============================================================================
 * STRICT DATA RULE:
 * No fabricated names, companies, revenue figures, headcount, awards, or
 * unverified skill percentages. All unprovided fields use explicit placeholders
 * ready for the executive owner to customize via code or the built-in Studio.
 */
const initialPortfolioData = {
  brand: {
    monogram: 'CT',
    fullName: 'Châu Thanh Sang',
    professionalTitle: 'SOFTWARE ENGINEERING STUDENT',
    executiveTagline: 'Software Engineering student focused on building practical web applications and clean user interfaces.',
    shortBio:
      'Undergraduate Software Engineering student at Hung Vuong University with hands-on experience building web projects in React, TypeScript, and Python, certified in secure software development by The Linux Foundation & OpenSSF.',
    location: 'Ho Chi Minh City, Vietnam',
    availabilityStatus: 'Open to Internship & Junior Developer Roles',
    portraitUrl: '/portrait.jpg',
  },

  resumeConfig: {
    pdfUrl: '/Resume_ChauThanhSang.pdf',
    fileName: 'Resume_ChauThanhSang.pdf',
    lastUpdated: 'November 2026',
  },

  contactConfig: {
    email: 'sangchaubr089@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chauthanhsang',
    github: 'https://github.com/SangTranTamLy',
    website: 'https://zenithiovn.vercel.app/',
    otherPlatformLabel: '',
    otherPlatformUrl: '',
    locationDisplay: 'Ho Chi Minh City, Vietnam',
    formEndpointUrl: 'https://formsubmit.co/ajax/60a410c40d321fe0c5bda2e76ed59294',
  },

  about: {
    personalIntroduction:
      'I am an undergraduate Software Engineering student at Hung Vuong University with a strong interest in modern web development and software security.',
    professionalBackground:
      'Since starting my degree in 2023, I have been learning core computer science foundations and practical application development. I build projects using React, TypeScript, and Python, deploy them on cloud platforms, and recently earned the Developing Secure Software (LFD121) certificate from The Linux Foundation & OpenSSF to ensure I write safe, reliable code.',
    leadershipPhilosophy:
      'I believe in open communication, sharing knowledge with peers, and actively learning from code reviews and feedback.',
    businessPhilosophy:
      'I prioritize clean code, user-friendly interfaces, and solving real problems over adding unnecessary complexity.',
    visionAndMission:
      'Seeking software engineering internship and junior opportunities where I can contribute to production projects, learn from senior engineers, and continue building solid engineering habits.',
    coreValues: [
      {
        index: '01',
        title: 'Clean Code',
        description:
          'Writing readable, well-structured, and maintainable code with clear naming and modular components.',
      },
      {
        index: '02',
        title: 'Security Awareness',
        description:
          'Applying secure coding principles and threat awareness right from the start of development.',
      },
      {
        index: '03',
        title: 'Continuous Learning',
        description:
          'Staying curious, exploring modern frameworks, and learning through hands-on practice.',
      },
      {
        index: '04',
        title: 'Practical Delivery',
        description:
          'Focusing on completing projects, deploying them live, and making sure they actually work well for users.',
      },
    ],
  },

  experiences: [
    {
      id: 'exp-1',
      companyName: 'Hung Vuong University — Academic & Capstone Projects',
      jobTitle: 'Software Engineering Student & Project Lead',
      period: '2023 — PRESENT',
      location: 'Ho Chi Minh City, Vietnam',
      responsibilities: [
        'Researched and architected end-to-end web applications and university chatbot solutions.',
        'Implemented secure coding practices and threat modeling following Linux Foundation standards.',
      ],
      keyContributions: [
        'Engineered ChatBot_DHV to streamline academic information retrieval for students.',
        'Collaborated on capstone software engineering deliverables with responsive web architectures.',
      ],
      achievements: [
        'Earned the Developing Secure Software (LFD121) certification from The Linux Foundation & OpenSSF.',
        'Successfully completed all academic semester milestones in Software Engineering.',
      ],
    },
    {
      id: 'exp-2',
      companyName: 'Independent Software Engineering & Open Source',
      jobTitle: 'Full-Stack Developer',
      period: '2023 — PRESENT',
      location: 'Ho Chi Minh City, Vietnam',
      responsibilities: [
        'Designed, coded, and deployed responsive web apps utilizing React, TypeScript, and Tailwind CSS.',
        'Managed source code versioning, branch workflows, and continuous deployment via GitHub & Vercel.',
      ],
      keyContributions: [
        'Successfully developed and released WebbApp_ZENITH-MEDIA and pos-system-online to production.',
      ],
      achievements: [
        'Built and published 10+ software repositories on GitHub with live cloud deployments.',
      ],
    },
  ],

  expertise: [
    {
      id: 'exp-dom-1',
      title: 'Frontend Engineering',
      category: 'Modern Web Architecture',
      iconName: 'Code2',
      summary:
        'Architecting high-performance, accessible, and reactive user interfaces utilizing React, TypeScript, and Tailwind CSS with modern build toolchains like Vite.',
      pillars: ['React & TypeScript', 'Tailwind CSS & Styling', 'Component Architecture'],
    },
    {
      id: 'exp-dom-2',
      title: 'Backend & API Architecture',
      category: 'Server-Side Engineering',
      iconName: 'Layers',
      summary:
        'Designing reliable RESTful APIs and server-side processing workflows with Node.js and Python to deliver resilient data communication across services.',
      pillars: ['RESTful API Design', 'Node.js & Python', 'Database Schema Design'],
    },
    {
      id: 'exp-dom-3',
      title: 'Secure Software Development',
      category: 'Application Security (OpenSSF)',
      iconName: 'ShieldCheck',
      summary:
        'Implementing secure coding best practices, threat modeling, input sanitization, and vulnerability mitigation accredited by The Linux Foundation (LFD121).',
      pillars: ['Threat Modeling', 'Secure Coding (LFD121)', 'Supply Chain Security'],
    },
    {
      id: 'exp-dom-4',
      title: 'AI & Conversational Systems',
      category: 'Intelligent Automation',
      iconName: 'Cpu',
      summary:
        'Engineering intelligent conversational chatbot solutions and NLP query processing pipelines, such as ChatBot_DHV for university academic support.',
      pillars: ['NLP Query Handling', 'Conversational Workflows', 'Python AI Pipelines'],
    },
    {
      id: 'exp-dom-5',
      title: 'Cloud Deployment & CI/CD',
      category: 'DevOps & Cloud',
      iconName: 'Sparkles',
      summary:
        'Deploying production-ready cloud applications via Vercel edge infrastructure, continuous integration, and automated GitHub version release pipelines.',
      pillars: ['Vercel Edge Platform', 'Automated CI/CD', 'Production Monitoring'],
    },
    {
      id: 'exp-dom-6',
      title: 'UI/UX & Responsive Experience',
      category: 'Interface Design',
      iconName: 'Compass',
      summary:
        'Crafting seamless, mobile-first responsive web layouts with intuitive navigation, fluid transitions, and high accessibility standards across all screen sizes.',
      pillars: ['Mobile-First Design', 'Performance Optimization', 'Interaction Design'],
    },
    {
      id: 'exp-dom-7',
      title: 'Clean Code & Architecture',
      category: 'Software Quality',
      iconName: 'Briefcase',
      summary:
        'Writing maintainable, predictable, and self-documenting code with strict TypeScript type definitions, DRY principles, and modular system decoupling.',
      pillars: ['Strict Type Safety', 'DRY Principles', 'Refactoring & Modularity'],
    },
    {
      id: 'exp-dom-8',
      title: 'Debugging & Problem Solving',
      category: 'Analytical Engineering',
      iconName: 'Lightbulb',
      summary:
        'Applying first-principles engineering to diagnose runtime bottlenecks, solve complex asynchronous state conditions, and optimize execution speed.',
      pillars: ['Root-Cause Diagnosis', 'Async Debugging', 'Performance Tuning'],
    },
    {
      id: 'exp-dom-9',
      title: 'Version Control & Collaboration',
      category: 'Engineering Workflow',
      iconName: 'TrendingUp',
      summary:
        'Managing complex codebase evolutions through disciplined Git branch strategies, semantic commit conventions, and structured code reviews.',
      pillars: ['Git Branching Models', 'Semantic Versioning', 'Code Review Practices'],
    },
    {
      id: 'exp-dom-10',
      title: 'Technical Communication',
      category: 'Professional Execution',
      iconName: 'Users',
      summary:
        'Authoring clear technical documentation, communicating trade-offs transparently, and collaborating effectively across academic and engineering teams.',
      pillars: ['Technical Documentation', 'Cross-Squad Collaboration', 'Requirements Analysis'],
    },
  ],

  projects: [
    {
      id: 'proj-1',
      name: 'WebbApp_ZENITH-MEDIA',
      category: 'Web Application',
      featured: true,
      role: 'Frontend & Full-Stack Developer',
      description:
        'Modern digital media platform and interactive web application engineered with TypeScript and responsive UI components.',
      technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Vercel'],
      challenges:
        'Designing a high-performance, responsive media interface with fast load times and clean component architecture.',
      solutions:
        'Built modular components with optimized state management and deployed with continuous integration on Vercel.',
      results:
        'Live in production at zenithiovn.vercel.app with zero downtime and seamless mobile UX.',
      imageUrl: '',
      externalLink: 'https://zenithiovn.vercel.app/',
    },
    {
      id: 'proj-2',
      name: 'ChatBot_DHV',
      category: 'AI & Intelligent Systems',
      featured: false,
      role: 'AI & Backend Developer',
      description:
        'Specialized AI assistant chatbot engineered for Hung Vuong University to automate academic queries and student support.',
      technologies: ['Python', 'NLP', 'REST API', 'GitHub'],
      challenges:
        'Structuring conversational flows and domain knowledge retrieval for university academic questions.',
      solutions:
        'Implemented Python query processing workflows tailored for student engagement and campus administrative queries.',
      results:
        'Actively maintained on GitHub with automated conversational capabilities.',
      imageUrl: '',
      externalLink: 'https://github.com/SangTranTamLy/ChatBot_DHV',
    },
    {
      id: 'proj-3',
      name: 'pos-system-online',
      category: 'Enterprise Solutions',
      featured: false,
      role: 'Lead Full-Stack Developer',
      description:
        'Cloud-based Point-of-Sale (POS) application featuring real-time product inventory, sales cart, and checkout workflows.',
      technologies: ['TypeScript', 'React', 'Cloud Services', 'Vercel'],
      challenges:
        'Handling state synchronization across shopping cart items, price calculations, and responsive billing screens.',
      solutions:
        'Architected structured typed data models in TypeScript with clean checkout UX and responsive layouts.',
      results:
        'Deployed live in production at pos-system-online.vercel.app.',
      imageUrl: '',
      externalLink: 'https://pos-system-online.vercel.app',
    },
  ],

  achievements: [
    {
      id: 'ach-1',
      category: 'Professional Certification',
      title: 'Developing Secure Software (LFD121)',
      year: '2026',
      organization: 'The Linux Foundation & OpenSSF',
      description:
        'Earned official certification in secure software development standards, threat modeling, input validation, and software supply chain protection.',
      verifiedMetric: 'ID: LF-e2c1m6v25w',
    },
    {
      id: 'ach-2',
      category: 'AI & Academic Solutions',
      title: 'University AI Chatbot (ChatBot_DHV)',
      year: '2026',
      organization: 'Hung Vuong University Ecosystem',
      description:
        'Engineered an intelligent chatbot system designed to support students and automate query handling for Hung Vuong University.',
      verifiedMetric: 'Python & NLP',
    },
    {
      id: 'ach-3',
      category: 'Cloud & Web Deployments',
      title: 'Live Production Web Platforms on Vercel',
      year: '2026',
      organization: 'Zenith Media & POS Retail Platform',
      description:
        'Engineered and published responsive, high-performance web applications live to the cloud with automated GitHub CI/CD pipelines.',
      verifiedMetric: 'Live on Vercel',
    },
    {
      id: 'ach-4',
      category: 'Academic Pursuit',
      title: 'Software Engineering Degree Candidate',
      year: '2023 — 2027',
      organization: 'Hung Vuong University',
      description:
        'Pursuing Bachelor of Science in Information Technology with specialized coursework in Software Engineering, Web Systems, and Secure Coding.',
      verifiedMetric: 'Class of 2023 - 2027',
    },
  ],

  education: [
    {
      id: 'edu-1',
      university: 'Hung Vuong University',
      degree: 'Bachelor of Science in Information Technology',
      major: 'Software Engineering',
      graduationYear: '2023 — 2027 (Expected)',
      honors: 'Core Focus: Software Engineering, Web Development & Secure Coding',
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      name: 'Developing Secure Software (LFD121)',
      issuer: 'The Linux Foundation & OpenSSF',
      year: 'October 2026',
      credentialNote: 'Certificate ID: LF-e2c1m6v25w | Focus: Secure Software Development, Vulnerability Mitigation & Supply Chain Security',
    },
  ],

  philosophy: {
    featuredQuote:
      '"Good software is crafted with curiosity, consistent practice, and attention to detail."',
    pillars: [
      {
        label: 'Engineering Mindset',
        title: 'Focus on Fundamentals',
        statement:
          'Solid fundamentals in data structures, clean code, and security principles provide the foundation for learning any new technology effectively.',
      },
      {
        label: 'Security Focus',
        title: 'Security from the Start',
        statement:
          'Writing secure code is not an afterthought. Following secure coding guidelines helps prevent vulnerabilities before they reach production.',
      },
      {
        label: 'Practical Learning',
        title: 'Learn by Building',
        statement:
          'Building, debugging, and deploying actual applications is the most reliable way to turn theoretical concepts into practical software engineering skills.',
      },
      {
        label: 'Growth Mindset',
        title: 'Continuous Improvement',
        statement:
          'Committed to expanding my skill set through code reviews, peer collaboration, and learning from experienced software engineers.',
      },
    ],
  },
};

/**
 * Helper to map icon string names to Lucide React components
 */
const ExpertiseIconMap = {
  Compass,
  TrendingUp,
  Briefcase,
  Users,
  Layers,
  Sparkles,
  Cpu,
  MessageSquare,
  Lightbulb,
  Target,
  Code2,
  ShieldCheck,
};

/**
 * Reusable Section Header Component (Editorial Luxury Style)
 */
const SectionHeader = ({ index, eyebrow, title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-14 md:mb-20 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <div
        className={`flex items-center gap-3 mb-4 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="font-mono text-xs tracking-[0.25em] text-[#C6A66B] uppercase px-2.5 py-1 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/25">
          {index}
        </span>
        <span className="h-[1px] w-8 bg-[#C6A66B]/40" />
        <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#A1A7B0]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F5F5F5] font-normal tracking-tight leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A1A7B0] leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default function App() {
  // Central State initialized with strict placeholder architecture
  const [data, setData] = useState(initialPortfolioData);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Project showcase state
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  // Modals & Drawers for Owner Customization / Experience / Resume
  const [studioOpen, setStudioOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [addExpModalOpen, setAddExpModalOpen] = useState(false);
  const [addProjectModalOpen, setAddProjectModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // New Experience Form State
  const [newExp, setNewExp] = useState({
    companyName: '',
    jobTitle: '',
    period: '',
    location: '',
    responsibilities: '',
    keyContributions: '',
    achievements: '',
  });

  // New Project Form State
  const [newProj, setNewProj] = useState({
    name: '',
    category: 'Strategic Initiative',
    role: '',
    description: '',
    technologies: '',
    challenges: '',
    solutions: '',
    results: '',
    externalLink: '',
  });

  // Contact Form State (Honest integration — never fakes email sending)
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [contactErrors, setContactErrors] = useState({});
  const [contactStatus, setContactStatus] = useState('idle'); // 'idle' | 'submitting' | 'unconfigured_notice' | 'success' | 'error'
  const [contactFeedback, setContactFeedback] = useState('');

  // File input refs for portrait & PDF resume
  const portraitInputRef = useRef(null);
  const resumeInputRef = useRef(null);

  // Navigation items
  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'expertise', label: 'Expertise' },
      { id: 'projects', label: 'Projects' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'education', label: 'Education' },
      { id: 'philosophy', label: 'Philosophy' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  // Handle scroll spy & sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 32);

      const sectionOffsets = navItems
        .map((item) => {
          const el = document.getElementById(item.id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top + window.scrollY - 180,
          };
        })
        .filter(Boolean);

      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollY >= sectionOffsets[i].top) {
          setActiveSection(sectionOffsets[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Smooth Scroll Handler
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Handle Resume Download (Strict rule: no fake CV file)
  const handleDownloadResume = () => {
    if (data.resumeConfig.pdfUrl && data.resumeConfig.pdfUrl.trim() !== '') {
      const link = document.createElement('a');
      link.href = data.resumeConfig.pdfUrl;
      link.download = data.resumeConfig.fileName || 'Executive_Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setResumeModalOpen(true);
    }
  };

  // Handle local Portrait image upload for live preview
  const handlePortraitUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setData((prev) => ({
      ...prev,
      brand: {
        ...prev.brand,
        portraitUrl: objectUrl,
      },
    }));
  };

  // Handle local PDF upload for real CV download
  const handleResumeFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setData((prev) => ({
      ...prev,
      resumeConfig: {
        ...prev.resumeConfig,
        pdfUrl: objectUrl,
        fileName: file.name,
        lastUpdated: new Date().toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        }),
      },
    }));
  };

  // Add New Experience Entry
  const handleAddExperience = (e) => {
    e.preventDefault();
    if (!newExp.companyName.trim() || !newExp.jobTitle.trim()) return;

    const entry = {
      id: `exp-${Date.now()}`,
      companyName: newExp.companyName.trim(),
      jobTitle: newExp.jobTitle.trim(),
      period: newExp.period.trim() || '[PERIOD]',
      location: newExp.location.trim() || '[LOCATION]',
      responsibilities: newExp.responsibilities
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      keyContributions: newExp.keyContributions
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      achievements: newExp.achievements
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
    };

    setData((prev) => ({
      ...prev,
      experiences: [entry, ...prev.experiences],
    }));

    setNewExp({
      companyName: '',
      jobTitle: '',
      period: '',
      location: '',
      responsibilities: '',
      keyContributions: '',
      achievements: '',
    });
    setAddExpModalOpen(false);
  };

  // Add New Project Entry
  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProj.name.trim()) return;

    const projEntry = {
      id: `proj-${Date.now()}`,
      name: newProj.name.trim(),
      category: newProj.category,
      featured: false,
      role: newProj.role.trim() || '[YOUR ROLE]',
      description: newProj.description.trim() || '[PROJECT DESCRIPTION]',
      technologies: newProj.technologies
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      challenges: newProj.challenges.trim() || '[CHALLENGES]',
      solutions: newProj.solutions.trim() || '[SOLUTIONS]',
      results: newProj.results.trim() || '[VERIFIED RESULTS]',
      imageUrl: '',
      externalLink: newProj.externalLink.trim(),
    };

    setData((prev) => ({
      ...prev,
      projects: [...prev.projects, projEntry],
    }));

    setNewProj({
      name: '',
      category: 'Strategic Initiative',
      role: '',
      description: '',
      technologies: '',
      challenges: '',
      solutions: '',
      results: '',
      externalLink: '',
    });
    setAddProjectModalOpen(false);
  };

  // Filter Projects
  const projectCategories = useMemo(() => {
    const cats = new Set(data.projects.map((p) => p.category));
    return ['All', ...Array.from(cats)];
  }, [data.projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return data.projects;
    return data.projects.filter((p) => p.category === selectedCategory);
  }, [data.projects, selectedCategory]);

  const handleContactChange = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
    if (contactErrors[field]) {
      setContactErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        if (Object.keys(next).length === 0 && contactStatus === 'error') {
          setContactStatus('idle');
          setContactFeedback('');
        }
        return next;
      });
    }
  };

  // Validate & Submit Contact Form (Honest behavior: does NOT fake email dispatch)
  const validateContactForm = () => {
    const errors = {};
    if (!contactForm.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    }
    if (!contactForm.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!contactForm.subject.trim()) {
      errors.subject = 'Subject is required.';
    }
    if (!contactForm.message.trim() || contactForm.message.trim().length < 5) {
      errors.message = 'Please provide a message (at least 5 characters).';
    }
    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!validateContactForm()) {
      setContactStatus('error');
      setContactFeedback('Please fill in all required fields before submitting.');
      return;
    }

    const endpoint =
      data.contactConfig.formEndpointUrl?.trim() ||
      `https://formsubmit.co/ajax/${encodeURIComponent(data.contactConfig.email || 'sangchaubr089@gmail.com')}`;

    try {
      setContactStatus('submitting');
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: contactForm.fullName,
          email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
          _subject: `[Portfolio] Message from ${contactForm.fullName}: ${contactForm.subject}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      setContactStatus('success');
      setContactFeedback('Thank you! Your message has been sent successfully. I will get back to you soon.');
      setContactForm({ fullName: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setContactStatus('idle');
        setContactFeedback('');
      }, 7000);
    } catch (err) {
      setContactStatus('error');
      setContactFeedback(
        `Unable to deliver automatically (${err.message}). You can also send directly via email below.`
      );
    }
  };

  // Export portfolioData.ts helper
  const handleCopyPortfolioData = () => {
    const fileContent = `// src/data/portfolioData.ts\nexport const portfolioData = ${JSON.stringify(
      data,
      null,
      2
    )} as const;\n`;
    navigator.clipboard.writeText(fileContent);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F5F5] font-sans antialiased selection:bg-[#C6A66B]/30 selection:text-[#F5F5F5] overflow-x-hidden">
      {/* Load Executive Editorial Typography */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        :root {
          --bg-primary: #0B0D10;
          --bg-secondary: #12161C;
          --text-primary: #F5F5F5;
          --text-secondary: #A1A7B0;
          --accent-gold: #C6A66B;
          --border-subtle: rgba(255, 255, 255, 0.12);
        }

        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .font-sans {
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        @keyframes fadeUpSubtle {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUpSubtle 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up {
            animation: none !important;
          }
          html {
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* =====================================================================
          STICKY EXECUTIVE NAVIGATION BAR
      ===================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0D10]/90 backdrop-blur-md border-b border-white/[0.12] py-3.5 shadow-2xl shadow-black/50'
            : 'bg-transparent border-b border-white/[0.06] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Personal Brand Logo / Monogram */}
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Scroll to top"
          >
            <div className="w-10 h-10 rounded bg-[#12161C] border border-[#C6A66B]/40 flex items-center justify-center text-[#C6A66B] font-serif text-sm font-semibold tracking-wider group-hover:border-[#C6A66B] group-hover:bg-[#C6A66B]/10 transition-colors px-1.5 overflow-hidden">
              <span className="truncate max-w-[34px]">
                {data.brand.monogram.replace(/[\[\]]/g, '').slice(0, 3) || 'CEO'}
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-xs font-mono uppercase tracking-[0.2em] text-[#F5F5F5] group-hover:text-[#C6A66B] transition-colors truncate max-w-[180px]">
                {data.brand.fullName}
              </span>
              <span className="block text-[10px] font-mono tracking-[0.15em] text-[#A1A7B0] truncate max-w-[180px]">
                EXECUTIVE PROFILE
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Primary Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors rounded ${
                    isActive
                      ? 'text-[#C6A66B]'
                      : 'text-[#A1A7B0] hover:text-[#F5F5F5]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[1.5px] bg-[#C6A66B] transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleDownloadResume}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded text-xs uppercase tracking-[0.16em] font-semibold bg-[#C6A66B] text-[#0B0D10] hover:bg-[#D8BC86] transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded bg-[#12161C] border border-white/[0.12] text-[#F5F5F5] hover:border-[#C6A66B]/50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#12161C] border-b border-white/[0.12] px-6 py-6 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-3.5 py-2.5 rounded text-xs font-mono uppercase tracking-[0.16em] border transition-all ${
                      isActive
                        ? 'border-[#C6A66B]/50 bg-[#C6A66B]/10 text-[#C6A66B]'
                        : 'border-white/[0.06] bg-[#0B0D10]/50 text-[#A1A7B0] hover:text-[#F5F5F5]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <div className="pt-4 border-t border-white/[0.12] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownloadResume();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded text-xs uppercase tracking-[0.16em] font-semibold bg-[#C6A66B] text-[#0B0D10]"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection('contact');
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded text-xs uppercase tracking-[0.16em] font-semibold border border-white/[0.18] text-[#F5F5F5]"
              >
                Let's Connect
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================================
          SECTION 01 — HERO / INTRODUCTION
      ===================================================================== */}
      <section
        id="home"
        className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center border-b border-white/[0.12] overflow-hidden"
      >
        {/* Subtle Architectural Background Accents */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 22%, rgba(198, 166, 107, 0.14), transparent 42%), radial-gradient(circle at 85% 75%, rgba(198, 166, 107, 0.07), transparent 45%)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Executive Branding & Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-8 animate-fade-up">
              {/* Executive Monogram & Mandate Pill */}
              <div className="inline-flex flex-wrap items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#12161C] border border-white/[0.12]">
                <span className="w-2 h-2 rounded-full bg-[#C6A66B]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C6A66B]">
                  {data.brand.monogram}
                </span>
                <span className="text-white/20">|</span>
                <span className="font-mono text-[11px] tracking-[0.12em] text-[#A1A7B0]">
                  {data.brand.availabilityStatus}
                </span>
              </div>

              {/* Name & Executive Title */}
              <div className="space-y-4">
                <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C6A66B]">
                  {data.brand.professionalTitle}
                </p>
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F5F5F5] tracking-tight leading-[1.08]">
                  {data.brand.fullName}
                </h1>
              </div>

              {/* Editorial Tagline Quote */}
              <blockquote className="pl-5 border-l-2 border-[#C6A66B] font-serif italic text-xl sm:text-2xl text-[#F5F5F5]/90 leading-relaxed max-w-2xl">
                "{data.brand.executiveTagline}"
              </blockquote>

              {/* Short Executive Bio */}
              <p className="text-base sm:text-lg text-[#A1A7B0] font-light leading-relaxed max-w-2xl">
                {data.brand.shortBio}
              </p>

              {/* Primary CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="inline-flex items-center gap-3 px-6 py-4 rounded bg-[#C6A66B] text-[#0B0D10] text-xs font-mono uppercase tracking-[0.18em] font-semibold hover:bg-[#D8BC86] transition-all shadow-lg shadow-[#C6A66B]/10 group"
                >
                  <span>Explore My Journey</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center gap-3 px-6 py-4 rounded bg-[#12161C] text-[#F5F5F5] border border-white/[0.15] hover:border-[#C6A66B] hover:text-[#C6A66B] text-xs font-mono uppercase tracking-[0.18em] transition-all"
                >
                  <Download className="w-4 h-4 text-[#C6A66B]" />
                  <span>Download Resume</span>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-5 py-4 rounded text-xs font-mono uppercase tracking-[0.18em] text-[#A1A7B0] hover:text-[#F5F5F5] transition-colors"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C6A66B]" />
                </button>
              </div>

              {/* Executive Social Links & Location Bar */}
              <div className="pt-6 border-t border-white/[0.12] flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <a
                    href={
                      data.contactConfig.linkedin.startsWith('http')
                        ? data.contactConfig.linkedin
                        : '#contact'
                    }
                    onClick={(e) => {
                      if (!data.contactConfig.linkedin.startsWith('http')) {
                        e.preventDefault();
                        scrollToSection('contact');
                      }
                    }}
                    target={data.contactConfig.linkedin.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-[#12161C] border border-white/[0.12] text-[#A1A7B0] hover:text-[#C6A66B] hover:border-[#C6A66B]/50 transition-all"
                    title={`LinkedIn: ${data.contactConfig.linkedin}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={
                      data.contactConfig.github.startsWith('http')
                        ? data.contactConfig.github
                        : '#contact'
                    }
                    onClick={(e) => {
                      if (!data.contactConfig.github.startsWith('http')) {
                        e.preventDefault();
                        scrollToSection('contact');
                      }
                    }}
                    target={data.contactConfig.github.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-[#12161C] border border-white/[0.12] text-[#A1A7B0] hover:text-[#C6A66B] hover:border-[#C6A66B]/50 transition-all"
                    title={`GitHub: ${data.contactConfig.github}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={
                      data.contactConfig.website.startsWith('http')
                        ? data.contactConfig.website
                        : '#contact'
                    }
                    onClick={(e) => {
                      if (!data.contactConfig.website.startsWith('http')) {
                        e.preventDefault();
                        scrollToSection('contact');
                      }
                    }}
                    target={data.contactConfig.website.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-[#12161C] border border-white/[0.12] text-[#A1A7B0] hover:text-[#C6A66B] hover:border-[#C6A66B]/50 transition-all"
                    title={`Web App / Store: ${data.contactConfig.website}`}
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="p-2.5 rounded bg-[#12161C] border border-white/[0.12] text-[#A1A7B0] hover:text-[#C6A66B] hover:border-[#C6A66B]/50 transition-all"
                    title={`Email: ${data.contactConfig.email}`}
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#A1A7B0]">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
                  <span>{data.brand.location}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Executive Portrait Frame (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Architectural Corner Hairlines */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#C6A66B]" />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#C6A66B]" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#C6A66B]" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#C6A66B]" />

                <div className="relative aspect-[4/5] rounded bg-[#12161C] border border-white/[0.12] overflow-hidden flex flex-col justify-between p-6 sm:p-8 shadow-2xl group">
                  <img
                    src={data.brand.portraitUrl || '/portrait.jpg'}
                    alt={data.brand.fullName}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/20 to-transparent" />

                  {/* Top Overlay Metadata */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded bg-[#0B0D10]/80 border border-white/[0.12] text-[#A1A7B0]">
                      PORTRAIT // 01
                    </span>
                  </div>

                  {/* Bottom Caption Plate */}
                  <div className="relative z-10 bg-[#0B0D10]/90 backdrop-blur-md border border-white/[0.12] p-4 rounded">
                    <p className="font-serif text-base text-[#F5F5F5] truncate">
                      {data.brand.fullName}
                    </p>
                    <p className="font-mono text-[11px] text-[#C6A66B] uppercase tracking-[0.15em] truncate mt-0.5">
                      {data.brand.professionalTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 02 — ABOUT ME (EDITORIAL NARRATIVE & CORE VALUES)
      ===================================================================== */}
      <section id="about" className="py-24 md:py-32 border-b border-white/[0.12] bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            index="02"
            eyebrow="Profile & Background"
            title="About Me & Engineering Focus"
            subtitle="An overview of my academic foundation in Software Engineering, hands-on development projects, and practical engineering habits."
          />

          {/* Top Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            {/* Left Column: Personal Introduction & Professional Background */}
            <div className="lg:col-span-7 bg-[#12161C] border border-white/[0.12] rounded p-7 sm:p-10 space-y-8">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C6A66B]">
                    Personal Introduction
                  </h3>
                </div>
                <p className="font-serif text-xl sm:text-2xl text-[#F5F5F5] leading-relaxed font-normal">
                  {data.about.personalIntroduction}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.12]">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C6A66B]">
                    Academic & Technical Background
                  </h3>
                </div>
                <p className="text-base text-[#A1A7B0] leading-relaxed">
                  {data.about.professionalBackground}
                </p>
              </div>
            </div>

            {/* Right Column: Leadership, Business Philosophy & Vision */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="bg-[#12161C] border border-white/[0.12] rounded p-6 sm:p-7 hover:border-[#C6A66B]/40 transition-colors">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C6A66B] block mb-2">
                  02.A // Collaboration & Teamwork
                </span>
                <p className="text-sm sm:text-base text-[#F5F5F5]/90 leading-relaxed">
                  {data.about.leadershipPhilosophy}
                </p>
              </div>

              <div className="bg-[#12161C] border border-white/[0.12] rounded p-6 sm:p-7 hover:border-[#C6A66B]/40 transition-colors">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C6A66B] block mb-2">
                  02.B // Development Approach
                </span>
                <p className="text-sm sm:text-base text-[#F5F5F5]/90 leading-relaxed">
                  {data.about.businessPhilosophy}
                </p>
              </div>

              <div className="bg-[#12161C] border border-[#C6A66B]/30 rounded p-6 sm:p-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C6A66B] block mb-2">
                  02.C // Career Objective
                </span>
                <p className="text-sm sm:text-base text-[#F5F5F5] leading-relaxed">
                  {data.about.visionAndMission}
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Matrix */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-[#A1A7B0]">
                Core Engineering Values
              </h3>
              <span className="h-[1px] flex-1 bg-white/[0.12] ml-6" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.about.coreValues.map((val) => (
                <div
                  key={val.index}
                  className="bg-[#12161C] border border-white/[0.12] rounded p-6 hover:border-[#C6A66B]/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#C6A66B] px-2 py-0.5 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/20">
                      {val.index}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#A1A7B0] group-hover:text-[#C6A66B] transition-colors" />
                  </div>
                  <h4 className="font-serif text-lg text-[#F5F5F5] mb-2">{val.title}</h4>
                  <p className="text-sm text-[#A1A7B0] leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 03 — PROFESSIONAL EXPERIENCE (EXECUTIVE TIMELINE)
      ===================================================================== */}
      <section
        id="experience"
        className="py-24 md:py-32 border-b border-white/[0.12] bg-[#12161C]/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-[0.25em] text-[#C6A66B] uppercase px-2.5 py-1 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/25">
                  03
                </span>
                <span className="h-[1px] w-8 bg-[#C6A66B]/40" />
                <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#A1A7B0]">
                  Experience & Track Record
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F5F5F5] font-normal tracking-tight">
                Practical Experience & Engineering Projects
              </h2>
            </div>
          </div>

          {/* Vertical Executive Timeline */}
          <div className="relative pl-6 sm:pl-10 border-l border-white/[0.15] space-y-12">
            {data.experiences.map((exp, idx) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Node Marker */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0B0D10] border-2 border-[#C6A66B] group-hover:scale-125 transition-transform" />

                <div className="bg-[#12161C] border border-white/[0.12] rounded p-6 sm:p-9 hover:border-[#C6A66B]/40 transition-all">
                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.12]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C6A66B]">
                          0{idx + 1} // {exp.companyName}
                        </span>
                        {exp.location && (
                          <span className="text-xs font-mono text-[#A1A7B0]">
                            • {exp.location}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F5F5]">
                        {exp.jobTitle}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#0B0D10] border border-white/[0.12] font-mono text-xs text-[#C6A66B] self-start lg:self-center">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Three-Column Executive Breakdown */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[#F5F5F5] mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                        Core Responsibilities
                      </h4>
                      <ul className="space-y-2.5 text-sm text-[#A1A7B0] leading-relaxed">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-[#C6A66B] mt-1">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Contributions */}
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[#F5F5F5] mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                        Key Contributions
                      </h4>
                      <ul className="space-y-2.5 text-sm text-[#A1A7B0] leading-relaxed">
                        {exp.keyContributions.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-[#C6A66B] mt-1">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Verified Achievements */}
                    <div className="bg-[#0B0D10]/60 border border-white/[0.08] rounded p-4">
                      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[#C6A66B] mb-3 flex items-center gap-2">
                        <Award className="w-3.5 h-3.5" />
                        Verified Achievements
                      </h4>
                      <ul className="space-y-2.5 text-sm text-[#F5F5F5]/90 leading-relaxed">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-[#C6A66B] mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 04 — LEADERSHIP & EXPERTISE (10 CORE DOMAINS)
      ===================================================================== */}
      <section id="expertise" className="py-24 md:py-32 border-b border-white/[0.12] bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            index="04"
            eyebrow="Technical & Engineering Capabilities"
            title="Software Engineering & Technical Expertise Matrix"
            subtitle="Structured across ten foundational domains of modern web architecture, secure development, and software engineering craftsmanship."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.expertise.map((domain, index) => {
              const IconComponent = ExpertiseIconMap[domain.iconName] || Compass;
              return (
                <div
                  key={domain.id}
                  className="bg-[#12161C] border border-white/[0.12] rounded p-6 sm:p-7 flex flex-col justify-between hover:border-[#C6A66B]/50 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A1A7B0]">
                        {String(index + 1).padStart(2, '0')} // {domain.category}
                      </span>
                      <div className="w-10 h-10 rounded bg-[#0B0D10] border border-white/[0.12] group-hover:border-[#C6A66B]/50 flex items-center justify-center text-[#C6A66B] transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl text-[#F5F5F5] mb-3 group-hover:text-[#C6A66B] transition-colors">
                      {domain.title}
                    </h3>

                    <p className="text-sm text-[#A1A7B0] leading-relaxed mb-6">
                      {domain.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                    {domain.pillars.map((pillar, i) => (
                      <span
                        key={i}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#0B0D10] border border-white/[0.08] text-[#F5F5F5]/80"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 05 — SELECTED PROJECTS (PORTFOLIO CASE STUDIES)
      ===================================================================== */}
      <section
        id="projects"
        className="py-24 md:py-32 border-b border-white/[0.12] bg-[#12161C]/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-[0.25em] text-[#C6A66B] uppercase px-2.5 py-1 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/25">
                  05
                </span>
                <span className="h-[1px] w-8 bg-[#C6A66B]/40" />
                <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#A1A7B0]">
                  Featured Projects
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F5F5F5] font-normal tracking-tight">
                Selected Applications & Open-Source Work
              </h2>
            </div>
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {projectCategories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-[0.16em] border transition-all ${
                    active
                      ? 'bg-[#C6A66B] text-[#0B0D10] border-[#C6A66B] font-semibold'
                      : 'bg-[#12161C] text-[#A1A7B0] border-white/[0.12] hover:text-[#F5F5F5] hover:border-white/[0.25]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Project Showcase Grid */}
          <div className="space-y-10">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className={`bg-[#12161C] border rounded overflow-hidden transition-all duration-300 ${
                  project.featured
                    ? 'border-[#C6A66B]/45 shadow-xl shadow-black/40'
                    : 'border-white/[0.12] hover:border-[#C6A66B]/40'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Visual / Architectural Case Study Plate (5 Cols) */}
                  <div className="lg:col-span-5 bg-[#0B0D10] border-b lg:border-b-0 lg:border-r border-white/[0.12] p-7 sm:p-9 flex flex-col justify-between relative min-h-[280px]">
                    <div className="flex items-center justify-between gap-2 z-10">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C6A66B] px-2.5 py-1 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/25">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F5F5F5] px-2.5 py-1 rounded bg-white/[0.08]">
                          Featured Spotlight
                        </span>
                      )}
                    </div>

                    {/* Architectural Visual Placeholder or Project Image */}
                    <div className="my-8 py-6 border-y border-white/[0.08] flex flex-col items-start justify-center">
                      <span className="font-mono text-[11px] text-[#A1A7B0] uppercase tracking-[0.2em] mb-2">
                        CASE STUDY // 0{idx + 1}
                      </span>
                      <p className="font-serif text-2xl sm:text-3xl text-[#F5F5F5] leading-snug">
                        {project.name}
                      </p>
                      <p className="font-mono text-xs text-[#C6A66B] mt-2">
                        Role: {project.role}
                      </p>
                    </div>

                    {/* Technologies & Methodologies */}
                    <div className="flex flex-wrap gap-1.5 z-10">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#12161C] border border-white/[0.12] text-[#A1A7B0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Problem-Solution-Result Executive Breakdown (7 Cols) */}
                  <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between space-y-6">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[#A1A7B0] mb-2">
                        Executive Summary
                      </h4>
                      <p className="text-base text-[#F5F5F5] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/[0.12]">
                      <div className="bg-[#0B0D10]/60 border border-white/[0.08] p-4 rounded">
                        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C6A66B] block mb-1.5">
                          01. Challenge
                        </span>
                        <p className="text-xs sm:text-sm text-[#A1A7B0] leading-relaxed">
                          {project.challenges}
                        </p>
                      </div>

                      <div className="bg-[#0B0D10]/60 border border-white/[0.08] p-4 rounded">
                        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C6A66B] block mb-1.5">
                          02. Strategic Solution
                        </span>
                        <p className="text-xs sm:text-sm text-[#A1A7B0] leading-relaxed">
                          {project.solutions}
                        </p>
                      </div>

                      <div className="bg-[#0B0D10]/60 border border-[#C6A66B]/25 p-4 rounded">
                        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C6A66B] block mb-1.5">
                          03. Verified Results
                        </span>
                        <p className="text-xs sm:text-sm text-[#F5F5F5]/90 leading-relaxed">
                          {project.results}
                        </p>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-white/[0.12] flex flex-wrap items-center justify-between gap-4">
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#C6A66B] hover:text-[#D8BC86]"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Inspect Full Case Dossier</span>
                      </button>

                      {project.externalLink ? (
                        <a
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-xs font-mono text-[#F5F5F5] hover:border-[#C6A66B]"
                        >
                          <span>Visit Venture</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#C6A66B]" />
                        </a>
                      ) : (
                        <span className="font-mono text-[11px] text-[#A1A7B0]">
                          [OPTIONAL EXTERNAL LINK SLOT]
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 06 — ACHIEVEMENTS & MILESTONES (VERIFIED LEDGER)
      ===================================================================== */}
      <section
        id="achievements"
        className="py-24 md:py-32 border-b border-white/[0.12] bg-[#0B0D10]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            index="06"
            eyebrow="Milestones & Recognitions"
            title="Verified Achievements & Project Milestones"
            subtitle="Documented academic and development milestones, certifications, and technical accomplishments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.achievements.map((item) => (
              <div
                key={item.id}
                className="bg-[#12161C] border border-white/[0.12] rounded p-7 sm:p-8 flex flex-col justify-between hover:border-[#C6A66B]/45 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C6A66B] px-2.5 py-1 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/25">
                      {item.category}
                    </span>
                    <span className="font-mono text-xs text-[#A1A7B0]">{item.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F5F5F5] mb-1.5">{item.title}</h3>
                  <p className="font-mono text-xs text-[#C6A66B] uppercase tracking-[0.15em] mb-4">
                    {item.organization}
                  </p>
                  <p className="text-sm sm:text-base text-[#A1A7B0] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.12] flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#A1A7B0]">
                    Verified Record
                  </span>
                  <span className="font-mono text-xs text-[#F5F5F5] px-3 py-1 rounded bg-[#0B0D10] border border-white/[0.12]">
                    {item.verifiedMetric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 07 — EDUCATION & CERTIFICATIONS
      ===================================================================== */}
      <section
        id="education"
        className="py-24 md:py-32 border-b border-white/[0.12] bg-[#12161C]/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            index="07"
            eyebrow="Academic & Professional Credentials"
            title="Education & Professional Certifications"
            subtitle="Academic degree, technical programs, and continuous software engineering training."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Academic Degrees (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-[#C6A66B]" />
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F5F5F5]">
                  University & Academic Degrees
                </h3>
              </div>

              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-[#12161C] border border-white/[0.12] rounded p-7 space-y-4 hover:border-[#C6A66B]/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C6A66B] block mb-1">
                        {edu.university}
                      </span>
                      <h4 className="font-serif text-2xl text-[#F5F5F5]">{edu.degree}</h4>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded bg-[#0B0D10] border border-white/[0.12] text-[#C6A66B]">
                      {edu.graduationYear}
                    </span>
                  </div>

                  <p className="text-sm text-[#A1A7B0]">
                    <strong className="text-[#F5F5F5] font-medium">Major / Specialization:</strong>{' '}
                    {edu.major}
                  </p>
                  {edu.honors && (
                    <p className="text-xs font-mono text-[#A1A7B0] pt-3 border-t border-white/[0.08]">
                      {edu.honors}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications & Executive Training (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-[#C6A66B]" />
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F5F5F5]">
                  Certifications & Executive Training
                </h3>
              </div>

              {data.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#12161C] border border-white/[0.12] rounded p-7 space-y-3 hover:border-[#C6A66B]/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C6A66B] block mb-1">
                        {cert.issuer}
                      </span>
                      <h4 className="font-serif text-xl text-[#F5F5F5]">{cert.name}</h4>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded bg-[#0B0D10] border border-white/[0.12] text-[#A1A7B0]">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#A1A7B0] pt-2 border-t border-white/[0.08]">
                    {cert.credentialNote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 08 — PERSONAL PHILOSOPHY (EDITORIAL TYPOGRAPHY STATEMENT)
      ===================================================================== */}
      <section
        id="philosophy"
        className="py-28 md:py-36 border-b border-white/[0.12] bg-[#0B0D10] relative overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(198, 166, 107, 0.12), transparent 65%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            index="08"
            eyebrow="Principles & Mindset"
            title="Engineering Philosophy & Goals"
            subtitle="Core technical principles and personal habits that guide my daily work and development practices."
          />

          {/* Large Editorial Quote Showcase */}
          <div className="my-12 md:my-16 p-8 sm:p-14 rounded bg-[#12161C] border border-[#C6A66B]/35 relative">
            <Quote className="w-12 h-12 text-[#C6A66B]/25 mb-6" />
            <blockquote className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#F5F5F5] leading-[1.22] tracking-tight max-w-5xl">
              {data.philosophy.featuredQuote}
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#C6A66B]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C6A66B]">
                {data.brand.fullName}
              </span>
            </div>
          </div>

          {/* 4 Philosophy Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.philosophy.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#12161C] border border-white/[0.12] rounded p-7 sm:p-9 space-y-3"
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C6A66B]">
                  0{idx + 1} // {pillar.label}
                </span>
                <h3 className="font-serif text-2xl text-[#F5F5F5]">{pillar.title}</h3>
                <p className="text-sm sm:text-base text-[#A1A7B0] leading-relaxed">
                  {pillar.statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 09 — CONTACT (EXECUTIVE CONNECTION & HONEST FORM)
      ===================================================================== */}
      <section id="contact" className="py-24 md:py-32 border-b border-white/[0.12] bg-[#12161C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Contact Details (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs tracking-[0.25em] text-[#C6A66B] uppercase px-2.5 py-1 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/25">
                    09
                  </span>
                  <span className="h-[1px] w-8 bg-[#C6A66B]/40" />
                  <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#A1A7B0]">
                    Contact & Inquiries
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F5F5] font-normal tracking-tight leading-tight">
                  Let's Connect & Build Together.
                </h2>
                <p className="mt-4 text-base text-[#A1A7B0] leading-relaxed">
                  Open for software engineering internships, junior developer roles, collaborative projects, and technical discussions.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3 pt-6 border-t border-white/[0.12]">
                <a
                  href={`mailto:${encodeURIComponent(data.contactConfig.email)}`}
                  className="p-3.5 rounded bg-[#12161C] border border-white/[0.12] flex items-center gap-4 hover:border-[#C6A66B] hover:shadow-lg hover:shadow-[#C6A66B]/5 transition-all group"
                  title={`Send email to ${data.contactConfig.email}`}
                >
                  <div className="w-10 h-10 rounded bg-[#0B0D10] border border-white/[0.12] flex items-center justify-center text-[#C6A66B] group-hover:bg-[#C6A66B] group-hover:text-[#0B0D10] transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#A1A7B0]">
                      Direct Email
                    </span>
                    <span className="block font-mono text-xs sm:text-sm text-[#F5F5F5] truncate group-hover:text-[#C6A66B] transition-colors">
                      {data.contactConfig.email}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A7B0] group-hover:text-[#C6A66B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                <a
                  href={data.contactConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded bg-[#12161C] border border-white/[0.12] flex items-center gap-4 hover:border-[#C6A66B] hover:shadow-lg hover:shadow-[#C6A66B]/5 transition-all group"
                  title="Open LinkedIn Profile"
                >
                  <div className="w-10 h-10 rounded bg-[#0B0D10] border border-white/[0.12] flex items-center justify-center text-[#C6A66B] group-hover:bg-[#C6A66B] group-hover:text-[#0B0D10] transition-colors shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#A1A7B0]">
                      LinkedIn Profile
                    </span>
                    <span className="block font-mono text-xs sm:text-sm text-[#F5F5F5] truncate group-hover:text-[#C6A66B] transition-colors">
                      {data.contactConfig.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A7B0] group-hover:text-[#C6A66B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                <a
                  href={data.contactConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded bg-[#12161C] border border-white/[0.12] flex items-center gap-4 hover:border-[#C6A66B] hover:shadow-lg hover:shadow-[#C6A66B]/5 transition-all group"
                  title="Open GitHub Profile"
                >
                  <div className="w-10 h-10 rounded bg-[#0B0D10] border border-white/[0.12] flex items-center justify-center text-[#C6A66B] group-hover:bg-[#C6A66B] group-hover:text-[#0B0D10] transition-colors shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#A1A7B0]">
                      GitHub / Technical Repositories
                    </span>
                    <span className="block font-mono text-xs sm:text-sm text-[#F5F5F5] truncate group-hover:text-[#C6A66B] transition-colors">
                      {data.contactConfig.github.replace(/^https?:\/\/(www\.)?/, '')}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A7B0] group-hover:text-[#C6A66B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                {data.contactConfig.website && (
                  <a
                    href={data.contactConfig.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded bg-[#12161C] border border-white/[0.12] flex items-center gap-4 hover:border-[#C6A66B] hover:shadow-lg hover:shadow-[#C6A66B]/5 transition-all group"
                    title="Open Live Web Application"
                  >
                    <div className="w-10 h-10 rounded bg-[#0B0D10] border border-white/[0.12] flex items-center justify-center text-[#C6A66B] group-hover:bg-[#C6A66B] group-hover:text-[#0B0D10] transition-colors shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#A1A7B0]">
                        Web App / Online Store
                      </span>
                      <span className="block font-mono text-xs sm:text-sm text-[#F5F5F5] truncate group-hover:text-[#C6A66B] transition-colors">
                        {data.contactConfig.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#A1A7B0] group-hover:text-[#C6A66B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>
                )}

                <div className="p-3.5 rounded bg-[#12161C] border border-white/[0.12] flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-[#0B0D10] border border-white/[0.12] flex items-center justify-center text-[#C6A66B] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#A1A7B0]">
                      Location
                    </span>
                    <span className="block font-mono text-xs sm:text-sm text-[#F5F5F5] truncate">
                      {data.contactConfig.locationDisplay}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Honest Contact Form (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-[#12161C] border border-white/[0.12] rounded p-7 sm:p-9 flex flex-col justify-between h-full">
                <div>
                  <div className="pb-5 mb-6 border-b border-white/[0.12]">
                    <h3 className="font-serif text-2xl text-[#F5F5F5]">Send a Message</h3>
                    <p className="text-xs font-mono text-[#A1A7B0] mt-1">
                      Direct delivery to <span className="text-emerald-400">{data.contactConfig.email}</span>
                    </p>
                  </div>

                <form onSubmit={handleContactSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-[0.16em] text-[#A1A7B0] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={contactForm.fullName}
                        onChange={(e) => handleContactChange('fullName', e.target.value)}
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded bg-[#0B0D10] border text-sm text-[#F5F5F5] placeholder-[#A1A7B0]/40 focus:outline-none ${
                          contactErrors.fullName
                            ? 'border-red-500'
                            : 'border-white/[0.12] focus:border-[#C6A66B]'
                        }`}
                      />
                      {contactErrors.fullName && (
                        <p className="mt-1.5 text-xs text-red-400 font-mono">
                          {contactErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-[0.16em] text-[#A1A7B0] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => handleContactChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className={`w-full px-4 py-3 rounded bg-[#0B0D10] border text-sm text-[#F5F5F5] placeholder-[#A1A7B0]/40 focus:outline-none ${
                          contactErrors.email
                            ? 'border-red-500'
                            : 'border-white/[0.12] focus:border-[#C6A66B]'
                        }`}
                      />
                      {contactErrors.email && (
                        <p className="mt-1.5 text-xs text-red-400 font-mono">
                          {contactErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-[0.16em] text-[#A1A7B0] mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => handleContactChange('subject', e.target.value)}
                      placeholder="Project inquiry / Collaboration / Question"
                      className={`w-full px-4 py-3 rounded bg-[#0B0D10] border text-sm text-[#F5F5F5] placeholder-[#A1A7B0]/40 focus:outline-none ${
                        contactErrors.subject
                          ? 'border-red-500'
                          : 'border-white/[0.12] focus:border-[#C6A66B]'
                      }`}
                    />
                    {contactErrors.subject && (
                      <p className="mt-1.5 text-xs text-red-400 font-mono">
                        {contactErrors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-[0.16em] text-[#A1A7B0] mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => handleContactChange('message', e.target.value)}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded bg-[#0B0D10] border text-sm text-[#F5F5F5] placeholder-[#A1A7B0]/40 focus:outline-none ${
                        contactErrors.message
                          ? 'border-red-500'
                          : 'border-white/[0.12] focus:border-[#C6A66B]'
                      }`}
                    />
                    {contactErrors.message && (
                      <p className="mt-1.5 text-xs text-red-400 font-mono">
                        {contactErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Feedback Box */}
                  {contactStatus !== 'idle' && (
                    <div
                      className={`p-4 rounded border text-xs leading-relaxed ${
                        contactStatus === 'success'
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                          : 'bg-red-950/40 border-red-500/40 text-red-200'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {contactStatus === 'success' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        )}
                        <div className="space-y-3">
                          <p>{contactFeedback}</p>
                          {contactStatus === 'error' && (
                            <div className="flex flex-wrap gap-3 pt-1">
                              <a
                                href={`mailto:${encodeURIComponent(
                                  data.contactConfig.email
                                )}?subject=${encodeURIComponent(
                                  contactForm.subject || 'Portfolio Inquiry'
                                )}&body=${encodeURIComponent(
                                  `From: ${contactForm.fullName} (${contactForm.email})\n\n${contactForm.message}`
                                )}`}
                                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#C6A66B] text-[#0B0D10] font-mono uppercase tracking-wider font-semibold"
                              >
                                <Mail className="w-3.5 h-3.5" />
                                <span>Send via Default Mail Client (mailto:)</span>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={contactStatus === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-[#C6A66B] text-[#0B0D10] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#D8BC86] transition-all disabled:opacity-50"
                  >
                    <span>
                      {contactStatus === 'submitting' ? 'Sending Message...' : 'Send Message'}
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10 — FOOTER (STREAMLINED & ZERO-REDUNDANCY)
      ===================================================================== */}
      <footer className="relative bg-[#0B0D10] border-t border-white/[0.12] overflow-hidden">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C6A66B]/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08] items-start">
            
            {/* Cột 1: Định danh thương hiệu & Trạng thái (5 cột) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="w-11 h-11 rounded-lg bg-[#12161C] border border-[#C6A66B]/45 flex items-center justify-center text-[#C6A66B] font-serif text-sm font-semibold hover:border-[#C6A66B] transition-all"
                >
                  {data.brand.monogram.replace(/[\[\]]/g, '').slice(0, 3) || 'CT'}
                </button>
                <div>
                  <h3 className="font-serif text-xl text-[#F5F5F5] tracking-tight">
                    {data.brand.fullName}
                  </h3>
                  <p className="font-mono text-[11px] text-[#C6A66B] uppercase tracking-[0.2em] mt-0.5">
                    {data.brand.professionalTitle}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#12161C] border border-white/[0.1]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.12em] text-[#F5F5F5]/90">
                  {data.brand.availabilityStatus}
                </span>
              </div>
            </div>

            {/* Cột 2: Điều hướng nhanh (4 cột) */}
            <div className="lg:col-span-4 space-y-3">
              <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-[#A1A7B0]">
                Quick Navigation
              </span>
              <div className="grid grid-cols-3 gap-y-2 gap-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-xs font-mono uppercase tracking-[0.14em] text-[#A1A7B0] hover:text-[#C6A66B] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cột 3: Hành động nhanh — Tải CV (3 cột) */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end justify-end">
              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto lg:w-48 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#C6A66B] text-[#0B0D10] font-mono text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#D8BC86] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Dòng bản quyền tinh gọn */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A1A7B0]/80">
            <p>© {new Date().getFullYear()} {data.brand.fullName}. All Rights Reserved.</p>
            <p className="text-[11px] uppercase tracking-[0.16em]">
              BUILT WITH REACT & TAILWIND CSS
            </p>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MODAL 1: PROJECT CASE STUDY DETAIL MODAL
      ===================================================================== */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#12161C] border border-[#C6A66B]/40 rounded max-w-3xl w-full p-6 sm:p-9 space-y-6 my-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/[0.12] pb-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C6A66B]">
                  {activeProjectModal.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F5F5] mt-1">
                  {activeProjectModal.name}
                </h3>
                <p className="font-mono text-xs text-[#A1A7B0] mt-1">
                  Role: {activeProjectModal.role}
                </p>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded bg-[#0B0D10] border border-white/[0.12] text-[#A1A7B0] hover:text-[#F5F5F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[#C6A66B] mb-1">
                  Project Overview
                </h4>
                <p className="text-[#F5F5F5]/90 leading-relaxed">
                  {activeProjectModal.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded bg-[#0B0D10] border border-white/[0.1]">
                  <span className="font-mono text-xs text-[#C6A66B] uppercase block mb-1">
                    Challenges
                  </span>
                  <p className="text-xs sm:text-sm text-[#A1A7B0] leading-relaxed">
                    {activeProjectModal.challenges}
                  </p>
                </div>
                <div className="p-4 rounded bg-[#0B0D10] border border-white/[0.1]">
                  <span className="font-mono text-xs text-[#C6A66B] uppercase block mb-1">
                    Solutions
                  </span>
                  <p className="text-xs sm:text-sm text-[#A1A7B0] leading-relaxed">
                    {activeProjectModal.solutions}
                  </p>
                </div>
                <div className="p-4 rounded bg-[#0B0D10] border border-[#C6A66B]/30">
                  <span className="font-mono text-xs text-[#C6A66B] uppercase block mb-1">
                    Verified Results
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5F5F5] leading-relaxed">
                    {activeProjectModal.results}
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <span className="font-mono text-xs text-[#A1A7B0] uppercase block mb-2">
                  Technologies & Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-3 py-1 rounded bg-[#0B0D10] border border-white/[0.12] text-[#C6A66B]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.12] flex justify-end">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2.5 rounded bg-[#C6A66B] text-[#0B0D10] font-mono text-xs uppercase tracking-wider font-semibold"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 2: RESUME PDF CONFIGURATION MODAL (NO FAKE CV RULE)
      ===================================================================== */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#12161C] border border-[#C6A66B]/40 rounded max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/30 flex items-center justify-center text-[#C6A66B]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#F5F5F5]">
                    Executive Resume Configuration
                  </h3>
                  <p className="font-mono text-xs text-[#C6A66B]">
                    Strict Integrity Policy: No Fabricated PDF File
                  </p>
                </div>
              </div>
              <button
                onClick={() => setResumeModalOpen(false)}
                className="text-[#A1A7B0] hover:text-[#F5F5F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#A1A7B0] leading-relaxed">
              No PDF file is currently linked in <code className="text-[#F5F5F5]">resumeConfig.pdfUrl</code>. Attach your official Executive CV PDF below or provide a hosted document URL to enable instant downloading.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#A1A7B0] mb-2">
                  Option 1: Upload Official PDF File From Device
                </label>
                <input
                  ref={resumeInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleResumeFileUpload}
                  className="hidden"
                />
                <button
                  onClick={() => resumeInputRef.current?.click()}
                  className="w-full py-3 px-4 rounded bg-[#0B0D10] border border-dashed border-[#C6A66B]/50 text-xs font-mono text-[#C6A66B] hover:bg-[#C6A66B]/10 flex items-center justify-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  <span>Select PDF Resume File (.pdf)</span>
                </button>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#A1A7B0] mb-2">
                  Option 2: Set Hosted PDF URL
                </label>
                <input
                  type="url"
                  value={data.resumeConfig.pdfUrl}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      resumeConfig: { ...prev.resumeConfig, pdfUrl: e.target.value },
                    }))
                  }
                  placeholder="/documents/Executive-CV.pdf or https://..."
                  className="w-full px-3.5 py-2.5 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.12] flex items-center justify-end gap-3">
              <button
                onClick={() => setResumeModalOpen(false)}
                className="px-4 py-2 rounded border border-white/[0.15] text-xs font-mono text-[#A1A7B0]"
              >
                Close
              </button>
              {data.resumeConfig.pdfUrl && (
                <button
                  onClick={() => {
                    setResumeModalOpen(false);
                    handleDownloadResume();
                  }}
                  className="px-5 py-2 rounded bg-[#C6A66B] text-[#0B0D10] text-xs font-mono uppercase font-semibold"
                >
                  Download Attached PDF Now
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 3: ADD EXPERIENCE POSITION MODAL
      ===================================================================== */}
      {addExpModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#12161C] border border-[#C6A66B]/40 rounded max-w-xl w-full p-6 sm:p-8 space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-white/[0.12] pb-4">
              <h3 className="font-serif text-2xl text-[#F5F5F5]">Add Executive Experience</h3>
              <button
                onClick={() => setAddExpModalOpen(false)}
                className="text-[#A1A7B0] hover:text-[#F5F5F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddExperience} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newExp.companyName}
                    onChange={(e) => setNewExp({ ...newExp, companyName: e.target.value })}
                    placeholder="e.g., [YOUR COMPANY NAME]"
                    className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newExp.jobTitle}
                    onChange={(e) => setNewExp({ ...newExp, jobTitle: e.target.value })}
                    placeholder="e.g., Chief Executive Officer"
                    className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Employment Period
                  </label>
                  <input
                    type="text"
                    value={newExp.period}
                    onChange={(e) => setNewExp({ ...newExp, period: e.target.value })}
                    placeholder="e.g., 2022 — PRESENT"
                    className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">Location</label>
                  <input
                    type="text"
                    value={newExp.location}
                    onChange={(e) => setNewExp({ ...newExp, location: e.target.value })}
                    placeholder="City, Country"
                    className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                  Responsibilities (One per line)
                </label>
                <textarea
                  rows={2}
                  value={newExp.responsibilities}
                  onChange={(e) => setNewExp({ ...newExp, responsibilities: e.target.value })}
                  placeholder="Enter key responsibilities..."
                  className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                  Key Contributions (One per line)
                </label>
                <textarea
                  rows={2}
                  value={newExp.keyContributions}
                  onChange={(e) => setNewExp({ ...newExp, keyContributions: e.target.value })}
                  placeholder="Enter key contributions..."
                  className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                  Verified Achievements (One per line)
                </label>
                <textarea
                  rows={2}
                  value={newExp.achievements}
                  onChange={(e) => setNewExp({ ...newExp, achievements: e.target.value })}
                  placeholder="Enter verified achievements..."
                  className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setAddExpModalOpen(false)}
                  className="px-4 py-2 rounded border border-white/[0.15] text-xs font-mono text-[#A1A7B0]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded bg-[#C6A66B] text-[#0B0D10] text-xs font-mono uppercase font-semibold"
                >
                  Append to Timeline
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 4: ADD PROJECT CASE STUDY MODAL
      ===================================================================== */}
      {addProjectModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#12161C] border border-[#C6A66B]/40 rounded max-w-xl w-full p-6 sm:p-8 space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-white/[0.12] pb-4">
              <h3 className="font-serif text-2xl text-[#F5F5F5]">Add Selected Project</h3>
              <button
                onClick={() => setAddProjectModalOpen(false)}
                className="text-[#A1A7B0] hover:text-[#F5F5F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newProj.name}
                    onChange={(e) => setNewProj({ ...newProj, name: e.target.value })}
                    placeholder="[YOUR PROJECT NAME]"
                    className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">Category</label>
                  <select
                    value={newProj.category}
                    onChange={(e) => setNewProj({ ...newProj, category: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  >
                    <option value="Strategic Initiative">Strategic Initiative</option>
                    <option value="Product & Technology">Product & Technology</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Your Executive Role
                  </label>
                  <input
                    type="text"
                    value={newProj.role}
                    onChange={(e) => setNewProj({ ...newProj, role: e.target.value })}
                    placeholder="e.g., Founder & Lead Architect"
                    className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Technologies (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={newProj.technologies}
                    onChange={(e) => setNewProj({ ...newProj, technologies: e.target.value })}
                    placeholder="React, Cloud Architecture, AI"
                    className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                  Project Description
                </label>
                <textarea
                  rows={2}
                  value={newProj.description}
                  onChange={(e) => setNewProj({ ...newProj, description: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">Challenges</label>
                  <textarea
                    rows={2}
                    value={newProj.challenges}
                    onChange={(e) => setNewProj({ ...newProj, challenges: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-xs text-[#F5F5F5]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">Solutions</label>
                  <textarea
                    rows={2}
                    value={newProj.solutions}
                    onChange={(e) => setNewProj({ ...newProj, solutions: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-xs text-[#F5F5F5]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Verified Results
                  </label>
                  <textarea
                    rows={2}
                    value={newProj.results}
                    onChange={(e) => setNewProj({ ...newProj, results: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-xs text-[#F5F5F5]"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setAddProjectModalOpen(false)}
                  className="px-4 py-2 rounded border border-white/[0.15] text-xs font-mono text-[#A1A7B0]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded bg-[#C6A66B] text-[#0B0D10] text-xs font-mono uppercase font-semibold"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          DRAWER 5: EXECUTIVE DATA & CV STUDIO (CUSTOMIZE & EXPORT TS)
      ===================================================================== */}
      {studioOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
          <div className="bg-[#12161C] border-l border-[#C6A66B]/40 w-full max-w-xl h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.12] pb-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C6A66B]">
                    portfolioData.ts Studio
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F5F5]">
                    Customize Executive Identity
                  </h3>
                </div>
                <button
                  onClick={() => setStudioOpen(false)}
                  className="p-2 rounded bg-[#0B0D10] border border-white/[0.12] text-[#A1A7B0] hover:text-[#F5F5F5]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-[#A1A7B0] leading-relaxed">
                Replace the architectural placeholders below to preview your live executive brand immediately, then copy the generated <code className="text-[#C6A66B]">portfolioData.ts</code> configuration file.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Full Name (`brand.fullName`)
                  </label>
                  <input
                    type="text"
                    value={data.brand.fullName}
                    onChange={(e) =>
                      setData({ ...data, brand: { ...data.brand, fullName: e.target.value } })
                    }
                    className="w-full px-3.5 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                      Monogram (`brand.monogram`)
                    </label>
                    <input
                      type="text"
                      value={data.brand.monogram}
                      onChange={(e) =>
                        setData({ ...data, brand: { ...data.brand, monogram: e.target.value } })
                      }
                      className="w-full px-3.5 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                      Location (`brand.location`)
                    </label>
                    <input
                      type="text"
                      value={data.brand.location}
                      onChange={(e) =>
                        setData({ ...data, brand: { ...data.brand, location: e.target.value } })
                      }
                      className="w-full px-3.5 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Professional Title (`brand.professionalTitle`)
                  </label>
                  <input
                    type="text"
                    value={data.brand.professionalTitle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        brand: { ...data.brand, professionalTitle: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Executive Summary (`brand.shortBio`)
                  </label>
                  <textarea
                    rows={3}
                    value={data.brand.shortBio}
                    onChange={(e) =>
                      setData({ ...data, brand: { ...data.brand, shortBio: e.target.value } })
                    }
                    className="w-full px-3.5 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/[0.12]">
                  <div>
                    <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                      Executive Email
                    </label>
                    <input
                      type="email"
                      value={data.contactConfig.email}
                      onChange={(e) =>
                        setData({
                          ...data,
                          contactConfig: { ...data.contactConfig, email: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                      LinkedIn URL
                    </label>
                    <input
                      type="text"
                      value={data.contactConfig.linkedin}
                      onChange={(e) =>
                        setData({
                          ...data,
                          contactConfig: { ...data.contactConfig, linkedin: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Contact Form Webhook / API Endpoint (Optional)
                  </label>
                  <input
                    type="url"
                    value={data.contactConfig.formEndpointUrl}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contactConfig: {
                          ...data.contactConfig,
                          formEndpointUrl: e.target.value,
                        },
                      })
                    }
                    placeholder="https://formspree.io/f/... or custom API URL"
                    className="w-full px-3.5 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#A1A7B0] mb-1">
                    Resume PDF URL (`resumeConfig.pdfUrl`)
                  </label>
                  <input
                    type="url"
                    value={data.resumeConfig.pdfUrl}
                    onChange={(e) =>
                      setData({
                        ...data,
                        resumeConfig: { ...data.resumeConfig, pdfUrl: e.target.value },
                      })
                    }
                    placeholder="/documents/Executive-CV.pdf"
                    className="w-full px-3.5 py-2 rounded bg-[#0B0D10] border border-white/[0.15] text-sm text-[#F5F5F5]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.12] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleCopyPortfolioData}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#0B0D10] border border-[#C6A66B]/50 text-xs font-mono text-[#C6A66B] hover:bg-[#C6A66B]/10"
              >
                {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCode ? 'Copied portfolioData.ts!' : 'Copy portfolioData.ts'}</span>
              </button>

              <button
                onClick={() => setStudioOpen(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#C6A66B] text-[#0B0D10] font-mono text-xs uppercase tracking-wider font-semibold"
              >
                Apply & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}