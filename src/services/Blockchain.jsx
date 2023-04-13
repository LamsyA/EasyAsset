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
const isWalletConnected = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask')
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
  
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload()
      })
  
      window.ethereum.on('accountsChanged', async () => {
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
        await isWalletConnected()
      })
  
      if (accounts.length) {
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
      } else {
        alert('Please connect wallet.')
        console.log('No accounts found.')
      }
    } catch (error) {
      reportError(error)
    }
  }
  const getContract = async () => {
    const connectedAccount = getGlobalState('connectedAccount')
  
    if (connectedAccount) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, contractAbi, signer)
      return contract
    } else {
      return getGlobalState('contract')
    }
  
  }

  const addAsset = async ({title,description, credential , price}) => {
    try {
        if (!ethereum) return alert("Please install Metamask")
        const connectedAccount = getGlobalState("connectedAccount")
        const contract = await getContract()
        price = ethers.utils.parseEther(price)
        const transaction = await contract.createAsset( title,description, credential , {
            from: connectedAccount,
            value: price._hex,
          })
      return true
    } catch (error) {
      reportError(error)
    }
  }

const reportError = (error) => {
    console.log(error.message)
    throw new Error('No ethereum object found')
}

export {
    connectWallet,
    isWalletConnected,
}