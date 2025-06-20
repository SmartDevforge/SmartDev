import { useState, useEffect } from "react"
import { techStack } from "../lib/data"
import Hero from "../components/Home/Hero"
import WhatWeDo from "../components/Home/What-we-do"
import CaseStudy from "../components/Home/CaseStudy"
import Testimonial from "../components/Home/Testimonial"
import Newsletter from "../components/newsletter"



export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4">
      {/* Hero Section  */}
      <Hero />
      {/* What We Do Section */}
      <WhatWeDo />

      {/* Case Studies Preview */}
      <CaseStudy />

      {/* Testimonials Preview */}
      <Testimonial />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Tech Stack */}
      {/* <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            style={{ transitionDelay: "1600ms" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 gradient-text">Our Tech Stack</h2>
            <p className="text-p2 max-w-2xl mx-auto text-lg">
              We use modern, reliable technologies to build scalable and performant web applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center transform transition-all duration-700 hover:scale-110 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${1800 + index * 100}ms` }}
              >
                <div className="p-4 bg-black/40 backdrop-blur-sm rounded-full border border-p4/30 hover:border-p3/50 transition-all duration-300 pulse-glow">
                  <img
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-10 h-10 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="mt-2 text-sm text-p2">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}
