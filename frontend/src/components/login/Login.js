import React from "react";
import axios from "axios";
import {Link, useNavigate } from 'react-router-dom';


const Login = ({user, setUser}) => {
  const navigate = useNavigate()
  
  const navigateToHome = ()=>{
    navigate('/Home')
  }




  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/users', user);
      alert('Iniciado sesión satisfactoriamente');
      console.log(res.data)
      localStorage.setItem('authToken', res.data.token)
               navigateToHome()
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div>
      <div className="flex flex-col w-full max-w-md px-4 py-8 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 text-center">
        <div className="self-center mb-6 text-xl font-light text-black sm:text-2xl dark:text-white">
          Login To Your Account
        </div>
        <div className="mt-8">
          <form action="#" autoComplete="off">
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <input
                  type="text"
                  id="sign-in-email"
                  
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <input
                  type="password"
                  id="sign-in-email"
                 
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Your password"
                />
              </div>
            </div>
            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto text-white">Forgot Your Password?</div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={login}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link className="ml-2 text-white" to="/register">
          You don't have an account?
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
