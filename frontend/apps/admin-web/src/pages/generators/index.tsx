/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/data/query";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Product } from "@/api/data/interfaces";
import { logoBase64 } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Generators() {
  // State to manage selected generator and stock status
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [selectedStockStatus, setSelectedStockStatus] = useState<string | null>(
    null
  );
  const [filteredProducts, setFilteredProducts] = useState<string[]>([]);

  const [selectedProductName, setSelectedProductName] = useState("");
  const [generatorMap, setGeneratorMap] = useState<Record<string, string>>({});
  const [productList, setProductsList] = useState<Product[]>([]);

  // Fetch products with the query key including selected generator and stock status
  const { data: products } = useQuery({
    queryFn: () =>
      getProducts({
        product_id: selectedProductId,
        stock_status: selectedStockStatus,
      }),
    queryKey: ["enquiries", selectedProductId, selectedStockStatus],
  });

  useEffect(() => {
    if (products?.data) {
      setProductsList(products?.data);

      // Create a map of product models to their IDs
      const map: Record<string, string> = {};
      products?.data.forEach((product: any) => {
        map[product.model] = product.id;
      });
      setGeneratorMap(map);
    }
  }, [products]);

  const handleGeneratorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    setSelectedProductName(inputValue);

    if (inputValue.length == 0) {
      setFilteredProducts([]); // Clear the dropdown if input is empty
      setSelectedProductId(null);
      return;
    }

    if (products?.data) {
      const generators = products?.data
        .map((product: any) => product.model)
        .filter((model: string) => model.toLowerCase().includes(inputValue));

      setFilteredProducts(generators);
    }
  };

  const handleGeneratorSelect = (product: string) => {
    setSelectedProductName(product);
    setSelectedProductId(generatorMap[product] || null);
    setFilteredProducts([]); // Close the dropdown after selection
  };

  // Function to handle stock status selection
  const handleStockStatusChange = (value: string) => {
    setSelectedStockStatus(value);
  };

  const clearFilters = () => {
    setSelectedProductId(null);
    setSelectedStockStatus(null);
    setFilteredProducts([]);
    setSelectedProductName("");
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
    pdf.text("Report Type: Generators Report", 14, 50);

    // Space before the table
    pdf.text(" ", 14, 60);

    const tableColumn = [
      "ID",
      "DATE",
      "MODEL",
      "GENERATOR POWER",
      "ENGINE",
      "STOCK STATUS",
    ];
    const tableRows = productList.map((product) => [
      product.id,
      moment(product.createdAt).format("DD-MM-YYYY"),
      product.model,
      product.power,
      product.engine,
      (product.stock_status == "I") ? "In stock" : (product.stock_status == "L") ? "Low on stock" : "Out of Stock"
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
      `Total Generators: ${productList.length}`,
      14,
      pdf.internal.pageSize.height - 30
    );

    pdf.save("generators_report.pdf");
  };

  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
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
                  Inventory
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Tabs defaultValue="details" className="space-y-4">
          <TabsContent value="details" className="space-y-4">
            <Card className="col-span-4 md:col-span-3 pt-10">
              <CardContent>
                <div className="flex-col items-start gap-8 flex">
                  <form className="grid w-full items-start gap-6">
                    <div className="flex items-center justify-between gap-4 ml-10">
                      <div className="relative flex items-center gap-3">
                        <Label htmlFor="generator" className="w-52 text-lg">
                          Generators
                        </Label>
                        <Input
                          id="generator"
                          type="text"
                          value={selectedProductName}
                          onChange={handleGeneratorChange}
                          placeholder="Type to search a generator model"
                          className="rounded w-full"
                        />

                        {filteredProducts.length > 0 && (
                          <ul className="absolute top-full left-0 w-full bg-white border rounded shadow-lg mt-1 z-10">
                            {filteredProducts.map((product) => (
                              <li
                                key={product}
                                className="p-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleGeneratorSelect(product)}
                              >
                                {product}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <Label htmlFor="stock_status" className="w-52 text-lg">
                          Stock Status
                        </Label>
                        <Select onValueChange={handleStockStatusChange}>
                          <SelectTrigger className="rounded">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              <SelectItem value="I">In Stock</SelectItem>
                              <SelectItem value="L">Low Stock</SelectItem>
                              <SelectItem value="O">Out of Stock</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-4">
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
                      >
                        Clear Filters
                      </button>

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
              <div className="flex justify-end pr-4">
                <Link to="/generators/add">
                  <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition">
                    Add Generator
                  </button>
                </Link>
              </div>
              <br></br>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-t">
                      <TableHead className="text-gray-400">
                        Product Model
                      </TableHead>
                      <TableHead className="text-gray-400">
                        Generator Power
                      </TableHead>
                      <TableHead className="text-gray-400">Engine</TableHead>
                      <TableHead className="text-gray-400">Status</TableHead>
                      <TableHead className="text-gray-400">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(productList as any)?.map((product: any) => (
                      <TableRow key={product.id} className="border-none ">
                        <TableCell className="font-medium">
                          {product.model}
                        </TableCell>
                        <TableCell>{product.power}</TableCell>
                        <TableCell className="capitalize">
                          {product.engine}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded ${
                              product.stock_status === "I"
                                ? "bg-green-500 text-white"
                                : product.stock_status === "L"
                                  ? "bg-yellow-500 text-black"
                                  : "bg-red-500 text-white"
                            }`}
                          >
                            {product.stock_status === "I"
                              ? "In Stock"
                              : product.stock_status === "L"
                                ? "Low on Stock"
                                : "Out of Stock"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Link
                            to={`/generators/${product.id}`}
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
