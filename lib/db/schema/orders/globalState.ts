import { orderTypes } from "../../configurations/types";
const mongoose=require("mongoose");

const globalState=new mongoose.Schema({
    data:{type:{order:Number,confirmed:Number,delivred:Number,returned:Number} }
    
});

globalState.methods={
    updating(state?:orderTypes){
        const year=new Date().getFullYear();
        const global=  {[year]:{order:0,confirmed:0,delivred:0,returned:0}};
        switch (state) {
            case "confirmed":
                        global[year].confirmed++;
                break;
            case "Delivered":
                        global[year].confirmed--;
                        global[year].delivred++;
                break;
            case "returned": 
                        global[year].confirmed--;
                        global[year].returned++;
            break;
            case "cancel" || 'Delivering':
                 /** don't anything */
                break;
            default:
                        global[year].order++        
            break;
        }
        this.global=global;
        this.save();
        console.log(this.global,'hiiiiiiiii',global);
        return "yes we can";
    }
}
export default globalState;