import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Header = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            toast.success('Logged out successfully');
            navigate('/login');
        } catch (error) {
            toast.error('Failed to log out');
        }
    };

    return (
        <header className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link
                        to="/"
                        className="text-2xl font-bold text-white hover:text-indigo-200 transition-colors duration-300 flex items-center"
                    >
                        <span className="bg-white text-indigo-900 rounded-lg px-2 py-1 mr-2">BH</span>
                        <span className="hidden sm:inline">BlogHub</span>
                    </Link>

                    <nav className="flex items-center space-x-1 sm:space-x-4">
                        <Link
                            to="/"
                            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 hover:bg-opacity-50 transition-colors duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 hover:bg-opacity-50 transition-colors duration-300 hidden sm:block"
                        >
                            About
                        </Link>

                        {currentUser ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 hover:bg-opacity-50 transition-colors duration-300 hidden md:block"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="/create"
                                    className="px-3 py-2 rounded-md text-sm font-medium bg-white text-indigo-900 hover:bg-indigo-100 transition-colors duration-300 flex items-center"
                                >
                                    <span className="hidden sm:inline">Create Blog</span>
                                    <span className="sm:hidden">+</span>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-900 hover:bg-opacity-50 transition-colors duration-300"
                                >
                                    <span className="hidden sm:inline">Logout</span>
                                    <span className="sm:hidden">→</span>
                                </button>
                               {/*  <div className="ml-2 relative">
                                    <div className="w-8 h-8 rounded-full bg-white text-indigo-900 flex items-center justify-center font-bold cursor-pointer hover:bg-indigo-100 transition-colors duration-300">
                                        {currentUser.email.charAt(0).toUpperCase()}
                                    </div>
                                </div> */}
                                <Link
                                    to="/profile"
                                    className="ml-2 relative w-8 h-8 rounded-full bg-white text-indigo-900 flex items-center justify-center font-bold hover:bg-indigo-100 transition-colors duration-300"
                                    title="View Profile"
                                >
                                    {currentUser.email.charAt(0).toUpperCase()}
                                </Link>

                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 hover:bg-opacity-50 transition-colors duration-300"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-4 py-2 rounded-md text-sm font-medium bg-indigo-500 text-white hover:bg-indigo-400 transition-colors duration-300"
                                >
                                    <span className="hidden sm:inline">Register</span>
                                    <span className="sm:hidden">Join</span>
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;