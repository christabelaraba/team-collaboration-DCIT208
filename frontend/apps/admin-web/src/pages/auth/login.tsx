"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import Layout from "./layout"
import { Button } from "@/components/ui/button"
import { Loader } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Login({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
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