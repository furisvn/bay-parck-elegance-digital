import { useState } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = {
    resort: [
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Resort Pool",
        category: "resort"
      },
      {
        src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Resort Pool Loungers",
        category: "resort"
      },
      {
        src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Modern Room",
        category: "resort"
      },
      {
        src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
        alt: "Resort Room",
        category: "resort"
      },
      {
        src: "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
        alt: "Resort Bathroom",
        category: "resort"
      },
      {
        src: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        alt: "Resort Restaurant",
        category: "resort"
      },
    ],
    villasPlots: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Luxury Villa Exterior",
        category: "villasPlots"
      },
      {
        src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Villa Garden",
        category: "villasPlots"
      },
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Villa Exterior",
        category: "villasPlots"
      },
      {
        src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Villa Living Room",
        category: "villasPlots"
      },
      {
        src: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        alt: "Villa Bedroom",
        category: "villasPlots"
      },
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Villa Dining",
        category: "villasPlots"
      },
    ],
    landscape: [
      {
        src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Beach Landscape",
        category: "landscape"
      },
      {
        src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Sunset View",
        category: "landscape"
      },
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
        alt: "Beachfront",
        category: "landscape"
      },
      {
        src: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        alt: "Coconut Grove",
        category: "landscape"
      },
      {
        src: "https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
        alt: "Aerial View",
        category: "landscape"
      },
      {
        src: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        alt: "Coastline",
        category: "landscape"
      },
    ],
    multiPurposeHall: [
      {
        src: "/lovable-uploads/313aaa7c-5ad4-4648-a54f-63cc4d57406b.png",
        alt: "Multi Purpose Hall Wedding Setup",
        category: "multiPurposeHall"
      },
      {
        src: "/lovable-uploads/ac79544d-f3ad-4bbd-9478-ed43de5123b5.png",
        alt: "Multi Purpose Hall Ceremony Setup",
        category: "multiPurposeHall"
      },
      {
        src: "/lovable-uploads/53aa133d-a1f6-40ad-a5d9-e9d1cca88a91.png",
        alt: "Multi Purpose Hall Event Space",
        category: "multiPurposeHall"
      },
    ],
    amenities: [
      {
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Fitness Center",
        category: "amenities"
      },
      {
        src: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Spa and Wellness",
        category: "amenities"
      },
      {
        src: "https://images.unsplash.com/photo-1555448248-2571daf6344b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Swimming Pool Area",
        category: "amenities"
      },
      {
        src: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Recreational Facilities",
        category: "amenities"
      },
      {
        src: "https://images.unsplash.com/photo-1606919820299-e3b00b0dcecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Kids Play Area",
        category: "amenities"
      },
    ],
    events: [
      {
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        alt: "Wedding Event",
        category: "events"
      },
      {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        alt: "Corporate Event",
        category: "events"
      },
      {
        src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Festival Celebration",
        category: "events"
      },
      {
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Music Concert",
        category: "events"
      },
      {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Evening Event",
        category: "events"
      },
    ],
  };
  
  const [activeCategory, setActiveCategory] = useState<'resort' | 'villasPlots' | 'landscape' | 'multiPurposeHall' | 'amenities' | 'events'>('resort');
  
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case 'villasPlots':
        return 'Villas & Plots';
      case 'multiPurposeHall':
        return 'Multi Purpose Hall';
      case 'amenities':
        return 'Amenities';
      case 'events':
        return 'Events';
      case 'resort':
        return 'Resort';
      case 'landscape':
        return 'Landscape';
      default:
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };
  
  return (
    <Layout>
      <HeroSection
        backgroundUrl="https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
        title="Gallery"
        subtitle="Explore the beauty and luxury of SVN Bay Parck through our curated collection of images."
        height="large"
      />
      
      <section className="section-padding">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Visual Tour"
            title="Experience SVN Bay Parck"
            subtitle="Browse through our collection of images showcasing our resort, real estate, amenities, and events."
          />
          
          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap border border-coastal-navy rounded-md overflow-hidden">
              {['resort', 'villasPlots', 'landscape', 'multiPurposeHall', 'amenities', 'events'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category as any)}
                  className={`px-4 sm:px-6 py-3 text-xs sm:text-sm uppercase tracking-wider font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-coastal-navy text-white'
                      : 'bg-white text-coastal-navy hover:bg-coastal-mist/20'
                  }`}
                >
                  {getCategoryDisplayName(category)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages[activeCategory].map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg cursor-pointer hover-scale"
                onClick={() => handleImageClick(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
