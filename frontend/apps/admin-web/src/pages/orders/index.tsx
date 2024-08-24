/* eslint-disable @typescript-eslint/no-explicit-any */
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import moment from "moment";
import { Label } from "@/components/ui/label";
import PageHead from "@/components/custom/page-head";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn, logoBase64 } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { useQuery } from "@tanstack/react-query";
import { getOrdersFilter } from "@/api/data/query";
import { Order } from "@/api/data/interfaces";

export default function Orders() {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [orderList, setOrderList] = useState<Order[]>([]);
  
  const { data: orders, refetch } = useQuery({
    queryFn: () =>
      getOrdersFilter({
        start_date: date?.from
          ? moment(date.from).format("YYYY-MM-DD")
          : undefined,
        end_date: date?.to ? moment(date.to).format("YYYY-MM-DD") : undefined,
      }),
    queryKey: ["orders", date?.from, date?.to],
  });

  useEffect(() => {
    if (orders?.data) {
      setOrderList(orders?.data);
    }
  }, [orders]);

  const handleSearch = () => {
    refetch();
  };

  const handleClear = () => {
    setDate(undefined);
    refetch();
  };

  const generatePDF = async () => {
    const pdf = new jsPDF();

    pdf.addImage(logoBase64, "PNG", 14, 10, 60, 12);

    // Add a bold title below the logo
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text("REPORT SUMMARY", 14, 40);

    // Add a bold report type below the title
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text("Report Type: Order Report", 14, 50);

    // Date Range aligned to the far right of "Report Type"
    if (date?.from || date?.to) {
      const formattedFrom = date?.from ? moment(date.from).format("LL") : "";
      const formattedTo = date?.to ? moment(date.to).format("LL") : "";
      const dateText = `Date: ${formattedFrom} – ${formattedTo}`;

      const pageWidth = pdf.internal.pageSize.width;
      const textWidth = pdf.getTextWidth(dateText);
      pdf.text(dateText, pageWidth - textWidth - 14, 50); // Align to the right of "Report Type"
    }

    // Space before the table
    pdf.text(" ", 14, 60);

    const tableColumn = ["ID", "DATE", "NAME", "PHONE NUMBER", "MESSAGE"];
    const tableRows = orderList.map((order) => [
      order.id,
      moment(order.createdAt).format("DD-MM-YYYY"),
      `${order.first_name} ${order.last_name}`,
      order.phone_number,
      order.message,
    ]);

    autoTable(pdf, {
      head: [tableColumn],
      body: tableRows,
      startY: 60,
      theme: "grid",
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        lineWidth: 0.1,
        lineColor: [0, 0, 0],
      },
      styles: {
        textColor: [0, 0, 0],
        lineWidth: 0.1,
        lineColor: [0, 0, 0],
      },
    });

    //footer with total count
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text(
      `Total Orders: ${orderList.length}`,
      14,
      pdf.internal.pageSize.height - 30
    );

    pdf.save("orders_report.pdf");
  };

  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">View All Orders</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="cursor-pointer">
                  View All Orders
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Tabs defaultValue="details" className="space-y-4">
          <TabsContent value="details" className="space-y-4">
            <Card className="col-span-4 md:col-span-3 pt-10">
              <CardContent>
                <div className="flex flex-col items-start gap-8 md:flex">
                  <form className="grid w-full items-start gap-6">
                    <div className="flex items-center justify-start gap-4">
                      <Label htmlFor="order_type" className="text-lg">
                        Order Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-[300px] justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date?.from ? (
                              date.to ? (
                                <>
                                  {format(date.from, "LLL dd, y")} -{" "}
                                  {format(date.to, "LLL dd, y")}
                                </>
                              ) : (
                                format(date.from, "LLL dd, y")
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            initialFocus
                            mode="range"
                            selected={date}
                            onSelect={setDate}
                            className="bg-white rounded"
                            numberOfMonths={2}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="flex gap-4 mt-4">
                      <Button
                        type="button"
                        onClick={handleSearch}
                        className="w-32 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-700 uppercase tracking-wider"
                      >
                        Search
                      </Button>
                      <Button
                        type="button"
                        onClick={handleClear}
                        className="w-32 text-xl h-12 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 uppercase tracking-wider"
                      >
                        Clear
                      </Button>
                      <Button
                        type="button"
                        onClick={generatePDF}
                        className="w-45 text-xl h-12 bg-green-600 text-white rounded hover:bg-green-700 uppercase tracking-wider"
                      >
                        Download PDF
                      </Button>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-4 md:col-span-3 pt-10">
              <CardContent>
                <Table id="orders-table">
                  <TableHeader>
                    <TableRow className="border-t">
                      <TableHead className="text-gray-400">ID</TableHead>
                      <TableHead className="text-gray-400">Date</TableHead>
                      <TableHead className="text-gray-400">Name</TableHead>
                      <TableHead className="text-gray-400">
                        Phone Number
                      </TableHead>
                      <TableHead className="text-gray-400">Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orderList?.map((order: any) => (
                      <TableRow key={order.id} className="border-none">
                        <TableCell>{order.id}</TableCell>
                        <TableCell className="font-medium">
                          {moment(order.createdAt).format("DD-MM-YYYY")}
                        </TableCell>
                        <TableCell>{`${order.first_name} ${order.last_name}`}</TableCell>
                        <TableCell>{order.phone_number}</TableCell>
                        <TableCell>{order.message}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
