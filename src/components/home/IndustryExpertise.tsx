import { Card } from "@/components/ui/card";
import { ShoppingCart, Building2, Heart, GraduationCap, Factory, Plane } from "lucide-react";

const IndustryExpertise = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      clients: "150+ clients",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Building2,
      title: "Real Estate",
      clients: "80+ clients",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Heart,
      title: "Healthcare",
      clients: "120+ clients",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: GraduationCap,
      title: "Education",
      clients: "60+ clients",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      clients: "90+ clients",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      clients: "70+ clients",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Industry Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Serving <span className="text-gradient">diverse industries</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We bring specialized knowledge and proven solutions to your industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover-lift animate-scale-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 ${industry.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={industry.color} size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">{industry.clients}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
