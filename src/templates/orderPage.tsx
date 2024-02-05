"use client"
import Link from "next/link";
import "./style/orderPage.css";
// import "./style/order.css";
import { useState } from "react";
export default function OrderPage({children}:{children:React.ReactNode}){
    const [state,setState]=useState(true);
    return <>
        <div className="dash-o center-v">
            <div className="dash-ob center-v">
                      <h1>Order number</h1>
                      <h3>#462556-2020</h3>
            </div>
            <div className="dash-j">
                    <div>
                                 <span>
                                    <Link href={""}>
                                        <h1 className="center">Y</h1>
                                        <label>Yacine Malki</label>
                                        <label>0697783096</label>
                                    </Link>
                                </span>
                    </div>   
                    <div className="center-v">
                            <section className="center-h">
                               <label className="center-v"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ee145c"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#ee145c"></path> </g></svg>Yaddsd98@gmail.com</label>
                               <label className="center-v"><svg fill="#ee145c" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 264.018 264.018" xmlSpace="preserve" stroke="#ee145c"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M132.009,0c-42.66,0-77.366,34.706-77.366,77.366c0,11.634,2.52,22.815,7.488,33.24c0.1,0.223,0.205,0.442,0.317,0.661 l58.454,113.179c2.146,4.154,6.431,6.764,11.106,6.764c4.676,0,8.961-2.609,11.106-6.764l58.438-113.148 c0.101-0.195,0.195-0.392,0.285-0.591c5.001-10.455,7.536-21.67,7.536-33.341C209.375,34.706,174.669,0,132.009,0z M132.009,117.861c-22.329,0-40.495-18.166-40.495-40.495c0-22.328,18.166-40.494,40.495-40.494s40.495,18.166,40.495,40.494 C172.504,99.695,154.338,117.861,132.009,117.861z"></path> <path d="M161.81,249.018h-59.602c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h59.602c4.143,0,7.5-3.357,7.5-7.5 C169.31,252.375,165.952,249.018,161.81,249.018z"></path> </g> </g></svg>Sfisef-Sidi Bel Abbes</label>
                               <button>Call now</button>
                            </section>
                    </div>
                    
            </div>
            <div className="dash-z">
                <h1>Order details</h1>
                <section>
                    <h2>Total product</h2>
                    <h3>2000 Dzd</h3>
                    <h2>Delivery</h2>
                    <h3>200 Dzd</h3>
                    <h2>Total</h2>
                    <h3>2200 Dzd</h3>
                </section>
            </div>
            <div className="dash-p">
                <h1>Cart details</h1>
                <button className="center">
                        <svg width="64px" height="64px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#4c5358" stroke="#4c5358"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs>
                        
                        </defs> <title></title> <g id="chevron-bottom"> <line className="cls-1" x1="16" x2="7" y1="20.5" y2="11.5"></line> <line className="cls-1" x1="25" x2="16" y1="11.5" y2="20.5"></line> </g> </g></svg>
  
                </button>
                <div></div>
            </div>
        </div>
    </>
}