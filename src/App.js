import './App.css';
import {addToCart} from './Redux/action';
import {useDispatch} from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const product = {
    name : "iphone",
    type : "mobile",
    price : 10000,
    color : "red"
  }
  return (
    <div className="App">
      <button onClick={()=>{addToCart(product)}}>Add to Cart</button>
    </div>
  );
}

export default App;
