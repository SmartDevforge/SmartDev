"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Search, Calendar, FileText, BarChart3, TrendingUp } from "lucide-react"

// Mock data for reports
const reportsData = [
  {
    id: 1,
    title: "Monthly Project Report - January 2025",
    type: "monthly",
    project: "All Projects",
    projectId: null,
    date: "2025-01-31",
    size: "2.4 MB",
    format: "PDF",
    description:
      "Comprehensive monthly report covering all active projects, budget utilization, and milestone achievements.",
    status: "ready",
    downloadUrl: "#",
  },
  
]

const reportTypes = [
  { key: "all", label: "All Reports", icon: FileText },
  // { key: "monthly", label: "Monthly", icon: Calendar },
  // { key: "project", label: "Project", icon: BarChart3 },
  // { key: "analytics", label: "Analytics", icon: TrendingUp },
  // { key: "financial", label: "Financial", icon: FileText },
]

export default function ClientReports() {
  const [reports, setReports] = useState(reportsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterType === "all" || report.type === filterType

    return matchesSearch && matchesFilter
  })

  const getTypeColor = (type) => {
    switch (type) {
      case "monthly":
        return "bg-blue-500 text-white"
      case "project":
        return "bg-p4 text-white"
      case "analytics":
        return "bg-purple-500 text-white"
      case "financial":
        return "bg-green-500 text-white"
      case "security":
        return "bg-red-500 text-white"
      case "design":
        return "bg-pink-500 text-white"
      case "weekly":
        return "bg-orange-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "ready":
        return "bg-p3 text-p1"
      case "generating":
        return "bg-yellow-500 text-white"
      case "error":
        return "bg-red-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleDownload = (report) => {
    if (report.status === "ready") {
      // Simulate download
      console.log(`Downloading ${report.title}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-p4/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/client">
                <Button variant="ghost" className="text-p2 hover:text-white hover:bg-p4/20">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white">Reports & Downloads</h1>
                <p className="text-p2 text-sm">Access your project reports and documents</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-p4  hover:bg-p4/20">
                <Calendar className="h-4 w-4 mr-2" />
                Request Custom Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Reports", value: reports.length, icon: "📊", color: "from-p4 to-p3" },
            {
              title: "This Month",
              value: reports.filter((r) => new Date(r.date).getMonth() === new Date().getMonth()).length,
              icon: "📅",
              color: "from-p3 to-p4",
            },
            {
              title: "Ready to Download",
              value: reports.filter((r) => r.status === "ready").length,
              icon: "⬇️",
              color: "from-p4 to-p5",
            },
            {
              title: "Total Size",
              value: `${(reports.reduce((acc, r) => acc + Number.parseFloat(r.size), 0)).toFixed(1)} MB`,
              icon: "💾",
              color: "from-p3 to-p2",
            },
          ].map((stat, index) => (
            <Card
              key={stat.title}
              className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl transform transition-all duration-700 hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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

        {/* Filters and Search */}
        <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <CardTitle className="text-white flex items-center">
                <FileText className="h-5 w-5 mr-2 text-p4" />
                All Reports ({filteredReports.length})
              </CardTitle>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-p2" />
                  <Input
                    placeholder="Search reports..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/20 border-p4/30 text-white placeholder:text-p2 w-full md:w-64"
                  />
                </div>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {reportTypes.map((type) => {
                const IconComponent = type.icon
                return (
                  <Button
                    key={type.key}
                    variant={filterType === type.key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType(type.key)}
                    className={filterType === type.key ? "bg-p4 text-white" : "border-p4 text-p4 hover:bg-p4/20"}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {type.label}
                  </Button>
                )
              })}
            </div>
          </CardHeader>
        </Card>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredReports.map((report, index) => (
            <Card
              key={report.id}
              className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{report.title}</h3>
                    <p className="text-p2 text-sm mb-3">{report.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className={getTypeColor(report.type)}>{report.type}</Badge>
                      <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-p2">Project</p>
                      <p className="text-white font-semibold">{report.project}</p>
                    </div>
                    <div>
                      <p className="text-p2">Date</p>
                      <p className="text-white font-semibold">{formatDate(report.date)}</p>
                    </div>
                    <div>
                      <p className="text-p2">Format</p>
                      <p className="text-white font-semibold">{report.format}</p>
                    </div>
                    <div>
                      <p className="text-p2">Size</p>
                      <p className="text-white font-semibold">{report.size}</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      onClick={() => handleDownload(report)}
                      disabled={report.status !== "ready"}
                      className={`${
                        report.status === "ready"
                          ? "bg-p4 hover:bg-p4/80 text-white"
                          : "bg-gray-600 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {report.status === "ready" ? "Download" : "Generating..."}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
            <CardContent className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-16 h-16 bg-p4/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-p4" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Reports Found</h3>
                <p className="text-p2">Try adjusting your search or filter criteria</p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
