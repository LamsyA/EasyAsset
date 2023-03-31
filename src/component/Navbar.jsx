import React from 'react'
import { RiExchangeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center p-6 shadow-md
         text-yellow-500 hover:text-yellow-400 fixed top-0 left-0 right-0
         cursor-pointer bg-white shadow-blue-200  ">
            <Link to='/' className='flex justify-start items-center text-2xl
            '>
                <span>Easy </span>
                <RiExchangeLine />
                <span> Asset</span>
            </Link>
            <div className=' flex justify-center space bg-yellow-500 px-5 py-2
            rounded-full text-white shadow-md shadow-lime-100 hover:shadow-gray-900 
            hover:bg-yellow-600'>
                <button type='button'
                    className='font-medium leading-tight uppercase '> Connect Wallet </button>
            </div>

        </header>
    )
}

export default Navbar