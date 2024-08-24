/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import PageHead from "@/components/custom/page-head";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMutation } from '@tanstack/react-query'
import { useRouter } from '@/routes/hooks'

import { toast } from 'react-toastify';
import { changePassword } from "@/api/data/mutations";



export default function ChangePassword() {
  const router = useRouter()

  const changePasswordMutation = useMutation({
		mutationFn: changePassword, // Ensure the mutation function is properly set here
	})


  const onsubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const data = new FormData(e.target as HTMLFormElement)
		const formData = Object.fromEntries(data.entries())    

		if (!formData.current_password || !formData.new_password || !formData.confirm_new_password) {
			return
		}

    if(formData.new_password !== formData.confirm_new_password){
      toast.error("Your new and confirm new passwords don't match. Please check and try again.");
      return;
    }

		// Update the product_id in formData
		const res: any = await changePasswordMutation.mutateAsync(formData)    
		if (res.data.response_code === '300') {
			router.push('/settings')
			toast.success(res.data.response_message)
		} else {
			toast.error(res.data.response_message)
		}
	}
  


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
                <BreadcrumbLink>
                  <Link to="/">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/settings">Settings</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="cursor-pointer">
                  Security Settings
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Tabs defaultValue="details" className="space-y-4">
          <TabsContent value="details" className="space-y-4">
            <Card className="col-span-4 md:col-span-3 pt-10 ">
              <CardContent>
                <div className="flex-col items-start gap-8 md:flex ">
                  <form onSubmit={onsubmit} className="grid w-8/12 items-start gap-6">
                    <h2 className="font-semibold text-3xl">Change Password</h2>
                    <div className=" flex items-center  ">
                      <Label
                        htmlFor="current_password"
                        className="w-48 text-lg"
                      >
                        Current Password:
                      </Label>
                      <Input
                        id="current_password"
                        name="current_password"
                        type="password"
                        required={true}
                        placeholder="Enter current password"
                        className="rounded"
                      />
                    </div>
                    <div className=" flex items-center  ">
                      <Label htmlFor="new_password" className="w-48 text-lg">
                        New Password:
                      </Label>
                      <Input
                        id="new_password"
                        name="new_password"
                        type="password"
                        required={true}
                        placeholder="Enter new password"
                        className="rounded"
                      />
                    </div>
                    <div className=" flex items-center ">
                      <Label htmlFor="confirm_new_password" className="w-48 text-lg">
                        Confirm New Password:
                      </Label>
                      <Input
                        id="confirm_new_password"
                        name="confirm_new_password"
                        type="password"
                        required={true}
                        placeholder="confirm new password"
                        className="rounded"
                      />
                    </div>

                    <div className="flex items-center ">
                      <Button
                        type="submit"
                        className="w-56 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider"
                      >
                        SAVE CHANGES
                      </Button>
                      <Link to="/settings/security">
                        <Button
                          type="submit"
                          className="w-32 text-xl h-12 border-orange-600 text-orange-600 border rounded hover:border-orange-600 mx-auto uppercase tracking-wider"
                        >
                          back
                        </Button>
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
