import { Card } from "@/components/ui/card";
import { Award, CheckCircle, Shield, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description: "Quality Management Systems"
    },
    {
      icon: Shield,
      title: "SOC 2 Type II Compliant",
      description: "Security & Data Protection"
    },
    {
      icon: Star,
      title: "AWS Advanced Partner",
      description: "Cloud Solutions Excellence"
    },
    {
      icon: CheckCircle,
      title: "Microsoft Gold Partner",
      description: "Enterprise Solutions"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications ensuring the highest standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
