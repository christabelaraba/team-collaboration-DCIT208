/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import Cookies from 'js-cookie'
import Layout from "./layout"
import { Button } from "@/components/ui/button"
import { Loader } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useMutation } from "@tanstack/react-query"
import { LoginFunc } from "@/api/data/mutations"
// import { useRouter } from "@/routes/hooks"
import { toast } from "react-toastify"
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
interface dataProps {
  email: string
  password: string
}
export default function Login({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  // const router = useRouter()
  const [data, setData] = React.useState<dataProps>({
    email: "",
    password: "",
  })

  const loginMutation = useMutation({
    mutationFn: LoginFunc,
  })

  
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true); 
    try {
        const res = await loginMutation.mutateAsync(data);
        console.log(res, (res.data as any).response_code, typeof (res.data as any).response_code);

        if ((res.data as any).response_code === "012") {
            Cookies.set('token', (res.data as any).accessToken);
            Cookies.set('user', JSON.stringify((res.data as any).data));
            toast.success((res.data as any).response_message);

            // Delay the reload by 4 seconds to show the toast
            setTimeout(() => {
                window.location.reload();
            }, 4000); // 4000 ms = 4 seconds

        } else {
            toast.error((res.data as any).response_message || "Login details incorrect, Try again");
        }
    } catch (error) {
        console.error("Login failed", error);
        toast.error("An error occurred during login. Please try again.");
    } finally {
        setIsLoading(false);
    }
}

  return (
   <Layout>
     <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username" >
              Username
            </Label>
            <Input
              className="rounded border-gray-400 text-gray-500"
              id="username"
              placeholder="Username"
              type="username"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              disabled={isLoading}
            />
          </div>
           <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username" >
              Password
            </Label>
            <Input
              className="rounded border-gray-400 text-gray-500"
              id="username"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Password"
              type="password"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading} className="w-full mt-5 bg-orange-600 text-white rounded hover:bg-orange-600">
            {isLoading && (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </div>
      </form>
     
     
    </div>
   </Layout>
  )
}