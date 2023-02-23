import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    users: [],
    username: "",
    name: "",
    email: "",
    password: "",
  });

/*   useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/users", {
        username: user.username,
        name: user.name,
        email: user.email,
        password: user.password,
      });
      setUser({ users: res.data });
    } catch (err) {
      console.error(err);
    }
  }; */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  //Register function

  const register = async () => {
    const { username, name, email, password } = user;
    if (name && email && password && username) {
      try {
        const res = await axios.post("http://localhost:8000/api/users", user);
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="container">
      <form className="align-items-center">
        <div className="text-white">Create a new account</div>

        <Link to="/login">
          <div className="text-white">
            <span>have an account?</span>
          </div>
        </Link>

        <div>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Usename"
          ></input>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          ></input>
        </div>
        <div>
          <button type="submit" onClick={register}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
