import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        About <span className="text-indigo-600">BlogHub</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-8 md:p-10">
                        <div className="prose prose-indigo max-w-none">
                            <div className="flex flex-col md:flex-row gap-8 mb-10">
                                <div className="md:w-1/2">
                                    <img
                                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                        alt="Team working"
                                        className="rounded-lg shadow-md w-full h-full object-cover"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                                    <p className="text-gray-600 mb-4">
                                        BlogHub was born from a passion for storytelling and knowledge sharing.
                                        We noticed how difficult it was for writers to find a simple, beautiful
                                        platform to share their ideas, and for readers to discover quality content.
                                    </p>
                                    <p className="text-gray-600">
                                        Our mission is to bridge that gap by providing an elegant platform that
                                        empowers creators and engages readers in meaningful conversations.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Why Choose BlogHub?</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                                    <div className="text-indigo-600 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Intuitive Editor</h3>
                                    <p className="text-gray-600">
                                        Our markdown-powered editor makes writing and formatting posts effortless.
                                    </p>
                                </div>

                                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                                    <div className="text-indigo-600 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Beautiful Layouts</h3>
                                    <p className="text-gray-600">
                                        Professionally designed templates that make your content shine.
                                    </p>
                                </div>

                                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                                    <div className="text-indigo-600 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Platform</h3>
                                    <p className="text-gray-600">
                                        Enterprise-grade security to protect your data and privacy.
                                    </p>
                                </div>

                                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                                    <div className="text-indigo-600 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Vibrant Community</h3>
                                    <p className="text-gray-600">
                                        Connect with like-minded creators and engaged readers.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white">
                                <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                                <p className="mb-6 max-w-2xl">
                                    Join thousands of creators who are already sharing their knowledge and stories on BlogHub.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/register"
                                        className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-center"
                                    >
                                        Create Your Account
                                    </Link>
                                    <Link
                                        to="/"
                                        className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors duration-300 text-center"
                                    >
                                        Explore Blogs
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;