import { useState, useRef, useEffect, useContext } from "react";
import {User, LogOut, X, Menu, Settings, Bell} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {assets} from "../assets/assets.js";
import {AppContext} from "../context/AppContext.jsx";
import Sidebar from "./Sidebar.jsx";
import ProfileEditModal from "./ProfileEditModal.jsx";

const Menubar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const dropdownRef = useRef(null);
    const { clearUser, user } = useContext(AppContext);
    const navigate = useNavigate();

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        // Add event listener when dropdown is open
        if (showDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDropdown]);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        setShowDropdown(false);
        navigate("/login");
    };

    const handleProfileEdit = () => {
        setShowDropdown(false);
        setShowProfileModal(true);
    };

    return (
        <>
            <div className="flex items-center justify-between gap-5 bg-white/90 backdrop-blur-md border-b border-gray-200/50 py-4 px-4 sm:px-7 sticky top-0 z-30 shadow-sm">
                {/* Left side - Menu button and title */}
                <div className="flex items-center gap-5">
                    <button
                        className="block lg:hidden text-gray-700 hover:bg-gray-100/80 p-2 rounded-xl transition-all duration-200 hover:shadow-md"
                        onClick={() => {
                            setOpenSideMenu(!openSideMenu);
                        }}
                    >
                        {openSideMenu ? (
                            <X className="text-xl" />
                        ) : (
                            <Menu className="text-xl" />
                        )}
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <img src={assets.logo} alt="logo" className="h-8 w-8 sm:h-10 sm:w-10 transition-transform duration-300 hover:scale-110" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                        </div>
                        <button 
                            onClick={() => navigate("/home")}
                            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                        >
                            <span className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Money Manager
                            </span>
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                        </button>
                    </div>
                </div>

                {/* Center - Page title */}
                <div className="hidden md:block">
                    <h1 className="text-lg font-semibold text-gray-800">{activeMenu}</h1>
                </div>

                {/* Right side - Notifications and Avatar dropdown */}
                <div className="flex items-center gap-3">
                    {/* Notification bell */}
                    <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 rounded-xl transition-all duration-200">
                        <Bell className="w-5 h-5" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </button>

                    {/* Avatar dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
                        >
                            {user?.profileImageUrl ? (
                                <img 
                                    src={user.profileImageUrl} 
                                    alt="profile" 
                                    className="w-8 h-8 rounded-lg object-cover"
                                />
                            ) : (
                                <User className="w-5 h-5 text-gray-600" />
                            )}
                        </button>

                        {/* Dropdown Menu */}
                        {showDropdown && (
                            <div className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 py-2 z-50 animate-fade-in">
                                {/* User info section */}
                                <div className="px-4 py-4 border-b border-gray-100/50">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            {user?.profileImageUrl ? (
                                                <img 
                                                    src={user.profileImageUrl} 
                                                    alt="profile" 
                                                    className="w-12 h-12 rounded-xl object-cover border-2 border-gray-200/50"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                                                    <User className="w-6 h-6 text-white" />
                                                </div>
                                            )}
                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-gray-900 truncate">
                                                {user?.fullName || "User"}
                                            </p>
                                            <p className="text-xs text-gray-500 truncate">{user?.email || "user@example.com"}</p>
                                            <div className="flex items-center gap-1 mt-1">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-xs text-green-600 font-medium">Online</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Dropdown options */}
                                <div className="py-2">
                                    <button
                                        onClick={handleProfileEdit}
                                        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50/80 transition-colors duration-200 rounded-lg mx-2"
                                    >
                                        <Settings className="w-4 h-4 text-gray-500" />
                                        <span>Edit Profile</span>
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50/80 transition-colors duration-200 rounded-lg mx-2"
                                    >
                                        <LogOut className="w-4 h-4 text-red-500" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile side menu */}
                {openSideMenu && (
                    <div className="fixed top-[73px] left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 lg:hidden z-20 shadow-lg animate-fade-in">
                        <Sidebar activeMenu={activeMenu} />
                    </div>
                )}
            </div>

            {/* Profile Edit Modal */}
            <ProfileEditModal 
                isOpen={showProfileModal} 
                onClose={() => setShowProfileModal(false)} 
            />
        </>
    );
};

export default Menubar;
