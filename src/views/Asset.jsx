import AssetDetails from "../component/AssetDetails"
import BuyButton from "../component/BuyButton"
import Buyer from "../component/Buyer"
import ConfirmButton from "../component/ConfirmButton"
import Refund from "../component/Refund"


const Asset = () => {
    return (
        <>
            <AssetDetails />
            <Buyer/>
            <BuyButton />
            <Refund />
            <ConfirmButton />

        </>
    )
}

export default Asset