import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-coastal-navy text-white py-12 md:py-16">
      <div className="container-luxe">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <Link to="/">
              <img alt="SVN Bay Parck Logo" src="/lovable-uploads/5a0b2397-c6f7-42d7-89b8-85ce634e0e51.png" className="h-12 mb-4  object-fill" />
            </Link>
            <p className="text-sm text-coastal-ivory/80">
              Discover a rare fusion of CRZ-compliant premium plots, signature sea-facing villas, and an exclusive boutique resort — all in one gated estate.
            </p>
            <div className="pt-2 space-y-1">
              <p className="text-sm">
                <span className="font-medium">Phone: </span>
                <a href="tel:+918599924242" className="hover:underline">+91 85999 24242</a>
                {" / "}
                <a href="tel:+918599936363" className="hover:underline">+91 85999 36363</a>
              </p>
              <p className="text-sm">
                <span className="font-medium">Email: </span>
                <a href="mailto:info@svnsjd.com" className="hover:underline">info@svnsjd.com</a>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Real Estate', 'Resort', 'Gallery', 'Location', 'Blog', 'Contact'].map(item => <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-coastal-ivory/80 hover:text-white hover:underline transition-colors">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          {/* Address */}
          <div>
            <h3 className="text-xl font-medium mb-4">Location</h3>
            <address className="not-italic text-coastal-ivory/80">
              Koshta Junction, Jeerupalem,<br />
              Srikakulam District,<br />
              Andhra Pradesh, India<br /><br />
              <span className="text-sm">Near Chennai–Kolkata Highway | Close to Vizag, Bhogapuram Airport & Pharma SEZ</span>
            </address>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-xl font-medium mb-4">Legal & Approvals</h3>
            <ul className="text-sm space-y-2 text-coastal-ivory/80">
              <li>LP No. 31/2020/1178 / DTCP / DPMS</li>
              <li>AP RERA No: P01070381701</li>
              <li>SUDA Approved</li>
              <li>Located outside the Coastal Regulation Zone (CRZ)</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-coastal-ivory/20 mt-12 pt-8 text-center text-sm text-coastal-ivory/60">
          <p>&copy; {new Date().getFullYear()} SVN Bay Parck. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;