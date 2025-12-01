import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import LampLogin from './LampLogin';
import Swal from 'sweetalert2';
import { register } from '../Services';
import { toast } from 'react-toastify';


export default function Register() {
const navigate = useNavigate();

useTitle("Register");
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

async function handleRegister(event, message){
  event.preventDefault();
  try{
    const authDetails = {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value
    }
    const data = await register(authDetails)
    data.accessToken ? navigate('/products') : Swal.fire({icon: 'error', title: data});
  }catch(error){
    toast.error(error.message,{position: "top-center", closeButton: true, closeOnClick: true})
  }
}
  return (
    <main className=' bg-white dark:bg-gray-900 min-h-[90vh] flex items-center justify-center'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 px-4 '>
        <div  className='flex justify-center items-center '>
          <LampLogin showLogIn={showLogin} setShowLogIn={setShowLogin} className="w-24 h-24 md:w-48 md:h-48"/>
        </div>
        {showLogin && <div className='rounded-md animate-fadeIn shadow-lg shadow-blue-500/40 p-4 w-full sm:w-[400px]'>
        <form className='flex flex-col w-full' onSubmit={handleRegister}>
        <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
              <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="john smith" required autoComplete="off" />
          </div>
          <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="sert@gmail.com" required autoComplete="off" />
          </div>
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
              <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required minLength="7" />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        </form></div>}
        </div>
    </main>
  )
}
