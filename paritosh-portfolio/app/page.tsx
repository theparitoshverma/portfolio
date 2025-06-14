"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Phone, MapPin, Download, Code, Database, BarChart3, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { EnhancedSections } from "../components/enhanced-sections"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set())

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Enhanced scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimatedElements((prev) => new Set([...prev, entry.target.id]))
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = {
    "Data Analysis & Visualization": ["Excel", "Power BI", "Tableau", "Matplotlib", "Seaborn"],
    "Programming & Scripting": ["Python (Pandas, NumPy)", "SQL", "C#", ".NET", "JavaScript"],
    "Machine Learning": ["Supervised Learning", "Unsupervised Learning", "Regression"],
    "Database Management": ["MySQL", "PostgreSQL", "SQL Server"],
    "Web Development": ["HTML", "CSS", "JavaScript", "ASP.NET", "React"],
    "Tools & Technologies": ["Power Query", "Git", "Visual Studio", "Jupyter Notebook"],
  }

  const projects = [
    {
      title: "Sales Performance Dashboard",
      description:
        "Developed Power BI dashboard analyzing sales trends and customer behavior using SQL queries to extract and manipulate large datasets.",
      technologies: ["Power BI", "SQL", "Data Visualization"],
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Customer Churn Prediction",
      description:
        "Built a predictive model using logistic regression to identify customers likely to churn with comprehensive data preprocessing.",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Data Cleaning & Transformation",
      description:
        "Cleaned and transformed raw datasets using Excel formulas, Power Query, and SQL functions, reducing errors by 95%.",
      technologies: ["Excel", "SQL", "Power Query", "Data Processing"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: ".NET Web Application",
      description:
        "Developed full-stack web applications using ASP.NET Core with Entity Framework for data management.",
      technologies: ["C#", ".NET Core", "Entity Framework", "SQL Server"],
      icon: <Code className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Navigation with Dark Mode Toggle */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Paritosh Verma
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:scale-110 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600 scale-110"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              data-animate="hero"
            >
              <div className="relative inline-block mb-8">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden animate-float">
                    <img
                      src="/Profile.jpg?height=192&width=192"
                      alt="Paritosh Verma"
                      className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 animate-bounce-custom"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-text">
                  Paritosh Verma
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                Data Analyst & Full-Stack .NET Developer
              </p>

              <p
                className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                Aspiring data analyst with hands-on experience in Excel, SQL, Python, and Power BI. Proficient in
                transforming data into actionable insights and building robust .NET applications.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
                style={{ animationDelay: "0.9s" }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 hover:scale-105 transition-all duration-300 animate-glow"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <div className="flex gap-4">
                  <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300">
                    <a href="https://github.com/theparitoshverma" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300">
                    <a href="https://linkedin.com/in/paritosh-verma-b18564226" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              <div
                className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400 animate-fade-in-up"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                  <span>paritoshfgr@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                  <span>+91-6393479774</span>
                </div>
                <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-5 h-5" />
                  <span>Noida, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-all duration-500"
        data-animate="about"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-700 ${animatedElements.has("about") ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            >
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-width-expand"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-700 ${animatedElements.has("about") ? "animate-slide-in-left" : "opacity-0 -translate-x-10"}`}
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate data analyst and full-stack .NET developer with a strong foundation in transforming raw
                data into meaningful insights. With 6 months of internship experience, I've developed expertise in data
                visualization, statistical analysis, and web development.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey combines the analytical mindset of a data scientist with the technical skills of a software
                developer, allowing me to build comprehensive solutions that bridge data insights with user-friendly
                applications.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2 animate-counter" data-target="6">
                    6
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Months Experience</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-purple-600 mb-2 animate-counter" data-target="10">
                    4
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>

            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-700 ${animatedElements.has("about") ? "animate-slide-in-right" : "opacity-0 translate-x-10"}`}
            >
              <Card className="p-6 text-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <Database className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-bounce-gentle" />
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Data Analysis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Expert in SQL, Python, and Power BI</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <Code
                  className="w-12 h-12 mx-auto mb-4 text-purple-600 animate-bounce-gentle"
                  style={{ animationDelay: "0.2s" }}
                />
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">.NET Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full-stack web applications</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <BarChart3
                  className="w-12 h-12 mx-auto mb-4 text-green-600 animate-bounce-gentle"
                  style={{ animationDelay: "0.4s" }}
                />
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Visualization</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Interactive dashboards</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <Brain
                  className="w-12 h-12 mx-auto mb-4 text-red-600 animate-bounce-gentle"
                  style={{ animationDelay: "0.6s" }}
                />
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Machine Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Predictive modeling</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <EnhancedSections skills={skills} projects={projects} animatedElements={animatedElements} />

      {/* Enhanced Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-white transition-all duration-500">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 dark:text-gray-500 animate-fade-in-up">
            © 2024 Paritosh Verma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
