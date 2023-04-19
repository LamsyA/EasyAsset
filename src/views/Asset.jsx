import { useEffect } from "react"
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
    useEffect(async () => {
        await listAsset(id)
    }, [])
    return (
        <>
            <AssetDetails  />
            <Buyer/>
            <BuyButton  />
            <Refund />
            <ConfirmButton />

        </>
    )
}

export default Asset