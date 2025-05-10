import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getBlogById, deleteBlog } from '../services/blogs';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
import { format } from 'date-fns';

const BlogDetails = () => {
    const { id } = useParams();
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blogData = await getBlogById(id);
                setBlog(blogData);
            } catch (error) {
                console.error('Error fetching blog:', error);
                toast.error('Failed to load blog', {
                    style: { background: '#EF4444', color: '#fff' }
                });
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            setIsDeleting(true);
            try {
                await deleteBlog(id);
                toast.success('Blog deleted successfully', {
                    style: { background: '#4F46E5', color: '#fff' }
                });
                navigate('/dashboard');
            } catch (error) {
                toast.error('Failed to delete blog', {
                    style: { background: '#EF4444', color: '#fff' }
                });
            } finally {
                setIsDeleting(false);
            }
        }
    };

    if (loading) return <Loader variant="bars" color="indigo" />;

    if (!blog) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center px-4">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
                    <div className="text-indigo-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Blog Not Found</h2>
                    <p className="text-gray-600 mb-6">The blog you're looking for doesn't exist or may have been removed.</p>
                    <Link
                        to="/"
                        className="inline-block px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Blog Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <Link
                                to="/"
                                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                                Back to Blogs
                            </Link>

                            {currentUser?.uid === blog.authorId && (
                                <div className="flex space-x-3">
                                    <Link
                                        to={`/edit/${blog.id}`}
                                        className="px-4 py-2 bg-white border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300 text-sm font-medium"
                                    >
                                        Edit Post
                                    </Link>
                                    <button
                                        onClick={handleDelete}
                                        disabled={isDeleting}
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm font-medium disabled:opacity-70 flex items-center"
                                    >
                                        {isDeleting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Deleting...
                                            </>
                                        ) : 'Delete Post'}
                                    </button>
                                </div>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{blog.title}</h1>

                        <div className="flex items-center text-sm text-gray-500 mb-6">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold mr-3">
                                    {blog.authorName.charAt(0).toUpperCase()}
                                </div>
                                <span>{blog.authorName}</span>
                            </div>
                            <span className="mx-3 text-gray-300">•</span>
                            <span>
                                {format(new Date(blog.createdAt?.seconds * 1000), 'MMMM d, yyyy')}
                            </span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={blog.imageUrl || 'https://source.unsplash.com/random/800x400/?blog,writing'}
                            alt={blog.title}
                            className="w-full h-64 md:h-96 object-cover"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="prose prose-indigo max-w-none">
                        {blog.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Author Card */}
                    <div className="mt-12 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xl mr-4">
                                {blog.authorName.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">{blog.authorName}</h3>
                                <p className="text-sm text-gray-500">Blog Author</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;