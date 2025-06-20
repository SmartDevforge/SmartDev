"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    project: "",
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
      budget: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        budget: "",
        project: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-s1 to-white dark:from-p1 dark:to-p5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-p1 dark:text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-p2 dark:text-p2">
              Ready to start your project? Let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-p1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-p1 dark:text-white mb-8">Start a Project</h2>

              {isSubmitted ? (
                <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">Thank You!</h3>
                    <p className="text-green-700 dark:text-green-400">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-p1 dark:text-white mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-p2/30 focus:border-p5 dark:border-p2/30 dark:focus:border-p3"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-p1 dark:text-white mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-p2/30 focus:border-p5 dark:border-p2/30 dark:focus:border-p3"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-p1 dark:text-white mb-2">
                        Budget Range
                      </label>
                      <Select onValueChange={handleSelectChange} value={formData.budget}>
                        <SelectTrigger className="border-p2/30 focus:border-p5 dark:border-p2/30 dark:focus:border-p3">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="over-50k">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-p1 dark:text-white mb-2">
                        Project Type
                      </label>
                      <Input
                        id="project"
                        name="project"
                        type="text"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="border-p2/30 focus:border-p5 dark:border-p2/30 dark:focus:border-p3"
                        placeholder="e.g., Web App, Redesign, Refactoring"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-p1 dark:text-white mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-p2/30 focus:border-p5 dark:border-p2/30 dark:focus:border-p3"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-p5 hover:bg-p4 text-white" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-p1 dark:text-white mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-s3 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-p1 dark:text-white">Email</h3>
                    <p className="text-p2 dark:text-p2">hello@smartdevforge.com</p>
                    <p className="text-p2 dark:text-p2">projects@smartdevforge.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-s3 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-p1 dark:text-white">Phone</h3>
                    <p className="text-p2 dark:text-p2">+234 (0) 123 456 7890</p>
                    <p className="text-p2 dark:text-p2">+234 (0) 987 654 3210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-s3 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-p1 dark:text-white">Location</h3>
                    <p className="text-p2 dark:text-p2">Lagos, Nigeria</p>
                    <p className="text-p2 dark:text-p2">Remote-friendly worldwide</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-s3 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-p1 dark:text-white">Business Hours</h3>
                    <p className="text-p2 dark:text-p2">Monday - Friday: 9:00 AM - 6:00 PM WAT</p>
                    <p className="text-p2 dark:text-p2">Saturday: 10:00 AM - 2:00 PM WAT</p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <Card className="bg-p5 text-white border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Want to work with us?</h3>
                  <p className="text-p2 mb-4">
                    Let's build something amazing together. We're excited to hear about your project!
                  </p>
                  <p className="text-p3 font-semibold">Average response time: 2-4 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-s1 dark:bg-p5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-p1 dark:text-white text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card className="bg-white dark:bg-p1 border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-p1 dark:text-white mb-2">How long does a typical project take?</h3>
                  <p className="text-p2 dark:text-p2">
                    Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web
                    applications can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-p1 border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-p1 dark:text-white mb-2">
                    Do you work with international clients?
                  </h3>
                  <p className="text-p2 dark:text-p2">
                    Yes! We work with clients worldwide. We're experienced in remote collaboration and use modern tools
                    to ensure smooth communication across time zones.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-p1 border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-p1 dark:text-white mb-2">
                    What's included in your maintenance services?
                  </h3>
                  <p className="text-p2 dark:text-p2">
                    Our maintenance packages include regular updates, security monitoring, performance optimization, bug
                    fixes, and technical support. We offer different tiers to match your needs and budget.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
