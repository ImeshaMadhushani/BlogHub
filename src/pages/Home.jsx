import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { getAllBlogs } from '../services/blogs';
import Loader from '../components/Loader';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <Loader />;

  return (
    <div className="py-8">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
        {blogs.length === 0 ? (
          <p className="text-center py-12 text-gray-500">No blogs found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;