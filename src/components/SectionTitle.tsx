
import React from 'react';

interface SectionTitleProps {
  pretitle?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  pretitle, 
  title, 
  subtitle,
  alignment = 'center'
}) => {
  return (
    <div className={`max-w-2xl mx-auto mb-12 md:mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      {pretitle && (
        <p className="uppercase tracking-widest text-coastal-blue font-medium text-sm mb-2">
          {pretitle}
        </p>
      )}
      <h2 className="mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
