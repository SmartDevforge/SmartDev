import { useState, useEffect } from "react"
import { Users, FolderOpen, MessageSquare, Mail, TrendingUp, DollarSign, Bell } from "lucide-react"
import AdminSidebar from "./admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import StatsCard from "./stats-card"
import { Badge } from "../ui/badge"

// Mock data for admin dashboard
const dashboardStats = [
  {
    title: "Total Clients",
    value: "42",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "text-p4",
  },
  {
    title: "Active Projects",
    value: "18",
    change: "+5%",
    trend: "up",
    icon: FolderOpen,
    color: "text-p3",
  },
  {
    title: "Monthly Revenue",
    value: "$24,500",
    change: "+18%",
    trend: "up",
    icon: DollarSign,
    color: "text-p3",
  },
  {
    title: "Pending Messages",
    value: "7",
    change: "-2",
    trend: "down",
    icon: MessageSquare,
    color: "text-yellow-400",
  },
]

const recentProjects = [
  {
    id: "SD-2025-001",
    client: "TechStart Inc.",
    project: "E-commerce Platform",
    status: "In Progress",
    progress: 75,
    deadline: "2025-02-15",
  },
  {
    id: "SD-2025-002",
    client: "FinEdge Solutions",
    project: "Dashboard Refactoring",
    status: "Review",
    progress: 90,
    deadline: "2025-01-30",
  },
  {
    id: "SD-2025-003",
    client: "HealthTech Pro",
    project: "Patient Portal",
    status: "Planning",
    progress: 25,
    deadline: "2025-03-10",
  },
]

const recentMessages = [
  {
    id: 1,
    client: "Sarah Johnson",
    subject: "Project Update Request",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    client: "Michael Chen",
    subject: "Bug Report - Dashboard",
    time: "5 hours ago",
    unread: true,
  },
  {
    id: 3,
    client: "Lisa Rodriguez",
    subject: "Feature Request",
    time: "1 day ago",
    unread: false,
  },
]

export default function AdminDashboardPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
              className={`mb-8 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex justify-between >items-center">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
                  <p className="text-p2">Welcome back! Here's what's happening with your projects.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Button className="bg-p4 hover:bg-p4/80 text-white">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </Button>
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-p4 to-p3 flex items-center justify-center">
                    <span className="text-white font-semibold">A</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardStats.map((stat, index) => (
                <div
                  key={stat.title}
                  className={`transform transition-all duration-700 hover:scale-105 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <StatsCard {...stat} />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Recent Projects */}
              <Card
                className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl transform transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <FolderOpen className="h-5 w-5 mr-2 text-p4" />
                    Recent Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProjects.map((project, index) => (
                      <div
                        key={project.id}
                        className="p-4 bg-black/20 rounded-lg border border-p4/20 hover:border-p4/50 transition-all duration-300 hover:scale-102"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-white">{project.project}</h4>
                            <p className="text-sm text-p2">{project.client}</p>
                            <p className="text-xs text-p2">ID: {project.id}</p>
                          </div>
                          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                        </div>
                        <div className="mb-2">
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
                        <p className="text-xs text-p2">Deadline: {project.deadline}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Messages */}
              <Card
                className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl transform transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-p4" />
                    Recent Messages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMessages.map((message, index) => (
                      <div
                        key={message.id}
                        className={`p-4 rounded-lg border transition-all duration-300 hover:scale-102 cursor-pointer ${
                          message.unread
                            ? "bg-p4/10 border-p4/30 hover:border-p4/50"
                            : "bg-black/20 border-p4/20 hover:border-p4/50"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <h4 className="font-semibold text-white mr-2">{message.client}</h4>
                              {message.unread && <div className="w-2 h-2 bg-p4 rounded-full animate-pulse"></div>}
                            </div>
                            <p className="text-sm text-p2 mb-1">{message.subject}</p>
                            <p className="text-xs text-p2">{message.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-p4 text-white hover:bg-p4/20">
                    View All Messages
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card
              className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Add New Client", icon: Users, color: "bg-p4" },
                    { label: "Create Project", icon: FolderOpen, color: "bg-p3" },
                    { label: "Send Newsletter", icon: Mail, color: "bg-p2" },
                    { label: "View Analytics", icon: TrendingUp, color: "bg-yellow-500" },
                  ].map((action, index) => (
                    <Button
                      key={action.label}
                      className={`${action.color} hover:scale-105 transition-all duration-300 h-20 flex-col space-y-2`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <action.icon className="h-6 w-6" />
                      <span className="text-sm">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
