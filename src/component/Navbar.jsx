import React from 'react'
import { RiExchangeLine } from 'react-icons/ri'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center p-6 shadow-xl
         text-green-800 hover:text-lime-700 fixed top-0 left-0 right-0
         cursor-pointer bg-red-50 ">
            <a href='#' className='flex justify-start items-center text-2xl
            '>
                <span>Easy </span>
                <RiExchangeLine />
                <span> Asset</span>

            </a>


        </header>
    )
}

export default Navbar