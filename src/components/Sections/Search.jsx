import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Search({setSearchSection}) {
    const navigate = useNavigate();
    const searchRef = useRef();
    function handleSearch(event){
        event.preventDefault();
        setSearchSection(false);
        navigate(`/products?name_like=${searchRef.current.value}`);
    }
  return (
    <div className='bg-white dark:bg-gray-800 mx-auto max-w-screen-xl p-1 mr-1'>
        <form  onSubmit={handleSearch} className='flex'>
            <div className='relative w-30'>
                {/* <span className='bi bi-search'></span> */}
                <input ref={searchRef} name='search' type='text' id='simple-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"' placeholder="Search for a course" autoComplete="off" required=""/>
            </div>
            <button  type='submit' className='bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'></button>
        </form>
    </div>
  )
}
