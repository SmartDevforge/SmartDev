import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
import { Calendar, MessageSquare, Download, Eye, User, LogOut, Bell } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import ContactSupportModal from "./ContactSupportModal"

// Mock data for client dashboard
const clientData = {
  name: "Sarah Johnson",
  company: "TechStart Inc.",
  email: "sarah@techstart.com",
  avatar: "/placeholder.svg?height=60&width=60",
  totalProjects: 3,
  activeProjects: 1,
  totalSpent: "$45,000",
  nextPayment: "$15,000",
}

const clientProjects = [
  {
    id: "SD-2025-001",
    title: "E-commerce Platform Redesign",
    status: "In Progress",
    progress: 75,
    budget: "$25,000",
    spent: "$18,750",
    startDate: "2024-12-01",
    deadline: "2025-02-15",
    description: "Complete redesign and optimization of the e-commerce platform with mobile-first approach",
    milestones: [
      { name: "Design Phase", completed: true, date: "2024-12-15" },
      { name: "Development Phase", completed: true, date: "2025-01-10" },
      { name: "Testing Phase", completed: false, date: "2025-01-25" },
      { name: "Launch", completed: false, date: "2025-02-15" },
    ],
  }
]

const recentMessages = [
  {
    id: 1,
    from: "Project Manager",
    subject: "E-commerce Platform Update",
    message:
      "The development phase is progressing well. We've completed the shopping cart functionality and are now working on the payment integration.",
    date: "2025-01-10",
    unread: true,
  },
  {
    id: 2,
    from: "Design Team",
    subject: "Mobile App Mockups Ready",
    message:
      "The UI/UX mockups for your mobile app are ready for review. Please check the attached files and let us know your feedback.",
    date: "2025-01-08",
    unread: false,
  },
  {
    id: 3,
    from: "Support Team",
    subject: "Monthly Report Available",
    message: "Your monthly project report is now available for download in the reports section.",
    date: "2025-01-05",
    unread: false,
  },
]

export default function ClientDashboard() {
  const [isVisible, setIsVisible] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-p4 text-white"
      case "Completed":
        return "bg-p3 text-p1"
      case "On Hold":
        return "bg-yellow-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-p4/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-p4 to-p3 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">SmartDev Forge</h1>
                <p className="text-p2 text-sm">Project Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-p4 to-p3 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-white font-semibold">{clientData.name}</p>
                  <p className="text-p2 text-sm">{clientData.company}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div
          className={`mb-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back, {clientData.name}!</h2>
          <p className="text-p2">Here's an overview of your project and recent updates.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Active Project", value: clientData.activeProjects, icon: "⚡", color: "from-p3 to-p4" },
            { title: "Total Invested", value: clientData.totalSpent, icon: "💰", color: "from-p4 to-p5" },
            { title: "Next Payment", value: clientData.nextPayment, icon: "📅", color: "from-p3 to-p2" },
          ].map((stat, index) => (
            <Card
              key={stat.title}
              className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl transform transition-all duration-700 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-p2 text-sm">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects Section */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-p4" />
                  Your Project
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {clientProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`p-4 bg-black/20 rounded-lg border border-p4/20 hover:border-p4/50 transition-all duration-300 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                      }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                        <p className="text-p2 text-sm mb-2">{project.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-p2">
                          <span>ID: {project.id}</span>
                          <span>Deadline: {project.deadline}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-p2 mb-2">
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

                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-p2">Budget</p>
                        <p className="text-white font-semibold">{project.budget}</p>
                      </div>
                      <div>
                        <p className="text-p2">Spent</p>
                        <p className="text-p3 font-semibold">{project.spent}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-p2 text-sm mb-2">Milestones</p>
                      <div className="space-y-1">
                        {project.milestones.map((milestone, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm">
                            <div
                              className={`w-3 h-3 rounded-full ${milestone.completed ? "bg-p3" : "bg-gray-600"}`}
                            ></div>
                            <span className={milestone.completed ? "text-white" : "text-p2"}>{milestone.name}</span>
                            <span className="text-p2 text-xs">({milestone.date})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Messages */}
            <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-p4" />
                    Recent Messages
                  </div>
                  <Link to="/client/messages">
                    <Button variant="ghost" size="sm" className="text-p4 hover:bg-p4/20">
                      View All
                    </Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentMessages.slice(0, 3).map((message, index) => (
                  <div
                    key={message.id}
                    className={`p-3 rounded-lg border transition-all duration-300 cursor-pointer ${message.unread
                      ? "bg-p4/10 border-p4/30 hover:border-p4/50"
                      : "bg-black/20 border-p4/20 hover:border-p4/50"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-white text-sm">{message.from}</p>
                      {message.unread && <div className="w-2 h-2 bg-p4 rounded-full"></div>}
                    </div>
                    <p className="text-white text-sm mb-2">{message.subject}</p>
                    <p className="text-p2 text-xs mb-2 line-clamp-2">{message.message}</p>
                    <p className="text-p2 text-xs">{message.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/client/messages/send">
                  <Button className="w-full bg-p4 hover:bg-p4/80 text-white justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </Link>
                <Link to="/client/reports">
                  <Button variant="outline" className="w-full border-p4 text-p2 hover:bg-p4/20 justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Reports
                  </Button>
                </Link>
                <Link to="/client/meetings">
                  <Button variant="outline" className="w-full border-p4 text-p2 hover:bg-p4/20 justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-p2 text-sm mb-4">
                  Our support team is here to help you with any questions or concerns.
                </p>
                <Button className="w-full bg-p3 hover:bg-p3/80 text-p1" onClick={() => setShowContactModal(true)}>
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Contact Support Modal */}
      <ContactSupportModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  )
}
