import React from "react";
//import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-8 grid gap-x-16 gap-y-4 md:grid-cols-3">
 
{/*       <div className="list-group">
      
        <Link to="" className="btn btn-primary"> Cart
        </Link>
      
      
        <Link to="/profile" className="btn btn-primary"> My Account
        </Link>
      
      
        <Link to="" className="btn btn-primary"> Wishlist 
        </Link>
      

      </div> */}


      <div >
        <h2 className="font-bold text-2xl mb-4 tracking-wider text-center">Contact</h2>
        <p className="text-justify text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          recusandae nobis sunt aliquid tempore vitae sapiente ea voluptatibus
          ab repellat asperiores eius cum laboriosam facilis eos, maiores
          deleniti nemo consequuntur assumenda sed consectetur culpa voluptatum
          quisquam quibusdam? Saepe, soluta quibusdam.
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            <span>Mérida, Yucatán</span>
          </li>
          <li className="list-group-item">
            <span>+800155554</span>
          </li>
          <li className="list-group-item">
            <span>example@gmail.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
