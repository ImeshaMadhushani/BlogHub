import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import { getBlogById, updateBlog } from '../services/blogs';
import Loader from '../components/Loader';

const EditBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blogData = await getBlogById(id);
                setBlog(blogData);
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const handleSubmit = async (updatedBlog) => {
        await updateBlog(id, updatedBlog);
    };

    if (loading) return <Loader />;

    return (
        <div className="py-8">
            {blog ? (
                <BlogForm initialData={blog} onSubmit={handleSubmit} />
            ) : (
                <p className="text-center py-12">Blog not found</p>
            )}
        </div>
    );
};

export default EditBlog;