import { Search, Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="w-full py-2 px-4 sm:px-6 fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="flex items-center justify-between">
                <div>
                    <img src="./assets/logo.png" alt="logo" className="w-24 sm:w-32 md:w-40 lg:w-48"/>
                </div>
                <div className="hidden lg:flex flex-col items-end gap-1">
                    <ul className="flex items-center gap-3 lg:gap-4 text-xs">
                        <li><a href="#" className="hover:text-orange-600">中文</a></li>
                        <li className="border-x border-black px-2 lg:px-3"><a href="#" className="hover:text-orange-600">+23312341234</a></li>
                        <li><Link to="/contactus" className="hover:text-orange-600">Contact Us</Link></li>
                        <li><Link to="/faq" className="hover:text-orange-600">FAQ</Link></li>
                    </ul>
                    <ul className="flex items-center gap-3 lg:gap-4 text-sm">
                        <li><Search className="text-orange-600 cursor-pointer w-4 h-4"/></li>
                        <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
                        <li><Link to="/generator" className="hover:text-orange-600">Generators</Link></li>
                        <li><a href="#" className="hover:text-orange-600">News</a></li>
                    </ul>
                </div>
                <div className="lg:hidden flex items-center gap-3">
                    <Search className="text-orange-600 cursor-pointer w-5 h-5"/>
                    <Menu className="cursor-pointer w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden mt-2 border-t pt-2">
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><a href="#" className="hover:text-orange-600">中文</a></li>
                        <li><a href="#" className="hover:text-orange-600">+23312341234</a></li>
                        <li><Link to="/contactus" className="hover:text-orange-600">Contact Us</Link></li>
                        <li><Link to="/faq" className="hover:text-orange-600">FAQ</Link></li>
                        <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
                        <li><Link to="/generator" className="hover:text-orange-600">Generators</Link></li>
                        <li><a href="#" className="hover:text-orange-600">News</a></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}