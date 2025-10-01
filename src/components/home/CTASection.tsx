import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Get the <span className="text-accent">help you need</span>,<br />
            every step of the way
          </h2>

          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how our consulting services can help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group w-full sm:w-auto">
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-white text-accent hover:bg-accent hover:text-white hover:border-accent transition-colors w-full sm:w-auto">
                <Mail className="mr-2" size={20} />
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="animate-counter-up">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/70">Happy Clients</div>
            </div>
            <div className="animate-counter-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-primary-foreground/70">Satisfaction Rate</div>
            </div>
            <div className="animate-counter-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-primary-foreground/70">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
