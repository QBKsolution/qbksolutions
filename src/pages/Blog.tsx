import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import successImage from "@/assets/success-image.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import consultationImage from "@/assets/consultation-meeting.jpg";

const Blog = () => {
  useEffect(() => {
  document.title = "Blog - QBK Solutions";
  }, []);

  const posts = [
    {
      id: 1,
      title: "How Business Consulting Drives Growth for Modern Companies",
      excerpt: "Discover the transformative power of business consulting and how it can unlock new opportunities for growth, efficiency, and competitive advantage in today's dynamic market.",
      image: successImage,
      category: "Business Strategy",
      author: "Sarah Mitchell",
      date: "March 15, 2025",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "The Ultimate Guide to QuickBooks Integration for E-Commerce",
      excerpt: "Learn how seamless QuickBooks integration can transform your e-commerce operations, reduce manual work, and provide real-time financial insights.",
      image: consultationImage,
      category: "Technology",
      author: "David Chen",
      date: "March 10, 2025",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 3,
      title: "5 Signs Your Business Needs a Digital Transformation",
      excerpt: "Identify the key indicators that your business is ready for digital transformation and learn how to approach this critical evolution.",
      image: teamPhoto,
      category: "Digital Transformation",
      author: "Emily Rodriguez",
      date: "March 5, 2025",
      readTime: "5 min read",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Blog</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Insights, trends, and expert advice on business consulting and technology
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
            <div className="w-20 h-1 bg-accent" />
          </div>

          {posts.filter(post => post.featured).map(post => (
            <Card key={post.id} className="overflow-hidden hover-lift animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <User size={16} className="mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{post.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`}>
                    <Button className="bg-accent hover:bg-accent/90 group">
                      Read Full Article
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Recent Articles</h2>
            <div className="w-20 h-1 bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.filter(post => !post.featured).map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden hover-lift group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="link" className="p-0 text-accent group/btn">
                      Read More
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
