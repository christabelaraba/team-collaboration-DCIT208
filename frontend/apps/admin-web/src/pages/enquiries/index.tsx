import PageHead from '@/components/custom/page-head'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Link } from 'react-router-dom'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useQuery } from '@tanstack/react-query'
import { getEnquiries } from '@/api/data/query'
import moment from 'moment'
export default function EnquiryPage() {
	const { data: enquiries } = useQuery({
		queryFn: getEnquiries,
		queryKey: ['enquiries'],
	})

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
								<BreadcrumbLink className='cursor-pointer'>Enquiries</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<Tabs defaultValue='overview' className='space-y-4'>
					<TabsContent value='overview' className='space-y-4'>
						<Card className='col-span-4 md:col-span-3 pt-10'>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow className='border-t'>
											<TableHead className='text-gray-400'>ID</TableHead>
											<TableHead className='text-gray-400'>Date</TableHead>
											<TableHead className='text-gray-400'>Name</TableHead>
											<TableHead className='text-gray-400'>Message</TableHead>
											<TableHead className='text-gray-400'>Type</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{(enquiries?.data as any)?.data?.map((enquiry: any) => (
											<TableRow key={enquiry.id} className='border-none '>
												<TableCell className='font-medium'>{enquiry.id}</TableCell>
												<TableCell>{moment(enquiry.created_at).format('MMMM Do YYYY')}</TableCell>
												<TableCell>{enquiry.customer_name}</TableCell>
												<TableCell>{enquiry.message}</TableCell>
												<TableCell>Enquiry</TableCell>
												<TableCell className='text-left'>
													<Link
														to={`/enquiries/${enquiry.id}`}
														className='bg-gray-200 p-1.5 rounded'
													>
														View
													</Link>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
									{/* createdAt
: 
"2024-07-21T02:09:11.000Z"
customer_id
: 
1
id
: 
1
message
: 
"Where is your generator from?"
product_id
: 
15
updatedAt
: 
"2024-07-21T02:09:11.000Z" */}
								</Table>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}
