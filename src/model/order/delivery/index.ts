
export class Delivery{
    public province:string;
    public city:string;
    private price:number;
    constructor(province:string,city:string){
        this.province=province;
        this.city=city;
        this.price=0;
        this.setDeliveryPrice();
    }
    private setDeliveryPrice(){
         this.price=550;
    }
    public getDeliveryPrice(){
        return this.price;
   }
}