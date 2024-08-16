"use client"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
export default function ChangePassword() {
  return (
    <>
      <PageHead title="Security | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
           Security Settings
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
      <BreadcrumbLink className='cursor-pointer'>Security Settings</BreadcrumbLink>
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
            <h2 className="font-semibold text-3xl">Change Password</h2>
            <div className=" flex items-center  ">
              <Label  htmlFor="current_password" className="w-48 text-lg">Current Password:</Label>
              <Input id="current_password" type="text" placeholder="Enter current password" className="rounded" />
            </div>
            <div className=" flex items-center  ">
              <Label htmlFor="new_password"  className="w-48 text-lg">New Password:</Label>
              <Input id="new_password" type="text" placeholder="Enter new password" className="rounded" />
            </div>
            <div className=" flex items-center ">
              <Label htmlFor="cnew_password" className="w-48 text-lg">Confirm New Password:</Label>
              <Input id="cnew_password" type="text" placeholder="confirm new password" className="rounded" />
            </div>
           
            <div className="flex items-center ">
            <Button type="submit" className="w-56 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider">SAVE CHANGES</Button>
            <Link to='/settings/security'>
                <Button type="submit" className="w-32 text-xl h-12 border-orange-600 text-orange-600 border rounded hover:border-orange-600 mx-auto uppercase tracking-wider">back</Button>
            </Link>
          
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
