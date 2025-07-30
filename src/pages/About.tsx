
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Award, Check, LayoutGrid, Lock, MapPin } from 'lucide-react';
import ImageReveal from '../components/ImageReveal';

const About = () => {
  return (
    <Layout>
      <HeroSection
        backgroundUrl="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="About SVN Bay Parck"
        subtitle="A vision of coastal luxury and investment excellence"
        height="large"
      />

      <section className="section-padding">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-coastal-mist/30 text-coastal-blue rounded-full mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">Our Vision</span>
              </div>
              <h2 className="mb-6">Creating an Exclusive Coastal Paradise</h2>
              <p className="text-lg mb-4">
                SVN Bay Parck represents the culmination of our vision to create a harmonious blend of premium real estate and luxury lifestyle on the pristine coastline near Visakhapatnam.
              </p>
              <p className="text-muted-foreground mb-6">
                Our 40-acre gated community combines CRZ-compliant beachfront plots, signature sea-facing villas, and an exclusive boutique resort, offering a unique investment opportunity and lifestyle experience.
              </p>
              <p className="text-muted-foreground">
                Developed by SVN Developers, a name synonymous with trust and excellence in real estate, Bay Parck embodies our commitment to quality, legal compliance, and creating spaces that appreciate in value while providing exceptional living experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ImageReveal
                src="/lovable-uploads/eb516588-3335-48ba-a53c-92e818d53921.png"
                alt="Coastal view"
                height="h-80"
                className="rounded-lg"
              />
              <ImageReveal
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury resort"
                height="h-80"
                className="rounded-lg mt-8"
              />
              <ImageReveal
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                alt="Villa"
                height="h-80"
                className="rounded-lg mt-8"
              />
              <ImageReveal
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Beach"
                height="h-80"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-coastal-ivory/30">
        <div className="container-luxe">
          <SectionTitle 
            pretitle="Project Details"
            title="A Grand Vision of Coastal Living"
            subtitle="SVN Bay Parck spans 40 acres of prime coastal land, offering multiple investment and lifestyle options."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="luxury-card bg-white/80 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <LayoutGrid className="h-8 w-8 mr-4 text-coastal-blue" />
                <h3 className="text-xl">Project Breakdown</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Total Area: 40 acres</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Beachfront Residential Plots: 25 acres</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Luxury Resort & Premium Cottages: 15 acres</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Developer: SVN Developers</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Project Type: Gated Community + Boutique Beach Resort</span>
                </li>
              </ul>
            </div>

            <div className="luxury-card bg-white/80 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 mr-4 text-coastal-blue" />
                <h3 className="text-xl">Legal & Approvals</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>LP No. 31/2020/1178 / DTCP / DPMS</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>AP RERA No: P01070381701</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>SUDA Approved</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Located outside the Coastal Regulation Zone (CRZ)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>100% safe to build and develop</span>
                </li>
              </ul>
            </div>

            <div className="luxury-card bg-white/80 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 mr-4 text-coastal-blue" />
                <h3 className="text-xl">Location Advantages</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Near Chennai–Kolkata Highway (10 km)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Close to Pydibhimavaram Pharma SEZ (15 km)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Proximity to upcoming Bhogapuram Intl. Airport (35 km)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Near Visakhapatnam city (80 km)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Strategically located for future growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Invest Section */}
      <section className="section-padding">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Investment Excellence"
            title="The Bay Parck Advantage"
            subtitle="A premium investment opportunity with multiple benefits."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ImageReveal
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Investment"
              height="h-[500px]"
              className="rounded-lg"
            />

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 rounded-full bg-coastal-mist/30">
                    <Award className="h-5 w-5 text-coastal-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">High ROI + Strong Resale Value</h3>
                    <p className="text-muted-foreground">
                      Strategic location in a developing area ensures excellent appreciation potential and strong resale demand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 rounded-full bg-coastal-mist/30">
                    <Award className="h-5 w-5 text-coastal-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Legal Certainty & Safety</h3>
                    <p className="text-muted-foreground">
                      Located outside CRZ with all necessary approvals, providing complete peace of mind for construction and development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 rounded-full bg-coastal-mist/30">
                    <Award className="h-5 w-5 text-coastal-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Dual Benefit Ecosystem</h3>
                    <p className="text-muted-foreground">
                      Enjoy both capital appreciation and a premium leisure lifestyle, with rental income opportunities through resort-serviced villas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 rounded-full bg-coastal-mist/30">
                    <Award className="h-5 w-5 text-coastal-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Exclusive Membership Benefits</h3>
                    <p className="text-muted-foreground">
                      Complimentary resort membership until 2028, including stays at Bay Parck and partner properties, with significant discounts on amenities.
                    </p>
                  </div>
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
              "url('https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-luxe relative z-10 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="mb-6">Ready to Invest in Coastal Luxury?</h2>
            <p className="text-xl mb-8">
              Contact us today to learn more about our exclusive beachfront plots and resort offerings.
            </p>
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
