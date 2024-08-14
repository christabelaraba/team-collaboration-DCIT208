export const Card = () => {
  return (
		<div className='p-5 rounded-md shadow-2xl bg-white space-y-3'>
			<div className='flex items-center gap-3'>
				<img src='./assets/img-01.jpg' alt='logo' className='w-16 h-16  rounded-full' />
				<div>
					<h3 className='text-lg text-orange-500 font-medium'>Prof Freda Abban</h3>
					<p className='text-sm text-gray-500'>Deputy Speaker</p>
				</div>
			</div>
			<div className='pt-5'>
				Long Lian Industry and Trade's products have been a game changer for our business.Their
				generator have proven to be reliable,efficient and durable. We can't recommend them enough
			</div>
		</div>
	)
}
