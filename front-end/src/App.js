import { useState, useEffect } from 'react'
import Banner from './components/Banner'
import logo from './assets/logo.png'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ShoppingList from './components/ShoppingList'
import './style/Layout.css'
import axios from 'axios'

function App() {
  const savedCart = localStorage.getItem('cart')

	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
	console.log(" runnning ahihi 2");
  }, [cart])
	
  useEffect(() => {
	  axios.get('http://localhost:3001/users')
		  .then(function (response) {
			  // Handle successful response
			  console.log('Response:', response.data);
		  })
		  .catch(function (error) {
			  // Handle error
			  console.error('Error:', error);

			  console.log(" runnning ahihi 1");
		  })
  
  }, [])


  console.log(" mounted");
  
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
