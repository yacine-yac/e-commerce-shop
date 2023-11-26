import { ProductShow } from '@/templates/productShow'
import Link from 'next/link'
import './page.css'

export default function Home() {
  return (
    
      <div className="pg pg-1">
        <h2>Hi,Dear</h2>
        <h1>Enjoy shopin on Stop & Shop</h1>
        <section className='slider'>
            <img src="/shoes.png"  />
            <div>
              <section>
                  <h1>Nike Shoes</h1>
                  <span>Availibale original & super good </span>
              </section> 
              <span className='center'>
                  <button className="btn-active-ground" type='button'>+</button>
                   <h2 className='center'>6</h2>
                  <button className='btn-des'>-</button>
              </span>
              <span className='center'>
                  <Link href="">
                         <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#fff" strokeWidth="1.5"></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#fff" strokeWidth="1.5"></path> <path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                  </Link>
              </span>
            </div>
        </section> 
        <section className='domain'>
            <span className='btn-background-active'><Link  href="">All</Link></span>
            <span><Link  href="">Shows & clothes</Link></span>
            <span><Link  href="">Pc & phones</Link></span>
            <span><Link  href="">Beauty</Link></span>
            <span><Link  href="">Food</Link></span>
            <span><Link  href="">Energy</Link></span>
        </section>
        <section className="show">
           <h1>Recommended for you</h1>
           <div className="show-grid">
            <ProductShow />
            <ProductShow />
            <ProductShow />
            <ProductShow />
            <ProductShow />
            <ProductShow />
           </div>
        </section>
      </div>
   
  )
}
