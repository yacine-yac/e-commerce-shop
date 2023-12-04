import "./page.css";
import "../page.css"
export default function Confirm(){

    return <>
         <div className="pg pg-6 center-h">
            <div className="pg-form">
                 <h2>fill the application</h2>
                 <form>
                    <label form="name">
                       <input id="name" type="text" name="name" placeholder="Name" />
                    </label>  
                    <span>error message</span>
                    <label>
                            <select id="operator" name="operator">
                                <option value="Mobilis">Mobilis</option>
                                <option value="Djezzy">Djezzy</option>
                                <option value="Ooredoo">Ooredoo</option>
                            </select>
                            <input type="text" name="phone" placeholder="Phone"  />
                    </label>
                    <span>error message</span>
                    <label className="center-h" form="address">
                            <select name="province">
                                <option value="province">Wilaya</option>
                            </select>
                            <select name="city">
                                <option value="city">Commune</option>
                            </select>
                            <input type="text" name="address" id="address" placeholder="Adress" />
                    </label> 
                    <span>error message</span>
                    <label>
                            <input type="text" name="phone2" placeholder="Phone (2)"  />
                   </label>
                   <span>error message</span>
                   <label><input type="email" name="email" placeholder="E-mail" /></label>
                   <span>error message</span>

                 </form>
            </div>
            <div className="s-1 p-bottom s-1-two">
                <span>Error message</span>
                <button>finish</button>
            </div>
         </div>
    </>
}