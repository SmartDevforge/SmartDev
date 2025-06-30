"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Send, Paperclip, X, CheckCircle } from "lucide-react"

export default function SendMessage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    priority: "medium",
    projectId: "",
    message: "",
  })
  const [attachments, setAttachments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setAttachments([...attachments, ...files])
  }

  const removeAttachment = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)

      // Redirect after success
      setTimeout(() => {
        navigate("/client/messages")
      }, 2000)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4 flex items-center justify-center">
        <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-p3 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
            <p className="text-p2 mb-4">
              Your message has been sent successfully. You'll receive a response within 24 hours.
            </p>
            <p className="text-p2 text-sm">Redirecting to messages...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-p4/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/client/messages">
              <Button variant="ghost" className="text-p2 hover:text-white hover:bg-p4/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Messages
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white">Send Message</h1>
              <p className="text-p2 text-sm">Send a message to the SmartDev Forge team</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white">Compose Message</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="to" className="block text-sm font-medium text-white mb-2">
                      To *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange("to", value)} value={formData.to}>
                      <SelectTrigger className="bg-black/20 border-p4/30 text-white">
                        <SelectValue placeholder="Select recipient" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="project-manager">Project Manager</SelectItem>
                        <SelectItem value="design-team">Design Team</SelectItem>
                        <SelectItem value="development-team">Development Team</SelectItem>
                        <SelectItem value="support-team">Support Team</SelectItem>
                        <SelectItem value="account-manager">Account Manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-white mb-2">
                      Priority
                    </label>
                    <Select onValueChange={(value) => handleSelectChange("priority", value)} value={formData.priority}>
                      <SelectTrigger className="bg-black/20 border-p4/30 text-white">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General inquiry</SelectItem>
                        <SelectItem value="medium">Medium - Project related</SelectItem>
                        <SelectItem value="high">High - Urgent issue</SelectItem>
                        <SelectItem value="critical">Critical - Immediate attention</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-black/20 border-p4/30 text-white placeholder:text-p2"
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-black/20 border-p4/30 text-white placeholder:text-p2"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Attachments */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Attachments</label>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-black/20 border border-p4/30 rounded-md text-p2 hover:text-white hover:border-p4/50 transition-colors"
                      >
                        <Paperclip className="h-4 w-4" />
                        <span>Add Files</span>
                      </label>
                      <span className="text-p2 text-sm">Max 10MB per file</span>
                    </div>

                    {attachments.length > 0 && (
                      <div className="space-y-2">
                        {attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-black/20 rounded-md border border-p4/20"
                          >
                            <div className="flex items-center space-x-2">
                              <Paperclip className="h-4 w-4 text-p4" />
                              <span className="text-white text-sm">{file.name}</span>
                              <span className="text-p2 text-xs">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeAttachment(index)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/20"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Link to="/client/messages">
                    <Button variant="outline" className="border-p4 hover:bg-p4/20">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit" className="bg-p4 hover:bg-p4/80 text-white" disabled={isLoading}>
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
