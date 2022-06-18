import { Add_To_CART } from "./constans";
export const cartData = (data = [], action)=>{
    
    // if(action === Add_To_CART){
    //     console.log("samod singh",action)
    //     return action.data
    // }else{
    //     return "no action matched"
    // }
    switch(action.type){
        case Add_To_CART:
            console.log("Add to cart condition", action)
            return 1+1;

            default:
                return "no action "
    }

}