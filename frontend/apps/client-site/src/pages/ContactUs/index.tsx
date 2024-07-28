import { MailOpen, MapPin, Smartphone } from "lucide-react";
import { Footer } from "../../components/custom/Footer";
import { Navbar } from "../../components/custom/Navbar";

export default function ContactUs() {
  return (
    <main className='flex flex-col items-start m-auto min-h-screen w-full bg-gray-100'>
        <Navbar/>

        {/* Image */}
        <section className='w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] bg-[url("/assets/contactus.png")] bg-center bg-cover bg-no-repeat relative'>
        </section>

        {/* Contact Us */}
        <section className='w-full grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10'>
            <div className='w-full flex flex-col items-center gap-5 justify-center'>
                {['Phone Number', 'Address', 'Email Address'].map((title, index) => (
                    <div key={index} className='w-full p-4 sm:p-6 bg-white flex flex-row items-center shadow-md rounded-lg'>
                        <div className='h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-orange-300 flex justify-center items-center mr-4'>
                            {index === 0 && <Smartphone className="text-orange-700 size-6 sm:size-8"/>}
                            {index === 1 && <MapPin className="text-orange-700 size-6 sm:size-8"/>}
                            {index === 2 && <MailOpen className="text-orange-700 size-6 sm:size-8"/>}
                        </div> 
                        <div>
                            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold'>
                                {title}
                            </h3>  
                            <p className="text-gray-700 text-xs sm:text-sm font-semibold">
                                {index === 0 && '+233 53 509 7486'}
                                {index === 1 && <>Adjecent Sunu Assurance 61<br/>George Bush Hwy GA-157-8719</>}
                                {index === 2 && 'jingdoli@gmail.com'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full lg:col-span-2 bg-white p-6 sm:p-8 rounded-lg shadow-md'>
                <h3 className='text-xl sm:text-2xl font-semibold uppercase mb-3 sm:mb-5'>
                    Send a message
                </h3> 
                <p className="text-gray-700 text-sm mb-6">
                    If you got any questions don't hesitate to send us a message
                </p>
                <form className='w-full flex flex-col gap-4 sm:gap-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                        <input id='firstName' placeholder='First Name' className='w-full h-12 sm:h-16 text-gray-700 bg-white shadow-md border border-gray-300 rounded-lg px-4'/>
                        <input id='lastName' placeholder='Last Name' className='w-full h-12 sm:h-16 text-gray-700 bg-white shadow-md border border-gray-300 rounded-lg px-4'/>
                        <input id='email' type='email' placeholder='Email' className='w-full h-12 sm:h-16 text-gray-700 bg-white shadow-md border border-gray-300 rounded-lg px-4'/>
                        <input id='phone' placeholder='Phone Number' className='w-full h-12 sm:h-16 text-gray-700 bg-white shadow-md border border-gray-300 rounded-lg px-4'/> 
                    </div>
                    <textarea id='message' placeholder='Message' className='w-full h-32 sm:h-40 text-gray-700 bg-white shadow-md border border-gray-300 rounded-lg p-4'/>   
                    <button type="submit" className="w-full sm:w-32 text-base sm:text-lg h-12 bg-orange-600 text-white rounded hover:bg-orange-700 uppercase tracking-wider">Send</button>
                </form>
            </div>
        </section>

        {/* Google Maps */}
        <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10">
            <div className="w-full py-6 sm:py-8 flex items-center justify-center flex-col text-center">
                <h3 className='text-2xl sm:text-3xl md:text-4xl text-gray-800 font-semibold mb-3 sm:mb-5'>
                    Find Us On Google Maps
                </h3>
                <p className="text-gray-500 font-semibold text-sm sm:text-base">
                    Discover our location: Long Lian Industry and Trade on Google Maps - Visit us today!
                </p>
            </div>
            <div className="w-full aspect-w-16 aspect-h-9 py-6 sm:py-8">
                <iframe 
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094856!2d144.95373531535066!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e4f6f8917e5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1615428945422!5m2!1sen!2sau" 
                    allowFullScreen={false}
                    loading="lazy">
                </iframe>
            </div>
        </section>

        <Footer/>
    </main>
  )
}