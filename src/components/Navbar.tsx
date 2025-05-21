
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Real Estate', path: '/real-estate' },
    { name: 'Resort', path: '/resort' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-luxe">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img 
              src="/lovable-uploads/d8698e8d-c7f9-454e-9a42-acc17d508ccd.png" 
              alt="SVN Bay Parck Logo" 
              className="h-12 md:h-14"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-coastal-blue'
                    : 'text-foreground hover:text-coastal-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary text-sm uppercase tracking-widest"
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden animate-fade-in">
          <div className="container-luxe py-28">
            <nav className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl uppercase tracking-widest font-light transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-coastal-blue'
                      : 'text-foreground hover:text-coastal-blue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary inline-block w-fit text-sm uppercase tracking-widest"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
