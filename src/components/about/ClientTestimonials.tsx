import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "TechStart Inc.",
      role: "CEO",
  text: "QBK Solutions transformed our business operations. Their integration expertise saved us countless hours and significantly reduced errors.",
      rating: 5
    },
    {
      name: "Robert Chen",
      company: "Global Retail Co.",
      role: "Operations Director",
      text: "Outstanding consulting services. The team's strategic guidance helped us scale our operations efficiently and effectively.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "Healthcare Plus",
      role: "CFO",
      text: "Their QuickBooks integration solution was exactly what we needed. Professional, reliable, and always available for support.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-accent">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
