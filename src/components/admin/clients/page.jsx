import { useState, useEffect } from "react"
import { Search, Plus, Mail, Phone, Calendar, Eye, Edit, Trash2 } from "lucide-react"
import AdminSidebar from "../admin-sidebar"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { Badge } from "../../ui/badge"

// Mock data for clients
const clientsData = [
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

export default function AdminClientsPage() {
  const [clients, setClients] = useState(clientsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "All" || client.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status) => {
    return status === "Active" ? "bg-p4 text-white" : "bg-gray-500 text-white"
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
                  <h1 className="text-3xl font-bold text-white mb-2">Client Management</h1>
                  <p className="text-p2">Manage your clients and their information</p>
                </div>
                <Button className="bg-p4 hover:bg-p4/80 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Client
                </Button>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-p2" />
                  <Input
                    placeholder="Search clients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/20 border-p4/30 text-white placeholder:text-p2"
                  />
                </div>
                <div className="flex gap-2">
                  {["All", "Active", "Inactive"].map((status) => (
                    <Button
                      key={status}
                      variant={filterStatus === status ? "default" : "outline"}
                      onClick={() => setFilterStatus(status)}
                      className={filterStatus === status ? "bg-p4 text-white" : "bg-p4/20 border-p4 text-p4 hover:bg-p5"}
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
                { title: "Total Clients", value: clients.length, icon: "👥" },
                { title: "Active Clients", value: clients.filter((c) => c.status === "Active").length, icon: "✅" },
                { title: "Total Revenue", value: "$120,000", icon: "💰" },
                { title: "Avg. Project Value", value: "$30,000", icon: "📊" },
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

            {/* Clients Table */}
            <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white">All Clients ({filteredClients.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-p4/20">
                        <th className="text-left py-3 px-4 text-white font-semibold">Client</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Contact</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Status</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Projects</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Total Spent</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Last Contact</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredClients.map((client, index) => (
                        <tr
                          key={client.id}
                          className={`border-b border-p4/10 hover:bg-p4/10 transition-colors transform ${
                            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                          }`}
                          style={{ transitionDelay: `${400 + index * 100}ms` }}
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-p4 to-p3 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold">{client.name.charAt(0)}</span>
                              </div>
                              <div>
                                <p className="font-semibold text-white">{client.name}</p>
                                <p className="text-sm text-p2">{client.company}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="space-y-1">
                              <div className="flex items-center text-p2 text-sm">
                                <Mail className="h-3 w-3 mr-1" />
                                {client.email}
                              </div>
                              <div className="flex items-center text-p2 text-sm">
                                <Phone className="h-3 w-3 mr-1" />
                                {client.phone}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge className={getStatusColor(client.status)}>{client.status}</Badge>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-white font-semibold">{client.totalProjects}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-p3 font-semibold">{client.totalSpent}</span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center text-p2 text-sm">
                              <Calendar className="h-3 w-3 mr-1" />
                              {client.lastContact}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost" className="text-p4 hover:bg-p4/20">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-p3 hover:bg-p3/20">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-red-400 hover:bg-red-500/20">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
