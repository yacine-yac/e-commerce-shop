import OrderDetail from "@/templates/orderDetail"
import OrderPage from "@/templates/orderPage"

 
export default async function({params}:{params:{orderNumber:string}}){

    return <>
       
        <OrderPage>
            <OrderDetail />
        </OrderPage>
        {/* <h1 >dddd</h1>  <h1 >{params.orderNumber}</h1> */}

    </>
}