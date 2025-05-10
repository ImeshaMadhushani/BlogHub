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
        <header className="bg-white shadow-sm">
            <div className="container flex items-center justify-between py-4">
                <Link to="/" className="text-2xl font-bold text-primary">
                    BlogHub
                </Link>
                <nav className="flex items-center space-x-6">
                    <Link to="/" className="hover:text-primary">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-primary">
                        About
                    </Link>
                    {currentUser ? (
                        <>
                            <Link to="/dashboard" className="hover:text-primary">
                                Dashboard
                            </Link>
                            <Link to="/create" className="hover:text-primary">
                                Create Blog
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-red-600 hover:text-red-800"
                            >
                                Logout
                            </button>
                            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                                {currentUser.email.charAt(0).toUpperCase()}
                            </span>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-primary">
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;