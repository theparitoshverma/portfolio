"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

interface EnhancedSectionsProps {
  skills: Record<string, string[]>
  projects: Array<{
    title: string
    description: string
    technologies: string[]
    icon: React.ReactNode
  }>
  animatedElements: Set<string>
}

export function EnhancedSections({ skills, projects, animatedElements }: EnhancedSectionsProps) {
  return (
    <>
      {/* Enhanced Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900 transition-all duration-500"
        data-animate="skills"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-700 ${animatedElements.has("skills") ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            >
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-width-expand"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={category}
                className={`p-6 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 ${animatedElements.has("skills") ? "animate-scale-in" : "opacity-0 scale-90"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-700 dark:text-gray-300 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-300 hover:scale-105 animate-slide-up`}
                        style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-all duration-500"
        data-animate="experience"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-700 ${animatedElements.has("experience") ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            >
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-width-expand"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card
              className={`p-8 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 ${animatedElements.has("experience") ? "animate-slide-in-left" : "opacity-0 -translate-x-10"}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Data Analyst Intern</h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">CodeClause</p>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">May 2023 - June 2023</div>
              </div>

              <div className="space-y-4">
                {[
                  "Developed interactive data dashboards using HTML, CSS, and JavaScript to present analytical insights",
                  "Utilized front-end technologies to enhance data visualization and user interface",
                  "Strengthened skills in data communication, visualization, and web-based analytical tools",
                ].map((point, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${animatedElements.has("experience") ? "animate-fade-in-up" : "opacity-0 translate-y-5"}`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <p className="text-gray-600 dark:text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-purple-900 transition-all duration-500"
        data-animate="projects"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-700 ${animatedElements.has("projects") ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            >
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-width-expand"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`p-6 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 ${animatedElements.has("projects") ? "animate-scale-in" : "opacity-0 scale-90"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300 group-hover:scale-110">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 hover:scale-105 animate-slide-up`}
                        style={{ animationDelay: `${index * 0.2 + techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900 transition-all duration-300 hover:scale-105 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section
        id="education"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-all duration-500"
        data-animate="education"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-700 ${animatedElements.has("education") ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            >
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-width-expand"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card
              className={`p-8 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 ${animatedElements.has("education") ? "animate-slide-in-left" : "opacity-0 -translate-x-10"}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    B.Tech, Computer Science & Engineering
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    ABES Institute of Technology, Ghaziabad
                  </p>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">August 2020 - June 2024</div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card
                className={`p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 ${animatedElements.has("education") ? "animate-scale-in" : "opacity-0 scale-90"}`}
                style={{ animationDelay: "0.2s" }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Data Science Certification
                  </CardTitle>
                  <CardDescription className="text-blue-600 dark:text-blue-400">
                    Alma Better (Certified by IIT Guwahati)
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                className={`p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 ${animatedElements.has("education") ? "animate-scale-in" : "opacity-0 scale-90"}`}
                style={{ animationDelay: "0.4s" }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Hotstar Clone Bootcamp
                  </CardTitle>
                  <CardDescription className="text-purple-600 dark:text-purple-400">
                    Certified by Google, Microsoft, DevTown & Amazon
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-purple-900 dark:from-gray-900 dark:to-blue-900 text-white transition-all duration-500"
        data-animate="contact"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${animatedElements.has("contact") ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            >
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-width-expand"></div>
            <p
              className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-700 ${animatedElements.has("contact") ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "0.2s" }}
            >
              Ready to transform data into insights or build your next .NET application? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400" />,
                title: "Email",
                content: "paritoshfgr@gmail.com",
              },
              {
                icon: <Phone className="w-12 h-12 mx-auto mb-4 text-purple-400" />,
                title: "Phone",
                content: "+91-6393479774",
              },
              {
                icon: <MapPin className="w-12 h-12 mx-auto mb-4 text-green-400" />,
                title: "Location",
                content: "Ghaziabad, India",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                className={`p-6 bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 ${animatedElements.has("contact") ? "animate-scale-in" : "opacity-0 scale-90"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.icon}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.content}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div
              className={`flex justify-center gap-6 transition-all duration-700 ${animatedElements.has("contact") ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/paritoshverma" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/paritoshverma" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
