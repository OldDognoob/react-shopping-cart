import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import ProductContext from './contexts/ProductContext'
import CartContext from './contexts/CartContext'

// Hooks/Stretch
import { useLocalStorage } from "./hooks/useLocalStorage";


function App() {
	const [products] = useState(data);
	// const [cart, setCart] = useState([]);
	//stretch
	const [cart,setCart] = useLocalStorage("");


	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	// 1st Attempting  stretch 
	const removeItem = id =>{
		setCart(cart.filter(item=> item.id !== id))
	}

	return (
		<ProductContext.Provider value={{products, addItem, removeItem}}>
			<CartContext.Provider value={{cart}}>
			<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route 
			exact 
			path="/"
			component={Products}
			/>
		
			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
			</CartContext.Provider>
		</ProductContext.Provider>
		
	);
}

export default App;
