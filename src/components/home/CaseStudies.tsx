import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import successImage from "@/assets/success-image.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import consultationImage from "@/assets/consultation-meeting.jpg";

const CaseStudies = () => {
  const cases = [
    {
      image: successImage,
      category: "E-Commerce",
      title: "How We Helped Increase E-Commerce Sales by 200%",
      description: "Strategic consulting and QuickBooks integration transformed their operations and revenue.",
      link: "/blog"
    },
    {
      image: teamPhoto,
      category: "Technology",
      title: "Streamlining Operations Through Custom Integration",
      description: "Custom third-party development solutions that saved 40 hours per week.",
      link: "/blog"
    },
    {
      image: consultationImage,
      category: "Consulting",
      title: "Business Transformation Success Story: From Chaos to Growth",
      description: "Comprehensive consulting services that turned around a struggling enterprise.",
      link: "/blog"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Discover <span className="text-gradient">what we did</span> for them
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real success stories from businesses we've helped transform and grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold animate-pulse-glow">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {study.description}
                </p>
                <Link to="/blog">
                  <Button variant="link" className="p-0 text-accent group/btn">
                    Learn More
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
