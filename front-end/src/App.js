import React, { useState } from "react";
import './App.css';
import Banner from './components/Banner';
import Cart from './components/Cart';
import logo from './assets/logo.png'
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import './style/Layout.css'


function App() {

  const [cart, updateCart] = useState({})
 
  return (<div>

    <Banner    > 
    <img src={logo} alt='Jungle House' />
    <h1 className='jh-title'>Jungle House</h1>
    </Banner>
    <div className='jh-layout-inner'>
				<Cart />
      <ShoppingList updateCart={updateCart} />
			</div>
    <Footer />
  </div> )
}

export default App;
