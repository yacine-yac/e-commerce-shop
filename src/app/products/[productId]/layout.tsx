import { Suspense } from "react";

export default function({children}:{children:React.ReactNode}){
        return <>
             {/* <Suspense fallback={<h1>djkdjsfskljfslkjfd</h1>}>  </Suspense> */}
                  {children}
          
          
        </>
}