import DataSet from "../lib/db"  
import { Iprice } from "../lib/models/prices"; 
import { Istock } from "../lib/models/stock";
import { Ids } from "../lib/db/configurations/types";
import GlobalState from "../lib/db/schema/orders/globalState";
import  domain from "./data/domain.json";
import group from "./data/group.json"
import category from "./data/category.json";
import product from "./data/product.json"
import orderObject from "./data/order.json"
import client from "./data/client.json";
import { Products } from "../lib/db/schema";


describe("insert category, domain, group",()=>{
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
        expect(mm.name).toBe(cat.name);
  });  
});
describe.only("product operations",()=>{
   let dataSet:Ids; 
   beforeAll(async () => {
     dataSet =await DataSet(); 
      // await dataSet.connecting();

   });
 
   afterAll(async () => {
     // Close the Mongoose connection after all tests
      await dataSet.close();
      await GlobalState.close();

   });

    

   it.only.each(product)("products insert",async(pro)=>{  
      const {products}= dataSet.models
      // Products
      const r=new Products(pro);
      const rr=await r.save();
      expect(rr._id).toBeDefined(); 
   });

   it("stock add ",async()=>{

        const m=await dataSet.models['products'].findOne({codeBar:product[0].codeBar});
        if(!m)  console.log("echou"); 
        console.log("suuccess");
        const newStock:Istock={
            value:4+ m.quantity.value,
            oldest:m.quantity
        };
        m.quantity=newStock;
        m.save();
        expect(m.name).toBe("ecouteur");
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

describe("client operations",()=>{
  let dataSet:Ids; 
  beforeAll(async () => {
    dataSet =await DataSet(); 
     // await dataSet.connecting();

  });

  afterAll(async () => {
    // Close the Mongoose connection after all tests
     await dataSet.close();
     await GlobalState.close();

  });

  it.each(client)("insert clients",async(customer)=>{
         const {clients}=dataSet.models;
         const cl=new clients(customer);
         await cl.save();
         expect(cl._id).toBeDefined();
  });
});

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
  
  test.each(orderObject)('insert order',async(ord)=>{
       
          ord.orderNumber=await GlobalState.generate();
          const {orders}=dataSet.models;
          const order=new orders(ord);   
          const orderInsert= await  order.save();
          expect(orderInsert._id).toBeDefined();
          
  }); 

  test("select order and change state",async()=>{
          const {orders}=dataSet.models;
          const order=orders;
          const orderInsert=await order.findOne({orderNumber:"5/2023"});
          await orderInsert.setState("confirmed"," fast mail confirmed ");  
          expect(orderInsert.state.current).toBe("confirmed");

  })
})
