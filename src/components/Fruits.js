import React from 'react'
import '../App.css'
const fruits=[{name:"Apple",price:40},{name:"Mango",price:20},{name:"Guva",price:10,count:0},{name:"banana",price:5}]
function Fruits({addToCartItems}){
  return(<>
  {fruits.map((value,i)=>{ return <div key={i} className='card m-4 p-5 bg-dark'>
    <h3 className='text-info'>{value.name}</h3>
    <p className='text-secondary'>{`${value.price} ₹`}</p>
    <button className='btn btn-success' onClick={()=>{addToCartItems(value)}}>Add to cart</button>
  </div>})}
    </>)
}

export default Fruits
