import React, { useEffect, useState } from "react";
import GetCart from "../getcart/GetCart";
import GetWishList from '../wishlist /GetWishList';
import {Link} from "react-router-dom"

function Products() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  let hasPrev = index > 0;
  let hasNext = index < products.length - 1;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, [index]);

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function addCart(){
    setCart([...cart, product])}

  let product = products[index] ? products[index] : null;
  return (
    <div>
      <h1 className="text-center">Productos</h1>
      {!products.length ? (
        <p> Cargando...</p>
      ) : (
        <section>
          <h2 className="text-center">
            <i>{` ${product.title}`}</i>
          </h2>

          {showMore && <p className="text-center">{product.description}</p>}
          <img
            className="mx-auto d-block"
            width="304"
            height="236"
            src={product.image}
            alt={product.description}
          />
          <h2 className="text-center">
            {" "}
            <i>{`$ ${product.price}`}</i>{" "}
          </h2>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={handleMoreClick}>
              {showMore ? "Hide" : "Show"} description
            </button>
            <button
              className="btn btn-primary"
              onClick={handlePrevClick}
              disabled={!hasPrev}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={handleNextClick}
              disabled={!hasNext}
            >
              Next Product
            </button>
            <ul>
              <li>
                <button className="btn btn-primary" onClick={addCart}>
                  {" "}
                  Agregar al carrito
                </button>
              </li>
              <li>
            <Link className="nav-link" to="/cart">
            <span>
              Ver carrito
            </span>
            </Link>
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
export default Products;
