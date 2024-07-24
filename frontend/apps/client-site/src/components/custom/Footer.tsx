export const Footer = () => {
  return (
   <footer className="w-full flex flex-col bg-[#00072D]">
        <div className="grid grid-cols-5 px-5">
            <div>
                <img src="./assets/logo_white.png" alt="logo_white" className="w-56 pt-4"/>
            </div>
            <div className="w-full mt-20 mb-10">
                <h3 className="text-white text-2xl tracking-widest"> Quick Links</h3>
                <ul className="mt-5 flex flex-col gap-5 text-white tracking-wider">
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
             <div className="w-full mt-20 mb-10">
                <h3 className="text-white text-2xl tracking-widest"> Further Information </h3>
                <ul className="mt-5 flex flex-col gap-5 text-white tracking-wider">
                    <li>
                        <a href="#">Terms and conditions </a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                </ul>
            </div>
             <div className="w-full mt-20 mb-10">
                <h3 className="text-white text-2xl tracking-widest"> Contact Information</h3>
                <ul className="mt-5 flex flex-col gap-5 text-white tracking-wider">
                    <li>
                        <a href="#">Address: Adjecent Sunu Assurance </a>
                    </li>
                    <li>
                        <a href="#">Phone: +233 535 097 486</a>
                    </li>
                    <li>
                        <a href="#">Email: jingdoli@gmail.com</a>
                    </li>
                </ul>
            </div>
            <div className="w-full h-full flex flex-col justify-center">
                <h3 className="text-white text-2xl tracking-widest">Newsletter</h3>
                <div className="flex mt-5">
                    <input type="text" className="w-44 h-14 p-3" placeholder="Your email"/>
                    <button className="w-32 h-14 bg-orange-500 text-white text-base tracking-widest">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="w-full h-12 flex justify-center items-center bg-[#5738814D] ">
            <p className="text-white text-lg tracking-wider">Copyright @ 2024. All rights reserved</p>
        </div>
   </footer>
  )
}
