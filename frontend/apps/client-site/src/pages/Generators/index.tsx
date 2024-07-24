import { Navbar } from '../../components/custom/Navbar'
import Product from '../../components/custom/Product'
import { useQuery } from '@tanstack/react-query'
import { getProductList } from '../../api/data/query'
import { Footer } from '../../components/custom/Footer'

export default function Generators() {
     const {data } = useQuery({
        queryKey: ["products"], 
        queryFn: () => getProductList()

    })
    const productList = data?.data
  return (
    <main className='flex flex-col items-start m-auto min-h-screen w-full '>
        <Navbar/>
        <section className='w-full h-[50vh] bg-[url("/assets/hero-gen.jpg")] bg-center bg-cover bg-no-repeat relative'>
            <div className='w-full h-full absolute top-0 left-0 bg-black/60 flex items-center justify-center'>
                <h2 className='text-white text-6xl tracking-wider font-semibold'>
                    DIESEL GENERATORS
                </h2>
            </div>
        </section>

        {/* Kpi */}
        <section className='w-full grid grid-cols-4 gap-4 px-32 mt-10'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h4 className='text-xl font-semibold text-gray-600'> Power Range</h4>
                <h2 className='text-3xl text-orange-600 italic font-bold'> 10 - 1250 KVA</h2>
            </div>

            <div className='flex flex-col items-center justify-center gap-2'>
                <h4 className='text-xl font-semibold text-gray-600'> Fuel Type</h4>
                <h2 className='text-3xl text-orange-600 italic font-bold'> DIESEL</h2>
            </div>

            <div className='flex flex-col items-center justify-center gap-2'>
                <h4 className='text-xl font-semibold text-gray-600'> Frequencies</h4>
                <h2 className='text-3xl text-orange-600 italic font-bold'> 50 & 60 Hz</h2>
            </div>

            <div className='flex flex-col items-center justify-center gap-2'>
                <h4 className='text-xl font-semibold text-gray-600'> Warranty</h4>
                <h2 className='text-3xl text-orange-600 italic font-bold'> 18 MONTHS</h2>
            </div>
        </section>

        {/* Products */}
        <section className='w-full grid grid-cols-3 gap-4 px-16 mt-10'>
            <div className='w-full p-10 bg-gray-100 flex flex-col items-center'>
                <h3 className='text-2xl font-semibold'>
                    Quick Search
                </h3>  
                <hr className='w-10/12 my-3 bg-black'/>
            </div>

            <div className='w-full col-span-2 grid grid-cols-2 gap-4'>
                {productList?.map(product => <Product key={product.id} {...product}/>)}
            </div>
        </section>

        {/* Make Enquiry */}
        <section className='w-9/12 grid grid-cols-2 gap-10 py-16'>
            <div className=' flex flex-col justify-center relative pl-32'>
                <div className='flex items-center gap-5'>
                  <div className='h-16 w-16 rounded-full bg-orange-600 flex justify-center items-center'>
                    </div>  
                    <h3 className='text-3xl font-semibold'>
                        MAKE ENQUIRY
                    </h3>
                </div>

                <p className='mt-3 text-lg tracking-wide leading-snug' >
                    Didn't find what you were looking for? No problem! Contact us today to discuss your generator needs and let us help you find the perfect solution.
                </p>
            </div>
            <div className='w-full grid grid-cols-2 gap-10 py-16'>
                <input id='text' placeholder='First Name' className='w-full h-16 text-white bg-black shadow-sm border-black rounded-lg'>
                    
                </input>
            </div>
        </section>
        <Footer />
        
    </main>
  )
}
