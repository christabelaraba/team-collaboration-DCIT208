
// import { cn } from "@/lib/utils"
// import { buttonVariants } from "@/components/ui/button"



export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
     
      <div className="container relative  h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
       
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-no-repeat bg-center" />
        
         
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-3xl  font-medium  tracking-wider">
                Welcome Back!
              </h1>
              <p className="text-sm text-muted-foreground">
                Login to the Admin Portal to manage quotes, orders, and reports
              </p>
            </div>
            {children}
            
          </div>
        </div>
      </div>
    </>
  )
}