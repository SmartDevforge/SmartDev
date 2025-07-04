"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Upload, X, Calendar, DollarSign, Users, Clock, Save } from "lucide-react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Textarea } from "../../ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { Badge } from "../../ui/badge"
import AdminSidebar from "../admin-sidebar"

const mockProject = {
  id: 1,
  name: "E-commerce Platform",
  client: "TechCorp Solutions",
  description:
    "A comprehensive e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard.",
  type: "E-commerce",
  status: "in-progress",
  priority: "high",
  budget: "75000",
  startDate: "2024-01-15",
  endDate: "2024-06-30",
  requirements:
    "Multi-vendor support, Mobile responsive design, Payment gateway integration, Inventory management system, Analytics dashboard",
  deliverables: "Complete web application, Mobile app, Admin dashboard, Documentation, Training materials",
  notes: "Client prefers weekly progress updates. Special attention to security requirements.",
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
  teamMembers: [
    { id: 1, name: "John Smith", role: "Project Manager", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 3, name: "Mike Chen", role: "Frontend Developer", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 4, name: "Emily Davis", role: "Backend Developer", avatar: "/placeholder.svg?height=32&width=32" },
  ],
  attachments: [
    { id: 1, name: "project-requirements.pdf", size: 2048000, type: "application/pdf" },
    { id: 2, name: "wireframes.fig", size: 5120000, type: "application/octet-stream" },
  ],
}

const EditProject = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    client: "",
    description: "",
    type: "",
    status: "planning",
    priority: "medium",
    budget: "",
    startDate: "",
    endDate: "",
    requirements: "",
    deliverables: "",
    notes: "",
  })

  const [selectedTechnologies, setSelectedTechnologies] = useState([])
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([])
  const [attachments, setAttachments] = useState([])

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "E-commerce",
    "UI/UX Design",
    "Digital Marketing",
    "Consulting",
    "Maintenance",
    "Other",
  ]

  const technologies = [
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "PHP",
    "Laravel",
    "WordPress",
    "Shopify",
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
  ]

  const teamMembers = [
    { id: 1, name: "John Smith", role: "Project Manager", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 2, name: "Sarah Johnson", role: "UI/UX Designer", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 3, name: "Mike Chen", role: "Frontend Developer", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 4, name: "Emily Davis", role: "Backend Developer", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 5, name: "Alex Wilson", role: "Full Stack Developer", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 6, name: "Lisa Brown", role: "QA Engineer", avatar: "/placeholder.svg?height=32&width=32" },
  ]

  useEffect(() => {
    const project = mockProject
    setFormData({
      name: project.name,
      client: project.client,
      description: project.description,
      type: project.type,
      status: project.status,
      priority: project.priority,
      budget: project.budget,
      startDate: project.startDate,
      endDate: project.endDate,
      requirements: project.requirements,
      deliverables: project.deliverables,
      notes: project.notes,
    })
    setSelectedTechnologies(project.technologies)
    setSelectedTeamMembers(project.teamMembers)
    setAttachments(project.attachments)
  }, [id])

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const addTechnology = (tech) => {
    if (!selectedTechnologies.includes(tech)) {
      setSelectedTechnologies((prev) => [...prev, tech])
    }
  }

  const removeTechnology = (tech) => {
    setSelectedTechnologies((prev) => prev.filter((t) => t !== tech))
  }

  const addTeamMember = (member) => {
    if (!selectedTeamMembers.find((m) => m.id === member.id)) {
      setSelectedTeamMembers((prev) => [...prev, member])
    }
  }

  const removeTeamMember = (memberId) => {
    setSelectedTeamMembers((prev) => prev.filter((m) => m.id !== memberId))
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    const newAttachments = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
    }))
    setAttachments((prev) => [...prev, ...newAttachments])
  }

  const removeAttachment = (id) => {
    setAttachments((prev) => prev.filter((att) => att.id !== id))
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here i would typically send the updated data to your backend
    console.log("Updated Project Data:", {
      ...formData,
      technologies: selectedTechnologies,
      teamMembers: selectedTeamMembers,
      attachments: attachments,
    })

    setIsLoading(false)
    navigate("/admin/projects", {
      state: {
        message: "Project updated successfully!",
        type: "success",
      },
    })
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <Card className="bg-black/40">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex  items-center gap-2">
                    <Clock className="h-5 w-5 text-green-500" />
                    Basic Information
                  </CardTitle>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Project ID: #{id}
                  </Badge>

                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Name *
                      </label>
                      <Input
                        placeholder="Enter project name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Client Name *
                      </label>
                      <Input
                        placeholder="Enter client name"
                        value={formData.client}
                        onChange={(e) => handleInputChange("client", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      placeholder="Describe the project objectives and scope"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Type *
                      </label>
                      <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                        <SelectTrigger className="bg-black/40">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status</label>
                      <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                        <SelectTrigger className="bg-black/40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="planning">Planning</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="review">Review</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="on-hold">On Hold</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Priority</label>
                      <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                        <SelectTrigger className="bg-black/40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline & Budget */}
              <Card className="bg-black/40" >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-green-500" />
                    Timeline & Budget
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Budget ($)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          type="number"
                          placeholder="0.00"
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Start Date</label>
                      <Input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => handleInputChange("startDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">End Date</label>
                      <Input
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => handleInputChange("endDate", e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team & Technologies */}
              <Card className="bg-black/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-500" />
                    Team & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Team Members */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Team Members</label>
                    <Select
                      onValueChange={(value) => {
                        const member = teamMembers.find((m) => m.id.toString() === value)
                        if (member) addTeamMember(member)
                      }}
                    >
                      <SelectTrigger className="bg-black/40">
                        <SelectValue placeholder="Add team member" />
                      </SelectTrigger>
                      <SelectContent>
                        {teamMembers
                          .filter((member) => !selectedTeamMembers.find((m) => m.id === member.id))
                          .map((member) => (
                            <SelectItem key={member.id} value={member.id.toString()}>
                              {member.name} - {member.role}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    {selectedTeamMembers.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedTeamMembers.map((member) => (
                          <Badge key={member.id} variant="secondary" className="flex items-center gap-2">
                            <img
                              src={member.avatar || "/placeholder.svg"}
                              alt={member.name}
                              className="w-4 h-4 rounded-full"
                            />
                            {member.name}
                            <button
                              type="button"
                              onClick={() => removeTeamMember(member.id)}
                              className="ml-1 hover:text-red-500"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies</label>
                    <Select onValueChange={(value) => addTechnology(value)}>
                      <SelectTrigger className="bg-black/40">
                        <SelectValue placeholder="Add technology" />
                      </SelectTrigger>
                      <SelectContent>
                        {technologies
                          .filter((tech) => !selectedTechnologies.includes(tech))
                          .map((tech) => (
                            <SelectItem key={tech} value={tech}>
                              {tech}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    {selectedTechnologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedTechnologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="flex items-center gap-2">
                            {tech}
                            <button
                              type="button"
                              onClick={() => removeTechnology(tech)}
                              className="ml-1 hover:text-red-500"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card className="bg-black/40">
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Requirements</label>
                    <Textarea
                      placeholder="List project requirements and specifications"
                      value={formData.requirements}
                      onChange={(e) => handleInputChange("requirements", e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Deliverables</label>
                    <Textarea
                      placeholder="List expected deliverables"
                      value={formData.deliverables}
                      onChange={(e) => handleInputChange("deliverables", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional Notes
                    </label>
                    <Textarea
                      placeholder="Any additional notes or comments"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* File Attachments */}
              <Card className="bg-black/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-green-500" />
                    File Attachments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Drop files here or click to upload</p>
                    <input type="file" multiple onChange={handleFileUpload} className="hidden" id="file-upload" />
                    <Button type="button" variant="outline" onClick={() => document.getElementById("file-upload").click()}>
                      Choose Files
                    </Button>
                  </div>

                  {attachments.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {attachments.map((file) => (
                        <div
                          key={file.id}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center">
                              <Upload className="h-4 w-4 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{file.name}</p>
                              <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeAttachment(file.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-4 pt-6">
                <Button type="button" variant="outline" onClick={() => navigate("/admin/projects")}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || !formData.name || !formData.client || !formData.description || !formData.type}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isLoading ? "Updating Project..." : "Update Project"}
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>


  )
}

export default EditProject
