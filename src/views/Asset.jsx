import { useEffect, useState } from "react"
import AssetDetails from "../component/AssetDetails"
import BuyButton from "../component/BuyButton"
import Buyer from "../component/Buyer"
import ConfirmButton from "../component/ConfirmButton"
import Refund from "../component/Refund"
import { useGlobalState } from "../store"
import { useParams } from "react-router-dom"
import { ProbeAsset, listAsset, listBuyers, listRefund } from "../services/Blockchain"
import RefundStatus from "../component/RefundStatus"
import ProbeButton from "../component/ProbeButton"
import ReleaseButton from "../component/ReleaseButton"


const Asset = () => {

    const { id } = useParams()
    const [asset] = useGlobalState('asset')
    const [buyers] = useGlobalState('buyers')
    const [refund] = useGlobalState('refund')

    const [loaded, setLoaded] = useState(false)
    useEffect (  () => {
        const loadData = async () => {
          console.log('Blockchain loaded')
          setLoaded(true);
          const result = await  listAsset(id)  
          await listBuyers(id)
          await listRefund(id)
          
             
      };
       loadData();
        
      },[])

   
    return (
        <>
            <AssetDetails asset={asset} buyers={buyers}/>
            <Buyer buyers={buyers} asset={asset} />
            <BuyButton  asset={asset}/>
            <Refund asset={asset} buyers={buyers}/>
            <ConfirmButton asset={asset} buyers={buyers} />
            <RefundStatus buyers={buyers} refund={refund}  />
            <ProbeButton asset={asset} buyers={buyers} />
            <ReleaseButton asset={asset} buyers={buyers} />

        </>
    )
}

export default Asset