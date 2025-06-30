import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Zap } from "lucide-react"
import { AboutImg } from "../img"

// Mock data for values
const values = [
  {
    icon: <CheckCircle className="h-8 w-8 text-s3" />,
    title: "Transparency",
    description: "We believe in clear communication and honest feedback throughout the development process.",
  },
  {
    icon: <Zap className="h-8 w-8 text-s3" />,
    title: "Efficiency",
    description: "We optimize our workflows and code to deliver high-quality results without wasting resources.",
  },
  {
    icon: <Target className="h-8 w-8 text-s3" />,
    title: "Performance-first",
    description: "We prioritize speed, responsiveness, and reliability in everything we build.",
  },
]

// Mock data for stats
const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
]

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-s1 to-white dark:from-p1 dark:to-p5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-p1 dark:text-white mb-6">About SmartDev Forge</h1>
            <p className="text-xl text-p2 dark:text-p2">
              Get to know the team behind Nigeria's premium web development studio.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white dark:bg-p1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-p1 dark:text-white mb-6">Who We Are</h2>
              <p className="text-p2 dark:text-p2 mb-6">
                SmartDev Forge is a premium web development studio based in Nigeria. We serve digital agencies,
                founders, and brands who want clean, scalable, performant digital products.
              </p>
              <p className="text-p2 dark:text-p2 mb-6">
                Founded in 2022, we've grown from a small team of passionate developers to a full-service digital agency
                with expertise across the web development spectrum.
              </p>
              <p className="text-p2 dark:text-p2 mb-6">
                Our team combines technical excellence with creative problem-solving to deliver digital experiences that
                exceed expectations and drive business growth.
              </p>
              <Button className="bg-p5 hover:bg-p4 text-white">
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src={AboutImg || "/placeholder.svg?height=400&width=600"}
                  alt="SmartDev Forge Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-p3 text-p1 p-4 rounded-lg shadow-lg">
                <p className="font-bold">Since 2022</p>
                <p className="text-sm">Building Digital Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-s1 dark:bg-p5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-p1 dark:text-white mb-6">Our Mission</h2>
            <p className="text-xl text-p2 dark:text-white mb-12">
              To create transparent, engaging, and scalable digital experiences with expert code quality and smart
              automation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-p1 border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-s1 dark:bg-p5/50 flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-p1 dark:text-white mb-2">{value.title}</h3>
                    <p className="text-p2 dark:text-p2">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-p1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-p5 dark:text-p3 mb-2">{stat.value}</p>
                <p className="text-p2 dark:text-p2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-p5 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-p2 mb-8">
              Let's collaborate to bring your digital vision to life with expert design, development, and optimization.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-p3 hover:bg-p3/80 text-p1">
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
