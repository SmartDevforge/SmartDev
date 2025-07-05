"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { teamMembers } from "../lib/data"

export default function Team() {
    const [selectedDepartment, setSelectedDepartment] = useState("All")
    const [isVisible, setIsVisible] = useState(false)
    const departments = ["All", "Leadership", "Design", "Development", "Operations"]

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const filteredMembers =
        selectedDepartment === "All"
            ? teamMembers
            : teamMembers.filter((member) => member.department === selectedDepartment)

    return (
        <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4">
            {/* Hero Section */}
            <section className="pt-24 pb-12 relative overflow-hidden">
                <div className="absolute inset-0  opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div
                        className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 gradient-text">Meet Our Team</h1>
                        <p className="text-xl text-p2 leading-relaxed">
                            The talented individuals behind SmartDev Forge's success. We're passionate about creating exceptional
                            digital experiences.
                        </p>
                    </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-p3/20 rounded-full blur-xl "></div>
                <div
                    className="absolute bottom-20 right-10 w-32 h-32 bg-p4/20 rounded-full blur-xl"
                    style={{ animationDelay: "2s" }}
                ></div>
            </section>

            {/* Filter Section */}
            {/* <section className="py-8 bg-black/20 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {departments.map((dept) => (
                            <Button
                                key={dept}
                                variant={selectedDepartment === dept ? "default" : "outline"}
                                onClick={() => setSelectedDepartment(dept)}
                                className={selectedDepartment === dept ? "bg-p4 text-white" : "border-p4 text-p4 hover:bg-p4/20"}
                            >
                                {dept}
                            </Button>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Team Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredMembers.map((member, index) => (
                            <Card
                                key={member.id}
                                className={`bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105  transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <CardContent className="p-6">
                                    <div className="text-center mb-6">
                                        <div className="relative w-32 h-32 mx-auto mb-4">
                                            <img
                                                src={member.image || "/placeholder.svg"}
                                                alt={member.name}
                                                className="w-full h-full rounded-full object-cover border-4 border-p4/50"
                                            />
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-p4/20 to-transparent"></div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                        <p className="text-p4 font-semibold mb-2">{member.role}</p>
                                        <Badge className="bg-p3/20 text-p3 border-p3/30">{member.department}</Badge>
                                    </div>

                                    <p className="text-p2 text-sm mb-4 leading-relaxed">{member.bio}</p>

                                    <div className="mb-4">
                                        <h4 className="text-white font-semibold mb-2 text-sm">Skills</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {member.skills.map((skill, i) => (
                                                <span key={i} className="text-xs bg-p4/20 text-p4 px-2 py-1 rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-center space-x-3">
                                        {member.social.github && (
                                            <a
                                                href={member.social.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-p2 hover:text-p4 transition-colors"
                                            >
                                                <Github className="h-5 w-5" />
                                            </a>
                                        )}
                                        {member.social.linkedin && (
                                            <a
                                                href={member.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-p2 hover:text-p4 transition-colors"
                                            >
                                                <Linkedin className="h-5 w-5" />
                                            </a>
                                        )}
                                        {member.social.twitter && (
                                            <a
                                                href={member.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-p2 hover:text-p4 transition-colors"
                                            >
                                                <Twitter className="h-5 w-5" />
                                            </a>
                                        )}
                                        <a href={`mailto:${member.social.email}`} className="text-p2 hover:text-p4 transition-colors">
                                            <Mail className="h-5 w-5" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
