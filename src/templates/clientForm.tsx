"use client";
import { useRouter } from "next/navigation"
import "./style/clientForm.css";
export default function ClientForm(){
    const router=useRouter()
    const back=()=>{router.back()}
    return <>
        <div className="lay-1 lay lay-form">
            <button onClick={back} className="center">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#4c5358"></path></g></svg>
            </button>
            <h1>update information</h1>

            <form>
                <label form="">
                    phone number*
                    <input  type="text" placeholder="phone" value={"0697783096"} />
                    {/* <span>error phone number</span>  */}
                </label>
                <label form="">
                    email*
                    <input  type="text" placeholder="email" value={"yacine@gmail.com"} />
                    {/* <span>error email</span> */}
                </label>
                <label form="">
                    Address*
                    <input  type="text" placeholder="Address" value={"43 rue belahcen lakhdar"} /> 
                </label> 
                <label>
                            province*
                            <select>
                                <option value="1">adrar</option>
                            </select>
                </label>
                <label>
                           city*
                            <select>
                                <option value="1">tessala</option>
                            </select>
                </label>
            </form>
            <button className="center">confirm</button>
        </div>
    </>
}