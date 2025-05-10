const About = () => {
    return (
        <div className="py-12">
            <div className="container max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">About BlogHub</h1>
                <div className="prose max-w-none">
                    <p className="mb-4">
                        Welcome to BlogHub, your go-to platform for sharing and discovering
                        amazing content. Our mission is to provide a seamless experience for
                        both readers and writers.
                    </p>
                    <p className="mb-4">
                        Whether you're looking to share your thoughts with the world or find
                        inspiration from others, BlogHub is the perfect place for you. Our
                        platform is built with simplicity and functionality in mind, ensuring
                        that you can focus on what matters most - creating great content.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4">Our Features</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">Easy-to-use editor for creating blog posts</li>
                        <li className="mb-2">Beautiful, responsive design</li>
                        <li className="mb-2">Secure user authentication</li>
                        <li className="mb-2">Personal dashboard to manage your posts</li>
                        <li className="mb-2">Engaging community of readers and writers</li>
                    </ul>
                    <p>
                        Join us today and become part of our growing community of content
                        creators and enthusiasts!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;