"use client"


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
import { Button } from "@/components/ui/button";


export default function Security() {

  return (
  <>
    <PageHead title="Security | App" />
    <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Security
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
            <BreadcrumbLink className='cursor-pointer'>
                <Link to="/settings">Settings</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink className='cursor-pointer'>security</BreadcrumbLink>
          </BreadcrumbItem>
          
        </BreadcrumbList>
      </Breadcrumb>
      </div>
        <Tabs defaultValue="details" className="space-y-4">  
          <TabsContent value="details" className="space-y-5">
            <Card className="shadow-sm border-none">
              <CardContent className="w-full h-full flex items-center p-0">     
                <div
                className="relative items-center justify-between gap-8 flex w-full p-5">
                  <div className="flex items-center gap-4">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83398 26.2513C5.83398 24.7042 6.44857 23.2205 7.54253 22.1265C8.63649 21.0326 10.1202 20.418 11.6673 20.418H23.334C24.8811 20.418 26.3648 21.0326 27.4588 22.1265C28.5527 23.2205 29.1673 24.7042 29.1673 26.2513C29.1673 27.0249 28.86 27.7667 28.313 28.3137C27.7661 28.8607 27.0242 29.168 26.2507 29.168H8.75065C7.9771 29.168 7.23524 28.8607 6.68826 28.3137C6.14128 27.7667 5.83398 27.0249 5.83398 26.2513Z" stroke="#131C40" stroke-width="2.5" stroke-linejoin="round"/>
                      <path d="M17.5 14.584C19.9162 14.584 21.875 12.6252 21.875 10.209C21.875 7.79274 19.9162 5.83398 17.5 5.83398C15.0838 5.83398 13.125 7.79274 13.125 10.209C13.125 12.6252 15.0838 14.584 17.5 14.584Z" stroke="#131C40" stroke-width="2.5"/>
                    </svg>
                    <Link to="/settings/security/change-password">Change Password</Link>
                  </div>
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1809_624)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.4201 15.9544C23.8297 16.3646 24.0598 16.9206 24.0598 17.5003C24.0598 18.08 23.8297 18.636 23.4201 19.0461L15.1717 27.2974C14.7614 27.7075 14.2049 27.9379 13.6247 27.9378C13.0445 27.9376 12.4881 27.707 12.0779 27.2966C11.6677 26.8863 11.4374 26.3298 11.4375 25.7496C11.4376 25.1693 11.6683 24.613 12.0786 24.2028L18.7811 17.5003L12.0786 10.7978C11.68 10.3854 11.4592 9.83293 11.4639 9.25937C11.4686 8.68581 11.6984 8.13705 12.1038 7.73128C12.5092 7.3255 13.0578 7.09519 13.6313 7.08994C14.2049 7.08468 14.7575 7.30491 15.1703 7.70319L23.4215 15.953L23.4201 15.9544Z" fill="#131C40"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1809_624">
                    <rect width="35" height="35" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                </div>
               
              </CardContent>
            </Card>  
             
          </TabsContent>
        </Tabs>

        <Link to='/settings' className="space-y-11">
            <Button type="submit" className="right-24 bottom-10 w-24 h-12 text-lg border border-orange-500 text-orange-500  bg-white rounded absolute uppercase ">Back</Button>
        </Link>
    </div>
 </>
  );
}


