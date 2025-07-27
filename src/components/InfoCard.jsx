const InfoCard = ({icon, label, value, color}) => {
    return(
        <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex gap-6 items-center">
                {/* Enhanced icon container */}
                <div className={`relative w-16 h-16 flex items-center justify-center text-[28px] text-white rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110 ${color}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    <div className="relative z-10">
                        {icon}
                    </div>
                </div>
                
                <div className="flex-1">
                    <h6 className="text-sm font-medium text-gray-500 mb-2 transition-colors duration-300 group-hover:text-gray-600">
                        {label}
                    </h6>
                    <div className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-gray-800">
                        &#8377;{value}
                    </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full -translate-y-10 translate-x-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
        </div>
    )
}

export default InfoCard;