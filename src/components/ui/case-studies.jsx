import { ExternalLink, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./card"
import { Button } from "./button"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description: "Complete UI/UX overhaul resulting in 150% increase in conversions",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Next.js", "Tailwind", "Stripe"],
    metrics: {
      conversion: "+150%",
      performance: "+85%",
      userSatisfaction: "4.9/5",
    },
  },
  {
    id: 2,
    title: "SaaS Dashboard Optimization",
    description: "Performance audit and codebase refactoring for better scalability",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "Redis"],
    metrics: {
      loadTime: "-60%",
      codeQuality: "+90%",
      maintenance: "-40%",
    },
  },
  {
    id: 3,
    title: "Mobile-First Web App",
    description: "Custom web application with offline capabilities and PWA features",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "PWA", "Firebase", "Workbox"],
    metrics: {
      mobileUsage: "+200%",
      engagement: "+120%",
      retention: "+75%",
    },
  },
]

export function CaseStudies() {
  return (
    <section className="py-20 bg-gradient-to-br from-s1 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-p1 mb-4">Case Studies</h2>
          <p className="text-xl text-p2 max-w-2xl mx-auto">Real results from real projects</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-p1/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-p1 mb-2 group-hover:text-p4 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-p2 mb-4 leading-relaxed">{study.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-p3/20 text-p5 text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="p-2">
                        <div className="text-lg font-bold text-p4">{value}</div>
                        <div className="text-xs text-p2 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-p5 hover:bg-p4 text-white px-8 py-4 rounded-full font-semibold group">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
