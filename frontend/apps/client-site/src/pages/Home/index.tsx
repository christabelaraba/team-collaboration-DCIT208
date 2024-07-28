// import { useQuery } from '@tanstack/react-query'
// import {Card} from '../../components/custom/Card'
import { Footer } from '../../components/custom/Footer'
import { Navbar } from '../../components/custom/Navbar'
import Product from '../../components/custom/Product'
// import { getProductList } from '../../api/data/query'
import Products from '../../api/data/dummy'
import { Link } from 'react-router-dom'

export default function Home() {
    // const {data } = useQuery({
    //     queryKey: ["products"], 
    //     queryFn: () => getProductList()

    // })
    // const productList = data?.data
    return (
    <main className='flex flex-col items-start m-auto min-h-screen w-full '>
        <Navbar/>
        <section className='w-full h-[80vh] bg-[url("/assets/hero.jpg")] bg-no-repeat bg-cover bg-center'>
            <div className='w-8/12 h-full bg-[#000522BF] clip flex flex-col px-10 gap-5 justify-center'>
                <h3 className='text-6xl font-medium w-3/4 leading-tight tracking-wider text-white'>
                    Powering Your World with Reliable <span className='text-orange-500' >Generators</span>
                </h3>
                <p className='text-white text-xl w-3/4 leading-normal mt-10 tracking-widest'>
                    To provide you with stable reliable electricity, Let you enjoy unlimited convienience in life
                </p>
                <Link to ="/generator" className='p-5 px-16 w-44 rounded-lg mt-10 text-3xl tracking-wider flex justify-center items-center bg-orange-700 text-white'>Explore</Link>
            </div>
        </section>

        {/* About */}

        <section className='w-full grid grid-cols-2 gap-10  py-52 bg-[url("/assets/about-bg.png")] bg-cover bg-no-repeat bg-center'>
        
                    <div className='w-full  flex  justify-end relative'>
                        <img src='/assets/about-img-02.jpg' alt='about-page' className='w-[561px] h-[452px] object-cover object-center '/>
                        <img src='/assets/about-img-01.jpg' alt='about-page' className='w-[561px] h-[452px] object-cover object-center absolute top-16 left-52'/>
                    </div>

                    <div className='w-9/12 flex flex-col relative ml-32 [&>p]:mb-7'>
                        <h3 className=' text-orange-500 text-xl font-semibold'>
                            About
                        </h3>
                        
                        <h3 className="text-3xl text-navy-500 font-medium py-3">
                            Know More About Jingdoli
                        </h3>

                        <p>
                            Jingdoli Industry and Trade Co., Ltd, specializes in diesel generator sets, prioritizing humanized design, professional production, and reliable support. Our generators are compact, efficient, and quiet, ideal for main and backup power. We partner with top companies and serve customers worldwide.
                        </p>

                        <p>
                            Our products are used in various fields like power plants, telecom, hospitals, and more. We offer a wide range of models to meet the needs of different industries, and our customers are very satisfied with our products.
                        </p>

                        <p>
                            Africa is growing fast, but faces power shortages. China's "Belt and Road" initiative aims to help. We're excited to be part of it, bringing our products to support Africa's growth and development       
                        </p>

                        <Link to="/faq" className='p-3 text-xl max-w-44 tracking-wider flex justify-center items-center bg-orange-600 text-white'>Learn more</Link>

                          
                    </div>
            
        </section>

        {/* Product */}
        <section className='w-full h-full grid grid-cols-3 gap-10 py-16 px-32'>
            {/* {productList?.slice(0, 2).map(product => <Product key={product.id} {...product}/>)} */}
            {Products.data.slice(0, 2).map(product => <Product key={product.id} {...product}/>)}

            <div className='bg-blue-900 p-5 mt-10 h-[80%]'>
                <h3 className='text-white text-xl'>Top Products</h3>
                <hr className='bg-gray-400 my-3 w-10/12'/>

                <div className='bg-white h-10 flex justify-center items-center relative mt-7'>
                    <div className='bg-orange-600 w-1.5 absolute left-0 h-full '>

                    </div>

                    <p className='text-black'>High Speed Steel T1/Din 1.3355 Ma...</p>
                </div>

                <div className='bg-white h-10 flex justify-center items-center relative my-2'>
                    <div className='bg-orange-600 w-1.5 absolute left-0 h-full '>

                    </div>

                    <p className='text-black'>High Speed Steel T1/Din 1.3355 Ma...</p>
                </div>

                <div className='bg-white h-10 flex justify-center items-center relative'>
                    <div className='bg-orange-600 w-1.5 absolute left-0 h-full '>

                    </div>

                    <p className='text-black'>High Speed Steel T1/Din 1.3355 Ma...</p>
                </div>
            </div>
        </section>

        {/* Core Values */}
        <section className='w-full grid grid-cols-2 gap-10 py-16'>
            <div className=' flex flex-col justify-center relative pl-32'>

            <h3 className=' text-orange-500 text-xl font-semibold'>
                Why Choose Use
            </h3>

            <h3 className="text-4xl text-navy-500 font-medium py-3">
                Our Core Values
            </h3>

            <p className='mt-3 text-xl tracking-wider leading-snug'>
                At Jigdoli Industry and Trade Co, Ltd, we believe that strong values are the foundation of trust, innovation, and exceptional results.
                Our core values guide our actions, decisions. and relationships, and are at the heart of everything we do.
            </p>

            </div>

            <div className=' flex relative'>

                <div className='flex flex-col gap-y-10'>
                    <div className=" p-5 shadow bg-white space-y-3 relative rounded-md">
                        <div className='w-20 h-20 absolute -top-10 bg-orange-600  rounded-full flex justify-center items-center'>
                            <h3 className='text-3xl font-semibold tracking-wider text-white'>
                                01
                            </h3>
                        </div>
                    
                         <h3 className="text-2xl text-navy-500 font-medium py-3">
                            Reliable
                        </h3>
                        <p>
                            We prioritize reliability, ensuring our durable and sturdy equipment performs optimally in harsh environments. 
                        </p>
                
                    </div>

                    <div className="p-5 shadow bg-white space-y-3 relative rounded-md mt-5">
                        <div className='w-20 h-20 absolute -top-10 bg-orange-600  rounded-full flex justify-center items-center'>
                            <h3 className='text-3xl font-semibold tracking-wider text-white'>
                                03
                            </h3>
                        </div>
                    
                         <h3 className="text-2xl text-navy-500 font-medium py-3">
                            Innovative
                        </h3>
                        <p>
                            We embrace innovation, offering fily enomatic configuration and rebust protection performance to meet your euewing needs 
                        </p>
                
                    </div>
                </div>

                <div className='flex flex-col gap-y-10 mt-20 px-12 '>
                    <div className="p-5 shadow bg-white relative space-y-3 rounded-md">
                        <div className='w-20 h-20 absolute -top-10 bg-orange-600  rounded-full flex justify-center items-center'>
                            <h3 className='text-3xl font-semibold tracking-wider text-white'>
                                02
                            </h3>
                        </div>
                    
                         <h3 className="text-2xl text-navy-500 font-medium py-3">
                            Efficient
                        </h3>
                        <p>
                            We strive for efficiency achieving high power density and economic efficiency 
                            through innovative design and material 
                        </p>
                
                    </div>

                    <div className="p-5 shadow bg-white space-y-3 rounded-md relative mt-5">
                        <div className='w-20 h-20 absolute -top-10 bg-orange-600  rounded-full flex justify-center items-center'>
                            <h3 className='text-3xl font-semibold tracking-wider text-white'>
                                04
                            </h3>
                        </div>
                    
                         <h3 className="text-2xl text-navy-500 font-medium py-3">
                            Customer-Centric
                        </h3>
                        <p>
                            We put customers first, providing silent configuration options and a complete range of products to meet the unique demands of various industries
                        </p>
                
                    </div>
                </div>

            </div>
        </section>

        {/* Kpi */}
         <section className='w-full bg-[url("/assets/kpi.png")] bg-cover bg-no-repeat bg-center flex flex-col items-center'>
            <div className='w-full grid grid-cols-3 gap-10 bg-[#000522BF] p-10 py-44'>
                <div className="w-full flex flex-col items-center gap-5">
                    <div className="w-44 h-44 rounded-full bg-[#FBECE6] mt-5 items-center justify-center flex relative">
                        <img src="/assets/20-years.png" alt="20 years" className="h-36 w-36"/> 
                    </div>
                    <div>
                        <p className="text-xl text-white max-w-80 text-center">Focus on generator set products</p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-5">
                    <div className="w-44 h-44 rounded-full bg-[#FBECE6] mt-5 items-center justify-center flex">
                    <img src="/assets/generator.png" alt="generator" className="h-32 w-32 "/>
                    </div>
                    <div>
                        <p className="text-xl text-white max-w-80 text-center">small size, light weight, no noise</p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-5">
                    <div className="w-44 h-44 rounded-full bg-[#FBECE6] items-center justify-center flex  ">
                    <img src="/assets/house.png" alt="house" className="h-36 w-36"/>
                    </div>
                    <div>
                        <p className="text-xl text-white max-w-80 text-center">Less exhaust gas, less fuel consumption, good starting performance</p>
                    </div>
                </div>

            </div>
        </section>

        {/* testimonials */}
        <section className='w-full flex flex-col items-center  p-10 py-44'>
            <h3 className=' text-orange-500 text-4xl font-semibold tracking-wider'>
                Clients Testimonials
            </h3>
            <div className='w-full grid grid-cols-3 gap-10 mt-10 max-w-[1450px]'>
                <div className="p-5 rounded-md shadow-2xl bg-white space-y-3">
                    <div className="flex items-center gap-3">
                        <img src="./assets/card3.jpeg" alt="logo" className="w-16 h-16  rounded-full"/>
                    <div>
                        <h3 className="text-lg text-orange-500 font-medium">Prof Fredrick Abban</h3>
                        <p className="text-sm text-gray-500">Deputy Speaker</p>
                    </div>
                    </div>
                    <div className="pt-5">
                        Long Lian Industry and Trade's products have been a game changer for our business.Their generator have proven to be reliable,efficient and durable. We can't recommend them enough
                    </div>
                </div>

                <div className="p-5 rounded-md shadow-2xl bg-white space-y-3">
                    <div className="flex items-center gap-3">
                        <img src="./assets/card1.jpg" alt="logo" className="w-16 h-16  rounded-full"/>
                    <div>
                        <h3 className="text-lg text-orange-500 font-medium">Xia Wanqiu</h3>
                        <p className="text-sm text-gray-500">Deputy Speaker</p>
                    </div>
                    </div>
                    <div className="pt-5">
                        Long Lian Industry and Trade's products have been a game changer for our business.Their generator have proven to be reliable,efficient and durable. We can't recommend them enough
                    </div>
                </div>

                <div className="p-5 rounded-md shadow-2xl bg-white space-y-3">
                    <div className="flex items-center gap-3">
                        <img src="./assets/card2.png" alt="logo" className="w-16 h-16  rounded-full"/>
                    <div>
                        <h3 className="text-lg text-orange-500 font-medium">Prof Freda Abban</h3>
                        <p className="text-sm text-gray-500">Deputy Speaker</p>
                    </div>
                    </div>
                    <div className="pt-5">
                        Long Lian Industry and Trade's products have revolutionized our business. Their generators are incredibly reliable, efficient, and durable. I highly recommend them to everyone.
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </main>
  )
}
