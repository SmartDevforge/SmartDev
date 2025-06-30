"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react"

export default function ContactSupportModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    subject: "",
    priority: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      priority: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ subject: "", priority: "", message: "" })
        onClose()
      }, 3000)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-black/90 backdrop-blur-md rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-p4/30">
        <div className="sticky top-0 bg-black/90 backdrop-blur-md border-b border-p4/20 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Contact Support</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-p2 hover:text-white">
            <X size={20} />
          </Button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-p3 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Support Request Sent!</h3>
              <p className="text-p2">We'll get back to you within 2-4 hours during business hours.</p>
            </div>
          ) : (
            <>
              {/* Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-p4/10 border border-p4/30 rounded-lg p-4 text-center">
                  <Phone className="h-8 w-8 text-p4 mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Call Us</h3>
                  <p className="text-p2 text-sm">+234 (0) 123 456 7890</p>
                  <p className="text-p2 text-xs">Mon-Fri 9AM-6PM WAT</p>
                </div>
                <div className="bg-p4/10 border border-p4/30 rounded-lg p-4 text-center">
                  <Mail className="h-8 w-8 text-p4 mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-p2 text-sm">smartdevforge.com</p>
                  <p className="text-p2 text-xs">Response within 4 hours</p>
                </div>
                <div className="bg-p4/10 border border-p4/30 rounded-lg p-4 text-center">
                  <MessageCircle className="h-8 w-8 text-p4 mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Live Chat</h3>
                  <p className="text-p2 text-sm">Available 24/7</p>
                  <Button size="sm" className="bg-p4 hover:bg-p4/80 text-white mt-2">
                    Start Chat
                  </Button>
                </div>
              </div>

              {/* Support Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-white mb-2">
                    Priority Level *
                  </label>
                  <Select onValueChange={handleSelectChange} value={formData.priority}>
                    <SelectTrigger className="bg-black/20 border-p4/30 text-white">
                      <SelectValue placeholder="Select priority level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - General inquiry</SelectItem>
                      <SelectItem value="medium">Medium - Project related</SelectItem>
                      <SelectItem value="high">High - Urgent issue</SelectItem>
                      <SelectItem value="critical">Critical - System down</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-black/20 border-p4/30 text-white placeholder:text-p2"
                    placeholder="Please provide detailed information about your issue or question..."
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-p4 hover:bg-p4/80 text-white" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Support Request"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="border-p4 text-p4 hover:bg-p4/20"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
