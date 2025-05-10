import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const BlogForm = ({ initialData, onSubmit }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(
        initialData || {
            title: '',
            content: '',
            imageUrl: '',
            authorId: currentUser?.uid,
            authorName: currentUser?.email,
            createdAt: new Date(),
        }
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog({ ...blog, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            // Optionally, update the image URL state with a preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setBlog({ ...blog, imageUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Assuming onSubmit function will handle file upload if any
            await onSubmit(blog, imageFile);
            toast.success(
                initialData ? 'Blog updated successfully' : 'Blog created successfully'
            );
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">
                {initialData ? 'Edit Blog' : 'Create New Blog'}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={blog.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium mb-1">
                        Image (optional)
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {blog.imageUrl && (
                        <img
                            src={blog.imageUrl}
                            alt="Preview"
                            className="mt-2 w-32 h-32 object-cover rounded-md"
                        />
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium mb-1">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={blog.content}
                        onChange={handleChange}
                        rows="10"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-end space-x-3">
                    <button
                        type="button"
                        onClick={() => navigate('/dashboard')}
                        className="px-4 py-2 border rounded-md hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary disabled:opacity-50"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BlogForm;
