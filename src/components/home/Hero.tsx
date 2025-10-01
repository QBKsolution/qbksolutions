import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Award, Target, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroFloatingBg from "@/assets/hero-floating-bg.jpg";

import { ReactNode } from "react";

interface HeroProps {
  children?: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
  <section className="relative min-h-screen bg-primary pt-0 overflow-hidden">
      {children}
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <img src={heroFloatingBg} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-rotate-slow" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 2px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent/15 rounded-full blur-lg animate-bounce-slow" />
      </div>

  <div className="container mx-auto px-4 py-2 md:py-4 relative z-10" style={{ marginTop: '-20px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2 animate-pulse-glow">
              <TrendingUp className="text-accent" size={20} />
              <span className="text-sm font-medium text-primary-foreground">Trusted by 500+ Businesses</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Digital business and technology consulting{" "}
              <span className="text-gradient">centered on you</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-xl">
              Transform your business with our expert consulting services. We deliver innovative solutions tailored to your unique needs, driving growth and maximizing efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-white text-accent hover:bg-accent hover:text-white hover:border-accent transition-colors w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
              <a href="tel:+18882744313">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-white text-accent hover:bg-accent hover:text-white hover:border-accent transition-colors w-full sm:w-auto">
                  Call: +1 (888) 274-4313
                </Button>
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-2">
              <div className="text-center lg:text-left animate-counter-up">
                <div className="text-3xl md:text-4xl font-bold text-accent">94%</div>
                <div className="text-sm text-primary-foreground/70">Success Rate</div>
              </div>
              <div className="text-center lg:text-left animate-counter-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl md:text-4xl font-bold text-accent">204K+</div>
                <div className="text-sm text-primary-foreground/70">Projects Done</div>
              </div>
              <div className="text-center lg:text-left animate-counter-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl md:text-4xl font-bold text-accent">+10%</div>
                <div className="text-sm text-primary-foreground/70">ROI Growth</div>
              </div>
            </div>
          </div>

          {/* Right Side - Floating Cards Grid */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {/* Hero Image */}
            <div className="relative z-10 w-[420px] h-[260px] md:w-[520px] md:h-[320px] lg:w-[600px] lg:h-[360px] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-transparent">
              {/* Image and overlay card remain unchanged */}
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Teamwork and Technology" className="object-cover w-full h-full rounded-2xl" />
              <div className="absolute bottom-4 left-4">
                <div className="bg-[#1ff0b6] text-[#00332e] rounded-xl px-7 py-5 shadow-xl flex flex-col items-start">
                  <div className="text-3xl font-bold leading-none">30+</div>
                  <div className="text-sm font-medium mt-1">Years Experience</div>
                </div>
              </div>
            </div>
            {/* Floating Graph Icons around the image */}

          </div>
        </div>
      </div>
      {/* Bottom Wave */}
      <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden leading-none z-30 pointer-events-none" style={{marginBottom: '-32px'}}>
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[130px] md:h-[180px] lg:h-[210px] align-bottom">
          <path d="M0,120 Q360,180 720,120 T1440,120 V180 H0 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
