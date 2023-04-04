import AssetDetails from "../component/AssetDetails"
import BuyButton from "../component/BuyButton"
import Buyer from "../component/Buyer"
import Refund from "../component/Refund"


const Asset = () => {
    return (
        <>
            <AssetDetails />
            <Buyer/>
            <BuyButton />
            <Refund />
        </>
    )
}

export default Asset