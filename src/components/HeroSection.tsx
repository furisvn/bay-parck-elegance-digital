
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  backgroundUrl: string;
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonLink?: string;
  secondaryButtonLabel?: string;
  secondaryButtonLink?: string;
  overlay?: boolean;
  height?: 'full' | 'large' | 'medium';
  scrollTo?: string;
  isVideo?: boolean;
}

const HeroSection = ({
  backgroundUrl,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  secondaryButtonLabel,
  secondaryButtonLink,
  overlay = true,
  height = 'full',
  scrollTo,
  isVideo = false,
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heightClass = {
    full: "h-screen",
    large: "h-[80vh]",
    medium: "h-[60vh]",
  }[height];

  const handleScroll = () => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <section className={`relative ${heightClass} w-full overflow-hidden`}>
      {isVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundUrl} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        />
      )}
      
      {overlay && (
        <div className="absolute inset-0 bg-black/30" />
      )}
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <div className={`max-w-4xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-white mb-6">{title}</h1>
          
          {subtitle && (
            <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto font-light mb-8">
              {subtitle}
            </p>
          )}
          
          {(buttonLabel || secondaryButtonLabel) && (
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              {buttonLabel && (
                <a
                  href={buttonLink || "#"}
                  className="btn-primary"
                >
                  {buttonLabel}
                </a>
              )}
              
              {secondaryButtonLabel && (
                <a
                  href={secondaryButtonLink || "#"}
                  className="btn-outline border-white text-white hover:bg-white hover:text-coastal-navy"
                >
                  {secondaryButtonLabel}
                </a>
              )}
            </div>
          )}
        </div>
        
        {scrollTo && (
          <button
            onClick={handleScroll}
            className="absolute bottom-8 animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8 text-white" />
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
