import React from 'react'
// import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'
import BraveraLogo from '../assets/bravera-logo.png';

const Footer = () => {
  return (
    <div className=''>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-14 text-sm border-t border-t-gray-300 pt-8 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <div>
            <img src={BraveraLogo} className='mb-5 w-36' alt='footer-lgo' />
             {/* <p className="text-2xl font-medium mb-2">BRAVERA</p> */}
            <p className='w-full md:w-2/3 text-gray-600 text-[0.95rem] font-light'>
            blends timeless style with modern edge. Discover thoughtfully curated fashion that elevates your everyday wardrobe — made to move with you.
            </p>
        </div>

        <div>
            <p className='text-lg font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/collection">Shop</Link></li>
                <li><Link to="/about">About us</Link></li>
                 <li><Link to="/contact">Contact Us</Link></li>
         
            
            </ul>
        </div>

        <div>
            <p className='text-lg font-medium mb-5'>QUICK LINKS</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><Link to="#">Profile</Link></li>
                <li><Link to="/orders">My Orders</Link></li>
                <li><Link to="/cart">My Cart</Link></li>
                 <li><Link to="/place-order">Checkout</Link></li>
         
            
            </ul>
        </div>

        <div>
            <p className='text-lg font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+94 9864783</li>
                <li>contact@Modveil.com</li>

            </ul>
        </div>
    </div>
    <div>
    <hr className='border-gray-300'/>
    <p className='py-5 text-sm text-center'>© 2025 BREVERA – All Rights Reserved. </p>
</div>
</div>

  )
}

export default Footer