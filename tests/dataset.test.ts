import DataSet from "../lib/db" 
import order from "../lib/db/schema/orders";
import stock from "../lib/db/schema/products/stock";
import { Iclient } from "../lib/models/clients";
import { Iorder } from "../lib/models/orders";
import { Iprice } from "../lib/models/prices";
import { Iproduct } from "../lib/models/products";
import { Istock } from "../lib/models/stock";
import { Ids } from "../lib/db/configurations/types";
import GlobalState from "../lib/db/schema/orders/globalState";
import  domain from "./data/domain.json";
import group from "./data/group.json"
import category from "./data/category.json";
import product from "./data/product.json"
import orderObject from "./data/order.json"


describe.only("insert category, domain, group",()=>{
   let dataSet:Ids;

   beforeAll(async () => {
     dataSet =await DataSet(); // Provide the actual collection name
    //  await dataSet.connecting();

   });
 
   afterAll(async () => {
     // Close the Mongoose connection after all tests
     await dataSet.close();
     await GlobalState.close();
   });

/** ============================================== tests ====================================================== */
  
  test("domain",async()=>{
         const {domains}= dataSet.models;
         const m= await domains.insertMany(domain); 
         expect((await m).length).toBe(3);
  });
  test("group",async()=>{
    const {groups}= dataSet.models;
    const m= await groups.insertMany(group); 
    expect((await m).length).toBe(3);
  });   
  test.each(category)("category",async(cat)=>{
        const {categories}= dataSet.models;
        const m=new categories(cat); 
        const mm=await m.save();
        expect((mm).length).toBe(4);
  });  
  test("select groups",async()=>{
    const {groups}= dataSet.models;
    const j=await  groups.findOneAndUpdate({id:77},{$push:{categories:88}});  
    expect( (j.categories as any)).toEqual([]);
  });
});
describe("collections testing",()=>{
   let dataSet:Ids; 
   beforeAll(async () => {
     dataSet =await DataSet(); 
      // await dataSet.connecting();

   });
 
   afterAll(async () => {
     // Close the Mongoose connection after all tests
      await dataSet.close();
   });

    

   it("products insert",async()=>{  
          const {products}= dataSet.models
          const rr=new products(product); 
          console.log("ddddd",rr);
          expect(rr).toBe(true);
   });
         
   it("domain add",async()=>{
         const data={id:165,name:"telecom",product:[5,99]};
         const {domains}=dataSet.models;
         const result=new domains(data);
         expect(result).toBe(true);
   });
   it("stock add ",async()=>{

        const product=await dataSet.models['products'].findOne({codeBar:'456'});
        if(!product)  console.log("echou"); 
        console.log("suuccess");
        const newStock:Istock={
            value:4+ product.quantity.value,
            oldest:product.quantity
        };
        product.quantity=newStock;
        product.save();
        expect(product.name).toBe("ecouteur");
   });
   it('select stock',async()=>{
        const product=await dataSet.models['products'].findOne({codeBar:'456'});
        console.log(product.quantity,"mmmmmmmmmm");
        expect(product.quantity.value).toBe(124);
   });
   it("insert price",async()=>{
          const product=await dataSet.models['products'].findOne({codeBar:"456"});
          const newPrice:Iprice={
            current:80,
            oldest:product.price
          } 
          product.price=newPrice;
          product.save()
          expect(product.price.current).toBe(80)

   });
   it('find price',async()=>{
       const product=await dataSet.models['products'].findOne({codeBar:"456"});
       console.log(product.price);
       expect(product.price.current).toBe(80);
   })
})

describe("orders operations",()=>{
  let dataSet:Ids;

  beforeAll( async ()=>{ 
   dataSet=await  DataSet(); 
     
  });
  afterAll(async ()=>{
    // Close the Mongoose connection after all tests
    await  dataSet.close();
    await GlobalState.close();
  });

 /** tests section */

  test("db connection",async()=>{
      expect(( dataSet.state)).toBe(true); 
  })
  
  const ord:Iorder[]=[
              { 
                  orderNumber: "eee",
                  client:5,
                  products:[{quantity:2,product:456}],
                  total:200,
                  deliveryPrice:15,
                  state:{
                    current:"order"  
                  }
              },
              { 
                  orderNumber: "eee",
                  client:5,
                  products:[{quantity:2,product:456}],
                  total:200,
                  deliveryPrice:15,
                  state:{
                    current:"order"  
                  }
              },
              { 
                  orderNumber: "eee",
                  client:5,
                  products:[{quantity:2,product:456}],
                  total:200,
                  deliveryPrice:15,
                  state:{
                    current:"order"  
                  }
              }
          ];
   
  test('insert order',async()=>{
       
          // const orderObject= { 
          //       orderNumber: await GlobalState.generate(),
          //       client:5,
          //       products:[{quantity:2,product:456}],
          //       total:200,
          //       deliveryPrice:15,
          //       state:{
          //         current:"order"  
          //       }
          // }; 
          orderObject.orderNumber=await GlobalState.generate();
          const {orders}=dataSet.models;
          const order=new orders(orderObject);   
          const orderInsert= await  order.save();
       
          expect(orderInsert.orderNumber).toBe("4/2023");
          
  });
  test.each(ord)('insert multiple ',async (input)=>{ 
              const on= await GlobalState.generate();
              input.orderNumber=on; 
              const {orders}=dataSet.models;
              const order=new orders(input);   
              const orderInsert= await  order.save(); 
            
              expect(orderInsert.orderNumber).toBe(on);
  })

  test("select order and change state",async()=>{
          const {orders}=dataSet.models;
          const order=orders;
          const orderInsert=await order.findOne({orderNumber:"5/2023"});
          await orderInsert.setState("confirmed"," fast mail confirmed ");  
          expect(orderInsert.state.current).toBe("confirmed");

  })
})
