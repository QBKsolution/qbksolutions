import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import consultationImage from "@/assets/consultation-meeting.jpg";

const WhyChooseUs = () => {
  const benefits = [
    "Connect product analytics with specific user cohorts",
    "Use advanced data to prioritize what you build",
    "Understand retention and revenue drivers",
    "Get AI-powered insights and recommendations",
    "Real-time collaboration across teams"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Why you should choose our{" "}
            <span className="text-gradient">consulting services?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-in-left relative group">
            <img
              src={consultationImage}
              alt="Consulting services meeting"
              className="rounded-2xl shadow-xl w-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="p-8 border-accent/20 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">
                Connect product analytics with{" "}
                <span className="text-gradient">specific user cohorts</span>
              </h3>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5 animate-pulse-glow" size={20} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link to="/services">
                <Button className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
                  Learn More About Our Approach
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
