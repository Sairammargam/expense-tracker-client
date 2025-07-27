import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {User} from "lucide-react";
import {SIDE_BAR_DATA} from "../assets/assets.js";
import {useNavigate} from "react-router-dom";

const Sidebar = ({activeMenu}) => {
    const {user} = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <div className="w-64 h-[calc(100vh-61px)] bg-white/80 backdrop-blur-sm border-r border-gray-200/50 p-6 sticky top-[61px] z-20 shadow-lg shadow-gray-100/50">
            {/* User profile section */}
            <div className="flex flex-col items-center justify-center gap-4 mb-8 p-4 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl border border-gray-200/30">
                {user?.profileImageUrl ? (
                    <div className="relative">
                        <img 
                            src={user?.profileImageUrl || ""} 
                            alt="profile image" 
                            className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl object-cover shadow-lg border-4 border-white/80" 
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                ): (
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white/80">
                        <User className="w-10 h-10 text-white" />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                )}
                <div className="text-center">
                    <h5 className="text-gray-900 font-semibold leading-6 text-lg">{user.fullName || "User"}</h5>
                    <p className="text-sm text-gray-500 mt-1">Premium Member</p>
                </div>
            </div>
            
            {/* Navigation menu */}
            <nav className="space-y-2">
                {SIDE_BAR_DATA.map((item, index) => (
                    <button
                        onClick={() => navigate(item.path)}
                        key={`menu_${index}`}
                        className={`group relative w-full flex items-center gap-4 text-[15px] py-3 px-4 rounded-xl transition-all duration-200 ${
                            activeMenu === item.label 
                                ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25" 
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
                        }`}
                    >
                        {/* Active indicator */}
                        {activeMenu === item.label && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                        )}
                        
                        <div className={`text-xl transition-all duration-200 ${
                            activeMenu === item.label 
                                ? "text-white" 
                                : "text-gray-500 group-hover:text-gray-700"
                        }`}>
                            <item.icon />
                        </div>
                        
                        <span className="font-medium">{item.label}</span>
                        
                        {/* Hover effect */}
                        {activeMenu !== item.label && (
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        )}
                    </button>
                ))}
            </nav>
            
            {/* Bottom section */}
            <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200/50">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                            <p className="text-xs font-medium text-green-800">Pro Features</p>
                            <p className="text-xs text-green-600">Unlock advanced analytics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;