import React from 'react'
import { FaEthereum } from 'react-icons/fa';

const RefundStatus = ({refund , buyers}) => {
    return (
        <div> 
            {refund?.status == 3 ? 
            (
                <div className='flex flex-col justify-center items-center px-6    '>
                    List of Buyer Refunded 
            <div className=' max-h-[calc(100vh_-_25rem)] overflow-y-auto
            shadow-md rounded-md w-full md:w-2/3 mb-8 bg-teal-300 '>
                <table className='min-w-full'>
                    <thead className='border-b' >
                        <tr>
                            <th scope='col'
                                className='text-sm font-medium
                             px-6 py-4 text-left'>
                                 Address
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
                                        refund?.paid ? (
                                            <small>{refund?.owner.slice(0,5)}...{refund?.owner.slice(-5)}</small>

                                        ) :
                                        "Not Bought"
                                    }
                                </div>
                            </td>
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                <small className='flex justify-start items-center space-x-2'>
                                    <FaEthereum />
                                    <span className='text-gray-700 font-medium'>{refund?.amountpaid} ETH</span>
                                </small>
                            </td>
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                {refund?.status == 3 ? 'Yes' : 'No'}
                            </td>
                            <td className='text-sm font-light px-6 
                            py-4 whitespace-nowrap'>
                                {refund?.timestamp}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            )
        : null}
            
        </div>
        
    )
}

export default RefundStatus