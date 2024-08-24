import { MailOpen, MapPin, Smartphone } from "lucide-react";
import { Footer } from "../../components/custom/Footer";
import { Navbar } from "../../components/custom/Navbar";
import { useMutation } from "@tanstack/react-query";
import { contactUs } from "../../api/data/mutations";
import { useState } from "react";
import Dialog from "../../components/custom/Dialog";
import { t } from "i18next";
interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    message: string;
}
interface ApiResponse {
    data: {
        response_code: string;
        response_message: string;
    }
}
export default function ContactUs() {
    const [openDialog, setOpenDialog] = useState(false);
    const [message, setMessage] = useState('')
    const [formData, setFormData] = useState<FormData>({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message: ''
    });
    
    const { mutateAsync, isPending } = useMutation<ApiResponse, Error, FormData>({
        mutationFn: (data: FormData) => contactUs(data)
    });
    
    
    const submit = async () => {
         if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone_number || !formData.message) {
            setMessage("Please fill out all required fields.");
            setOpenDialog(true);
            return;
        }
        try {
            const response = await mutateAsync(formData) as ApiResponse;
            setMessage(null);
            if (response?.data?.response_code === "100") {
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    message: ''
                });  
                setOpenDialog(true);
            } else {
                setMessage(response?.data?.response_message);
                setOpenDialog(true);
            }
        } catch (error) {
            setMessage("Sorry, an error occurred. Please try again");
            setOpenDialog(true);
        }
    }
    return (
        <main className='flex flex-col items-start m-auto min-h-screen w-full bg-gray-100'>
            <Navbar />
            {/* Image */}
            <section className='w-full h-[70vh] bg-[url("/assets/longlian-about.png")] bg-center bg-cover bg-no-repeat relative'>
            </section>
            {/* Contact Us */}
            <section className="w-full flex flex-col md:flex-row items-center gap-4">
                <div className='w-full md:w-fit p-10  flex flex-wrap md:flex-col items-center gap-5 justify-center'>
                    <div className='w-full h-32 p-10  bg-white flex flex-row items-center '>
                        <div className='h-16 w-16 rounded-full bg-orange-600 flex justify-center items-center mr-5'>
                            <Smartphone className="text-gray-200 size-10" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>
                                {t("Phone Number")}
                            </h3>
                            <p className="text-gray-700 text-sm font-semibold">
                                +233 53 509 7486
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-32 py-10 px-2  bg-white flex flex-row items-center '>
                        <div className='h-16 w-16 rounded-full bg-orange-600 flex justify-center items-center '>
                            <MapPin className="text-gray-200 size-10" />
                        </div>
                        <div className="mx-5 ">
                            <h3 className='text-2xl font-semibold'>
                                {t("Address")}
                            </h3>
                            <p className="text-gray-700 text-sm font-semibold">
                                {t("Adjacent Sunu Assurance")}
                                <br />
                                {t("61 George Bush Hwy GA-157-8719")}
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-32 p-10  bg-white flex flex-row items-center '>
                        <div className='h-16 w-16 rounded-full bg-orange-600 flex justify-center items-center mr-5'>
                            <MailOpen className="text-gray-200 size-10" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>
                                {t("Email Address")}
                            </h3>
                            <p className="text-gray-700 text-sm font-semibold">
                                {t("longliangh07@gmail.com")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-white px-10'>
                    <div className='w-full gap-x-72 gap-y-6 py-10 tracking-wider'>
                        <h3 className='text-2xl font-semibold uppercase mb-5'>
                            {t("Send a message")}
                        </h3>
                        <p className="text-gray-700 text-sm">
                            {t("If you got any questions don't hesitate to send us a message")}
                        </p>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 py-10 tracking-wider'>
                            <input id='text' placeholder={t('First Name')} value={formData.first_name}
                                className=' h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
                                onChange={e => setFormData((prev) => ({ ...prev, first_name: e.target.value }))}
                            />
                            <input id='text' placeholder={t('Last Name')} value={formData.last_name}
                                className=' h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
                                onChange={e => setFormData((prev) => ({ ...prev, last_name: e.target.value }))}
                            />
                            <input id='email' placeholder={t('Email')} value={formData.email}
                                className='h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
                                onChange={e => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            />
                            <input id='text' placeholder={t('Phone Number')} value={formData.phone_number}
                                className='h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
                                onChange={e => setFormData((prev) => ({ ...prev, phone_number: e.target.value }))}
                            />
                        </div>
                        <div className='w-full tracking-widest'>
                            <textarea id='message'placeholder={t('Message')}  value={formData.message}
                                className='w-full h-40  text-gray-700 bg-white shadow-md border-black rounded-lg px-5 '
                                onChange={e => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                            />
                            <button type="submit"
                                disabled={isPending}
                                className={`w-32 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider disabled:bg-orange-300 disabled:cursor-not-allowed ${isPending && 'animate-pulse'}`}
                                onClick={submit}
                            >
                                {t("Send")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Google Maps */}
            <section className="w-full flex flex-col items-center justify-center">
                <div className="w-full py-10 flex items-center justify-center flex-col">
                    <h3 className='text-4xl text-gray-800 font-semibold mb-5 '>
                        {t("Find Us On Google Maps")}
                    </h3>
                    <p className="text-gray-500 font-semibold text-md ">
                        {t("Discover our location: Long Lian Industry and Trade on Google Maps - Visit us today!")}
                    </p>
                </div>
               <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 py-6 sm:py-8 md:py-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3970.662144619191!2d-0.1983611!3d5.6168056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzcnMDAuNSJOIDDCsDExJzU0LjEiVw!5e0!3m2!1sen!2sgh!4v1724452167516!5m2!1sen!2sgh"
                    style={{border: 0}} className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
                </iframe>
            </div>
            </section>
            <Footer />
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                {message ? message :
                    <>
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <svg className="w-52 h-52 text-[#D33D03] self-center mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7.29 4.908a54.4 54.4 0 0 1 9.42 0l1.511.13a2.89 2.89 0 0 1 2.313 1.546a.236.236 0 0 1-.091.307l-6.266 3.88a4.25 4.25 0 0 1-4.4.045L3.47 7.088a.236.236 0 0 1-.103-.293A2.89 2.89 0 0 1 5.78 5.039z" />
                                <path fill="currentColor" d="M3.362 8.767a.248.248 0 0 0-.373.187a30.4 30.4 0 0 0 .184 7.56A2.89 2.89 0 0 0 5.78 18.96l1.51.131c3.135.273 6.287.273 9.422 0l1.51-.13a2.89 2.89 0 0 0 2.606-2.449a30.4 30.4 0 0 0 .161-7.779a.248.248 0 0 0-.377-.182l-5.645 3.494a5.75 5.75 0 0 1-5.951.061z" />
                            </svg>
                            <p className="uppercase font-bold text-3xl">{t("THANK YOU!")}</p>
                            <p className="text-xl text-[#84868D]">{t("Your message has been sent. We'll be in touch shortly to answer all your question")}</p>
                        </div>
                    </>
                }
            </Dialog>
        </main>
    )
}