"use client"
import Link from "next/link";
import "./page.css";
import {Order} from "@/templates/order";
const style1={transform:"translate(0, 0px)", opacity:1}
const style2={transform:"rotate(180deg)", transition:" 0.3s"}
export default function (){
    return <>
      <header></header>
      <div className="dash-1 center-v">
        <div className="dash-t">
           <img src="/illustration/wave.svg" />
           <div>
            <img src="/illustration/money.svg" />
            <span>Today 13.06 </span>
            <h1>Store State</h1>
            <h3>Balance:</h3>
            <p>0.00 Dza</p>
            <label className="center-v" ><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V12.25M19 5H15M19 5V9M19 5L9 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>See more...</label>
          </div>
        </div>
        <div className="dash-b">
            <div>
                <h1>Orders details</h1> 
                <span className="center">View all</span>
            </div>
            <div className="scrolling">
                  {/* <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V3.5582C7.10482 4.01469 4.01469 7.10482 3.5582 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H3.5582C4.01469 16.8952 7.10482 19.9853 11 20.4418V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V20.4418C16.8952 19.9853 19.9853 16.8952 20.4418 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H20.4418C19.9853 7.10482 16.8952 4.01469 13 3.5582V3ZM11 5.57645V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V5.57645C15.7891 6.00712 17.9929 8.21088 18.4236 11H17C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13H18.4236C17.9929 15.7891 15.7891 17.9929 13 18.4236V17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17V18.4236C8.21088 17.9929 6.00712 15.7891 5.57645 13H7C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11H5.57645C6.00712 8.21088 8.21088 6.00712 11 5.57645Z" fill="#fff"></path> </g></svg>
                  <svg width="64px" height="64px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M10,22v2c0,7.72,6.28,14,14,14s14-6.28,14-14s-6.28-14-14-14h-6.662l3.474-4.298l-3.11-2.515L10.577,12l7.125,8.813 l3.11-2.515L17.338,14H24c5.514,0,10,4.486,10,10s-4.486,10-10,10s-10-4.486-10-10v-2H10z"></path> </g> </g></svg>
                  <svg width="64px" height="64px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 29L13.7763 33.1118C12.6994 33.6503 11.4049 33.4927 10.4886 32.7117L4 27.1808L7.56226 25.8157C8.19869 25.5718 8.8992 25.5519 9.54846 25.7592L12.8273 26.8063C13.5787 27.0463 14.3944 26.9807 15.0977 26.6237L37.36 15.3248C37.7807 15.1113 38.2459 15 38.7177 15H44L42.4472 18.1056C42.1569 18.6862 41.6862 19.1569 41.1056 19.4472L32 24" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M22.0007 29L18.0003 31L23.0003 41L32.0003 24" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17 25L12 16L28 20" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                  <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2"></circle> <path d="M18 18L6 6" stroke="#fff" strokeWidth="2"></path> </g></svg>
                   */}
                <div className="crt">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.50626 15.2647C7.61657 15.6639 8.02965 15.8982 8.4289 15.7879C8.82816 15.6776 9.06241 15.2645 8.9521 14.8652L7.50626 15.2647ZM6.07692 7.27442L6.79984 7.0747V7.0747L6.07692 7.27442ZM4.7037 5.91995L4.50319 6.64265L4.7037 5.91995ZM3.20051 4.72457C2.80138 4.61383 2.38804 4.84762 2.2773 5.24675C2.16656 5.64589 2.40035 6.05923 2.79949 6.16997L3.20051 4.72457ZM20.1886 15.7254C20.5895 15.6213 20.8301 15.2118 20.7259 14.8109C20.6217 14.41 20.2123 14.1695 19.8114 14.2737L20.1886 15.7254ZM10.1978 17.5588C10.5074 18.6795 9.82778 19.8618 8.62389 20.1747L9.00118 21.6265C10.9782 21.1127 12.1863 19.1239 11.6436 17.1594L10.1978 17.5588ZM8.62389 20.1747C7.41216 20.4896 6.19622 19.7863 5.88401 18.6562L4.43817 19.0556C4.97829 21.0107 7.03196 22.1383 9.00118 21.6265L8.62389 20.1747ZM5.88401 18.6562C5.57441 17.5355 6.254 16.3532 7.4579 16.0403L7.08061 14.5885C5.10356 15.1023 3.89544 17.0911 4.43817 19.0556L5.88401 18.6562ZM7.4579 16.0403C8.66962 15.7254 9.88556 16.4287 10.1978 17.5588L11.6436 17.1594C11.1035 15.2043 9.04982 14.0768 7.08061 14.5885L7.4579 16.0403ZM8.9521 14.8652L6.79984 7.0747L5.354 7.47414L7.50626 15.2647L8.9521 14.8652ZM4.90421 5.19725L3.20051 4.72457L2.79949 6.16997L4.50319 6.64265L4.90421 5.19725ZM6.79984 7.0747C6.54671 6.15847 5.8211 5.45164 4.90421 5.19725L4.50319 6.64265C4.92878 6.76073 5.24573 7.08223 5.354 7.47414L6.79984 7.0747ZM11.1093 18.085L20.1886 15.7254L19.8114 14.2737L10.732 16.6332L11.1093 18.085Z" fill="#fff"></path> <path d="M19.1647 6.2358C18.6797 4.48023 18.4372 3.60244 17.7242 3.20319C17.0113 2.80394 16.1062 3.03915 14.2962 3.50955L12.3763 4.00849C10.5662 4.47889 9.66119 4.71409 9.24954 5.40562C8.8379 6.09714 9.0804 6.97492 9.56541 8.73049L10.0798 10.5926C10.5648 12.3481 10.8073 13.2259 11.5203 13.6252C12.2333 14.0244 13.1384 13.7892 14.9484 13.3188L16.8683 12.8199C18.6784 12.3495 19.5834 12.1143 19.995 11.4227C20.2212 11.0429 20.2499 10.6069 20.1495 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                    <h1>Confirmed</h1>
                    <span>22 orders</span>
                    <label className="center-v"> <svg width="64px" height="64px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M951.87 253.86c0-82.18-110.05-144.14-256-144.14s-256 61.96-256 144.14c0 0.73 0.16 1.42 0.18 2.14h-0.18v109.71h73.14v-9.06c45.77 25.81 109.81 41.33 182.86 41.33 67.39 0 126.93-13.33 171.71-35.64 6.94 7.18 11.15 14.32 11.15 20.58 0 28.25-72.93 70.98-182.86 70.98h-73.12v73.14h73.12c67.4 0 126.96-13.33 171.74-35.65 6.95 7.17 11.11 14.31 11.11 20.6 0 28.27-72.93 71-182.86 71l-25.89 0.12c-15.91 0.14-31.32 0.29-46.34-0.11l-1.79 73.11c8.04 0.2 16.18 0.27 24.48 0.27 7.93 0 16-0.05 24.2-0.12l25.34-0.12c67.44 0 127.02-13.35 171.81-35.69 6.97 7.23 11.04 14.41 11.04 20.62 0 28.27-72.93 71-182.86 71h-73.12v73.14h73.12c67.44 0 127.01-13.35 171.81-35.69 6.98 7.22 11.05 14.4 11.05 20.62 0 28.27-72.93 71-182.86 71h-73.12v73.14h73.12c145.95 0 256-61.96 256-144.14 0-0.68-0.09-1.45-0.11-2.14h0.11V256h-0.18c0.03-0.72 0.2-1.42 0.2-2.14z m-438.86 0c0-28.27 72.93-71 182.86-71s182.86 42.73 182.86 71c0 28.25-72.93 70.98-182.86 70.98s-182.86-42.73-182.86-70.98z" fill="#fff"></path><path d="M330.15 365.71c-145.95 0-256 61.96-256 144.14 0 0.73 0.16 1.42 0.18 2.14h-0.18v256c0 82.18 110.05 144.14 256 144.14s256-61.96 256-144.14V512h-0.18c0.02-0.72 0.18-1.42 0.18-2.14 0-82.18-110.05-144.15-256-144.15zM147.29 638.93c0-6.32 4.13-13.45 11.08-20.62 44.79 22.33 104.36 35.67 171.78 35.67 67.39 0 126.93-13.33 171.71-35.64 6.94 7.18 11.15 14.32 11.15 20.58 0 28.25-72.93 70.98-182.86 70.98s-182.86-42.72-182.86-70.97z m182.86-200.07c109.93 0 182.86 42.73 182.86 71 0 28.25-72.93 70.98-182.86 70.98s-182.86-42.73-182.86-70.98c0-28.27 72.93-71 182.86-71z m0 400.14c-109.93 0-182.86-42.73-182.86-71 0-6.29 4.17-13.43 11.11-20.6 44.79 22.32 104.34 35.66 171.75 35.66 67.4 0 126.96-13.33 171.74-35.65 6.95 7.17 11.11 14.31 11.11 20.6 0.01 28.26-72.92 70.99-182.85 70.99z" fill="#fff"></path></g></svg>16000 Dzd</label>
                </div> 
                <div className="crt">
                    <svg width="64px" height="64px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 29L13.7763 33.1118C12.6994 33.6503 11.4049 33.4927 10.4886 32.7117L4 27.1808L7.56226 25.8157C8.19869 25.5718 8.8992 25.5519 9.54846 25.7592L12.8273 26.8063C13.5787 27.0463 14.3944 26.9807 15.0977 26.6237L37.36 15.3248C37.7807 15.1113 38.2459 15 38.7177 15H44L42.4472 18.1056C42.1569 18.6862 41.6862 19.1569 41.1056 19.4472L32 24" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M22.0007 29L18.0003 31L23.0003 41L32.0003 24" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17 25L12 16L28 20" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <h1>Livring</h1>
                    <span>01 orders</span>
                    <label className="center-v"> <svg width="64px" height="64px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M951.87 253.86c0-82.18-110.05-144.14-256-144.14s-256 61.96-256 144.14c0 0.73 0.16 1.42 0.18 2.14h-0.18v109.71h73.14v-9.06c45.77 25.81 109.81 41.33 182.86 41.33 67.39 0 126.93-13.33 171.71-35.64 6.94 7.18 11.15 14.32 11.15 20.58 0 28.25-72.93 70.98-182.86 70.98h-73.12v73.14h73.12c67.4 0 126.96-13.33 171.74-35.65 6.95 7.17 11.11 14.31 11.11 20.6 0 28.27-72.93 71-182.86 71l-25.89 0.12c-15.91 0.14-31.32 0.29-46.34-0.11l-1.79 73.11c8.04 0.2 16.18 0.27 24.48 0.27 7.93 0 16-0.05 24.2-0.12l25.34-0.12c67.44 0 127.02-13.35 171.81-35.69 6.97 7.23 11.04 14.41 11.04 20.62 0 28.27-72.93 71-182.86 71h-73.12v73.14h73.12c67.44 0 127.01-13.35 171.81-35.69 6.98 7.22 11.05 14.4 11.05 20.62 0 28.27-72.93 71-182.86 71h-73.12v73.14h73.12c145.95 0 256-61.96 256-144.14 0-0.68-0.09-1.45-0.11-2.14h0.11V256h-0.18c0.03-0.72 0.2-1.42 0.2-2.14z m-438.86 0c0-28.27 72.93-71 182.86-71s182.86 42.73 182.86 71c0 28.25-72.93 70.98-182.86 70.98s-182.86-42.73-182.86-70.98z" fill="#fff"></path><path d="M330.15 365.71c-145.95 0-256 61.96-256 144.14 0 0.73 0.16 1.42 0.18 2.14h-0.18v256c0 82.18 110.05 144.14 256 144.14s256-61.96 256-144.14V512h-0.18c0.02-0.72 0.18-1.42 0.18-2.14 0-82.18-110.05-144.15-256-144.15zM147.29 638.93c0-6.32 4.13-13.45 11.08-20.62 44.79 22.33 104.36 35.67 171.78 35.67 67.39 0 126.93-13.33 171.71-35.64 6.94 7.18 11.15 14.32 11.15 20.58 0 28.25-72.93 70.98-182.86 70.98s-182.86-42.72-182.86-70.97z m182.86-200.07c109.93 0 182.86 42.73 182.86 71 0 28.25-72.93 70.98-182.86 70.98s-182.86-42.73-182.86-70.98c0-28.27 72.93-71 182.86-71z m0 400.14c-109.93 0-182.86-42.73-182.86-71 0-6.29 4.17-13.43 11.11-20.6 44.79 22.32 104.34 35.66 171.75 35.66 67.4 0 126.96-13.33 171.74-35.65 6.95 7.17 11.11 14.31 11.11 20.6 0.01 28.26-72.92 70.99-182.85 70.99z" fill="#fff"></path></g></svg>16000 Dzd</label>
                </div> 
                <div className="crt">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2"></circle> <path d="M18 18L6 6" stroke="#fff" strokeWidth="2"></path> </g></svg>
                    <h1>Canceled</h1>
                    <span>08 orders</span>
                    <label className="center-v"> <svg width="64px" height="64px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M951.87 253.86c0-82.18-110.05-144.14-256-144.14s-256 61.96-256 144.14c0 0.73 0.16 1.42 0.18 2.14h-0.18v109.71h73.14v-9.06c45.77 25.81 109.81 41.33 182.86 41.33 67.39 0 126.93-13.33 171.71-35.64 6.94 7.18 11.15 14.32 11.15 20.58 0 28.25-72.93 70.98-182.86 70.98h-73.12v73.14h73.12c67.4 0 126.96-13.33 171.74-35.65 6.95 7.17 11.11 14.31 11.11 20.6 0 28.27-72.93 71-182.86 71l-25.89 0.12c-15.91 0.14-31.32 0.29-46.34-0.11l-1.79 73.11c8.04 0.2 16.18 0.27 24.48 0.27 7.93 0 16-0.05 24.2-0.12l25.34-0.12c67.44 0 127.02-13.35 171.81-35.69 6.97 7.23 11.04 14.41 11.04 20.62 0 28.27-72.93 71-182.86 71h-73.12v73.14h73.12c67.44 0 127.01-13.35 171.81-35.69 6.98 7.22 11.05 14.4 11.05 20.62 0 28.27-72.93 71-182.86 71h-73.12v73.14h73.12c145.95 0 256-61.96 256-144.14 0-0.68-0.09-1.45-0.11-2.14h0.11V256h-0.18c0.03-0.72 0.2-1.42 0.2-2.14z m-438.86 0c0-28.27 72.93-71 182.86-71s182.86 42.73 182.86 71c0 28.25-72.93 70.98-182.86 70.98s-182.86-42.73-182.86-70.98z" fill="#fff"></path><path d="M330.15 365.71c-145.95 0-256 61.96-256 144.14 0 0.73 0.16 1.42 0.18 2.14h-0.18v256c0 82.18 110.05 144.14 256 144.14s256-61.96 256-144.14V512h-0.18c0.02-0.72 0.18-1.42 0.18-2.14 0-82.18-110.05-144.15-256-144.15zM147.29 638.93c0-6.32 4.13-13.45 11.08-20.62 44.79 22.33 104.36 35.67 171.78 35.67 67.39 0 126.93-13.33 171.71-35.64 6.94 7.18 11.15 14.32 11.15 20.58 0 28.25-72.93 70.98-182.86 70.98s-182.86-42.72-182.86-70.97z m182.86-200.07c109.93 0 182.86 42.73 182.86 71 0 28.25-72.93 70.98-182.86 70.98s-182.86-42.73-182.86-70.98c0-28.27 72.93-71 182.86-71z m0 400.14c-109.93 0-182.86-42.73-182.86-71 0-6.29 4.17-13.43 11.11-20.6 44.79 22.32 104.34 35.66 171.75 35.66 67.4 0 126.96-13.33 171.74-35.65 6.95 7.17 11.11 14.31 11.11 20.6 0.01 28.26-72.92 70.99-182.85 70.99z" fill="#fff"></path></g></svg>16000 Dzd</label>
                </div> 
            </div>
            <div className="tbl">
                   <h1>Order mouvement</h1>
                   <div className="center">
                     <span className="center active"><Link href={""} >Daily</Link></span>
                     <span className="center"><Link href={""} >Weekly</Link></span>
                     <span className="center"><Link href={""} >Monthly</Link></span>
                     <span className="center"><Link href={""} >Yearly</Link></span>
                   </div>
                   <div>
            {[1,2].map(x=><Order />)}
                   </div>
            </div>       


        </div>
      </div>
    </>
}