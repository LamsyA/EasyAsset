import Assets from "../component/Assets"
import Hero from "../component/Hero"

const Home = () => {
    return (
        <>
            <Hero />
            <Assets />
            <div className="flex justify-center items-center my-5 ">
                <button className=' inline-block justify-center space bg-yellow-500 px-5 py-2
            rounded-full text-white shadow-md shadow-gray-900 hover:shadow-yellow-800 font-semibold
            text-sm uppercase leading-tight border border-white'>
                    Load More
                </button>
            </div>
        </>
    )
}

export default Home