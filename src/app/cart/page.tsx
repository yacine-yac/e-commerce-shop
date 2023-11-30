import "./page.css";
export default function Cart(){
    return <>
           <div className="pg pg-3">
                <div>
                     <section className="center">
                        <span className='center'>
                            <button className="btn-active-ground" type='button'>+</button>
                            <h2 className='center'>6</h2>
                            <button className='btn-des'>-</button>
                        </span>
                        <img src="/shoes.png" />
                     </section>
                     <section>
                        <h1 className="center">Nike shoes 2023 super good</h1>
                     </section>
                </div>
                <div className="s-1 p-bottom">
                    <section>
                        <h3>Total price</h3>
                        <h1>3000 <sub>Dzd</sub></h1>
                    </section>
                    <section>
                        <h3>Items</h3>
                        <h1>12</h1>
                    </section>
                    <button type="button">Confirmed order</button>
                </div>
           </div>
    </>
}