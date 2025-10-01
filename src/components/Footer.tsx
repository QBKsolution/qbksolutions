import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">Q</span>
              </div>
              <span className="text-xl font-bold">QBK Solutions</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Empowering businesses with cutting-edge consulting solutions and innovative technology integrations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#integration" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  QuickBooks Integration
                </Link>
              </li>
              <li>
                <Link to="/services#development" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Third-Party Development
                </Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Business Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-primary-foreground/80">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>contact@qbosolutions.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-primary-foreground/80">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span><a href="tel:+18882744313" className="hover:underline">+1 8882744313</a></span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-primary-foreground/80">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} QBK Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Cookie Policy
              </Link>
              <Link to="/refund" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Refund Policy
              </Link>
              <Link to="/disclaimer" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
