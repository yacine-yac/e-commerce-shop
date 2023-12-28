"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import './globals.css'
import HeaderSection from '@/templates/hearderSection';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import FooterNavbar from '@/templates/footerNavbar';
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Stop & Shop',
//   description: 'Stop & Shop created by yacine malki @dev',
// }
const queryClient=new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentPath=usePathname();
  const router=useRouter();
  useEffect(()=>{
        let oldScroll:number=0;
        const header2=document.getElementById('header-2'),
              header1=document.getElementById('header-1'),
              header=document.getElementsByTagName('header'); 
        (currentPath.split('/')[1]!="products"  && currentPath.split('/')[1]!="cart") && window.addEventListener("scroll",function(){
            let currentScorll= document.documentElement.scrollTop;
            if(oldScroll>currentScorll){
                /** down */
               header[0].classList.add("header-shadow");
               header1?.classList.remove("down")
               header1?.classList.add("up");
               header2?.classList.remove("up")
               header2?.classList.add("down");
            }else{
              /** up */
              header[0].classList.remove("header-shadow");
              header1?.classList.remove('up')
              header1?.classList.add("down");
              header2?.classList.remove('down')
              header2?.classList.add("up");
            }
              oldScroll =currentScorll ;
        })

  })
  const backNavigation=()=>{
    router.back();
  }
  const linkActive=(path:string):string | undefined=>{
      return currentPath==path ? 'btn-active' : undefined;
  };
  return (
 
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
       
           
           <HeaderSection eventHandler={backNavigation} state={currentPath.split('/')[1]} />
           <QueryClientProvider client={queryClient}> 
               {children}
           </QueryClientProvider>
       {(currentPath.split('/')[1]!="cart" && currentPath.split('/')[1]!="products") && 
                <FooterNavbar linkActive={linkActive} />
        }  
      </body>
    </html>

  )
}
