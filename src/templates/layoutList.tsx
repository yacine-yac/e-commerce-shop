
import Link from "next/link";
import "./style/layoutlist.css";
import { useState } from "react";
export function LayoutList({handler}:{handler:()=>void}){
    return <> 
        <div id="true"  onClick={(e)=>{ (e.target as HTMLButtonElement).id=="true" &&  handler()}} className="lay-1 lay">
            <div className="ls center-h">
               <div className="ls-t">
                    <span >
                        <Link className="center-v" href="">
                           <img src="/next.svg" />
                           <label>Yacine Malki</label> 
                           <label>@saller</label>
                        </Link>
                    </span>
               </div>
               <div className="ls-b">
                        <span>
                                <Link className="center" href={""}>
                                    <label className="center"><svg width="64px" height="64px" viewBox="0 0 1024 1024" fill="#fff" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fff" strokeWidth="45.576"><g id="SVGRepo_bgCarrier" strokeWidth="10"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z" fill=""></path><path d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z" fill=""></path><path d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z" fill=""></path></g></svg></label>
                                    orders
                                </Link>
                        </span>
                        <span>
                                <Link className="center" href={""}>
                                    <label className="center"><svg fill="#fff" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.22 1.22 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.27 1.27 0 0 0 .47.09 1.29 1.29 0 0 0 .7-.22 1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03zm-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.29 2.29 0 0 0 7 9V5.7a2.26 2.26 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5z"></path></g></svg></label>
                                    clients
                                </Link>
                        </span>
                        <span>
                                <Link className="center" href={""}>
                                    <label className="center"><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clip-rule="evenodd" d="M12 1.25C11.3953 1.25 10.8384 1.40029 10.2288 1.65242C9.64008 1.89588 8.95633 2.25471 8.1049 2.70153L6.03739 3.78651C4.99242 4.33487 4.15616 4.77371 3.51047 5.20491C2.84154 5.65164 2.32632 6.12201 1.95112 6.75918C1.57718 7.39421 1.40896 8.08184 1.32829 8.90072C1.24999 9.69558 1.24999 10.6731 1.25 11.9026V12.0974C1.24999 13.3268 1.24999 14.3044 1.32829 15.0993C1.40896 15.9182 1.57718 16.6058 1.95112 17.2408C2.32632 17.878 2.84154 18.3484 3.51047 18.7951C4.15613 19.2263 4.99233 19.6651 6.03723 20.2134L8.10486 21.2985C8.95628 21.7453 9.64008 22.1041 10.2288 22.3476C10.8384 22.5997 11.3953 22.75 12 22.75C12.6047 22.75 13.1616 22.5997 13.7712 22.3476C14.3599 22.1041 15.0437 21.7453 15.8951 21.2985L17.9626 20.2135C19.0076 19.6651 19.8438 19.2263 20.4895 18.7951C21.1585 18.3484 21.6737 17.878 22.0489 17.2408C22.4228 16.6058 22.591 15.9182 22.6717 15.0993C22.75 14.3044 22.75 13.3269 22.75 12.0975V11.9025C22.75 10.6731 22.75 9.69557 22.6717 8.90072C22.591 8.08184 22.4228 7.39421 22.0489 6.75918C21.6737 6.12201 21.1585 5.65164 20.4895 5.20491C19.8438 4.77371 19.0076 4.33487 17.9626 3.7865L15.8951 2.70154C15.0437 2.25472 14.3599 1.89589 13.7712 1.65242C13.1616 1.40029 12.6047 1.25 12 1.25ZM8.7708 4.04608C9.66052 3.57917 10.284 3.2528 10.802 3.03856C11.3062 2.83004 11.6605 2.75 12 2.75C12.3395 2.75 12.6938 2.83004 13.198 3.03856C13.716 3.2528 14.3395 3.57917 15.2292 4.04608L17.2292 5.09563C18.3189 5.66748 19.0845 6.07032 19.6565 6.45232C19.9387 6.64078 20.1604 6.81578 20.3395 6.99174L12 11.1615L3.66054 6.99174C3.83956 6.81578 4.06132 6.64078 4.34352 6.45232C4.91553 6.07032 5.68111 5.66747 6.7708 5.09563L8.7708 4.04608ZM2.93768 8.30736C2.88718 8.52125 2.84901 8.76412 2.82106 9.04778C2.75084 9.7606 2.75 10.6644 2.75 11.9415V12.0585C2.75 13.3356 2.75084 14.2394 2.82106 14.9522C2.88974 15.6494 3.02022 16.1002 3.24367 16.4797C3.46587 16.857 3.78727 17.1762 4.34352 17.5477C4.91553 17.9297 5.68111 18.3325 6.7708 18.9044L8.7708 19.9539C9.66052 20.4208 10.284 20.7472 10.802 20.9614C10.9656 21.0291 11.1134 21.0832 11.25 21.1255V12.4635L2.93768 8.30736ZM12.75 21.1255C12.8866 21.0832 13.0344 21.0291 13.198 20.9614C13.716 20.7472 14.3395 20.4208 15.2292 19.9539L17.2292 18.9044C18.3189 18.3325 19.0845 17.9297 19.6565 17.5477C20.2127 17.1762 20.5341 16.857 20.7563 16.4797C20.9798 16.1002 21.1103 15.6494 21.1789 14.9522C21.2492 14.2394 21.25 13.3356 21.25 12.0585V11.9415C21.25 10.6644 21.2492 9.7606 21.1789 9.04778C21.151 8.76412 21.1128 8.52125 21.0623 8.30736L12.75 12.4635V21.1255Z" fill="#fff"></path> </g></svg></label>
                                    products
                                </Link>
                        </span>
                        <span>
                                <Link className="center" href={""}>
                                    <label className="center"><svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon fill="none" stroke="#fff" strokeWidth="9" stroke-miterlimit="25" points="25,1 63,39 39,63 1,25 1,1 "></polygon> <circle fill="none" stroke="#fff" strokeWidth="5" stroke-miterlimit="15" cx="17" cy="17" r="6"></circle> </g> </g></svg></label>
                                    categories
                                </Link>
                        </span>
                        <span>
                                <Link className="center" href={""}>
                                    <label className="center"><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1c274c"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M7.84308 3.80211C9.8718 2.6007 10.8862 2 12 2C13.1138 2 14.1282 2.6007 16.1569 3.80211L16.8431 4.20846C18.8718 5.40987 19.8862 6.01057 20.4431 7C21 7.98943 21 9.19084 21 11.5937V12.4063C21 14.8092 21 16.0106 20.4431 17C19.8862 17.9894 18.8718 18.5901 16.8431 19.7915L16.1569 20.1979C14.1282 21.3993 13.1138 22 12 22C10.8862 22 9.8718 21.3993 7.84308 20.1979L7.15692 19.7915C5.1282 18.5901 4.11384 17.9894 3.55692 17C3 16.0106 3 14.8092 3 12.4063V11.5937C3 9.19084 3 7.98943 3.55692 7C4.11384 6.01057 5.1282 5.40987 7.15692 4.20846L7.84308 3.80211Z" stroke="#fff" strokeWidth="3"></path> <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.5"></circle> </g></svg></label>
                                    settings
                                </Link>
                        </span>
                        <span className="p-bottom">
                                <Link className="center" href={""}>
                                    <label className="center"><svg width="64px" height="64px" viewBox="0 0 24 24" id="magicoon-Filled" xmlns="http://www.w3.org/2000/svg"  fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier"  fill="#fff" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" fill="#fff" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs></defs> <title>log-out</title> <g id="log-out-Filled"> <path id="log-out-Filled-2" data-name="log-out-Filled" fill="#fff" d="M13,21a1,1,0,0,1-1,1H8a5.006,5.006,0,0,1-5-5V7A5.006,5.006,0,0,1,8,2h4a1,1,0,0,1,0,2H8A3,3,0,0,0,5,7V17a3,3,0,0,0,3,3h4A1,1,0,0,1,13,21Zm7.707-9.707-4-4a1,1,0,1,0-1.414,1.414L17.586,11H10a1,1,0,0,0,0,2h7.586l-2.293,2.293a1,1,0,1,0,1.414,1.414l4-4A1,1,0,0,0,20.707,11.293Z"></path> </g> </g></svg></label>
                                    Log out
                                </Link>
                        </span>
               </div>
            </div>
        </div>  
    </>
}