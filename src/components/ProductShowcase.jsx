import {assets} from "../assets/assets.js";
import {TrendingUp, Shield, BarChart3, Smartphone, Zap, Users} from "lucide-react";

const ProductShowcase = () => {
    const features = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Smart Analytics",
            description: "Get insights into your spending patterns with AI-powered analytics",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Bank-Level Security",
            description: "Your data is protected with enterprise-grade encryption",
            color: "from-blue-500 to-indigo-500"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Real-time Reports",
            description: "Generate beautiful reports and track your financial progress",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile First",
            description: "Access your finances anywhere with our responsive design",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Lightning Fast",
            description: "Built for speed with modern technologies and optimizations",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Team Collaboration",
            description: "Share expenses and manage budgets with your team",
            color: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            
            <div className="relative container mx-auto px-4 max-w-7xl">
                {/* Section header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Powerful Features for{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Smart Finance
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Everything you need to take control of your finances, from expense tracking to advanced analytics and insights.
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Product showcase */}
                <div className="relative">
                    {/* Main image */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-200/50">
                        <img
                            src={assets.landing}
                            className="w-full h-auto object-cover rounded-2xl shadow-lg"
                            alt="Money Manager Dashboard"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1200x600/E2E8F0/4A5568?text=Dashboard+Preview'; }}
                        />
                        
                        {/* Floating stats */}
                        <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50 animate-fade-in" style={{animationDelay: '0.5s'}}>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Total Savings</p>
                                    <p className="text-lg font-bold text-green-600">₹45,230</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50 animate-fade-in" style={{animationDelay: '0.7s'}}>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">This Month</p>
                                    <p className="text-lg font-bold text-blue-600">₹12,450</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50 animate-fade-in" style={{animationDelay: '0.9s'}}>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Budget Status</p>
                                    <p className="text-lg font-bold text-purple-600">85% Used</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA section */}
                <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '1.1s'}}>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-200/50">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Ready to transform your finances?
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join thousands of users who are already taking control of their financial future with our powerful money management platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-1">
                                Start Free Trial
                            </button>
                            <button className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-lg shadow-gray-200/25 hover:shadow-xl hover:shadow-gray-300/40 transform hover:-translate-y-1">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;