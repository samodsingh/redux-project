import { useSelector } from "react-redux";
  
const Header = () => {
    const result = useSelector((state)=> state.cartData);
    console.warn("redux data header----"+ result)   ;
  return (
    <div className='header'>
        <div className="cart-div">            
            <span>{result.length}</span>
            <img src="https://thumbs.dreamstime.com/b/add-to-cart-icon-adding-shopping-cart-well-organized-fully-editable-add-to-cart-icon-adding-shopping-cart-any-use-like-167547952.jpg" alt="Add To Cart" />
        </div>
    </div>
  )
}

export default Header;