'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Club President",
    image: "/placeholder.svg",
    description: "Computer Science enthusiast with a passion for AI and machine learning.",
    social: {
      whatsapp: "1234567890",
      instagram: "https://instagram.com/alexjohnson"
    }
  },
  // Add more team members with the updated social structure
]

const achievements = [
  { number: "50+", label: "Active Members" },
  { number: "30+", label: "Projects Completed" },
  { number: "20+", label: "Workshops Held" },
  { number: "100+", label: "Code Sessions" },
]

const departments = [
  { name: 'PPSDM', description: 'Pengembangan Potensi Sumber Daya Manusia', content: 'PPSDM focuses on developing human resources within the organization, ensuring that each member reaches their full potential.', logo: '/logos/ppsdm.svg' },
  { name: 'PAKSIMA', description: 'Pengelola Kreasi Mahasiswa', content: 'PAKSIMA is dedicated to managing and fostering student creativity within the club.', logo: '/logos/paksima.svg' },
  { name: 'HUMAS', description: 'Hubungan Masyarakat', content: 'HUMAS manages public relations, ensuring effective communication between the club and the wider community.', logo: '/logos/humas.svg' },
  { name: 'MEDIA', description: 'Media dan Komunikasi', content: 'The Media department handles all aspects of media production and communication strategies for the club.', logo: '/logos/media.svg' },
  { name: 'CONTER', description: 'Coding Center', content: 'CONTER serves as the coding hub, focusing on developing programming skills and fostering a coding culture within the club.', logo: '/logos/conter.svg' },
  { name: 'PDK', description: 'Pusat Data dan Kesekretariatan', content: 'PDK manages data and secretarial tasks, ensuring smooth administrative operations within the club.', logo: '/logos/pdk.svg' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6">About GCC</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering students through code, innovation, and collaboration.
              Join our community of passionate developers and turn your ideas into reality.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0 w-full text-white opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,117.3C672,139,768,181,864,170.7C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-8">
                Menjadi organisasi yang mewadahi mahasiswa matematika di bidang coding application,
                software engineering, dan computer science dalam ruang lingkup nasional dan internasional.
              </p>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex">
                  <span className="h-6 w-6 rounded-full bg-[#7096d1] text-white flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span>
                    Menumbuhkan minat mahasiswa matematika di bidang coding
                    application, software engineering dan computer science
                    agar mampu bersaing dalam perkembangan era globalisasi.
                  </span>
                </li>
                <li className="flex">
                  <span className="h-6 w-6 rounded-full bg-[#7096d1] text-white flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span>
                    Mengoptimalkan Sumber Daya Manusia (SDM) mahasiswa matematika untuk mengembangkan soft skill di bidang pemograman computer agar menjadi problem solver untuk lingkungan sekitar.
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9vp1htBLtEE"
                title="GCC Coding Session"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-[#7096d1] mb-2">{achievement.number}</h3>
                <p className="text-gray-600">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600">Discover the specialized teams that make GCC thrive</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-effect h-full overflow-hidden group">
                  <CardContent className="p-6 flex flex-col h-full relative">
                    <div className="flex justify-center items-center h-40 mb-4">
                      <Image src={dept.logo || "/placeholder.svg"} alt={`${dept.name} logo`} width={100} height={100} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-center">{dept.name}</h3>
                    <div className="absolute inset-0 bg-[#7096d1] p-6 flex flex-col justify-center transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                      <p className="text-white text-lg mb-4">{dept.description}</p>
                      <p className="text-white">{dept.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate individuals behind GCC</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-effect">
                  <CardContent className="p-6">
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover border-4 border-[#7096d1]"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-center mb-2">{member.name}</h3>
                    <p className="text-[#7096d1] text-center text-lg mb-4">{member.role}</p>
                    <p className="text-gray-600 text-center mb-6">{member.description}</p>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" size="icon" asChild className="touch-hover">
                        <a href={`https://wa.me/${member.social.whatsapp}`} target="_blank" rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild className="touch-hover">
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
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

      {/* Join Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-8">Be part of something amazing. Start your coding journey with us.</p>
            <Button
              variant="default"
              className="bg-white text-[#7096d1] hover:bg-gray-100 px-8 py-6 text-lg touch-hover"
            >
              Become a Member
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full text-white opacity-20 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,117.3C672,139,768,181,864,170.7C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
    </div>
  )
}

