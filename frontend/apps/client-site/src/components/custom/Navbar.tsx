import { Search } from "lucide-react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <>
            <nav className="w-full p-10 hidden lg:flex items-center justify-between">
            <div className="text-5xl">
               <span>
                    <img src="/assets/logo.png" alt="logo" className="w-96"/>
                </span>
            </div>
            <div className="flex flex-col items-end gap-8 ">
                <ul className="flex items-center gap-5">
                    <li>
                        <a href="#">中文</a>
                    </li>
                    <li className="border-x border-black px-5">
                        <a href="#">+233555097486</a>
                        </li>
                    <li>
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                    <li className="mr-2">
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
                <ul className="flex items-center gap-5">
                    <li ><Search className="text-orange-600"/></li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li >
                        <Link to="/generator">Generators</Link>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                </ul>
            </div>
            </nav>

            <nav className="w-full p-5 gap-2 flex flex-col lg:hidden">
                <div className="flex items-center justify-between">
                    <div >
                       <span>
                            <img src="./assets/logo.png" alt="logo" className="w-44"/>
                        </span>
                       
                    </div>
                    <div className="flex items-center justify-between ">
                        <ul className="flex items-center gap-5">
                            <li>
                                <a href="#">中文</a>
                            </li>
                        </ul>
                        </div>
                    </div>

                   <div className="flex items-center justify-between">
                    <div >
                       <Search />  
                    </div>
                    <div className="flex flex-col items-end gap-5 ">
                        <ul className="flex items-center gap-5">
                            <li>
                                <a href="#"><Search /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
        

    )
       
    
}
