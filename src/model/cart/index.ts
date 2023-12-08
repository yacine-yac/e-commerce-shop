class CartShoping{
    static main:CartShoping;
    private value:object[];

    private constructor(value:object[]=[]){
        this.value=value;
    }
    delete(index:number):boolean{
        const deleting= this.value.splice(index,1);
        return deleting ? true : false;
    }
    add(product:{}):boolean{
       return this.value.push(product) ? true : false;
    }
    static init(){
        CartShoping.main ==undefined &&
                                         (CartShoping.main=new CartShoping());
    }
}