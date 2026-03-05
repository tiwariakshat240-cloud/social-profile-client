import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"

const AdminNavbar = () => {

    return (
        <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-200">
             <a href="/" className="h-10 flex items-center font-bold text-2xl text-indigo-600 cursor-pointer select-none tracking-wide">
                            SocialX
            </a>
        </div>
    )
}

export default AdminNavbar