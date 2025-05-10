import BlogForm from '../components/BlogForm';
import { useAuth } from '../context/AuthContext';
import { createBlog } from '../services/blogs';

const CreateBlog = () => {
    const { currentUser } = useAuth();

    const handleSubmit = async (blogData) => {
        if (!currentUser) {
            console.error("No authenticated user");
            return;
        }
        const blogWithAuthor = {
            ...blogData,
            authorId: currentUser.uid,
            authorName: currentUser.email,
        };
        try {
            await createBlog(blogWithAuthor);
            console.log("Blog created successfully");
        } catch (error) {
            console.error("Error creating blog:", error);
        }
    };

    if (!currentUser) return <p>Loading user...</p>;


    return (
        <div className="py-8">
            <BlogForm onSubmit={handleSubmit} />
        </div>
    );
};

export default CreateBlog;