"use client"

import { Label } from "@/components/ui/label"
import PageHead from "@/components/custom/page-head"
import { addDays,format } from "date-fns"
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
import {
Select,
SelectContent,
SelectGroup,
SelectItem,
SelectLabel,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import {  CalendarIcon } from "lucide-react"
import React from "react"
import { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

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

export default function Report() {
const [date, setDate] = React.useState<DateRange | undefined>({
from: new Date(2022, 0, 20),
to: addDays(new Date(2022, 0, 20), 20),
})

const [open, setOpen] = useState("");
return (
<>
  <PageHead title="Dashboard | App" />
    <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
        Generate Report
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
          <Card className="col-span-4 md:col-span-3 rounded-none shadow-none p-10">
            <CardContent>
              <div
              className="flex-col items-start gap-8 flex"
              >
                <form className="grid w-full items-start gap-6 ">
                  <div className="flex items-center justify-between gap-4 ml-10">
                    <div className="flex items-center  gap-3">
                    <Label htmlFor="first_name" className="w-52 text-lg">Report Type</Label>
                    <Select onValueChange={(value) => setOpen(value)}  value={open}>
                      <SelectTrigger className=" rounded">
                        <SelectValue placeholder="Quote report" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple" >Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    </div>
                    <Popover >
                      <PopoverTrigger asChild>
                        <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                        )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date?.from  ? (
                          date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                          ) : (
                          <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        className="bg-white rounded"
                        numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </form>
              </div>
            </CardContent>
           {open !== "" &&
           <Card className=" col-span-4 md:col-span-3 pt-10">
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
                      
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
             }  
              <div className="flex items-center ">
                <Button type="submit" className="w-44 mt-5  text-xl h-12 border-orange-600 text-orange-600 border rounded hover:border-orange-600 mx-auto uppercase tracking-wider">EXPORT PDF</Button>
              </div>          
            </Card>
        </TabsContent>
      </Tabs>
    </div>
</>
);
}
