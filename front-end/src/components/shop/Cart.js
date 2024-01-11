import {  useState } from "react";
import "../style/Cart.css";


function Cart({ cart, updateCart }) {
     const [isOpen, setIsOpen] = useState(true);
     let  total = cart.length >=0 ?  cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0) : 0;
     function clearCart() {
          updateCart([]);
          setIsOpen(true);
	}
	
	
          console.log(" cart mounted")
     return isOpen ? (
          <div className="jh-cart">
               <button className="jh-cart-toggle-button" onClick={() => setIsOpen(false)}>
                    Close
               </button>

               <h2>Cart</h2>
               <ul>
				 {
					 Array.isArray(cart) && cart.length > 0 ?
					 cart.map(({ name, price, amount }, index) => (
						 <li key={`${name}-${index}`} >
                         <div>
                              {name} {price}€ x {amount}
                         </div>
						 </li>
					 )) : 0
				}
               </ul>
               <h3>Total : {total}€</h3>
               <button className="jh-cart-toggle-button" onClick={clearCart}>
                    EmptyCart
               </button>
          </div>
     ) : (
          <div className="jh-cart-closed">
               <button className="jh-cart-toggle-button" onClick={() => setIsOpen(true)}>
                    Open Cart
               </button>
          </div>
     );
}

export default Cart;
