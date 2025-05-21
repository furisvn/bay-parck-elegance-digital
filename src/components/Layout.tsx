
import { PropsWithChildren, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsappButton from './WhatsappButton';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }: PropsWithChildren) => {
  const { pathname, hash } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle smooth scrolling
  useEffect(() => {
    // If hash exists, scroll to the element
    if (hash) {
      // Delay to ensure all content is rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Scroll to top when navigating to a new page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Layout;
