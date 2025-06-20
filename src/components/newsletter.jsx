"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

    const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      setIsVisible(true)
    }, [])

  return (
    <section className="py-20 gradient-bg-1 relative overflow-hidden">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div
        className={`max-w-2xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        style={{ transitionDelay: "1400ms" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stay Updated</h2>
        <p className="text-p2 mb-8 text-lg">
          Subscribe to our newsletter for industry insights, performance tips, and updates on our latest projects.
        </p>
        <div className="max-w-md mx-auto">
          <div>
            {isSubmitted ? (
              <div className="flex items-center text-p3 mb-4">
                <CheckCircle size={20} className="mr-2" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-p2" />
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="pl-10 bg-p5 border-p4 text-white placeholder:text-p2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="bg-p3 hover:bg-p3/80 text-p1" disabled={isLoading}>
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}


export const NewsLetterForm = () =>{
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }


  return (
    <div className="max-w-md mx-auto">
    <div>
      {isSubmitted ? (
        <div className="flex items-center text-p3 mb-4">
          <CheckCircle size={20} className="mr-2" />
          <span>Thank you for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-grow">
            <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-p2" />
            <Input
              type="email"
              placeholder="Your email address"
              className="pl-10 bg-p5 border-p4 text-white placeholder:text-p2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="bg-p3 hover:bg-p3/80 text-p1" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}
    </div>
  </div>
  )
}