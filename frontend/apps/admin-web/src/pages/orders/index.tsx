"use client"
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { addDays, format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import React from "react"
import { DateRange } from "react-day-picker"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useQuery } from "@tanstack/react-query"
import { getOrders } from "@/api/data/query"
import moment from "moment"



export default function Orders() {
  const [date, setDate] = React.useState<DateRange | undefined>({
  from: new Date(2022, 0, 20),
  to: addDays(new Date(2022, 0, 20), 20),
  })

   const {data: orders} = useQuery({
    queryFn: getOrders,
    queryKey: ['orders']
  })

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
                <form className="grid w-full items-start gap-6  ">
                  <div className="flex items-center justify-between gap-4 ml-10">
                    <div className="flex items-center  gap-3 ">
                    <Label htmlFor="first_name" className="w-52 text-lg">Order Type</Label>
                    <Select>
                      <SelectTrigger className=" rounded">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
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
              </Card>


<Card className="col-span-4 md:col-span-3 pt-10">
  <CardContent>
 <Table>


     
      <TableHeader>
        <TableRow className="border-t">
          <TableHead className="text-gray-400">ID</TableHead>
          <TableHead className="text-gray-400">Date</TableHead>
          <TableHead className="text-gray-400">Name</TableHead>
          <TableHead className="text-gray-400">Phone Number</TableHead>
          <TableHead className="text-gray-400">Message</TableHead>
          {/* <TableHead className="text-gray-400">Status</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody >
        {(orders?.data as any)?.data?.map((order: any) => (
          <TableRow key={order.id} className="border-none ">
            <TableCell >{order.id}</TableCell>
            <TableCell className="font-medium">{moment(order.createdAt).format("DD-MM-YYYY")}</TableCell>
            <TableCell>{`${order.first_name} ${order.last_name}`}</TableCell>
            <TableCell>{order.phone_number}</TableCell>
            <TableCell >{order.message}</TableCell>
           
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
