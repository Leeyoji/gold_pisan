import { Button } from "@/components/ui/button";
import RightMenu from "../../components/right";
import Link from "next/link";
import { ArrowBigLeft, ArrowBigLeftIcon, ChevronLeft, CircleAlert } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Products from "../page";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog";

export default function EditProduct () {
    return (
        
        <div>
            <RightMenu/>
                <div className="flex gap-4 pl-7 pb-5">
                <Link href={'../products'}>
                    <Button> 
                        <ChevronLeft/>
                    </Button>
                </Link>
                <p className="text-3xl font-semibold">Edit Product</p>
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
                            <Input className="mb-3 shadow-sm" placeholder="Enter product name here"/>
                            <Label className="text-lg">Description</Label>
                            <Input className="h-20 mb-3 shadow-sm" placeholder="Enter product description here"/>
                            
                            <Label className="text-lg">Prices</Label>
                            <Card className="mb-3 shadow-sm">
                            <div className="flex flex-grid cols-3 gap-4 tracking-widest mt-3 p-5 items-center">
                                <Label className="font-bold pl-10">Small</Label>
                                <Input className="h-8" type="number" placeholder="₱00.00"/>
                                <Label className="font-bold pl-10">Medium</Label>
                                <Input className="h-8" type="number" placeholder="₱00.00"/>
                                <Label className="font-bold pl-10">Breeder</Label>
                                <Input className="mr-10 h-8" type="number" placeholder="₱00.00"/>
                            </div>
                            </Card>


                            <Label className="text-lg">Stocks</Label>
                            <Card className="mb-3 shadow-sm">
                            <div className="flex flex-grid cols-3 gap-4 tracking-widest mt-3 p-5 items-center">
                                <Label className="font-bold pl-10">Small</Label>
                                <Input className="h-8" type="number" placeholder="0"/>
                                <Label className="font-bold pl-10">Medium</Label>
                                <Input className="h-8" type="number" placeholder="0"/>
                                <Label className="font-bold pl-10">Breeder</Label>
                                <Input className="mr-10 h-8" type="number" placeholder="0"/>
                            </div>
                            </Card>
                            <Label htmlFor="picture" className="text-lg">Picture</Label>
                            <Input id="picture" type="file" />
                            
                            <div className="flex flex-row-reverse mt-9">
                            <Dialog>
                      <DialogTrigger>
                           <p className=" rounded-sm w-14 h-10 text-white text-sm pl-1 pr-1  pt-2 font-semibold tracking-wide bg-cyan-950 dark:text-white dark:hover:text-cyan-950 dark:hover:bg-white"> Done</p>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Product Edit</DialogTitle>
                        </DialogHeader>

                      <div className="flex flex-col items-center mt-4">
                        <CircleAlert className=" text-cyan-950 w-20 h-20 mb-2"/>
                        <p className="mt-2">Confirm Changes?</p>
                        </div>
                        <Separator/>
                        
                      <Button className="w-14 h-10 justify-self-end font-semibold tracking-wide bg-cyan-950 dark:text-white dark:hover:text-cyan-950">Yes</Button>

                      </DialogContent>
                    </Dialog>
                            </div>
                        </form>
                    </CardContent>
                    
                        
                </Card> 

                </div>
        </div>
    )
}