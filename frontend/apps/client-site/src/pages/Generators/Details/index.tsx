import { Link, useParams } from 'react-router-dom'
import { Navbar } from '../../../components/custom/Navbar'
import { Footer } from '../../../components/custom/Footer'
import { Download, Phone } from 'lucide-react'
import { getSingleProduct } from '../../../api/data/query'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ProductType } from '../../../api/schema'
import { makeEnquiry, orderOnline } from '../../../api/data/mutations'
import Dialog from '../../../components/custom/Dialog'
import { useState } from "react";
import { t } from 'i18next'

interface ApiResponse {
    data: {
        response_code: string;
        response_message: string;
    }
}

export default function Details() {
	const { id } = useParams()

	const [openDialog, setOpenDialog] = useState(false);

	const [message, setMessage] = useState('')


	const { data } = useQuery({
		queryKey: ['products'],
		queryFn: () => getSingleProduct(id as string),
	})

	const createEnquiryMutation = useMutation({
		mutationFn: makeEnquiry,
	})

	const createOrderMutation = useMutation({
		mutationFn: orderOnline,
	})

	const productList: ProductType = data?.data

	const openModal = (modalId: string) => {
		const modal = document.getElementById(modalId) as HTMLDialogElement | null
		if (modal) {
			modal.showModal()
		}
	}

	const makeEnquiries = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = new FormData(e.target as HTMLFormElement)
		// console.log(Object.fromEntries(data.entries()))
		const res = await createEnquiryMutation.mutateAsync(Object.fromEntries(data.entries())) as ApiResponse;
		const modal = document.getElementById('enquiry_modal') as HTMLDialogElement | null
		setMessage(null);
		if (res.data.response_code === '002') {
			modal.close()
			setOpenDialog(true);
			(e.target as HTMLFormElement).reset();
		} else {
			modal.close();
			setMessage(res?.data?.response_message)
            setOpenDialog(true);
		}
	}

	const makeOrderOnline = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = new FormData(e.target as HTMLFormElement)
		// console.log(Object.fromEntries(data.entries()))
		const res = await createOrderMutation.mutateAsync({
			...Object.fromEntries(data.entries()),
			product_id: Number(id),
		}) as ApiResponse
		const modal = document.getElementById('order_modal') as HTMLDialogElement | null
		setMessage(null);
		if (res.data.response_code === '009') {
			modal.close()
			setOpenDialog(true);
			(e.target as HTMLFormElement).reset();
		} else {
			modal.close();
			setMessage(res?.data?.response_message)
            setOpenDialog(true);
		}

	}

	return (
		<main className='flex flex-col items-start m-auto min-h-screen w-full '>
			<Navbar />

		{/* Generator Details */}
<section className='w-full flex flex-col-reverse md:flex-row items-center justify-between mt-20 py-10 px-5 md:px-10'>
  <div className='w-full md:w-1/2'>
    <h2 className='font-bold uppercase text-4xl md:text-6xl py-3'>{productList?.prime}</h2>

    <h4 className='font-semibold text-orange-600 capitalize text-lg md:text-xl mb-5'>
      {productList?.description}
    </h4>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[500px]'>
      <div>
        <div className='w-full flex gap-2 items-center'>
          <p className='text-black'>{t("Engine")}:</p>
          <p className='text-gray-500 capitalize'>{productList?.engine}</p>
        </div>
        <div className='w-full flex gap-2 items-center mt-2'>
          <p className='text-black'>{t("Prime")}:</p>
          <p className='text-gray-500 capitalize'>{productList?.prime}</p>
        </div>
        <div className='w-full flex gap-2 items-center mt-2'>
          <p className='text-black'>{t("Alternator")}:</p>
          <p className='text-gray-500'>{productList?.alternator}</p>
        </div>
        <div className='py-5'>
          <button
            onClick={() => openModal('enquiry_modal')}
            type='submit'
            className='w-full md:w-44 text-xl h-12 bg-orange-600 text-white rounded mx-auto uppercase tracking-wider font-semibold'
          >
            {t("Make Enquiry")}
          </button>
        </div>
      </div>

      <div className=''>
        <div className='w-full flex gap-2 items-center'>
          <p className='text-black'>{t("Voltage")}:</p>
          <p className='text-gray-500'>{productList?.voltage}</p>
        </div>
        <div className='w-full flex mt-2 gap-2 items-center'>
          <p className='text-black'>{t("Frequency")}:</p>
          <p className='text-gray-500'>{productList?.frequency}</p>
        </div>
        <div className='w-full flex mt-2 gap-2 items-center'>
          <p className='text-black'>{t("Amp Per Phase")}:</p>
          <p className='text-gray-500'>{productList?.amp_per_phase}</p>
        </div>
        <div className='py-5'>
          <button
            onClick={() => openModal('order_modal')}
            type='submit'
            className='w-full md:w-44 text-xl h-12 bg-white text-orange-600 border border-orange-600 rounded mx-auto uppercase tracking-wider font-semibold'
          >
            {t("Order Online")}
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className='w-full md:w-1/2 flex justify-center mb-10 md:mb-0'>
    <img src={productList?.picture_url || ''} alt={productList?.model} className='w-full md:w-auto max-h-96 object-contain' />
  </div>
</section>

{/* Technical Parameters */}
<section className='w-full flex flex-col items-center justify-center py-5'>
  <h3 className='font-semibold text-3xl md:text-5xl text-black'>{t("Technical Parameters")}</h3>

  <div className='w-full flex flex-col items-center my-5'>
    <div className='w-full md:w-10/12'>
      <div className='flex border-y h-16 w-full items-center justify-between px-8 md:px-96'>
        <p>{productList?.model} {productList?.prime}</p>
        <p>{productList?.voltage}</p>
      </div>
      <div className='flex border-b h-16 w-full items-center justify-between px-8 md:px-96'>
        <p>{productList?.prime}</p>
        <p>{productList?.voltage}</p>
      </div>
    </div>
    <div className='w-full md:w-10/12'>
      <div className='flex border-y h-16 w-full items-center justify-between px-8 md:px-96 opacity-25'>
        <p>{productList?.voltage}</p>
        <p>{productList?.model} {productList?.prime}</p>
      </div>
      <div className='flex border-b h-16 w-full items-center justify-between px-8 md:px-96 opacity-10'>
        <p>{productList?.voltage}</p>
        <p>{productList?.prime}</p>
      </div>
    </div>
  </div>

  <div className='py-5'>
    <button
      type='submit'
      className='w-full md:w-auto text-xl h-12 bg-white text-orange-600 border border-orange-600 rounded px-5 pt-2 pb-2 uppercase tracking-wider font-semibold flex flex-row justify-center items-center'
    >
      {t("Download PDF")} <Download className='ml-2' />
    </button>
  </div>
</section>


			{/* Related Products */}
<section className='w-full px-5 md:px-10 py-10'>
  {/* <h3 className='font-semibold text-4xl text-black mb-5'>
      Related Products
  </h3> */}

  <div className='w-full flex flex-col md:flex-row items-center justify-center'>
    <div className='w-full md:w-8/12 flex flex-col md:flex-row items-center text-center md:text-left'>
      <div className='w-full'>
        <p className='text-lg md:text-xl'>
          {t("For more information about")}
          <span className='font-semibold text-gray-700 uppercase text-lg md:text-xl'>
            {' '}
            {t("Long Lian Industry and Trade Generators")}
          </span>{' '}
          {t("Get in touch to speak with our experts")}
        </p>
      </div>
      <div className='w-full md:w-auto mt-5 md:mt-0 md:ml-10'>
        <Link
          to='/contactus'
          className='w-full md:w-48 p-5 text-lg h-12 md:h-20 bg-orange-600 text-white rounded uppercase tracking-wider font-semibold flex justify-center items-center'
        >
          {t("Contact Us")}{' '}
        </Link>
      </div>
    </div>
  </div>
</section>

			<Footer />

			{/* Enquiry Modal */}
			<dialog id='enquiry_modal' className='modal modal-bottom sm:modal-middle'>
				<div className='modal-box max-w-[600px]'>
					<form method='dialog'>
						<button className='btn btn-sm btn-circle btn-ghost absolute right-2 text-orange-600'>
							✕
						</button>
					</form>
					<div className='flex items-center justify-center flex-col'>
						<div className=''>
							<span>
								<img src='/assets/nn.png' alt='logo' className='w-48' />
							</span>
						</div>
						<h3 className='font-bold text-lg '>{t("Make Enquiry")}</h3>
						<p className='text-gray-500 mb-2'>{t("Send us a message to answer all your questions")}</p>
					</div>

					<form onSubmit={makeEnquiries}>
						<div className='w-full grid grid-cols-2 gap-x-5'>
							<div className='form-control'>
								<input
									type='text'
									id='first_name'
									placeholder='First Name'
									name='first_name'
									className='input input-bordered my-3'
								/>
							</div>
							<div className='form-control'>
								<input
									type='text'
									id='last_name'
									placeholder='Last Name'
									name='last_name'
									className='input input-bordered my-3'
								/>
							</div>
							<div className='form-control'>
								<input
									type='email'
									id='email'
									placeholder='Email'
									name='email'
									className='input input-bordered my-3'
								/>
							</div>
							<div className='form-control'>
								<input
									type='text'
									id='phone_number'
									placeholder='Phone Number'
									name='phone_number'
									className='input input-bordered my-3'
								/>
							</div>
						</div>

						<div className='form-control'>
							<textarea
								id='message'
								placeholder='Message'
								name='message'
								className='textarea textarea-bordered mt-3'
							></textarea>
						</div>
						<div className='modal-action flex items-center justify-center flex-col '>
							<button
								type='submit'
								className='btn w-44 bg-red-500 my-3 uppercase text-xl text-white'
							>
								{t("send")}
							</button>
							<p className='uppercase text-lg'>or</p>
							<button
								type='button'
								onClick={() =>
									(document.getElementById('enquiry_modal') as HTMLDialogElement).close()
								}
								className='btn w-44 bg-green-500 my-3 text-white text-md'
							>
								{' '}
								<Phone className='text-white' /> +2334567897
							</button>
						</div>
					</form>
				</div>
			</dialog>

			{/* Order Modal */}
			<dialog id='order_modal' className='modal '>
				<div className='modal-box max-w-[600px]'>
					<form method='dialog'>
						<button className='btn btn-sm btn-circle btn-ghost absolute right-2 text-orange-600'>
							✕
						</button>
					</form>

					<div className='flex items-center justify-center flex-col'>
						<div className=''>
							<span>
								<img src='/assets/nn.png' alt='logo' className='w-48' />
							</span>
						</div>
						<h3 className='font-bold text-lg '>{t("Order Form")}</h3>
						<p className='text-gray-500 mb-2'>{t("Fill in the details below to place your order:")}</p>
					</div>
					<form onSubmit={makeOrderOnline}>
						<div className='w-full grid grid-cols-2 gap-x-5 '>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>First Name</span>
								</label>
								<input type='text' name='first_name' className='input input-bordered' />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Last Name</span>
								</label>
								<input type='text' name='last_name' className='input input-bordered' />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input type='email' name='email' className='input input-bordered' />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Phone Number</span>
								</label>
								<input type='number' name='phone_number' className='input input-bordered' />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Company Name</span>
								</label>
								<input type='text' name='company_name' className='input input-bordered' />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Company Address</span>
								</label>
								<input type='text' name='company_address' className='input input-bordered' />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Power (kVA) Required</span>
								</label>
								<input
									type='text'
									name='power_required'
									className='input input-bordered'
									defaultValue='100 kVA'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Location</span>
								</label>
								<input type='text' name='location' className='input input-bordered' />
							</div>
						</div>

						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Message</span>
							</label>
							<textarea
								id='message'
								name='message'
								className='textarea textarea-bordered '
							></textarea>
						</div>

						<div className='form-control mt-4 flex items-center justify-center'>
							<button type='submit' className='btn w-44 bg-orange-500 text-white text-xl'>
								{t("Submit Order")}
							</button>
						</div>
					</form>
				</div>
			</dialog>


			<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                {message ? message :
                    <>
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <svg className="w-52 h-52 text-[#D33D03] self-center mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7.29 4.908a54.4 54.4 0 0 1 9.42 0l1.511.13a2.89 2.89 0 0 1 2.313 1.546a.236.236 0 0 1-.091.307l-6.266 3.88a4.25 4.25 0 0 1-4.4.045L3.47 7.088a.236.236 0 0 1-.103-.293A2.89 2.89 0 0 1 5.78 5.039z" />
                                <path fill="currentColor" d="M3.362 8.767a.248.248 0 0 0-.373.187a30.4 30.4 0 0 0 .184 7.56A2.89 2.89 0 0 0 5.78 18.96l1.51.131c3.135.273 6.287.273 9.422 0l1.51-.13a2.89 2.89 0 0 0 2.606-2.449a30.4 30.4 0 0 0 .161-7.779a.248.248 0 0 0-.377-.182l-5.645 3.494a5.75 5.75 0 0 1-5.951.061z" />
                            </svg>
                            <p className="uppercase font-bold text-3xl">THANK YOU!</p>
                            <p className="text-xl text-[#84868D]">Your message has been sent. We’ll be in touch shortly to answer all your question</p>
                        </div>
                    </>
                }
            </Dialog>
		</main>
	)
}
