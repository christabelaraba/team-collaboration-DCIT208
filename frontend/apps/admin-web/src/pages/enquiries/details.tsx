'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import PageHead from '@/components/custom/page-head'
import { useParams } from 'react-router-dom'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Link } from 'react-router-dom'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getEnquiry } from '@/api/data/query'
import { respondToEnquiry } from '@/api/data/mutations'
import { toast } from 'react-toastify'
export default function EnquiryDetails() {
	const { id } = useParams()
	const { data: enquiry } = useQuery({
		queryKey: ['enquiry'],
		queryFn: () => getEnquiry(id as string),
	})
	const respondEnquiryMutation = useMutation({
		mutationFn: respondToEnquiry,
	})

	const onSubmit = async (event: React.SyntheticEvent) => {
		event.preventDefault()
		const formData = new FormData(event.target as HTMLFormElement)
		const data = Object.fromEntries(formData.entries())
		const res = await respondEnquiryMutation.mutateAsync(data)
		if ((res.data as any).response_code === '001') {
			toast.success('Reply sent successfully')
			setIsOpened(false)
		} else {
			toast.error((res.data as any).response_message || 'Enquiry details incorrect, Try again')
		}
	}

	const [isOpened, setIsOpened] = useState(false)
	return (
		<>
			<PageHead title='Dashboard | App' />
			<div className='flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100'>
				<div className='flex items-center justify-between space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight'>Enquiries</h2>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink>
									<Link to='/'>Dashboard</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink>
									<Link to='/enquiries'>Enquiries</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink className='cursor-pointer'>Enquiry Details</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<Tabs defaultValue='details' className='space-y-4'>
					<TabsContent value='details' className='space-y-4'>
						<Card className='col-span-4 md:col-span-3 pt-10'>
							<CardContent>
								<div className='relative hidden flex-col items-start gap-8 md:flex'>
									<form className='grid w-full items-start gap-6'>
										<div className='grid grid-cols-2 gap-4'>
											<div className='grid gap-3'>
												<Label htmlFor='first_name'>First Name:</Label>
												<Input
													id='first_name'
													type='text'
													disabled
													value={(enquiry?.data as any)?.data?.customer_name.split(' ')[0]}
													placeholder='Enter first name'
													className='rounded'
												/>
											</div>
											<div className='grid gap-3'>
												<Label htmlFor='last_name'>Last Name:</Label>
												<Input
													id='last_name'
													type='text'
													disabled
													value={(enquiry?.data as any)?.data?.customer_name.split(' ')[1]}
													placeholder='Enter last name'
													className='rounded'
												/>
											</div>
										</div>
										<div className='grid grid-cols-2 gap-4'>
											<div className='grid gap-3'>
												<Label htmlFor='email'>Email:</Label>
												<Input
													id='email'
													type='email'
													disabled
													value={(enquiry?.data as any)?.data?.email}
													placeholder='Enter email'
													className='rounded'
												/>
											</div>
											<div className='grid gap-3'>
												<Label htmlFor='phone'>Phone Number:</Label>
												<Input
													id='phone'
													type='tel'
													disabled
													value={(enquiry?.data as any)?.data?.phone_number}
													placeholder='Enter phone number'
													className='rounded'
												/>
											</div>
										</div>
										<div className='grid gap-3'>
											<Label htmlFor='message'>Message:</Label>
											<Textarea
												id='message'
												disabled
												value={(enquiry?.data as any)?.data?.message}
												className='rounded'
												placeholder='Enter message'
												rows={5}
											/>
										</div>
										<Button
											type='submit'
											onClick={e => {
												e.preventDefault()
												setIsOpened(true)
											}}
											className='w-32 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider'
										>
											Reply
										</Button>
									</form>
								</div>
							</CardContent>
						</Card>
						{isOpened && (
							<Card className='col-span-4 md:col-span-3 pt-10'>
								<CardContent>
									<div className='relative hidden flex-col items-start gap-8 md:flex'>
										<form onSubmit={onSubmit} className='grid w-full items-start gap-6'>
											<div className='grid  gap-4'>
												<div className='grid gap-3'>
													<Label htmlFor='email'>Reply To:</Label>
													<Input
														id='email'
														type='email'
														name='id'
														placeholder='Enter reply email'
														className='rounded'
													/>
												</div>
											</div>
											<div className='grid gap-4'>
												<div className='grid gap-3'>
													<Label htmlFor='subject'>Subject Re:</Label>
													<Input
														id='subject'
														type='text'
														name='subject'
														placeholder='Enter Subject'
														className='rounded'
													/>
												</div>
											</div>
											<div className='grid gap-3'>
												<Label htmlFor='message'>Message:</Label>
												<Textarea
													id='message'
													name='message'
													className='rounded'
													placeholder='Enter message'
													rows={5}
												/>
											</div>
											<Button
												type='submit'
												className='w-44 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider'
											>
												Send Reply
											</Button>
										</form>
									</div>
								</CardContent>
							</Card>
						)}
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}
