import RightMenu from "../components/right";
import DashboardLayout from "../dashboard/layout";
import { CirclePlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Orders() {
    return (
        <DashboardLayout>
            <div className="flex items-center justify-end pb-8 font-poppins">
                <Link href={'./products/AddProduct'}>
                    <Button className="flex gap-2 bg-cyan-950 dark:text-white dark:hover:text-cyan-950">
                        <CirclePlus className="w-3.5 h-3.5" />
                        <span>Add Transaction</span>
                    </Button>
                </Link>
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Transaction History</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <Table>
                        <TableHeader className="bg-cyan-800 text-lg">
                          <TableRow>
                            <TableHead className="text-base font-bold text-white">Transaction</TableHead>
                            <TableHead className="text-base font-bold text-white">Product</TableHead>
                            <TableHead className="text-base font-bold text-white">Quantity</TableHead>
                            <TableHead className="text-base font-bold text-white">Amount</TableHead>
                            <TableHead className="text-base font-bold text-white">Date</TableHead>
                          </TableRow>
                        </TableHeader>

                        <TableBody>
                          <TableRow>
                            <TableCell>Sold</TableCell>
                            <TableCell>Koi Fish - Medium</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>200php</TableCell>
                            <TableCell>09/08/2024</TableCell>
                          </TableRow>
                        </TableBody>
                       </Table>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
