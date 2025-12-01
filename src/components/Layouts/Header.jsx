import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import Search from '../Sections/Search';
import DropDownLoggedOut from '../Elements/DropDownLoggedOut';
import DropDownLoggedIn from '../Elements/DropDownLoggedIn';
import { useCart } from '../../contexts';

export default function Header() {
  const {cartList} = useCart();
  const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem("darkMode")) || false);
  const [searchSection, setSearchSection] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  useEffect(()=>{
    localStorage.setItem("darkMode",JSON.stringify(darkMode));
    if (darkMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[darkMode]);

  const token = JSON.parse(sessionStorage.getItem("token"));

  return (
<header>
  <nav className="bg-white border-b-2 dark:bg-gray-800 dark:border-b-0">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center ">
              <img src={Logo} className="mr-3 h-10" alt="LectureBook Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LectureBook</span>
          </Link>
          <div className="flex items-center ">
              <span onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
              {!searchSection && <span onClick={()=> setSearchSection(true)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>}
              {searchSection && <Search setSearchSection={setSearchSection}/>}
              <Link to="/cart" className="text-gray-700 dark:text-white">
              <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-cart relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-green-800 px-1 rounded-full ">{cartList.length}</span>
              </span>
              </Link>
              <span onClick={()=> setDropDown(!dropDown)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle"></span>
              {dropDown && (token ? <DropDownLoggedIn setDropDown={setDropDown}/> :<DropDownLoggedOut setDropDown={setDropDown} />)}
          </div>
      </div>
  </nav>
  
</header>

  )
}
