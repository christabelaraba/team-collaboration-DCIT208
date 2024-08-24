import { Footer } from '../../components/custom/Footer'
import { Navbar } from '../../components/custom/Navbar'
import Product from '../../components/custom/Product'
import { useQuery } from '@tanstack/react-query'
import { getProductList } from '../../api/data/query'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useElementOnScreen } from '../../hooks/useElementOnScreen'
import { useState } from 'react'
import { ProductType } from '../../api/schema'

export default function Home() {
	const { t } = useTranslation()
	const [startFirstAnimation, setStartFirstAnimation] = useState(false);
	const [startSecondAnimation, setstartSecondAnimation] = useState(false)
	const [startThirdAnimation, setStartThirdAnimation] = useState(false)

	const elementOne = useElementOnScreen({
		root: null, 
		rootMargin: '0px',
		treshold: 1.0
	}, () => {
		if (!startFirstAnimation) setStartFirstAnimation(true)
	});

	const elementTwo = useElementOnScreen({
		root: null,
		rootMargin: '0px',
		treshold: 1.0
	}, () => {
		if (!startSecondAnimation) setstartSecondAnimation(true)
	});

	const elementThree = useElementOnScreen({
		root: null,
		rootMargin: '0px',
		treshold: 1.0
	}, () => {
		if (!startThirdAnimation) setStartThirdAnimation(true)
	});

	const { data, isLoading } = useQuery({
		queryKey: ['products'],
		queryFn: () => getProductList(),
	})
	const productList: ProductType[] = data?.data;

	return (
		<main className='pt-14 sm:pt-16 md:pt-18 lg:pt-20'>
			<Navbar />
			<section className='w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-[url("/assets/hero.jpg")] bg-no-repeat bg-cover bg-center'>
				{' '}
				<div className='lg:animate-slide-right delay-0 w-full md:w-10/12 lg:w-8/12 h-full bg-[#000522BF] clip flex flex-col px-4 sm:px-6 md:px-10 gap-3 sm:gap-4 md:gap-5 justify-center'>
					<h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium w-full md:w-3/4 leading-tight tracking-wider text-white lg:animate-slide-right animation-delay-200 '>
						{t("Powering Your World with Reliable")}<span className='text-orange-500 mx-3'>{t("Generators")}</span>
					</h3>
					<p className='text-white text-sm sm:text-base md:text-lg lg:text-xl w-full md:w-3/4 leading-normal mt-2 sm:mt-3 md:mt-5 lg:mt-10 tracking-wide sm:tracking-wider lg:animate-slide-up animation-delay-500'>
						{t("To provide you with stable reliable electricity, Let you enjoy unlimited convienience in life")}
					</p>
					<Link to='/generator'>
						<button className='p-2 sm:p-3  px-4 sm:px-6 md:px-8 lg:px-16 w-32 sm:w-36 md:w-40 lg:w-44 rounded-lg mt-3 sm:mt-4 md:mt-5 lg:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl  tracking-wider flex justify-center items-center bg-orange-700 text-white'>
							{t("Explore")}
						</button>
					</Link>
					
				</div>
			</section>

			{/* About */}
			<section className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 py-12 sm:py-16 md:py-20 lg:py-32 xl:py-52 bg-[url("/assets/about-bg.png")] bg-cover bg-no-repeat bg-center px-4 sm:px-6 md:px-10 lg:px-16 ${startFirstAnimation && 'lg:animate-bg-slide-in'}`}>
				<div className='w-full flex justify-center lg:justify-end relative' ref={elementOne.containerRef}>
					<img
						src='/assets/about-img-02.jpg'
						alt='about-page'
						className={`w-full sm:w-4/5 md:w-3/4 lg:w-[561px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[452px] object-cover object-center ${startFirstAnimation ? 'lg:animate-slide-down': ''}`}
					/>
					<img
						src='/assets/longlian-about.png'
						alt='about-page'
						className={`hidden lg:block w-[561px] h-[452px] object-cover object-center absolute top-16 -right-10 ${startFirstAnimation ? 'lg:animate-slide-right' : ''}`}
					/>
				</div>

				<div className={`w-full lg:w-11/12 xl:w-9/12 flex flex-col relative mt-6 lg:mt-0 lg:ml-10 xl:ml-32 [&>p]:mb-4 sm:[&>p]:mb-5 md:[&>p]:mb-6 lg:[&>p]:mb-7 ${startFirstAnimation && 'lg:animate-slide-left'}`}>
					<h3 className='text-orange-500 text-lg sm:text-xl font-semibold'>{t("About")}</h3>

					<h3 className='text-xl sm:text-2xl md:text-3xl text-navy-500 font-medium py-2 sm:py-3'>
						{t("Know More About LongLian")}
					</h3>

					<p className='text-sm sm:text-base md:text-lg'>
						{t("Our company, Long Lian Industry and Trading Limited, specializes in diesel generators and has been in operation for over 20 years. We adhere to the principles of human-centered design, follow professional production standards, and provide quality after-sales service. Our commitment to continuous research, development, and meeting market demands has always been our hallmark. We continuously invest in and produce the latest international cutting-edge technology. Our products come in various volumes and sizes, are lightweight, produce low noise, consume less fuel, emit less, and guarantee smooth startup and performance. Our products serve as an ideal main power supply and emergency backup power supply")}
					</p>

					<p className='text-sm sm:text-base md:text-lg'>
						{t("Over the years, our company has established long-term partnerships with world-renowned companies such as CUMMINS, Perkins, Weichai, Yuchai, and Shangchai. Our business has expanded to Southeast Asia, the Middle East, and South America, with our products being widely utilized in various industries, including: powerhouse stations, telecommunications stations, military service, railway industry, road and construction, banking , real estate, manufacturing, hospitals, schools and other industries. Our comprehensive range of products meets all power supply needs, as attested to by our satisfied customers.")}
					</p>

					<p className='text-sm sm:text-base md:text-lg'>
						{t("Africa is growing fast, but faces power shortages. China's Belt and Road initiative aims to help. We're excited to be part of it, bringing our products to support Africa's growth and development.")}
					</p>

					<Link to= '/faq'>
						<button className='p-2 sm:p-3 text-base sm:text-lg md:text-xl max-w-32 sm:max-w-36 md:max-w-44 tracking-wider flex justify-center items-center bg-orange-600 text-white'>
							{t("Learn more")}
						</button>
					</Link>
					
				</div>
			</section>

			{/* Product */}
			<section ref={elementTwo.containerRef} className='w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32'>
				<div className={`inline-flex items-center flex-wrap md:flex-nowrap md:col-span-2 gap-4 ${startSecondAnimation && 'lg:animate-slide-right'}`}>
				{!isLoading &&
					productList?.slice(0, 2)?.map(product => (
						<Link key={product.id} to={`/generators/details/${product.id}`}>
							<Product key={product.id} {...product} />
						</Link>
					))}
					</div>
				<div className={`bg-blue-900 p-4 sm:p-5 mt-6 sm:mt-8 md:mt-10 h-auto sm:h-[90%] md:h-[85%] lg:h-[80%] ${startSecondAnimation && 'animate-slide-left'}`}>
					<h3 className='text-white text-lg sm:text-xl'>{t("Top Products")}</h3>
					<hr className='bg-gray-400 my-2 sm:my-3 w-10/12' />
					{!isLoading &&
						productList?.slice(3, 6).map(product => (
							<Link key={product.id} to={`/generators/details/${product.id}`}>
								<div className='bg-white h-8 sm:h-10 flex justify-center items-center relative mt-4 sm:mt-5 md:mt-7'>
									<div className='bg-orange-600 w-1 sm:w-1.5 absolute left-0 h-full'></div>
									<p className='text-black text-sm sm:text-base truncate w-11/12'>
										{product.model} {product.description}
									</p>
								</div>
							</Link>
						))}
				</div>
			</section>

			{/* Core Values */}
			<section ref={elementThree.containerRef} className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16'>
				<div className='flex flex-col justify-center relative'>
					<h3 className={`text-orange-500 text-lg sm:text-xl font-semibold ${startThirdAnimation ? 'animate-slide-down':''}`}>{t("Why Choose Us")}</h3>

					<h3 className={`text-2xl sm:text-3xl md:text-4xl text-navy-500 font-medium py-2 sm:py-3 ${startThirdAnimation ? 'animate-slide-down' : ''}`}>
						{t("Our Core Values")}
					</h3>

					<p className='mt-2 sm:mt-3 text-base sm:text-lg md:text-xl tracking-wide sm:tracking-wider leading-snug animate-slide-right'>
						{t("At Long Lian Industry and Trade Co, Ltd, we believe that strong values are the foundation of trust, innovation, and exceptional results. Our core values guide our actions,decisions, and relationships, and are at the heart of everything we do.")}
					</p>
				</div>

				<div className='flex flex-col lg:flex-row relative mt-6 lg:mt-0'>
					<div className='flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20'>
						<div className={`p-4 sm:p-5 shadow bg-white space-y-2 sm:space-y-3 relative rounded-md ${startThirdAnimation && 'lg:animate-slide-top-left-down'}`}>
							<div className='w-16 h-16 sm:w-20 sm:h-20 absolute -top-8 sm:-top-10 bg-orange-600 rounded-full flex justify-center items-center'>
								<h3 className='text-2xl sm:text-3xl font-semibold tracking-wider text-white'>01</h3>
							</div>

							<h3 className='text-xl sm:text-2xl text-navy-500 font-medium py-2 sm:py-3'>
								{t("Reliable")}
							</h3>
							<p className='text-sm sm:text-base'>
								{t("We prioritize reliability, ensuring our durable and sturdy equipment performsoptimally in harsh environments.")}
							</p>
						</div>

						<div className={`p-4 sm:p-5 shadow bg-white space-y-2 sm:space-y-3 relative rounded-md mt-4 sm:mt-5 ${startThirdAnimation && 'lg:animate-slide-bottom-left-up'}`}>
							<div className='w-16 h-16 sm:w-20 sm:h-20 absolute -top-8 sm:-top-10 bg-orange-600 rounded-full flex justify-center items-center'>
								<h3 className='text-2xl sm:text-3xl font-semibold tracking-wider text-white'>03</h3>
							</div>

							<h3 className='text-xl sm:text-2xl text-navy-500 font-medium py-2 sm:py-3'>
								{t("Innovative")}
							</h3>
							<p className='text-sm sm:text-base'>
								{t("We embrace innovation, offering fully automatic configuration and robust protection performance to meet your evolving needs.")}
							</p>
						</div>
					</div>

					<div className='flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20 mt-12 lg:mt-20 lg:px-6 xl:px-12'>
						<div className={`p-4 sm:p-5 shadow bg-white relative space-y-2 sm:space-y-3 rounded-md ${startThirdAnimation && 'lg:animate-slide-top-right-down'}`}>
							<div className='w-16 h-16 sm:w-20 sm:h-20 absolute -top-8 sm:-top-10 bg-orange-600 rounded-full flex justify-center items-center'>
								<h3 className='text-2xl sm:text-3xl font-semibold tracking-wider text-white'>02</h3>
							</div>

							<h3 className='text-xl sm:text-2xl text-navy-500 font-medium py-2 sm:py-3'>
								{t("Efficient")}
							</h3>
							<p className='text-sm sm:text-base'>
								{t("We strive for efficiency achieving high power density and economic efficiency through innovative design and material")}
							</p>
						</div>

						<div className={`p-4 sm:p-5 shadow bg-white space-y-2 sm:space-y-3 rounded-md relative mt-4 sm:mt-5 ${startThirdAnimation && 'lg:animate-slide-bottom-right-up'}`}>
							<div className='w-16 h-16 sm:w-20 sm:h-20 absolute -top-8 sm:-top-10 bg-orange-600 rounded-full flex justify-center items-center'>
								<h3 className='text-2xl sm:text-3xl font-semibold tracking-wider text-white'>04</h3>
							</div>

							<h3 className='text-xl sm:text-2xl text-navy-500 font-medium py-2 sm:py-3'>
								{t("Customer-Centric")}
							</h3>
							<p className='text-sm sm:text-base'>
								{t("We put customers first, providing silent configuration options and a complete range of products to meet the unique demands of various industries")}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Kpi */}
			<section className='w-full bg-[url("/assets/longlian-about.png")] bg-cover bg-no-repeat bg-center flex flex-col items-center'>
  <div className='w-full grid grid-cols-1 gap-8 md:grid-cols-3 bg-[#000522BF] p-8 py-20'>
    <div className='w-full flex flex-col items-center gap-4'>
      <div className='w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#FBECE6] mt-3 flex items-center justify-center'>
        <img src='/assets/20-years.png' alt='20 years' className='h-20 w-20 md:h-32 md:w-32' />
      </div>
      <div>
        <p className='text-center text-sm md:text-lg text-white max-w-xs'>
          {t("Focus on generator set products")}
        </p>
      </div>
    </div>

    <div className='w-full flex flex-col items-center gap-4'>
      <div className='w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#FBECE6] mt-3 flex items-center justify-center'>
        <img src='/assets/generator.png' alt='generator' className='h-20 w-20 md:h-28 md:w-28' />
      </div>
      <div>
        <p className='text-center text-sm md:text-lg text-white max-w-xs'>
          {t("Small size, light weight, low noise")}
        </p>
      </div>
    </div>

    <div className='w-full flex flex-col items-center gap-4'>
      <div className='w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#FBECE6] mt-3 flex items-center justify-center'>
        <img src='/assets/house.png' alt='house' className='h-20 w-20 md:h-28 md:w-28' />
      </div>
      <div>
        <p className='text-center text-sm md:text-lg text-white max-w-xs'>
          {t("Less exhaust gas, less fuel consumption, good starting performance")}
        </p>
      </div>
    </div>
  </div>
</section>


			{/* testimonials */}
			<section className='w-full flex flex-col items-center p-6 sm:p-8 md:p-10 py-16 sm:py-20 md:py-32 lg:py-44'>
				<h3 className='text-orange-500 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider text-center'>
					{t("Clients Testimonials")}
				</h3>
				<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-8 sm:mt-10 max-w-[1450px]'>
					<div className='p-5 rounded-md shadow-2xl bg-white space-y-3'>
						<div className='flex items-center gap-3'>
							<img src='./assets/card2.png' alt='logo' className='w-16 h-16  rounded-full' />
							<div>
								<h3 className='text-lg text-orange-500 font-medium'>{t("Prof Freda Abban")}</h3>
								<p className='text-sm text-gray-500'>{t("Deputy Speaker")}</p>
							</div>
						</div>
						<div className='pt-5'>
							{t("Long Lian Industry and Trade's products have been a game changer for our business.Their generator have proven to be reliable,efficient and durable. We can't recommend them enough")}
						</div>
					</div>

					<div className='p-5 rounded-md shadow-2xl bg-white space-y-3'>
						<div className='flex items-center gap-3'>
							<img src='./assets/card1.jpg' alt='logo' className='w-16 h-16  rounded-full' />
							<div>
								<h3 className='text-lg text-orange-500 font-medium'>{t("Xia Wanqui")}</h3>
								<p className='text-sm text-gray-500'>{t("Deputy Speaker")}</p>
							</div>
						</div>
						<div className='pt-5'>
							{t("Long Lian Industry and Trade's products have been a game changer for our business.Their generator have proven to be reliable,efficient and durable. We can't recommend them enough")}
						</div>
					</div>

					<div className='p-5 rounded-md shadow-2xl bg-white space-y-3'>
						<div className='flex items-center gap-3'>
							<img src='./assets/card3.jpeg' alt='logo' className='w-16 h-16  rounded-full' />
							<div>
								<h3 className='text-lg text-orange-500 font-medium'>{t("Prof Elliet Allan")}</h3>
								<p className='text-sm text-gray-500'>{t("Deputy Speaker")}</p>
							</div>
						</div>
						<div className='pt-5'>
							{t("Long Lian Industry and Trade's products have been a game changer for our business.Their generator have proven to be reliable,efficient and durable. We can't recommend them enough")}
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	)
}