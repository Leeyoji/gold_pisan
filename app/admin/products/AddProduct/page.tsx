import { Button } from "@/components/ui/button";
import RightMenu from "../../components/right";
import DashboardLayout from "../../dashboard/layout";
import Link from "next/link";
import { ArrowBigLeft, ArrowBigLeftIcon, ChevronLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Products from "../page";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function AddProduct () {
    return (
        
        <div>
            <RightMenu/>
                <div className="flex gap-4 pl-7 pb-5">
                <Link href={'../products'}>
                    <Button> 
                        <ChevronLeft/>
                    </Button>
                </Link>
                <p className="text-3xl font-semibold">Add Products</p>
                </div>
                <div className="pl-9 pr-9 pb-9">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Product Details</CardTitle>
                        <CardDescription>Enter Product Details Here</CardDescription>
                        <Separator/>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <form className="w-[70rem] text-lg">
                            <Label className="text-lg">Product Name</Label>
                            <Input className="mb-3 shadow-sm" placeholder="Enter product name here" value={'prod_name'}/>

                            <Label className="text-lg">Description</Label>
                            <Input className="h-20 mb-3 shadow-sm" placeholder="Enter product description here" value={'prod_desc'}/>
                            
                            <Label className="text-lg">Prices</Label>
                            <Card className="mb-3 shadow-sm">
                            <div className="flex flex-grid cols-3 gap-4 tracking-widest mt-3 p-5 items-center">
                                <Label className="font-bold pl-10">Small</Label>
                                <Input className="h-8" type="number" placeholder="₱00.00" value={'prod_sm_price'}/>

                                <Label className="font-bold pl-10">Medium</Label>
                                <Input className="h-8" type="number" placeholder="₱00.00" value={'prod_md_price'}/>

                                <Label className="font-bold pl-10">Breeder</Label>
                                <Input className="mr-10 h-8" type="number" placeholder="₱00.00" value={'prod_bd_price'}/>
                            </div>
                            </Card>


                            <Label className="text-lg">Stocks</Label>
                            <Card className="mb-3 shadow-sm">
                            <div className="flex flex-grid cols-3 gap-4 tracking-widest mt-3 p-5 items-center">
                                <Label className="font-bold pl-10">Small</Label>
                                <Input className="h-8" type="number" placeholder="0" value={'prod_sm_stocks'}/>

                                <Label className="font-bold pl-10">Medium</Label>
                                <Input className="h-8" type="number" placeholder="0" value={'prod_md_price'}/>

                                <Label className="font-bold pl-10">Breeder</Label>
                                <Input className="mr-10 h-8" type="number" placeholder="0" value={'prod_bd_stocks'}/>
                            </div>
                            </Card>

                            <Label htmlFor="picture" className="text-lg">Picture</Label>
                            <Input id="picture" type="file" />
                            
                            <div className="flex flex-row-reverse mt-9">
                            <Button>Done</Button>
                            </div>
                        </form>
                    </CardContent>
                    
                        
                </Card> 

                </div>
        </div>
    )
}