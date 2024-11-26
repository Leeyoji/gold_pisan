import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartNoAxesCombined, DollarSign, FishIcon, ShoppingBasket, ArrowRightLeft, Check, FileWarningIcon, CircleAlert, ChartNetwork } from "lucide-react";
import { Chart } from "../components/chartdata";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

const products = [
  {
    pic: "https://1.bp.blogspot.com/-CaM1HszqlOM/X05gKw_46DI/AAAAAAAAIE8/mwH6inmOcfQrKuPIohhz0pPnVbYA-jvvwCLcBGAsYHQ/s2048/Depositphotos_3453577_xl-2015.jpg",
    name: "Clown Fish",
    desc: "Lorem epsum dwikwbdwedlnildejhvvjvj",
    prices: {
      Small: 5,
      Medium: 30,
      Breeder: 60
    },
    stocks: {
      Small: 0,
      Medium: 0,
      Breeder: 0
    }
  },

  {
    pic: "https://1.bp.blogspot.com/-CaM1HszqlOM/X05gKw_46DI/AAAAAAAAIE8/mwH6inmOcfQrKuPIohhz0pPnVbYA-jvvwCLcBGAsYHQ/s2048/Depositphotos_3453577_xl-2015.jpg",
    name: "Koi Fish",
    desc: "Lorem epsum dwikwbdwedlnilde",
    prices: {
      Small: 0,
      Medium: 0,
      Breeder: 0
    },
    stocks: {
      Small: 8,
      Medium: 10,
      Breeder: 3
    }
  },

  {
    pic: "https://1.bp.blogspot.com/-CaM1HszqlOM/X05gKw_46DI/AAAAAAAAIE8/mwH6inmOcfQrKuPIohhz0pPnVbYA-jvvwCLcBGAsYHQ/s2048/Depositphotos_3453577_xl-2015.jpg",
    name: "Carp",
    desc: "Lorem epsum dwikwbdwedlnilde",
    prices: {
      Small: 1,
      Medium: 0,
      Breeder: 0
    },
    stocks: {
      Small: 0,
      Medium: 10,
      Breeder: 3
    }
  }
];

export default function Dashboard() {
  const inStockProducts = products.filter(product => 
    Object.values(product.stocks).some(stock => stock > 0) // Product with any size in stock
  );

  const outOfStockProducts = products.filter(product => 
    Object.values(product.stocks).some(stock => stock === 0) // Product where all sizes are out of stock
  );

  // Debugging: Log the filtered products to the console
  console.log("In-stock products:", inStockProducts);
  console.log("Out-of-stock products:", outOfStockProducts);
  
    return (
      <>
      <Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Overview</TabsTrigger>
    <TabsTrigger value="password">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="account">

  <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 pt-6"> 
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-1 pb-2">
              <CardTitle className="mt-2">
                Total Revenue
              </CardTitle>
              <DollarSign className="text-green-500 mb-1"/>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">PHP 1800.00</p>
              <p className="text-xs text-muted-foregorund">Based on sales this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row content-center items-center gap-2 pb-2">
            <CardTitle className="mt-2">
                Total Sales
              </CardTitle>
              <ChartNoAxesCombined className="text-amber-400 mb-1" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1800.00</p>
              <p className="text-xs text-muted-foregorund">Based on sales this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row content-center items-center gap-2 pb-2">
            <CardTitle className="mt-2">
                Total Stock
              </CardTitle>
              <FishIcon className="text-emerald-300 mb-1" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1800.00</p>
              <p className="text-xs text-muted-foregorund">Based on sales this month</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader className="flex flex-row content-center items-center gap-2 pb-2">
            <CardTitle className="mt-2">
                Total Orders
              </CardTitle>
              <ShoppingBasket className="text-rose-400" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1800.00</p>
              <p className="text-xs text-muted-foregorund">Based on sales this month</p>
            </CardContent>
          </Card>
        </div>

       <div className="grid gap-2 grid-cols-3 ">
        <div className="col-span-2 pt-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Product Stocks</CardTitle>
          </CardHeader>
          <CardContent className="h-[15rem] overflow-auto">
        <Table className="border-separate">
        <TableHeader className="sticky-top-0 bg-white dark:bg-zinc-950 z-10">
    <TableRow>
    <TableHead className="text-lg font-bold text-cyan-800" >Product</TableHead>
      <TableHead className="text-lg font-bold text-cyan-800 " >In-Stock</TableHead>
      <TableHead className="text-lg font-bold text-cyan-800" >Out-of-Stock</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="text-base tracking-wider font-poppins">
      {products.length > 0 ? (
        products.map((product) => {
          const inStockSizes = Object.entries(product.stocks).filter(
            ([size, stock]) => stock > 0 // Sizes with stock > 0
          );
          const outOfStockSizes = Object.entries(product.stocks).filter(
            ([size, stock]) => stock === 0 // Sizes with stock = 0
          );

          return (
            <TableRow key={product.name}>
              <TableCell className="border-b">
                <p className="font-bold">{product.name}</p>
              </TableCell>
              {/* In-Stock Column */}
              <TableCell className="border-b">
                {inStockSizes.length > 0 ? (
                  inStockSizes.map(([size, stock]) => (
                    <div key={`${product.name}-${size}`} className="gap-1">
                      <p className="mt-1">
                        {size}: <span className="text-green-600 font-semibold">{stock}</span> in stock
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="flex gap-2">
                    <p>No in-stock sizes</p>
                    <CircleAlert className="text-red-600" />
                  </div>
                )}
              </TableCell>

              {/* Out-of-Stock Column */}
              <TableCell className="border-b">
                {outOfStockSizes.length > 0 ? (
                  outOfStockSizes.map(([size]) => (
                    <div key={`${product.name}-${size}`}>
                      <p className="text-red-600 font-semibold mt-1">{size}</p>
                    </div>
                  ))
                ) : (
                  <div className="flex gap-2">
                    <p>No out-of-stock sizes</p>
                    <Check className="text-green-600" />
                  </div>
                )}
              </TableCell>
            </TableRow>
          );
        })
      ) : (
        <TableRow>
          <TableCell colSpan={3} className="text-center py-4">
            <p>No products available</p>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
</Table>
</CardContent>
 </Card>
        </div>

      
<Card className="mt-6 shadow-md">
  <CardHeader className="pb-2">
    <CardTitle> <div className="flex flex-row content-center gap-2"> <p className="mt-1">Top Products</p> <ChartNetwork/></div></CardTitle>
    <CardDescription> For the month of December</CardDescription>
  </CardHeader>
  <CardContent>
   <Table className=" border-spacing-2">
    <TableBody>
  <TableRow>
    <TableCell className="text-xl font-semibold">#1</TableCell>
    <TableCell>
      <p className="text-lg font-semibold">Koi-FIsh Medium</p>
      <p className="text-xs text-gray-600">201 sold</p>
    </TableCell>
    <TableCell><img className="w-[3rem] h-[3rem] object-cover rounded-sm" src="https://1.bp.blogspot.com/-CaM1HszqlOM/X05gKw_46DI/AAAAAAAAIE8/mwH6inmOcfQrKuPIohhz0pPnVbYA-jvvwCLcBGAsYHQ/s2048/Depositphotos_3453577_xl-2015.jpg" alt="pic"/></TableCell>
  </TableRow>
  </TableBody>
   </Table>
    <div className="mt-2">
    <Button className="bg-cyan-800 dark:text-white dark:hover:text-cyan-950 w-full h-8"> View Full List</Button>
    </div>
   </CardContent>
    </Card>
        </div>



         </TabsContent>
  <TabsContent value="password">
  <div className="col-span-2 pt-6"> <Chart/></div>
  </TabsContent>
</Tabs>








       

      </>
    );
  }

