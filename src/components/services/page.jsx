import { Figma, Code, Wrench, BarChart, Laptop, CheckCircle } from "lucide-react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { code, custormWeb, performanceAuditImg, ui, webMentanance } from "../../img"

// Mock data for services
const services = [
  {
    id: "ui-ux-design",
    icon: <Figma className="h-12 w-12 text-s3" />,
    title: "UI/UX Design",
    description:
      "We create intuitive, engaging user interfaces and experiences that delight users and drive conversions.",
    features: [
      "Wireframes & Prototypes",
      "User Flow Mapping",
      "Interactive Prototypes",
      "Full UI Libraries",
      "Design Systems",
    ],
    image: ui || "/placeholder.svg?height=400&width=600",
    testimonial: {
      content:
        "The UI/UX design from SmartDev Forge transformed our product. User engagement increased by 40% after implementation.",
      author: "Lisa Chen, Product Manager at TechFlow",
    },
  },
  {
    id: "web-maintenance",
    icon: <Wrench className="h-12 w-12 text-s3" />,
    title: "Web Maintenance",
    description: "Keep your digital presence running smoothly with our comprehensive maintenance services.",
    features: ["Regular Updates & Patches", "Performance Monitoring", "Security Audits", "Bug Fixes", "24/7 Support"],
    image: webMentanance ||  "/placeholder.svg?height=400&width=600",
    testimonial: {
      content:
        "Since partnering with SmartDev Forge for maintenance, our site uptime has been 99.9% and issues are resolved within hours.",
      author: "Mark Johnson, CTO at RetailPlus",
    },
  },
  {
    id: "code-refactoring",
    icon: <Code className="h-12 w-12 text-s3" />,
    title: "Codebase Refactoring",
    description: "Transform legacy or messy code into clean, maintainable, and scalable architecture.",
    features: [
      "Code Quality Assessment",
      "Architecture Redesign",
      "Performance Optimization",
      "Technical Debt Reduction",
      "Documentation",
    ],
    image: code ||  "/placeholder.svg?height=400&width=600",
    testimonial: {
      content:
        "The refactoring work done by SmartDev Forge reduced our build time by 70% and made our codebase much easier to maintain.",
      author: "Sarah Williams, Lead Developer at FinTech Solutions",
    },
  },
  {
    id: "performance-audits",
    icon: <BarChart className="h-12 w-12 text-s3" />,
    title: "Performance Audits",
    description: "Identify bottlenecks and optimize your web experience for maximum speed and efficiency.",
    features: [
      "Core Web Vitals Analysis",
      "Load Time Optimization",
      "Resource Optimization",
      "SEO Improvements",
      "Detailed Reports & Recommendations",
    ],
    image: performanceAuditImg ||  "/placeholder.svg?height=400&width=600",
    testimonial: {
      content:
        "After implementing SmartDev Forge's performance recommendations, our page load time decreased by 65% and conversions increased by 23%.",
      author: "David Lee, Marketing Director at E-Shop Global",
    },
  },
  {
    id: "custom-web-apps",
    icon: <Laptop className="h-12 w-12 text-s3" />,
    title: "Custom Web Apps",
    description: "Build tailored web applications that solve your unique business challenges and drive growth.",
    features: [
      "Full-stack Development",
      "API Integration",
      "Database Design",
      "Authentication & Security",
      "Scalable Architecture",
    ],
    image: custormWeb || "/placeholder.svg?height=400&width=600",
    testimonial: {
      content:
        "The custom CRM SmartDev Forge built for us has streamlined our operations and increased our team's productivity by 35%.",
      author: "Jennifer Adams, Operations Manager at ConsultPro",
    },
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-s1 to-white dark:from-p1 dark:to-p5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-p1 dark:text-white mb-6">Our Services</h1>
            <p className="text-xl text-p2 dark:text-p2">
              Comprehensive web development solutions to help your business thrive in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-p1">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h2 className="text-3xl font-bold text-p1 dark:text-white ml-4">{service.title}</h2>
                  </div>
                  <p className="text-p2 dark:text-p2 mb-6 text-lg">{service.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-p1 dark:text-white mb-4">What We Offer:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-s3 mr-2 mt-0.5" />
                          <span className="text-p2 dark:text-p2">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-p5 hover:bg-p4 text-white">
                    <Link to="/contact">Request This Service</Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Testimonial */}
                    <div className="absolute -bottom-6 right-6 left-6 bg-white dark:bg-p5 p-4 rounded-lg shadow-lg">
                      <p className="text-p2 dark:text-p2 italic text-sm mb-2">"{service.testimonial.content}"</p>
                      <p className="text-p1 dark:text-white text-sm font-semibold">— {service.testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-p5 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-p2 mb-8">
              We can create tailored packages that combine our services to meet your specific needs and budget.
            </p>
            <Button size="lg" className="bg-p3 hover:bg-p3/80 text-p1">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
