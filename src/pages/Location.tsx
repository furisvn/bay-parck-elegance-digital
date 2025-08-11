import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TreasureHunt from '../components/TreasureHunt';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const Location = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
  const handleScroll = () => {
      const sections = ['overview', 'distances', 'nearby', 'map', 'planner'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const distances = [{
    place: 'Chennai–Kolkata Highway',
    distance: '10 km'
  }, {
    place: 'Pydibhimavaram Pharma SEZ',
    distance: '15 km'
  }, {
    place: 'Srikakulam City',
    distance: '30 km'
  }, {
    place: 'Bhogapuram Intl. Airport',
    distance: '35 km'
  }, {
    place: 'Vizianagaram City',
    distance: '40 km'
  }, {
    place: 'Visakhapatnam (Vizag)',
    distance: '80 km'
  }];

  const handleSectionClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return <Layout>
      <HeroSection backgroundUrl="https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" title="Location" subtitle="Strategically positioned for convenience, accessibility, and natural beauty." height="large" />
      
      {/* Section Navigation */}
      <div className="sticky top-20 bg-white z-30 border-b border-gray-200">
        <div className="container-luxe">
          <div className="flex overflow-x-auto py-4 scrollbar-hide">
            <div className="flex space-x-6">
              {[{
              id: 'overview',
              label: 'Overview'
            }, {
              id: 'distances',
              label: 'Key Distances'
            }, {
              id: 'nearby',
              label: 'Nearby Hotspots'
            }, {
              id: 'map',
              label: 'Map'
            }, {
              id: 'planner',
              label: 'Trip Planner'
            }].map(item => <button key={item.id} onClick={() => handleSectionClick(item.id)} className={`whitespace-nowrap px-1 py-2 text-sm font-medium border-b-2 transition-colors ${activeSection === item.id ? 'border-coastal-blue text-coastal-blue' : 'border-transparent text-muted-foreground hover:text-coastal-blue hover:border-coastal-mist'}`}>
                  {item.label}
                </button>)}
            </div>
          </div>
        </div>
      </div>
      
      {/* Overview Section */}
      <section id="overview" className="section-padding">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <MapPin className="h-10 w-10 text-coastal-blue mb-4" />
              <h2 className="text-3xl lg:text-4xl mb-6">Strategic Location</h2>
              <p className="text-lg mb-4">
                SVN Bay Parck is strategically located at Koshta Junction, Jeerupalem, in the Srikakulam District of Andhra Pradesh, India. This prime location offers the perfect balance of serenity and accessibility.
              </p>
              
              <p className="text-muted-foreground mb-4">
                Situated near the Chennai-Kolkata Highway, our property enjoys excellent connectivity to major cities while being nestled in a pristine coastal environment. The upcoming Bhogapuram International Airport, just 35 km away, will further enhance accessibility and investment potential.
              </p>
              
              <p className="text-muted-foreground">
                The proximity to Visakhapatnam city (80 km) and the Pydibhimavaram Pharma SEZ (15 km) makes this an attractive location for both residential and investment purposes, with significant growth potential in the coming years.
              </p>
              
              <div className="pt-6">
                <address className="not-italic flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-1 text-coastal-blue" />
                  <div>
                    <strong>SVN Bay Parck</strong><br />
                    Koshta Junction, Jeerupalem,<br />
                    Srikakulam District,<br />
                    Andhra Pradesh, India
                  </div>
                </address>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[500px]">
              <img alt="Aerial view of location" src="/lovable-uploads/7bfb9ed6-bb2b-42fd-9ea4-cb2e08426f70.jpg" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Distances Section */}
      <section id="distances" className="section-padding bg-coastal-ivory/30">
        <div className="container-luxe">
          <SectionTitle pretitle="Connectivity" title="Key Distances" subtitle="SVN Bay Parck enjoys excellent connectivity to major landmarks and transportation hubs." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {distances.map((item, index) => <div key={index} className="luxury-card rounded-md flex items-center justify-between">
                <div>
                  <h3 className="text-xl mb-1">{item.place}</h3>
                  <p className="text-muted-foreground">{item.distance}</p>
                </div>
                <div className="bg-coastal-mist/20 h-16 w-16 flex items-center justify-center rounded-full">
                  <span className="text-lg font-medium">{item.distance}</span>
                </div>
              </div>)}
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-6 flex items-center">
              <span className="mr-2">Transportation Options</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="text-xl font-medium">By Air</h4>
                <p className="text-muted-foreground">
                  Currently served by Visakhapatnam International Airport (80 km). The upcoming Bhogapuram International Airport will be just 35 km away.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-medium">By Road</h4>
                <p className="text-muted-foreground">
                  Well-connected via Chennai-Kolkata Highway, with excellent road infrastructure. Regular bus services available from major cities.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-medium">By Rail</h4>
                <p className="text-muted-foreground">
                  Nearest railway stations include Srikakulam Road (30 km) and Vizianagaram Junction (40 km) with connections to all major cities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nearby Hotspots */}
      <section id="nearby" className="section-padding">
        <div className="container-luxe">
          <SectionTitle pretitle="Neighborhood" title="Nearby Hotspots" subtitle="Discover the attractions and conveniences surrounding SVN Bay Parck." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl mb-6">Points of Interest</h3>
              
              <ul className="space-y-6">
                {[{
                name: 'Natavalasa Junction',
                description: 'Commercial hub with essential services and shopping options.',
                distance: '15 km'
              }, {
                name: 'Ranastalam',
                description: 'Historic town with cultural significance and local markets.',
                distance: '20 km'
              }, {
                name: 'Oakridge International School',
                description: 'Premier educational institution offering world-class education.',
                distance: '45 km'
              }, {
                name: 'Simhachalam Temple',
                description: 'Ancient Hindu temple dedicated to Lord Narasimha, a popular pilgrimage site.',
                distance: '70 km'
              }].map((item, index) => <li key={index} className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 text-coastal-blue" />
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{item.name}</h4>
                        <span className="text-sm text-muted-foreground">{item.distance}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </li>)}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl mb-6">Cities & Towns</h3>
              
              <ul className="space-y-6">
                {[{
                name: 'Srikakulam',
                description: 'District headquarters with hospitals, educational institutions, and shopping centers.',
                distance: '30 km'
              }, {
                name: 'Vizianagaram',
                description: 'Historic city known for its fort, palace, and cultural heritage.',
                distance: '40 km'
              }, {
                name: 'Visakhapatnam (Vizag)',
                description: 'Major port city with international airport, beaches, and metropolitan amenities.',
                distance: '80 km'
              }, {
                name: 'Bheemili',
                description: 'Coastal town with Dutch colonial history and beautiful beaches.',
                distance: '65 km'
              }].map((item, index) => <li key={index} className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 text-coastal-blue" />
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{item.name}</h4>
                        <span className="text-sm text-muted-foreground">{item.distance}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </li>)}
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-coastal-mist/20 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl mb-4">Natural Attractions</h3>
                  <p className="text-muted-foreground mb-6">
                    SVN Bay Parck is surrounded by pristine natural beauty, including unspoiled beaches, lush coconut groves, and scenic coastal landscapes. The property offers the perfect blend of natural serenity and modern convenience.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <ArrowUpRight className="h-5 w-5 mr-2 text-coastal-blue" />
                      <span>Pristine beaches with golden sands</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowUpRight className="h-5 w-5 mr-2 text-coastal-blue" />
                      <span>Scenic coastal viewpoints</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowUpRight className="h-5 w-5 mr-2 text-coastal-blue" />
                      <span>Lush coconut groves</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowUpRight className="h-5 w-5 mr-2 text-coastal-blue" />
                      <span>Sunrise and sunset viewing spots</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden h-[300px]">
                  <img src="/lovable-uploads/9e996b5b-12f7-4ef9-89dd-189d5dcf6ba5.png" alt="Beach cabana with white curtains overlooking the ocean" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section id="map" className="section-padding bg-coastal-ivory/30">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Interactive Map"
            title="Find Your Way to Paradise"
            subtitle="Explore the exact location of SVN Bay Parck and plan your visit."
          />
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="aspect-[16/9] w-full mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.5078040655417!2d83.7581077!3d18.140506799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c0f0027cff3bb%3A0xeabdd61628bb3c6!2sSVN%20Bay%20Parck!5e0!3m2!1sen!2sin!4v1751623516940!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{border: 0, borderRadius: '12px'}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SVN Bay Parck Location"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl mb-6">Directions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-3">From Visakhapatnam (Vizag):</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Take NH16 (Chennai-Kolkata Highway) heading northeast</li>
                    <li>Continue for approximately 70 km</li>
                    <li>Take the exit towards Jeerupalem/Koshta Junction</li>
                    <li>Follow the signs to SVN Bay Parck (10 km from highway)</li>
                  </ol>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">From Srikakulam:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Take NH16 heading southwest</li>
                    <li>Continue for approximately 25 km</li>
                    <li>Take the exit towards Jeerupalem/Koshta Junction</li>
                    <li>Follow the signs to SVN Bay Parck (5 km from highway)</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="https://goo.gl/maps" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Get Directions
                </a>
                <a href="/contact" className="btn-outline">
                  Contact for Assistance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trip Planner Section */}
      <section id="planner" className="section-padding">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Plan Your Journey"
            title="Trip Planner"
            subtitle="Get directions to SVN Bay Parck from your location and plan your visit with ease."
          />
          
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h3 className="text-2xl mb-4 text-coastal-navy">Get Directions</h3>
            <p className="text-muted-foreground mb-8">
              Open Google Maps and get step-by-step directions from your location to SVN Bay Parck with a single click.
            </p>
            
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=SVN+Bay+Parck,+Koshta+Junction,+Srikakulam,+Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-coastal-blue to-coastal-mist rounded-lg hover:from-coastal-blue/90 hover:to-coastal-mist/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Treasure Hunt Section */}
      <section id="treasure-hunt" className="section-padding bg-coastal-ivory/30">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Interactive Experience"
            title="🏝️ SVN Treasure Hunt"
            subtitle="Tap around our coastal map and uncover hidden treasures. Can you find them all?"
          />
          
          <TreasureHunt />
        </div>
      </section>
    </Layout>;
};

export default Location;
