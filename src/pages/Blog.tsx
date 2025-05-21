
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

interface BlogPost {
  title: string;
  author: string;
  pubDate: string;
  thumbnail: string;
  link: string;
  content: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        
        // This would typically be a call to the RSS2JSON API or similar service
        // For this example, we'll use placeholder data
        
        // Simulating API response delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const placeholderPosts: BlogPost[] = [
          {
            title: "The Rise of Coastal Real Estate in Andhra Pradesh",
            author: "SVN Developers",
            pubDate: "2025-05-15",
            thumbnail: "https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
            link: "https://medium.com/@furisvn",
            content: "Coastal real estate in Andhra Pradesh is experiencing unprecedented growth, driven by infrastructure development, tourism initiatives, and increasing interest from investors..."
          },
          {
            title: "Why Beachfront Properties Are the Ultimate Investment",
            author: "SVN Developers",
            pubDate: "2025-05-01",
            thumbnail: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            link: "https://medium.com/@furisvn",
            content: "Beachfront properties have consistently outperformed other real estate segments in terms of value appreciation. The combination of limited supply and growing demand creates..."
          },
          {
            title: "Understanding CRZ Regulations for Coastal Development",
            author: "SVN Developers",
            pubDate: "2025-04-20",
            thumbnail: "https://images.unsplash.com/photo-1515862214497-7814d31bf5e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
            link: "https://medium.com/@furisvn",
            content: "Coastal Regulation Zone (CRZ) norms play a crucial role in determining what can be built along India's coastline. Understanding these regulations is essential for investors..."
          },
          {
            title: "The Luxury Resort Experience: What Sets Bay Parck Apart",
            author: "SVN Developers",
            pubDate: "2025-04-10",
            thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            link: "https://medium.com/@furisvn",
            content: "The modern luxury resort experience goes beyond opulent accommodations. At Bay Parck, we've reimagined coastal luxury with a focus on personalized service, sustainable practices..."
          },
          {
            title: "Visakhapatnam: The Emerging Coastal Metropolis",
            author: "SVN Developers",
            pubDate: "2025-03-28",
            thumbnail: "https://images.unsplash.com/photo-1596442220653-c25647a81d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            link: "https://medium.com/@furisvn",
            content: "Visakhapatnam (Vizag) is rapidly transforming into a major economic and tourism hub on India's eastern coast. With major infrastructure projects like the Bhogapuram International Airport..."
          },
          {
            title: "Designing Coastal Villas: Architecture That Harmonizes With Nature",
            author: "SVN Developers",
            pubDate: "2025-03-15",
            thumbnail: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            link: "https://medium.com/@furisvn",
            content: "The architectural philosophy behind Bay Parck villas emphasizes harmony with the coastal environment. From sustainable materials to designs that maximize natural light and sea breezes..."
          }
        ];
        
        setPosts(placeholderPosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
        console.error('Error fetching blog posts:', err);
      }
    };
    
    fetchBlogPosts();
  }, []);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <Layout>
      <HeroSection
        backgroundUrl="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        title="Blog"
        subtitle="Insights, updates, and stories from the world of luxury coastal living and real estate."
        height="large"
      />
      
      <section className="section-padding">
        <div className="container-luxe">
          <SectionTitle
            pretitle="Our Stories"
            title="Latest from SVN Bay Parck"
            subtitle="Explore our collection of articles on coastal living, real estate insights, and luxury lifestyle."
          />
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-pulse text-center">
                <div className="h-10 w-40 bg-coastal-mist/30 rounded mx-auto mb-4"></div>
                <div className="h-6 w-64 bg-coastal-mist/20 rounded mx-auto"></div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">{error}</p>
              <a 
                href="https://medium.com/@furisvn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Our Medium Blog
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <a 
                  key={index} 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="luxury-card rounded-lg overflow-hidden hover-scale group"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(post.pubDate)}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl mb-3 group-hover:text-coastal-blue transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground mb-6">{post.content.substring(0, 120)}...</p>
                    <div className="flex items-center text-coastal-blue font-medium">
                      <span className="mr-2">Read More</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
          
          <div className="mt-16 text-center">
            <a 
              href="https://medium.com/@furisvn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View All Articles
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
