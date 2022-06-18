import { Add_To_CART } from "./constans";
export const addToCart = (data) =>{
    console.log("action called", data);
    return {
        type :'Add_To_CART',
         data 
    }
}