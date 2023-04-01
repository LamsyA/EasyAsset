import React from 'react'
import { Link } from 'react-router-dom'


const Assets = () => {
    return (
        <div className='flex flex-col px-6 bg-teal-50'>
            <div className='flex justify-center items-center flex-wrap'>
                {Array(4).fill().map((card, i) => (
                    <AssetCard key={i} id={i} asset={card} />
                ))}
            </div>
        </div>
    )
}

const AssetCard = ({ asset, id }) => (
    <div id='assets' className='rounded-lg shadow-lg bg-white w-64 m-4'>
        <Link to={'/assets/' + id}>
            <img
                src='https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg'
                alt='Asset title'
                className='rounded-xl h-64 w-full object-cover'
            />
            <div className='p-4'>
                <h4> Test running the card</h4>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <small className='text-gray-700'>0x56.00</small>
                    </div>
                    <small className='text-gray-500'> </small>
                </div>
                <div className='w-full bg-gray-300'>
                    <div className='bg-teal-600 text-ts font-medium p-0.5
                leading-none rounded-l-full h-1 text-teal-100 text-center'
                        style={{ width: '50%' }}> </div>
                </div>
                <div className='flex justify-between items-center flex-wrap mt-4 
                mb-2 text-gray-500 font-bold'>
                    <small > ID {14} </small>
                    <div>
                        <small > Open</small>
                    </div>
                </div>
            </div>
        </Link>

    </div>
)

export default Assets