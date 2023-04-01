import { FaEthereum } from 'react-icons/fa'
const AssetDetails = () => {
    return (
        <div className="py-24 px-5">
            <div>
                <div className="flex justify-start items-start sm:space-x-4
                flex-wrap">
                    <img
                        src='https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg'
                        alt='Asset title'
                        className='rounded-xl h-64 object-cover w-full sm:w-1/3 '
                    />
                    <div className="flex-1 sm:py-0 py-4">
                        <div className="flex flex-col justify-start flex-wrap ">
                            <h5 className="text-gray-900 text-sm font-medium mb-2">Test running the card</h5>
                            <small className="text-gray-500 ">2 days left</small>
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <div className='w-full bg-gray-300 mt-4'>
                            <div className='bg-teal-600 text-ts font-medium p-0.5
                                leading-none rounded-l-full h-1 text-teal-100 text-center'
                                style={{ width: '50%' }}> </div>
                        </div>
                        <div className="flex justify-between items-center font-bold mt-2">
                            <small className="flex justify-start items-center">{5} ETH </small>
                            <small className="flex justify-start items-center">
                                <FaEthereum />
                                <span> 0x29..092 is now the owner</span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssetDetails