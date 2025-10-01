import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
  document.title = "Terms of Service - QBK Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">Last updated: March 2025</p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using QBK Solutions' services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
                <p>
                  QBK Solutions provides business consulting, software integration, and third-party development services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any unlawful purpose</li>
                  <li>Not interfere with or disrupt our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our services are owned by QBK Solutions and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
                <p>
                  Payment for services is due as specified in your service agreement. We reserve the right to suspend or terminate services for non-payment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, QBK Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Indemnification</h2>
                <p>
                  You agree to indemnify and hold QBK Solutions harmless from any claims, losses, liabilities, and expenses arising from your use of our services or violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, contact us at:
                  <br />
                  Email: legal@qbosolutions.com
                  <br />
                  Phone: +1 (888) 274-4313
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

export default Terms;
