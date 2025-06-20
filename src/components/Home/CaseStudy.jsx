import React, { useEffect, useState } from 'react'
import { caseStudies } from '../../lib/data'
import { Card, CardContent } from '../ui/card'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

function CaseStudy() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])
    return (
        <section className="py-20 gradient-bg-2 relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div
                    className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    style={{ transitionDelay: "600ms" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Case Studies</h2>
                    <p className="text-p2 max-w-2xl mx-auto text-lg">
                        Explore some of our recent projects and the results we've achieved for our clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <Card
                            key={study.id}
                            className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden  transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                            style={{ transitionDelay: `${800 + index * 200}ms` }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={study.image || "/placeholder.svg"}
                                    alt={study.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {study.tags.map((tag, i) => (
                                        <span key={i} className="text-xs bg-p4/20 text-p4 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                                <p className="text-p2 mb-4 leading-relaxed">{study.description}</p>
                                <Link
                                    to={`/portfolio/${study.id}`}
                                    className="inline-flex items-center text-p4 hover:text-p3 transition-colors group"
                                >
                                    View case study{" "}
                                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/portfolio">
                        <Button
                            variant="outline"
                            className="border-p4 text-p4 hover:bg-p4/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                        >
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy