import React, { useContext, useState } from 'react'
import { store } from '../App'
import '../App.css'
const Cart = () => {
const [cartItems,setCartItems]=useContext(store)
const [displaycart,setDisplaycart]=useState(false)
const incrementItem=(value)=>{
    
const copyCart=[...cartItems];
const isitemincart=copyCart.find((item)=>item.name===value.name)
if(isitemincart){
    isitemincart.count+=1;
    localStorage.setItem('items',JSON.stringify(copyCart))
setCartItems(JSON.parse(localStorage.getItem('items')))
    // setCartItems(copyCart)
}
else{
    // setCartItems([...cartItems,{...value,count:1}])
    localStorage.setItem('items',JSON.stringify([...cartItems,{...value,count:1}]))
    setCartItems(JSON.parse(localStorage.getItem('items')))
}
}
const decrementItem=(value)=>{
    const copyCart=[...cartItems];
    const isInCart=copyCart.find((item)=>item.name===value.name)
if(isInCart.count!==1){
 if(isInCart){
    isInCart.count-=1;
    // setCartItems(copyCart)
    localStorage.setItem('items',JSON.stringify(copyCart))
setCartItems(JSON.parse(localStorage.getItem('items')))
 }
}
else{
    // setCartItems(cartItems.filter((i)=>value.name!==i.name))
    localStorage.setItem('items',JSON.stringify(cartItems.filter((i)=>value.name!==i.name)))
setCartItems(JSON.parse(localStorage.getItem('items')))
}


}


  return (
    <div className='p-2'>
      
        {!cartItems.length?<i onClick={()=>setDisplaycart(true)} className="fa-solid fa-cart-shopping" style={{fontSize:"35px",color:"green"}}>  <span className='text-danger pb-5 mb-5'>0</span></i>:<i  onClick={()=>setDisplaycart(!displaycart)} className="fa-solid fa-cart-shopping  fa-bounce" style={{fontSize:"35px",color:"green"}}>  <span className='text-danger'>{cartItems.reduce((acc,b)=>acc+b.count,0)}</span></i>}
    <div className={displaycart?'display-none':''}>
    {cartItems.map((value,index)=><div key={index} className='bg-secondary cartCard  card p-4 m-2'>
<h3 className='text-white'>{value.name}</h3>
<div className='d-flex flex-row'>
<button className='btn btn-info'  onClick={()=>incrementItem(value)}>+</button><span className='text-warning p-1'>{value.count}</span><button onClick={()=>decrementItem(value)} className='btn btn-info'>-</button>
</div>
<h6 className='text-left pt-4 text-white'>Sub Total : <span className='text-danger'>{value.count*value.price}</span> ₹</h6>
    </div>)}
    <footer>
        {cartItems.length?<h2 className='text-primary'>Total : <span className='text-danger'>{cartItems.reduce((acc,val)=>acc+(val.count*val.price),0)}</span>₹ <i className="fa-solid fa-hand-holding-dollar fa-beat" style={{color:'pink'}}></i></h2>:null}
    </footer>
    </div>
    </div>
  )
}

export default Cart
