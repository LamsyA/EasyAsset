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
        const transaction = await contract.createAsset( title,description, credential , price)
        console.log("Created Asset:", transaction)
      return true
    } catch (error) {
      reportError(error)
    }
  }

  const listAssets = async () => {
    try {
        if (!ethereum) return alert("Please install Metamask")
        const connectedAccount = getGlobalState("connectedAccount")
        const contract = await getContract() 
        const assets = await contract.getAssets() 
        setGlobalState('assets', restructuredAssets(assets))
        console.log( restructuredAssets(asset))
    } catch (error) {
      reportError(error)
    }
  }
  const listAsset = async (id) => {
    try {
        if (!ethereum) return alert("Please install Metamask")
        const contract = await getContract() 
        const asset = await contract.getAsset(id) 
        console.log("asset", restructuredAssets([asset])[0])
        // setGlobalState('asset', asset)
        setGlobalState('asset', restructuredAssets([asset])[0])
        // console.log("asset", asset)
    } catch (error) {
      reportError(error.message)
    }
  }
  const listBuyers = async () => {
    try {
        if (!ethereum) return alert("Please install Metamask")
        const contract = await getContract()
        const buyers = await contract.getBuyers()
        setGlobalState('assets', restructuredAssets(buyers))
        console.log("list of Buyers:", buyers)
      return true
    } catch (error) {
      reportError(error)
    }
  }

  const restructuredAssets = (assets) =>
  assets
    .map((asset) => ({
      id: asset.id.toNumber(),
      price: parseInt(asset.price._hex) / 10 ** 18,
      holder: asset.holder.toLowerCase(),
      title: asset.title,
      description: asset.description,
    //   timestamp: new Date(asset.timestamp.toNumber()).getTime(),
      timestamp: toDate(asset.timestamp.toNumber() * 1000),
      credential: asset.credential,
      status: asset.status,
    }))
    .reverse()

const toDate = (timestamp) => {
  const date = new Date(timestamp)
  const dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
  const mm =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  const yyyy = date.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

const reportError = (error) => {
    console.log(error.message)
    throw new Error('No ethereum object found')
}

export {
    connectWallet,
    isWalletConnected,
    getContract,
    addAsset,
    listAssets,
    listBuyers,
    listAsset,
}