import Typewriter from 'typewriter-effect';
import { setGlobalState, useGlobalState } from '../store';

const Hero = () => {
    const [showModal] = useGlobalState('showModal')
    return (
        <div className="text-center bg-teal-50  py-32 px-5">
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold mb-12 tracking-tight ">
                <span className="xl:text-3xl capitalize mb-5 "> Looking for a new way to showcase and sell your assets? </span>
            </h1>
            <h2 className="text-sml md:text-md xl:text-3xl font-bold mb-10 tracking-tight text-teal-500">
                <Typewriter

                    options={{
                        strings: [

                            "Our platform allows you to",
                            "Mint your assets to NFTs",
                            "And display them with backing documents that can be bought by anyone.",
                            "Our system ensures that ownership is transferred securely and seamlessly.",
                            "Join the NFT revolution with our cutting-edge platform that enables you to mint and sell your assets with ease.",
                            "With our system, you can display your assets with backing documents as NFTs that can be bought by anyone.",
                            "Ownership transfer is also streamlined, making the buying and selling process as smooth as possible.",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 25,
                    }}
                />
            </h2>
            <div className='flex justify-center'>
                <button className=' inline-block mt-10 justify-center space bg-white px-5 py-2
            rounded-full text-yellow-600 shadow-md shadow-gray-900 hover:shadow-yellow-800 
            text-sm uppercase leading-tight border border-yellow-600'
                    onClick={() => setGlobalState('showModal', 'scale-100')}
                >
                    Mint Asset
                </button>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <div className='flex flex-col justify-center items-center bg-teal-50 
                h-20 border  shadow-md  w-full'>
                    <span className='text-yellow-500 font-bold text-lg leading-5'> {0} </span>
                    <span>Assets </span>
                </div>
                <div className='flex flex-col justify-center items-center bg-teal-50 
                h-20 border border-white shadow-md  w-full'>
                    <span className='text-yellow-500 font-bold text-lg leading-5'> {0} </span>
                    <span>Buyers </span>
                </div>

            </div>
        </div>
    )
}

export default Hero