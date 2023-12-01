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
                     <section  className="center-v">
                        <h1>Nike shoes 2023 super good</h1>
                        <div className="scrolling">
                            <div className="center btn-active-ground">
                                <img src="/shoes.png" />
                                <h2>1500 <sub>Dzd</sub></h2>
                                <p>2L</p>
                            </div>
                            <div className="center">
                                <img src="/shoes.png" />
                                <h2>1500 <sub>Dzd</sub></h2>
                                <p>2L</p>
                            </div>
                            <div className="center">
                                <img src="/shoes.png" />
                                <h2>1500 <sub>Dzd</sub></h2>
                                <p>2L</p>
                            </div>
                            <div className="center">
                                <img src="/shoes.png" />
                                <h2>1500 <sub>Dzd</sub></h2>
                                <p>2L</p>
                            </div>
                            <div className="center">
                                <img src="/shoes.png" />
                                <h2>1500 <sub>Dzd</sub></h2>
                                <p>2L</p>
                            </div>
                            
                        </div>
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
                    <span>Included delivery price 650 Dzd</span>
                </div>
           </div>
    </>
}