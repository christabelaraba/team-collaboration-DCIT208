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
        <section className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 md:py-10'>
            <div className='w-full flex flex-col items-center gap-4 sm:gap-5 justify-center'>
                {['Phone Number', 'Address', 'Email Address'].map((title, index) => (
                    <div key={index} className='w-full p-4 sm:p-6 md:p-8 bg-white flex flex-row items-center'>
                        <div className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-orange-300 flex justify-center items-center mr-3 sm:mr-4 md:mr-5'>
                            {index === 0 && <Smartphone className="text-orange-700 size-6 sm:size-8 md:size-10"/>}
                            {index === 1 && <MapPin className="text-orange-700 size-6 sm:size-8 md:size-10"/>}
                            {index === 2 && <MailOpen className="text-orange-700 size-6 sm:size-8 md:size-10"/>}
                        </div> 
                        <div>
                            <h3 className='text-lg sm:text-xl md:text-2xl font-semibold'>
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

            <div className='w-full col-span-1 lg:col-span-2 bg-white p-4 sm:p-6 md:p-8 lg:p-10'>
                <div className='w-full gap-y-4 sm:gap-y-6 py-6 sm:py-8 md:py-10 tracking-wider'>
                    <h3 className='text-xl sm:text-2xl font-semibold uppercase mb-3 sm:mb-4 md:mb-5'>
                        Send a message
                    </h3> 
                    <p className="text-gray-700 text-xs sm:text-sm">
                        If you got any questions don't hesitate to send us a message
                    </p>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-6 sm:py-8 md:py-10 tracking-wider'>
                        {['First Name', 'Last Name', 'Email', 'Phone Number'].map((placeholder, index) => (
                            <input 
                                key={index}
                                id={placeholder.toLowerCase().replace(' ', '_')} 
                                placeholder={placeholder} 
                                className='w-full h-12 sm:h-14 md:h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-3 sm:px-4 md:px-5'
                            />
                        ))}
                    </div>
                    <div className='w-full tracking-widest'>
                        <textarea 
                            id='message' 
                            placeholder='Message' 
                            className='w-full h-32 sm:h-36 md:h-40 text-gray-700 bg-white shadow-md border-black rounded-lg p-3 sm:p-4 md:p-5'
                        />   
                        <button type="submit" className="w-full sm:w-auto px-4 sm:px-6 text-lg sm:text-xl h-10 sm:h-12 mt-6 sm:mt-8 bg-orange-600 text-white rounded hover:bg-orange-700 uppercase tracking-wider">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Google Maps */}
        <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10">
            <div className="w-full py-6 sm:py-8 md:py-10 flex items-center justify-center flex-col">
                <h3 className='text-2xl sm:text-3xl md:text-4xl text-gray-800 font-semibold mb-3 sm:mb-4 md:mb-5 text-center'>
                    Find Us On Google Maps
                </h3>
                <p className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg text-center">
                    Discover our location: Long Lian Industry and Trade on Google Maps - Visit us today!
                </p>
            </div>
            <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 py-6 sm:py-8 md:py-10">
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