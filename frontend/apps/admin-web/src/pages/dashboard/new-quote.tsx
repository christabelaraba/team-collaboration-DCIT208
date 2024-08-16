/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import PageHead from '@/components/custom/page-head'
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
import { useMutation, useQuery } from '@tanstack/react-query'
import { createQuotes } from '@/api/data/mutations'
import { toast } from 'react-toastify'
import { useRouter } from '@/routes/hooks'
import { getProducts, getQuoteId } from '@/api/data/query'
import { useState, useEffect } from 'react'
import { Product } from '@/api/data/interfaces'


export default function NewQuote() {
	const router = useRouter()
	const [selectedProductId, setSelectedProductId] = useState('')
	const [quoteId, setQuoteId] = useState('')
	const [productList, setProductList] = useState<Product[]>([]);


	const { data: products } = useQuery({
		queryFn: getProducts,
		queryKey: ['products'],
	})

	const { data: quoteIdRecord } = useQuery({
		queryFn: getQuoteId,
		queryKey: ['enquiries1'],
	})


	useEffect(() => {   
		if (products?.data) {
			setProductList(products?.data);
		}
	}, [products]);

	useEffect(() => {
		if (quoteIdRecord?.data?.response_code === '000') {
			setQuoteId(quoteIdRecord.data.data)
		}
	}, [quoteIdRecord])

	const handleProductChange = (value: any) => {
		setSelectedProductId(value)
	}

	const createQuoteMutation = useMutation({
		mutationFn: createQuotes, // Ensure the mutation function is properly set here
	})

	const onsubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const data = new FormData(e.target as HTMLFormElement)
		const formData = Object.fromEntries(data.entries())

		if (!formData.first_name || !formData.last_name) {
			return
		}

		const res: any = await createQuoteMutation.mutateAsync(formData)

		if (res.data.response_code === '007') {
			router.push('/all-quote')
			toast.success(res.data.response_message)
		} else {
			toast.error(res.data.response_message)
		}
	}

	return (
		<>
			<PageHead title='Dashboard | App' />
			<div className='flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100'>
				<div className='flex items-center justify-between space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight'>Create New Quote</h2>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink>
									<Link to='/'>Dashboard</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink>Create New Quote</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<Tabs defaultValue='details' className='space-y-4'>
					<TabsContent value='details' className='space-y-4'>
						<Card className='col-span-4 md:col-span-3 pt-10'>
							<CardContent>
								<form onSubmit={onsubmit} className='grid w-full items-start gap-6'>
									{/* Quote ID Row */}
									<div className='flex items-center gap-4'>
										<Label htmlFor='quote_id' className='whitespace-nowrap'>
											Quote ID:
										</Label>
										<Input
											id='quote_id'
											type='text'
											value={quoteId}
											disabled
											className='rounded bg-gray-100'
										/>
									</div>
									{/* First and Last Name Row */}
									<div className='grid grid-cols-2 gap-4'>
										<div className='grid gap-3'>
											<Label htmlFor='first_name'>First Name:</Label>
											<Input
												id='first_name'
												type='text'
												name='first_name'
												placeholder='Enter first name'
												className='rounded'
											/>
										</div>
										<div className='grid gap-3'>
											<Label htmlFor='last_name'>Last Name:</Label>
											<Input
												id='last_name'
												type='text'
												name='last_name'
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
												name='email'
												placeholder='Enter email'
												className='rounded'
											/>
										</div>
										<div className='grid gap-3'>
											<Label htmlFor='phone'>Phone Number:</Label>
											<Input
												id='phone'
												type='tel'
												name='phone_number'
												placeholder='Enter phone number'
												className='rounded'
											/>
										</div>
									</div>
									<div className='grid grid-cols-2 gap-4'>
										<div className='grid gap-3'>
											<Label htmlFor='location'>Location:</Label>
											<Input
												id='location'
												type='text'
												name='location'
												placeholder='Enter location'
												className='rounded'
											/>
										</div>
										<div className='grid gap-3'>
											<Label htmlFor='product_id'>
												Generator: {selectedProductId ? selectedProductId : 'Select a Generator'}
											</Label>
											<Select name='product_id' onValueChange={handleProductChange}>
												<SelectTrigger>
													<SelectValue placeholder='Select a Generator' />
												</SelectTrigger>
												<SelectContent className='bg-white'>
													<SelectGroup>
														{productList?.map((product: any) => (
															<SelectItem key={product.id} value={product.id}>
																{product.model}
															</SelectItem>
														))}
													</SelectGroup>
												</SelectContent>
											</Select>
										</div>
									</div>
									<div className='grid grid-cols-2 gap-4'>
										<div className='grid gap-3'>
											<Label htmlFor='price'>Price:</Label>
											<Input
												id='price'
												type='number'
												name='price'
												placeholder='Enter price'
												className='rounded'
											/>
										</div>
										<div className='grid gap-3'>
											<Label htmlFor='status'>Status:</Label>
											<Select name='status'>
												<SelectTrigger>
													<SelectValue placeholder='Select Status' />
												</SelectTrigger>
												<SelectContent className='bg-white'>
													<SelectGroup>
														<SelectLabel>Select status</SelectLabel>
														<SelectItem value='P'>Pending</SelectItem>
														<SelectItem value='A'>Approved</SelectItem>
														<SelectItem value='R'>Rejected</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
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
									<div className='flex items-center'>
										<Button
											type='submit'
											className='w-32 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider'
										>
											SAVE
										</Button>
										<Button
											onClick={() => router.back()}
											className='w-32 text-xl h-12 border-orange-600 text-orange-600 border rounded hover:border-orange-600 mx-auto uppercase tracking-wider'
										>
											CANCEL
										</Button>
									</div>
								</form>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}