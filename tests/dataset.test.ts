import DataSet from "../lib/db"
import { Iclient } from "../lib/models/clients";
import { Iproduct } from "../lib/models/products";
 
   
describe("data base operations",()=>{
   let dataSet:DataSet;

   beforeAll(async () => {
     dataSet = new DataSet('products'); // Provide the actual collection name
     await dataSet.connecting();

   });
 
   afterAll(async () => {
     // Close the Mongoose connection after all tests
     await dataSet.db.connection.close();
   });

      test("connect",async()=>{  
            expect(dataSet.state).toEqual(true);
      });
      test('find',async()=>{
            dataSet.collection='clients';
          const insert=await dataSet.find();
          const result=[{"__v": 0, "_id": "6537f291f11b5408f0d53f6b", "contact": {"_id": "6537f291f11b5408f0d53f6c", "email": "rrffdfsd", "phone": "555555", "phone2": "68965"}, "firstName": "yacine", "id": 5, "lastName": "yacx", "order": [2]}];
              expect(insert).toContain([{"__v": 0, "_id": "6537f291f11b5408f0d53f6b", "contact": {"_id": "6537f291f11b5408f0d53f6c", "email": "rrffdfsd", "phone": "555555", "phone2": "68965"}, "firstName": "yacine", "id": 5, "lastName": "yacx", "order": [2]}]);
      },20000 );

      test("client inserte", ()=>{
            dataSet.collection='clients';
            const data={};
            const state=dataSet.insert(data);
            expect(state).toEqual(false);
      })
        
        
});
describe("collections testing",()=>{
  let dataSet:DataSet;

   beforeAll(async () => {
     dataSet = new DataSet('domains'); 
      await dataSet.connecting();

   });
 
   afterAll(async () => {
     // Close the Mongoose connection after all tests
    //  await dataSet.db.connection.close();
   });

    const product={
            codeBar:"456",
            name:"ecouteur",
                description:"use this product ....", 
                catalog:{main:"mak.jpg",videos:[],pictures:[]},
                 quantity:{value:10},
            price:{current:120},
            category:[5],
            domain:[5,6,9]
    };
    it("products insert",async()=>{   
       
      const rr= await dataSet.insert(product,"products"); 
       expect(rr).toBe(true);
   });
         
   it("domain add",()=>{
    dataSet.collection="domains";
         const data={id:165,name:"telecom",product:[5,99]};
         const result= dataSet.insert(data);
         expect(result).toBe(true);
   });
   it.only("stock add ",async()=>{
         dataSet.collection="products";
        const product=await dataSet.find({codeBar:'456'});
       
        product[0].quantity= {value:106,oldest:product[0].quantity}
      // const newStock= new dataSet.db.models.products.Stock({});
      console.log(product,">>>>>>>>>>>>>>>>X",)
        expect(product.length).toBe(1);
   })
})
