import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Cart({products}) {

  const [cart, setCart] = useState('')

  useEffect(()=>{
    getAllCarts()
  }, [])

  const getAllCarts = () => {
    axios.get("http://localhost:8000/api/products")
  
.then((response) => {
  const allCart = response.data.cart.AllCart;
  setCart(allCart)
})
.catch(error => console.error("Errror"))
  }

  if(products.length ===0){
    return <p>
      Your cart is currently empty
    </p>
  }
// FUNCIÓN PARA SUMAR LOS VALORES DEL CARRITO 
/*   const total = cart.map(product => product.price * (product?.quantity || 1)).reduce((previousValue, currentValue) => previousValue + currentValue, 0);

console.log({total}) */


  return (
    <div className="container cart
    ">
    {products.map((product)=>(
      <p>product.title</p>

    ))}
      
    </div>
  )
}

export default Cart
