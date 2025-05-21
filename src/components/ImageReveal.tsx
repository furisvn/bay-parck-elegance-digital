
import { useEffect, useRef, useState } from 'react';

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

const ImageReveal = ({ src, alt, width = 'w-full', height = 'h-full', className = '' }: ImageRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

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

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={imgRef}
      className={`${width} ${height} overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
        loading="lazy"
      />
    </div>
  );
};

export default ImageReveal;
