
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ImageReveal from '../components/ImageReveal';
import { Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resort = () => {
  return (
    <Layout>
      <HeroSection
        backgroundUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Luxury Resort Experience"
        subtitle="Indulge in our exclusive boutique resort with world-class amenities"
        height="large"
      />

      {/* Resort Overview */}
      <section className="section-padding">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Resort Experience"
            title="Discover Coastal Luxury"
            subtitle="Our boutique resort offers a perfect blend of luxury, comfort, and natural beauty."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                The SVN Bay Parck Resort is an exclusive boutique destination set amidst pristine coastal surroundings. Spanning 15 acres within our 40-acre estate, the resort is designed to offer an unparalleled experience of luxury and relaxation.
              </p>
              
              <p className="text-muted-foreground">
                With a range of accommodation options, world-class amenities, and personalized services, our resort caters to discerning travelers seeking a perfect blend of opulence and natural beauty. Whether you're looking for a weekend getaway, a longer vacation, or a venue for special events, SVN Bay Parck Resort provides the ideal setting.
              </p>
              
              <p className="text-muted-foreground">
                The resort is designed to maximize the natural beauty of its surroundings, with thoughtful architecture that frames scenic views and integrates harmoniously with the coastal landscape. Every aspect of the resort experience has been carefully curated to ensure comfort, privacy, and memorable moments.
              </p>
              
              <div className="pt-6">
                <Link to="/contact" className="btn-primary">
                  Book Your Stay
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <ImageReveal
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Resort Pool"
                height="h-80"
                className="rounded-lg"
              />
              <ImageReveal
                src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Resort Room"
                height="h-80"
                className="rounded-lg mt-8"
              />
              <ImageReveal
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Resort Dining"
                height="h-80"
                className="rounded-lg mt-8"
              />
              <ImageReveal
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Resort Spa"
                height="h-80"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Room Categories */}
      <section className="section-padding bg-coastal-ivory/30">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Accommodations"
            title="Distinctive Room Themes"
            subtitle="Choose from our curated selection of room themes, each offering a unique stay experience."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Modern Theme */}
            <div className="luxury-card rounded-lg overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern Theme Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-4">Modern Theme</h3>
                <p className="text-muted-foreground mb-6">
                  Sleek, contemporary interiors with minimalist décor, clean lines, and state-of-the-art amenities for a stylish, comfortable stay.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Smart room controls</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Minimalist design aesthetic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Premium tech amenities</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-outline w-full block text-center">
                  Book Now
                </Link>
              </div>
            </div>
            
            {/* Rustic Theme */}
            <div className="luxury-card rounded-lg overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Rustic Theme Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-4">Rustic Theme</h3>
                <p className="text-muted-foreground mb-6">
                  Warm, wooden aesthetics with natural textures and cozy furnishing to create an inviting, earthy retreat blending with nature.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Natural materials throughout</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Handcrafted furnishings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Earthy color palette</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-outline w-full block text-center">
                  Book Now
                </Link>
              </div>
            </div>
            
            {/* Amalfi Theme */}
            <div className="luxury-card rounded-lg overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img
                  src="/lovable-uploads/0e672fcd-4a45-4675-b18b-9d2d60613202.png"
                  alt="Amalfi Theme Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-4">Amalfi Theme</h3>
                <p className="text-muted-foreground mb-6">
                  European-inspired design reflecting the charm of Italy's Amalfi Coast—bright, airy spaces with Mediterranean colors and elegant finishes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Mediterranean influences</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Bright, coastal colors</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-coastal-blue" />
                    <span>Elegant coastal decor</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-outline w-full block text-center">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Amenities Section */}
      <section className="section-padding">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Facilities"
            title="Resort Amenities"
            subtitle="Indulge in our comprehensive range of world-class facilities designed for your comfort and enjoyment."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Swimming Pool",
                description: "A stunning infinity pool with panoramic views of the coastline, perfect for relaxation and leisure.",
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "Restaurant & Entertainment",
                description: "Fine dining restaurant serving local and international cuisine, along with entertainment zones.",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "Spa & Salon",
                description: "Rejuvenate with our premium spa and salon services, offering a range of treatments and therapies.",
                image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "Banquet & Event Spaces",
                description: "Elegant venues for private events, celebrations, and corporate gatherings with scenic backdrops.",
                image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80"
              },
              {
                title: "Fitness Center",
                description: "State-of-the-art gym facilities with the latest equipment and open areas for yoga and meditation.",
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "Recreation & Sports",
                description: "Multiple options including cricket pitch, badminton, basketball, and dedicated children's play areas.",
                image: "https://images.unsplash.com/photo-1526307616774-60d0098f7854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              },
            ].map((amenity, index) => (
              <div key={index} className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3">{amenity.title}</h3>
                  <p className="text-muted-foreground">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Membership Benefits */}
      <section className="section-padding bg-coastal-navy text-white">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Exclusive Offer"
            title="Resort Membership Benefits"
            subtitle="Plot owners receive complimentary resort membership valid until 31st December 2028."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl">Membership Inclusions</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-coastal-ivory/20 rounded-full p-2">
                    <Award className="h-5 w-5 text-coastal-ivory" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Complimentary Stays</h4>
                    <p className="text-coastal-ivory/80">
                      2 nights/year stay at Bay Parck + 2 nights at SVN Lake Palace or SVN Grand
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-coastal-ivory/20 rounded-full p-2">
                    <Award className="h-5 w-5 text-coastal-ivory" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Dining Benefits</h4>
                    <p className="text-coastal-ivory/80">
                      Complimentary breakfast during stays and 10-25% discounts on all food and beverage
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-coastal-ivory/20 rounded-full p-2">
                    <Award className="h-5 w-5 text-coastal-ivory" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Facility Access</h4>
                    <p className="text-coastal-ivory/80">
                      Free access to pool, gym, and indoor games facilities during your stay
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-coastal-ivory/20 rounded-full p-2">
                    <Award className="h-5 w-5 text-coastal-ivory" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Additional Perks</h4>
                    <p className="text-coastal-ivory/80">
                      Special discounts on spa services, event bookings, and extra stays. Membership is transferable upon resale of property.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/real-estate" className="btn-primary bg-white text-coastal-navy hover:bg-transparent hover:text-white hover:border-white">
                  Explore Real Estate
                </Link>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Resort Membership"
                className="w-full h-[500px] object-cover"
              />
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
              "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-luxe relative z-10 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="mb-6">Experience Coastal Luxury</h2>
            <p className="text-xl mb-8">
              Book your stay at SVN Bay Parck Resort or inquire about our exclusive membership benefits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Book Your Stay
              </Link>
              <Link to="/real-estate" className="btn-outline border-white text-white hover:bg-white hover:text-coastal-navy">
                Explore Real Estate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resort;
