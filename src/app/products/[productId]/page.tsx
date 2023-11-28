import "./page.css";
export default function Product(){
    
        return <>
            <div className="pg-5">
              <section>
                    <div></div>
                    <div>
                        <img src="/shoes.png" />
                    </div>
                    <div className="center">
                       <span className="active-span"></span>
                       <span></span>
                       <span></span>
                       <span></span>
                    </div>
              </section>
              <section>
                <h1>Shoes adidas 2023</h1>
                <p>availibale in several colors and models,spanding ok confortable gliss now demande sppuly several colors and models purchase and get reduxtion</p>
                <div>
                    <h3>Categories</h3>
                    <div className="scrolling">
                            <button className="btn-active-ground-w">39</button>
                            <button>40</button>
                            <button>41</button>
                            <button>42</button>
                            <button>43</button>
                            <button>44</button>
                    </div>
                    <h2>3000 <sub>Dzd</sub></h2>
                </div>
                <button type="button">Add to cart</button>
              </section>
            </div>
        </>
}