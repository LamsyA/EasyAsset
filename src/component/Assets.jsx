import React from 'react'
import { Link } from 'react-router-dom'


const Assets = ({assets}) => {
    return (
        <div className='flex flex-col px-6 bg-teal-50'>
            <div className='flex justify-center items-center flex-wrap'>
                {assets.map((asset, i) => (
                    <AssetCard key={i}  asset={asset} />
                ))}
            </div>
        </div>
    )
}

const AssetCard = ({ asset }) => (
    <div id='assets' className='rounded-lg shadow-lg bg-white w-64 m-4'>
        <Link to={'/assets/' + asset.id}>
            <img
                src={ asset.credential||'https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg'}
                alt={asset.title}
                className='rounded-xl h-64 w-full object-cover'
            />
            <div className='p-4 '>
                <h4 className='text-sm mb-4'>Asset Title: {asset.title}</h4>
                <div className='flex flex-row mb-2 justify-between items-center space-x-2'>
                    <div className='flex '>
                        <small className='text-gray-700'>{asset.holder.slice(0,5) +"..."+ asset.holder.slice(-5) }</small>
                    </div>
                    <small >Asset ID: {asset.id} </small>
                </div>
                <div className='w-full bg-gray-300'>
                    <div className='bg-teal-600 text-xs font-medium p-0.5
                leading-none rounded-l-full h-1 text-teal-100 text-center'
                        style={{ width: `${asset.status * 25}%` }}> </div>
                </div>
                <div className='flex justify-between items-center flex-wrap mt-4 
                mb-2 text-gray-500 font-bold'>
                    
                    <small className='text-gray-500 text-sm'> Created: {asset.timestamp}</small>

                    <div>
                        <small > Open</small>
                    </div>
                </div>
            </div>
        </Link>

    </div>
)

export default Assets