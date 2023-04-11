
import { useGlobalState } from './index'

const Loader = () => {
  const [loading] = useGlobalState('loading')
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex
    items-center justify-center bg-black bg-opacity-50 transform 
    transition-transform duration-300 ${loading.show ?
     'scale-100' : 'scale-0'}`}
    >
        <div className='bg-blue-500 shadow-xl shadow-red-50 
        rounded-xl min-w-min px-10 pb-2 text-white'>
            <div className='flex  flex-col'>
                <div className='flex justify-center items-center'>
                    <div className='lds-dual-ring scale-50'></div>
                    <p className='text-base'>Processing... </p>
                </div>
               <small className='text-center'>{loading.msg}</small>
            </div>
        </div>
    </div>
  )
}

export default Loader