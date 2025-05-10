const Loader = ({ variant = 'spinner', size = 'md', color = 'indigo' }) => {
    const sizeClasses = {
        sm: 'h-8 w-8 border-2',
        md: 'h-12 w-12 border-t-2 border-b-2',
        lg: 'h-16 w-16 border-t-4 border-b-4'
    };

    const colorClasses = {
        indigo: 'border-indigo-500',
        purple: 'border-purple-500',
        white: 'border-white',
        gray: 'border-gray-300'
    };

    // Pulse Loader Variant
    if (variant === 'pulse') {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className={`rounded-full ${sizeClasses[size]} ${colorClasses[color]} animate-pulse`}></div>
            </div>
        );
    }

    // Bounce Loader Variant
    if (variant === 'bounce') {
        return (
            <div className="flex justify-center items-center min-h-screen space-x-2">
                <div
                    className={`w-3 h-3 rounded-full ${color === 'indigo' ? 'bg-indigo-500' :
                        color === 'purple' ? 'bg-purple-500' :
                            color === 'white' ? 'bg-white' : 'bg-gray-300'} 
                    animate-bounce`}
                    style={{ animationDelay: '0.1s' }}
                ></div>
                <div
                    className={`w-3 h-3 rounded-full ${color === 'indigo' ? 'bg-indigo-500' :
                        color === 'purple' ? 'bg-purple-500' :
                            color === 'white' ? 'bg-white' : 'bg-gray-300'} 
                    animate-bounce`}
                    style={{ animationDelay: '0.2s' }}
                ></div>
                <div
                    className={`w-3 h-3 rounded-full ${color === 'indigo' ? 'bg-indigo-500' :
                        color === 'purple' ? 'bg-purple-500' :
                            color === 'white' ? 'bg-white' : 'bg-gray-300'} 
                    animate-bounce`}
                    style={{ animationDelay: '0.3s' }}
                ></div>
            </div>
        );
    }

    // Bars Loader Variant
    if (variant === 'bars') {
        return (
            <div className="flex justify-center items-center min-h-screen space-x-1">
                <div
                    className={`w-1.5 h-6 ${color === 'indigo' ? 'bg-indigo-500' :
                        color === 'purple' ? 'bg-purple-500' :
                            color === 'white' ? 'bg-white' : 'bg-gray-300'} 
                    animate-bounce`}
                    style={{ animationDuration: '0.8s', animationDelay: '0.1s' }}
                ></div>
                <div
                    className={`w-1.5 h-8 ${color === 'indigo' ? 'bg-indigo-500' :
                        color === 'purple' ? 'bg-purple-500' :
                            color === 'white' ? 'bg-white' : 'bg-gray-300'} 
                    animate-bounce`}
                    style={{ animationDuration: '0.8s', animationDelay: '0.2s' }}
                ></div>
                <div
                    className={`w-1.5 h-10 ${color === 'indigo' ? 'bg-indigo-500' :
                        color === 'purple' ? 'bg-purple-500' :
                            color === 'white' ? 'bg-white' : 'bg-gray-300'} 
                    animate-bounce`}
                    style={{ animationDuration: '0.8s', animationDelay: '0.3s' }}
                ></div>
                <div
                    className={`w-1.5 h-8 ${color === 'indigo' ? 'bg-indigo-500' :
                        color === 'purple' ? 'bg-purple-500' :
                            color === 'white' ? 'bg-white' : 'bg-gray-300'} 
                    animate-bounce`}
                    style={{ animationDuration: '0.8s', animationDelay: '0.4s' }}
                ></div>
                <div
                    className={`w-1.5 h-6 ${color === 'indigo' ? 'bg-indigo-500' :
                        color === 'purple' ? 'bg-purple-500' :
                            color === 'white' ? 'bg-white' : 'bg-gray-300'} 
                    animate-bounce`}
                    style={{ animationDuration: '0.8s', animationDelay: '0.5s' }}
                ></div>
            </div>
        );
    }

    // Default Spinner Variant
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className={`animate-spin rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}></div>
        </div>
    );
};

export default Loader;