import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart, Code, Figma, Wrench } from 'lucide-react'

function WhatWeDo() {
  // Services data
  const services = [
    {
        icon: <Figma className="h-10 w-10 text-p4" />,
      title: "UI/UX Figma Design",
      description: "Beautiful, intuitive interfaces that delight users and drive engagement",
    },
    {
        icon: <Wrench className="h-10 w-10 text-p4" />,
      title: "Web Maintenance",
      description: "Keep your digital presence running smoothly with regular updates and monitoring",
    },
    {
        icon: <Code className="h-10 w-10 text-p4" />,
      title: "Code Refactoring",
      description: "Improve code quality, readability, and performance for sustainable growth",
    },
    {
        icon: <BarChart className="h-10 w-10 text-p4" />,
      title: "Performance Audits",
      description: "Identify bottlenecks and optimize your web experience for maximum speed",
    },
  ]
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 gradient-text">What We Do</h2>
          <p className="text-p2 max-w-2xl mx-auto text-lg">
            We specialize in creating exceptional digital experiences through expert design, development, and
            optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl hover:shadow-3xl transition-all duration-100 hover:-translate-y-2 hover:scale-105  transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-p2 mb-4 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-p4 hover:text-p3 transition-colors group"
                >
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo