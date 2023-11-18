"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import './globals.css'
import HeaderSection from '@/templates/hearderSection';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Stop & Shop',
//   description: 'Stop & Shop created by yacine malki @dev',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentPath=usePathname();
  useEffect(()=>{
        let oldScroll:number=0;
        const header2=document.getElementById('header-2'),
              header1=document.getElementById('header-1'),
              header=document.getElementsByTagName('header'); 
        window.addEventListener("scroll",function(){
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

  const linkActive=(path:string):string | undefined=>{
   console.log( currentPath)
      return currentPath==path ? 'btn-active' : undefined;
  };
  return (
    <html lang="en">
      <body className={inter.className}>
   
        <HeaderSection />
     
        {children}
        <footer className='p-bottom'>
            <nav>
                <span className={linkActive("/")}>
                      <Link className='center' href="/">
                         <svg height="64px" width="64px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" xmlSpace="preserve" fill="#4c5358" stroke="#4c5358"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon className="st0" points="434.162,293.382 434.162,493.862 308.321,493.862 308.321,368.583 203.682,368.583 203.682,493.862 77.841,493.862 77.841,293.382 256.002,153.862 "></polygon> <polygon className="st0" points="0,242.682 256,38.93 512,242.682 482.21,285.764 256,105.722 29.79,285.764 "></polygon> <polygon className="st0" points="439.853,18.138 439.853,148.538 376.573,98.138 376.573,18.138 "></polygon> </g> </g></svg>
                      </Link>
                </span>
                <span className={linkActive("/search")}>
                      <Link className='center' href="/search">
                         <svg width="64px" height="64px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#4c5358" stroke="#4c5358"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>search_left [#4c5358]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-219.000000, -280.000000)" fill="#4c5358"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M184,138.586 L182.5153,140 L176.57545,134.343 L178.06015,132.929 L184,138.586 Z M170.35,132 C167.45515,132 165.1,129.757 165.1,127 C165.1,124.243 167.45515,122 170.35,122 C173.24485,122 175.6,124.243 175.6,127 C175.6,129.757 173.24485,132 170.35,132 L170.35,132 Z M170.35,120 C166.2907,120 163,123.134 163,127 C163,130.866 166.2907,134 170.35,134 C174.4093,134 177.7,130.866 177.7,127 C177.7,123.134 174.4093,120 170.35,120 L170.35,120 Z" id="search_left-[#4c5358]"> </path> </g> </g> </g> </g></svg>
                      </Link>
                </span>
                <span className={linkActive("/cart")}>
                      <Link className='center' href="/cart">
                           <svg fill="#4c5358" width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-21.223l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"></path> </g></svg>
                      </Link>
                </span>
                <span className={linkActive("/contact")}>
                      <Link className='center' href="/contact">
                      <svg fill="#4c5358" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 361.014 361.014" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Layer_5_47_"> <path d="M331.035,126.94H318.01c-3.563,0-3.682-2.333-3.805-3.494C307.375,59.094,252.77,8.791,186.637,8.791h-12.26 c-65.644,0-119.929,49.56-127.409,113.229c-0.191,1.631-0.291,4.92-3.291,4.92H29.978C20.987,126.94,0,136.401,0,184.18v25.075 c0,35.436,20.987,43.609,29.978,43.609h43.584c8.991,0,16.347-7.356,16.347-16.347v-93.23c0-8.991-7.356-16.347-16.347-16.347 c0,0-2.052-0.18-1.529-3.835c7.192-50.319,50.129-89.313,102.344-89.313h12.26c51.86,0,94.912,38.418,102.2,88.288 c0.235,1.608,1.111,4.86-1.385,4.86c-8.991,0-16.347,7.356-16.347,16.347v93.23c0,8.991,7.356,16.347,16.347,16.347h8.184 c2.25,0,1.868,1.798,1.667,2.704c-6.667,30.104-21.637,64.256-55.238,64.256h-24.889c-2.54,0-3.167-1.861-3.65-2.743 c-4.032-7.367-11.851-12.364-20.841-12.364h-22.933c-13.118,0-23.753,10.634-23.753,23.753c0,13.119,10.635,23.752,23.753,23.752 h22.933c9.112,0,17.023-5.132,21.005-12.662c0.348-0.658,0.633-2.026,3.321-2.026h25.054c22.823,0,53.365-11.341,69.259-65.373 c1.694-5.758,3.068-11.496,4.187-17.026c0.154-0.761,0.25-2.27,2.625-2.27h12.9c8.991,0,29.978-8.174,29.978-43.609v-25.075 C361.013,137.082,340.026,126.94,331.035,126.94z"></path> </g> </g> </g></svg>
                       </Link>
                </span>  
            </nav>
        
        </footer>
      </body>
    </html>
  )
}
