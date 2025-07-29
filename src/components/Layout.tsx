
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
      
      {/* Instagram Feed Section */}
      <section className="bg-coastal-ivory/30 py-12">
        <div className="container-luxe">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 text-coastal-navy">
            Live from Instagram
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <iframe 
                src="https://cdn.lightwidget.com/widgets/YOUR_WIDGET_ID.html" 
                scrolling="no" 
                allowTransparency={true}
                className="lightwidget-widget w-full border-0" 
                style={{ minHeight: '400px', overflow: 'hidden' }}
              />
            </div>
            <p className="text-center mt-6">
              <a 
                href="https://www.instagram.com/svnbayparck" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coastal-navy hover:text-coastal-blue transition-colors font-medium"
              >
                👉 Follow us on Instagram @svnbayparck
              </a>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Layout;
