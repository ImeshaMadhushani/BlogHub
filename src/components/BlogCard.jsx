import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100">
            <img
                src={blog.imageUrl || 'https://source.unsplash.com/random/600x400/?blog,writing'}
                alt={blog.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <div className="flex items-center text-sm text-indigo-500 mb-2">
                    <span>{blog.authorName}</span>
                    <span className="mx-2 text-indigo-300">•</span>
                    <span>
                        {format(new Date(blog.createdAt?.seconds * 1000), 'MMM d, yyyy')}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-indigo-700 transition-colors duration-300">
                    {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.content}
                </p>
                <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300 group"
                >
                    Read More
                    <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;