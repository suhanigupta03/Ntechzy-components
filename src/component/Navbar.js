import React, { useState } from "react";
import { Navitems } from "./Navitems";
import { NavLink,Link } from "react-router-dom";


 const Navbar = ()=> {
    const [isClick, setisClick] = useState(false);
    const toggleNavbar =()=>{
        setisClick(!isClick)
    }
    return(
        <>
        <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
        <div className="flex-shrink-0">
        <a href="/" className="text-white ">LOGO</a>
        </div>
        </div>
        {/* <ul className="nav-items">
            {Navitems.map(item => {
                return(
                <li key={item.id} className={item.cName}>
                  <link to={item.path}>{item.title}</link>
                </li>
                );
            })}
        </ul> */}
        <div className="hidden md:block">
        <div className="ml-4 flex items-center space-x-4">
        <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">HOME</a>
        <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">ABOUT</a>
        <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">SERVICES</a>
        <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">CONTACT US</a>
        

        </div>
        </div>
        <div className="md:hidden flex items-center justify-center p-2 text-white hover:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset "
        >
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
               {isClick ? (<svg 
               className="h-6 w-6"
               xmlns="http://wwww.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L16 6M6 6L12 12"
                />
               </svg>):
               <svg 
               className="h-6 w-6"
               xmlns="http://wwww.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
                  <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
                />
                </svg>}   
            </button>
        </div>
        </div> 
        </div>
        {isClick && (
            <div className="md:hiddem">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className="text-white hover:bg-white block hover:text-black rounded-lg p-2">HOME</a>
        <a href="/" className="text-white hover:bg-white block hover:text-black rounded-lg p-2">ABOUT</a>
        <a href="/" className="text-white hover:bg-white block hover:text-black rounded-lg p-2">SERVICES</a>
        <a href="/" className="text-white hover:bg-white block hover:text-black rounded-lg p-2">CONTACT US</a>
        

                </div>
            </div>
        )}
        </nav>
        </>
         
    );

 }; 
 export default Navbar;