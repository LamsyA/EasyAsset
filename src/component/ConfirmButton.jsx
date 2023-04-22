import React from 'react'
import {  FaEthereum, FaTimes } from 'react-icons/fa'
import { useGlobalState, setGlobalState, setMsgLoading, setAlert } from '../store'
import { confirmAsset } from '../services/Blockchain'

const ConfirmButton = ({asset, buyers}) => {
    const [confirmModal] = useGlobalState('confirmModal')



    const imgSrc = "https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg"

    const handleConfirm = async () => {
        setGlobalState("confirmModal", 'scale-0')
       
        try {
            setMsgLoading("Wait while we confirm you, in progress...");
            const id = buyers?.id
            console.log("Buyers new", id)
            console.log()
            // const price = buyers?.amountpaid
          await confirmAsset(id)
           .then((result) => {
            console.log("Success", result),
            setAlert(" Asset Bought successfully")
           }).catch((error) => {
            setAlert(`${error.message}`, 'red')
           })

        } catch (error) {
            setAlert(`${error.message}`, 'red')
            console.log(error.message)
            
        }
    }
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex
        items-center justify-center bg-black bg-opacity-50 transform 
        transition-transform duration-300 ${confirmModal}`}>

            <div className='bg-white shadow-xl shadow-black w-11/12 md:w-2/5
            h-7/12 p-6 rounded-xl'>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold'>{asset?.title}</p>
                        <button type='button'
                            onClick={() => setGlobalState('confirmModal', 'scale-0')}
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
                    <div className='flex flex-col justify-center items-center rounded-xl mt-5'>
                         <small className='text-sm'>Do not confirm Asset if you have not check the asset</small>

                        <p className='flex justify-center items-center text-red-500 text-sm my-1 '>
                           kindly, Note that once you confirm Asset you cannot request for refund.
                         </p>
                        <div className='flex justify-center items-center mt-3 text-gray-600'>
                        <p className='text-lg font-medium text-red-700'>Are you sure you want to confirm Asset?</p>
                           
                        </div>

                    </div>
                    <button className=" flex justify-center items-center
                                shadow-lg shadow-black text-white bg-gray-500
                                hover:bg-gray-700 rounded-full mt-5 p-2 uppercase "
                                onClick={handleConfirm}> Confirm Asset
                    </button>
                </div>
            </div>
        </div> 
    )
}

export default ConfirmButton