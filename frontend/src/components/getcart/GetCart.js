import axios from "axios";
import React from "react";


function GetCart({setProducts}) {
  

/* const handleChange = (e) => {
  const {name, value} = e.target
  setCart({
    ...cart, [name]: value, 
  })
} */

  const addToCart = async (products) =>
{
  const newProducts = products.map((product)=>({
    ...product, 
    
  }))
    try {
      const res = await axios.post('http://localhost:8000/api/products', newProducts)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
   
    // eliminar else y el código de dentro
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={()=> addToCart(setProducts)}>Add cart</button>
    </div>
  )
}

export default GetCart;
