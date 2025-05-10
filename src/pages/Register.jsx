import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth';
import toast from 'react-hot-toast';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            toast.error('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        setLoading(true);
        try {
            const userCredential = await registerUser(email, password, {
                displayName: '', // Customize if needed
                role: 'user',
            });

            if (userCredential?.user) {
                toast.success('Account created successfully');
                navigate('/login');
            } else {
                throw new Error('Registration failed');
            }
        } catch (error) {
            toast.error(error?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Create a new account
                </h2>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Email address"
                        />

                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Password"
                        />

                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>

                <div className="text-center text-sm">
                    <span className="text-gray-600">Already have an account? </span>
                    <Link to="/login" className="font-medium text-primary hover:text-primary/80">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
