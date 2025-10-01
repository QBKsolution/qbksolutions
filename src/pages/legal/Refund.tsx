import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Refund = () => {
  useEffect(() => {
  document.title = "Refund Policy - QBK Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">Last updated: March 2025</p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Overview</h2>
                <p>
                  At QBK Solutions, we strive to provide the highest quality consulting services. This Refund Policy outlines the circumstances under which refunds may be provided.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Consulting Services</h2>
                <p>
                  Due to the nature of consulting services, refunds are evaluated on a case-by-case basis. Requests for refunds must be made within 14 days of the service commencement date.
                </p>
                <p>Refunds may be granted if:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Services were not delivered as described in the agreement</li>
                  <li>There was a material breach of contract by QBK Solutions</li>
                  <li>Services were cancelled by us before delivery</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Software Integration Services</h2>
                <p>
                  For software integration projects, refunds are determined based on the project milestones and deliverables outlined in your service agreement. Partial refunds may be provided for incomplete work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Non-Refundable Items</h2>
                <p>The following are generally non-refundable:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Consultation fees after the initial consultation has been delivered</li>
                  <li>Custom development work that has been completed</li>
                  <li>Third-party software licenses or subscriptions</li>
                  <li>Services rendered in full</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Refund Process</h2>
                <p>To request a refund:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact our support team at support@qbosolutions.com</li>
                  <li>Provide your account information and reason for the refund request</li>
                  <li>Allow 5-7 business days for review of your request</li>
                  <li>If approved, refunds will be processed within 10 business days</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Payment Method</h2>
                <p>
                  Refunds will be issued to the original payment method used for the purchase. Please note that it may take additional time for your financial institution to process the refund.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Disputes</h2>
                <p>
                  If you have concerns about our services or billing, we encourage you to contact us directly before initiating a chargeback. We are committed to resolving any issues amicably.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
                <p>
                  We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
                <p>
                  For questions about refunds or billing, contact us at:
                  <br />
                  Email: billing@qbosolutions.com
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

export default Refund;
