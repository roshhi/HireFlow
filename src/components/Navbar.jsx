import React from 'react'
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom'; // not using the <a> tag because it reloads the page.
// NavLink add a class to the active link

const Navbar = () => {
    return(
        <>
            <nav className='w-full h-20 bg-indigo-500 flex items-center justify-center border-b-[1px] border-gray-300 gap-5 sm:justify-between sm:pl-[min(7vw,100px)] sm:pr-[min(5vw,100px)] text-white'>
                <div className= 'flex items-center gap-2 w-auto'>
                    <img className='h-[min(12vw,50px)]' src={logo} alt="React logo" />
                    <p className='hidden [@media(min-width:480px)]:block text-[min(5vw,25px)] font-bold'>React Jobs</p>
                </div>
                <div className='gap-[min(3vw,30px)] flex-center'>
                    <NavLink to="/" className={({ isActive }) => isActive ?'nav-active': 'nav-not-active'}>
                        <div>
                            <p>Home</p>
                        </div>
                    </NavLink>
                    <NavLink to="/jobs" className={({ isActive }) => isActive ?'nav-active': 'nav-not-active'}>
                        <div>
                            <p>Jobs</p>
                        </div>
                    </NavLink>

                    <NavLink to="/addJob" className={({ isActive }) => isActive ?'nav-active': 'nav-not-active'}>
                        <div>
                            <p>Add Job</p>
                        </div>
                    </NavLink>     
                </div>
            </nav>
        </>
    )
}
export default Navbar;
