"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code2, Users, Laptop, BookOpen } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from 'react'

export default function Home() {
  const [highlightedDays, setHighlightedDays] = useState({
    '2024-11-16': 'bg-cyan-100', // Tech Skills Development & Gathering
    '2024-11-24': 'bg-amber-100', // Pembubaran Workshop
    '2024-11-27': 'bg-purple-100', // CUSPARKLE (PAKSIMA)
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<section className="relative py-20 bg-gradient-primary overflow-hidden">
  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center text-white space-y-8"
    >
      <h1 className="text-6xl font-bold tracking-tight">
        Gamatika Coding Club
      </h1>
      <p className="text-xl leading-relaxed">
        Empowering students through code. Join our community of passionate developers and turn your ideas into reality.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
  <Button
    variant="default"
    className="w-full sm:w-auto bg-white text-[#557ab4] hover:bg-black hover:text-[#7096d1] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg touch-hover"
  >
    Join Our Community
  </Button>
  <Button
    variant="outline"
    className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg touch-hover"
  >
    Learn More
  </Button>
</div>
    </motion.div>
  </div>
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute bottom-0 left-0 w-full text-white opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="currentColor" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Join GCC?</h2>
            <p className="text-xl text-gray-600">Discover the benefits of being part of our coding community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code2 className="h-12 w-12 text-[#005f73]" />,
                title: "Learn to Code",
                description: "Master programming languages and development tools"
              },
              {
                icon: <Users className="h-12 w-12 text-[#005f73]" />,
                title: "Community",
                description: "Connect with fellow developers and mentors"
              },
              {
                icon: <Laptop className="h-12 w-12 text-[#005f73]" />,
                title: "Build Projects",
                description: "Work on real-world projects and build your portfolio"
              },
              {
                icon: <BookOpen className="h-12 w-12 text-[#005f73]" />,
                title: "Resources",
                description: "Access learning materials and workshops"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 card-effect"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Upcoming Activities</h2>
            <p className="text-xl text-gray-600">Stay updated with our events and workshops</p>
          </motion.div>
          <Card className="p-6 card-effect">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Event Calendar</CardTitle>
            </CardHeader>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-grow min-h-[450px] md:min-h-[650px] w-full md:w-3/5">
                <Calendar
                  highlightedDays={highlightedDays}
                  className="w-full h-full text-lg"
                  mode="single"
                  selected={new Date()}
                />
              </div>
              <div className="flex-grow w-full md:w-2/5 space-y-4">
                <h3 className="text-xl font-semibold">Upcoming Events</h3>
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  <div className="bg-cyan-100 p-4 rounded-lg hover:shadow-md transition-shadow duration-300 cursor-pointer">
                    <h4 className="font-semibold">Tech Skills Development</h4>
                    <p className="text-sm text-gray-600">Date: November 16, 2024</p>
                    <p className="text-sm text-gray-600">Time: 2:00 PM - 4:00 PM</p>
                    <p className="text-sm">Join us for an intensive tech skills development session!</p>
                  </div>
                  <div className="bg-amber-100 p-4 rounded-lg hover:shadow-md transition-shadow duration-300 cursor-pointer">
                    <h4 className="font-semibold">Pembubaran Workshop</h4>
                    <p className="text-sm text-gray-600">Date: November 24, 2024</p>
                    <p className="text-sm text-gray-600">Time: All day</p>
                    <p className="text-sm">Special workshop closing ceremony and celebration.</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg hover:shadow-md transition-shadow duration-300 cursor-pointer">
                    <h4 className="font-semibold">CUSPARKLE (PAKSIMA)</h4>
                    <p className="text-sm text-gray-600">Date: November 27, 2024</p>
                    <p className="text-sm text-gray-600">Time: 3:00 PM - 5:30 PM</p>
                    <p className="text-sm">Join us for the CUSPARKLE PAKSIMA event!</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Start Coding?</h2>
            <p className="text-xl mb-8">Join GCC today and begin your journey in programming</p>
            <Button
              variant="default"
              className="bg-white text-[#005f73] hover:bg-black hover:text-[#7096d1] px-8 py-6 text-lg touch-hover"
            >
              Join Now
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute top-0 left-0 w-full text-white opacity-20 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="currentColor" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
      </section>
    </div>
  )
}

