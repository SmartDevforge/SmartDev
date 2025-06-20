import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { testimonials } from "../../lib/data"
export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const testimonialsPerPage = 3

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerPage >= testimonials.length ? 0 : prevIndex + testimonialsPerPage,
    )
  }

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, testimonials.length - testimonialsPerPage) : prevIndex - testimonialsPerPage,
    )
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage)

  return (
    <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 gradient-text">Client Testimonials</h1>
            <p className="text-xl text-p2 leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with SmartDev Forge.
            </p>
          </div>
        </div>

        {/* Floating elements - only green */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-p3/20 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-p4/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "40+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 hover:scale-110 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-p2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonials}
                  className="border-p4 text-p4 hover:bg-p4/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonials}
                  className="border-p4 text-p4 hover:bg-p4/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTestimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 pulse-glow"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <CardContent className="p-6">
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-p2 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 ring-2 ring-p4/50">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-p2">
                          {testimonial.role}, {testimonial.company}
                        </p>
                        <p className="text-xs text-s3">{testimonial.project}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * testimonialsPerPage)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / testimonialsPerPage) === index
                      ? "bg-p4 scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join Our Happy Clients?</h2>
            <p className="text-p2 mb-8 text-lg">Let's work together to create something amazing for your business.</p>
            <Button
              size="lg"
              className="bg-white text-p5 hover:bg-p3 hover:text-p1 transition-all duration-300 hover:scale-105 pulse-glow"
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
