import { MailOpen, MapPin, Smartphone } from "lucide-react";
import { Footer } from "../../components/custom/Footer";
import { Navbar } from "../../components/custom/Navbar";

export default function ContactUs() {
  return (
    <main className='flex flex-col items-start m-auto min-h-screen w-full bg-gray-100'>
        <Navbar/>

        {/* Image */}
        <section className='w-full h-[65vh] bg-[url("/assets/contactus.png")] bg-center bg-cover bg-no-repeat relative'>
            
        </section>

        {/* Contact Us */}
        <section className='w-full grid grid-cols-3 gap-4 px-16 py-10'>
            <div className='w-full p-10  flex flex-col items-center gap-5 justify-center'>
                
                <div className='w-full h-32 p-10  bg-white flex flex-row items-center '>
                    <div className='h-16 w-16 rounded-full bg-orange-300 flex justify-center items-center mr-5'>
                        <Smartphone className="text-orange-700 size-10"/>
                    </div> 

                    <div>
                        <h3 className='text-2xl font-semibold'>
                        Phone Number
                        </h3>  
                        <p className="text-gray-700 text-sm font-semibold">
                            +233 53 509 7486
                        </p>
                    </div>
                    
                </div>

                <div className='w-full h-32 p-10  bg-white flex flex-row items-center '>
                    <div className='h-16 w-16 rounded-full bg-orange-300 flex justify-center items-center mr-5'>
                        <MapPin className="text-orange-700 size-10"/>
                    </div> 

                    <div>
                        <h3 className='text-2xl font-semibold'>
                            Address
                        </h3> 
                        <p className="text-gray-700 text-sm font-semibold">
                            Adjecent Sunu Assurance 61
                            <br/>
                            George Bush Hwy GA-157-8719
                        </p>
                    </div> 
                </div>

                <div className='w-full h-32 p-10  bg-white flex flex-row items-center '>
                    <div className='h-16 w-16 rounded-full bg-orange-300 flex justify-center items-center mr-5'>
                        <MailOpen className="text-orange-700 size-10"/>
                    </div> 

                    <div>
                        <h3 className='text-2xl font-semibold'>
                       Email Address
                    </h3>  
                    <p className="text-gray-700 text-sm font-semibold">
                        jingdoli@gmail.com
                    </p>
                    </div>
                    
                </div>
            </div>

            <div className='w-full col-span-2  gap-4 bg-white px-10'>
                <div className='w-full gap-x-72 gap-y-6 py-10 tracking-wider'>
                    <h3 className='text-2xl font-semibold uppercase mb-5'>
                        Send a message
                    </h3> 

                    <p className="text-gray-700 text-sm">
                        If you got any questions don't hesitate to send us a message
                    </p>
                <div className='w-full grid grid-cols-2 gap-x-12 gap-y-6 py-10 tracking-wider'>
                    <input id='text' placeholder='First Name' className='w-96 h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'/>
                    <input id='text' placeholder='Last Name' className='w-96 h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'/>
                    <input id='email' placeholder='Email' className='w-96 h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'/>
                    <input id='text' placeholder='Phone Number' className='w-96 h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'/> 
                </div>
                
                <div className='w-full tracking-widest'>
                    <textarea id='message' placeholder='Message' className='w-full h-40  text-gray-700 bg-white shadow-md border-black rounded-lg px-5 '/>   
                    <button  type="submit" className="w-32 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider">Send</button>
                </div>
            </div>
            </div>
        </section>

        {/* Google Maps */}
        <section className="w-full flex flex-col items-center justify-center">
            <div className="w-full py-10 flex items-center justify-center flex-col">
                <h3 className='text-4xl text-gray-800 font-semibold mb-5 '>
                    Find Us On Google Maps
                </h3>

                <p className="text-gray-500 font-semibold text-md ">
                    Discover our location: Long Lian Industry and Trade on Google Maps - Visit us today!
                </p>
            </div>
            <div className="w-full max-w-4xl aspect-w-16 aspect-h-10 py-10">
                <iframe 
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094856!2d144.95373531535066!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e4f6f8917e5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1615428945422!5m2!1sen!2sau" 
                    allowFullScreen = {false}
                    loading="lazy">
                </iframe>
            </div>
        </section>

        <Footer/>
    </main>
  )
}
