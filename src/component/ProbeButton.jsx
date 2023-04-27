import React from 'react'
import {  FaEthereum, FaTimes } from 'react-icons/fa'
import { useGlobalState, setGlobalState, setMsgLoading, setAlert } from '../store'
import { ProbeAsset } from '../services/Blockchain'

const ProbeButton = ({asset, buyers}) => {
    const [probeModal] = useGlobalState('probeModal')

    const handleProbe = async () => {
        setGlobalState("probeModal", 'scale-0')
       
        try {
            setMsgLoading("Loading.....");
            const id = buyers?.id
            console.log("Buyers new", id)
          await ProbeAsset(id)
           .then((result) => {
            console.log("Success", result),
            setAlert("Asset successfully Probe...")
           }).catch((error) => {
            setAlert(`${error}`, 'red')
           })

        } catch (error) {
            setAlert('Ops! You can not probe asset', 'red')
            console.log(error.message)
            
        }
    }

    const imgSrc = "https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg"
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex
        items-center justify-center bg-black bg-opacity-50 transform 
        transition-transform duration-300 ${probeModal}`}>

            <div className='bg-white shadow-xl shadow-black w-11/12 md:w-2/5
            h-7/12 p-6 rounded-xl'>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold'>Asset: {asset?.title}</p>
                        <button type='button'
                            onClick={() => setGlobalState('probeModal', 'scale-0')}
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
                        <h4 className='font-sm text-xs text-gray-800'> {asset?.title}</h4>
                        <p className='flex justify-center text-red-500 text-sm my-1 '>Only Admin Can Probe Asset
                         </p>
                        <div className='flex justify-between items-center mt-3 text-gray-600'>
                       <div className='flex justify-start items-center'>
                       <FaEthereum className='mr-3 h-5 w-5'  />
                       <div className='flex flex-col justify-center items-start'> 
                            <small className='text-xs'>@owner</small>
                            <small className=' text-xs text-pink-800'>{asset?.seller}</small>
                        </div>
                       </div>
                            <div className='flex flex-col text-gray-700'>
                                <small className='text-sm'>Asset Price</small>
                                <p className='text-xs font-medium text-red-700'>{asset?.price} ETH</p>
                            </div>
                        </div>
                    </div>
                    <button className=" flex justify-center items-center
                                shadow-lg shadow-black text-white bg-yellow-500
                                hover:bg-red-500 rounded-full mt-5 p-2 uppercase "
                                onClick={handleProbe}> Probe Asset
                    </button>
                </div>
            </div>
        </div> 
    )
}

export default ProbeButton