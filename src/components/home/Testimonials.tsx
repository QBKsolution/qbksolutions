import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "We're loving it. This is simply unbelievable! I like it more and more each day because it makes my life a lot easier.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5
    },
    {
  quote: "Outstanding service and results! QBK Solutions transformed our business operations and exceeded all expectations. Highly recommended!",
      author: "Michael Chen",
      role: "CFO, InnovateCo",
      rating: 5
    },
    {
      quote: "The team's expertise and dedication are unmatched. They delivered exactly what we needed and more. A true game-changer for our company.",
      author: "Emily Rodriguez",
      role: "Operations Director, GrowthTech",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              What our <span className="text-gradient">clients say</span>
            </h2>
          </div>

          <Card className="p-8 md:p-12 relative animate-scale-in">
            <Quote className="absolute top-8 left-8 text-accent/20" size={60} />
            
            <div className="relative z-10 text-center space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "{currentTestimonial.quote}"
              </p>

              <div className="flex items-center justify-center space-x-1 text-yellow-500">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl">★</span>
                ))}
              </div>

              <div>
                <p className="font-semibold text-lg">{currentTestimonial.author}</p>
                <p className="text-muted-foreground">{currentTestimonial.role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft size={20} />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-accent w-8" : "bg-border"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
