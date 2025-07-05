"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Search,
  Mail,
  MailOpen,
  Star,
  Reply,
  Forward,
  Trash2,
  Archive,
  Clock,
  Paperclip,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Badge } from "../../components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { mockMessages } from "../../lib/data"


const AdminMessage = () => {
  const [messages, setMessages] = useState(mockMessages)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.fromName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.preview.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = filterType === "all" || message.type === filterType
    const matchesPriority = filterPriority === "all" || message.priority === filterPriority

    return matchesSearch && matchesType && matchesPriority
  })

  const toggleStar = (id) => {
    setMessages((prev) => prev.map((msg) => (msg.id === id ? { ...msg, starred: !msg.starred } : msg)))
  }

  const markAsRead = (id) => {
    setMessages((prev) => prev.map((msg) => (msg.id === id ? { ...msg, read: true } : msg)))
  }

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id))
    if (selectedMessage?.id === id) {
      setSelectedMessage(null)
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "client":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "prospect":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "internal":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className="bg-p5  shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
            
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Messages</h1>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl bg-p5 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className=" bg-p5 grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)] overflow-auto">
          {/* Messages List */}
          <div className="lg:col-span-1 bg-black/60  rounded-lg shadow-sm border border-gray-200 flex flex-col">
            {/* Search and Filters */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="client">Client</SelectItem>
                    <SelectItem value="prospect">Prospect</SelectItem>
                    <SelectItem value="internal">Internal</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterPriority} onValueChange={setFilterPriority}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto">
              {filteredMessages.length === 0 ? (
                <div className="p-8 text-center">
                  <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">No messages found</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                        selectedMessage?.id === message.id
                          ? "bg-green-50 dark:bg-green-900/20 border-r-2 border-green-500"
                          : ""
                      } ${!message.read ? "bg-blue-50 dark:bg-blue-900/20" : ""}`}
                      onClick={() => {
                        setSelectedMessage(message)
                        markAsRead(message.id)
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {message.read ? (
                            <MailOpen className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Mail className="h-4 w-4 text-blue-500" />
                          )}
                          <span className="font-medium text-gray-900 dark:text-white text-sm">{message.fromName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleStar(message.id)
                            }}
                            className={`p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 ${
                              message.starred ? "text-yellow-500" : "text-gray-400"
                            }`}
                          >
                            <Star className={`h-4 w-4 ${message.starred ? "fill-current" : ""}`} />
                          </button>
                          {message.hasAttachment && <Paperclip className="h-4 w-4 text-gray-400" />}
                        </div>
                      </div>
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-1 truncate">
                        {message.subject}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mb-2 line-clamp-2">{message.preview}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge className={`text-xs ${getPriorityColor(message.priority)}`}>{message.priority}</Badge>
                          <Badge className={`text-xs ${getTypeColor(message.type)}`}>{message.type}</Badge>
                        </div>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {message.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2 bg-black/60  rounded-lg shadow-sm border border-gray-200">
            {selectedMessage ? (
              <div className="h-full flex flex-col">
                {/* Message Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedMessage.subject}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <span>
                          From: {selectedMessage.fromName} ({selectedMessage.from})
                        </span>
                        <span>Project: {selectedMessage.project}</span>
                        <span>{selectedMessage.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={`${getPriorityColor(selectedMessage.priority)}`}>
                        {selectedMessage.priority} priority
                      </Badge>
                      <Badge className={`${getTypeColor(selectedMessage.type)}`}>{selectedMessage.type}</Badge>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                    >
                      <Reply className="h-4 w-4 mr-2" />
                      Reply
                    </Button>
                    <Button variant="outline" size="sm">
                      <Forward className="h-4 w-4 mr-2" />
                      Forward
                    </Button>
                    <Button variant="outline" size="sm">
                      <Archive className="h-4 w-4 mr-2" />
                      Archive
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="prose dark:prose-invert max-w-none">
                    <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                      {selectedMessage.content}
                    </div>
                  </div>

                  {selectedMessage.hasAttachment && (
                    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Paperclip className="h-4 w-4" />
                        Attachments
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-600 rounded border">
                          <span className="text-sm text-gray-700 dark:text-gray-300">project-requirements.pdf</span>
                          <Button size="sm" variant="outline">
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <Mail className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Select a message</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Choose a message from the list to view its contents
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMessage
