import React from 'react'
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return(
        <>
            <nav className='w-full h-20 bg-indigo-500 flex items-center justify-center border-b-[1px] border-gray-300 gap-5 sm:justify-between sm:pl-[min(7vw,100px)] sm:pr-[min(5vw,100px)] ]'>
                <div className= 'flex items-center gap-2 w-auto'>
                    <img className='h-[min(12vw,50px)]' src={logo} alt="React logo" />
                    <p className='hidden [@media(min-width:480px)]:block text-[min(5vw,25px)] font-bold'>React Jobs</p>
                </div>
                <div className='gap-[min(3vw,30px)]  flex-center'>
                    <div className="nav-box bg-black">
                        <p>Home</p>
                    </div>
                    <div className="nav-box">
                        <p>Jobs</p>
                    </div>
                    <div className="nav-box">
                        <p>Add Job</p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
