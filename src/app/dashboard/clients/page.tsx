import Link from "next/link"
import "./page.css"

export default function (){
    return <> 
        <div className="dash-cl">
                <div className="dash-cl-1 center">
                  <form>
                        <label form="search">
                             <input id="search" type="text" placeholder="name or phone number" />
                             <button><svg viewBox="0 0 24 24"   xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Search_Magnifying_Glass"> <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#4c5358" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg></button>
                        </label>
                        <button>
                               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14ZM19 14V20M12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16ZM12 16V10M5 20V11M12 4V7M19 4V7M7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4C6.10457 4 7 4.89543 7 6Z" stroke="#4c5358" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                        </button>
                  </form> 
                </div>
                <div className="dash-cl-2">
                    <h1>clients</h1>
                    <div className="list">
                        {[1,2,3,5,6,7,9,11].map(x=><div key={x} className="cl">
                              <span>
                                    <Link href="">
                                        <label>Y</label>
                                        <h2>yacine malki</h2>
                                        <h3>0798778042</h3>
                                    </Link>
                              </span>  
                        </div>)}
                    </div>
                </div>
        </div>
    </>
}