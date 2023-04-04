import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { setGlobalState } from '../store'

const HomeMintButton = () => {
    return (
        <div className='fixed right-10 bottom-10 flex space-x-2 
             justify-center'
        >
            <button className='flex  justify-center items-center  mt-10  bg-yellow-500 
            w-9 h-9 rounded-full text-white shadow-md shadow-gray-900 
            hover:shadow-red-600  text-sm uppercase leading-tight border '
                onClick={() => setGlobalState('showModal', 'scale-100')}
            >
                <BsPlusLg className='font-bold' size={20} />
            </button></div>
    )
}

export default HomeMintButton