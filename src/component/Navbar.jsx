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
            <div className=' flex justify-center space bg-yellow-500 px-5 py-2
            rounded-full text-white shadow-lg shadow-gray-500 hover:shadow-gray-900 
            hover:bg-yellow-600'>
                <button type='button'
                    className='font-medium leading-tight uppercase '> Connect Wallet </button>
            </div>

        </header>
    )
}

export default Navbar