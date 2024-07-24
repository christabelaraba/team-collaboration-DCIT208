import PageHead from '@/components/custom/page-head';
import { RecentSales } from '@/components/custom/recent-sales';
import {
  Card,
  CardContent,  
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent, 
} from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function EnquiryPage() {
  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Enquiries
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
      <BreadcrumbLink className='cursor-pointer'>Enquiries</BreadcrumbLink>
    </BreadcrumbItem>
    
  </BreadcrumbList>
</Breadcrumb>

        </div>
        <Tabs defaultValue="overview" className="space-y-4">
         
          <TabsContent value="overview" className="space-y-4">
          
            <Card className="col-span-4 md:col-span-3 pt-10">
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}