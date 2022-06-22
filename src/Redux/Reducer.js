import { ADD_TO_CART} from "./constans";
import { REMOVE_TO_CART } from "./constans";
import { EMPTY_TO_CART } from "./constans";
export const cartData = (data = [], action)=>{
    
    // if(action === ADD_TO_CART){
    //     console.log("samod singh",action)
    //     return action.data
    // }else{
    //     return "no action matched"
    // }
    switch(action.type){
        
        case ADD_TO_CART:
            console.warn("Add to cart condition", action )
            return [action.data , ...data] 

        case REMOVE_TO_CART:
            console.warn("Remove from cart condition", action )
            data.length = data.length ? data.length - 1: [];
            return [...data] 

        case EMPTY_TO_CART:
            console.warn("Empty from cart condition", action )
            return [] 
            default:
                return data;
    }

}