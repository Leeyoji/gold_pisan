import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartNoAxesCombined, DollarSign, FishIcon, ShoppingBasket, ArrowRightLeft, Check, FileWarningIcon, CircleAlert } from "lucide-react";
import { Chart } from "../components/chartdata";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@radix-ui/react-dropdown-menu";

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
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <CardTitle>
                Total Revenue
              </CardTitle>
              <DollarSign className="text-green-500"/>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">PHP 1800.00</p>
              <p className="text-xs text-muted-foregorund">Based on sales this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row content-center items-center gap-2 pb-2">
              <CardTitle>
                Total Sales
              </CardTitle>
              <ChartNoAxesCombined className="text-amber-400" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1800.00</p>
              <p className="text-xs text-muted-foregorund">Based on sales this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row content-center items-center gap-2 pb-2">
              <CardTitle>
                Total Stock
              </CardTitle>
              <FishIcon className="text-emerald-300" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1800.00</p>
              <p className="text-xs text-muted-foregorund">Based on sales this month</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader className="flex flex-row content-center items-center gap-2 pb-2">
              <CardTitle>
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

       
        <div className="mt-7">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Product Stocks</CardTitle>
          </CardHeader>
          <CardContent>
        <Table>
  <TableHeader className="bg-cyan-950 dark:bg-white">
    <TableRow>
    <TableHead className="text-xl font-bold text-white dark:text-black" >Product</TableHead>
      <TableHead className="text-xl font-bold text-white dark:text-black" >In-Stock</TableHead>
      <TableHead className="text-xl font-bold text-white dark:text-black" >Out-of-Stock</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="text-xl tracking-wider font-poppins">
    {/* Iterate through both In-stock and Out-of-stock products */}
    {products.map((product) => {
      const inStockSizes = Object.entries(product.stocks).filter(
        ([size, stock]) => stock > 0 // Sizes with stock > 0
      );
      const outOfStockSizes = Object.entries(product.stocks).filter(
        ([size, stock]) => stock === 0 // Sizes with stock = 0
      );

      return (
        <TableRow key={product.name}>
          <TableCell>
            {product.name}
          </TableCell>
          {/* In-Stock Column */}
          <TableCell className="border-b">
            {inStockSizes.length > 0 ? (
              inStockSizes.map(([size, stock]) => (
                <div key={`${product.name}-${size}`} className="gap-1">
                  <p className="mt-1">{size}: <span className="text-green-600 font-semibold"> {stock} </span>in stock </p>
                </div>
              ))
            ) : (
              <div className="flex gap-2">
                <p>No in-stock sizes</p><CircleAlert className="text-red-600 mt-1"/>
              </div>
            )}
          </TableCell>

          {/* Out-of-Stock Column */}
          <TableCell className="border-b">
            {outOfStockSizes.length > 0 ? (
              outOfStockSizes.map(([size]) => (
                <div key={`${product.name}-${size}`}>
                  <p className="text-red-600 font-semibold mt-1"> {size} </p>
                </div>
              ))
            ) : (
              <div className="flex gap-2"> 
                <p>No out-of-stock sizes </p> <Check className="text-green-600 mt-1"/>
              </div>
            )}
          </TableCell>
        </TableRow>
      );
    })}
  </TableBody>
</Table>
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

