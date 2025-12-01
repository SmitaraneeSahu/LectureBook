import React, { useState, useEffect, useRef } from 'react'
import useTitle from '../hooks/useTitle';
import LampLogin from './LampLogin'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { login } from '../Services';
import { toast } from 'react-toastify';

export default function LogIn() {
  const navigate = useNavigate();
  useTitle("Login");
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.lampStatus === 'on') {
        setShowLogin(true);
      } else {
        setShowLogin(false);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  },[]);

  const email = useRef();
  const password = useRef();

  async function handleLogin(event){
      event.preventDefault();
      let data;
      try{
        const authDetails = {
        email: email.current.value,
        password: password.current.value
      }
        data = await login(authDetails);
        data.accessToken ? navigate('/products') : Swal.fire({icon: 'error', title: data});
      }catch(error){
        toast.error(error.message,{position: "top-center", closeButton: true, closeOnClick: true})
      }
  }
  async function handleLoginAsGuest(){
    email.current.value = import.meta.env.VITE_EMAIL;
    password.current.value = import.meta.env.VITE_PASSWORD;
    try{
        const data = await login({
          email: email.current.value,
          password: password.current.value
        })
        data.accessToken ? navigate('/products') : Swal.fire({icon: 'error', title: data});
    }catch(error){
        toast.error(error.message,{position: "top-center", closeButton: true, closeOnClick: true})
    }
  }
  return (
      <main className="bg-white dark:bg-gray-900 min-h-[90vh] flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 px-4">
          {/* Lamp */}
          <div className="flex justify-center items-center">
            <LampLogin showLogIn={showLogin} setShowLogIn={setShowLogin} className="backdrop-contrast-200 w-24 h-24 md:w-48 md:h-48"/>
          </div>

          {/* Form */}
          {showLogin && (
            <div className="rounded-md animate-fadeIn shadow-lg shadow-blue-500/40 p-4 w-full sm:w-[400px]">
              <form className="flex flex-col w-full" onSubmit={handleLogin}>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your email
                  </label>
                  <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qwerty@example.com" required autoComplete="off"/>
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your password
                  </label>
                  <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div className=' flex justify-start'>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Log In
                </button>
                <button onClick={handleLoginAsGuest} type="submit" className="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  LogIn as guest
                </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
  )
}
