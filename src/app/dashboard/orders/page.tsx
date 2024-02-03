"use client";

import { Order } from "@/templates/order";
import "./page.css";
import "../../../templates/style/order.css";
import "../../../templates/style/ordersCrt.css"; 
export default function (){
    return <>  
        <div className="dash-o center">
                <div className="dash-ot center-v">
                    <label className="center">
                        <input type="text" placeholder="search" />
                        <button><svg viewBox="0 0 24 24"   xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Search_Magnifying_Glass"> <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#4c5358" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg></button>
                    </label>
                    <div className="scrolling">
                        <div className="crt">
                            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.50626 15.2647C7.61657 15.6639 8.02965 15.8982 8.4289 15.7879C8.82816 15.6776 9.06241 15.2645 8.9521 14.8652L7.50626 15.2647ZM6.07692 7.27442L6.79984 7.0747V7.0747L6.07692 7.27442ZM4.7037 5.91995L4.50319 6.64265L4.7037 5.91995ZM3.20051 4.72457C2.80138 4.61383 2.38804 4.84762 2.2773 5.24675C2.16656 5.64589 2.40035 6.05923 2.79949 6.16997L3.20051 4.72457ZM20.1886 15.7254C20.5895 15.6213 20.8301 15.2118 20.7259 14.8109C20.6217 14.41 20.2123 14.1695 19.8114 14.2737L20.1886 15.7254ZM10.1978 17.5588C10.5074 18.6795 9.82778 19.8618 8.62389 20.1747L9.00118 21.6265C10.9782 21.1127 12.1863 19.1239 11.6436 17.1594L10.1978 17.5588ZM8.62389 20.1747C7.41216 20.4896 6.19622 19.7863 5.88401 18.6562L4.43817 19.0556C4.97829 21.0107 7.03196 22.1383 9.00118 21.6265L8.62389 20.1747ZM5.88401 18.6562C5.57441 17.5355 6.254 16.3532 7.4579 16.0403L7.08061 14.5885C5.10356 15.1023 3.89544 17.0911 4.43817 19.0556L5.88401 18.6562ZM7.4579 16.0403C8.66962 15.7254 9.88556 16.4287 10.1978 17.5588L11.6436 17.1594C11.1035 15.2043 9.04982 14.0768 7.08061 14.5885L7.4579 16.0403ZM8.9521 14.8652L6.79984 7.0747L5.354 7.47414L7.50626 15.2647L8.9521 14.8652ZM4.90421 5.19725L3.20051 4.72457L2.79949 6.16997L4.50319 6.64265L4.90421 5.19725ZM6.79984 7.0747C6.54671 6.15847 5.8211 5.45164 4.90421 5.19725L4.50319 6.64265C4.92878 6.76073 5.24573 7.08223 5.354 7.47414L6.79984 7.0747ZM11.1093 18.085L20.1886 15.7254L19.8114 14.2737L10.732 16.6332L11.1093 18.085Z" fill="#fff"></path> <path d="M19.1647 6.2358C18.6797 4.48023 18.4372 3.60244 17.7242 3.20319C17.0113 2.80394 16.1062 3.03915 14.2962 3.50955L12.3763 4.00849C10.5662 4.47889 9.66119 4.71409 9.24954 5.40562C8.8379 6.09714 9.0804 6.97492 9.56541 8.73049L10.0798 10.5926C10.5648 12.3481 10.8073 13.2259 11.5203 13.6252C12.2333 14.0244 13.1384 13.7892 14.9484 13.3188L16.8683 12.8199C18.6784 12.3495 19.5834 12.1143 19.995 11.4227C20.2212 11.0429 20.2499 10.6069 20.1495 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                            <h1>Orders</h1>
                            <label className="center all-line">22 orders</label>
                        </div> 
                        <div className="crt">
                            <svg width="64px" height="64px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 29L13.7763 33.1118C12.6994 33.6503 11.4049 33.4927 10.4886 32.7117L4 27.1808L7.56226 25.8157C8.19869 25.5718 8.8992 25.5519 9.54846 25.7592L12.8273 26.8063C13.5787 27.0463 14.3944 26.9807 15.0977 26.6237L37.36 15.3248C37.7807 15.1113 38.2459 15 38.7177 15H44L42.4472 18.1056C42.1569 18.6862 41.6862 19.1569 41.1056 19.4472L32 24" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M22.0007 29L18.0003 31L23.0003 41L32.0003 24" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17 25L12 16L28 20" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            <h1>Confirmed</h1>
                            <label className="center all-line">22 orders</label>
                        </div> 
                        <div className="crt">
                           <svg width="64px" height="64px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 29L13.7763 33.1118C12.6994 33.6503 11.4049 33.4927 10.4886 32.7117L4 27.1808L7.56226 25.8157C8.19869 25.5718 8.8992 25.5519 9.54846 25.7592L12.8273 26.8063C13.5787 27.0463 14.3944 26.9807 15.0977 26.6237L37.36 15.3248C37.7807 15.1113 38.2459 15 38.7177 15H44L42.4472 18.1056C42.1569 18.6862 41.6862 19.1569 41.1056 19.4472L32 24" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M22.0007 29L18.0003 31L23.0003 41L32.0003 24" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17 25L12 16L28 20" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            <h1>Livring</h1>
                            <label className="center all-line">22 orders</label>
                        </div> 
                    </div>
                    <img src="/illustration/wave.svg" />

                </div>
                <div className="dash-ob">
                    {[1,1,1,1,1,2,3].map(x=><Order key={x} />)}
                    {/* <div className="dash-obe center">
                         <img src="/illustration/orders.svg" />
                         <h1>There is no order now!</h1>
                    </div>   */}
                </div>
        </div>
    </>
}