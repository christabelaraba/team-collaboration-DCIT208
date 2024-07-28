import { Link, useParams } from 'react-router-dom'
import { Navbar } from '../../../components/custom/Navbar'
import { Footer } from '../../../components/custom/Footer'
import Products from '../../../api/data/dummy'
import Product from '../../../components/custom/Product'
import { Download, Phone } from 'lucide-react'
import { getSingleProduct } from '../../../api/data/query'
import { useQuery } from '@tanstack/react-query'
import { ProductType } from '../../../api/schema'

export default function Details() {
const {id} = useParams()

const { data } = useQuery({
        queryKey: ["products"],
        queryFn: () => getSingleProduct(id as string)
    })
    const productList: ProductType = data?.data 
    console.log(productList)

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
        <section className='w-full flex items-center justify-between mt-20 py-10 px-10'>
            <div className='w-1/2'>
            <h2 className='font-bold uppercase text-6xl py-3'>
               {productList.prime}
            </h2>

            <h4 className='font-semibold text-orange-600 capitalize text-xl mb-5'>
                {productList.description}
            </h4>
            <div className='w-full grid grid-cols-2 max-w-[500px]'>
                <div>
                    <div className='w-full flex gap-2 items-center'>
                    <p className='text-black'>
                        Engine:
                    </p>
                    <p className='text-gray-500 capitalize'>
                       {productList.engine}
                    </p>
                </div>
                <div className='w-full flex gap-2 items-center mt-2'>
                    <p className='text-black'>
                        Prime:
                    </p>
                    <p className='text-gray-500 capitalize'>
                        {productList.prime}
                    </p>
                </div>
                <div className='w-full flex gap-2 items-center mt-2'>
                    <p className='text-black'>
                        Alternator:
                    </p>
                    <p className='text-gray-500'>
                        {productList.alternator}
                    </p>
                </div>
                <div className='py-5'>
                    <button onClick={() => openModal('enquiry_modal')} type="submit" className="w-44 text-xl h-12 bg-orange-600 text-white rounded mx-auto uppercase tracking-wider font-semibold">Make Enquiry</button>
                </div>
                </div>
                
                <div className=''>
                    <div className='w-full flex gap-2 items-center '>
                        <p className='text-black'>
                            Voltage:
                        </p>
                        <p className='text-gray-500'>
                            {productList.voltage}
                        </p>
                    </div>
                    <div className='w-full flex mt-2 gap-2 items-center'>
                        <p className='text-black'>
                            Frequency:
                        </p>
                        <p className='text-gray-500'>
                            {productList.frequency}
                        </p>
                    </div>
                    <div className='w-full flex mt-2 gap-2 items-center'>
                    <p className='text-black'>
                        Amp Per Phase:
                    </p>
                    <p className='text-gray-500'>
                        {productList.amp_per_phase}
                    </p>
                </div>
                <div className='py-5'>
                    <button onClick={() => openModal('order_modal')} type="submit" className="w-44 text-xl h-12 bg-white text-orange-600 border border-orange-600 rounded mx-auto uppercase tracking-wider font-semibold">Order Online</button>
                </div>
                </div>
            </div>
            </div>
            
            {/* <div>
                <Product key={productList.id} {...productList}/>

            </div> */}
            <div className=''>
                <img src={productList.picture_url || "https://res.cloudinary.com/dzgzufiwm/image/upload/v1722091461/Jingdoli/Products/yga000scjqa51yutmyg4.jpg"} alt={productList?.model!} className=''/>
            </div>
        </section>

        {/* Technical Problems */}
        <section className='w-full flex flex-col items-center justify-center py-5'>
            <h3 className='font-semibold text-5xl text-black'>
                Technical Problems
            </h3>

            <div className='w-full flex flex-col items-center my-5'>
                <div className='  w-10/12 '>
                    <div className='flex border-y h-16 w-full items-center justify-between px-96'>
                        <p>{productList?.model} {productList?.prime}</p>
                        <p>{productList?.voltage}</p>
                    </div>
                    <div className='flex border-b h-16 w-full items-center justify-between px-96'>
                        <p>{productList?.prime}</p>
                        <p>{productList?.voltage}</p>
                    </div>
                </div>
                <div className='  w-10/12 '>
                    <div className='flex border-y h-16 w-full items-center justify-between px-96 opacity-25'>
                        <p>{productList?.voltage}</p>
                        <p>{productList?.model} {productList?.prime}</p>
                    </div>
                    <div className='flex border-b h-16 w-full items-center justify-between px-96 opacity-10'>
                        <p>{productList?.voltage}</p>
                        <p>{productList?.prime}</p>
                    </div>
                </div>
            </div>

            <div className='py-5'>
                <button  type="submit" className="w-full text-xl h-12 bg-white text-orange-600 border border-orange-600 rounded px-5 pt-2 pb-2  uppercase tracking-wider font-semibold flex flex-row">Download PDF <Download className='ml-2'/> </button>
            </div>
        </section>    

        {/* Related Products */}
        <section className='w-full px-10 py-10'>
            {/* <h3 className='font-semibold text-4xl text-black mb-5'>
                Related Products
            </h3> */}

            <div className='w-full flex justify-center'>
                <div className='w-8/12 flex items-center'>
                <div className='w-full'>
                    <div className='flex flex-row items-center justify-center'>
                        <p className='text-xl text-center'>
                            For more information about 
                            <span className='font-semibold text-gray-700 uppercase text-xl'> Long Lian Industry and Trade Generators</span>
                         {' '}Get in touch to speak with our experts
                        </p>   
                    </div>
                </div>
                <div className=' w-6/12 ml-10'>
                    <Link to="/contactus"  className="w-48 p-5 text-lg h-20 bg-orange-600 text-white rounded uppercase tracking-wider font-semibold">Contact Us </Link>
                </div>
            </div>
            </div>
        </section>
        <Footer/>

        {/* Enquiry Modal */}
      <dialog id="enquiry_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-[600px]">
             <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-orange-600">✕</button>
          </form>
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
      <dialog id="order_modal" className="modal ">
        <div className="modal-box max-w-[600px]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-orange-600">✕</button>
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
