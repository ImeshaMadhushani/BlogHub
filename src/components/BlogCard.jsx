import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={blog.imageUrl || 'https://via.placeholder.com/400x200'}
                alt={blog.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{blog.authorName}</span>
                    <span className="mx-2">•</span>
                    <span>
                        {format(new Date(blog.createdAt?.seconds * 1000), 'MMM d, yyyy')}
                    </span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>
                <Link
                    to={`/blog/${blog.id}`}
                    className="text-primary font-medium hover:underline"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;