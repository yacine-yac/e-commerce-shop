import { ProductShow } from '@/templates/productShow'
import Link from 'next/link'
import './page.css'

export default function Home() {
  return (
    
      <div className="pg pg-1">
        <h2>Hi,Dear</h2>
        <h1>Enjoy shopin on Stop & Shop</h1>
        <section className='slider'></section> 
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
