import { Card } from "@/components/ui/card";
import { Search, Layers, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery Phase",
      description: "We analyze your business needs, challenges, and goals to create a comprehensive understanding of your requirements.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Layers,
      title: "Strategy Development",
      description: "Our experts develop a tailored strategy with clear milestones, actionable steps, and measurable outcomes.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Rocket,
      title: "Implementation",
      description: "We execute the plan with precision, providing continuous support and adjustments to ensure optimal results.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Our process guides you step by step<br />
            towards <span className="text-accent">achieving success</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            A proven methodology that delivers consistent results and exceeds expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-primary-foreground/5 backdrop-blur-sm border-primary-foreground/10 hover-lift animate-scale-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-center space-y-4">
                  <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:animate-bounce-slow transition-all`}>
                    <Icon className={step.color} size={36} />
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
