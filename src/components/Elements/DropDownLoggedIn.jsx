import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../Services';
import { logout } from '../../Services';
import { toast } from 'react-toastify';

export default function DropDownLoggedIn({setDropDown}) {
    const navigate = useNavigate();
    function handleLogout(){
        logout();
        setDropDown(false);
        navigate("/");
    }
    const [user, setUser] = useState({});
    useEffect(()=>{
        async function fetchUser(){
            try{
                const data = await getUser();
                data.email ? setUser(data) : handleLogout();
            }catch(error){
                toast.error(error.message,{position: "top-center", closeButton: true, closeOnClick: true})

            }
        }
        fetchUser();
    },[])
  return (
    <div id='dopdownAvatar' className='select-none absolute top-[3.75rem] right-10 z-50 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'>
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate">{user.email}</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick={()=>setDropDown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Courses</Link>
            </li>
            <li>
                <Link  onClick={()=>setDropDown(false)} to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">DashBoard</Link>
            </li>
        </ul>
        <div className='py-1'>
            <span onClick={handleLogout} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log Out</span>
        </div>
    </div>
    )
}
