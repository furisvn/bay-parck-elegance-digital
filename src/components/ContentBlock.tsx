
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

interface ContentBlockProps {
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const ContentBlock = ({
  title,
  content,
  image,
  imageAlt,
  reverse = false,
  ctaText,
  ctaLink,
}: ContentBlockProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={blockRef}
      className={`editorial-section ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Image */}
      <div className="overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src={image}
          alt={imageAlt}
          className={`object-cover w-full h-full transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
        <h3 className="text-3xl md:text-4xl">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
        
        {ctaText && ctaLink && (
          <div className="pt-4">
            <Link to={ctaLink} className="story-link font-medium">
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentBlock;
