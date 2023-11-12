import { Models } from "mongoose";
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
 
   
// describe("data base operations",()=>{
//    let dataSet:{state:boolean};

//    beforeAll(async () => {
//      dataSet = DataSet(); // Provide the actual collection name
//     //  await dataSet.connecting();

//    });
 
//    afterAll(async () => {
//      // Close the Mongoose connection after all tests
//      await dataSet.db.connection.close();
//    });

//       test("connect",async()=>{  
//             expect(dataSet.state).toEqual(true);
//       });
//       // test('find',async()=>{
//       //       dataSet.collection='clients';
//       //     const insert=await dataSet.find();
//       //     const result=[{"__v": 0, "_id": "6537f291f11b5408f0d53f6b", "contact": {"_id": "6537f291f11b5408f0d53f6c", "email": "rrffdfsd", "phone": "555555", "phone2": "68965"}, "firstName": "yacine", "id": 5, "lastName": "yacx", "order": [2]}];
//       //         expect(insert).toContain([{"__v": 0, "_id": "6537f291f11b5408f0d53f6b", "contact": {"_id": "6537f291f11b5408f0d53f6c", "email": "rrffdfsd", "phone": "555555", "phone2": "68965"}, "firstName": "yacine", "id": 5, "lastName": "yacx", "order": [2]}]);
//       // },20000 );

//       // test("client inserte", ()=>{
//       //       dataSet.collection='clients';
//       //       const data={};
//       //       const state=dataSet.insert(data);
//       //       expect(state).toEqual(false);
//       // })
        
        
// });
// describe("collections testing",()=>{
//     let dataSet:{};
//     const product={
//                 codeBar:"456",
//                 name:"ecouteur",
//                     description:"use this product ....", 
//                     catalog:{main:"mak.jpg",videos:[],pictures:[]},
//                     quantity:{value:10,oldest:null},
//                 price:{current:120},
//                 category:[5],
//                 domain:[5,6,9]
//     };
//    beforeAll(async () => {
//      dataSet = DataSet(); 
//       // await dataSet.connecting();

//    });
 
//    afterAll(async () => {
//      // Close the Mongoose connection after all tests
//      await dataSet.db.connection.close();
//    });

    

//    it.only("products insert",async()=>{   
//       const rr= await dataSet.insert(product,"products"); 
//       console.log("ddddd",rr);
//       expect(rr).toBe(true);
//    });
         
//    it("domain add",async()=>{
//     dataSet.collection="domains";
//          const data={id:165,name:"telecom",product:[5,99]};
//          const result=await dataSet.insert(data);
//          expect(result).toBe(true);
//    });
//    it("stock add ",async()=>{
//         dataSet.collection="products";
//         const product=await dataSet.find({codeBar:'456'});
//         if(!product)  console.log("echou"); 
//         console.log("suuccess");
//         const newStock:Istock={
//             value:4+ product.quantity.value,
//             oldest:product.quantity
//         };
//         product.quantity=newStock;
//         product.save();
//         expect(product.name).toBe("ecouteur");
//    });
//    it('select stock',async()=>{
//          dataSet.collection="products";
//         const product=await dataSet.find({codeBar:'456'});
//         console.log(product.quantity,"mmmmmmmmmm");
//         expect(product.quantity.value).toBe(124);
//    });
//    it.only("insert price",async()=>{
//           dataSet.collection="products";
//           const product=await dataSet.find({codeBar:"456"});
//           const newPrice:Iprice={
//             current:80,
//             oldest:product.price
//           } 
//           product.price=newPrice;
//           product.save()
//           expect(product.price.current).toBe(80)

//    });
//    it.only('find price',async()=>{
//        dataSet.collection="products";
//        const product=await dataSet.find({codeBar:"456"});
//        console.log(product.price);
//        expect(product.price.current).toBe(80);
//    })
// })

describe.only("orders operations",()=>{
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
       
          const orderObject= { 
                orderNumber: await GlobalState.generate(),
                client:5,
                products:[{quantity:2,product:456}],
                total:200,
                deliveryPrice:15,
                state:{
                  current:"order"  
                }
          }; 
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

  test.only("select order and change state",async()=>{
          const {orders}=dataSet.models;
          const order=orders;
          const orderInsert=await order.findOne({orderNumber:"5/2023"});
          await orderInsert.setState("confirmed"," fast mail confirmed ");  
          expect(orderInsert.state.current).toBe("confirmed");

  })
})
