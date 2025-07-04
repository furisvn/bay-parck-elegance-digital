
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { ArrowUpRight } from 'lucide-react';

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  content: string;
  thumbnail?: string;
  excerpt: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        
        // Using RSS2JSON service to convert Medium RSS to JSON
        const RSS_URL = 'https://medium.com/feed/@furisvn';
        const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;
        
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const data = await response.json();
        
        if (data.status !== 'ok') {
          throw new Error('RSS feed error');
        }
        
        // Process the posts and limit to 3
        const processedPosts: BlogPost[] = data.items.slice(0, 3).map((item: any) => {
          // Extract excerpt (first 30-40 words)
          const textContent = item.content.replace(/<[^>]*>/g, ''); // Remove HTML tags
          const words = textContent.split(' ');
          const excerpt = words.slice(0, 35).join(' ') + (words.length > 35 ? '...' : '');
          
          // Extract thumbnail from content if available
          const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
          const thumbnail = imgMatch ? imgMatch[1] : null;
          
          return {
            title: item.title,
            pubDate: item.pubDate,
            link: item.link,
            content: item.content,
            excerpt,
            thumbnail
          };
        });
        
        setPosts(processedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchBlogPosts();
  }, []);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
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
      
      <section className="py-16" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container-luxe">
          <SectionTitle
            pretitle="Latest Stories"
            title="Insights from SVN Bay Parck"
            subtitle="Discover the latest thoughts and updates from our team on luxury coastal living."
          />
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-pulse text-center">
                <div className="h-10 w-40 bg-gray-300 rounded mx-auto mb-4"></div>
                <div className="h-6 w-64 bg-gray-200 rounded mx-auto"></div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 mb-6 text-lg">{error}</p>
              <a 
                href="https://medium.com/@furisvn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-coastal-navy text-coastal-navy hover:bg-coastal-navy hover:text-white transition-all duration-300 rounded-xl"
              >
                Visit Our Medium Blog
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden group"
                >
                  {post.thumbnail && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.thumbnail} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          // Hide image if it fails to load
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <time className="text-sm text-gray-500 font-medium">
                        {formatDate(post.pubDate)}
                      </time>
                    </div>
                    
                    <h3 className="text-xl font-bold font-cormorant mb-4 text-gray-900 group-hover:text-coastal-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-coastal-navy text-coastal-navy hover:bg-coastal-navy hover:text-white transition-all duration-300 rounded-lg text-sm font-medium group"
                    >
                      Read More
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <a 
              href="https://medium.com/@furisvn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-coastal-navy bg-coastal-navy text-white hover:bg-transparent hover:text-coastal-navy transition-all duration-300 rounded-xl font-medium"
            >
              View All Articles
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
