
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ContentBlock from '../components/ContentBlock';
import FeatureCard from '../components/FeatureCard';
import { CheckCircle, MapPin, Palmtree, Shield, Landmark, PenLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Index = () => {
  const [isInvestmentSectionVisible, setIsInvestmentSectionVisible] = useState(false);
  const investmentSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInvestmentSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (investmentSectionRef.current) {
      observer.observe(investmentSectionRef.current);
    }

    return () => {
      if (investmentSectionRef.current) {
        observer.unobserve(investmentSectionRef.current);
      }
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundUrl="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Experience Coastal Elegance Like Never Before"
        subtitle="Discover a rare fusion of CRZ-compliant premium plots, signature sea-facing villas, and an exclusive boutique resort — all in one gated estate."
        buttonLabel="Explore Real Estate"
        buttonLink="/real-estate"
        secondaryButtonLabel="Book Your Stay"
        secondaryButtonLink="/resort"
        scrollTo="overview"
        height="full"
      />

      {/* Overview Section */}
      <section id="overview" className="section-padding bg-coastal-ivory/30">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Project Overview"
            title="SVN Bay Parck"
            subtitle="A 40-acre gated coastal sanctuary offering beachfront plots, luxury villas, and an exclusive resort experience near Visakhapatnam."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={MapPin}
              title="Prime Location"
              description="Situated at Koshta Junction, Jeerupalem, near the Chennai-Kolkata Highway with proximity to Vizag and the upcoming Bhogapuram International Airport."
              delay={0}
            />
            <FeatureCard
              icon={Shield}
              title="Legal Clarity"
              description="Fully approved with LP No. 31/2020/1178, AP RERA No: P01070381701, SUDA approval, and located outside the Coastal Regulation Zone (CRZ)."
              delay={200}
            />
            <FeatureCard
              icon={Palmtree}
              title="Beachfront Living"
              description="206 premium plots ranging from 200-267 sq yds in a coconut grove layout, complemented by a boutique beach resort with world-class amenities."
              delay={400}
            />
          </div>

          <div className="mt-16 md:mt-24">
            <ContentBlock
              title="Beachfront Real Estate"
              content="SVN Bay Parck offers 206 meticulously planned freehold plots ranging from 200-267 sq yds. Each plot features clear demarcation, 60ft & 40ft BT internal roads, underground electrical lines, drainage systems, avenue plantation, and comprehensive utilities infrastructure. Investment opportunities include potential for high ROI, strong resale value, and flexible payment plans."
              image="/lovable-uploads/4463b6e6-24e7-4604-810f-a7804c5d5ccc.png"
              imageAlt="SVN Bay Parck Residential Plots View"
              ctaText="Explore Real Estate"
              ctaLink="/real-estate"
            />
          </div>

          <div className="mt-16 md:mt-24">
            <ContentBlock
              title="Luxury Resort Experience"
              content="Our boutique resort offers modern, rustic, and Amalfi-themed accommodations, each designed to provide a unique stay experience. Enjoy world-class amenities including a swimming pool, restaurant, spa, gym, and recreational facilities. Plot owners receive exclusive resort membership valid until December 2028, with complimentary stays and significant discounts."
              image="/lovable-uploads/b59151f0-01b5-4dbc-9abc-a22e5368bdd8.png"
              imageAlt="SVN Bay Parck Luxury Resort Experience"
              reverse={true}
              ctaText="Discover Our Resort"
              ctaLink="/resort"
            />
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section ref={investmentSectionRef} className="section-padding bg-coastal-navy text-white">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Investment Value"
            title="Why Invest in SVN Bay Parck"
            subtitle="A unique opportunity that combines premium real estate with exclusive lifestyle benefits."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "High ROI Potential",
                description: "Strategic location ensures strong appreciation and resale value over time."
              },
              {
                title: "Legal Certainty",
                description: "Located outside CRZ with all approvals in place, making it 100% safe to build."
              },
              {
                title: "Flexible Payment Plans",
                description: "Various payment options designed to accommodate different financial preferences."
              },
              {
                title: "Dual Benefits",
                description: "Enjoy both capital appreciation and a premium leisure lifestyle in one investment."
              },
              {
                title: "Rental Income",
                description: "Option for rental income through resort-serviced villas program."
              },
              {
                title: "Exclusive Membership",
                description: "Complimentary resort membership with stays at Bay Parck and partner properties."
              }
            ].map((item, index) => (
              <div key={index} className={`p-6 border-b border-white/20 ${isInvestmentSectionVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 mt-1 text-coastal-ivory/80" />
                  <div>
                    <h3 className="text-xl mb-2">{item.title}</h3>
                    <p className="text-coastal-ivory/80">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Amenities */}
      <section className="section-padding">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Resort Amenities"
            title="World-Class Facilities"
            subtitle="Indulge in exceptional amenities designed for relaxation, recreation, and rejuvenation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: Palmtree, title: "Swimming Pool" },
              { icon: Landmark, title: "Restaurant & Entertainment" },
              { icon: PenLine, title: "Spa & Salon Services" },
              { icon: Shield, title: "Security Services" },
              { icon: Palmtree, title: "Banquet Hall" },
              { icon: Landmark, title: "Mini & Open Gyms" },
              { icon: PenLine, title: "Sports Facilities" },
              { icon: Shield, title: "Children's Play Area" }
            ].map((amenity, index) => (
              <div key={index} className="text-center p-6 bg-coastal-mist/10 hover:bg-coastal-mist/20 transition-colors duration-300">
                <amenity.icon className="h-8 w-8 mx-auto mb-4 text-coastal-blue" />
                <h3 className="text-xl">{amenity.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/resort" className="btn-primary">
              Explore All Amenities
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
              "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-luxe relative z-10 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="mb-6">Begin Your Coastal Journey</h2>
            <p className="text-xl mb-8">
              Schedule a site visit or request more information about our exclusive beachfront offerings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/real-estate" className="btn-outline border-white text-white hover:bg-white hover:text-coastal-navy">
                View Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
