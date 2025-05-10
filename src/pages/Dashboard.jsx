import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserBlogs } from '../services/blogs';
import BlogCard from '../components/BlogCard';
import Loader from '../components/Loader';

const Dashboard = () => {
    const { currentUser } = useAuth();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserBlogs = async () => {
            if (!currentUser) {
                console.log('No user is currently logged in.');
                setLoading(false);
                return;
            }

            try {
                console.log('Fetching blogs for user:', currentUser.uid);
                const blogsData = await getUserBlogs(currentUser.uid);
                setBlogs(blogsData);
            } catch (error) {
                console.error('Error fetching user blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserBlogs();
    }, [currentUser]);

    if (loading) return <Loader />;

    return (
        <div className="py-8">
            <div className="container">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Your Blog Posts</h1>
                    <Link
                        to="/create"
                        className="btn btn-primary"
                    >
                        Create New Blog
                    </Link>
                </div>
                {blogs.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 mb-4">You haven't created any blogs yet</p>
                        <Link
                            to="/create"
                            className="btn btn-primary"
                        >
                            Create Your First Blog
                        </Link>
                    </div>
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

export default Dashboard;