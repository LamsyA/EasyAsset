import React from 'react'
import { FaEthereum } from 'react-icons/fa';

const Buyer = ({buyers,asset}) => {
    return (
        
        <div className='flex flex-col justify-center items-center px-6    '>
            
            <div className=' max-h-[calc(100vh_-_25rem)] overflow-y-auto
            shadow-md rounded-md w-full md:w-2/3 mb-8 '>
                <table className='min-w-full'>
                    <thead className='border-b' >
                        <tr>
                            <th scope='col'
                                className='text-sm font-medium
                             px-6 py-4 text-left'>
                                Buyer
                            </th>
                            <th scope='col'
                                className='text-sm font-medium
                             px-6 py-4 text-left'>
                                Amount
                            </th>
                            <th scope='col'
                                className='text-sm font-medium
                             px-6 py-4 text-left'>
                                Status
                            </th>
                            <th scope='col'
                                className='text-sm font-medium
                             px-6 py-4 text-left'>
                                Date & Time
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='border-b border-gray-200
                        '>
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                <div>
                                    {
                                        buyers?.paid ? (
                                            <small>{buyers?.owner.slice(0,5)}...{buyers?.owner.slice(-5)}</small>

                                        ) :
                                        "Not Bought"
                                    }
                                </div>
                            </td>
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                <small className='flex justify-start items-center space-x-2'>
                                    <FaEthereum />
                                    <span className='text-gray-700 font-medium'>{buyers?.amountpaid} ETH</span>
                                </small>
                            </td>
                            <td className='text-sm px-6 
                            py-4 whitespace-nowrap font-bold'>
                                {asset?.status == 0 ? (
                                <small className='text-green-700'> OPEN </small>
                                ) : 
                                asset?.status == 1 ? (
                                <small className='text-blue-500 '> PAID </small> 
                                ) : 
                                asset?.status == 2 ? 
                                (
                                <small className='text-gray-500'> PROBE </small>
                                )  : 
                                asset?.status == 3 ?
                                (
                                <small className='text-teal-500'> REVERTED </small> 
                                ) :
                                asset?.status == 4 ?
                                (
                                <small className='text-teal-500'> SOLD </small> 
                                ) : ( 
                                <small className='text-red-500'> HELD </small> 
                                )}
                            </td>
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                {buyers?.paid  ? buyers?.timestamp : null}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Buyer