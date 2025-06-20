import { useState, useEffect } from "react"
import { Search, Plus, Calendar, DollarSign, User, Eye, Edit } from "lucide-react"
import AdminSidebar from "../admin-sidebar"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { Badge } from "../../ui/badge"

// Mock data for projects
const projectsData = [
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

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState(projectsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "All" || project.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-p4 text-white"
      case "Review":
        return "bg-yellow-500 text-white"
      case "Planning":
        return "bg-p2 text-white"
      case "Completed":
        return "bg-p3 text-p1"
      case "On Hold":
        return "bg-gray-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500 text-white"
      case "Medium":
        return "bg-yellow-500 text-white"
      case "Low":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4">
      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div
              className={`mb-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Project Management</h1>
                  <p className="text-p2">Track and manage all your projects</p>
                </div>
                <Button className="bg-p4 hover:bg-p4/80 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-p2" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/20 border-p4/30 text-white placeholder:text-p2"
                  />
                </div>
                <div className="flex gap-2">
                  {["All", "In Progress", "Review", "Planning", "Completed"].map((status) => (
                    <Button
                      key={status}
                      variant={filterStatus === status ? "default" : "outline"}
                      onClick={() => setFilterStatus(status)}
                      className={filterStatus === status ? "bg-p4 text-white" : "bg-p4/30 border-p4 text-white hover:bg-p5"}
                    >
                      {status}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { title: "Total Projects", value: projects.length, icon: "📁" },
                {
                  title: "Active Projects",
                  value: projects.filter((p) => p.status === "In Progress").length,
                  icon: "⚡",
                },
                { title: "Completed", value: projects.filter((p) => p.status === "Completed").length, icon: "✅" },
                { title: "Total Revenue", value: "$120,000", icon: "💰" },
              ].map((stat, index) => (
                <Card
                  key={stat.title}
                  className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl transform transition-all duration-700 hover:scale-105 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-p2 text-sm">{stat.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 transform ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="ghost" className="text-p4 hover:bg-p4/20 p-1">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-p3 hover:bg-p3/20 p-1">
                          <Edit className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-p2 mb-3">{project.description}</p>
                    <div className="flex space-x-2">
                      <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                      <Badge className={getPriorityColor(project.priority)}>{project.priority}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-p2">
                        <User className="h-3 w-3 mr-1" />
                        {project.client}
                      </div>
                      <span className="text-p2">{project.id}</span>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm text-p2 mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-p4 to-p3 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="flex items-center text-p2 mb-1">
                          <DollarSign className="h-3 w-3 mr-1" />
                          Budget
                        </div>
                        <p className="text-white font-semibold">{project.budget}</p>
                        <p className="text-p2 text-xs">Spent: {project.spent}</p>
                      </div>
                      <div>
                        <div className="flex items-center text-p2 mb-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          Deadline
                        </div>
                        <p className="text-white font-semibold">{project.deadline}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-p2 text-sm mb-2">Team ({project.team.length})</p>
                      <div className="flex -space-x-2">
                        {project.team.slice(0, 3).map((member, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 bg-gradient-to-r from-p4 to-p3 rounded-full flex items-center justify-center text-xs text-white font-semibold border-2 border-black"
                          >
                            {member
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        ))}
                        {project.team.length > 3 && (
                          <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-xs text-white border-2 border-black">
                            +{project.team.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
