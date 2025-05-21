
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
    realEstate: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Luxury Villa Exterior",
        category: "realEstate"
      },
      {
        src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Villa Garden",
        category: "realEstate"
      },
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Villa Exterior",
        category: "realEstate"
      },
      {
        src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Villa Living Room",
        category: "realEstate"
      },
      {
        src: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        alt: "Villa Bedroom",
        category: "realEstate"
      },
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Villa Dining",
        category: "realEstate"
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
  };
  
  const [activeCategory, setActiveCategory] = useState<'resort' | 'realEstate' | 'landscape'>('resort');
  
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
            subtitle="Browse through our collection of images showcasing our resort, real estate, and scenic landscapes."
          />
          
          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex border border-coastal-navy rounded-md overflow-hidden">
              {['resort', 'realEstate', 'landscape'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category as any)}
                  className={`px-6 py-3 text-sm uppercase tracking-wider font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-coastal-navy text-white'
                      : 'bg-white text-coastal-navy hover:bg-coastal-mist/20'
                  }`}
                >
                  {category === 'realEstate' ? 'Real Estate' : category.charAt(0).toUpperCase() + category.slice(1)}
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
