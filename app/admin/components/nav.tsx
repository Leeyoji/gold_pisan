'use client'; 

import Link from 'next/link';
import { usePathname } from "next/navigation";  
import { Separator } from "@/components/ui/separator";

export default function DashboardNavigation () {
  const inactiveLink = 'flex gap-2 hover:bg-gray-500 hover:text-white p-4 rounded-l-lg';
  const activeLink = 'flex gap-2 p-4 font-bold text-xl bg-white text-slate-800 rounded-l-xl dark:bg-zinc-950 dark:text-white';
  const pathname = usePathname();
    return (
<aside className="text-white p-4 pb-0 pr-0 mt-4 font-poppins">

<span className="text-3xl font-bold block mb-5 mr-8 ml-5">LOGO Admin</span>
<Separator/> 

<nav className="text-lg flex-col font-semibold ml-5 mt-5">
 
   <Link href={'./dashboard'} className={pathname.includes('/dashboard') ? activeLink : inactiveLink} >
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house">
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
      <span className='pl-1'> Dashboard </span>
   </Link>

   <Link href={'./products'} className={pathname.includes('/products') ? activeLink : inactiveLink}> 
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fish-symbol">
            <path d="M2 16s9-15 20-4C11 23 2 8 2 8" />
          </svg>
          <span className='pl-1'> Products </span>
    </Link>
 
   <Link href={'./orders'} className={pathname.includes('/orders') ? activeLink : inactiveLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-logs">
            <path d="M13 12h8" />
            <path d="M13 18h8" />
            <path d="M13 6h8" />
            <path d="M3 12h1" />
            <path d="M3 18h1" />
            <path d="M3 6h1" />
            <path d="M8 12h1" />
            <path d="M8 18h1" />
            <path d="M8 6h1" />
          </svg>
          <span className='pl-1'> Transactions </span>
        </Link>
   
   <Link href={'./banners'} className={pathname.includes('/banners') ? activeLink : inactiveLink}>
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
    <span className='pl-1'> Banners </span>
    </Link> 
 
   </nav>
  </aside>
    );
}