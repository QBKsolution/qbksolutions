import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Cookies = () => {
  useEffect(() => {
  document.title = "Cookie Policy - QBK Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">Last updated: March 2025</p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Analytics Cookies</h3>
                <p>
                  We use analytics cookies to understand how visitors interact with our website, helping us improve our services and user experience.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Functional Cookies</h3>
                <p>
                  These cookies allow us to remember choices you make and provide enhanced, personalized features.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Marketing Cookies</h3>
                <p>
                  These cookies track your online activity to help us deliver more relevant advertising and measure the effectiveness of our marketing campaigns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Cookies</h2>
                <p>We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keep you signed in</li>
                  <li>Understand and save your preferences</li>
                  <li>Analyze site traffic and usage patterns</li>
                  <li>Improve our website and services</li>
                  <li>Deliver personalized content and advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
                <p>
                  We may use third-party services such as Google Analytics, which use cookies to collect and analyze information about your use of our website. These third parties have their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Cookies</h2>
                <p>
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Changes to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                <p>
                  If you have questions about our use of cookies, please contact us at:
                  <br />
                  Email: privacy@qbosolutions.com
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

export default Cookies;
