import { Link, useParams } from 'react-router-dom'
import { Navbar } from '../../../components/custom/Navbar'
import { Footer } from '../../../components/custom/Footer'
import Products from '../../../api/data/dummy'
import Product from '../../../components/custom/Product'
import { Download, Phone } from 'lucide-react'

export default function Details() {
const {id} = useParams()

const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <main className='flex flex-col items-start m-auto min-h-screen w-full '>
        <Navbar/>

        {/* Generator Details */}
        <section className='w-full grid grid-cols-2 py-10 px-10'>
            <div>
            <h2 className='font-bold text-6xl py-3'>
                100 KVA
            </h2>

            <h4 className='font-semibold text-orange-600 uppercase text-xl mb-5'>
                Single phase silent diesel generator
            </h4>
            <div className='w-full grid grid-cols-2 '>
                <div>
                    <div className='w-full flex flex-row'>
                    <p className='text-black'>
                        Engine:
                    </p>
                    <p className='text-gray-500'>
                        YIYTUR-JFDH
                    </p>
                </div>
                <div className='w-full flex flex-row'>
                    <p className='text-black'>
                        Prime:
                    </p>
                    <p className='text-gray-500'>
                        YIYTUR-JFDH
                    </p>
                </div>
                <div className='w-full flex flex-row'>
                    <p className='text-black'>
                        Alternator:
                    </p>
                    <p className='text-gray-500'>
                        YIYTUR-JFDH
                    </p>
                </div>
                <div className='py-5'>
                    <button onClick={() => openModal('enquiry_modal')} type="submit" className="w-44 text-xl h-12 bg-orange-600 text-white rounded mx-auto uppercase tracking-wider font-semibold">Make Enquiry</button>
                </div>
                </div>
                
                <div className=''>
                    <div className='w-full flex flex-row'>
                        <p className='text-black'>
                            Voltage:
                        </p>
                        <p className='text-gray-500'>
                            YIYTUR-JFDH
                        </p>
                    </div>
                    <div className='w-full flex flex-row'>
                        <p className='text-black'>
                            Frequency:
                        </p>
                        <p className='text-gray-500'>
                            YIYTUR-JFDH
                        </p>
                    </div>
                    <div className='w-full flex flex-row'>
                    <p className='text-black'>
                        Amp Per Phase:
                    </p>
                    <p className='text-gray-500'>
                        YIYTUR-JFDH
                    </p>
                </div>
                <div className='py-5'>
                    <button onClick={() => openModal('order_modal')} type="submit" className="w-44 text-xl h-12 bg-white text-orange-600 border border-orange-600 rounded mx-auto uppercase tracking-wider font-semibold">Order Online</button>
                </div>
                </div>
            </div>
            </div>
            
            <div>
                {Products.data.slice(0, 1).map(product => <Product key={product.id} {...product}/>)}
                index:{id}
            </div>
        </section>

        {/* Technical Problems */}
        <section className='w-full flex flex-col items-center justify-center py-5'>
            <h3 className='font-semibold text-5xl text-black'>
                Technical Problems
            </h3>

            <div>

            </div>

            <div className='py-5'>
                <button  type="submit" className="w-full text-xl h-12 bg-white text-orange-600 border border-orange-600 rounded px-5 pt-2 pb-2  uppercase tracking-wider font-semibold flex flex-row">Download PDF <Download className='ml-2'/> </button>
            </div>
        </section>    

        {/* Related Products */}
        <section className='w-full px-10 py-10'>
            <h3 className='font-semibold text-4xl text-black mb-5'>
                Related Products
            </h3>

            <div className='w-full grid grid-cols-2'>
                <div className='w-full'>
                    <div className='flex flex-row items-center justify-center'>
                        <p className='text-xl'>
                            For more information about 
                        </p>
                        <p className='font-semibold text-gray-700 uppercase text-xl'>
                            Long Lian Industry and Trade Generators
                        </p>
                    </div>
                    <p className='text-gray-500 flex items-center justify-center text-lg'>
                        Get in touch to speak with our experts
                    </p>
                </div>
                <div className='ml-10'>
                    <Link to="/contactus"  className="w-48 text-lg h-20 bg-orange-600 text-white rounded uppercase tracking-wider font-semibold">Contact Us </Link>
                </div>
            </div>
        </section>
        <Footer/>

        {/* Enquiry Modal */}
      <dialog id="enquiry_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <div className='flex items-center justify-center flex-col'>
                <div className="">
               <span>
                    <img src="/assets/logo.png" alt="logo" className="w-48"/>
                </span>
            </div>
                <h3 className="font-bold text-lg ">Make Enquiry</h3>
                <p className='text-gray-500 mb-2'>Send us a message to answer all your questions</p>
            </div>
          
          <form>
            <div className='w-full grid grid-cols-2 gap-x-5'>
                <div className="form-control">
                    <input type="text" id="first_name" placeholder='First Name' name="first_name" className="input input-bordered my-3" />
                </div>
                <div className="form-control">
                    <input type="text" id="last_name" placeholder='Last Name' name="last_name" className="input input-bordered my-3" />
                </div>
                <div className="form-control">
                    <input type="email" id="email" placeholder='Email' name="email" className="input input-bordered my-3" />
                </div>
                <div className="form-control">
                    <input type="text" id="phone_number" placeholder='Phone Number' name="phone_number" className="input input-bordered my-3" />
                </div>
            </div>
            
            <div className="form-control">
              <textarea id="message"  placeholder='Message' name="message" className="textarea textarea-bordered mt-3"></textarea>
            </div>
            <div className="modal-action flex items-center justify-center flex-col ">
              <button type="submit" className="btn w-44 bg-red-500 my-3 uppercase text-xl text-white">send</button>
              <p className='uppercase text-lg'>or</p>
              <button type="button" onClick={() => (document.getElementById('enquiry_modal') as HTMLDialogElement).close()} className="btn w-44 bg-green-500 my-3 text-white text-md"> <Phone className='text-white'/> +2334567897</button>
            </div>
          </form>
        </div>
      </dialog>

       {/* Order Modal */}
      <dialog id="order_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-lg btn-circle btn-ghost absolute right-2 text-orange-600">✕</button>
          </form>
          
          <div className='flex items-center justify-center flex-col'>
                <div className="">
               <span>
                    <img src="/assets/logo.png" alt="logo" className="w-48"/>
                </span>
            </div>
                <h3 className="font-bold text-lg ">Order Form</h3>
                <p className='text-gray-500 mb-2'>Fill in the details below to place your order:</p>
            </div>
          <form>
            <div className='w-full grid grid-cols-2 gap-x-5 '>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input type="text"  className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input type="text"  className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="number" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text"  className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Address</span>
                    </label>
                    <input type="text"  className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Power (kVA) Required</span>
                    </label>
                    <input type="text"  className="input input-bordered" defaultValue="100 kVA"/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text"  className="input input-bordered" />
                </div>
            </div>

            <div className="form-control">
               <label className="label">
                    <span className="label-text">Message</span>
                </label>
              <textarea id="message" name="message" className="textarea textarea-bordered "></textarea>
            </div>
            
            <div className="form-control mt-4 flex items-center justify-center">
              <button type="submit" className="btn w-44 bg-orange-500 text-white text-xl">Submit Order</button>
            </div>
          </form>
        </div>
      </dialog>
    </main>
    
  )
}
