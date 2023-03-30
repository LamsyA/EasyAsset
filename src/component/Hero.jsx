import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div className="text-center bg-gray-300  py-32 px-5">
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold mb-12 tracking-tight ">
                <span className="xl:text-3xl capitalize mb-5 text-blue-800"> Looking for a new way to showcase and sell your assets? </span>
            </h1>
            <h2 className="text-sml md:text-md xl:text-3xl font-bold mb-10 tracking-tight text-white">
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
            <button className=' inline-block justify-center space bg-white px-5 py-2
            rounded-full text-blue-500 shadow-md shadow-gray-900 hover:shadow-blue-400 
            text-sm uppercase leading-tight border border-blue-500'>
                Mint Asset
            </button>



        </div>
    )
}

export default Hero