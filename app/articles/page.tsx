import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from 'lucide-react'

// Mock data for articles
const mockArticles = [
  {
    id: 1,
    title: "Getting Started with React",
    content: "React is a popular JavaScript library for building user interfaces. In this article, we'll cover the basics of React and how to get started with your first React application.",
    image: "/placeholder.svg",
    category: "Web Development",
    author: "John Doe",
    createdAt: "2023-05-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Introduction to Machine Learning",
    content: "Machine Learning is a subset of artificial intelligence that focuses on the development of algorithms that can learn from and make predictions or decisions based on data.",
    image: "/placeholder.svg",
    category: "AI & ML",
    author: "Jane Smith",
    createdAt: "2023-05-20T14:30:00Z",
  },
  {
    id: 3,
    title: "The Importance of Cybersecurity",
    content: "In today's digital age, cybersecurity is more important than ever. This article explores the key concepts of cybersecurity and why it matters for individuals and organizations alike.",
    image: "/placeholder.svg",
    category: "Security",
    author: "Alice Johnson",
    createdAt: "2023-05-25T09:15:00Z",
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Latest Articles</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay updated with the latest in technology, coding tutorials, and club activities
            </p>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0 w-full text-white opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockArticles.map((article) => (
              <Card key={article.id} className="card-effect">
                <div className="relative h-48">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#7096d1] text-white rounded-full text-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 hover:text-[#7096d1] transition-colors">
                    <Link href={`/articles/${article.id}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {article.content}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      5 min read
                    </div>
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

