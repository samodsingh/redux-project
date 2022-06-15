export const addToCart = (data) =>{
    console.log("action called", data);
    return {
        type :'Add-To-CART',
         data 
    }
}