import { Card } from "@/components/ui/card";
import { Database, Code, Users, TrendingUp, Shield, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "QuickBooks Integration",
      description: "Seamlessly connect your Amazon store with QuickBooks for automated accounting and real-time financial insights.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Code,
      title: "Third-Party Development",
      description: "Custom software solutions and API integrations tailored to your business needs and workflows.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Users,
      title: "Business Consulting",
      description: "Strategic guidance and expert advice to optimize operations and drive sustainable growth.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: TrendingUp,
      title: "Strategy Development",
      description: "Data-driven strategies to maximize your business potential and achieve measurable results.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Shield,
      title: "Consulting & Advisory",
      description: "Comprehensive consulting services covering operations, technology, and business transformation.",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Zap,
      title: "Implementation",
      description: "End-to-end implementation support ensuring smooth deployment and successful adoption.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Product owner is a key to <span className="text-gradient">maximizing the value</span> of your product
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We help you sell your products online more easily, connect product analytics with specific user cohorts, and streamline your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-lift cursor-pointer border-border/50 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={service.color} size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
