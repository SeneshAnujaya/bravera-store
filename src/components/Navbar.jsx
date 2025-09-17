import React, {  useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import BraveraLogo from '../assets/bravera-logo.png';
// import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

    const [visible, setVisible]  = useState(false);
    // const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

    // const logout = () => {
    //   navigate('/login');
    //   localStorage.removeItem('token');
    //   setToken('');
    //   setCartItems({});
     
    // }
  return (
    <div className="flex items-center justify-between py-5 font-medium w-full fixed bg-white left-0 right-0 top-0 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] border-b border-b-slate-100 z-50">
      <Link to="/">
      <img src={BraveraLogo} className="w-36" alt="logo" />
      {/* <p className="text-2xl">BRAVERA</p> */}
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-800">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="font-semibold">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="font-semibold">COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="font-semibold">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="font-semibold">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 hidden " />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img  src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img 
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
         {/* Dropdown menu */}
         {/* {token && <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flx flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black ">My Profile</p>
              <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black ">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black ">Logout</p>
            </div>
          </div> } */}
          
        </div>
        <Link to="/cart" className="relative">
        <img src={assets.cart_icon} className="w-5 min-w-5" alt=""/>
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[9px]">{0}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden"/>
      </div>
      {/* Sidebar menu sm screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? ' w-3/4 h-screen':'w-0'}`}>
        <div className="flex flex-col text-gray-600">
            <div onClick={() =>  setVisible(false)} className="flex items-center gap-4 p-3">
                <img className="h-4 rotate-180" src={assets.dropdown_icon} alt=""/>
                <p>Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
