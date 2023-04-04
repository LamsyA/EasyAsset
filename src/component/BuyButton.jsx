import React from 'react'
import {  FaEthereum, FaTimes } from 'react-icons/fa'
import { useGlobalState, setGlobalState } from '../store'

const BuyButton = () => {
    const [buyModal] = useGlobalState('buyModal')
    const imgSrc = "https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg"
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex
        items-center justify-center bg-black bg-opacity-50 transform 
        transition-transform duration-300 ${buyModal}`}>

            <div className='bg-white shadow-xl shadow-black w-11/12 md:w-2/5
            h-7/12 p-6 rounded-xl'>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold'>Buy Asset</p>
                        <button type='button'
                            onClick={() => setGlobalState('buyModal', 'scale-0')}
                            className='border-0 bg-transparent 
                        focus:outline-none '>
                            <FaTimes />
                        </button>
                    </div>
                    <div className='flex justify-center items-center mt-5'>
                        <div className='rounded-xl overflow-hidden h-40 w-40'>
                            <img
                                src={imgSrc}
                                alt='Asset title'
                                className='rounded-xl h-full object-cover w-full cursor-pointer '
                            />
                        </div>
                    </div>
                    <div className='flex flex-col justify-start rounded-xl mt-5'>
                        <h4 className='font-semibold text-gray-800'>Title</h4>
                        <p className='text-gray-500 text-xs my-1 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         </p>
                        <div className='flex justify-between items-center mt-3 text-gray-600'>
                       <div className='flex justify-start items-center'>
                       <FaEthereum className='mr-3 h-5 w-5'  />
                       <div className='flex flex-col justify-center items-start'> 
                            <small className='text-xs'>@owner</small>
                            <small className=' text-xs text-pink-800'>0X31..0f42</small>
                        </div>
                       </div>
                            <div className='flex flex-col text-gray-700'>
                                <small className='text-sm'>Asset Price</small>
                                <p className='text-xs font-medium'>0.56 ETH</p>
                            </div>
                        </div>
                    </div>
                    <button className=" flex justify-center items-center
                                shadow-lg shadow-black text-white bg-yellow-500
                                hover:bg-yellow-800 rounded-full mt-5 p-2 uppercase "> Mint Asset
                    </button>
                </div>
            </div>
        </div> 
    )
}

export default BuyButton