"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, Clock, Users, CheckCircle, Video, Phone, MapPin } from "lucide-react"

export default function ScheduleMeeting() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    meetingType: "",
    date: "",
    time: "",
    duration: "60",
    attendees: "",
    project: "",
    agenda: "",
    meetingMode: "video",
    notes: "",
  })
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)

      // Redirect after success
      setTimeout(() => {
        navigate("/client")
      }, 3000)
    }, 1500)
  }

  // Generate available time slots
  const timeSlots = []
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
      timeSlots.push(time)
    }
  }

  // Get minimum date (tomorrow)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split("T")[0]

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4 flex items-center justify-center">
        <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl max-w-lg w-full mx-4">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-20 w-20 text-p3 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Meeting Scheduled!</h2>
            <div className="bg-black/20 rounded-lg p-4 mb-6 text-left">
              <h3 className="text-white font-semibold mb-2">Meeting Details:</h3>
              <div className="space-y-2 text-p2 text-sm">
                <p>
                  <strong>Date:</strong> {new Date(formData.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Time:</strong> {formData.time}
                </p>
                <p>
                  <strong>Duration:</strong> {formData.duration} minutes
                </p>
                <p>
                  <strong>Type:</strong> {formData.meetingType}
                </p>
                <p>
                  <strong>Mode:</strong> {formData.meetingMode}
                </p>
              </div>
            </div>
            <p className="text-p2 mb-4">You'll receive a calendar invitation and meeting link via email shortly.</p>
            <p className="text-p2 text-sm">Redirecting to dashboard...</p>
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
            <Link to="/client">
              <Button variant="ghost" className="text-p2 hover:text-white hover:bg-p4/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white">Schedule Meeting</h1>
              <p className="text-p2 text-sm">Book a meeting with the SmartDev Forge team</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Meeting Form */}
            <div className="lg:col-span-2">
              <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-p4" />
                    Meeting Details
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="meetingType" className="block text-sm font-medium text-white mb-2">
                          Meeting Type *
                        </label>
                        <Select
                          onValueChange={(value) => handleSelectChange("meetingType", value)}
                          value={formData.meetingType}
                        >
                          <SelectTrigger className="bg-black/20 border-p4/30 text-white">
                            <SelectValue placeholder="Select meeting type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="project-review">Project Review</SelectItem>
                            <SelectItem value="planning">Project Planning</SelectItem>
                            <SelectItem value="feedback">Feedback Session</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                            <SelectItem value="demo">Demo/Presentation</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-white mb-2">
                          Date *
                        </label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          required
                          min={minDate}
                          value={formData.date}
                          onChange={handleInputChange}
                          className="bg-black/20 border-p4/30 text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-white mb-2">
                          Time *
                        </label>
                        <Select onValueChange={(value) => handleSelectChange("time", value)} value={formData.time}>
                          <SelectTrigger className="bg-black/20 border-p4/30 text-white">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="duration" className="block text-sm font-medium text-white mb-2">
                          Duration (minutes)
                        </label>
                        <Select
                          onValueChange={(value) => handleSelectChange("duration", value)}
                          value={formData.duration}
                        >
                          <SelectTrigger className="bg-black/20 border-p4/30 text-white">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 hour</SelectItem>
                            <SelectItem value="90">1.5 hours</SelectItem>
                            <SelectItem value="120">2 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="meetingMode" className="block text-sm font-medium text-white mb-2">
                        Meeting Mode *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { value: "video", label: "Video Call", icon: Video, desc: "Google Meet/Zoom" },
                          { value: "phone", label: "Phone Call", icon: Phone, desc: "Audio only" },
                          { value: "in-person", label: "In Person", icon: MapPin, desc: "At our office" },
                        ].map((mode) => {
                          const IconComponent = mode.icon
                          return (
                            <div
                              key={mode.value}
                              onClick={() => handleSelectChange("meetingMode", mode.value)}
                              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${formData.meetingMode === mode.value
                                  ? "border-p4 bg-p4/10"
                                  : "border-p4/30 bg-black/20 hover:border-p4/50"
                                }`}
                            >
                              <div className="text-center">
                                <IconComponent
                                  className={`h-8 w-8 mx-auto mb-2 ${formData.meetingMode === mode.value ? "text-p4" : "text-p2"
                                    }`}
                                />
                                <h3
                                  className={`font-semibold ${formData.meetingMode === mode.value ? "text-white" : "text-p2"
                                    }`}
                                >
                                  {mode.label}
                                </h3>
                                <p className="text-p2 text-xs">{mode.desc}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="attendees" className="block text-sm font-medium text-white mb-2">
                        Additional Attendees (Optional)
                      </label>
                      <Input
                        id="attendees"
                        name="attendees"
                        type="text"
                        value={formData.attendees}
                        onChange={handleInputChange}
                        className="bg-black/20 border-p4/30 text-white placeholder:text-p2"
                        placeholder="Enter email addresses separated by commas"
                      />
                    </div>

                    <div>
                      <label htmlFor="agenda" className="block text-sm font-medium text-white mb-2">
                        Meeting Agenda *
                      </label>
                      <Textarea
                        id="agenda"
                        name="agenda"
                        required
                        rows={4}
                        value={formData.agenda}
                        onChange={handleInputChange}
                        className="bg-black/20 border-p4/30 text-white placeholder:text-p2"
                        placeholder="What would you like to discuss in this meeting?"
                      />
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-white mb-2">
                        Additional Notes (Optional)
                      </label>
                      <Textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="bg-black/20 border-p4/30 text-white placeholder:text-p2"
                        placeholder="Any additional information or special requirements"
                      />
                    </div>

                    <div className="flex justify-end space-x-4">
                      <Link to="/client">
                        <Button variant="outline" className="border-p4 hover:bg-p4/20">
                          Cancel
                        </Button>
                      </Link>
                      <Button type="submit" className="bg-p4 hover:bg-p4/80 text-white" disabled={isLoading}>
                        {isLoading ? (
                          "Scheduling..."
                        ) : (
                          <>
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule Meeting
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Availability */}
              <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-p4" />
                    Our Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Business Hours</h4>
                    <div className="space-y-1 text-p2 text-sm">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM WAT</p>
                      <p>Saturday: 10:00 AM - 2:00 PM WAT</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Response Time</h4>
                    <p className="text-p2 text-sm">
                      We'll confirm your meeting within 2-4 hours during business hours.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Meeting Tips */}
              <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-p4" />
                    Meeting Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-p2 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-p4 rounded-full mt-2"></div>
                      <p>Prepare your questions and topics in advance</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-p4 rounded-full mt-2"></div>
                      <p>Have your project materials ready for reference</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-p4 rounded-full mt-2"></div>
                      <p>Test your video/audio setup beforehand</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-p4 rounded-full mt-2"></div>
                      <p>Join the meeting 5 minutes early</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-p2 text-sm mb-4">
                    If you need to reschedule or have questions about your meeting, contact us:
                  </p>
                  <div className="space-y-2 text-p2 text-sm">
                    <p>📧 meetings@smartdevforge.com</p>
                    <p>📞 +234 (0) 123 456 7890</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
