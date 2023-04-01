import React from 'react'
import { FaEthereum } from 'react-icons/fa';

const Buyer = () => {
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
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='border-b border-gray-200
                        '>
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                <div>
                                    <small>0x82..920</small>
                                </div>
                            </td>
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                <small className='flex justify-start items-center space-x-2'>
                                    <FaEthereum />
                                    <span className='text-gray-700 font-medium'>{3} ETH</span>
                                </small>
                            </td>
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                {false ? 'Yes' : 'No'}
                            </td>
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                {new Date().getTime()}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Buyer