'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by machine learning, built with Python and TensorFlow.",
    image: "/placeholder.svg",
    tags: ["Python", "TensorFlow", "NLP"],
    github: "https://github.com/gcc/ai-chatbot",
    demo: "https://ai-chatbot.gcc.org"
  },
  {
    title: "Mobile App",
    description: "A cross-platform mobile application for event management, developed using React Native.",
    image: "/placeholder.svg",
    tags: ["React Native", "JavaScript", "Firebase"],
    github: "https://github.com/gcc/mobile-app",
    demo: "https://mobile-app.gcc.org"
  },
  {
    title: "Web Platform",
    description: "A full-stack web application for collaborative coding, built with Next.js and PostgreSQL.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/gcc/web-platform",
    demo: "https://web-platform.gcc.org"
  },
  {
    title: "Data Visualization Tool",
    description: "An interactive data visualization tool for analyzing large datasets, created with D3.js.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "D3.js", "SVG"],
    github: "https://github.com/gcc/data-viz-tool",
    demo: "https://data-viz.gcc.org"
  },
  {
    title: "IoT Smart Home",
    description: "An IoT project for home automation using Raspberry Pi and various sensors.",
    image: "/placeholder.svg",
    tags: ["IoT", "Python", "Raspberry Pi"],
    github: "https://github.com/gcc/iot-smart-home",
    demo: "https://iot-home.gcc.org"
  },
  {
    title: "Blockchain Voting System",
    description: "A secure and transparent voting system built on blockchain technology.",
    image: "/placeholder.svg",
    tags: ["Blockchain", "Solidity", "Ethereum"],
    github: "https://github.com/gcc/blockchain-voting",
    demo: "https://blockchain-vote.gcc.org"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#7096d1] to-[#4a6ea8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore the innovative projects created by our talented members. From AI to blockchain, we're pushing the boundaries of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-effect touch-hover">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-[#7096d1]/10 text-[#7096d1] rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" className="flex items-center touch-hover" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="default" className="flex items-center bg-[#7096d1] hover:bg-[#5a7ab3] touch-hover" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#7096d1]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-8">Join GCC and start working on exciting projects that make a difference.</p>
            <Button
              variant="default"
              className="bg-white text-[#7096d1] hover:bg-gray-100 px-8 py-6 text-lg touch-hover"
            >
              Join Our Community
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

