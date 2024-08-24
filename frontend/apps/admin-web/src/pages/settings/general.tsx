/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea"
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
import { useEffect, useState } from "react";
import { GeneralSettings } from "@/api/data/interfaces";
import { useMutation, useQuery } from "@tanstack/react-query";
import { get_general_settings, save_general_settings } from "@/api/data/query";
import { toast } from "react-toastify";
export default function General() {
  const navigate = useNavigate();

  const [newGeneralSettings, setNewGeneralSettings] = useState<GeneralSettings>({
    company_name: "",
    company_email: "",
    company_phone: "",
    company_address: "",
    language: "",
    currency: ""
  });


  const { data: general_settings } = useQuery({
    queryKey: ["general_settings"],
    queryFn: () => get_general_settings(),
  });


  useEffect(() => {    
    if (general_settings?.data) {
      setNewGeneralSettings(general_settings?.data);      
    }
  }, [general_settings]);

  
  const saveGeneralMutation = useMutation({
    mutationFn: () => save_general_settings(newGeneralSettings),
    onSuccess: (res: any) => {
      if (res.response_code == "002") {
        toast.success("General Settings saved successfully");
        navigate("/settings"); // Redirect to the generators list page
      } else {
        toast.error(
          res.response_message || "An error occurred. Please try again."
        );
      }
    },
    onError: () => {
      toast.error("Failed to save settings");
    },
  });


  const handleSaveSettings = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await saveGeneralMutation.mutateAsync();
  };


  const languages = {
    en: { nativeName: 'English' },
    "zh-CN": { nativeName: "中文" }
  };

  return (
    <>
      <PageHead title="Dashboard | App" />
      <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            General Settings
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
                  <Link to="/settings">Settings</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="cursor-pointer">
                  General Settings
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Tabs defaultValue="details" className="space-y-4">
          <TabsContent value="details" className="space-y-4">
            <Card className="col-span-4 md:col-span-3 pt-10 ">
              <CardContent>
                <div className="flex-col items-start gap-8 md:flex ">
                  <form className="grid w-8/12 items-start gap-6" onSubmit={handleSaveSettings}>
                    <div className=" flex items-center  ">
                      <Label htmlFor="company_name" className="w-44 text-lg">
                        Company Name:
                      </Label>
                      <Input
                        id="company_name"
                        name="company_name"
                        type="text"
                        value={newGeneralSettings.company_name}
                        onChange={(e) =>
                          setNewGeneralSettings({
                            ...newGeneralSettings,
                            company_name: e.target.value,
                          })
                        }
                        placeholder="Enter company name"
                        className="rounded"
                      />
                    </div>
                    <div className=" flex items-center  ">
                      <Label htmlFor="company_email" className="w-44 text-lg">
                        Company Email:
                      </Label>
                      <Input
                        id="company_email"
                        name="company_email"
                        type="email"
                        value={newGeneralSettings.company_email}
                        onChange={(e) =>
                          setNewGeneralSettings({
                            ...newGeneralSettings,
                            company_email: e.target.value,
                          })
                        }
                        placeholder="Enter company email"
                        className="rounded"
                      />
                    </div>
                    <div className=" flex items-center ">
                      <Label htmlFor="contact_phone" className="w-44 text-lg">
                        Contact Phone:
                      </Label>
                      <Input
                        id="company_phone"
                        name="company_phone"
                        type="text"
                        value={newGeneralSettings.company_phone}
                        onChange={(e) =>
                          setNewGeneralSettings({
                            ...newGeneralSettings,
                            company_phone: e.target.value,
                          })
                        }
                        placeholder="contact phone"
                        className="rounded"
                      />
                    </div>
                    <div className=" flex items-center ">
                      <Label htmlFor="address" className="w-44 text-lg">
                        Address:
                      </Label>
                      <Input
                        id="company_address"
                        name="company_address"
                        type="text"
                        value={newGeneralSettings.company_address}
                        onChange={(e) =>
                          setNewGeneralSettings({
                            ...newGeneralSettings,
                            company_address: e.target.value,
                          })
                        }
                        placeholder="address"
                        className="rounded"
                      />
                    </div>
                    <div className=" flex items-center ">
                      <Label
                        htmlFor="default_language"
                        className="w-44 text-lg"
                      >
                        Default Language:
                      </Label>
                      <Select
                        name="language"
                        value={newGeneralSettings.language}
                        onValueChange={(value) =>
                          setNewGeneralSettings({
                            ...newGeneralSettings,
                            language: value,
                          })
                        }
                        >
                        <SelectTrigger className="">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>

                            {Object.keys(languages).map((lng) => (
                                <SelectItem value={lng}>{lng}</SelectItem>
                                // <li key={lng}
                                // style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                                // className='block px-4 py-2 text-sm cursor-pointer hover:bg-gray-300 text-black'
                                // onClick={() => onChange(lng)}
                                // >
                                //     {languages[lng].nativeName}
                                // </li>
                            ))}

                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className=" flex items-center ">
                      <Label htmlFor="currency" className="w-44 text-lg">
                        Currency:
                      </Label>
                      <Select
                      name="currency"
                      value={newGeneralSettings.currency}
                      onValueChange={(value) =>
                        setNewGeneralSettings({
                          ...newGeneralSettings,
                          currency: value,
                        })
                      }>
                        <SelectTrigger className="">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            <SelectItem value="USD">USD ($)</SelectItem>
                            <SelectItem value="Yuan">Chinese Yuan Renminbi(¥)</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center ">
                      <Button
                        type="submit"
                        className="w-56 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider"
                      >
                        SAVE CHANGES
                      </Button>
                      <Link to="/settings">
                        <Button
                          type="submit"
                          className="w-32 text-xl h-12 border-orange-600 text-orange-600 border rounded hover:border-orange-600 mx-auto uppercase tracking-wider"
                        >
                          BACK
                        </Button>
                      </Link>
                    </div>
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
