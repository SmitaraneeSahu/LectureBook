import React from 'react'
import { Link } from 'react-router-dom'

export default function DropDownLoggedOut({setDropDown}) {
  return (
    
    <div id='dopdownAvatar' className='select-none absolute top-[3.75rem] right-10 z-50 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'>
         <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <Link onClick={()=>setDropDown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Courses</Link>
                </li>
                <li>
                    <Link onClick={()=>setDropDown(false)} to="/Login" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log In</Link>
                </li>
                <li>
                    <Link onClick={()=>setDropDown(false)} to="/Register" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
                </li>
        </ul>
    </div>
  )
}
