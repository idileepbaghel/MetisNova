export default function ServiceCard({ title, description, category }) {
    return (
        <div 
            className="p-6 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-200 bg-white group overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
                <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {title}
                </h3>
                <p className="leading-relaxed text-sm text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    )
}