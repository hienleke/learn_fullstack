import {  useState } from 'react'
import '../style/Cart.css'

function Cart({cart, updateCart}) {
	const  monsteraPrice = 8
	const [isOpen, setIsOpen] = useState(true)
	
	function clearCart()
	{
		updateCart(0);
		setIsOpen(true);
	}

	

	return isOpen ? (
		<div className='jh-cart'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			<button
				className='jh-cart-toggle-button'
				onClick={clearCart}
			>
				Init Cart
			</button>
			<h2>Cart</h2>
			<div>Monstera : {monsteraPrice}€</div>
			<button onClick={() => updateCart(cart + 1)}>Add</button>
			<h3>Total : {monsteraPrice * cart}€</h3>
		</div>
	) : (
		<div className='jh-cart-closed'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open Cart
			</button>
		</div>
	)
}

export default Cart