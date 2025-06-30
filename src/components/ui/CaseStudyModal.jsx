import { X, ArrowRight } from "lucide-react"
import { Button } from "./button"
import { Link } from "react-router-dom"

export default function CaseStudyModal({ project, isOpen, onClose }) {
    if (!isOpen || !project) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white dark:bg-p1 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white dark:bg-p1 border-b border-gray-200 dark:border-p5 p-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-p1 dark:text-white">{project.title}</h2>
                    <Button variant="ghost" size="sm" onClick={onClose}>
                        <X size={20} />
                    </Button>
                </div>

                <div className="p-6">
                    {/* Project Image */}
                    <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
                        <img src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                    </div>

                    {/* Project Goal */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-p1 dark:text-white mb-4">Project Goal</h3>
                        <p className="text-p2 dark:text-p2">{project.caseStudy.goal}</p>
                    </div>

                    {/* Our Process */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-p1 dark:text-white mb-4">Our Process</h3>
                        <p className="text-p2 dark:text-p2">{project.caseStudy.process}</p>
                    </div>

                    {/* Before/After Metrics */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-p1 dark:text-white mb-4">Results</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">Before</h4>
                                {Object.entries(project.caseStudy.metrics.before).map(([key, value]) => (
                                    <div key={key} className="flex justify-between mb-2">
                                        <span className="text-p2 dark:text-p2 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                                        <span className="font-semibold text-red-700 dark:text-red-300">{value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">After</h4>
                                {Object.entries(project.caseStudy.metrics.after).map(([key, value]) => (
                                    <div key={key} className="flex justify-between mb-2">
                                        <span className="text-p2 dark:text-p2 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                                        <span className="font-semibold text-green-700 dark:text-green-300">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tools Used */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-p1 dark:text-white mb-4">Tools Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.caseStudy.tools.map((tool, i) => (
                                <span key={i} className="bg-p3/20 text-p5 dark:text-p3 px-3 py-1 rounded-full text-sm">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Client Feedback */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-p1 dark:text-white mb-4">Client Feedback</h3>
                        <blockquote className="bg-s1 dark:bg-p5/50 p-4 rounded-lg border-l-4 border-p3">
                            <p className="text-p2 dark:text-p2 italic">"{project.caseStudy.feedback}"</p>
                        </blockquote>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <Link to="/contact">
                            <Button className="bg-p5 hover:bg-p4 text-white" onClick={onClose}>
                                Start Your Project <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}