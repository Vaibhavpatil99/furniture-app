import React from 'react'
// import logo from '../imgs/logo.png'
// import treeLogo from '../imgs/tree.png'
import hamMenu from '../imgs/ham-menu.png'
import { useState } from 'react'



const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 470) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)


    return (
        <div className={`flex justify-between didot  w-full fixed top-0 duration-300 ${navbar ? 'bg-white ' : ' ' } `}>
            {/* <img className='h-12' src={logo} alt="" /> */}
            <div className='flex justify-between items-center'>
                <img className='h-6 mx-12' src={hamMenu} alt="" />
                <h2 className='text-7xl tracking-widest'>NOX</h2>
            </div>
            <div className='flex justify-center items-center'>
                <h2 className='text-xl mx-2'>Furniture</h2>
                <h2 className='text-xl mx-2'>Interior</h2>
                <h2 className='text-xl mx-2'>Shop</h2>
                
            </div>
            <div className='flex justify-center items-center'>
            <h2 className='text-xl mx-2'>Login</h2>
            <h2 className='text-xl mx-2'>Logout</h2>
            </div>
        </div>
    )
}

export default Navbar