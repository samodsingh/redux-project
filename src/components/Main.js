import {addToCart} from '../Redux/action';
import {removeCart} from "../Redux/action";
import { emptyToCart } from '../Redux/action';
import {useDispatch} from 'react-redux'

function Main() {
    const dispatch = useDispatch()
  const product = {
    name : "iphone",
    type : "mobile",
    price : 10000,
    color : "red"
  }
  return (  
    <div className="main">
         <div>
         <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
     </div>
     <div>
         <button onClick={()=> dispatch(removeCart(product.name))}>Remove from cart</button>
     </div>
     <div>
         <button onClick={()=> dispatch(emptyToCart())}>Empty from cart</button>
     </div>
    </div>
  );
}

export default Main;
