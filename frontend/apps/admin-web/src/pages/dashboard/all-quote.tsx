"use client"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PageHead from "@/components/custom/page-head"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"
import {
  Tabs,
  TabsContent, 
} from '@/components/ui/tabs';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function AllQuote() {
  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            View All Quote
          </h2>
          <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink >
      <Link to="/">Dashboard</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink className='cursor-pointer'>View All Quote</BreadcrumbLink>
    </BreadcrumbItem>
    
  </BreadcrumbList>
</Breadcrumb>

        </div>
        <Tabs defaultValue="details" className="space-y-4">
         
          <TabsContent value="details" className="space-y-4">
          
            <Card className="col-span-4 md:col-span-3 pt-10">
                <CardContent>
                      <div
      className="relative hidden flex-col items-start gap-8 md:flex"
    >
      <form className="grid w-full items-start gap-6">
          <div className="grid grid-cols-2 gap-4 ml-44">
            <div className="grid gap-3">
              <Label htmlFor="first_name">First Name:</Label>
              <Input id="first_name" type="text" placeholder="Enter first name" className="rounded" />
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-4 ml-44">
            <div className="grid gap-3">
              <Label htmlFor="email">Customer:</Label>
              <Input id="email" type="email" placeholder="Enter email" className="rounded" />
            </div>
           
          </div>
           <div className="grid grid-cols-2 gap-4 ml-44">
            <div className="grid gap-3">
              <Label htmlFor="email">Status:</Label>
              <Input id="email" type="email" placeholder="Enter email" className="rounded" />
            </div>
           
          </div>
          <div className="flex items-center ">
            <Button type="submit" className="w-32 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider">Search</Button>
          <Button type="submit" className="w-32 text-xl h-12 border-orange-600 text-orange-600 border rounded hover:border-orange-600 mx-auto uppercase tracking-wider">Back</Button>
          </div>
      </form>
    </div>
                </CardContent>
              </Card>


<Card className="col-span-4 md:col-span-3 pt-10">
  <CardContent>
 <Table>


     
      <TableHeader>
        <TableRow className="border-t">
          <TableHead className="text-gray-400">ID</TableHead>
          <TableHead className="text-gray-400">Date</TableHead>
          <TableHead className="text-gray-400">Name</TableHead>
          <TableHead className="text-gray-400">Type</TableHead>
          <TableHead className="text-gray-400">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody >
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className="border-none ">
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell >{invoice.totalAmount}</TableCell>
            <TableCell >{invoice.totalAmount}</TableCell>
            <TableCell className="text-left">
              <Link to={`/enquiries/${invoice.invoice}`} className="bg-gray-200 p-1.5 rounded">View</Link>
            </TableCell>
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
  );
}
