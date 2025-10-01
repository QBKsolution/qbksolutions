import { Card } from "@/components/ui/card";
import { Cloud, Database, Zap, Lock, Globe, Code2 } from "lucide-react";

const TechnologyStack = () => {
  const technologies = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, Azure, Google Cloud infrastructure"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "PostgreSQL, MongoDB, Redis optimization"
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "RESTful APIs, GraphQL, Webhooks"
    },
    {
      icon: Lock,
      title: "Security First",
      description: "End-to-end encryption & compliance"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "React, Node.js, TypeScript"
    },
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored solutions for your needs"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Technology Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Built with <span className="text-gradient">cutting-edge technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage the latest technologies to deliver robust, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-lift animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
