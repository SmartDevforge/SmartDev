import React, { useEffect, useState } from 'react'
import { testimonials } from '../../lib/data'
import { Card, CardContent } from '../ui/card'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function Testimonial() {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const getRandomData = (arr) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.round());
    return shuffled.slice(0, 2);
  }

  const HomeTestimonial = getRandomData(testimonials)
  return (
    <section className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 gradient-text">What Our Clients Say</h2>
          <p className="text-p2 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {HomeTestimonial.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              style={{ transitionDelay: `${1200 + index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400 animate-pulse"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-p3 to-p4 flex items-center justify-center text-p1 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-p2">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/testimonials">
            <Button
              variant="outline"
              className="border-p4 text-p4 hover:bg-p4/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Read More Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonial