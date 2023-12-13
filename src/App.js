import React, { createContext, useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Fruits from './components/Fruits'

export const store=createContext();
const App = () => {

  const [cartItems,setCartItems]=useState([])

  const addToCartItems=(item)=>{
    const cartItemCopy=[...cartItems]
    const isIncart=cartItemCopy.find((value)=>item.name===value.name)
   if(isIncart){
    isIncart.count+=1
    localStorage.setItem('items',JSON.stringify(cartItemCopy))
setCartItems(JSON.parse(localStorage.getItem('items')))
    // setCartItems(cartItemCopy)
   }    
   else{
    localStorage.setItem('items',JSON.stringify([...cartItems,{...item,count:1}]))
    setCartItems(JSON.parse(localStorage.getItem('items')))
    // setCartItems((prev)=>[...prev,{...item,count:1}])
   }
  }
  return (
    <div className='w-100'><h1 className='text-danger text-center'>Shoping cart</h1>
    <div className='d-flex justify-content-around'>
      <div className='w-25'>
            <Fruits addToCartItems={addToCartItems}/>
      </div>
      <store.Provider value={[cartItems,setCartItems]}>
            <Cart/>
      </store.Provider>
      </div>
    </div>
  )
}

export default App
