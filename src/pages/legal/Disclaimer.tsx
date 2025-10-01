import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Disclaimer = () => {
  useEffect(() => {
  document.title = "Disclaimer - QBK Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">Last updated: March 2025</p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. General Information</h2>
                <p>
                  The information provided by QBK Solutions on our website is for general informational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Professional Advice Disclaimer</h2>
                <p>
                  The content on our website does not constitute professional advice. Before making any business, legal, or financial decisions, you should consult with qualified professionals. We are not liable for any losses or damages arising from your reliance on information provided on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. No Guarantees</h2>
                <p>
                  While we strive to deliver excellent results, we do not guarantee specific outcomes or results from our consulting services. Business success depends on numerous factors, many of which are beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. External Links Disclaimer</h2>
                <p>
                  Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Errors and Omissions</h2>
                <p>
                  While we make every effort to ensure the accuracy of the information on our website, errors may occur. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Testimonials Disclaimer</h2>
                <p>
                  Testimonials and case studies on our website represent individual experiences and results may vary. Past performance does not guarantee future results. Your experience with our services may differ from the testimonials presented.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Technical Accuracy</h2>
                <p>
                  While we strive to provide accurate technical information and recommendations, technology changes rapidly. We recommend verifying any technical information with current sources before implementation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                <p>
                  In no event shall QBK Solutions be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever arising out of or in connection with the use of our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Disclaimer</h2>
                <p>
                  We may update this Disclaimer from time to time. We encourage you to review this page periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
                <p>
                  If you have questions about this Disclaimer, please contact us at:
                  <br />
                  Email: legal@qbosolutions.com
                  <br />
                  Phone: +1 8882744313
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Disclaimer;
