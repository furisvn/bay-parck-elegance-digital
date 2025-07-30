import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Check, Home } from 'lucide-react';
import ImageReveal from '../components/ImageReveal';
import { Link } from 'react-router-dom';

const RealEstate = () => {
  return (
    <Layout>
      <HeroSection
        backgroundUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Premium Beachfront Real Estate"
        subtitle="Freehold plots and luxury villas in a pristine coastal setting"
        height="large"
      />

      {/* Plots Section */}
      <section id="plots" className="section-padding">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Premium Plots"
            title="Own a Piece of Coastal Paradise"
            subtitle="206 meticulously planned freehold plots in a coconut grove layout with stunning sea views."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl">Plot Details</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Total Plots: 206</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Plot Sizes: 200-267 sq yds</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Ownership: Freehold, clearly demarcated</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Layout: Coconut grove with scenic beauty</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Legal Status: Outside CRZ, 100% safe to build</span>
                </li>
              </ul>
              
              <h3 className="text-2xl lg:text-3xl pt-4">Infrastructure Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>60 ft & 40 ft BT Internal Roads</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Underground Electrical Lines & Drainage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Avenue Plantation, Street Lighting</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Water & Electricity Supply</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-3 text-coastal-blue" />
                  <span>Comprehensive Security Systems</span>
                </li>
              </ul>
              
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a href="#" className="btn-primary">
                  Download Brochure
                </a>
                <a href="https://wa.me/918599924242" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
            
            <ImageReveal
              src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
              alt="SVN Bay Parck Plots"
              height="h-[600px]"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      
      {/* Villas Section */}
      <section id="villas" className="section-padding bg-coastal-ivory/30">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Luxury Villas"
            title="Signature Sea-Facing Villas"
            subtitle="Contemporary designed villas with panoramic sea views, fully serviced by our resort."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 2 BHK Villa Card */}
            <div className="luxury-card rounded-lg overflow-hidden hover-scale">
              <div className="h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="2 BHK Villa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">2 BHK Luxury Villa</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>1000 sft Built-Up Area</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>1600 sft Slab Area</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Panoramic Sea Views</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Fully Furnished</span>
                  </li>
                </ul>
                <a href="/contact" className="btn-outline w-full block text-center">
                  Enquire Now
                </a>
              </div>
            </div>
            
            {/* 4 BHK Villa Card */}
            <div className="luxury-card rounded-lg overflow-hidden hover-scale">
              <div className="h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="4 BHK Villa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">4 BHK Luxury Villa</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>2000 sft Built-Up Area</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>2600 sft Slab Area</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Panoramic Sea Views</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Fully Furnished</span>
                  </li>
                </ul>
                <a href="/contact" className="btn-outline w-full block text-center">
                  Enquire Now
                </a>
              </div>
            </div>
            
            {/* Villa Benefits Card */}
            <div className="luxury-card rounded-lg bg-coastal-navy text-white">
              <div className="p-8">
                <Home className="h-12 w-12 mb-6 text-coastal-ivory/90" />
                <h3 className="text-2xl mb-6">Villa Ownership Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1 text-coastal-ivory/80" />
                    <span>Rental income potential through resort management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1 text-coastal-ivory/80" />
                    <span>Full access to all resort amenities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1 text-coastal-ivory/80" />
                    <span>Professional property maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1 text-coastal-ivory/80" />
                    <span>Concierge services for owners and guests</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1 text-coastal-ivory/80" />
                    <span>Strong potential for capital appreciation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Investment Value */}
      <section className="section-padding">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Investment Value"
            title="Why Invest in SVN Bay Parck"
            subtitle="A premium investment opportunity with compelling advantages."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/lovable-uploads/fd776e3d-38e8-466e-a9a4-1b4683d83469.png"
                  alt="Investment Value"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl">Value Proposition</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-coastal-blue rounded-full p-1 mt-1 mr-4">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">High ROI + Strong Resale Value</h4>
                    <p className="text-muted-foreground">Strategic location ensures significant appreciation potential over time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-coastal-blue rounded-full p-1 mt-1 mr-4">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Located Outside CRZ – 100% Safe to Build</h4>
                    <p className="text-muted-foreground">Complete legal clarity with all necessary approvals in place.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-coastal-blue rounded-full p-1 mt-1 mr-4">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Flexible Payment Plans</h4>
                    <p className="text-muted-foreground">Various payment options designed to accommodate different financial preferences.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-coastal-blue rounded-full p-1 mt-1 mr-4">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Dual Benefit: Capital Appreciation + Leisure Lifestyle</h4>
                    <p className="text-muted-foreground">Not just an investment but a premium lifestyle opportunity with resort access.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-coastal-blue rounded-full p-1 mt-1 mr-4">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Rental Income Potential</h4>
                    <p className="text-muted-foreground">Opportunity for rental income through resort-serviced villas program.</p>
                  </div>
                </li>
              </ul>
              
              <div className="pt-4">
                <Link to="/contact" className="btn-primary">
                  Schedule a Site Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Current Offers */}
      <section className="section-padding bg-coastal-ivory/30">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Limited Time"
            title="Current Offers"
            subtitle="Special benefits for early investors in SVN Bay Parck."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="luxury-card text-center">
              <div className="h-16 w-16 rounded-full bg-coastal-mist/30 flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80" 
                  alt="Resort Stay" 
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl mb-4">Free 4 Nights Stay</h3>
              <p className="text-muted-foreground">
                Complimentary stays at Bay Parck (2 nights) and SVN partner resorts (2 nights)
              </p>
            </div>
            
            <div className="luxury-card text-center">
              <div className="h-16 w-16 rounded-full bg-coastal-mist/30 flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80" 
                  alt="Membership" 
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl mb-4">Resort Membership</h3>
              <p className="text-muted-foreground">
                Complimentary membership valid until 31st December 2028
              </p>
            </div>
            
            <div className="luxury-card text-center">
              <div className="h-16 w-16 rounded-full bg-coastal-mist/30 flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80" 
                  alt="Discounts" 
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl mb-4">Special Discounts</h3>
              <p className="text-muted-foreground">
                10-25% discounts on food, spa services, and additional stays
              </p>
            </div>
            
            <div className="luxury-card text-center">
              <div className="h-16 w-16 rounded-full bg-coastal-mist/30 flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1575500221017-ea5e7b7d0e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80" 
                  alt="Welcome Package" 
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl mb-4">Welcome Package</h3>
              <p className="text-muted-foreground">
                Exclusive welcome package with premium amenities upon booking
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Avail Now
            </Link>
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
        <div className="absolute inset-0 bg-coastal-navy/70 backdrop-blur-sm" />
        <div className="container-luxe relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="mb-6">Secure Your Coastal Paradise</h2>
            <p className="text-xl mb-8">
              Limited plots available. Contact us today to book a site visit or reserve your plot.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary bg-white text-coastal-navy hover:bg-transparent hover:text-white hover:border-white">
                Contact Us
              </Link>
              <a 
                href="https://wa.me/918599924242" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-coastal-navy"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RealEstate;
