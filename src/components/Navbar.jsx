import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [active, setActive] = useState("Home")

    return (
        <>
            <nav className='flex justify-center items-center gap-20'>
                <div className='flex items-center'>
                    <img className='w-42.5 h-9.25' src={logo} alt="Logo" />
                </div>

                <ul className='flex items-center gap-12 text-[16px] font-medium bg-white px-10.5 py-5.5 rounded-[20px]'>
                    <li>
                        <Link
                            onClick={() => setActive("Home")}
                            className={active === "Home" ? "text-(--main-color) font-bold" : "text-(--primary-color) hover:text-(--main-color) duration-300"}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setActive("About")}
                            className={active === "About" ? "text-(--main-color) font-bold" : "text-(--primary-color) hover:text-(--main-color) duration-300"}
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setActive("How Does It Work")}
                            className={active === "How Does It Work" ? "text-(--main-color) font-bold" : "text-(--primary-color) hover:text-(--main-color) duration-300"}
                            to="/how-does-it-work"
                        >
                            How Does It Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setActive("Services")}
                            className={active === "Services" ? "text-(--main-color) font-bold" : "text-(--primary-color) hover:text-(--main-color) duration-300"}
                            to="/services"
                        >
                            Services
                        </Link>
                    </li>
                </ul>

                <div className='flex items-center gap-4.75'>
                    <button className='font-medium text-(--primary-color) hover:text-(--main-color) cursor-pointer duration-300'>Sign In</button>
                    <button className='font-medium text-white bg-(--button-color) px-9 py-3 rounded-[10px] cursor-pointer hover:bg-(--button-color)/80 duration-300'>Sign Up</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar