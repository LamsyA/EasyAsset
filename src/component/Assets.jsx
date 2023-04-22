import React from 'react'
import { Link } from 'react-router-dom'
import {MdReport, MdVerified} from 'react-icons/md'


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
    <div id='assets' className='rounded-lg shadow-lg bg-white w-64 m-4 hover:shadow-red-300'>
        <Link to={'/assets/' + asset.id}>
            <img
                src={ asset.credential||'https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg'}
                alt={asset.title}
                className='rounded-xl h-64 w-full object-cover'
            />
            <div className='p-4 '>
                <h4 className='text-sm mb-4 text-yellow-600'>Asset Name: {asset.title}</h4>
                <div className='flex flex-row mb-2 justify-between items-center space-x-2'>
                    <div className='flex '>
                        <small className='text-gray-700'>{asset.seller.slice(0,5) +"..."+ asset.seller.slice(-5) }</small>
                    </div>
                    <small >Asset ID: {asset.id} </small>
                </div>
                <div className='w-full bg-gray-300 overflow-hidden'>
                    <div className='bg-teal-600 text-xs font-medium p-0.5
                leading-none rounded-l-full h-1 text-teal-100 text-center '
                        style={{ width: `${asset.status * 25}%` }}> </div>
                </div>
                <div className='flex justify-between items-center mt-2 mb-2'>
                    <small className='text-blue-600'>Created: {asset.timestamp}</small> 
                    {asset.probe ? ( 
                        <small className='flex justify-start items-center'><span>Held </span>  
                    <MdReport className='text-red-500' size={20}/>
                    </small>
                    ): (
                        <small className='flex justify-start items-center'><span>Verified </span>  
                    <MdVerified className='text-green-500' size={20}/>
                    </small>
                    )}
                    
                </div>
                <div className='flex justify-between items-center flex-wrap mt-4 
                mb-2 text-gray-500 font-bold uppercase'>
                    
                    <small className='text-gray-500 text-sm'> Price: {asset.price} ETH</small>

                    <div>
                        {asset.status == 0 ? (
                        <small className='text-green-500'> Open</small>
                        ) : 
                        asset.status == 1 ? (
                        <small className='text-yellow-500'> PAID</small> 
                        ) : 
                        asset.status == 2 ? 
                        (
                        <small className='text-gray-500'> PROBE</small>
                        )  : 
                        asset.status == 3 ?
                         (
                         <small className='text-teal-500'> REVERTED</small> 
                         ) :
                         asset.status == 4 ?
                         (
                         <small className='text-teal-500'> SOLD</small> 
                          ) : ( 
                         <small className='text-red-500'> HELD</small> 
                        )}
                        
                    </div>
                </div>
            </div>
        </Link>

    </div>
)

export default Assets