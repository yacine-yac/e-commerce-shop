import Link from 'next/link'
import './page.css'

export default function Home() {
  return (
    
      <div className="pg-1">
        <h2>Hi,Dear</h2>
        <h1>Enjoy shopin on Stop & Shop</h1>
        <section className='domain'>
            <span><Link  href="">All</Link></span>
            <span><Link  href="">Shows & clothes</Link></span>
            <span><Link  href="">Pc & phones</Link></span>
            <span><Link  href="">Beauty</Link></span>
        </section>
      </div>
   
  )
}
