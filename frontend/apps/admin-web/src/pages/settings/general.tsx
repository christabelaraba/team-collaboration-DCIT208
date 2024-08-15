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
export default function General() {
  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
           General Settings
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
      <BreadcrumbLink >
      <Link to="/settings">Settings</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink className='cursor-pointer'>General Settings</BreadcrumbLink>
    </BreadcrumbItem>
    
  </BreadcrumbList>
</Breadcrumb>

        </div>
        <Tabs defaultValue="details" className="space-y-4">
         
          <TabsContent value="details" className="space-y-4">
          
            <Card className="col-span-4 md:col-span-3 pt-10 ">
                <CardContent>
                      <div
      className="flex-col items-start gap-8 md:flex "
    >
      <form className="grid w-8/12 items-start gap-6">
            <div className=" flex items-center  ">
              <Label  htmlFor="company_name" className="w-44 text-lg">Company Name:</Label>
              <Input id="company_name" type="text" placeholder="Enter company name" className="rounded" />
            </div>
            <div className=" flex items-center  ">
              <Label htmlFor="company_email"  className="w-44 text-lg">Company Email:</Label>
              <Input id="company_email" type="email" placeholder="Enter company email" className="rounded" />
            </div>
            <div className=" flex items-center ">
              <Label htmlFor="contact_phone" className="w-44 text-lg">Contact Phone:</Label>
              <Input id="contact_phone" type="tel" placeholder="contact phone" className="rounded" />
            </div>
            <div className=" flex items-center ">
              <Label htmlFor="address" className="w-44 text-lg">Address:</Label>
              <Input id="address" type="tel" placeholder="address" className="rounded" />
            </div>
            <div className=" flex items-center ">
              <Label htmlFor="default_language" className="w-44 text-lg">Default Language:</Label>
              <Select>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select language" />
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
            <div className=" flex items-center ">
              <Label htmlFor="currency" className="w-44 text-lg">Currency:</Label>
              <Select>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select currency" />
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
           
            <div className="flex items-center ">
            <Button type="submit" className="w-56 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider">SAVE CHANGES</Button>
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
