"use client";

// import { zodResolver } from "@/components/ui/switch"
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PageHead from "@/components/custom/page-head";

import { Switch } from "@/components/ui/switch";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const FormSchema = z.object({
  email_notifications: z.boolean().default(false).optional(),
  sms_notifications: z.boolean(),
});

export default function Notifications() {
  const form = useForm<z.infer<typeof FormSchema>>({
    // resolver: zodResolver(FormSchema),
    defaultValues: {
      sms_notifications: true,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast(
      <div>
        <strong>You submitted the following values:</strong>
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    );
  }

  // return (
  //   <Form {...form}>
  //     <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 space-x-6">

  //       <div>
  //         <h3 className="mb-4 text-xl font-medium mt-4 mx-4">Email Notifications</h3>
  //         <div className="space-y-4">
  //           <FormField
  //             control={form.control}
  //             name="email_notifications"
  //             render={({ field }) => (
  //               <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
  //                 <div className="space-y-0.5">
  //                   <FormLabel className="text-base">
  //                     Email Notifications
  //                   </FormLabel>
  //                 </div>
  //                 <FormControl>
  //                   <Switch
  //                     checked={field.value}
  //                     onCheckedChange={field.onChange}
  //                   />
  //                 </FormControl>
  //               </FormItem>
  //             )}
  //           />
  //           <FormField
  //             control={form.control}
  //             name="sms_notifications"
  //             render={({ field }) => (
  //               <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
  //                 <div className="space-y-0.5">
  //                   <FormLabel className="text-base">SMS Notification</FormLabel>

  //                 </div>
  //                 <FormControl>
  //                   <Switch
  //                     checked={field.value}
  //                     onCheckedChange={field.onChange}
  //                   />
  //                 </FormControl>
  //               </FormItem>
  //             )}
  //           />
  //         </div>
  //       </div>
  //       <Link to='/settings' className="space-y-11">
  //           <Button type="submit" className="right-24 bottom-10 w-24 h-12 text-lg border border-orange-500 text-orange-500  bg-white rounded absolute uppercase ">Back</Button>
  //       </Link>

  //     </form>
  //   </Form>
  // )

  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
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
                  Notifications
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
                  {/* <form className="grid w-8/12 items-start gap-6"> */}
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-full space-y-6 space-x-6"
                    >
                      <FormField
                        control={form.control}
                        name="email_notifications"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">
                                Email Notifications
                              </FormLabel>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="sms_notifications"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">
                                SMS Notifications
                              </FormLabel>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <div className="flex items-center ">
                        
                        <Link to="/settings">
                          <Button
                            type="submit"
                            className="w-32 text-xl h-12 border-orange-600 text-orange-600 border rounded hover:border-orange-600 mx-auto uppercase tracking-wider"
                          >
                            BACK
                          </Button>
                        </Link>
                      </div>
                    </form>
                  </Form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
