import React from 'react'
import Products from '../products/Products';
import Footer from '../footer/Footer';

function Homepage() {
  return (
    <div className="text-center">
      <h1>Welcome to Homepage</h1>
      <div>
       <Products />
      </div>
      <div>
        < Footer />
      </div>
    </div>
  )
}

export default Homepage
