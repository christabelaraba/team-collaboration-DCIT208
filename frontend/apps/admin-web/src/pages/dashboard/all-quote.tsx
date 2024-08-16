/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
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
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getQuotes, searchQuotes } from "@/api/data/query";
import moment from "moment";
import { Quote } from '@/api/data/interfaces';


export default function AllQuote() {
  const navigate = useNavigate();
  const [date, setDate] = useState<DateRange | undefined>(undefined); // Date range starts as undefined
  const [filteredCustomers, setFilteredCustomers] = useState<string[]>([]);
  const [selectedCustomerName, setSelectedCustomerName] = useState("");
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(
    null
  );
  const [customerMap, setCustomerMap] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [quotesList, setQuotesList] = useState<Quote[]>([]);


  const { data: quotes } = useQuery({
    queryFn: getQuotes,
    queryKey: ["quotes"],
  });

  useEffect(() => {    
    if (quotes?.data) {
      setQuotesList(quotes?.data);

      // Create a map of customer names to their IDs
      const map: Record<string, string> = {};
      quotes?.data.forEach((quote: any) => {
        map[quote.customer_name] = quote.customer_id;
      });
      setCustomerMap(map);
    }
  }, [quotes]);

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    setSelectedCustomerName(inputValue);

    if (quotes?.data) {
      const customers = quotes?.data
        .map((quote: any) => quote.customer_name)
        .filter((name: string) => name.toLowerCase().includes(inputValue));

      setFilteredCustomers(customers);
    }
  };

  const handleCustomerSelect = (customer: string) => {
    setSelectedCustomerName(customer);
    setSelectedCustomerId(customerMap[customer] || null);
    setFilteredCustomers([]); // Close the dropdown after selection
  };

  const searchQuotesMutation = useMutation({
    mutationFn: searchQuotes, // or simply `searchQuotes`
    onSuccess: (data: any) => {
      setQuotesList(data.data.data); // update the list with the result
    },
    onError: (error) => {
      console.error("Search failed:", error);
    },
  });

  const handleSearch = () => {
    const start_date = date?.from ? moment(date.from).format("YYYY-MM-DD") : "";
    const end_date = date?.to ? moment(date.to).format("YYYY-MM-DD") : "";

    searchQuotesMutation.mutate({
      customer_id: selectedCustomerId || "", // Use the customer_id
      status,
      start_date, // Empty if no date selected
      end_date, // Empty if no date selected
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "P":
        return "bg-gray-200 text-gray-700"; // Pending - light gray background with darker text
      case "A":
        return "bg-green-200 text-green-700"; // Approved - light green background with darker text
      case "R":
        return "bg-red-200 text-red-700"; // Rejected - light red background with darker text
      default:
        return "bg-gray-200 text-gray-700"; // Default/Unknown status
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "P":
        return "Pending";
      case "A":
        return "Approved";
      case "R":
        return "Rejected";
      default:
        return status;
    }
  };

  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">View All Quote</h2>
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
                  View All Quote
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Tabs defaultValue="details" className="space-y-4">
          <TabsContent value="details" className="space-y-4">
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
                                  key={customer}
                                  className="p-2 cursor-pointer hover:bg-gray-100"
                                  onClick={() => handleCustomerSelect(customer)}
                                >
                                  {customer}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        <div className="flex flex-col gap-3">
                          <Label htmlFor="status">Status:</Label>
                          <Select onValueChange={setStatus}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectGroup>
                                <SelectItem value="P">Pending</SelectItem>
                                <SelectItem value="R">Rejected</SelectItem>
                                <SelectItem value="A">Approved</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
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

            {/* Second Card: Full-width Table */}
            <Card className="w-full mt-10">
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-t">
                      <TableHead className="text-gray-400">Quote ID</TableHead>
                      <TableHead className="text-gray-400">Date</TableHead>
                      <TableHead className="text-gray-400">Customer</TableHead>
                      <TableHead className="text-gray-400">Price ($)</TableHead>
                      <TableHead className="text-gray-400">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quotesList.map((quote: any) => (
                      <TableRow key={quote.id} className="border-none ">
                        <TableCell className="font-medium">
                          {quote.quote_id}
                        </TableCell>
                        <TableCell>
                          {moment(quote.created_at).format("DD-MM-YYYY")}
                        </TableCell>
                        <TableCell>{quote.customer_name}</TableCell>
                        <TableCell>{quote.price}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded ${getStatusColor(
                              quote.status
                            )}`}
                          >
                            {getStatusText(quote.status)}
                          </span>
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
