import { Navbar } from '../../components/custom/Navbar'
import Product from '../../components/custom/Product'
import { useQuery } from '@tanstack/react-query'
import { getProductList } from '../../api/data/query'
import { Footer } from '../../components/custom/Footer'
import { FileQuestion } from 'lucide-react'
import { Link } from 'react-router-dom'
import { t } from 'i18next'

export default function Generators() {
	const { data, isLoading } = useQuery({
		queryKey: ['products'],
		queryFn: () => getProductList(),
	})
	const productList = data?.data
	console.log(productList)

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
					{ title: 'Power Range', value: '10 - 1250 KVA' },
					{ title: 'Fuel Type', value: 'DIESEL' },
					{ title: 'Frequencies', value: '50 & 60 Hz' },
					{ title: 'Warranty', value: '18 MONTHS' },
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
						{!isLoading &&
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
						!isLoading && productList?.map(product => (
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
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
							<input
								id='firstName'
								placeholder='First Name'
								className='w-full h-12 md:h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
							/>
							<input
								id='lastName'
								placeholder='Last Name'
								className='w-full h-12 md:h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
							/>
							<input
								id='email'
								type='email'
								placeholder='Email'
								className='w-full h-12 md:h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
							/>
							<input
								id='phone'
								placeholder='Phone Number'
								className='w-full h-12 md:h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5'
							/>
						</div>

						<div className='w-full'>
							<textarea
								id='message'
								placeholder='Message'
								className='w-full h-32 md:h-40 text-gray-700 bg-white shadow-md border-black rounded-lg px-5 mb-4'
							/>
							<button
								type='submit'
								className='w-full sm:w-32 text-lg md:text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-700 uppercase tracking-wider'
							>
								{t("Send")}
							</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	)
}
