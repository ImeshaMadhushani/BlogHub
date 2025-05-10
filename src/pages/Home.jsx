import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { getAllBlogs } from '../services/blogs';
import Loader from '../components/Loader';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getAllBlogs();
        setBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <Loader variant="bars" color="indigo" />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Amazing Content
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read the latest articles from our community of passionate writers
          </p>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 pl-12"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="mx-auto h-24 w-24 text-indigo-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              {searchQuery ? 'No matching blogs found' : 'No blogs available yet'}
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {searchQuery ? 'Try a different search term' : 'Check back later or create the first blog post'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                className="transform hover:-translate-y-1 transition-transform duration-300"
              />
            ))}
          </div>
        )}

        {blogs.length > 0 && (
          <div className="mt-12 text-center">
            <button className="px-6 py-2.5 border border-indigo-500 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors duration-300">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;