import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Register from "./components/register /Register";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import WishList from "./components/wishlist /WishList";

function App() {
  const [userOne, setLoginUser] = useState(false);

  const [user, setUser] = useState({
    email: "", 
    password: "",
  });

 
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              userOne && userOne._id ? (
                <Homepage user={user} setUser={setUser} />
              ) : (
                <Login setLoginUser={setLoginUser} user={user} setUser={setUser} />
              )
            }
          />
          <Route path="/Home" element={<Homepage user={user} setUser={setUser} />} />

          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile user={user} setUser={setUser}/>} />
          <Route
            path="/Login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
