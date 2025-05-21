
import { useEffect } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  // Load Fillout form script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <HeroSection
        backgroundUrl="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Contact Us"
        subtitle="Reach out to learn more about our exclusive beachfront properties and resort."
        height="large"
      />

      <section className="section-padding">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Get in Touch"
            title="We'd Love to Hear from You"
            subtitle="Contact our team for inquiries about plots, villas, or resort bookings."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="luxury-card rounded-lg">
                <h3 className="text-xl mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-1 text-coastal-blue" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">
                        <a href="tel:+918599924242" className="hover:underline">+91 85999 24242</a>
                        {" / "}
                        <a href="tel:+918599936363" className="hover:underline">+91 85999 36363</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-1 text-coastal-blue" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@svnsjd.com" className="hover:underline">info@svnsjd.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 text-coastal-blue" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <address className="not-italic text-muted-foreground">
                        Koshta Junction, Jeerupalem,<br />
                        Srikakulam District,<br />
                        Andhra Pradesh, India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 mt-1 text-coastal-blue" />
                    <div>
                      <h4 className="font-medium">Office Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="luxury-card rounded-lg">
                <h3 className="text-xl mb-6">Connect With Us</h3>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for the latest updates, exclusive offers, and glimpses into the luxury lifestyle at SVN Bay Parck.
                </p>

                <div className="flex space-x-4">
                  {/* Social media icons would go here */}
                  {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="h-10 w-10 rounded-full bg-coastal-mist/20 flex items-center justify-center hover:bg-coastal-mist/40 transition-colors"
                      aria-label={`Follow us on ${social}`}
                    >
                      <span className="capitalize">{social.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-6">Send Us a Message</h3>

                {/* Fillout Form */}
                <div 
                  className="fillout-form" 
                  data-fillout-id="gWqcDn4Jq6us" 
                  data-fillout-embed-type="standard" 
                  data-fillout-inherit-parameters 
                  data-fillout-dynamic-resize
                >
                  {/* Fallback content while form loads */}
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">Loading contact form...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-coastal-ivory/30">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Location"
            title="Visit Us"
            subtitle="Plan your visit to our property to experience coastal luxury firsthand."
          />

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-[16/9] w-full">
              {/* This would typically be a Google Maps embed */}
              <div className="w-full h-full bg-coastal-mist/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-coastal-blue mx-auto mb-4" />
                  <h3 className="text-2xl mb-4">Visit SVN Bay Parck</h3>
                  <address className="not-italic mb-6">
                    Koshta Junction, Jeerupalem,<br />
                    Srikakulam District, Andhra Pradesh, India
                  </address>
                  <button className="btn-primary">Get Directions</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-luxe relative z-10 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="mb-6">Schedule a Site Visit</h2>
            <p className="text-xl mb-8">
              The best way to experience SVN Bay Parck is in person. Contact us to arrange a guided tour of our plots, villas, and resort facilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+918599924242" className="btn-primary">
                Call Now
              </a>
              <a 
                href="https://wa.me/918599924242" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline border-white text-white hover:bg-white hover:text-coastal-navy"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
