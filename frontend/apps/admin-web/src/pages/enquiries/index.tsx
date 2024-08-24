/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import moment from "moment";

import PageHead from "@/components/custom/page-head";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn, logoBase64 } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getEnquiries, searchEnquiries, getCustomers } from "@/api/data/query";
import { Label } from "@/components/ui/label";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { PopoverContent } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Enquiries } from "@/api/data/interfaces";

export default function EnquiryPage() {
  const navigate = useNavigate();
  const [date, setDate] = useState<DateRange | undefined>(undefined); // Date range starts as undefined
  const [filteredCustomers, setFilteredCustomers] = useState<{ id: string; name: string }[]>([]);
  const [selectedCustomerName, setSelectedCustomerName] = useState("");
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(
    null
  );
  const [enquiriesList, setEnquiriesList] = useState<Enquiries[]>([]);


  // Fetch customers using the getCustomers query
  const { data: customers } = useQuery({
    queryFn: getCustomers,
    queryKey: ["customers"],
  });

  // Fetch enquiries using the getEnquiries query
  const { data: enquiries } = useQuery({
    queryFn: getEnquiries,
    queryKey: ["enquiries"],
  });

  // UseEffect to set customerMap and filter customers
  useEffect(() => {
    if (enquiries?.data) {
      setEnquiriesList(enquiries?.data);
    }
  }, [customers, enquiries]);

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    setSelectedCustomerName(inputValue);

    if (inputValue === "") {
		setFilteredCustomers([]); // Clear the dropdown if input is empty
		setSelectedCustomerId(null);
		return;
    }

    if (customers?.data) {
      const filtered = customers?.data
        .filter((customer: any) => {
          const fullName =
            `${customer.first_name} ${customer.last_name}`.toLowerCase();
          return fullName.includes(inputValue);
        })
        .map((customer: any) => ({
          id: customer.id,
          name: `${customer.first_name} ${customer.last_name}`,
        }));

      setFilteredCustomers(filtered);
    }
  };

  const handleCustomerSelect = (customerName: string) => {
    setSelectedCustomerName(customerName);

	const selectedCust = customers?.data.filter((customer: any) => {
		const fullName = `${customer.first_name} ${customer.last_name}`.toLowerCase();		
        return fullName.includes(customerName.toLowerCase());
	});
	
    setSelectedCustomerId(selectedCust[0].id);
    setFilteredCustomers([]); // Close the dropdown after selection
  };

  const searchEnquiriesMutation = useMutation({
    mutationFn: searchEnquiries,
    onSuccess: (data: any) => {
      setEnquiriesList(data.data.data); // update the list with the result
    },
    onError: (error) => {
      console.error("Search failed:", error);
    },
  });

  const handleSearch = () => {
    const start_date = date?.from ? moment(date.from).format("YYYY-MM-DD") : "";
    const end_date = date?.to ? moment(date.to).format("YYYY-MM-DD") : "";	

    searchEnquiriesMutation.mutate({
      customer_id: selectedCustomerId || "", // Use the customer_id
    //   status,
      start_date, // Empty if no date selected
      end_date, // Empty if no date selected
    });
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
    pdf.text("Report Type: Enquiries Report", 14, 50);

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

    const tableColumn = ["ID", "DATE", "NAME", "MESSAGE"];
    const tableRows = enquiriesList.map((order) => [
      order.id,
      moment(order.createdAt).format("DD-MM-YYYY"),
      order.customer_name,
      order.message || "",
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
      `Total Enquiries: ${enquiriesList.length}`,
      14,
      pdf.internal.pageSize.height - 30
    );

    pdf.save("enquiries_report.pdf");
  };


  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Enquiries</h2>
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
                  Enquiries
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="flex justify-center p-4 pt-6 md:p-8 bg-gray-100">
              {/* First Card: Centered Form */}
              <Card className="w-full max-w-3xl">
                <CardContent>
                  <div className="flex justify-center">
                    <form className="w-full max-w-lg">
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3 mt-4">
                          {" "}
                          {/* Added mt-4 for spacing */}
                          <Label htmlFor="date_range">Date Range:</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
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
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                className="bg-white rounded"
                                numberOfMonths={2}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="flex flex-col gap-3">
                          <Label htmlFor="customer">Customer:</Label>
                          <Input
                            id="customer"
                            type="text"
                            value={selectedCustomerName}
                            onChange={handleCustomerChange}
                            placeholder="Enter customer name"
                            className="rounded w-full"
                          />
                          {filteredCustomers.length > 0 && (
                            <ul className="bg-white border rounded shadow-lg mt-2">
                              {filteredCustomers.map((customer) => (
                                <li
                                  key={customer.id} // Use customer_id as the key
                                  className="p-2 cursor-pointer hover:bg-gray-100"
                                  onClick={() =>
                                    handleCustomerSelect(customer.name)
                                  }
                                >
                                  {customer.name}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        <div className="flex justify-between mt-8">
                          <Button
                            type="button"
                            onClick={handleSearch}
                            className="w-32 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 uppercase tracking-wider"
                          >
                            Search
                          </Button>

                          <Button
                        type="button"
                        onClick={generatePDF}
                        className="w-45 text-xl h-12 bg-green-600 text-white rounded hover:bg-green-700 uppercase tracking-wider"
                      >
                        Download PDF
                      </Button>

                          <Button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="w-32 text-xl h-12 border-orange-600 text-orange-600 border rounded hover:border-orange-600 uppercase tracking-wider"
                          >
                            Back
                          </Button>

                          

                        </div>
                      </div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="col-span-4 md:col-span-3 pt-10">
              <CardContent>
                <Table>
					<TableHeader>
						<TableRow className="border-t">
						<TableHead className="text-gray-400">ID</TableHead>
						<TableHead className="text-gray-400">Date</TableHead>
						<TableHead className="text-gray-400">Name</TableHead>
						<TableHead className="text-gray-400">Message</TableHead>
						<TableHead className="text-gray-400">Type</TableHead>
						<TableHead className="text-gray-400">Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{enquiriesList?.map((enquiry: any) => (
						<TableRow key={enquiry.id} className="border-none">
							<TableCell className="font-medium">{enquiry.id}</TableCell>
							<TableCell>
							{moment(enquiry.createdAt).format("MMMM Do YYYY, h:mm A")}
							</TableCell>
							<TableCell>{enquiry.customer_name}</TableCell>
							<TableCell>{enquiry.message}</TableCell>
							<TableCell>Enquiry</TableCell>
							<TableCell className="text-left">
							<Link
								to={`/enquiries/${enquiry.id}`}
								className="bg-gray-200 p-1.5 rounded hover:bg-gray-300 transition"
							>
								View
							</Link>
							</TableCell>
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
