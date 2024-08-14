'use client'

import { Label } from '@/components/ui/label'
import PageHead from '@/components/custom/page-head'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
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
import { addDays, format } from 'date-fns'
import React from 'react'
import { DateRange } from 'react-day-picker'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/api/data/query'



export default function Generators() {
	const [date, setDate] = React.useState<DateRange | undefined>({
		from: new Date(2022, 0, 20),
		to: addDays(new Date(2022, 0, 20), 20),
	})

	const { data: products } = useQuery({
		queryFn: getProducts,
		queryKey: ['enquiries'],
	})


	return (
		<>
			<PageHead title='Dashboard | App' />
			<div className='flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100'>
				<div className='flex items-center justify-between space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight'>Inventory</h2>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink>
									<Link to='/'>Dashboard</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink className='cursor-pointer'>Inventory</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<Tabs defaultValue='details' className='space-y-4'>
					<TabsContent value='details' className='space-y-4'>
						<Card className='col-span-4 md:col-span-3 pt-10'>
							<CardContent>
								<div className='flex-col items-start gap-8 flex'>
									<form className='grid w-full items-start gap-6  '>
										<div className='flex items-center justify-between gap-4 ml-10'>
											<div className='flex items-center  gap-3 '>
												<Label htmlFor='first_name' className='w-52 text-lg'>
													Generators
												</Label>
												<Select>
													<SelectTrigger className=' rounded'>
														<SelectValue placeholder='Select option' />
													</SelectTrigger>
													<SelectContent className='bg-white'>
														<SelectGroup>
															<SelectLabel>Fruits</SelectLabel>
															<SelectItem value='apple'>Apple</SelectItem>
															<SelectItem value='banana'>Banana</SelectItem>
															<SelectItem value='blueberry'>Blueberry</SelectItem>
															<SelectItem value='grapes'>Grapes</SelectItem>
															<SelectItem value='pineapple'>Pineapple</SelectItem>
														</SelectGroup>
													</SelectContent>
												</Select>
											</div>

											<div className='flex items-center  gap-3 '>
												<Label htmlFor='first_name' className='w-52 text-lg'>
													Stock Status
												</Label>
												<Select>
													<SelectTrigger className=' rounded'>
														<SelectValue placeholder='Select option' />
													</SelectTrigger>
													<SelectContent className='bg-white'>
														<SelectGroup>
															<SelectLabel>Fruits</SelectLabel>
															<SelectItem value='apple'>Apple</SelectItem>
															<SelectItem value='banana'>Banana</SelectItem>
															<SelectItem value='blueberry'>Blueberry</SelectItem>
															<SelectItem value='grapes'>Grapes</SelectItem>
															<SelectItem value='pineapple'>Pineapple</SelectItem>
														</SelectGroup>
													</SelectContent>
												</Select>
											</div>
										</div>
									</form>
								</div>
							</CardContent>
						</Card>

						<Card className='col-span-4 md:col-span-3 pt-10'>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow className='border-t'>
											<TableHead className='text-gray-400'>Product Model</TableHead>
											<TableHead className='text-gray-400'>Generator Power</TableHead>
											<TableHead className='text-gray-400'>Engine</TableHead>
											<TableHead className='text-gray-400'>Prime</TableHead>
											{/* <TableHead className='text-gray-400'>Fuel Type</TableHead> */}
											<TableHead className='text-gray-400'>Description</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{(products?.data as any)?.data?.map((product: any) => (
											<TableRow key={product.id} className='border-none '>
												<TableCell className='font-medium'>{product.model}</TableCell>
												<TableCell>{product.power}</TableCell>
												<TableCell className='capitalize'>{product.engine}</TableCell>
												<TableCell>{product.prime}</TableCell>
												{/* <TableCell>{product.fuel_type}</TableCell> */}
												<TableCell className='max-w-xs'>{product.description}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}
