import { createGlobalState } from 'react-hooks-global-state'


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    showModal: 'scale-0',
    buyModal: 'scale-0',
    refundModal: 'scale-0',
    confirmModal: 'scale-0',
    probeModal: 'scale-0',
    releaseModal: 'scale-0',
    loading: {show: false, msg: ''},
    alert: {show: false, msg: '', color: ''},
    connectedAccount: '',
    contract: null,
    assets : [],
    asset: null,
    buyers : [],
    refund: [],
    owner: '',
    NumberOfAsset: '',
    NumberOFBuyer: '',
    
})

const setAlert = (msg, color = 'green') => {
    setGlobalState('loading', {show: false, msg: ''})
    setGlobalState('alert', {show: true, msg, color}) 
    setTimeout(() =>{
    setGlobalState('alert', {show: false, msg, color}) 

    }, 6000)
}

const setMsgLoading =(msg) => {
    setGlobalState('loading', {show: true, msg})
}
const shortenString = (str, firstLength, lastLength)  =>{
    let firstChars = str.toString().substr(0, firstLength);
    let lastChars = str.toString().substr(-lastLength);
  
    return firstChars + "..." + lastChars;
  }
  

export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
    setMsgLoading,
    setAlert,
    shortenString
}