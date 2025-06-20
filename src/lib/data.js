import { BarChart, Code, Figma, Wrench } from "lucide-react"
import { Features1, Features2, Features3 } from "../img"

// Mock data for case studies
export const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      description: "Increased conversion rate by 45% through UX improvements and performance optimization",
      image:Features1,
      tags: ["UI/UX", "React", "Next.js"],
    },
    {
      id: 2,
      title: "SaaS Dashboard Refactoring",
      description: "Reduced bundle size by 60% and improved load time by 2.5 seconds",
      image: Features2,
      tags: ["Code Refactoring", "Performance", "React"],
    },
    {
      id: 3,
      title: "Fintech Mobile App",
      description: "Built a responsive web app with 99% uptime and seamless payment integration",
      image:Features3,
      tags: ["Custom Web App", "Paystack", "Firebase"],
    },
  ]

  
  // Tech stack logos
 export const techStack = [
    { name: "React", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Next.js", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Firebase", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Tailwind CSS", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Paystack", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Node.js", logo: "/placeholder.svg?height=60&width=60" },
  ]

  // Mock data for testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart",
    project: "E-commerce Platform Redesign",
    content:
      "SmartDev Forge transformed our outdated platform into a modern, high-performing application. Their attention to detail and code quality is exceptional. The team was professional, responsive, and delivered ahead of schedule.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "FinEdge",
    project: "SaaS Dashboard Refactoring",
    content:
      "The team at SmartDev Forge delivered our project ahead of schedule and exceeded our performance expectations. The code refactoring work reduced our bundle size by 60% and improved load times significantly.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    role: "Product Manager",
    company: "HealthTech Solutions",
    project: "Healthcare Portal",
    content:
      "Working with SmartDev Forge was a game-changer for our healthcare portal. They understood our complex requirements and delivered a HIPAA-compliant solution that our patients love.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "EduPlatform",
    project: "E-learning Platform",
    content:
      "The e-learning platform SmartDev Forge built for us has transformed our online education offerings. Student engagement and completion rates have exceeded our expectations.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Jennifer Adams",
    role: "Operations Manager",
    company: "ConsultPro",
    project: "Custom CRM System",
    content:
      "The custom CRM SmartDev Forge built for us has streamlined our operations and increased our team's productivity by 35%. The system is intuitive and exactly what we needed.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Marketing Director",
    company: "RetailMax",
    project: "Performance Optimization",
    content:
      "After implementing SmartDev Forge's performance recommendations, our page load time decreased by 65% and conversions increased by 23%. The ROI was immediate and substantial.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
]
  // Mock data for projects
export const projects = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description: "Complete redesign and performance optimization for a major retail brand",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["UI/UX", "React", "Next.js", "Performance"],
    category: "web-design",
    caseStudy: {
      goal: "Increase conversion rate and improve user experience on mobile devices",
      process:
        "We conducted user research, created wireframes, and implemented a new responsive design with optimized checkout flow.",
      metrics: {
        before: {
          loadTime: "4.2s",
          conversionRate: "2.3%",
          mobileUsability: "72%",
        },
        after: {
          loadTime: "1.8s",
          conversionRate: "3.7%",
          mobileUsability: "96%",
        },
      },
      tools: ["Figma", "React", "Next.js", "Tailwind CSS"],
      feedback:
        "The redesign exceeded our expectations. The site is faster, more intuitive, and our conversion rates have improved significantly.",
    },
  },
  {
    id: 2,
    title: "SaaS Dashboard Refactoring",
    description: "Code refactoring and performance optimization for a B2B SaaS platform",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Code Refactoring", "React", "Performance", "TypeScript"],
    category: "refactoring",
    caseStudy: {
      goal: "Improve code quality, reduce bundle size, and enhance dashboard performance",
      process:
        "We analyzed the existing codebase, identified bottlenecks, and implemented a modular architecture with optimized components.",
      metrics: {
        before: {
          bundleSize: "2.4MB",
          loadTime: "3.8s",
          codeQuality: "65%",
        },
        after: {
          bundleSize: "980KB",
          loadTime: "1.3s",
          codeQuality: "92%",
        },
      },
      tools: ["React", "TypeScript", "Webpack", "ESLint"],
      feedback:
        "The refactoring work has made our application much faster and easier to maintain. Our development team is now more productive.",
    },
  },
  {
    id: 3,
    title: "Fintech Mobile App",
    description: "Custom web application for financial transactions and account management",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Custom Web App", "React Native", "Firebase", "Paystack"],
    category: "web-app",
    caseStudy: {
      goal: "Create a secure, user-friendly mobile app for financial transactions",
      process:
        "We designed a secure architecture, implemented strong authentication, and created an intuitive interface for financial operations.",
      metrics: {
        before: {
          userOnboarding: "8 minutes",
          transactionCompletion: "2 minutes",
          userRetention: "45%",
        },
        after: {
          userOnboarding: "2 minutes",
          transactionCompletion: "30 seconds",
          userRetention: "78%",
        },
      },
      tools: ["React Native", "Firebase", "Paystack", "Jest"],
      feedback:
        "The app has transformed our business. User adoption exceeded our targets, and the feedback has been overwhelmingly positive.",
    },
  },
  {
    id: 4,
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling and records",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Web App", "React", "Node.js", "MongoDB"],
    category: "web-app",
    caseStudy: {
      goal: "Build a secure, HIPAA-compliant patient portal with scheduling capabilities",
      process:
        "We designed a secure architecture, implemented role-based access control, and created intuitive interfaces for patients and staff.",
      metrics: {
        before: {
          appointmentBookingTime: "12 minutes",
          noShowRate: "18%",
          patientSatisfaction: "72%",
        },
        after: {
          appointmentBookingTime: "2 minutes",
          noShowRate: "7%",
          patientSatisfaction: "94%",
        },
      },
      tools: ["React", "Node.js", "MongoDB", "Express"],
      feedback:
        "The portal has streamlined our operations and significantly improved patient satisfaction. Staff training time was minimal due to the intuitive design.",
    },
  },
  {
    id: 5,
    title: "Real Estate Listing Platform",
    description: "Property listing and search platform with virtual tours",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["UI/UX", "Next.js", "Three.js", "MongoDB"],
    category: "web-design",
    caseStudy: {
      goal: "Create an engaging property listing platform with virtual tour capabilities",
      process:
        "We designed an intuitive search experience, implemented 3D virtual tours, and optimized for mobile devices.",
      metrics: {
        before: {
          averageTimeOnSite: "1:45",
          leadConversion: "2.1%",
          mobileUsage: "35%",
        },
        after: {
          averageTimeOnSite: "5:20",
          leadConversion: "4.8%",
          mobileUsage: "62%",
        },
      },
      tools: ["Next.js", "Three.js", "MongoDB", "Cloudinary"],
      feedback:
        "The platform has revolutionized how we showcase properties. Virtual tours have reduced physical viewings while increasing quality leads.",
    },
  },
  {
    id: 6,
    title: "E-learning Platform",
    description: "Interactive learning management system with progress tracking",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Web App", "React", "Firebase", "Node.js"],
    category: "web-app",
    caseStudy: {
      goal: "Build an engaging e-learning platform with interactive content and progress tracking",
      process:
        "We designed an intuitive learning experience, implemented interactive exercises, and created comprehensive analytics for educators.",
      metrics: {
        before: {
          courseCompletionRate: "48%",
          userEngagement: "22 min/day",
          contentCreationTime: "4 hours/lesson",
        },
        after: {
          courseCompletionRate: "76%",
          userEngagement: "37 min/day",
          contentCreationTime: "1.5 hours/lesson",
        },
      },
      tools: ["React", "Firebase", "Node.js", "Express"],
      feedback:
        "The platform has transformed our online education offerings. Student engagement and completion rates have exceeded our expectations.",
    },
  },
]