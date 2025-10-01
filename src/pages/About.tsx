import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import teamPhoto from "@/assets/team-photo.jpg";
import consultant1 from "@/assets/consultant-1.jpg";
import consultant2 from "@/assets/consultant-2.jpg";
import Certifications from "@/components/about/Certifications";
import ClientTestimonials from "@/components/about/ClientTestimonials";

const About = () => {
  useEffect(() => {
  document.title = "About Us - QBK Solutions";
  }, []);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships based on trust and results."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex challenges."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to driving measurable growth for our clients and our team."
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      image: consultant1,
      bio: "15+ years in business consulting and technology integration"
    },
    {
      name: "David Chen",
      role: "CTO",
      image: consultant2,
      bio: "Expert in software development and system architecture"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Consultant",
      image: consultant1,
      bio: "Specializes in business process optimization"
    },
    {
      name: "Michael Thompson",
      role: "Integration Specialist",
      image: consultant2,
      bio: "QuickBooks and e-commerce integration expert"
    }
  ];

  const timeline = [
  { year: "2015", event: "QBK Solutions founded with a vision to transform business consulting" },
    { year: "2017", event: "Reached 100 successful client implementations" },
    { year: "2019", event: "Expanded services to include custom software development" },
    { year: "2021", event: "Awarded 'Best Business Consulting Firm' by Industry Leaders" },
    { year: "2023", event: "Serving 500+ clients across multiple industries" },
    { year: "2025", event: "Launched AI-powered business analytics platform" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-accent">QBK Solutions</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Empowering businesses with innovative consulting solutions since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src={teamPhoto}
                alt="QBK Solutions Team"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6 animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At QBK Solutions, we're dedicated to helping businesses unlock their full potential through strategic consulting, innovative technology integration, and data-driven insights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced consultants works closely with clients to understand their unique challenges and deliver customized solutions that drive real, measurable results.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Years Combined Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-accent">Journey</span>
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              A decade of innovation and growth
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-accent">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full mt-2 animate-pulse-glow" />
                  <div className="flex-1 pb-8 border-l-2 border-primary-foreground/20 pl-6 -ml-2">
                    <p className="text-lg text-primary-foreground/90">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Certifications />
      <ClientTestimonials />

      <Footer />
    </div>
  );
};

export default About;
