const Footer = () => {
    return (
        <footer className="bg-dark text-white py-8">
            <div className="container text-center">
                <p>© {new Date().getFullYear()} BlogHub. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="/terms" className="hover:text-primary">
                        Terms
                    </a>
                    <a href="/privacy" className="hover:text-primary">
                        Privacy
                    </a>
                    <a href="/contact" className="hover:text-primary">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;