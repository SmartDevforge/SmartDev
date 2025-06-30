import { useState } from "react"
import { ArrowRight, Lock } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Link } from "react-router-dom"
import { projects } from "../../lib/data"
import CaseStudyModal from "../ui/CaseStudyModal"



export default function PortfolioPage() {
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const openCaseStudy = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-s1 to-white dark:from-p1 dark:to-p5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-p1 dark:text-white mb-6">Our Portfolio</h1>
            <p className="text-xl text-p2 dark:text-p2">
              Explore our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-p1 border-b border-gray-200 dark:border-p5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-p5 text-white" : "text-p5 border-p5"}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "web-design" ? "default" : "outline"}
              onClick={() => setFilter("web-design")}
              className={filter === "web-design" ? "bg-p5 text-white" : "text-p5 border-p5"}
            >
              UI/UX Design
            </Button>
            <Button
              variant={filter === "refactoring" ? "default" : "outline"}
              onClick={() => setFilter("refactoring")}
              className={filter === "refactoring" ? "bg-p5 text-white" : "text-p5 border-p5"}
            >
              Refactoring
            </Button>
            <Button
              variant={filter === "web-app" ? "default" : "outline"}
              onClick={() => setFilter("web-app")}
              className={filter === "web-app" ? "bg-p5 text-white" : "text-p5 border-p5"}
            >
              Web Apps
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white dark:bg-p1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-s1 dark:bg-p5/50 border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover" />
                </div>
                <CardContent className="p-6 ">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-p2/20 text-p5 dark:text-p2 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-p1 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-p2 dark:text-p2 mb-4">{project.description}</p>
                  <Button variant="link" className="p-0 text-p3 hover:text-s4" onClick={() => openCaseStudy(project)}>
                    View Case Study <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NDA Projects Section */}
      <section className="py-16 bg-s1 dark:bg-p5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <Lock className="h-12 w-12 text-p5 dark:text-p3 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-p1 dark:text-white mb-4">Projects Under NDA</h2>
            <p className="text-p2 dark:text-p2 mb-8">
              Some of our best work is protected under non-disclosure agreements. These projects include work for major
              financial institutions, healthcare providers, and enterprise clients.
            </p>
            <Button className="bg-p5 hover:bg-p4 text-white dark:bg-p3 dark:text-p1 dark:hover:bg-p3/80">
              <Link to="/contact">
              Reach Out to Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {/* <CaseStudies project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      <CaseStudyModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


      {/* CaseStudyModal */}
    </>
  )
}
