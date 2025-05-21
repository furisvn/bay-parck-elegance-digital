
import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`luxury-card ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {Icon && (
        <div className="mb-6">
          <Icon className="w-10 h-10 text-coastal-blue" />
        </div>
      )}
      <h3 className="text-xl md:text-2xl mb-4">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
