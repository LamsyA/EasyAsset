import { useEffect, useState } from "react"
import AssetDetails from "../component/AssetDetails"
import BuyButton from "../component/BuyButton"
import Buyer from "../component/Buyer"
import ConfirmButton from "../component/ConfirmButton"
import Refund from "../component/Refund"
import { useGlobalState } from "../store"
import { useParams } from "react-router-dom"
import { listAsset } from "../services/Blockchain"


const Asset = () => {

    const { id } = useParams()
    const [asset] = useGlobalState('asset')

    const [loaded, setLoaded] = useState(false)
    useEffect (  () => {
        const loadData = async () => {
          console.log('Blockchain loaded')
          setLoaded(true);
          const result = await  listAsset(id)     
      };
       loadData();
        
      },[])

   
    return (
        <>
            <AssetDetails asset={asset} />
            <Buyer />
            <BuyButton  asset={asset}/>
            <Refund />
            <ConfirmButton />

        </>
    )
}

export default Asset