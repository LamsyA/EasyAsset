import abi from '../abis/contracts/EasyAsset.sol/EasyAsset.json'
import address from '../abis/contractAddress.json'
import { getGlobalState, setGlobalState } from '../store'
import { ethers } from 'ethers'

const {ethereum } = window
const contractAddress =  address.address
const contractAbi = abi.abi

const connectWallet = async () => {
    try {
        if (!ethereum) return alert('Wallet not found')
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
    }catch(error){
        reportError(error)
    }
}

const reportError = (error) => {
    console.log(error.message)
    throw new Error('No ethereum object found')
}

export {
    connectWallet
}