/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageHead from "@/components/custom/page-head";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "@/api/data/query";
import { useState } from "react";
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

export default function AddGenerator() {
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState<Product>({
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
    price: 0,
    color: "",
    stock_status: "I",
  });

  const createProductMutation = useMutation({
    mutationFn: () => createProduct(newProduct),
    onSuccess: (res: any) => {
      if (res.response_code == "002") {
        toast.success("Product added successfully");
        navigate("/generators"); // Redirect to the generators list page
      } else {
        toast.error(
          res.response_message || "An error occurred. Please try again."
        );
      }
    },
    onError: () => {
      toast.error("Failed to add product");
    },
  });

  const handleAddProduct = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await createProductMutation.mutateAsync();
  };

  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Add New Generator
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
                  Add Generator
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
                    onSubmit={handleAddProduct}
                    className="grid w-full items-start gap-6"
                  >
                    {/* Existing fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="model">Model *:</Label>
                        <Input
                          id="model"
                          name="model"
                          type="text"
                          value={newProduct.model}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              model: e.target.value,
                            })
                          }
                          placeholder="Model"
                          className="rounded"
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="power">Power *:</Label>
                        <Input
                          id="power"
                          name="power"
                          type="text"
                          value={newProduct.power}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              power: e.target.value,
                            })
                          }
                          placeholder="Power"
                          className="rounded"
                          required
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
                          value={newProduct.price}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
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
                          value={newProduct.prime}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
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
                          value={newProduct.color}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
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
                          value={newProduct.amp_per_phase}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              amp_per_phase: e.target.value,
                            })
                          }
                          placeholder="Amp per Phase"
                          className="rounded"
                          required
                        />
                      </div>
                    </div>

                    {/* Rest of the existing fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="engine">Engine *:</Label>
                        <Select
                          name="engine"
                          value={newProduct.engine}
                          onValueChange={(value) =>
                            setNewProduct({
                              ...newProduct,
                              engine: value,
                            })
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Generator Engine" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              <SelectLabel>
                                Select Generator Engine *
                              </SelectLabel>
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
                        <Label htmlFor="fuel_type">Fuel Type *:</Label>
                        <Select
                          name="fuel_type"
                          value={newProduct.fuel_type}
                          onValueChange={(value) =>
                            setNewProduct({
                              ...newProduct,
                              fuel_type: value,
                            })
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Fuel Type" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              <SelectLabel>Select Fuel Type</SelectLabel>
                              <SelectItem key="petrol" value="petrol">
                                {" "}
                                Petrol{" "}
                              </SelectItem>
                              <SelectItem key="diesel" value="diesel">
                                {" "}
                                Diesel{" "}
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="voltage">Voltage *:</Label>
                        <Input
                          id="voltage"
                          name="voltage"
                          type="text"
                          value={newProduct.voltage}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              voltage: e.target.value,
                            })
                          }
                          placeholder="Voltage"
                          className="rounded"
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="frequency">Frequency *:</Label>
                        <Input
                          id="frequency"
                          name="frequency"
                          type="text"
                          value={newProduct.frequency}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              frequency: e.target.value,
                            })
                          }
                          placeholder="Frequency"
                          className="rounded"
                          required
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
                          value={newProduct.alternator}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
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
                          value={newProduct.size}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
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
                          value={newProduct.stock_status}
                          onValueChange={(value) =>
                            setNewProduct({
                              ...newProduct,
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
                        value={newProduct.description}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
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
                      className="w-64 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider"
                    >
                      Add Generator
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
