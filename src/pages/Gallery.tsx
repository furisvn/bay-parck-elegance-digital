
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
        src: "/lovable-uploads/8aeedb25-c9c8-4946-836e-488836d22339.png",
        alt: "Resort Villa Exterior Night View",
        category: "resort"
      },
      {
        src: "/lovable-uploads/a8e6613b-2fc2-455c-a9a8-53105f5d39f7.png",
        alt: "Modern Resort Villa Design",
        category: "resort"
      },
      {
        src: "/lovable-uploads/eb516588-3335-48ba-a53c-92e818d53921.png",
        alt: "Resort Room Interior",
        category: "resort"
      },
      {
        src: "/lovable-uploads/d71973ad-24a9-4210-9698-61da55c60a39.png",
        alt: "Resort Villa with Pool",
        category: "resort"
      },
      {
        src: "/lovable-uploads/7e74da5a-7cce-44f6-adf1-5043d5e90727.png",
        alt: "Luxury Resort Suite",
        category: "resort"
      },
      {
        src: "/lovable-uploads/e9af2e4b-7e8a-4a49-841e-6fba69723d3a.png",
        alt: "Resort Room with Ocean View",
        category: "resort"
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
        src: "/lovable-uploads/e4bf3ceb-513f-4d19-b2ea-75d7f661a57b.png",
        alt: "Basketball Court",
        category: "amenities"
      },
      {
        src: "/lovable-uploads/57b8df75-4f58-4af7-8cd5-da61f86a9cde.png",
        alt: "Multi-Sport Court",
        category: "amenities"
      },
      {
        src: "/lovable-uploads/8d6110ec-bc34-40ee-8bf8-1598c584e644.png",
        alt: "Football Court",
        category: "amenities"
      },
      {
        src: "/lovable-uploads/9c6868e9-1405-45d3-926c-88d863ede679.png",
        alt: "Beach ATV Adventure",
        category: "amenities"
      },
    ],
    events: [
      {
        src: "/lovable-uploads/79d4d11d-206b-4670-a9a9-12bb8f7be829.png",
        alt: "Engagement Ceremony Event",
        category: "events"
      },
      {
        src: "/lovable-uploads/e4b7532b-cac4-4889-bcb7-1ef533d92ebf.png",
        alt: "Traditional Wedding Setup",
        category: "events"
      },
      {
        src: "/lovable-uploads/d245195c-2465-40e2-af62-aaf99c68904f.png",
        alt: "Ceremonial Event Hall",
        category: "events"
      },
    ],
  };
  
  const [activeCategory, setActiveCategory] = useState<'resort' | 'multiPurposeHall' | 'amenities' | 'events'>('resort');
  
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
      case 'multiPurposeHall':
        return 'Multi Purpose Hall';
      case 'amenities':
        return 'Amenities';
      case 'events':
        return 'Events';
      case 'resort':
        return 'Resort';
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
              {['resort', 'multiPurposeHall', 'amenities', 'events'].map((category) => (
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
