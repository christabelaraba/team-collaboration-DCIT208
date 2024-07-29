import { Link, useParams } from 'react-router-dom'
import { Navbar } from '../../../components/custom/Navbar'
import { Footer } from '../../../components/custom/Footer'
import { Download, Phone } from 'lucide-react'
import { getSingleProduct } from '../../../api/data/query'
import { useQuery } from '@tanstack/react-query'

export default function Details() {
    const {id} = useParams()

    const { data } = useQuery({
        queryKey: ["products"],
        queryFn: () => getSingleProduct(id as string)
    })
    const productList:any  = (data as any)?.data 

    const openModal = (modalId: string) => {
        const modal = document.getElementById(modalId) as HTMLDialogElement | null;
        if (modal) {
          modal.showModal();
        }
    };

    return (
        <main className='flex flex-col items-start m-auto min-h-screen w-full'>
            <Navbar/>

            {/* Generator Details */}
            <section className='w-full flex flex-col lg:flex-row items-center justify-between mt-16 sm:mt-20 py-6 sm:py-10 px-4 sm:px-6 md:px-10'>
                {/* Image - Now appears first on mobile */}
                <div className='w-full lg:w-1/2 mb-6 lg:mb-0 order-1 lg:order-2'>
                    <img src={productList.picture_url || "https://res.cloudinary.com/dzgzufiwm/image/upload/v1722091461/Jingdoli/Products/yga000scjqa51yutmyg4.jpg"} alt={productList?.model!} className='w-full h-auto'/>
                </div>
                
                {/* Product Details - Now appears second on mobile */}
                <div className='w-full lg:w-1/2 mt-6 lg:mt-0 order-2 lg:order-1'>
                    <h2 className='font-bold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-2 sm:py-3'>
                       {productList.prime}
                    </h2>

                    <h4 className='font-semibold text-orange-600 capitalize text-lg sm:text-xl mb-4 sm:mb-5'>
                        {productList.description}
                    </h4>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[500px]'>
                        {[
                            {label: 'Engine', value: productList.engine},
                            {label: 'Prime', value: productList.prime},
                            {label: 'Alternator', value: productList.alternator},
                            {label: 'Voltage', value: productList.voltage},
                            {label: 'Frequency', value: productList.frequency},
                            {label: 'Amp Per Phase', value: productList.amp_per_phase},
                        ].map((item, index) => (
                            <div key={index} className='w-full flex gap-2 items-center'>
                                <p className='text-black'>{item.label}:</p>
                                <p className='text-gray-500 capitalize'>{item.value}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                        <button onClick={() => openModal('enquiry_modal')} className="w-full sm:w-44 text-lg sm:text-xl h-12 bg-orange-600 text-white rounded uppercase tracking-wider font-semibold">Make Enquiry</button>
                        <button onClick={() => openModal('order_modal')} className="w-full sm:w-44 text-lg sm:text-xl h-12 bg-white text-orange-600 border border-orange-600 rounded uppercase tracking-wider font-semibold">Order Online</button>
                    </div>
                </div>
            </section>

            {/* Technical Problems */}
            <section className='w-full flex flex-col items-center justify-center py-6 sm:py-10 px-4 sm:px-6 md:px-10'>
                <h3 className='font-semibold text-3xl sm:text-4xl md:text-5xl text-black mb-6'>
                    Technical Problems
                </h3>

                <div className='w-full flex flex-col items-center my-5'>
                    <div className='w-full lg:w-10/12'>
                        {[1, 2].map((_, index) => (
                            <div key={index} className={`flex flex-col sm:flex-row border-y h-auto sm:h-16 w-full items-center justify-between px-4 sm:px-6 md:px-10 py-2 sm:py-0 ${index === 1 ? 'opacity-25' : ''}`}>
                                <p>{productList?.model} {productList?.prime}</p>
                                <p>{productList?.voltage}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='py-5 w-full sm:w-auto'>
                    <button type="button" className="w-full sm:w-auto text-lg sm:text-xl h-12 bg-white text-orange-600 border border-orange-600 rounded px-4 sm:px-6 py-2 uppercase tracking-wider font-semibold flex items-center justify-center">
                        Download PDF <Download className='ml-2'/>
                    </button>
                </div>
            </section>    

            {/* Related Products */}
            <section className='w-full px-4 sm:px-6 md:px-10 py-6 sm:py-10'>
                <div className='w-full flex flex-col lg:flex-row items-center justify-center'>
                    <div className='w-full lg:w-8/12 mb-6 lg:mb-0'>
                        <p className='text-lg sm:text-xl text-center lg:text-left'>
                            For more information about 
                            <span className='font-semibold text-gray-700 uppercase'> Long Lian Industry and Trade Generators</span>
                            {' '}Get in touch to speak with our experts
                        </p>   
                    </div>
                    <div className='w-full lg:w-4/12 flex justify-center lg:justify-end'>
                        <Link to="/contactus" className="w-48 p-4 sm:p-5 text-lg sm:text-xl h-16 sm:h-20 bg-orange-600 text-white rounded uppercase tracking-wider font-semibold flex items-center justify-center">Contact Us</Link>
                    </div>
                </div>
            </section>
            <Footer/>

            {/* Modals */}
            {['enquiry_modal', 'order_modal'].map((modalId) => (
                <dialog key={modalId} id={modalId} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box max-w-[600px]">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-orange-600">✕</button>
                        </form>
                        <div className='flex items-center justify-center flex-col'>
                            <div className="">
                                <img src="/assets/logo.png" alt="logo" className="w-36 sm:w-48"/>
                            </div>
                            <h3 className="font-bold text-lg ">{modalId === 'enquiry_modal' ? 'Make Enquiry' : 'Order Form'}</h3>
                            <p className='text-gray-500 mb-2 text-center'>
                                {modalId === 'enquiry_modal' 
                                    ? 'Send us a message to answer all your questions'
                                    : 'Fill in the details below to place your order:'}
                            </p>
                        </div>
                        
                        <form className='mt-4'>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {/* Form fields */}
                                {/* ... (Keep your existing form fields, but ensure they're responsive) */}
                            </div>
                            
                            <div className="form-control mt-4">
                                <textarea id="message" name="message" placeholder='Message' className="textarea textarea-bordered"></textarea>
                            </div>
                            
                            <div className="modal-action flex items-center justify-center flex-col">
                                <button type="submit" className="btn w-full sm:w-44 bg-orange-500 my-3 uppercase text-lg sm:text-xl text-white">
                                    {modalId === 'enquiry_modal' ? 'Send' : 'Submit Order'}
                                </button>
                                {modalId === 'enquiry_modal' && (
                                    <>
                                        <p className='uppercase text-lg'>or</p>
                                        <button type="button" onClick={() => (document.getElementById('enquiry_modal') as HTMLDialogElement).close()} className="btn w-full sm:w-44 bg-green-500 my-3 text-white text-md">
                                            <Phone className='text-white'/> +2334567897
                                        </button>
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                </dialog>
            ))}
        </main>
    )
}