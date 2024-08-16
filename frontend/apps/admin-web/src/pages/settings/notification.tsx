"use client"

// import { zodResolver } from "@/components/ui/switch"
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
// import {Toast} from "@/components/ui/toast"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

const FormSchema = z.object({
  email_notifications: z.boolean().default(false).optional(),
  sms_notifications: z.boolean(),
})

export default function Notifications() {
  const form = useForm<z.infer<typeof FormSchema>>({
    // resolver: zodResolver(FormSchema),
    defaultValues: {
      sms_notifications: true,
    },
  })

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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 space-x-6">
        <div>
          <h3 className="mb-4 text-xl font-medium mt-4 mx-4">Email Notifications</h3>
          <div className="space-y-4">
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
                    <FormLabel className="text-base">SMS Notification</FormLabel>
                    
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
          </div>
        </div>
        <Link to='/settings' className="space-y-11">
            <Button type="submit" className="right-24 bottom-10 w-24 h-12 text-lg border border-orange-500 text-orange-500  bg-white rounded absolute uppercase ">Back</Button>
        </Link>
        
      </form>
    </Form>
  )
}
