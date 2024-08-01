"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"
import PageHead from "@/components/custom/page-head"
// import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  email_notifications: z.boolean().default(false).optional(),
  sms_notifications: z.boolean(),
})

export function Notifications() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      sms_notifications: true,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div>
            <PageHead title="Notifications | App" />
        <div className="flex items-center justify-between space-y-2 px-5">
          <h2 className="text-3xl font-bold tracking-tight py-5">
           Notifications Settings
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
                    <BreadcrumbLink className='cursor-pointer'>Notifications Settings</BreadcrumbLink>
                    </BreadcrumbItem>
                    
                </BreadcrumbList>
            </Breadcrumb>

        </div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email_notifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base px-10">
                      Email Notifications
                    </FormLabel>
                   
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange
                      }
                      className="border-gray-400 bg-gray-400"
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
                    <FormLabel className="text-base px-10">SMS Notifications</FormLabel>
                    
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-gray-400 "
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-end p-4 absolute bottom-0 right-16 ">
            <Link to="/settings">
                <Button className="text-orange-500 border-orange-500 border rounded uppercase w-28 ">
                    Back
                </Button>
            </Link>
        </div>
          
    </form>
    </Form>
  )
}
