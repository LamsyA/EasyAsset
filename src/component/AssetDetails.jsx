import { FaEthereum } from 'react-icons/fa'
import { setGlobalState } from '../store'
const AssetDetails = ({asset}) => {

    console.log("asset", asset)
    return (
        <div className="py-28 px-6 flex justify-center">
            <div className='flex justify-center flex-col md:w-2/3'>
                <div className="flex justify-start items-start sm:space-x-4
                flex-wrap">
                    <img
                        src={asset?.credential || 'https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg'}
                        alt={asset?.title}
                        className='rounded-xl h-64 object-cover w-full sm:w-1/3 '
                    />
                    <div className="flex-1 sm:py-0 py-4">
                        <div className="flex flex-col justify-start flex-wrap ">
                            <h5 className="text-gray-900 text-sm font-medium mb-2"> Asset Name: {asset?.title}</h5>
                            <small className="text-gray-500 ">{asset?.price}</small>
                        </div>
                        <div className="flex justify-between items-center w-full pb-1">
                            <div className="flex justify-start space-x-2 ">
                                <small className="text-gray-700">0x63..90</small>
                                <small className="text-gray-500 font-bold">{14} bidding</small>
                            </div>
                            <div className="font-bold flex ">
                                <small className='text-gray-500'>Open</small>
                            </div>
                        </div>
                        <p className="text-sm font-light">
                            Description {asset?.description}
                        </p>
                        <div className='w-full bg-gray-300 mt-4'>
                            <div className='bg-teal-600 text-ts font-medium p-0.5
                                leading-none rounded-l-full h-1 text-teal-100 text-center'
                                style={{ width: '50%' }}> </div>
                        </div>
                        <div className="flex justify-between items-center font-bold mt-2">
                            <small className="flex justify-start items-center">{asset?.price} ETH </small>
                            <small className="flex justify-start items-center">
                                <FaEthereum />
                                <span> {asset?.holder.slice(0,5)}...{asset?.holder.slice(-5)}</span>
                            </small>
                        </div>
                        <div className="flex justify-start items-center my-5  space-x-6">
                            <button className='inline-block bg-lime-500 px-5 py-2 text-white
                                  font-medium text-xs leading-tight uppercase rounded-full 
                                   shadow-md hover:bg-lime-600 '
                                                  onClick={() => setGlobalState('buyModal', 'scale-100')}>
                                Buy Asset
                            </button>
                            <button className='inline-block bg-yellow-500 px-5 py-2 text-white
                                  font-medium text-xs leading-tight uppercase rounded-full 
                                   shadow-md hover:bg-yellow-600 '
                                                  onClick={() => setGlobalState('refundModal', 'scale-100')}>

                                Request Refund
                            </button>
                            <button className='inline-block bg-gray-500 px-5 py-2 text-white
                                  font-medium text-xs leading-tight uppercase rounded-full 
                                   shadow-md hover:bg-gray-600 '
                                                  onClick={() => setGlobalState('confirmModal', 'scale-100')}
                                                  >
                                Confirm Asset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssetDetails