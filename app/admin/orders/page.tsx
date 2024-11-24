import RightMenu from "../components/right";
import DashboardLayout from "../dashboard/layout";
import { CirclePlus} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from "@/components/ui/button";


export default function Orders() {
    return (
 <DashboardLayout>
     <div className="flex items-center justify-end pb-8">
        <Link href={'./products/AddProduct'}>
          <Button className="flex gap-2 bg-cyan-950 dark:text-white dark:hover:text-cyan-950">
            <CirclePlus className="w-3.5 h-3.5" />
            <span>Add Transaction</span>
          </Button>
        </Link>
      </div>


 </DashboardLayout>
    );
}