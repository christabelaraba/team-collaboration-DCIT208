/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageHead from "@/components/custom/page-head";
import { useParams } from "react-router-dom";
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
import { useQuery, useMutation } from "@tanstack/react-query";
import { getProduct, updateProduct } from "@/api/data/query";
import { useEffect, useState } from "react";
import { Product } from "@/api/data/interfaces";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";

export default function GeneratorDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<Product>({
    id: 0,
    model: "",
    prime: "",
    createdAt: "",
    picture_url: "",
    description: "",
    voltage: "",
    engine: "",
    frequency: "",
    alternator: "",
    amp_per_phase: "",
    power: "",
    fuel_type: "",
    size: "",
    stock_status: "",
  });

  const { data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id as string),
  });

  const updateProductMutation = useMutation({
    mutationFn: () => updateProduct(productDetails),
    onSuccess: () => {
      toast.success("Product updated successfully");
    },
    onError: () => {
      toast.error("Failed to update product");
    },
  });

  useEffect(() => {
    
    if (product?.data) {
      setProductDetails({
        ...product.data,
        id: Number(id),
      });

      setProductDetails(product.data);
      
    }
  }, [product, id]);




  const handleUpdate = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await updateProductMutation.mutateAsync();
  };

  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Generator Details
          </h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/generators">Generators</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="cursor-pointer">
                  Generator Details
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Tabs defaultValue="details" className="space-y-4">
          <TabsContent value="details" className="space-y-4">
            <Card className="col-span-4 md:col-span-3 pt-10">
              <CardContent>
                <div className="relative hidden flex-col items-start gap-8 md:flex">
                  <form
                    onSubmit={handleUpdate}
                    className="grid w-full items-start gap-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="model">Model:</Label>
                        <Input
                          id="model"
                          name="model"
                          type="text"
                          value={productDetails?.model}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              model: e.target.value,
                            })
                          }
                          placeholder="Model"
                          className="rounded"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="power">Power:</Label>
                        <Input
                          id="power"
                          name="power"
                          type="text"
                          value={productDetails?.power}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              power: e.target.value,
                            })
                          }
                          placeholder="Power"
                          className="rounded"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="price">Price ($)*:</Label>
                        <Input
                          id="price"
                          name="price"
                          type="number"
                          value={productDetails.price}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              price: parseFloat(e.target.value),
                            })
                          }
                          placeholder="$0.00"
                          className="rounded"
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="prime">Prime *:</Label>
                        <Input
                          id="prime"
                          name="prime"
                          type="text"
                          value={productDetails.prime}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              prime: e.target.value,
                            })
                          }
                          placeholder="Prime"
                          className="rounded"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="color">Color *:</Label>
                        <Input
                          id="color"
                          name="color"
                          type="text"
                          value={productDetails.color}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              color: e.target.value,
                            })
                          }
                          placeholder="Color"
                          className="rounded"
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="amp_per_phase">Amp per Phase *:</Label>
                        <Input
                          id="amp_per_phase"
                          name="amp_per_phase"
                          type="text"
                          value={productDetails.amp_per_phase}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              amp_per_phase: e.target.value,
                            })
                          }
                          placeholder="Amp per Phase"
                          className="rounded"
                          required
                        />
                      </div>
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="engine">Engine:</Label>
                        <Select
                          name="engine"
                          value={productDetails?.engine}
                          onValueChange={(value) =>
                            setProductDetails({
                              ...productDetails,
                              engine: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Generator Engine" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              <SelectLabel>Select Generator Engine</SelectLabel>
                              <SelectItem key="diesel" value="diesel">
                                Diesel
                              </SelectItem>
                              <SelectItem value="Gasoline">Gasoline</SelectItem>
                              <SelectItem value="Gas">Gas</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="fuel_type">Fuel Type:</Label>
                        <Select
                          name="fuel_type"
                          value={productDetails?.fuel_type}
                          onValueChange={(value) =>
                            setProductDetails({
                              ...productDetails,
                              fuel_type: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Fuel Type" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              <SelectLabel>Select Fuel Type</SelectLabel>
                              <SelectItem key="petrol" value="petrol"> Petrol </SelectItem>
                              <SelectItem key="diesel" value="diesel"> Diesel </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="voltage">Voltage:</Label>
                        <Input
                          id="voltage"
                          name="voltage"
                          type="text"
                          value={productDetails?.voltage}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              voltage: e.target.value,
                            })
                          }
                          placeholder="Voltage"
                          className="rounded"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="frequency">Frequency:</Label>
                        <Input
                          id="frequency"
                          name="frequency"
                          type="text"
                          value={productDetails?.frequency}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              frequency: e.target.value,
                            })
                          }
                          placeholder="Frequency"
                          className="rounded"
                        />
                      </div>
                    </div>


                    <div className="grid grid-cols-3 gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="alternator">Alternator *:</Label>
                        <Input
                          id="alternator"
                          name="alternator"
                          type="text"
                          value={productDetails.alternator}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              alternator: e.target.value,
                            })
                          }
                          placeholder="Alternator"
                          className="rounded"
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="size">Size *:</Label>
                        <Input
                          id="size"
                          name="size"
                          type="text"
                          value={productDetails.size}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              size: e.target.value,
                            })
                          }
                          placeholder="Size"
                          className="rounded"
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="fuel_type">Stock Status *:</Label>
                        <Select
                          name="stock_status"
                          value={productDetails.stock_status}
                          onValueChange={(value) =>
                            setProductDetails({
                              ...productDetails,
                              stock_status: value,
                            })
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Stock Status" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              <SelectLabel>Select Stock Status</SelectLabel>
                              <SelectItem key="I" value="I">
                                {" "}
                                In Stock{" "}
                              </SelectItem>
                              <SelectItem key="L" value="L">
                                {" "}
                                Low on Stock{" "}
                              </SelectItem>
                              <SelectItem key="O" value="O">
                                {" "}
                                Out of Stock{" "}
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>


                    <div className="grid gap-3">
                      <Label htmlFor="description">Description:</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={productDetails?.description}
                        onChange={(e) =>
                          setProductDetails({
                            ...productDetails,
                            description: e.target.value,
                          })
                        }
                        className="rounded"
                        placeholder="Description"
                        rows={5}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-44 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider"
                    >
                      Update
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
