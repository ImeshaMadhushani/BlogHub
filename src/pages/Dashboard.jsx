import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserBlogs } from '../services/blogs';
import BlogCard from '../components/BlogCard';
import Loader from '../components/Loader';
import { format } from 'date-fns';

const Dashboard = () => {
    const { currentUser } = useAuth();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('published');

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

    if (loading) return <Loader variant="bars" color="indigo" />;

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Your Dashboard</h1>
                        <p className="text-gray-600">
                            Manage all your blog posts in one place
                        </p>
                    </div>
                    <Link
                        to="/create"
                        className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Create New Blog
                    </Link>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-8">
                    <nav className="-mb-px flex space-x-8">
                        <button
                            onClick={() => setActiveTab('published')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'published' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Published
                        </button>
                       {/*  <button
                            onClick={() => setActiveTab('drafts')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'drafts' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Drafts
                        </button>
                        <button
                            onClick={() => setActiveTab('archived')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'archived' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            Archived
                        </button> */}
                    </nav>
                </div>

                {blogs.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <div className="mx-auto h-24 w-24 text-indigo-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mb-2">
                            No blog posts yet
                        </h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-6">
                            Get started by creating your first blog post to share with the world
                        </p>
                        <Link
                            to="/create"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                        >
                            Create Your First Blog
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog) => (
                                <BlogCard
                                    key={blog.id}
                                    blog={blog}
                                    className="transform hover:-translate-y-1 transition-transform duration-300"
                                />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-between items-center">
                            <p className="text-sm text-gray-500">
                                Showing {blogs.length} of {blogs.length} posts
                            </p>
                            <button className="px-6 py-2 border border-indigo-500 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors duration-300">
                                Load More
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Dashboard;