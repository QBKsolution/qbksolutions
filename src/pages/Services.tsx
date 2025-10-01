import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Code, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import serviceIntegration from "@/assets/service-integration.jpg";
import serviceDevelopment from "@/assets/service-development.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";

const Services = () => {
  useEffect(() => {
  document.title = "Our Services - QBK Solutions";
  }, []);

  const services = [
    {
      id: "integration",
      icon: Database,
      title: "Amazon-QuickBooks Integration",
      description: "Seamlessly connect your e-commerce operations with accounting systems",
      image: serviceIntegration,
      features: [
        "Automated transaction syncing",
        "Real-time inventory management",
        "Comprehensive financial reporting",
        "Multi-channel support",
        "Custom data mapping",
        "Error handling and reconciliation"
      ],
      benefits: "Save up to 20 hours per week on manual data entry and reduce accounting errors by 95%"
    },
    {
      id: "development",
      icon: Code,
      title: "Third-Party Development",
      description: "Custom software solutions tailored to your business needs",
      image: serviceDevelopment,
      features: [
        "API integration and development",
        "Custom workflow automation",
        "Data migration services",
        "System architecture design",
        "Scalable cloud solutions",
        "Ongoing maintenance and support"
      ],
      benefits: "Increase operational efficiency by 40% with custom-built solutions that fit your exact requirements"
    },
    {
      id: "consulting",
      icon: Users,
      title: "Business Consulting",
      description: "Strategic guidance to optimize operations and drive growth",
      image: serviceConsulting,
      features: [
        "Business process analysis",
        "Technology strategy development",
        "Change management support",
        "Performance optimization",
        "Risk assessment and mitigation",
        "ROI analysis and reporting"
      ],
      benefits: "Achieve measurable improvements with data-driven strategies and expert guidance"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical integration project take?",
      answer: "Most integration projects are completed within 2-4 weeks, depending on complexity. We provide a detailed timeline after our initial assessment of your specific needs."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, and dedicated technical assistance to ensure your systems run smoothly."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We specialize in integrating with existing infrastructure and can work with a wide variety of platforms, databases, and business applications."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing based on project scope, including fixed-price projects, hourly consulting, and ongoing support subscriptions. Contact us for a customized quote."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, comprehensive training is included with all our implementations. We ensure your team is fully equipped to use and manage the new systems effectively."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive solutions designed to transform your business operations and drive sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <Card className={`p-8 animate-slide-in-left hover-lift ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center animate-pulse-glow">
                        <Icon className="text-accent" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                          <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-6 animate-pulse-glow">
                      <p className="text-sm font-medium text-accent">
                        💡 {service.benefits}
                      </p>
                    </div>

                    <Button className="bg-accent hover:bg-accent/90 group">
                      Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Card>

                  <div className={`animate-slide-in-right ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-square rounded-2xl overflow-hidden group">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                        <Icon className="text-accent" size={64} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-muted-foreground">
                Get answers to common questions about our services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to get started?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Let's discuss how we can help transform your business
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Schedule a Free Consultation <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
