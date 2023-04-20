import React from 'react'
import { FaEthereum } from 'react-icons/fa';

const Buyer = ({buyers}) => {
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
                                Refunded
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
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                {buyers?.refunded ? 'Yes' : 'No'}
                            </td>
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                {buyers?.timestamp}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Buyer