import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (currentUser) {
            setUser(currentUser);
        } else {
            toast.error("No user found. Please log in.");
            navigate('/login');
        }

        setLoading(false);
    }, [navigate]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
                <p className="text-lg text-gray-700">Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 sm:p-10">
                <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A8.966 8.966 0 0012 21c2.21 0 4.227-.805 5.879-2.196M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">Your Profile</h2>
                    <p className="text-gray-600">View your personal information</p>
                </div>

                <div className="space-y-4 text-gray-700">
                   {/*  <div>
                        <p className="text-sm font-medium text-gray-500">Display Name</p>
                        <p className="text-lg font-semibold">{user.displayName || "N/A"}</p>
                    </div> */}

                    <div>
                        <p className="text-sm font-medium text-gray-500">Email Address</p>
                        <p className="text-lg font-semibold">{user.email}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-500">Email Verified</p>
                        <p className="text-lg font-semibold">{user.emailVerified ? "Yes" : "No"}</p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
