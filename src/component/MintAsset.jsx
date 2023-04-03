import React from 'react'
import { FaTimes } from 'react-icons/fa'

const MintAsset = () => {
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex
        items-center justify-center bg-black bg-opacity-50 transform 
        transition-transform duration-300 scale-100`}>

            <div className='bg-white shadow-xl shadow-black w-11/12 md:w-2/5
            h-7/12 p-6 rounded-xl'>
                <form className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold'>Add Asset</p>
                        <button type='button'
                            className='border-0 bg-transparent 
                        focus:outline-none '>
                            <FaTimes />
                        </button>
                    </div>
                    <div className='flex justify-center items-center mt-5'>
                        <div className='rounded-xl overflow-hidden h-20 w-20'>
                            <img
                                src='https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg'
                                alt='Asset title'
                                className='rounded-xl h-full object-cover w-full cursor-pointer '
                            />
                        </div>
                    </div>
                    <div className='flex justify-between items-center bg-gray-300
                                rounded-xl mt-5'>
                        <label className='block'>
                            <span className='sr-only'>Choose Image item</span>
                            <input
                                className='block w-full text-sm text-slate-500 file:mr-4
                                  file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm
                                   hover:file:bg-[#c4e631] file:font-semibold focus:outline-none
                                   cursor-pointer focus:ring-0'
                                type='file'
                                accept='image/png, image/gif, image/webp, image/jpeg, image/jpg'
                                //    onChange={changeImage}
                                required />
                        </label>
                    </div>
                    <div className='flex justify-between items-center bg-gray-300 p-2 
                    rounded-xl mt-5'>
                        <input className='block w-full bg-transparent border-0 text-sm
                        text-slate-500 focus:outline-none focus:ring-0'
                            type="text"
                            name='title'
                            placeholder='Name of Asset'
                            required
                        />
                    </div>
                    <div className='flex justify-between items-center bg-gray-300 p-2 
                    rounded-xl mt-5'>
                        <input className='block w-full bg-transparent border-0 text-sm
                        text-slate-500 focus:outline-none focus:ring-0'
                            type="number"
                            step={0.01}
                            min={0.01}
                            name='price'
                            placeholder='Price (ETH)'
                        />
                    </div>
                    <div className='flex justify-between items-center bg-gray-300
                            rounded-xl mt-5'>
                        <textarea
                            className='block w-full text-sm text-slate-500 bg-gray-300
                                focus:outline-none focus:ring-0 p-2
                                 bg-transparent border-0 h-20 resize-none'
                            type='text'
                            placeholder='Description'
                            name='description'
                            //  onChange={(e) => setDescription(e.target.value)} 
                            //  value={description}         
                            required>
                        </textarea>
                    </div>
                    <button className=" flex justify-center items-center
                                shadow-lg shadow-black text-white bg-yellow-400
                                hover:bg-yellow-600 rounded-full mt-5 p-2 uppercase "> Mint Asset
                    </button>
                </form>
            </div>
        </div>
    )
}

export default MintAsset