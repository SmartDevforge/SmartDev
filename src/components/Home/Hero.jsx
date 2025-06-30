import React, { useEffect, useState } from 'react'
import { Sparkles, Zap } from "lucide-react"
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { heroImg } from '../../img'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      {/* Floating elements - only green */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-p3/20 rounded-full blur-xl float-animation"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-p4/20 rounded-full blur-xl float-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-p2/20 rounded-full blur-lg float-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              We Build, Refactor, and <span className="gradient-text">Scale Web Experiences</span>
            </h1>
            <p className="text-xl text-p2 max-w-lg leading-relaxed">
              SmartDev Forge helps startups, founders, and agencies take their products to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="flex items-center">
                <Button
                  size="lg"
                  className="bg-p4 hover:bg-p4/80 text-white transition-all duration-300 hover:scale-105 "
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Start a Project
                </Button>
              </Link>
              <Link to="/portfolio" className="flex items-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-p4 text-p4 hover:bg-p4/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
          <div
            className={`relative transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative">
              <img
                src={heroImg || "placeholder.svg?height=600&width=600"}
                alt="SmartDev Forge Hero"
                className="rounded-lg shadow-2xl  w-full h-[80dvh] max-md:h-[50dvh]"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-p3 to-p4 text-p1 p-4 rounded-lg shadow-lg float-animation">
                <p className="font-bold">100+</p>
                <p className="text-sm">Projects Delivered</p>
              </div>
              <div
                className="absolute -top-6 -right-6 bg-gradient-to-r from-p4 to-p5 text-white p-4 rounded-lg shadow-lg float-animation"
                style={{ animationDelay: "1s" }}
              >
                <p className="font-bold">98%</p>
                <p className="text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero