import { Navbar } from '../../components/custom/Navbar'
import Product from '../../components/custom/Product'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getProductList } from '../../api/data/query'
import { Footer } from '../../components/custom/Footer'
import { FileQuestion } from 'lucide-react'
import { Link } from 'react-router-dom'
import { t } from 'i18next'
import { useState } from 'react'
import Dialog from '../../components/custom/Dialog'
import { contactUs } from '../../api/data/mutations'
export default function Generators() {
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProductList(),
    })
    const productList = data?.data
    
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
        <main className='flex flex-col items-start m-auto min-h-screen w-full'>
            <Navbar />
            <section className='w-full h-[50vh] bg-[url("/assets/hero-gen.jpg")] bg-center bg-cover bg-no-repeat relative'>
                <div className='w-full h-full absolute top-0 left-0 bg-black/60 flex items-center justify-center'>
                    <h2 className='text-white text-3xl md:text-4xl lg:text-6xl tracking-wider font-semibold text-center px-4'>
                        {t("DIESEL GENERATORS")}
                    </h2>
                </div>
            </section>
            {/* Kpi */}
            <section className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-8 lg:px-32 mt-10'>
                {[
                    { title: t('Power Range'), value: '10 - 1250 KVA' },
                    { title: t('Fuel Type'), value: t('DIESEL') },
                    { title: t('Frequencies'), value: '50 & 60 Hz' },
                    { title: t('Warranty'), value: t('18 MONTHS') },
                ].map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-center gap-2 mb-4 lg:mb-0'>
                        <h4 className='text-lg md:text-xl font-semibold text-gray-600'>{item.title}</h4>
                        <h2 className='text-2xl md:text-3xl text-orange-600 italic font-bold'>{item.value}</h2>
                    </div>
                ))}
            </section>
            {/* Products */}
            <section className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 mt-10'>
                <div className='w-full p-6 md:p-10 bg-gray-100 flex flex-col items-center mb-4 lg:mb-0'>
                    <h3 className='text-xl md:text-2xl font-semibold'>{t("Quick Search")}</h3>
                    <hr className='w-10/12 my-3 bg-black' />
                    <div className='w-full flex flex-col pl-5 gap-3'>
                        {!isLoading && productList?.length > 0 &&
                            productList?.map(product => (
                                <Link to={`/generators/details/${product.id}`} className='w-full'>
                                    <p className='text-black text-left text-sm sm:text-base  btn btn-ghost'>
                                        <span className=' '>{product.model}</span>
                                    </p>
                                </Link>
                            ))}
                    </div>
                </div>
                <div className='w-full col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        !isLoading && productList?.length > 0 && productList?.map(product => (
                            <Link to={`/generators/details/${product.id}`} className='w-full'>
                                <Product key={product.id} {...product} />
                            </Link>
                        ))
                    }
                </div>
            </section>
            {/* Make Enquiry */}
            <section className='w-full px-4 md:px-8 lg:px-16 py-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center gap-5 mb-4'>
                            <div className='h-12 w-12 md:h-16 md:w-16 rounded-full bg-orange-600 flex justify-center items-center'>
                                <FileQuestion className='text-white size-6 md:size-10' />
                            </div>
                            <h3 className='text-2xl md:text-3xl font-semibold'>{t("MAKE ENQUIRY")}</h3>
                        </div>
                        <p className='text-base md:text-lg tracking-wide leading-snug'>
                            {t("Didn't find what you were looking for? No problem! Contact us today to discuss your generator needs and let us help you find the perfect solution.")}
                        </p>
                    </div>
                    <div className='w-full mt-6 lg:mt-0'>
                        <form >
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                            <input
                                id='firstName'
                                placeholder={t('First Name')} 
                                className='w-full h-12 md:h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
                                value={formData.first_name}
                                required
                                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                            />
                            <input
                                id='lastName'
                                placeholder={t('Last Name')} 
                                className='w-full h-12 md:h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
                                value={formData.last_name}
                                required
                                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                            />
                            <input
                                id='email'
                                type='email'
                                placeholder={t('Email')} 
                                className='w-full h-12 md:h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
                                value={formData.email}
                                required
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <input
                                id='phone'
                                placeholder={t('Phone Number')} 
                                className='w-full h-12 md:h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
                                value={formData.phone_number}
                                required
                                onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                            />
                        </div>
                        <div className='w-full'>
                            <textarea
                                id='message'
                                placeholder={t('Message')} 
                                className='w-full h-32 md:h-40 text-gray-700 bg-white shadow-md border-black rounded-lg px-5 mb-4'
                                value={formData.message}
                                required
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                            <button
                                type='submit'
                                disabled={isPending}
                                onClick={submit}
                                className={`w-full sm:w-32 text-lg md:text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-700 uppercase tracking-wider ${isPending && 'animate-pulse'}`}
                            >
                                {t("Send")}
                            </button>
                        </div>
                        </form>
                        
                    </div>
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