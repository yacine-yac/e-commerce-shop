import DataSet from "../lib/db"; 
import { Iclient } from "../lib/models/clients";
describe("data base operations",()=>{
     
        test('find',async()=>{
             
           const dataSet=new DataSet('clients');
            const insert=await dataSet.find();
            const result=[{"__v": 0, "_id": "6537f291f11b5408f0d53f6b", "contact": {"_id": "6537f291f11b5408f0d53f6c", "email": "rrffdfsd", "phone": "555555", "phone2": "68965"}, "firstName": "yacine", "id": 5, "lastName": "yacx", "order": [2]}];
            expect(insert).toContainEqual(result);
        },20000 );

        test.only("inserted",async()=>{
          const dataSet=new DataSet('clients');
             const data={};
             const insert=await dataSet.insert(data);
             expect(insert).toEqual(true);
        })

})
