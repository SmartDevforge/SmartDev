import { BarChart, Code, Figma, Wrench } from "lucide-react"
import { Ceo, Features1, Features2, Features3, pimg1, pimg2, profile1, profile2, ui } from "../img"

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
    avatar: Ceo || "/placeholder.svg?height=80&width=80",
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
    avatar: profile1 ||"/placeholder.svg?height=80&width=80",
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
    avatar:profile2|| "/placeholder.svg?height=80&width=80",
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
    avatar:profile1 || "/placeholder.svg?height=80&width=80",
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
    avatar: profile2|| "/placeholder.svg?height=80&width=80",
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
    avatar: profile1|| "/placeholder.svg?height=80&width=80",
  },
]
  // Mock data for projects
export const projects = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description: "Complete redesign and performance optimization for a major retail brand",
    image: Features1,
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
    image: Features2,
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
    image: pimg2 ||"/placeholder.svg?height=400&width=600",

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
    image: pimg1 || "/placeholder.svg?height=400&width=600",
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
    image: ui,
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
    image:Features3,
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

// Mock data for clients
export const clientsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@techstart.com",
    company: "TechStart Inc.",
    phone: "+1 (555) 123-4567",
    status: "Active",
    totalProjects: 3,
    totalSpent: "$45,000",
    joinDate: "2024-01-15",
    lastContact: "2025-01-10",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael@finedge.com",
    company: "FinEdge Solutions",
    phone: "+1 (555) 234-5678",
    status: "Active",
    totalProjects: 2,
    totalSpent: "$32,000",
    joinDate: "2024-03-20",
    lastContact: "2025-01-08",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    email: "lisa@healthtech.com",
    company: "HealthTech Solutions",
    phone: "+1 (555) 345-6789",
    status: "Active",
    totalProjects: 1,
    totalSpent: "$28,000",
    joinDate: "2024-06-10",
    lastContact: "2025-01-05",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "David Thompson",
    email: "david@eduplatform.com",
    company: "EduPlatform",
    phone: "+1 (555) 456-7890",
    status: "Inactive",
    totalProjects: 1,
    totalSpent: "$15,000",
    joinDate: "2024-02-28",
    lastContact: "2024-12-15",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]


// Mock data for projects
export const projectsData = [
  {
    id: "SD-2025-001",
    title: "E-commerce Platform Redesign",
    client: "TechStart Inc.",
    clientEmail: "sarah@techstart.com",
    status: "In Progress",
    priority: "High",
    progress: 75,
    budget: "$45,000",
    spent: "$33,750",
    startDate: "2024-12-01",
    deadline: "2025-02-15",
    team: ["John Doe", "Jane Smith", "Mike Johnson"],
    description: "Complete redesign and optimization of the e-commerce platform",
  },
  {
    id: "SD-2025-002",
    title: "SaaS Dashboard Refactoring",
    client: "FinEdge Solutions",
    clientEmail: "michael@finedge.com",
    status: "Review",
    priority: "Medium",
    progress: 90,
    budget: "$32,000",
    spent: "$28,800",
    startDate: "2024-11-15",
    deadline: "2025-01-30",
    team: ["Alice Brown", "Bob Wilson"],
    description: "Code refactoring and performance optimization for SaaS dashboard",
  },
  {
    id: "SD-2025-003",
    title: "Healthcare Portal Development",
    client: "HealthTech Solutions",
    clientEmail: "lisa@healthtech.com",
    status: "Planning",
    priority: "High",
    progress: 25,
    budget: "$28,000",
    spent: "$7,000",
    startDate: "2025-01-01",
    deadline: "2025-03-10",
    team: ["Sarah Davis", "Tom Anderson"],
    description: "HIPAA-compliant patient portal with appointment scheduling",
  },
  {
    id: "SD-2024-015",
    title: "E-learning Platform",
    client: "EduPlatform",
    clientEmail: "david@eduplatform.com",
    status: "Completed",
    priority: "Medium",
    progress: 100,
    budget: "$15,000",
    spent: "$15,000",
    startDate: "2024-08-01",
    deadline: "2024-11-30",
    team: ["Emma Wilson", "Chris Lee"],
    description: "Interactive e-learning platform with progress tracking",
  },
]


// Mock data for messages
export const mockMessages = [
  {
    id: 1,
    from: "john.doe@techcorp.com",
    fromName: "John Doe",
    subject: "Project Update Required",
    preview: "Hi team, I need an update on the e-commerce project timeline...",
    content:
      "Hi team,\n\nI hope this email finds you well. I need an update on the e-commerce project timeline. Could you please provide the current status and expected delivery date?\n\nBest regards,\nJohn Doe",
    time: "2 hours ago",
    read: false,
    starred: true,
    priority: "high",
    hasAttachment: true,
    project: "E-commerce Platform",
    type: "client",
  },
  {
    id: 2,
    from: "sarah.wilson@startup.com",
    fromName: "Sarah Wilson",
    subject: "New Project Inquiry",
    preview: "Hello, I would like to discuss a potential mobile app development project...",
    content:
      "Hello,\n\nI would like to discuss a potential mobile app development project for our startup. We are looking for a team that can help us build a social networking app.\n\nPlease let me know if you are available for a consultation call.\n\nBest,\nSarah Wilson",
    time: "5 hours ago",
    read: true,
    starred: false,
    priority: "medium",
    hasAttachment: false,
    project: "New Inquiry",
    type: "prospect",
  },
  {
    id: 3,
    from: "mike.chen@globaltech.com",
    fromName: "Mike Chen",
    subject: "Payment Confirmation",
    preview: "Thank you for completing the web development project...",
    content:
      "Thank you for completing the web development project. The payment has been processed and should reflect in your account within 2-3 business days.\n\nLooking forward to future collaborations.\n\nMike Chen",
    time: "1 day ago",
    read: true,
    starred: false,
    priority: "low",
    hasAttachment: true,
    project: "Corporate Website",
    type: "client",
  },
  {
    id: 4,
    from: "team@smartdevforge.com",
    fromName: "Internal Team",
    subject: "Weekly Team Meeting",
    preview: "Reminder: Weekly team standup meeting tomorrow at 10:00 AM...",
    content:
      "Reminder: Weekly team standup meeting tomorrow at 10:00 AM in the conference room.\n\nAgenda:\n- Project updates\n- Client feedback review\n- Resource allocation\n\nPlease prepare your updates beforehand.",
    time: "2 days ago",
    read: true,
    starred: true,
    priority: "medium",
    hasAttachment: false,
    project: "Internal",
    type: "internal",
  },
]



// Mock data for team members
export const teamMembers = [
    {
        id: 1,
        name: "john doe",
        role: "Team Lead",
        department: "Leadership",
        bio: "Visionary leader with 5+ years in web development and digital strategy. Passionate about building scalable solutions.",
        image: profile1 || "/placeholder.svg?height=300&width=300",
        skills: ["Strategy", "Leadership", "Full-Stack Development"],
        social: {
            github: "https://github.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            twitter: "https://twitter.com/johndoe",
            email: "john@smartdevforge.com",
        },
    },

    {
        id: 2,
        name: "sarah  davis",
        role: "Project Manager",
        department: "Operations",
        bio: "Experienced project manager ensuring smooth delivery of projects and excellent client communication.",
        image:profile1 || "/placeholder.svg?height=300&width=300",
        skills: ["Project Management", "Agile", "Client Relations", "Strategy"],
        social: {
            linkedin: "https://linkedin.com/in/sarahdavis",
            email: "sarah@smartdevforge.com",
        },
    },

    {
        id: 3,
        name: "mike Johnson",
        role: "Senior Developer",
        department: "Development",
        bio: "Full-stack developer with expertise in React, Node.js, and cloud architecture. Loves solving complex problems.",
        image: profile2 || "/placeholder.svg?height=300&width=300",
        skills: ["React", "Node.js", "AWS", "TypeScript"],
        social: {
            github: "https://github.com/mikejohnson",
            linkedin: "https://linkedin.com/in/mikejohnson",
            email: "mike@smartdevforge.com",
        },
    },
    {
        id: 4,
        name: "Jane Smith",
        role: "Lead Designer",
        department: "Design",
        bio: "Creative designer specializing in UI/UX with a focus on user-centered design and modern aesthetics.",
        image: profile1 || "/placeholder.svg?height=300&width=300",
        skills: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
        social: {
            linkedin: "https://linkedin.com/in/janesmith",
            twitter: "https://twitter.com/janesmith",
            email: "jane@smartdevforge.com",
        },
    },
    {
        id: 6,
        name: "Emma Wilson",
        role: "Frontend Developer",
        department: "Development",
        bio: "Frontend specialist with a passion for creating beautiful, performant user interfaces and experiences.",
        image: profile2 || "/placeholder.svg?height=300&width=300",
        skills: ["React", "Vue.js", "CSS", "Animation"],
        social: {
            github: "https://github.com/emmawilson",
            linkedin: "https://linkedin.com/in/emmawilson",
            twitter: "https://twitter.com/emmawilson",
            email: "emma@smartdevforge.com",
        },
    },
    {
        id: 5,
        name: "Tom Anderson",
        role: "DevOps Engineer",
        department: "Development",
        bio: "DevOps specialist focused on automation, CI/CD, and cloud infrastructure optimization.",
        image: profile1|| "/placeholder.svg?height=300&width=300",
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
        social: {
            github: "https://github.com/tomanderson",
            linkedin: "https://linkedin.com/in/tomanderson",
            email: "tom@smartdevforge.com",
        },
    },
  
]