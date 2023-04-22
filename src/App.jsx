import Hero from "./component/Hero"
import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./views/Home"
import Asset from "./views/Asset"
import Alert from "./store/Alert"
import Loader from "./store/Loader"
import { useEffect, useState } from "react"
import { getContract, getOwner, isWalletConnected, listAssets, listBuyers} from "./services/Blockchain"


function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect (  () => {
    const loadData = async () => {
      console.log('Blockchain loaded')
      setLoaded(true);
      const result = await isWalletConnected()
      await getContract()
      await listAssets();
      await getOwner()

  
  };
   loadData();
    
 
  },[])

  return (
    <div className='min-h-screen relative'>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets/:id" element={<Asset />} />

      </Routes>
      <Alert/>
      <Loader/>
    </div>
  )
}

export default App
