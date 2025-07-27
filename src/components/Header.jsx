import {useState} from "react";
import {assets} from "../assets/assets.js";
import {Link} from "react-router-dom";
import {Menu, X, Sparkles} from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', to: '/home' },
        { name: 'Features', to: '/features' },
        { name: 'Pricing', to: '/pricing' },
        { name: 'Contact', to: '/contact' }
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/home" className="flex items-center gap-3 group">
                        <div className="relative">
                            <img src={assets.logo} alt="logo" className="h-8 w-8 lg:h-10 lg:w-10 transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Money Manager
                            </span>
                            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link 
                                to={link.to} 
                                key={link.name} 
                                className="relative px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-200 rounded-lg hover:bg-gray-50/80 group"
                            >
                                {link.name}
                                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                            </Link>
                        ))}
                    </nav>

                    {/* Action Buttons & Hamburger Menu */}
                    <div className="flex items-center space-x-3">
                        <div className="hidden sm:flex items-center space-x-3">
                            <Link 
                                to="/login" 
                                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 hover:bg-gray-50/80 px-4 py-2 rounded-lg"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/signup"
                                className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5"
                            >
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100/80 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-lg animate-fade-in">
                    <div className="container mx-auto px-4 py-6">
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link, index) => (
                                <Link 
                                    key={link.name} 
                                    to={link.to} 
                                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-50/80"
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100/50 mt-4">
                                <Link 
                                    to="/login"
                                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-50/80"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center shadow-lg shadow-blue-500/25"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;