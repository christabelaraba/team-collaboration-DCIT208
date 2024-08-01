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
import { useRouter } from "@/routes/hooks"
import { toast } from "react-toastify"
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
interface dataProps {
  email: string
  password: string
}
export default function Login({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()
  const [data, setData] = React.useState<dataProps>({
    email: "",
    password: "",
  })

  const loginMutation = useMutation({
    mutationFn: LoginFunc,
  })

//   response_code
// : 
// "012"
// response_message
// : 
// "Login successful"
  
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true) 
    const res = await loginMutation.mutateAsync(data)
    if ((res.data as any).response_code === "012"){
      Cookies.set('user', JSON.stringify((res.data as any).data))
      toast.success("User successfully logged in")
      router.push('/')

    }else{
      toast.error("Login details incorrect, Try again")
    }    
    setIsLoading(false)
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