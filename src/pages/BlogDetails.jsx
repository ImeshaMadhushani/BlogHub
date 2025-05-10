import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getBlogById, deleteBlog } from '../services/blogs';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
import { format } from 'date-fns';

const BlogDetails = () => {
    const { id } = useParams();
    const { currentUser } = useAuth();
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
                toast.error('Failed to load blog');
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            setIsDeleting(true);
            try {
                await deleteBlog(id);
                toast.success('Blog deleted successfully');
                window.location.href = '/dashboard';
            } catch (error) {
                toast.error('Failed to delete blog');
            } finally {
                setIsDeleting(false);
            }
        }
    };

    if (loading) return <Loader />;

    if (!blog) {
        return (
            <div className="container py-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
                <Link to="/" className="text-primary hover:underline">
                    Go back to home
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src={blog.imageUrl || 'https://via.placeholder.com/800x400'}
                    alt={blog.title}
                    className="w-full h-96 object-cover"
                />
                <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                            <span>{blog.authorName}</span>
                            <span className="mx-2">•</span>
                            <span>
                                {format(new Date(blog.createdAt?.seconds * 1000), 'MMM d, yyyy')}
                            </span>
                        </div>
                        {currentUser?.uid === blog.authorId && (
                            <div className="flex space-x-3">
                                <Link
                                    to={`/edit/${blog.id}`}
                                    className="text-sm text-primary hover:underline"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={handleDelete}
                                    disabled={isDeleting}
                                    className="text-sm text-red-600 hover:underline disabled:opacity-50"
                                >
                                    {isDeleting ? 'Deleting...' : 'Delete'}
                                </button>
                            </div>
                        )}
                    </div>
                    <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                    <div className="prose max-w-none">
                        {blog.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;