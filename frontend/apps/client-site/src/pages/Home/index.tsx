import {Card} from '../../components/custom/Card'
import { Footer } from '../../components/custom/Footer'
import { Navbar } from '../../components/custom/Navbar'
import Product from '../../components/custom/Product'
import Products from '../../api/data/dummy'

export default function Home() {
    return (
        <main className="pt-14 sm:pt-16 md:pt-18 lg:pt-20">
        <Navbar/>
        <section className='w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-[url("/assets/hero.jpg")] bg-no-repeat bg-cover bg-center'>            <div className='w-full md:w-10/12 lg:w-8/12 h-full bg-[#000522BF] clip flex flex-col px-4 sm:px-6 md:px-10 gap-3 sm:gap-4 md:gap-5 justify-center'>
                <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium w-full md:w-3/4 leading-tight tracking-wider text-white'>
                    Powering Your World with Reliable <span className='text-orange-500'>Generators</span>
                </h3>
                <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl w-full md:w-3/4 leading-normal mt-2 sm:mt-3 md:mt-5 lg:mt-10 tracking-wide sm:tracking-wider'>
                    To provide you with stable reliable electricity, Let you enjoy unlimited convienience in life
                </p>
                <button className='p-2 sm:p-3 md:p-4 lg:p-5 px-4 sm:px-6 md:px-8 lg:px-16 w-32 sm:w-36 md:w-40 lg:w-44 rounded-lg mt-3 sm:mt-4 md:mt-5 lg:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wider flex justify-center items-center bg-orange-700 text-white'>
                    Explore
                </button>
            </div>
        </section>

        {/* About */}
        <section className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 py-12 sm:py-16 md:py-20 lg:py-32 xl:py-52 bg-[url("/assets/about-bg.png")] bg-cover bg-no-repeat bg-center px-4 sm:px-6 md:px-10 lg:px-16'>
            <div className='w-full flex justify-center lg:justify-end relative'>
                <img src='/assets/about-img-02.jpg' alt='about-page' className='w-full sm:w-4/5 md:w-3/4 lg:w-[561px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[452px] object-cover object-center'/>
                <img src='/assets/about-img-01.jpg' alt='about-page' className='hidden lg:block w-[561px] h-[452px] object-cover object-center absolute top-16 -left-10 xl:left-0'/>
            </div>

            <div className='w-full lg:w-11/12 xl:w-9/12 flex flex-col relative mt-6 lg:mt-0 lg:ml-10 xl:ml-32 [&>p]:mb-4 sm:[&>p]:mb-5 md:[&>p]:mb-6 lg:[&>p]:mb-7'>
                <h3 className='text-orange-500 text-lg sm:text-xl font-semibold'>
                    About
                </h3>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl text-navy-500 font-medium py-2 sm:py-3">
                    Know More About Jingdoli
                </h3>

                <p className="text-sm sm:text-base md:text-lg">
                    Jingdoli Industry and Trade Co., Ltd, specializes in diesel generator sets, prioritizing humanized design, professional production, and reliable support. Our generators are compact, efficient, and quiet, ideal for main and backup power. We partner with top companies and serve customers worldwide.
                </p>

                <p className="text-sm sm:text-base md:text-lg">
                    Our products are used in various fields like power plants, telecom, hospitals, and more. We offer a wide range of models to meet the needs of different industries, and our customers are very satisfied with our products.
                </p>

                <p className="text-sm sm:text-base md:text-lg">
                    Africa is growing fast, but faces power shortages. China's "Belt and Road" initiative aims to help. We're excited to be part of it, bringing our products to support Africa's growth and development       
                </p>

                <button className='p-2 sm:p-3 text-base sm:text-lg md:text-xl max-w-32 sm:max-w-36 md:max-w-44 tracking-wider flex justify-center items-center bg-orange-600 text-white'>
                    Learn more
                </button>
            </div>
        </section>

        {/* Product */}
        <section className='w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32'>
            {Products.data.slice(0, 2).map(product => <Product key={product.id} {...product}/>)}

            <div className='bg-blue-900 p-4 sm:p-5 mt-6 sm:mt-8 md:mt-10 h-auto sm:h-[90%] md:h-[85%] lg:h-[80%]'>
                <h3 className='text-white text-lg sm:text-xl'>Top Products</h3>
                <hr className='bg-gray-400 my-2 sm:my-3 w-10/12'/>

                <div className='bg-white h-8 sm:h-10 flex justify-center items-center relative mt-4 sm:mt-5 md:mt-7'>
                    <div className='bg-orange-600 w-1 sm:w-1.5 absolute left-0 h-full'></div>
                    <p className='text-black text-sm sm:text-base'>High Speed Steel T1/Din 1.3355 Ma...</p>
                </div>

                <div className='bg-white h-8 sm:h-10 flex justify-center items-center relative my-2'>
                    <div className='bg-orange-600 w-1 sm:w-1.5 absolute left-0 h-full'></div>
                    <p className='text-black text-sm sm:text-base'>High Speed Steel T1/Din 1.3355 Ma...</p>
                </div>

                <div className='bg-white h-8 sm:h-10 flex justify-center items-center relative'>
                    <div className='bg-orange-600 w-1 sm:w-1.5 absolute left-0 h-full'></div>
                    <p className='text-black text-sm sm:text-base'>High Speed Steel T1/Din 1.3355 Ma...</p>
                </div>
            </div>
        </section>

        {/* Core Values */}
        <section className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16'>
            <div className='flex flex-col justify-center relative'>
                <h3 className='text-orange-500 text-lg sm:text-xl font-semibold'>
                    Why Choose Us
                </h3>

                <h3 className="text-2xl sm:text-3xl md:text-4xl text-navy-500 font-medium py-2 sm:py-3">
                    Our Core Values
                </h3>

                <p className='mt-2 sm:mt-3 text-base sm:text-lg md:text-xl tracking-wide sm:tracking-wider leading-snug'>
                    At Jigdoli Industry and Trade Co, Ltd, we believe that strong values are the foundation of trust, innovation, and exceptional results.
                    Our core values guide our actions, decisions. and relationships, and are at the heart of everything we do.
                </p>
            </div>

            <div className='flex flex-col lg:flex-row relative mt-6 lg:mt-0'>
                <div className='flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20'>
                    <div className="p-4 sm:p-5 shadow bg-white space-y-2 sm:space-y-3 relative rounded-md">
                        <div className='w-16 h-16 sm:w-20 sm:h-20 absolute -top-8 sm:-top-10 bg-orange-600 rounded-full flex justify-center items-center'>
                            <h3 className='text-2xl sm:text-3xl font-semibold tracking-wider text-white'>
                                01
                            </h3>
                        </div>
                    
                        <h3 className="text-xl sm:text-2xl text-navy-500 font-medium py-2 sm:py-3">
                            Reliable
                        </h3>
                        <p className="text-sm sm:text-base">
                            We prioritize reliability, ensuring our durable and sturdy equipment performs optimally in harsh environments. 
                        </p>
                    </div>

                    <div className="p-4 sm:p-5 shadow bg-white space-y-2 sm:space-y-3 relative rounded-md mt-4 sm:mt-5">
                        <div className='w-16 h-16 sm:w-20 sm:h-20 absolute -top-8 sm:-top-10 bg-orange-600 rounded-full flex justify-center items-center'>
                            <h3 className='text-2xl sm:text-3xl font-semibold tracking-wider text-white'>
                                03
                            </h3>
                        </div>
                    
                        <h3 className="text-xl sm:text-2xl text-navy-500 font-medium py-2 sm:py-3">
                            Innovative
                        </h3>
                        <p className="text-sm sm:text-base">
                            We embrace innovation, offering fully automatic configuration and robust protection performance to meet your evolving needs. 
                        </p>
                    </div>
                </div>

                <div className='flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20 mt-12 lg:mt-20 lg:px-6 xl:px-12'>
                    <div className="p-4 sm:p-5 shadow bg-white relative space-y-2 sm:space-y-3 rounded-md">
                        <div className='w-16 h-16 sm:w-20 sm:h-20 absolute -top-8 sm:-top-10 bg-orange-600 rounded-full flex justify-center items-center'>
                            <h3 className='text-2xl sm:text-3xl font-semibold tracking-wider text-white'>
                                02
                            </h3>
                        </div>
                    
                        <h3 className="text-xl sm:text-2xl text-navy-500 font-medium py-2 sm:py-3">
                            Efficient
                        </h3>
                        <p className="text-sm sm:text-base">
                            We strive for efficiency achieving high power density and economic efficiency 
                            through innovative design and material 
                        </p>
                    </div>

                    <div className="p-4 sm:p-5 shadow bg-white space-y-2 sm:space-y-3 rounded-md relative mt-4 sm:mt-5">
                        <div className='w-16 h-16 sm:w-20 sm:h-20 absolute -top-8 sm:-top-10 bg-orange-600 rounded-full flex justify-center items-center'>
                            <h3 className='text-2xl sm:text-3xl font-semibold tracking-wider text-white'>
                                04
                            </h3>
                        </div>
                    
                        <h3 className="text-xl sm:text-2xl text-navy-500 font-medium py-2 sm:py-3">
                            Customer-Centric
                        </h3>
                        <p className="text-sm sm:text-base">
                            We put customers first, providing silent configuration options and a complete range of products to meet the unique demands of various industries
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Kpi */}
<<<<<<< HEAD
         <section className='w-full bg-[url("/assets/kpi.png")] bg-cover bg-no-repeat bg-center flex flex-col items-center'>
            <div className='w-full grid grid-cols-3 gap-10 bg-[#000522BF] p-10 py-40'>
                <div className="w-full flex flex-col items-center gap-5">
                    <div className="w-44 h-44 rounded-full bg-[#FBECE6] mt-5 items-center justify-center flex relative">
                        <img src="/assets/20-years.png" alt="20 years" className="h-36 w-36"/> 
=======
        <section className='w-full bg-[url("/assets/kpi.png")] bg-cover bg-no-repeat bg-center flex flex-col items-center'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 bg-[#000522BF] p-6 sm:p-8 md:p-10 py-16 sm:py-20 md:py-32 lg:py-44'>
                <div className="w-full flex flex-col items-center gap-4 sm:gap-5">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-[#FBECE6] mt-4 sm:mt-5 items-center justify-center flex relative">
                        <img src="/assets/20-years.png" alt="20 years" className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36"/> 
>>>>>>> 0b287350edc44d92f28390c6d7078a261b0e63d5
                    </div>
                    <div>
                        <p className="text-base sm:text-lg md:text-xl text-white max-w-60 sm:max-w-80 text-center">Focus on generator set products</p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-4 sm:gap-5">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-[#FBECE6] mt-4 sm:mt-5 items-center justify-center flex">
                        <img src="/assets/generator.png" alt="generator" className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32"/>
                    </div>
                    <div>
                        <p className="text-base sm:text-lg md:text-xl text-white max-w-60 sm:max-w-80 text-center">Small size, light weight, no noise</p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-4 sm:gap-5">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-[#FBECE6] items-center justify-center flex">
                        <img src="/assets/house.png" alt="house" className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36"/>
                    </div>
                    <div>
                        <p className="text-base sm:text-lg md:text-xl text-white max-w-60 sm:max-w-80 text-center">Less exhaust gas, less fuel consumption, good starting performance</p>
                    </div>
                </div>
            </div>
        </section>

        {/* testimonials */}
        <section className='w-full flex flex-col items-center p-6 sm:p-8 md:p-10 py-16 sm:py-20 md:py-32 lg:py-44'>
            <h3 className='text-orange-500 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider text-center'>
                Clients Testimonials
            </h3>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-8 sm:mt-10 max-w-[1450px]'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
        <Footer/>
    </main>
  )
}