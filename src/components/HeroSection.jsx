import {ArrowRight, Sparkles, TrendingUp, Shield} from "lucide-react";
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Background with gradient and patterns */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            
            <div className="relative text-center py-24 md:py-32 lg:py-40">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-8 animate-fade-in">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-gray-700">Smart Financial Management</span>
                    </div>
                    
                    {/* Main heading */}
                    <h1 className="text-responsive-xl font-bold tracking-tight text-gray-900 leading-tight mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                        Take Control of Your{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Financial Future
                        </span>
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
                        Your foundation for secure, intelligent financial management. Effortlessly track your income and expenses with beautiful insights and smart analytics to achieve your financial goals.
                    </p>
                    
                    {/* Feature highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
                        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-900 text-sm">Smart Analytics</h3>
                                <p className="text-xs text-gray-600">Track spending patterns</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-900 text-sm">Secure & Private</h3>
                                <p className="text-xs text-gray-600">Bank-level security</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-900 text-sm">Beautiful UI</h3>
                                <p className="text-xs text-gray-600">Modern & intuitive</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
                        <Link
                            to="/signup"
                            className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-1"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Start Tracking for Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        
                        <Link
                            to="/signup"
                            className="group w-full sm:w-auto bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300 border border-gray-200/50 hover:border-gray-300/50 shadow-lg shadow-gray-200/25 hover:shadow-xl hover:shadow-gray-300/40 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Learn More 
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    
                    {/* Trust indicators */}
                    <div className="mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
                        <p className="text-sm text-gray-500 mb-4">Trusted by thousands of users worldwide</p>
                        <div className="flex items-center justify-center gap-8 opacity-60">
                            <div className="w-16 h-8 bg-gray-300 rounded animate-pulse-slow"></div>
                            <div className="w-16 h-8 bg-gray-300 rounded animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                            <div className="w-16 h-8 bg-gray-300 rounded animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;