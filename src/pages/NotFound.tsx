
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-coastal-ivory/30">
      <div className="container max-w-2xl text-center p-6">
        <img 
          src="/lovable-uploads/d8698e8d-c7f9-454e-9a42-acc17d508ccd.png" 
          alt="SVN Bay Parck Logo" 
          className="h-16 mx-auto mb-8" 
        />
        
        <h1 className="text-5xl md:text-7xl font-light mb-8">404</h1>
        <h2 className="text-2xl md:text-3xl font-light mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-12">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link to="/" className="btn-primary inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
