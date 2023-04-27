import { FaEthereum } from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
import { MdReport, MdVerified } from 'react-icons/md'
const AssetDetails = ({asset, buyers}) => {

    // console.log("asset", asset)

  const [connectedAccount] =  useGlobalState('connectedAccount')
  const [owner] =  useGlobalState('owner')

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
                        </div>
                        <div className="flex justify-between items-center w-full pb-1">
                            <div className="flex justify-start space-x-2 ">
                            <small className='flex text-blue-600'>Created: {asset?.timestamp}</small> 
                                <div className='flex justify-between items-center mt-2 mb-2'>
                                
                                    
                    
                                 </div>
                            </div>
                            <div className="font-bold flex ">
                            <div>
                        {asset?.status == 0 ? (
                        <small className='text-green-500'> OPEN</small>
                        ) : 
                        asset?.status == 1 ? (
                        <small className='text-blue-500'> PENDING CONFIRMATION</small> 
                        ) : 
                        asset?.status == 2 ? 
                        (
                        <small className='text-gray-500'> PROBE</small>
                        )  : 
                        asset?.status == 3 ?
                         (
                         <small className='text-teal-500'> REVERTED</small> 
                         ) :
                         asset?.status == 4 ?
                         (
                         <small className='text-teal-500'> SOLD</small> 
                          ) : ( 
                         <small className='text-red-500'> Held</small> 
                        )}

                        <small className='flex text-yellow-700'>@owner {asset?.seller.slice(0,4)}...{asset?.seller.slice(-5)}</small> 
                        {asset?.probe ? ( 
                                        <small className='flex justify-start items-center'><span>Held </span>  
                                    <MdReport className='text-red-500' size={20}/>
                                    </small>
                                    ): (
                                        <small className='flex justify-start items-center'><span>Verified </span>  
                                    <MdVerified className='text-green-500' size={20}/>
                                    </small>
                    )}
                    </div>
                            </div>
                        </div>
                        <p className="text-sm font-light">
                            Description {asset?.description}
                        </p>
                        <div className='w-full bg-gray-300 mt-4'>
                            
                            <div className='bg-teal-600 text-ts font-medium p-0.5
                                leading-none rounded-l-full h-1 text-teal-100 text-center'
                                style={{ width: `${asset?.status * 25}%` }}> </div>
                        </div>
                        <div className="flex justify-between items-center font-bold mt-2">
                            <small className="flex justify-start items-center">{asset?.price} ETH </small>
                            <small className="flex justify-start items-center">
                                <FaEthereum />
                                <span> {asset?.seller.slice(0,5)}...{asset?.seller.slice(-5)}</span>
                            </small>
                        </div>
                        <div className="flex justify-start items-center my-5  space-x-6">
                            { asset?.status == 0 ?  (<button className='inline-block bg-lime-500 px-5 py-2 text-white
                                font-medium text-xs leading-tight uppercase rounded-full 
                                 shadow-md hover:bg-lime-600 '
                                                onClick={() => setGlobalState('buyModal', 'scale-100')}
                                                >
                              Buy Asset
                          </button>) : asset?.status == 4 ? (
                                <button className='inline-block bg-teal-500 px-5 py-2 text-white
                                font-medium text-xs leading-tight uppercase rounded-full 
                                 shadow-md hover:bg-teal-600 '
                                                >
                              ASSET SOLD OUT
                          </button>
                            ):(
                                <button className='inline-block bg-lime-500 px-5 py-2 text-white
                                font-medium text-xs leading-tight uppercase rounded-full 
                                 shadow-md hover:bg-lime-600 '
                                                >
                              ASSET UNDER NEGOTIATION
                          </button>
                            ) }
                            { connectedAccount== buyers?.owner && asset?.status == 1 ? 
                            (
                                <div className="flex justify-start items-center my-5  space-x-6"> 
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
                            ) : null }
                            { connectedAccount== owner && ( asset?.status == 0 || asset?.status == 1 ||  asset?.status == 2 ) ? 
                            (
                                <div className="flex justify-start items-center my-5  space-x-6"> 
                                    <button className='inline-block bg-yellow-500 px-5 py-2 text-white
                                  font-medium text-xs leading-tight uppercase rounded-full 
                                   shadow-md hover:bg-yellow-600 '
                                                  onClick={() => setGlobalState('probeModal', 'scale-100')}>

                                PROBE ASSET
                            </button>
                            <button className='inline-block bg-gray-500 px-5 py-2 text-white
                                  font-medium text-xs leading-tight uppercase rounded-full 
                                   shadow-md hover:bg-gray-600 '
                                                  onClick={() => setGlobalState('releaseModal', 'scale-100')}
                                                  >
                                RELEASE ASSET
                            </button>
                                </div>
                            ) : null }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssetDetails