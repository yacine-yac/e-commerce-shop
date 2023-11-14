import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stop & Shop',
  description: 'Stop & Shop created by yacine malki @dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header></header>
        {children}
        <footer className='p-bottom'>
            <nav>
                <span className='btn-active'>
                     <Link className='center' href="/">
                         {/* <img src="./icons/home.png" alt='home'></img> */}
                         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c0bfbc"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z" fill="#c0bfbc"></path> </g></svg>
                     </Link>
                </span>
                <span><Link className='center' href="/search"><img src="./icons/search.png" alt='search'></img></Link></span>
                <span><Link className='center' href="/"><img src="./icons/cart.png" alt='cart'></img></Link></span>
                <span><Link className='center' href="/"><img src="./icons/contact.png" alt='contact'></img></Link></span>  
            </nav>
        
        </footer>
      </body>
    </html>
  )
}
