import { Button } from "@/components/ui/button";
import DashboardLayout from "../dashboard/layout";
import { CirclePlus, DeleteIcon, Edit2Icon, EditIcon, FishIcon, Trash2Icon, TriangleAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const products = [
  {
    pic: "https://1.bp.blogspot.com/-CaM1HszqlOM/X05gKw_46DI/AAAAAAAAIE8/mwH6inmOcfQrKuPIohhz0pPnVbYA-jvvwCLcBGAsYHQ/s2048/Depositphotos_3453577_xl-2015.jpg",
    name: "Koi Fish",
    desc: "Lorem epsum dwikwbdwedlnildejhvvjvj",
    prices: {
      Small: 5,
      Medium: 30,
      Breeder: 60
    },
    stocks: {
      Small: 5,
      Medium: 30,
      Breeder: 60
    }
  },

  {
    pic: "https://1.bp.blogspot.com/-CaM1HszqlOM/X05gKw_46DI/AAAAAAAAIE8/mwH6inmOcfQrKuPIohhz0pPnVbYA-jvvwCLcBGAsYHQ/s2048/Depositphotos_3453577_xl-2015.jpg",
    name: "Koi Fish",
    desc: "Lorem epsum dwikwbdwedlnilde",
    prices: {
      Small: 5,
      Medium: 30,
      Breeder: 60
    },
    stocks: {
      Small: 5,
      Medium: 30,
      Breeder: 60
    }
  }
];

export default function Products() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-end pb-8">
        <Link href={'./products/AddProduct'}>
          <Button className="flex gap-2 bg-cyan-950 dark:text-white dark:hover:text-cyan-950">
            <CirclePlus className="w-3.5 h-3.5" />
            <span>Add Products</span>
          </Button>
        </Link>
      </div>

      <div>
      <Card className="shadow-md w-11/12 justify-self-center">

<CardContent>
 <Table className="text-center mt-4">
  <TableHeader>
  <TableRow className="bg-cyan-800 text-lg hover:bg-cyan-800">
      <TableHead className="text-center text-white" colSpan={2}>Product</TableHead>
      <TableHead className="text-center text-white">Description</TableHead>
      <TableHead className="text-center text-white" colSpan={3}>Prices</TableHead>
      <TableHead className="text-center text-white" colSpan={3}>Stocks</TableHead>
      <TableHead className="text-center text-white" >Actions</TableHead>
      </TableRow>
  
      <TableRow className="text-xs">
        <TableHead colSpan={3}></TableHead>
        <TableHead className="text-center">SMALL</TableHead>
        <TableHead className="text-center">MEDIUM</TableHead>
        <TableHead className="text-center">BREEDER</TableHead>
        <TableHead className="text-center">SMALL</TableHead>
        <TableHead className="text-center">MEDIUM</TableHead>
        <TableHead className="text-center">BREEDER</TableHead>
        <TableHead></TableHead>
      </TableRow>
      </TableHeader>

      <TableBody>

      </TableBody>
      {products.map((product) =>(
        <TableRow key={product.name}>
           <TableCell>
            <img src={product.pic} alt={product.name} className="w-[4rem] h-[4rem] object-cover rounded-sm" />
          </TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell className="w-4">{product.desc}</TableCell>
          <TableCell>₱{product.prices.Small}</TableCell>
          <TableCell>₱{product.prices.Medium}</TableCell>
          <TableCell>₱{product.prices.Breeder}</TableCell>

          <TableCell>{product.stocks.Small}</TableCell>
          <TableCell>{product.stocks.Medium}</TableCell>
          <TableCell>{product.stocks.Breeder}</TableCell>
          {/* Action Buttons */}
          <TableCell>
            <div className="flex gap-2 justify-center">
              <Link href={'./products/editproduct'}><EditIcon className="w-5 h-5"/></Link>

            <Dialog>
              <DialogTrigger>
                <Trash2Icon className="w-5 h-5"/>
                <Separator/>
              </DialogTrigger>

              <DialogContent>
              <DialogHeader>
                <DialogTitle> Confirm Product Deletion</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col items-center mt-4">
                <TriangleAlert className="text-red-600 w-20 h-20 mb-2"/>
                <p className="mt-2">Are you sure you want to delete this product?</p>
                </div>
                <Separator/>
                
              <Button className="w-14 h-10 justify-self-end font-semibold tracking-wide bg-cyan-950 dark:text-white dark:hover:text-cyan-950">Yes</Button>

              </DialogContent>
            </Dialog>
           
            </div>
          </TableCell>
        </TableRow>
      ))}

 </Table>
</CardContent>
</Card>
      </div>
     
    </DashboardLayout>
  );
}
