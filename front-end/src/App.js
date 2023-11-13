import { useState } from 'react'
import Banner from './components/Banner'
import logo from './assets/logo.png'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ShoppingList from './components/ShoppingList'
import './style/Layout.css'

function App() {
	const [cart, updateCart] = useState([])
	return (
		<div>
			<Banner>
				<img src={logo} alt='Jungle House' className='jh-logo' />
				<h1 className='jh-title'>Jungle House</h1>
			</Banner>
			<div className='jh-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
