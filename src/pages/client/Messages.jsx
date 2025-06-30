"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Reply, Archive, Trash2, Star, StarOff, ArrowLeft, Filter } from "lucide-react"

// Mock data for messages
const messagesData = [
  {
    id: 1,
    from: "Project Manager",
    fromEmail: "pm@smartdevforge.com",
    subject: "E-commerce Platform Update - Phase 2 Complete",
    message:
      "Hi Sarah,\n\nI'm excited to update you on the progress of your e-commerce platform redesign. We've successfully completed Phase 2 of the development, which included:\n\n• Shopping cart functionality\n• Payment gateway integration\n• User authentication system\n• Product catalog optimization\n\nThe development team has done excellent work, and we're ahead of schedule. Phase 3 (testing and optimization) will begin next week.\n\nPlease let me know if you have any questions or would like to schedule a demo of the current progress.\n\nBest regards,\nMike Johnson\nProject Manager",
    date: "2025-01-10T14:30:00",
    unread: true,
    starred: false,
    priority: "high",
    projectId: "SD-2025-001",
    attachments: ["progress-report.pdf", "demo-screenshots.zip"],
  },
  {
    id: 2,
    from: "Design Team",
    fromEmail: "design@smartdevforge.com",
    subject: "Mobile App Mockups Ready for Review",
    message:
      "Hello Sarah,\n\nThe UI/UX mockups for your mobile application are now ready for your review. Our design team has created comprehensive mockups covering:\n\n• User onboarding flow\n• Main dashboard interface\n• Navigation patterns\n• Key user interactions\n• Responsive design elements\n\nThe mockups are available in the project portal, and we've also attached them to this email for your convenience. We'd love to get your feedback by Friday so we can incorporate any changes before moving to development.\n\nLooking forward to your thoughts!\n\nBest,\nJane Smith\nLead Designer",
    date: "2025-01-08T11:15:00",
    unread: false,
    starred: true,
    priority: "medium",
    projectId: "SD-2024-018",
    attachments: ["mobile-mockups-v2.fig", "design-specifications.pdf"],
  },
  {
    id: 3,
    from: "Support Team",
    fromEmail: "support@smartdevforge.com",
    subject: "Monthly Project Report - December 2024",
    message:
      "Dear Sarah,\n\nYour monthly project report for December 2024 is now available. This comprehensive report includes:\n\n• Project progress summaries\n• Budget utilization\n• Milestone achievements\n• Upcoming deliverables\n• Team performance metrics\n\nYou can download the full report from your client portal or use the link provided in this email. If you have any questions about the report or need clarification on any metrics, please don't hesitate to reach out.\n\nThank you for your continued partnership.\n\nBest regards,\nSupport Team",
    date: "2025-01-05T09:00:00",
    unread: false,
    starred: false,
    priority: "low",
    projectId: null,
    attachments: ["monthly-report-dec-2024.pdf"],
  },
  {
    id: 4,
    from: "Account Manager",
    fromEmail: "accounts@smartdevforge.com",
    subject: "Invoice #2025-001 - Payment Confirmation",
    message:
      "Hi Sarah,\n\nThis is to confirm that we have received your payment for Invoice #2025-001 dated January 1st, 2025.\n\nPayment Details:\n• Amount: $15,000\n• Payment Method: Bank Transfer\n• Transaction ID: TXN-2025-001-789\n• Date Processed: January 3rd, 2025\n\nThank you for your prompt payment. Your account is now up to date, and we can proceed with the next phase of your projects as scheduled.\n\nIf you need a receipt or have any questions about billing, please let us know.\n\nBest regards,\nAccounts Team",
    date: "2025-01-03T16:45:00",
    unread: false,
    starred: false,
    priority: "medium",
    projectId: null,
    attachments: ["payment-receipt.pdf"],
  },
  {
    id: 5,
    from: "Development Team",
    fromEmail: "dev@smartdevforge.com",
    subject: "Security Update Required - Action Needed",
    message:
      "Dear Sarah,\n\nAs part of our ongoing commitment to security, we need to implement some important security updates to your website maintenance project.\n\nUpdates Include:\n• SSL certificate renewal\n• Security patches for CMS\n• Database security enhancements\n• Backup system improvements\n\nThese updates are scheduled for this weekend (January 13-14) during off-peak hours to minimize any potential downtime. We expect minimal to no impact on your website's availability.\n\nWe'll send you a confirmation once all updates are completed.\n\nIf you have any concerns or questions, please reach out immediately.\n\nBest regards,\nDevelopment Team",
    date: "2025-01-02T13:20:00",
    unread: true,
    starred: true,
    priority: "high",
    projectId: "SD-2024-012",
    attachments: [],
  },
]

export default function ClientMessages() {
  const [messages, setMessages] = useState(messagesData)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      filterType === "all" ||
      (filterType === "unread" && message.unread) ||
      (filterType === "starred" && message.starred) ||
      (filterType === "high" && message.priority === "high")

    return matchesSearch && matchesFilter
  })

  const toggleStar = (messageId) => {
    setMessages(messages.map((msg) => (msg.id === messageId ? { ...msg, starred: !msg.starred } : msg)))
  }

  const markAsRead = (messageId) => {
    setMessages(messages.map((msg) => (msg.id === messageId ? { ...msg, unread: false } : msg)))
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500 text-white"
      case "medium":
        return "bg-yellow-500 text-white"
      case "low":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "Today"
    if (diffDays === 2) return "Yesterday"
    if (diffDays <= 7) return `${diffDays - 1} days ago`
    return date.toLocaleDateString()
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
                <h1 className="text-2xl font-bold text-white">Messages</h1>
                <p className="text-p2 text-sm">Manage your project communications</p>
              </div>
            </div>
            <Link to="/client/messages/send">
              <Button className="bg-p4 hover:bg-p4/80 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Message
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-1">
            <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Inbox ({filteredMessages.length})</CardTitle>
                  <Button variant="ghost" size="sm" className="text-p2 hover:text-white">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-p2" />
                  <Input
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/20 border-p4/30 text-white placeholder:text-p2"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: "all", label: "All" },
                    { key: "unread", label: "Unread" },
                    { key: "starred", label: "Starred" },
                    { key: "high", label: "High Priority" },
                  ].map((filter) => (
                    <Button
                      key={filter.key}
                      variant={filterType === filter.key ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterType(filter.key)}
                      className={filterType === filter.key ? "bg-p4 text-white" : "border-p4 text-p4 hover:bg-p4/20"}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="max-h-[600px] overflow-y-auto">
                  {filteredMessages.map((message, index) => (
                    <div
                      key={message.id}
                      onClick={() => {
                        setSelectedMessage(message)
                        if (message.unread) markAsRead(message.id)
                      }}
                      className={`p-4 border-b border-p4/10 cursor-pointer transition-all duration-300 hover:bg-p4/10 ${
                        selectedMessage?.id === message.id ? "bg-p4/20" : ""
                      } ${message.unread ? "bg-p4/5" : ""}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className={`font-semibold text-sm ${message.unread ? "text-white" : "text-p2"}`}>
                            {message.from}
                          </h4>
                          {message.unread && <div className="w-2 h-2 bg-p4 rounded-full"></div>}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleStar(message.id)
                            }}
                            className="p-1 h-auto"
                          >
                            {message.starred ? (
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            ) : (
                              <StarOff className="h-3 w-3 text-p2" />
                            )}
                          </Button>
                          <Badge className={`${getPriorityColor(message.priority)} text-xs`}>{message.priority}</Badge>
                        </div>
                      </div>

                      <p className={`text-sm mb-2 ${message.unread ? "text-white" : "text-p2"}`}>{message.subject}</p>

                      <p className="text-xs text-p2 mb-2 line-clamp-2">{message.message.substring(0, 100)}...</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-p2">{formatDate(message.date)}</span>
                        {message.attachments.length > 0 && (
                          <span className="text-xs text-p4">📎 {message.attachments.length}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-2">{selectedMessage.subject}</h2>
                      <div className="flex items-center space-x-4 text-sm text-p2">
                        <span>From: {selectedMessage.from}</span>
                        <span>{formatDate(selectedMessage.date)}</span>
                        <Badge className={getPriorityColor(selectedMessage.priority)}>
                          {selectedMessage.priority} priority
                        </Badge>
                      </div>
                      {selectedMessage.projectId && (
                        <p className="text-sm text-p4 mt-1">Project: {selectedMessage.projectId}</p>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-p2 hover:text-white">
                        <Reply className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-p2 hover:text-white">
                        <Archive className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-p2 hover:text-white">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="prose prose-invert max-w-none">
                    <div className="text-p2 whitespace-pre-wrap leading-relaxed">{selectedMessage.message}</div>
                  </div>

                  {selectedMessage.attachments.length > 0 && (
                    <div className="mt-6 p-4 bg-black/20 rounded-lg border border-p4/20">
                      <h4 className="text-white font-semibold mb-3">
                        Attachments ({selectedMessage.attachments.length})
                      </h4>
                      <div className="space-y-2">
                        {selectedMessage.attachments.map((attachment, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 bg-black/20 rounded border border-p4/10"
                          >
                            <span className="text-p2 text-sm">📎 {attachment}</span>
                            <Button size="sm" variant="outline" className="border-p4 text-p4 hover:bg-p4/20">
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex space-x-4">
                    <Button className="bg-p4 hover:bg-p4/80 text-white">
                      <Reply className="h-4 w-4 mr-2" />
                      Reply
                    </Button>
                    <Button variant="outline" className="border-p4 text-p4 hover:bg-p4/20">
                      Forward
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
                <CardContent className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-p4/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8 text-p4" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Select a Message</h3>
                    <p className="text-p2">Choose a message from the list to view its contents</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
