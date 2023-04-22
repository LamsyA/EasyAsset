import React from 'react'
import {  FaEthereum, FaTimes } from 'react-icons/fa'
import { useGlobalState, setGlobalState, setMsgLoading, setAlert } from '../store'
import { buyNewAsset } from '../services/Blockchain'

const BuyButton = ({asset}) => {
    const [buyers] = useGlobalState('buyers')

    
    const [buyModal] = useGlobalState('buyModal')
    const imgSrc = "https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg"
    
    const handleBuy = async () => {
        setGlobalState("buyModal", 'scale-0')
       
        try {
            setMsgLoading("Buying in progress...");
            const id = asset?.id
            const price = asset?.price
          await buyNewAsset({id, price})
           .then((result) => {
            console.log("Success", result),
            setAlert(" Asset Bought successfully")
           }).catch((error) => {
            setAlert(`Sorry you cannot buy this asset`, 'red')
           })

        } catch (error) {
            setAlert(`${error.message}`, 'red')
            console.log(error.message)
            
        }
    }
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
                                src={asset?.credential || imgSrc}
                                alt='Asset title'
                                className='rounded-xl h-full object-cover w-full cursor-pointer '
                            />
                        </div>
                    </div>
                    <div className='flex flex-col justify-start rounded-xl mt-5'>
                        <h4 className='font-semibold text-gray-800'>Asset Name: {asset?.title}</h4>
                        <p className='text-gray-500 text-xs my-1 '>Asset Description: {asset?.description}
                         </p>
                        <div className='flex justify-between items-center mt-3 text-gray-600'>
                       <div className='flex justify-start items-center'>
                       <FaEthereum className='mr-3 h-5 w-5'  />
                       <div className='flex flex-col justify-center items-start'> 
                            <small className='text-xs'> @owner</small>
                            <small className=' text-xs text-pink-800'>{asset?.seller.slice(0,5)}...{asset?.seller.slice(-5)}</small>
                        </div>
                       </div>
                            <div className='flex flex-col text-gray-700'>
                                <small className='text-sm'>Asset Price</small>
                                <p className='text-xs font-medium'>{asset?.price} ETH</p>
                            </div>
                        </div>
                    </div>
                    <button className=" flex justify-center items-center
                                shadow-lg shadow-black text-white bg-green-500
                                hover:bg-green-800 rounded-full mt-5 p-2 uppercase "
                                onClick={handleBuy}> Buy Asset
                    </button>
                </div>
            </div>
        </div> 
    )
}

export default BuyButton