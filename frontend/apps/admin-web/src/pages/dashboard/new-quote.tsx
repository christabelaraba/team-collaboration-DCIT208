"use client"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import PageHead from "@/components/custom/page-head"

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
export default function NewQuote() {
  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Create New Quote
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
      <BreadcrumbLink className='cursor-pointer'>Create New Quote</BreadcrumbLink>
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
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="first_name">First Name:</Label>
              <Input id="first_name" type="text" placeholder="Enter first name" className="rounded" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="last_name">Last Name:</Label>
              <Input id="last_name" type="text" placeholder="Enter last name" className="rounded" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email">Email:</Label>
              <Input id="email" type="email" placeholder="Enter email" className="rounded" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">Phone Number:</Label>
              <Input id="phone" type="tel" placeholder="Enter phone number" className="rounded" />
            </div>
          </div>
           <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="location">Location:</Label>
              <Input id="location" type="text" placeholder="Enter location" className="rounded" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="quote-id">Quote ID:</Label>
              <Input id="quote-id" type="number" placeholder="Enter quote id" className="rounded" />
            </div>
          </div>
           <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="date">Date:</Label>
              <Input id="date" type="date" placeholder="Enter date" className="rounded" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">Generator:</Label>
                <Select>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select a Generator" />
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
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="price">Price:</Label>
              <Input id="price" type="text" placeholder="Enter price" className="rounded" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">Status:</Label>
                    <Select>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select Status" />
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
          </div>
     <div className="grid gap-3">
            <Label htmlFor="message">Message:</Label>
            <Textarea id="message" className="rounded" placeholder="Enter message" rows={5} />
          </div>
          <div className="flex items-center ">
            <Button type="submit" className="w-32 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider">SAVE</Button>
          <Button type="submit" className="w-32 text-xl h-12 border-orange-600 text-orange-600 border rounded hover:border-orange-600 mx-auto uppercase tracking-wider">CANCEL</Button>
          </div>
      </form>
    </div>
                </CardContent>
              </Card>
              
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
